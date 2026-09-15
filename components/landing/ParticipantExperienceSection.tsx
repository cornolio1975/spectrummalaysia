import Link from "next/link";
import {
  GraduationCap,
  PlayCircle,
  Award,
  CheckCircle2,
  CalendarCheck,
  FileCheck,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

export function ParticipantExperienceSection() {
  const learnerFeatures = [
    { title: "Personalised Dashboard", icon: GraduationCap, desc: "A clean, modern workspace displaying your active enrolments, upcoming live classes, and overall completion percentages." },
    { title: "Bite-Sized Video Lessons", icon: PlayCircle, desc: "Stream HD lesson recordings, pause and resume at any time, and track topic mastery at your own schedule." },
    { title: "Interactive Quizzes & Tasks", icon: FileCheck, desc: "Test your retention immediately following each lesson block with instant score feedback and guidance." },
    { title: "Verifiable Digital Certificates", icon: Award, desc: "Upon hitting required completion criteria, receive an accredited digital certificate with a verifiable QR code." },
  ];

  return (
    <section id="participants" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mockup of Participant Student Dashboard */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-2xl relative">
              {/* Header simulation */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm">
                    NA
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Nur Aisyah binti Razak</div>
                    <div className="text-xs text-slate-400">NADI Petaling Jaya · Student Cohort</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active Learner
                </span>
              </div>

              {/* Progress Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    Current Course
                  </span>
                  <span className="text-xs font-mono text-slate-400">8 of 10 Topics Done</span>
                </div>
                <h4 className="text-base font-bold text-white font-['Sora'] mb-3">
                  AI WIRA: Asas Kecerdasan Buatan Generatif
                </h4>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mb-2">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-2 rounded-full w-[80%]" />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Progress: 80% Complete</span>
                  <span className="text-emerald-400 font-semibold">Eligible for Certificate</span>
                </div>
              </div>

              {/* Sub features list */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-2.5">
                  <CalendarCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300">100% Attendance Logged</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-rose-400" />
                  <span className="text-slate-300">1 Certificate Earned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Context & CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-400 uppercase tracking-widest mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Learner-Centric Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
              Learning Designed Around the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                Participant
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
              Empowering Malaysian youth, students, and community members with a modern, friction-free learning
              portal accessible from mobile devices, laptops, or community NADI centres.
            </p>

            <div className="space-y-4 mb-8">
              {learnerFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-['Sora']">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-orange-500/25"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
