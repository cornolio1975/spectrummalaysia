import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SpectrumMalaysia LMS — Digital Learning & Programme Management Platform",
    template: "%s | SpectrumMalaysia LMS",
  },
  description:
    "SpectrumMalaysia LMS is a comprehensive digital learning and programme-management platform connecting learners, trainers, programmes, learning resources and performance analytics.",
  keywords: [
    "SpectrumMalaysia",
    "SpectrumMalaysia LMS",
    "Learning Management System",
    "Digital Learning Malaysia",
    "Programme Management",
    "Training Platform",
    "Enterprise LMS",
    "Education Malaysia",
  ],
  authors: [{ name: "SpectrumMalaysia Edu Resources" }],
  openGraph: {
    title: "SpectrumMalaysia LMS — Digital Learning & Programme Management Platform",
    description:
      "Empowering Learning. Connecting Communities. Building Futures. Comprehensive digital learning and programme management platform.",
    type: "website",
    locale: "en_MY",
    url: "https://spectrummalaysia.com",
    siteName: "SpectrumMalaysia LMS",
  },
  icons: {
    icon: "/favicon.ico",
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
