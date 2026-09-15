"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, BookOpen, UserCheck, Users, FileText, Clock } from "lucide-react";
import { LandingStats } from "@/services/landing.service";

interface KpiStripProps {
  stats: LandingStats;
}

function CounterItem({
  value,
  suffix = "+",
  label,
  icon: Icon,
  color,
}: {
  value: number;
  suffix?: string;
  label: string;
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
          const steps = 50;
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
      className="flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 shadow-lg group text-center"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-md ${color}`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Sora'] mb-1">
        {count.toLocaleString()}
        <span className="text-orange-400 font-bold">{suffix}</span>
      </div>

      <div className="text-xs sm:text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
        {label}
      </div>
    </div>
  );
}

export function KpiStrip({ stats }: KpiStripProps) {
  const kpis = [
    {
      label: "Learning Centres",
      value: stats.learningCentres,
      suffix: "+",
      icon: Building2,
      color: "bg-gradient-to-tr from-rose-600 to-rose-400",
    },
    {
      label: "Active Programmes",
      value: stats.activeProgrammes,
      suffix: "",
      icon: BookOpen,
      color: "bg-gradient-to-tr from-orange-600 to-orange-400",
    },
    {
      label: "Authorised Trainers",
      value: stats.trainers,
      suffix: "+",
      icon: UserCheck,
      color: "bg-gradient-to-tr from-amber-600 to-amber-400",
    },
    {
      label: "Registered Participants",
      value: stats.participants,
      suffix: "+",
      icon: Users,
      color: "bg-gradient-to-tr from-emerald-600 to-teal-400",
    },
    {
      label: "Digital Resources",
      value: stats.resources,
      suffix: "+",
      icon: FileText,
      color: "bg-gradient-to-tr from-blue-600 to-cyan-400",
    },
    {
      label: "Learning Hours Delivered",
      value: stats.learningHours,
      suffix: "+",
      icon: Clock,
      color: "bg-gradient-to-tr from-indigo-600 to-purple-400",
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-3 sm:p-4 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {kpis.map((kpi) => (
            <CounterItem key={kpi.label} {...kpi} />
          ))}
        </div>
      </div>
    </section>
  );
}
