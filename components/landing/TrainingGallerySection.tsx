import Image from "next/image";
import { Camera, CheckCircle2 } from "lucide-react";

export function TrainingGallerySection() {
  const trainingActivities = [
    {
      title: "Program Madani Community Upskilling",
      category: "Grassroots Empowerment",
      desc: "Digital entrepreneurship, financial management, and workforce empowerment masterclasses conducted across states nationwide.",
      badge: "Program Madani",
      stats: "State Cohorts",
      image: "/images/executive-masterclass.jpg",
      imageAlt: "Executive Masterclass and Program Madani Training Session",
    },
    {
      title: "PERKESO Technical Reskilling Bootcamps",
      category: "Workforce Transition",
      desc: "Five-day intensive vocational reskilling and job placement cohorts delivered under EIS and Penjana federal training initiatives.",
      badge: "EIS & Penjana",
      stats: "5-Day Tracks",
      image: "/images/lifelong-learning.jpg",
      imageAlt: "Lifelong learning and TVET modular classroom",
    },
    {
      title: "Industry Corporate Masterclasses",
      category: "In-House Training",
      desc: "Tailored on-site corporate governance, AI workflow automation, and safety workshops delivered by certified TTT instructors.",
      badge: "TTT Certified",
      stats: "Corporate Teams",
      image: "/images/corporate-training.jpg",
      imageAlt: "Corporate HRD Corp claimable workshop session",
    },
    {
      title: "Nationwide SPM & Tertiary Expos",
      category: "Academic Briefings",
      desc: "Direct higher education career advisory seminars and parent counseling sessions held at secondary schools and education fairs.",
      badge: "Admissions Hub",
      stats: "School Seminars",
      image: "/images/gallery-education-expo.jpg",
      imageAlt: "Nationwide SPM tertiary education fair and student advisory briefing",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Field Impact & Training Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Sora']">
            Training Sessions & Briefings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Continuous learning programmes, micro-credential short courses, Program Madani upskilling, and tertiary education briefings conducted across Malaysia.
          </p>
        </div>

        {/* 4 Activity Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingActivities.map((act) => (
            <div
              key={act.title}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group overflow-hidden"
            >
              {/* Card Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                <Image
                  src={act.image}
                  alt={act.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/10" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-800 font-['Sora'] shadow-sm">
                    {act.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-white px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/20">
                    {act.stats}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wider mb-2 font-['Sora']">
                    {act.category}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Sora'] mb-2 group-hover:text-orange-600 transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {act.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
