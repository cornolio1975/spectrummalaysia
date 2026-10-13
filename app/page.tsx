import Script from "next/script";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { KpiStrip } from "@/components/landing/KpiStrip";
import { AboutSection } from "@/components/landing/AboutSection";
import { DivisionsSection } from "@/components/landing/DivisionsSection";
import { HrdClaimGuideSection } from "@/components/landing/HrdClaimGuideSection";
import { ProgrammesCatalogueSection } from "@/components/landing/ProgrammesCatalogueSection";
import { StudentRecruitmentSection } from "@/components/landing/StudentRecruitmentSection";
import { LifelongLearningSection } from "@/components/landing/LifelongLearningSection";
import { TrainingGallerySection } from "@/components/landing/TrainingGallerySection";
import { AdvisorsSection } from "@/components/landing/AdvisorsSection";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";

export const revalidate = 60;

export default function HomePage() {
  // Structured Data Schema for Spectrum Edu Resources (M) Sdn. Bhd.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.name,
    description:
      "A premier Malaysian education and training company providing comprehensive HRD Corp claimable corporate training, nationwide student recruitment, and lifelong micro-credentials.",
    url: "https://spectrummalaysia.org",
    logo: "https://spectrummalaysia.org/spectrum-logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.address.suite}, ${COMPANY_INFO.address.building}`,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postcode,
      addressCountry: "MY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.contact.phone,
      contactType: "corporate inquiries",
      email: COMPANY_INFO.contact.email,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white font-['Plus_Jakarta_Sans'] antialiased">
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Header Navigation */}
      <LandingHeader />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. KPI Stats Strip (2012, 5,000+, 25 yrs, 800K, 45 courses, 20+ agents) */}
        <KpiStrip />

        {/* 4. About Spectrum Edu Resources & How We Deliver Value (Pages 2-3) */}
        <AboutSection />

        {/* 5. Our Three Divisions: Corporate Training, Recruitment, Lifelong Learning (Page 4) */}
        <DivisionsSection />

        {/* 6. HRD Corp Registered Provider & 5-Step Claim Process (Pages 5-7) */}
        <HrdClaimGuideSection />

        {/* 7. Complete 45 HRD Corp Programmes across 9 Areas (Pages 8-11) */}
        <ProgrammesCatalogueSection />

        {/* 8. Division 02: Student Recruitment Hub & Global Counterparts (Pages 14-16) */}
        <StudentRecruitmentSection />

        {/* 9. Division 03: Lifelong Learning, MQA/JPK Micro-credentials & Track Record (Pages 12-13) */}
        <LifelongLearningSection />

        {/* 10. Training Sessions, Briefings & Program Madani Gallery (Pages 22-23) */}
        <TrainingGallerySection />

        {/* 11. Board of Advisors (Page 21) */}
        <AdvisorsSection />

        {/* 12. Accreditations, Awarding Bodies & Institutional Partners (Pages 19-20) */}
        <PartnersSection />

        {/* 13. Contact & Workforce Inquiry Form (Page 24) */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <LandingFooter />
    </div>
  );
}
