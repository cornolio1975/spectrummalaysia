import { LMS_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shield, Award, Users, ChevronRight, FileText, Globe2, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";
import { SpectrumLogo } from "./SpectrumLogo";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Glows & Accent Gradients matching the PDF branding (Red, Orange, Amber, Navy) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-orange-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Company Profile Headline, Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* HRD Corp Registered Training Provider Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-amber-500/30 text-xs font-semibold text-slate-200 shadow-md mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="tracking-wider uppercase font-['Sora'] text-[11px] text-amber-300 font-bold">
                HRD Corp Registered Training Provider
              </span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-400 text-[11px]">
                Valid 22 Jul 2026 – 21 Jul 2027
              </span>
            </div>

            {/* Official Company Title */}
            <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase font-['Sora'] mb-2 flex items-center gap-2">
              <span>{COMPANY_INFO.name}</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">
                {COMPANY_INFO.registrationNo}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-['Sora'] mb-6">
              Empowering Minds.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                Building Futures.
              </span>
            </h1>

            {/* Supporting Mission Paragraph from PDF */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              A premier Malaysian education and training company delivering comprehensive{" "}
              <strong className="text-white font-semibold">Corporate Training</strong>,{" "}
              <strong className="text-white font-semibold">Student Recruitment</strong>, and{" "}
              <strong className="text-white font-semibold">Lifelong Learning</strong>.{" "}
              <span className="text-amber-300 font-medium italic">
                Our mission: to bridge the gap between education and professional success.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#programmes"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore 45 HRD Corp Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href={LMS_URL}
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Access LMS Portal</span>
              </Link>

              <a
                href="#hrd-claim"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline py-2 px-1 transition-colors"
              >
                <span>How to Claim HRD Corp Levy</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% HRD Corp Claimable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MQA & JPK Micro-Credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certified TTT Trainers Nationwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card / PDF Identity Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl transform -rotate-1" />

            {/* Showcase Card */}
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <SpectrumLogo size="lg" variant="full" />
              </div>

              {/* Company Status Pill */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-950/70 border border-amber-500/20">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Sora']">
                      Pembangunan Sumber Manusia Berhad (Act 2001)
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Certificate Serial No: <strong className="text-amber-300 font-mono">202201007933</strong>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      All 45 programmes can be claimed against your HRD Corp levy (public, in-house, or online).
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Divisions Quick Matrix */}
              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between group transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center font-mono text-xs font-bold">
                      01
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        Corporate Training
                      </div>
                      <div className="text-[11px] text-slate-400">45 claimable programmes across 9 industries</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between group transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center font-mono text-xs font-bold">
                      02
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        Student Recruitment
                      </div>
                      <div className="text-[11px] text-slate-400">Nationwide agents & international partnerships</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between group transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-mono text-xs font-bold">
                      03
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        Lifelong Learning
                      </div>
                      <div className="text-[11px] text-slate-400">MQA & JPK micro-credentials stackable to degree</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Delivering Excellence Since 2012</span>
                </span>
                <span className="font-semibold text-slate-300">5,000+ Alumni</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
