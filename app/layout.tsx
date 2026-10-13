import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spectrum Edu Resources (M) Sdn. Bhd. — HRD Corp Registered Training Provider",
    template: "%s | Spectrum Edu Resources",
  },
  description:
    "Empowering Minds. Building Futures. Spectrum Edu Resources (M) Sdn. Bhd. (Co. No. 202201007933) is a Malaysian education and training company delivering HRD Corp claimable corporate training, student recruitment, and lifelong micro-credentials.",
  keywords: [
    "Spectrum Edu Resources",
    "Spectrum Edu Resources (M) Sdn. Bhd.",
    "HRD Corp Registered Training Provider",
    "HRD Corp Claimable Courses",
    "Corporate Training Malaysia",
    "Student Recruitment Malaysia",
    "Lifelong Learning",
    "MQA Micro-credentials",
    "JPK",
    "Program Madani",
    "PERKESO EIS Reskilling",
  ],
  authors: [{ name: "Spectrum Edu Resources (M) Sdn. Bhd." }],
  openGraph: {
    title: "Spectrum Edu Resources (M) Sdn. Bhd. — HRD Corp Registered Training Provider",
    description:
      "Empowering Minds. Building Futures. Bridging the gap between education and professional success across Corporate Training, Student Recruitment, and Lifelong Learning.",
    type: "website",
    locale: "en_MY",
    url: "https://spectrummalaysia.org",
    siteName: "Spectrum Edu Resources",
    images: [
      {
        url: "/spectrum-logo.png",
        width: 1200,
        height: 400,
        alt: "Spectrum Edu Resources (M) Sdn. Bhd.",
      },
    ],
  },
  icons: {
    icon: "/spectrum-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-amber-500 selection:text-white">{children}</body>
    </html>
  );
}
