import Image from "next/image";
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
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Overview & Mission) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>About Spectrum Edu Resources</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Sora'] mb-6">
              Bridging Education and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                Professional Success.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              <strong className="text-slate-900">{COMPANY_INFO.name}</strong> is a premier Malaysian education and training company providing comprehensive corporate training and student recruitment services that help individuals and organisations reach their full potential.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Our training covers professional development, skills enhancement, and specialised industry certification. We work with leading experts, trainers, and accredited tertiary institutions to deliver current, practical content that equips learners to excel in today&apos;s fast-paced world.
            </p>

            {/* Mission Statement Box */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 mb-6">
              <div className="text-[11px] font-bold text-amber-800 uppercase tracking-widest font-['Sora'] mb-1">
                Our Mission
              </div>
              <p className="text-sm sm:text-base text-slate-900 font-medium italic">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </p>
            </div>

            {/* Visual Facilitator Photo Feature */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-md mb-8 group">
              <Image
                src="/images/about-facilitator.jpg"
                alt="Adult education facilitator facilitating collaborative learning with Malaysian professionals"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                  Workforce Upskilling
                </span>
                <span className="bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg font-bold">
                  Accredited Facilitators
                </span>
              </div>
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
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-orange-600 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Access LMS Portal</span>
              </Link>
            </div>
          </div>

          {/* Right Column (How We Deliver Value - 4 Pillars from PDF Page 3) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-['Sora']">
                Core Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Sora'] mt-1">
                How We Deliver Value
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUE_PROPOSITIONS.map((prop, idx) => {
                const Icon = valueIcons[idx] || Award;
                return (
                  <div
                    key={prop.title}
                    className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-orange-300 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 font-['Sora'] mb-2 group-hover:text-orange-600 transition-colors">
                      {prop.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
