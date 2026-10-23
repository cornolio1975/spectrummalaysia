export const LMS_PLANS = [
  {
    name: "SP LMS Launch",
    audience: "Independent trainers & small learning centres",
    summary: "Start with the essentials for your own online learning space.",
    highlights: ["Courses, quizzes and certificates", "Your logo, colours and domain", "Starter AI assistance allowance", "Google Meet account setup and class links", "Admin orientation and standard support"],
  },
  {
    name: "SP LMS Growth",
    audience: "Growing academies & training businesses",
    summary: "Bring more learners, trainers and everyday workflows together.",
    highlights: ["Learning paths and reusable question banks", "Expanded branding and catalogue options", "Larger AI allowance and learner assistance", "Live-class scheduling and calendar integration", "Assisted migration and priority support"],
  },
  {
    name: "SP LMS Enterprise",
    audience: "Institutions & large organisations",
    summary: "Shape your learning system around your organisation and delivery needs.",
    highlights: ["Organisation structures and tailored portals", "Custom workflows and scoped integrations", "Agreed AI controls and knowledge support", "Organisation-wide Google Meet setup", "Dedicated infrastructure and support options"],
  },
] as const;

export const LMS_COMPARISON = [
  { feature: "Learning tools", values: ["Courses, quizzes, certificates and basic reports", "Adds learning paths, question banks and automation", "Adds custom workflows and organisation structures"] },
  { feature: "Domain & branding", values: ["Logo, colours and own domain", "Expanded branding and catalogue", "Tailored portals and full branding scope"] },
  { feature: "Managed hosting", values: ["Shared platform", "Higher agreed capacity", "Dedicated infrastructure option"] },
  { feature: "AI assistance", values: ["Starter usage allowance", "Larger allowance and learner assistance", "Agreed usage, controls and knowledge support"] },
  { feature: "Google Meet", values: ["Account setup and class links", "Scheduling and calendar integration", "Organisation setup and scoped integrations"] },
  { feature: "Onboarding & support", values: ["Admin orientation and standard support", "Assisted migration and priority support", "Planned rollout and agreed service arrangements"] },
] as const;
