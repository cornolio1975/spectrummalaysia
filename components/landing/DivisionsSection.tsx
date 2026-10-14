import Image from "next/image";
import { ArrowRight, Briefcase, Globe, Award, CheckCircle2 } from "lucide-react";
import { THREE_DIVISIONS } from "@/lib/spectrum-profile-data";

export function DivisionsSection() {
  const divisionIcons = [Briefcase, Globe, Award];
  const divisionImages = [
    {
      src: "/images/corporate-training.jpg",
      alt: "Corporate Training & HRD Corp Workshops",
      tag: "HRD Corp Claimable",
    },
    {
      src: "/images/student-recruitment.jpg",
      alt: "Student Recruitment & Higher Education Counsel",
      tag: "Higher Education Hub",
    },
    {
      src: "/images/lifelong-learning.jpg",
      alt: "Lifelong Learning & TVET Micro-credentials",
      tag: "MQA / JPK Accredited",
    },
  ];

  return (
    <section id="divisions" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-['Sora']">
            Comprehensive Education Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Sora'] mt-2">
            Our Three Divisions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Spectrum Edu Resources operates across three synchronized divisions designed to deliver professional workforce upskilling, institutional student recruitment, and continuous lifelong education.
          </p>
        </div>

        {/* 3 Divisions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {THREE_DIVISIONS.map((division, idx) => {
            const Icon = divisionIcons[idx] || Briefcase;
            const imgMeta = divisionImages[idx] || divisionImages[0];

            return (
              <div
                key={division.number}
                className="relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group overflow-hidden"
              >
                <div>
                  {/* Photo Banner with Badges and Overlay */}
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-6 border border-slate-800/80 bg-slate-950">
                    <Image
                      src={imgMeta.src}
                      alt={imgMeta.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20" />

                    {/* Top Overlaid Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[10px] font-bold text-amber-300 font-['Sora'] shadow-sm">
                        {imgMeta.tag}
                      </span>
                    </div>

                    {/* Bottom Division Number & Floating Icon */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-white drop-shadow-md font-['Sora'] tracking-tight">
                        {division.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-['Sora'] mb-1 group-hover:text-amber-300 transition-colors">
                    {division.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-400/90 mb-4 font-['Sora']">
                    {division.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {division.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-8">
                    {division.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <a
                  href={division.href}
                  className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-xs font-bold text-white flex items-center justify-between transition-all group-hover:shadow-md"
                >
                  <span>Explore {division.title}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
