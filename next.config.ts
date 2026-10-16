import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['googleapis'],
  async redirects() {
    const rawLms = process.env.NEXT_PUBLIC_LMS_URL;
    const lmsBase = (!rawLms || rawLms.includes("hostingersite.com") || rawLms.includes("indigo-falcon"))
      ? "https://lms.spectrummalaysia.org"
      : rawLms.replace(/\/$/, "");

    return [
      {
        source: '/login',
        destination: `${lmsBase}/login`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
