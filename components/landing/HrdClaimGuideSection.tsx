import Image from "next/image";
import { ArrowRight, Search, FileText, Landmark, Presentation, Receipt, ShieldCheck, Laptop, Building2, Users2, Layers } from "lucide-react";
import { COMPANY_INFO, HRD_CORP_CLAIM_STEPS } from "@/lib/spectrum-profile-data";

export function HrdClaimGuideSection() {
  const stepIcons = [Search, FileText, Landmark, Presentation, Receipt];

  const deliveryOptions = [
    {
      title: "Public Programmes",
      desc: "Scheduled open-intake classes bringing diverse peers together for cross-industry networking.",
      icon: Users2,
      image: "/images/delivery-public-seminar.jpg",
      badge: "Open Intake",
      tag: "Scheduled Cohorts",
    },
    {
      title: "In-House Programmes",
      desc: "Customized on-site corporate training tailored to your company's specific workforce and KPIs.",
      icon: Building2,
      image: "/images/delivery-inhouse.jpg",
      badge: "On-Site Corporate",
      tag: "Custom Syllabus",
    },
    {
      title: "Remote Online Training",
      desc: "Live instructor-led interactive masterclasses with breakout rooms and hands-on digital labs.",
      icon: Laptop,
      image: "/images/delivery-online.jpg",
      badge: "Live Virtual",
      tag: "Interactive e-Class",
    },
    {
      title: "Blended / Hybrid",
      desc: "Optimal combination of self-paced asynchronous LMS coursework and practical live workshops.",
      icon: Layers,
      image: "/images/delivery-blended.jpg",
      badge: "Hybrid Learning",
      tag: "LMS + Classroom",
    },
  ];

  return (
    <section id="hrd-claim" className="py-12 sm:py-16 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Pembangunan Sumber Manusia Berhad (Act 2001)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Sora']">
            From Training Need to HRD Corp Claim
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Maximize your HRD Corp levy utilization. We manage the end-to-end grant workflow — from training needs assessment to grant approval, execution, and seamless claim submission.
          </p>
        </div>

        {/* Official Employer Benefits Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-md mb-10 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-['Sora']">
                Official Certification Details
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Sora'] mt-1">
                HRD Corp Registered Training Provider
              </h3>
              <div className="mt-4 space-y-2 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Registered Name:</span>
                  <span className="font-semibold text-slate-900">{COMPANY_INFO.hrdCorp.status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Certificate Serial No:</span>
                  <span className="font-mono font-bold text-orange-700">{COMPANY_INFO.hrdCorp.certificateSerialNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Validity Period:</span>
                  <span className="font-semibold text-slate-900">{COMPANY_INFO.hrdCorp.approvalDate} – {COMPANY_INFO.hrdCorp.expiryDate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Registered Under:</span>
                  <span className="font-semibold text-slate-900">{COMPANY_INFO.hrdCorp.act}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-['Sora']">
                What this means for employers
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-['Sora'] mt-1 mb-4">
                Full Document & Claim Support with Zero Guesswork
              </h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-slate-900">100% Levy Claimable:</strong> Course fees can be claimed against your accumulated HRD Corp levy balance, subject to grant approval.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-slate-900">Flexible Delivery Formats:</strong> Choose between public intakes, customized in-house corporate workshops, or remote online classes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-slate-900">Complete Grant Lifecycle Management:</strong> We furnish official course outlines, trainer credentials, attendance sheets, and post-training evaluation reports.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 5-Step Process Cards */}
        <div className="mb-10 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl font-bold text-slate-900 font-['Sora']">
              The 5-Step HRD Corp Claim Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Simple, transparent steps from initial skill assessment to levy disbursement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {HRD_CORP_CLAIM_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Search;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 text-white font-bold text-sm flex items-center justify-center font-['Sora'] shadow-sm">
                        {step.step}
                      </span>
                      <Icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-['Sora'] mb-1 group-hover:text-orange-600 transition-colors">
                      {step.title}
                    </h4>

                    <div className="text-xs font-semibold text-orange-600 mb-2">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Options Grid with Professional Distinct Photos */}
        <div>
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-slate-900 font-['Sora']">
              Multi-Modal Training Delivery Options
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Flexible learning modalities engineered to fit your corporate schedule and team distribution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group overflow-hidden"
                >
                  <div>
                    {/* Delivery Format Photo Header */}
                    <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/80">
                      <Image
                        src={opt.image}
                        alt={opt.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Top Floating Badge */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-800 font-['Sora'] shadow-sm">
                          {opt.badge}
                        </span>
                      </div>

                      {/* Bottom Floating Icon */}
                      <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center text-orange-600 shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h5 className="text-base font-bold text-slate-900 font-['Sora'] group-hover:text-orange-600 transition-colors">
                      {opt.title}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-orange-600">
                    <span>100% Claimable</span>
                    <span className="text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded text-[10px]">{opt.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
