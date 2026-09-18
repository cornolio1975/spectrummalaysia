import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Shield, Users, Award, PlayCircle } from "lucide-react";
import { LMS_URL } from "@/lib/config";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Dynamic Background Glows & Ambient Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

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
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs font-semibold text-slate-300 shadow-sm mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 animate-pulse" />
              <span className="tracking-wider uppercase font-['Sora'] text-[11px] text-amber-300">
                Nationwide Malaysian Digital Learning Ecosystem
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-['Sora'] mb-6">
              Empowering Learning.
              <br />
              Connecting Communities.
              <br />
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                Futures.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-['Plus_Jakarta_Sans'] font-normal">
              SpectrumMalaysia LMS is a comprehensive digital learning and programme-management platform
              connecting learners, trainers, programmes and learning resources through one secure, unified ecosystem.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#programmes"
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Explore Learning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href=LMS_URL
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Access LMS</span>
              </Link>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline py-2 px-1 transition-colors"
              >
                <span>Discover SpectrumMalaysia</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>MQA & JPK Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-400" />
                <span>Role-Based Access & Supabase RLS</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>HRD Corp & Government Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000" />

              {/* Main Visual Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-6">
                {/* Platform Header Simulation */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2">lms.spectrummalaysia.com</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Platform
                  </span>
                </div>

                {/* Main Feature Preview Graphics */}
                <div className="space-y-4">
                  {/* Digital Classroom Banner */}
                  <div className="rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 p-5 border border-slate-700/50 relative overflow-hidden">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                          Active Training Program
                        </span>
                        <h4 className="text-lg font-bold text-white font-['Sora'] mt-1">
                          eKelas Pelajar & AI WIRA
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Connecting 20+ NADI Digital Learning Centres
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <BookOpen className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Progress Bar Simulation */}
                    <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Curriculum Completion</span>
                      <span className="font-bold text-amber-400">87.4%</span>
                    </div>
                    <div className="w-full bg-slate-700/60 rounded-full h-1.5 mt-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-1.5 rounded-full w-[87%]" />
                    </div>
                  </div>

                  {/* Two Mini Feature Blocks */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-300">Trainers</span>
                      </div>
                      <div className="text-xl font-extrabold text-white font-['Sora']">48+</div>
                      <div className="text-[10px] text-slate-400">Certified Instructors</div>
                    </div>

                    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
                          <PlayCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-300">Video Lessons</span>
                      </div>
                      <div className="text-xl font-extrabold text-white font-['Sora']">350+</div>
                      <div className="text-[10px] text-slate-400">Private LMS Storage</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Feed */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Real-time Analytics Connected</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">v2.4 Production</span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl animate-bounce duration-1000 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-orange-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                    25+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Years Heritage</div>
                    <div className="text-[10px] text-slate-400">Education & Training</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">MQA & HRD Corp</div>
                    <div className="text-[10px] text-slate-400">Accredited Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
