import { getLandingData, fetchPublicSnapshot } from "@/services/landing.service";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { KpiStrip } from "@/components/landing/KpiStrip";
import { AboutSection } from "@/components/landing/AboutSection";
import { CapabilitiesSection } from "@/components/landing/CapabilitiesSection";
import { EcosystemFlowSection } from "@/components/landing/EcosystemFlowSection";
import { ProgrammesCatalogueSection } from "@/components/landing/ProgrammesCatalogueSection";
import { DigitalLearningSection } from "@/components/landing/DigitalLearningSection";
import { TrainerExperienceSection } from "@/components/landing/TrainerExperienceSection";
import { ParticipantExperienceSection } from "@/components/landing/ParticipantExperienceSection";
import { AnalyticsPreviewSection } from "@/components/landing/AnalyticsPreviewSection";
import { AchievementsSection } from "@/components/landing/AchievementsSection";
import { WhySpectrumSection } from "@/components/landing/WhySpectrumSection";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { PublicSnapshotSection } from "@/components/landing/PublicSnapshotSection";

export const revalidate = 60; // Revalidate every minute for dynamic stats

export default async function HomePage() {
  const [{ stats, programmes, achievements, contact }, snapshot] = await Promise.all([
    getLandingData(),
    fetchPublicSnapshot(),
  ]);

  // Structured Data Schema for Educational Platform SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SpectrumMalaysia LMS",
    description:
      "A comprehensive digital learning and programme-management platform connecting learners, trainers, programmes and learning resources through one secure ecosystem.",
    url: "https://spectrummalaysia.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 3A.18, I-01-05, 5th Floor, Block I, Setiawalk, Persiaran Wawasan",
      addressLocality: "Puchong",
      addressRegion: "Selangor",
      postalCode: "47160",
      addressCountry: "MY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      contactType: "customer support",
      email: contact.email,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white font-['Plus_Jakarta_Sans'] antialiased">
      {/* JSON-LD Structured Data */}
      <script
        id="schema-jsonld"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Header Navigation */}
      <LandingHeader />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. KPI Stats Strip */}
        <KpiStrip stats={stats} />

        {/* 3b. Public Snapshot Dashboard */}
        <PublicSnapshotSection snapshot={snapshot} />

        {/* 4. About SpectrumMalaysia LMS */}
        <AboutSection />

        {/* 5. Platform Capabilities */}
        <CapabilitiesSection />

        {/* 6. Learning Ecosystem Flow */}
        <EcosystemFlowSection />

        {/* 7. Programmes Catalogue */}
        <ProgrammesCatalogueSection programmes={programmes} />

        {/* 8. Digital Learning & Media Repository */}
        <DigitalLearningSection />

        {/* 9. Trainer Experience */}
        <TrainerExperienceSection />

        {/* 10. Participant Experience */}
        <ParticipantExperienceSection />

        {/* 11. Management & Analytics */}
        <AnalyticsPreviewSection />

        {/* 12. Achievements & Impact */}
        <AchievementsSection achievements={achievements} />

        {/* 13. Why SpectrumMalaysia LMS */}
        <WhySpectrumSection />

        {/* 14. Trust & Partners */}
        <PartnersSection />

        {/* 15. Call to Action */}
        <CtaSection />

        {/* 16. Contact Details & Form */}
        <ContactSection contact={contact} />
      </main>

      {/* 17. Footer */}
      <LandingFooter />
    </div>
  );
}
