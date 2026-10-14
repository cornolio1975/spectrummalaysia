import Image from "next/image";
import { LMS_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shield, Award, Users, ChevronRight, FileText, Globe2, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";
import { SpectrumLogo } from "./SpectrumLogo";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Company Profile Headline, Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* HRD Corp Registered Training Provider Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/90 text-xs font-semibold text-amber-900 shadow-sm mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="tracking-wider uppercase font-['Sora'] text-[11px] text-amber-800 font-bold">
                HRD Corp Registered Training Provider
              </span>
              <span className="hidden sm:inline text-amber-300">•</span>
              <span className="hidden sm:inline text-amber-700 text-[11px]">
                Valid 22 Jul 2026 – 21 Jul 2027
              </span>
            </div>

            {/* Official Company Title */}
            <div className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase font-['Sora'] mb-2 flex items-center gap-2">
              <span>{COMPANY_INFO.name}</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] text-slate-600 font-mono">
                {COMPANY_INFO.registrationNo}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-['Sora'] mb-6">
              Empowering Minds.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                Building Futures.
              </span>
            </h1>

            {/* Supporting Mission Paragraph from PDF */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              A premier Malaysian education and training company delivering comprehensive{" "}
              <strong className="text-slate-900 font-semibold">Corporate Training</strong>,{" "}
              <strong className="text-slate-900 font-semibold">Student Recruitment</strong>, and{" "}
              <strong className="text-slate-900 font-semibold">Lifelong Learning</strong>.{" "}
              <span className="text-orange-700 font-medium italic">
                Our mission: to bridge the gap between education and professional success.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#programmes"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore 45 HRD Corp Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href={LMS_URL}
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-orange-600 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Access LMS Portal</span>
              </Link>

              <a
                href="#hrd-claim"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline py-2 px-1 transition-colors"
              >
                <span>How to Claim HRD Corp Levy</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% HRD Corp Claimable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>MQA & JPK Micro-Credentials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified TTT Trainers Nationwide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card / PDF Identity Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-orange-500/10 to-amber-500/10 rounded-3xl blur-2xl transform -rotate-1" />

            {/* Showcase Card */}
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-6 sm:p-8 backdrop-blur-xl">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <img
                  src="/spectrum-logo.png"
                  alt="Spectrum Edu Resources (M) Sdn. Bhd."
                  className="h-12 sm:h-14 w-auto object-contain"
                  loading="eager"
                />
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                  HRD Corp Registered
                </span>
              </div>

              {/* Photo Showcase of Authentic Corporate Training in Malaysia */}
              <div className="relative mt-5 h-48 sm:h-52 w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm group">
                <Image
                  src="/images/hero-training.jpg"
                  alt="Malaysian adult learners and professional corporate trainer in modern classroom workshop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                  <span className="bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    Interactive Corporate Workshop
                  </span>
                  <span className="bg-orange-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg font-bold">
                    100% Claimable
                  </span>
                </div>
              </div>

              {/* Company Status Pill */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
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
                    <p className="text-[11px] text-slate-500 mt-1">
                      All 45 programmes can be claimed against your HRD Corp levy (public, in-house, or online).
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Divisions Quick Matrix */}
              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-orange-300 hover:bg-orange-50/30 flex items-center justify-between group transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-mono text-xs font-bold">
                      01
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        Corporate Training
                      </div>
                      <div className="text-[11px] text-slate-500">45 claimable programmes across 9 industries</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-orange-300 hover:bg-orange-50/30 flex items-center justify-between group transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center font-mono text-xs font-bold">
                      02
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        Student Recruitment
                      </div>
                      <div className="text-[11px] text-slate-500">Nationwide agents & international partnerships</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-orange-300 hover:bg-orange-50/30 flex items-center justify-between group transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-mono text-xs font-bold">
                      03
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        Lifelong Learning
                      </div>
                      <div className="text-[11px] text-slate-500">MQA & JPK micro-credentials stackable to degree</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
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
