import Image from "next/image";
import { Award, Layers, Users, TrendingUp, CheckCircle2, ShieldCheck, HeartHandshake, Zap, ArrowRight } from "lucide-react";
import { LMS_URL } from "@/lib/config";
import Link from "next/link";

export function LifelongLearningSection() {
  const pillars = [
    {
      title: "MQA & JPK Micro-credentials",
      desc: "Accredited classes and vocational training modules tailored for working adults aged 18 and above.",
      icon: Award,
    },
    {
      title: "Stackable to Diploma or Degree",
      desc: "Five-day micro-credential or modular courses that accumulate academic credits building toward a formal Diploma or Degree.",
      icon: Layers,
    },
    {
      title: "PERKESO Programme (JPK)",
      desc: "Ongoing five-day training with recognized micro-credentials awarded by Jabatan Pembangunan Kemahiran (JPK), Ministry of Human Resources.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Trainers Nationwide",
      desc: "Expert trainers holding certified Train-the-Trainer (TTT) qualifications, MOE teaching permits, and practical industry experience.",
      icon: Users,
    },
  ];

  const employerBenefits = [
    {
      title: "Continuous Skill Development",
      desc: "Keeps internal teams technologically current, operationally competitive, and compliant with modern Malaysian standards.",
      icon: Zap,
    },
    {
      title: "Adaptability to Industry Change",
      desc: "Proactively prepares staff for rapid automation, AI adoption, regulatory revisions, and cross-functional demands.",
      icon: TrendingUp,
    },
    {
      title: "Staff Engagement & Retention",
      desc: "Employees with structured upskilling and accredited micro-credential pathways demonstrate higher job satisfaction and longevity.",
      icon: HeartHandshake,
    },
  ];

  const nationalInitiatives = [
    { title: "Program Madani", desc: "Nationwide upskilling workshops and community empowerment programmes." },
    { title: "PERKESO EIS Reskilling", desc: "Five-day nationwide training for retrenched workers under the Employment Insurance System." },
    { title: "PERKESO Penjana", desc: "Strategic economic recovery training initiatives for jobseekers and workforce re-entry." },
    { title: "HRDF & MDEC Since 2012", desc: "Over a decade of government-backed digital literacy and vocational training partnerships." },
  ];

  return (
    <section id="lifelong" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Division 03 • Adult Education & TVET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Sora']">
            Lifelong Learning & Micro-credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Modular learning pathways accredited by MQA and JPK that allow working adults to gain tangible skills and stack credits toward full Diploma and Degree qualifications.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-200 shadow-xl group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Sora'] mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why it Matters for Employers & National Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left: Why it Matters for Employers */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-['Sora']">
                Workforce Impact
              </span>
              <h3 className="text-2xl font-bold text-white font-['Sora'] mt-1 mb-6">
                Why Micro-credentials Matter for Employers
              </h3>

              <div className="space-y-4">
                {employerBenefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-['Sora']">{b.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Stackable modular delivery for adult learners</span>
              <Link
                href={LMS_URL}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>Track Credentials in LMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: National Government Programmes */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-amber-500/30 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div>
              {/* Photo Banner */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-950">
                <Image
                  src="/images/lifelong-learning.jpg"
                  alt="Lifelong Learning & TVET Micro-credentials Session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-slate-700/80">
                    MQA & JPK Platform
                  </span>
                  <span className="text-[11px] font-semibold text-slate-300 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                    Since 2012
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-['Sora']">
                Track Record as a Training Provider
              </span>
              <h3 className="text-2xl font-bold text-white font-['Sora'] mt-1 mb-2">
                5,000+ Trained Since 2012
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Trusted by federal ministries, social security institutions, and statutory bodies across Malaysia.
              </p>

              <div className="space-y-3">
                {nationalInitiatives.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xs font-bold text-white font-['Sora'] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 pl-3.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center">
              Licensed platforms under MQA and Jabatan Pembangunan Kemahiran (JPK)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
