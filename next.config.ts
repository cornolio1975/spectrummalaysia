import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['googleapis'],
  async redirects() {
    return [
      {
        source: '/login',
        destination: process.env.NEXT_PUBLIC_LMS_URL 
          ? `${process.env.NEXT_PUBLIC_LMS_URL}/login` 
          : 'https://lms.spectrummy.com/login',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
