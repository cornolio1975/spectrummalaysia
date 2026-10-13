"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Award, Calendar, Database, BookOpen, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";

function CounterItem({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  icon: Icon,
  color,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon: any;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;
          const increment = value / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 shadow-lg group text-center"
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-md ${color}`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Sora'] mb-1">
        {prefix}
        {count.toLocaleString()}
        <span className="text-amber-400 font-bold">{suffix}</span>
      </div>

      <div className="text-xs sm:text-[13px] font-bold text-slate-200 group-hover:text-amber-300 transition-colors">
        {label}
      </div>

      {sublabel && (
        <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
          {sublabel}
        </div>
      )}
    </div>
  );
}

export function KpiStrip() {
  const kpis = [
    {
      label: "Individuals Trained",
      sublabel: "Across national programmes",
      value: 5000,
      suffix: "+",
      icon: Users,
      color: "bg-gradient-to-tr from-red-600 to-orange-500",
    },
    {
      label: "Years of Service",
      sublabel: "In education & recruitment",
      value: 25,
      suffix: " yrs",
      icon: Award,
      color: "bg-gradient-to-tr from-orange-600 to-amber-500",
    },
    {
      label: "Delivering Training",
      sublabel: "Proven track record since",
      value: 2012,
      prefix: "",
      suffix: "",
      icon: Calendar,
      color: "bg-gradient-to-tr from-amber-600 to-amber-400",
    },
    {
      label: "Student & Parent Records",
      sublabel: "Gathered yearly nationwide",
      value: 800,
      suffix: "K",
      icon: Database,
      color: "bg-gradient-to-tr from-emerald-600 to-teal-400",
    },
    {
      label: "HRD Corp Programmes",
      sublabel: "Across 9 key industries",
      value: 45,
      suffix: " Courses",
      icon: BookOpen,
      color: "bg-gradient-to-tr from-blue-600 to-indigo-500",
    },
    {
      label: "Agent Network",
      sublabel: "Nationwide inc. Sabah & Sarawak",
      value: 20,
      suffix: "+",
      icon: MapPin,
      color: "bg-gradient-to-tr from-purple-600 to-pink-500",
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-3 sm:p-4 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {kpis.map((kpi) => (
            <CounterItem key={kpi.label} {...kpi} />
          ))}
        </div>
      </div>
    </section>
  );
}
