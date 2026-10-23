const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");
const ts = require("typescript");

function loadProxy(user = null) {
  let sessionChecks = 0;
  const compiled = ts.transpileModule(
    fs.readFileSync(path.join(__dirname, "../proxy.ts"), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS } },
  ).outputText;
  const context = {
    exports: {},
    URL,
    require(id) {
      if (id === "next/server") return {
        NextResponse: {
          next: () => ({ kind: "next" }),
          redirect: (url) => ({ kind: "redirect", url: String(url) }),
        },
      };
      if (id === "@/utils/supabase/middleware") return {
        createClient() {
          sessionChecks++;
          return {
            supabase: { auth: { getUser: async () => ({ data: { user } }) } },
            supabaseResponse: { kind: "session" },
          };
        },
      };
      throw new Error(`Unexpected dependency: ${id}`);
    },
  };
  vm.runInNewContext(compiled, context);
  return { proxy: context.exports.proxy, sessionChecks: () => sessionChecks };
}

function request(route) {
  const url = new URL(route, "https://spectrummalaysia.org");
  return { nextUrl: url, url: url.href };
}

test("LMS information page works without an auth service or session", async () => {
  const app = loadProxy();
  const result = await app.proxy(request("/sp-lms-builder?campaign=spectrum"));
  assert.equal(result.kind, "next");
  assert.equal(app.sessionChecks(), 0);
});

test("marketing exception does not expose dashboards or similarly named paths", async () => {
  const app = loadProxy();
  for (const route of ["/dashboard", "/admin/users", "/sp-lms-builder/admin", "/sp-lms-builder-private"]) {
    const result = await app.proxy(request(route));
    assert.equal(result.kind, "redirect", route);
    const location = new URL(result.url);
    assert.equal(location.pathname, "/login");
    assert.equal(location.searchParams.get("redirectTo"), route);
  }
});

test("authenticated LMS access keeps the existing session response", async () => {
  const app = loadProxy({ id: "test-user" });
  assert.equal((await app.proxy(request("/dashboard"))).kind, "session");
  assert.equal(app.sessionChecks(), 1);
});
