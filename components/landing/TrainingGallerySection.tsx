import Image from "next/image";
import { Camera, CheckCircle2 } from "lucide-react";

export function TrainingGallerySection() {
  const trainingActivities = [
    {
      title: "Program Madani & Executive Masterclasses",
      category: "National Empowerment",
      desc: "Community empowerment, grassroots upskilling, and executive masterclasses conducted across states nationwide.",
      badge: "Program Madani",
      stats: "Nationwide Sessions",
      image: "/images/executive-masterclass.jpg",
      imageAlt: "Executive Masterclass and Program Madani Training Session",
    },
    {
      title: "Continuous Learning & Micro-Credentials",
      category: "Adult Education",
      desc: "Structured modular classes for working adults delivering tangible certifications aligned with MQA & JPK.",
      badge: "MQA / JPK Platform",
      stats: "5-Day Tracks",
      image: "/images/lifelong-learning.jpg",
      imageAlt: "Lifelong learning and TVET modular classroom",
    },
    {
      title: "Corporate HRD Corp Workshops",
      category: "Industry Training",
      desc: "In-house leadership, digital tech, and safety workshops delivered by certified TTT trainers for corporate employers.",
      badge: "100% Claimable",
      stats: "45 Programmes",
      image: "/images/corporate-training.jpg",
      imageAlt: "Corporate HRD Corp claimable workshop session",
    },
    {
      title: "Tertiary Education & Student Briefings",
      category: "Higher Education",
      desc: "Connecting thousands of prospective students and parents with university admissions counselors and college partners.",
      badge: "Admissions Hub",
      stats: "800K Records/Yr",
      image: "/images/student-recruitment.jpg",
      imageAlt: "Higher education student briefing and recruitment seminar",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Field Impact & Training Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Sora']">
            Training Sessions & Briefings
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Continuous learning programmes, micro-credential short courses, Program Madani upskilling, and tertiary education briefings conducted across Malaysia.
          </p>
        </div>

        {/* 4 Activity Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingActivities.map((act) => (
            <div
              key={act.title}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group overflow-hidden"
            >
              {/* Card Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-800/70">
                <Image
                  src={act.image}
                  alt={act.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-950/30 to-black/30" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[10px] font-bold text-amber-300 font-['Sora'] shadow-sm">
                    {act.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-200 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                    {act.stats}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-2 font-['Sora']">
                    {act.category}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-['Sora'] mb-2 group-hover:text-amber-300 transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {act.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Active Delivery in 2026</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
