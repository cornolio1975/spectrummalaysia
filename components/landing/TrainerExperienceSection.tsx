import Link from "next/link";
import {
  UploadCloud,
  FileCheck,
  Video,
  FolderSync,
  UserCheck,
  LineChart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function TrainerExperienceSection() {
  const trainerCapabilities = [
    {
      title: "Isolated Resource Vault",
      icon: UploadCloud,
      desc: "Upload slides, workbooks, and videos with strict row-level security ensuring other trainers cannot access or overwrite private materials.",
    },
    {
      title: "Structured Module Organisation",
      icon: FolderSync,
      desc: "Sequence topics, lessons, durations, and mandatory prerequisites with drag-and-drop ease.",
    },
    {
      title: "Live Class & Attendance Hub",
      icon: Video,
      desc: "Integrate Google Meet live training sessions with automatic participant check-in and attendance recording.",
    },
    {
      title: "Participant Activity Oversight",
      icon: LineChart,
      desc: "Inspect learner quiz results, lesson watch durations, and engagement metrics in real time.",
    },
  ];

  return (
    <section id="trainers" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & CTA */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Dedicated Instructor Workspace</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
              Empowering Trainers to Deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                Better Learning
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              Every certified trainer on SpectrumMalaysia receives a dedicated, isolated management portal.
              Trainers focus on high-impact instructional delivery while the system automates logistics, curriculum
              versioning, and attendance integrity.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-8 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Enforced Data Isolation:</strong> Trainer workspace resources are
                sandboxed via PostgreSQL Row Level Security (RLS) — ensuring proprietary curriculum remains strictly
                confidential.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-orange-500/25 flex items-center gap-2"
              >
                <span>Trainer Login</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#contact"
                className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Register as Trainer &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Trainer Workspace Preview */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trainerCapabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white font-['Sora'] mb-2 group-hover:text-amber-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
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
