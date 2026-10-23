import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, BookOpen, Globe2, Sparkles, Video, Layers, Headphones } from "lucide-react";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LmsEnquiryForm } from "@/components/landing/LmsEnquiryForm";
import { LMS_PLANS, LMS_COMPARISON } from "@/lib/lms-builder";

export const metadata: Metadata = {
  title: "SP LMS Builder — From Simple LMS to Enterprise",
  description: "Explore SP LMS Launch, Growth and Enterprise: branded learning platforms with domain, managed hosting, AI and Google Meet setup. Powered by SP Digital Systems.",
  alternates: { canonical: "/sp-lms-builder" },
  openGraph: {
    title: "SP LMS Builder | Powered by SP Digital Systems",
    description: "Your own learning platform. Built to grow. Compare three tailored LMS packages and request a consultation.",
    url: "https://spectrummalaysia.org/sp-lms-builder",
    images: [{ url: "/images/lms-learning-platform.jpg", alt: "Digital learning and online training" }],
  },
};

const features = [
  { icon: BookOpen, title: "Teach your way", description: "Bring courses, learner enrolment, assessments, certificates and progress reporting into one learning space." },
  { icon: Globe2, title: "Make it yours", description: "Launch with your brand and domain, managed hosting and SSL, with capacity agreed around your audience." },
  { icon: Sparkles, title: "Add useful AI", description: "Scope assistance for course outlines, quiz drafts or learner support, with an agreed usage allowance and trainer review." },
  { icon: Video, title: "Connect live learning", description: "Include Google Meet setup, then choose the class links, scheduling or calendar integration your team needs." },
  { icon: Layers, title: "Grow with a plan", description: "Discuss learning paths, branches, organisation structures and integrations as your requirements develop." },
  { icon: Headphones, title: "Get help to launch", description: "Agree your onboarding, content migration, administrator training and ongoing support before work begins." },
];

const faqs = [
  { question: "Is this the Spectrum learner portal?", answer: "SP LMS Builder is a service for organisations that want their own learning platform. Existing Spectrum learners should use Access LMS in the navigation." },
  { question: "What does the all-in package cover?", answer: "Each quotation brings together LMS setup, domain connection or an agreed standard domain, managed hosting, SSL, AI setup, Google Meet setup and administrator onboarding. The quotation states the coverage period, renewals, licences, capacity and support scope." },
  { question: "Are AI usage and Google Workspace licences unlimited?", answer: "No. AI usage allowances and additional usage charges are agreed in the quotation. Google Workspace licences, meeting capacity, recordings and attendance features depend on the selected Google plan and permissions; setup alone does not include every paid feature." },
  { question: "Can we start small and upgrade?", answer: "Yes. Start by discussing the Launch package. We will assess the capacity, migration and feature changes needed before agreeing a move to Growth or Enterprise." },
  { question: "Can you migrate our current courses and learners?", answer: "We assess your source files, content rights, formats and data volume during consultation. The migration scope, responsibilities and timeline are confirmed before you commit." },
  { question: "What will it cost, and when can we launch?", answer: "Pricing is quotation-based while packages are being finalised. We confirm implementation scope, recurring services, usage limits and a realistic launch schedule after reviewing your requirements." },
];

export default function LmsBuilderPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans']">
      <a href="#lms-main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
      <LandingHeader />
      <main id="lms-main">
        <section className="bg-orange-50/50 px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-700">Division 04 / SaaS LMS Solutions</p>
              <p className="mb-5 text-lg font-bold">SP LMS Builder <span className="block text-sm font-normal text-slate-600">Powered by SP Digital Systems</span></p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl font-['Sora']">Your own learning platform.<span className="block text-orange-600">Built to grow.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">From a simple LMS to an enterprise system, give your learners a space that carries your brand. Spectrum brings you SP LMS Builder, the LMS product division of SP Digital Systems.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#plans" className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Explore the plans <ArrowRight className="h-4 w-4" /></a>
                <a href="#enquire" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:border-orange-500">Request a consultation</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-lg">
              <Image src="/images/lms-learning-platform.jpg" alt="Learning with a digital platform" width={1000} height={650} priority sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[16/10] w-full object-cover" />
              <div className="grid grid-cols-3 divide-x divide-slate-200 p-5 text-center text-xs font-bold text-slate-700 sm:text-sm"><span>Launch</span><span>Growth</span><span>Enterprise</span></div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Built around your learners</p><h2 className="mt-3 text-3xl font-bold font-['Sora']">One service. A clear path forward.</h2><p className="mt-4 leading-relaxed text-slate-600">For independent trainers, tuition centres, training companies, colleges and larger organisations. We start with your delivery needs and agree the features that fit.</p></div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, description }) => <div key={title} className="border-t border-slate-200 pt-6"><Icon className="mb-4 h-6 w-6 text-orange-600" /><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div>)}</div>
        </section>

        <section id="plans" className="scroll-mt-28 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Three packages / Your next stage</p><h2 className="mt-3 text-3xl font-bold font-['Sora']">Start where you are.</h2><p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Choose a starting point for your consultation. Package features, availability, capacity and delivery dates are confirmed in your proposal before sign-off. Prices will be confirmed by quotation.</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">{LMS_PLANS.map((plan, index) => <article key={plan.name} className={`flex flex-col rounded-3xl border bg-white p-6 sm:p-8 ${index === 1 ? "border-orange-400 shadow-lg shadow-orange-100" : "border-slate-200"}`}><p className="text-xs font-bold uppercase tracking-wider text-orange-700">0{index + 1}</p><h3 className="mt-4 text-2xl font-bold font-['Sora']">{plan.name}</h3><p className="mt-2 text-sm font-semibold text-slate-700">{plan.audience}</p><p className="mt-4 text-sm leading-relaxed text-slate-600">{plan.summary}</p><p className="my-6 border-y border-slate-100 py-4 font-bold">{index === 2 ? "Tailored enterprise quotation" : "Request quotation"}</p><ul className="mb-8 space-y-4">{plan.highlights.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />{item}</li>)}</ul><a href="#enquire" className="mt-auto rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white hover:bg-orange-700">Discuss {plan.name.replace("SP LMS ", "")}</a></article>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold font-['Sora']">Compare your options</h2><p id="comparison-help" className="mt-3 text-sm text-slate-600">Package scope is agreed by quotation. On small screens, scroll the table to compare all three plans.</p><div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600" role="region" aria-label="LMS package comparison" aria-describedby="comparison-help" tabIndex={0}><table className="w-full min-w-[760px] border-collapse text-left text-sm"><caption className="sr-only">Proposed SP LMS package scope, subject to agreed quotation</caption><thead className="bg-slate-900 text-white"><tr><th scope="col" className="p-5">Scope</th>{LMS_PLANS.map(plan => <th scope="col" key={plan.name} className="p-5">{plan.name}</th>)}</tr></thead><tbody>{LMS_COMPARISON.map(row => <tr key={row.feature} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-5 align-top font-semibold">{row.feature}</th>{row.values.map((value, index) => <td key={index} className="p-5 align-top leading-relaxed text-slate-600">{value}</td>)}</tr>)}</tbody></table></div>
          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6"><h3 className="font-bold">All-in setup, with clear allowances</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">LMS setup, domain connection or an agreed standard domain, hosting, SSL, AI setup, Google Meet setup and admin onboarding are bundled in your quotation. We specify domain renewals, learner capacity, storage, video delivery, AI usage, Google licences and support coverage. Dedicated hosting, migration and custom development are scoped where needed.</p></div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-bold font-['Sora']">From first conversation to launch</h2><ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">{[
          ["Consultation", "Understand your learners, content and delivery goals."], ["Setup", "Agree the package, branding, domain and services."], ["Content onboarding", "Prepare courses and assess any migration needs."], ["Team training", "Help administrators and trainers get ready."], ["Launch & support", "Complete agreed checks and begin your support plan."],
        ].map(([title, description], index) => <li key={title}><span className="text-sm font-bold text-orange-300">0{index + 1}</span><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p></li>)}</ol></div></section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold font-['Sora']">Before we get started</h2><div className="mt-8 divide-y divide-slate-200">{faqs.map(faq => <details key={faq.question} className="group py-5"><summary className="cursor-pointer text-base font-semibold marker:text-orange-600">{faq.question}</summary><p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p></details>)}</div></section>

        <section id="enquire" className="scroll-mt-28 border-t border-slate-200 bg-orange-50/40 px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5"><div className="lg:col-span-2"><p className="text-xs font-bold uppercase tracking-widest text-orange-700">Let’s plan your platform</p><h2 className="mt-3 text-3xl font-bold font-['Sora']">Tell us what you want to build.</h2><p className="mt-4 leading-relaxed text-slate-600">Share your learner numbers, live-class needs and timeline. We will use your enquiry to discuss the right scope and prepare a quotation.</p><p className="mt-6 text-sm font-semibold">SP LMS Builder<span className="block font-normal text-slate-600">Powered by SP Digital Systems<br />Presented by Spectrum Edu Resources</span></p></div><div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-3"><LmsEnquiryForm /></div></div></section>
      </main>
      <LandingFooter />
    </div>
  );
}
