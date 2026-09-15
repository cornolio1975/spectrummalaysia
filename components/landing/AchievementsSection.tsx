"use client";

import { useEffect, useRef, useState } from "react";
import { Award, CheckCircle2, Star, Target, Users, BookOpen, GraduationCap } from "lucide-react";
import { AchievementItem } from "@/services/landing.service";

interface AchievementsSectionProps {
  achievements: AchievementItem[];
}

function StatCounter({
  number,
  suffix,
  label,
  description,
}: {
  number: number;
  suffix: string;
  label: string;
  description: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const steps = 40;
          const stepTime = duration / steps;
          const increment = number / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              setVal(number);
              clearInterval(timer);
            } else {
              setVal(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div
      ref={ref}
      className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center hover:border-orange-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl group"
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
          {val.toLocaleString()}
        </span>
        <span className="text-orange-400">{suffix}</span>
      </div>
      <h4 className="text-base font-bold text-white font-['Sora'] mb-2">{label}</h4>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  const advisors = [
    { initials: "EZ", name: "Encik Zabib Bin Bakar", title: "Institutional Accreditation Lead", desc: "Expert in national qualifications frameworks, MQA and technical standards." },
    { initials: "NL", name: "Prof. Dr. Nagarajah Lee", title: "Academic & Pedagogical Consultant", desc: "Overseeing digital curriculum methodologies and higher-education credit pathways." },
    { initials: "AT", name: "Dr. Anas Bin Tajudin", title: "Tertiary & Vocational Advisor", desc: "Bridging community TVET certifications with industry demand." },
    { initials: "HS", name: "Assoc. Prof. Dr. Harwindar Singh", title: "Industry Training & OSH Specialist", desc: "Leading professional competency workshops and workforce upskilling." },
  ];

  return (
    <section id="achievements" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-600/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
            Measuring Learning.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              Demonstrating Impact.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A verified track record of operational excellence across Malaysia, built on rigorous standards,
            institutional trust, and tangible outcomes.
          </p>
        </div>

        {/* Dynamic Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((item) => (
            <StatCounter key={item.label} {...item} />
          ))}
        </div>

        {/* Proof Bar (Directly inspired by reference website) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-['Sora']">Nationwide Presence</strong>
                Over 20 learning centres across Peninsular Malaysia, Sabah & Sarawak.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-['Sora']">National Initiative Alignment</strong>
                Delivering HRD Corp Madani & Penjana workforce transformation programmes.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-['Sora']">Certified Instructors</strong>
                Nationwide certified Train-The-Trainer (TTT) network with verified credentials.
              </span>
            </div>
          </div>
        </div>

        {/* Board of Advisors / Academic Governance preview */}
        <div className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Governance & Academic Advisory
            </span>
            <h3 className="text-2xl font-bold text-white font-['Sora'] mt-1">
              Guided by Academic & Industry Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advisors.map((adv) => (
              <div
                key={adv.name}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-500 flex items-center justify-center text-white font-extrabold font-['Sora'] text-sm shadow-md mb-4">
                  {adv.initials}
                </div>
                <h4 className="text-sm font-bold text-white font-['Sora']">{adv.name}</h4>
                <p className="text-xs text-orange-400 font-medium mt-0.5 mb-2">{adv.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
