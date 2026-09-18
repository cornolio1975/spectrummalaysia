import Link from "next/link";
import {
import { LMS_URL } from "@/lib/config";
  CheckCircle,
  Layers,
  Video,
  FileCheck2,
  CalendarCheck2,
  BarChart3,
  Award,
  Users2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const ecosystemPillars = [
    { title: "Programme Management", icon: Layers, desc: "Curriculum structuring, intake cohorts, and lifecycle delivery." },
    { title: "Learning Management", icon: Video, desc: "Modular lessons, multimedia assets, and self-paced tracks." },
    { title: "Trainer Management", icon: Users2, desc: "Authorized trainers with dedicated management environments." },
    { title: "Participant Management", icon: CheckCircle, desc: "Seamless enrolments, profiles, and attendance logging." },
    { title: "Video Repository", icon: Video, desc: "Secure internal storage with protected tokenized streaming." },
    { title: "Assessments & Quizzes", icon: FileCheck2, desc: "Evaluations, passing scores, and real-time grading." },
    { title: "Attendance & Sessions", icon: CalendarCheck2, desc: "Real-time session attendance and live class monitoring." },
    { title: "Certificates & Badges", icon: Award, desc: "Automated issuance, verification, and tamper-proof records." },
    { title: "Analytics & Reporting", icon: BarChart3, desc: "Granular reporting by state, centre, gender, and age." },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Sticky Overview) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About SpectrumMalaysia LMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
              One Platform.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                One Learning Ecosystem.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              SpectrumMalaysia LMS is purposefully architected for enterprise, education institutions, training
              providers, and large-scale Malaysian community programmes.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Rather than scattering courses across disjointed tools, SpectrumMalaysia unifies every phase of the
              learning lifecycle — from learning centres and trainers to structured video modules, assessments, and
              verified certificate issuance.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#capabilities"
                className="px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href=LMS_URL
                className="px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Login to Portal</span>
              </Link>
            </div>
          </div>

          {/* Right Column (Feature Pillar Cards) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecosystemPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-orange-500/40 hover:bg-slate-800/50 transition-all duration-300 shadow-md group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500/20 via-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white font-['Sora'] mb-1.5 group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Malaysian Integration Statement Card */}
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white font-['Sora']">
                  Government & Institutional Compliance
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Built to support HRD Corp initiatives, MQA qualifications, and national digital skills frameworks.
                </p>
              </div>
              <span className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                100% Malaysian Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
