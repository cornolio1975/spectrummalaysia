import Image from "next/image";
import { ArrowRight, Briefcase, Award, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";
import { THREE_DIVISIONS } from "@/lib/spectrum-profile-data";

export function DivisionsSection() {
  const divisionIcons = [Briefcase, GraduationCap, Award];
  const divisionMeta = [
    {
      image: "/images/division-corporate-training.jpg",
      imageAlt: "Executive corporate training and HRD Corp claimable workshops",
      tag: "HRD Corp Claimable",
      tagColor: "bg-white/95 text-red-700 border-red-200",
    },
    {
      image: "/images/division-student-recruitment.jpg",
      imageAlt: "Higher education campus admissions and student counseling briefing",
      tag: "Campus Admissions Hub",
      tagColor: "bg-white/95 text-orange-700 border-orange-200",
    },
    {
      image: "/images/division-lifelong-learning.jpg",
      imageAlt: "Adult lifelong learning, TVET and recognized micro-credentials",
      tag: "MQA & JPK Accredited",
      tagColor: "bg-white/95 text-amber-700 border-amber-200",
    },
  ];

  return (
    <section id="divisions" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Comprehensive Education Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Sora']">
            Our Three Strategic Divisions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Spectrum Edu Resources operates across three synchronized divisions designed to deliver professional workforce upskilling, institutional student recruitment, and continuous lifelong education.
          </p>
        </div>

        {/* 3 Divisions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {THREE_DIVISIONS.map((division, idx) => {
            const Icon = divisionIcons[idx] || Briefcase;
            const meta = divisionMeta[idx] || divisionMeta[0];

            return (
              <div
                key={division.number}
                className="relative rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group overflow-hidden"
              >
                <div>
                  {/* Photo Banner with Overlaid Badges */}
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-6 border border-slate-200/80 bg-slate-100">
                    <Image
                      src={meta.image}
                      alt={meta.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/10 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-lg backdrop-blur-md border text-[11px] font-bold shadow-sm font-['Sora'] ${meta.tagColor}`}>
                        {meta.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                        DIV {division.number}
                      </span>
                    </div>

                    {/* Bottom Number and Icon */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-white drop-shadow-md font-['Sora'] tracking-tight">
                        {division.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center text-orange-600 shadow-lg group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-['Sora'] mb-1.5 group-hover:text-orange-600 transition-colors">
                    {division.title}
                  </h3>

                  <div className="text-xs font-semibold text-orange-600 mb-4 font-['Sora']">
                    {division.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {division.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                    {division.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <a
                  href={division.href}
                  className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 border border-slate-200 hover:border-transparent text-xs font-bold text-slate-800 hover:text-white flex items-center justify-between transition-all shadow-sm group/btn"
                >
                  <span>Explore {division.title}</span>
                  <ArrowRight className="w-4 h-4 text-orange-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
