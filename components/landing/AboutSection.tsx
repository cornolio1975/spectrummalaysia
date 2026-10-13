import { LMS_URL } from "@/lib/config";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Target,
  Sliders,
  Award,
  UserCheck,
  CheckCircle,
  FileCheck2,
  ShieldCheck,
  Building,
} from "lucide-react";
import { COMPANY_INFO, VALUE_PROPOSITIONS } from "@/lib/spectrum-profile-data";
import { SpectrumLogo } from "./SpectrumLogo";

export function AboutSection() {
  const valueIcons = [Target, Sliders, UserCheck, Award];

  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background radial glows matching Spectrum branding */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Overview & Mission) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Spectrum Edu Resources</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
              Bridging Education and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                Professional Success.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              <strong>{COMPANY_INFO.name}</strong> is a premier Malaysian education and training company providing comprehensive corporate training and student recruitment services that help individuals and organisations reach their full potential.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
              Our training covers professional development, skills enhancement, and specialised industry certification. We work with leading experts, trainers, and accredited tertiary institutions to deliver current, practical content that equips learners to excel in today&apos;s fast-paced world.
            </p>

            {/* Mission Statement Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30 mb-8">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest font-['Sora'] mb-1">
                Our Mission
              </div>
              <p className="text-sm sm:text-base text-white font-medium italic">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#divisions"
                className="px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Discover Our 3 Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href={LMS_URL}
                className="px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Access LMS Portal</span>
              </Link>
            </div>
          </div>

          {/* Right Column (How We Deliver Value - 4 Pillars from PDF Page 3) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-['Sora']">
                Core Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora'] mt-1">
                How We Deliver Value
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUE_PROPOSITIONS.map((prop, idx) => {
                const Icon = valueIcons[idx] || Award;
                return (
                  <div
                    key={prop.title}
                    className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 shadow-lg group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-red-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white font-['Sora'] mb-2 group-hover:text-amber-300 transition-colors">
                      {prop.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Official HRD Corp Certificate Summary Card */}
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-amber-500/30 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    <h4 className="text-sm font-bold text-white font-['Sora']">
                      HRD Corp Registered Training Provider
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Registered under <strong className="text-white">Pembangunan Sumber Manusia Berhad Act 2001</strong>. Certificate Serial No:{" "}
                    <span className="font-mono text-amber-300 font-semibold">{COMPANY_INFO.hrdCorp.certificateSerialNo}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Validity: {COMPANY_INFO.hrdCorp.approvalDate} – {COMPANY_INFO.hrdCorp.expiryDate}
                  </p>
                </div>
                <span className="shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 font-['Sora']">
                  100% Levy Claimable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
