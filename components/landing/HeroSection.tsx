import Image from "next/image";
import { LMS_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shield, Award, Users, ChevronRight, FileText, Globe2, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";
import { SpectrumLogo } from "./SpectrumLogo";

export function HeroSection() {
  return (
    <section id="top" className="relative pt-4 pb-8 sm:pt-6 sm:pb-12 overflow-hidden bg-white">
      {/* Background Soft Glows & Accent Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Company Profile Headline, Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 pt-0">
            {/* HRD Corp Registered Training Provider Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 text-xs font-semibold text-amber-900 shadow-sm mb-3.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-wider uppercase font-['Sora'] text-[11px] text-amber-900 font-bold">
                HRD Corp Registered Training Provider
              </span>
              <span className="text-amber-300">•</span>
              <span className="text-amber-700 text-[11px] font-medium">
                Valid 22 Jul 2026 – 21 Jul 2027
              </span>
            </div>

            {/* Official Company Title & Reg Number */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase font-['Sora']">
                {COMPANY_INFO.name}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] text-slate-600 font-mono font-medium">
                {COMPANY_INFO.registrationNo}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-black text-slate-900 tracking-tight leading-[1.08] font-['Sora'] mt-2.5 mb-6">
              Empowering Minds.
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                Building Futures.
              </span>
            </h1>

            {/* Supporting Mission Paragraph from PDF */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-7 font-normal">
              A premier Malaysian education and training company delivering comprehensive{" "}
              <strong className="text-slate-900 font-semibold">Corporate Training</strong>,{" "}
              <strong className="text-slate-900 font-semibold">Student Recruitment</strong>, and{" "}
              <strong className="text-slate-900 font-semibold">Lifelong Learning</strong>.{" "}
              <span className="text-orange-700 font-medium italic block mt-1.5">
                Our mission: to bridge the gap between education and professional success.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <a
                href="#programmes"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore 45 HRD Corp Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href={LMS_URL}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-orange-600" />
                <span>Access LMS Portal</span>
              </Link>

              <a
                href="#hrd-claim"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline py-1.5 px-2 transition-colors"
              >
                <span>How to Claim HRD Corp Levy</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-slate-200/90 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/70 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-700">100% HRD Claimable</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/70 border border-slate-100">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-medium text-slate-700">MQA & JPK Micro-Creds</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/70 border border-slate-100">
                <Shield className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-medium text-slate-700">Certified TTT Trainers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Identity & Division Showcase Card */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl transform -rotate-1" />

            {/* Showcase Card */}
            <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-5 sm:p-6 backdrop-blur-xl">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Sora']">
                    HRD Corp Registered Provider
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-mono font-bold text-orange-700">
                  {COMPANY_INFO.registrationNo}
                </span>
              </div>

              {/* Photo Showcase of Authentic Corporate Training in Malaysia */}
              <div className="relative mt-4 h-44 sm:h-48 w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm group">
                <Image
                  src="/images/hero-training.jpg"
                  alt="Malaysian adult learners and professional corporate trainer in modern classroom workshop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    Interactive Corporate Workshop
                  </span>
                  <span className="bg-orange-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg font-bold">
                    100% SBL-Khas Claimable
                  </span>
                </div>
              </div>

              {/* Company Status Pill */}
              <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-50/90 to-orange-50/90 border border-amber-200/90">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-amber-200 text-orange-600 shrink-0 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Sora']">
                      Pembangunan Sumber Manusia Berhad (Act 2001)
                    </h4>
                    <p className="text-xs text-slate-700 mt-0.5">
                      Certificate Serial No: <strong className="text-orange-700 font-mono">202201007933</strong>
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                      All 45 programmes can be claimed against your HRD Corp levy (public, in-house, or online).
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Divisions Quick Matrix */}
              <div className="mt-4 space-y-2">
                <a
                  href="#programmes"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-red-300 hover:bg-red-50/30 flex items-center justify-between group transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-100 border border-red-200 text-red-700 flex items-center justify-center font-mono text-xs font-bold">
                      01
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                        Corporate Training
                      </div>
                      <div className="text-[11px] text-slate-500">45 claimable programmes across 9 industries</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                </a>

                <a
                  href="#recruitment"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-300 hover:bg-orange-50/30 flex items-center justify-between group transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-orange-100 border border-orange-200 text-orange-700 flex items-center justify-center font-mono text-xs font-bold">
                      02
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                        Student Recruitment
                      </div>
                      <div className="text-[11px] text-slate-500">Nationwide agents & international partnerships</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                </a>

                <a
                  href="#lifelong"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 hover:bg-amber-50/30 flex items-center justify-between group transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-200 text-amber-800 flex items-center justify-center font-mono text-xs font-bold">
                      03
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        Lifelong Learning
                      </div>
                      <div className="text-[11px] text-slate-500">MQA & JPK micro-credentials stackable to degree</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-colors" />
                </a>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Licensed Framework</span>
                </span>
                <span className="font-semibold text-slate-700">Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
