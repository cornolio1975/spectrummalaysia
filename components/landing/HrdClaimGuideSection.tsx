import { ArrowRight, Search, FileText, Landmark, Presentation, Receipt, ShieldCheck, Laptop, Building2, Users2, Layers } from "lucide-react";
import { COMPANY_INFO, HRD_CORP_CLAIM_STEPS } from "@/lib/spectrum-profile-data";

export function HrdClaimGuideSection() {
  const stepIcons = [Search, FileText, Landmark, Presentation, Receipt];

  const deliveryOptions = [
    { title: "Public Programmes", desc: "Scheduled open-intake classes bringing diverse peers together.", icon: Users2 },
    { title: "In-House Programmes", desc: "Customized on-site corporate training at your office or venue.", icon: Building2 },
    { title: "Remote Online Training", desc: "Live instructor-led masterclasses with interactive digital labs.", icon: Laptop },
    { title: "Blended / Hybrid", desc: "Optimal combination of asynchronous LMS content and live workshops.", icon: Layers },
  ];

  return (
    <section id="hrd-claim" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background radial glowing effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Pembangunan Sumber Manusia Berhad (Act 2001)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Sora']">
            From Training Need to HRD Corp Claim
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Maximize your HRD Corp levy utilization. We manage the end-to-end grant workflow — from training needs assessment to grant approval, execution, and seamless claim submission.
          </p>
        </div>

        {/* Official Employer Benefits Banner */}
        <div className="p-8 rounded-3xl bg-slate-950/90 border border-amber-500/30 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-['Sora']">
                Official Certification Details
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Sora'] mt-1">
                HRD Corp Registered Training Provider
              </h3>
              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Registered Name:</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.hrdCorp.status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Certificate Serial No:</span>
                  <span className="font-mono font-bold text-amber-300">{COMPANY_INFO.hrdCorp.certificateSerialNo}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Validity Period:</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.hrdCorp.approvalDate} – {COMPANY_INFO.hrdCorp.expiryDate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Registered Under:</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.hrdCorp.act}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-['Sora']">
                What this means for employers
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-['Sora'] mt-1 mb-4">
                Full Document & Claim Support with Zero Guesswork
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>100% Levy Claimable:</strong> Course fees can be claimed against your accumulated HRD Corp levy balance, subject to grant approval.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Flexible Delivery Formats:</strong> Choose between public intakes, customized in-house corporate workshops, or remote online classes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Complete Grant Lifecycle Management:</strong> We furnish official course outlines, trainer credentials, attendance sheets, and post-training evaluation reports.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 5-Step Process Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-['Sora']">
              The 5-Step HRD Corp Claim Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Simple, transparent steps from initial skill assessment to levy disbursement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {HRD_CORP_CLAIM_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Search;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/40 transition-all duration-200 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 text-white font-bold text-sm flex items-center justify-center font-['Sora'] shadow-md">
                        {step.step}
                      </span>
                      <Icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <h4 className="text-base font-bold text-white font-['Sora'] mb-1 group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h4>

                    <div className="text-xs font-semibold text-amber-400/90 mb-2">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Options Grid */}
        <div>
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-white font-['Sora']">
              Multi-Modal Training Delivery Options
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3.5 hover:border-slate-700 transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white font-['Sora']">{opt.title}</h5>
                    <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
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
