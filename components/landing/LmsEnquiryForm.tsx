"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";
import { LMS_PLANS } from "@/lib/lms-builder";

const fieldStyle = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500";

export function LmsEnquiryForm() {
  const [draft, setDraft] = useState<{ body: string; href: string } | null>(null);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    const body = [
      "Hello Spectrum team, I would like an SP LMS Builder consultation.", "",
      `Name: ${value("name")}`, `Organisation: ${value("organisation")}`,
      `Email: ${value("email")}`, `Phone: ${value("phone") || "Not provided"}`,
      `Plan of interest: ${value("plan")}`, `Expected active learners: ${value("learners")}`,
      `Trainers / administrators: ${value("trainers")}`, `Live classes: ${value("liveClasses")}`,
      `Preferred launch: ${value("launch") || "To discuss"}`, "",
      `Requirements: ${value("requirements") || "Please help us assess the right package."}`,
    ].join("\n");
    setDraft({ body, href: `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent("SP LMS Builder quotation enquiry")}&body=${encodeURIComponent(body)}` });
  }

  return (
    <form onSubmit={prepareEnquiry} onChange={() => setDraft(null)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold" htmlFor="lms-name">Full name *<input id="lms-name" name="name" autoComplete="name" required maxLength={100} className={fieldStyle} /></label>
        <label className="text-sm font-semibold" htmlFor="lms-organisation">Organisation *<input id="lms-organisation" name="organisation" autoComplete="organization" required maxLength={150} className={fieldStyle} /></label>
        <label className="text-sm font-semibold" htmlFor="lms-email">Email *<input id="lms-email" name="email" type="email" autoComplete="email" required maxLength={150} className={fieldStyle} /></label>
        <label className="text-sm font-semibold" htmlFor="lms-phone">Phone<input id="lms-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={fieldStyle} /></label>
        <label className="text-sm font-semibold" htmlFor="lms-plan">Plan of interest<select id="lms-plan" name="plan" defaultValue="Help me choose" className={fieldStyle}><option>Help me choose</option>{LMS_PLANS.map(plan => <option key={plan.name}>{plan.name}</option>)}</select></label>
        <label className="text-sm font-semibold" htmlFor="lms-learners">Expected active learners *<input id="lms-learners" name="learners" type="number" min={1} max={10000000} step={1} required className={fieldStyle} /></label>
        <label className="text-sm font-semibold" htmlFor="lms-trainers">Trainers / administrators *<input id="lms-trainers" name="trainers" type="number" min={1} max={100000} step={1} required className={fieldStyle} /></label>
        <label className="text-sm font-semibold" htmlFor="lms-live">Live-class needs<select id="lms-live" name="liveClasses" defaultValue="To discuss" className={fieldStyle}><option>To discuss</option><option>Recorded learning only</option><option>Occasional live classes</option><option>Regular live classes</option><option>Multiple simultaneous classes</option></select></label>
      </div>
      <label className="block text-sm font-semibold" htmlFor="lms-launch">Preferred launch date<input id="lms-launch" name="launch" type="date" className={fieldStyle} /></label>
      <label className="block text-sm font-semibold" htmlFor="lms-requirements">Features and requirements<textarea id="lms-requirements" name="requirements" rows={4} maxLength={1500} placeholder="Tell us about courses, branches, migration, AI or live classes." className={fieldStyle} /></label>
      <p className="text-sm leading-relaxed text-slate-600" id="lms-email-help">This prepares an email to {COMPANY_INFO.contact.email}. Review it and press Send in your email app. Nothing is submitted or saved by this form.</p>
      <button type="submit" aria-describedby="lms-email-help" className="rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">Prepare quotation enquiry</button>
      {draft && <div role="status" className="space-y-4 rounded-2xl border border-orange-200 bg-orange-50 p-5">
        <p className="font-semibold">Your enquiry is ready to review. It has not been sent.</p>
        <a href={draft.href} className="inline-block rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700">Open draft in email app</a>
        <p className="text-sm text-slate-600">No email app available? Copy the text below into your preferred email service and send it to {COMPANY_INFO.contact.email}.</p>
        <label htmlFor="lms-draft" className="block text-sm font-semibold">Enquiry text</label>
        <textarea id="lms-draft" readOnly value={draft.body} rows={9} className={fieldStyle} />
      </div>}
      <noscript><p>Email <a className="underline" href={`mailto:${COMPANY_INFO.contact.email}`}>{COMPANY_INFO.contact.email}</a> with your organisation, learner count and LMS requirements.</p></noscript>
    </form>
  );
}
