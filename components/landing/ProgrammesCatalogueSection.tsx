"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Tag,
  MonitorPlay,
  X,
} from "lucide-react";
import { ProgrammeCardData } from "@/services/landing.service";
import { LMS_URL } from "@/lib/config";

interface ProgrammesCatalogueProps {
  programmes: ProgrammeCardData[];
}

export function ProgrammesCatalogueSection({ programmes }: ProgrammesCatalogueProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProgramme, setActiveModalProgramme] = useState<ProgrammeCardData | null>(null);

  const categories = ["All", ...Array.from(new Set(programmes.map((p) => p.category)))];

  const filtered =
    selectedCategory === "All"
      ? programmes
      : programmes.filter((p) => p.category === selectedCategory);

  return (
    <section id="programmes" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dynamic Curriculum Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora']">
              Discover Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
                Programmes
              </span>
            </h2>
            <p className="text-base text-slate-400 mt-2 max-w-2xl">
              Scalable learning initiatives crafted for Malaysian schools, community centres, youth hubs, and
              professional development.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prog) => (
            <div
              key={prog.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header Strip */}
                <div className="h-44 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6 relative flex flex-col justify-between overflow-hidden border-b border-slate-800">
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-gradient-to-br from-rose-500/20 to-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-amber-300 border border-slate-700/80 backdrop-blur-md">
                      {prog.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {prog.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="z-10">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      {prog.code}
                    </span>
                    <h3 className="text-xl font-bold text-white font-['Sora'] tracking-tight group-hover:text-amber-300 transition-colors">
                      {prog.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {prog.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-orange-400" />
                        <span>Audience</span>
                      </span>
                      <span className="font-medium text-slate-200">{prog.targetAudience}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-amber-400" />
                        <span>Curriculum</span>
                      </span>
                      <span className="font-medium text-slate-200">{prog.modulesCount} Modules</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <MonitorPlay className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Delivery</span>
                      </span>
                      <span className="font-medium text-slate-200">{prog.mode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveModalProgramme(prog)}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-rose-600 hover:to-amber-500 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-slate-700 hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>View Programme Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Programme Details */}
        {activeModalProgramme && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setActiveModalProgramme(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  {activeModalProgramme.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeModalProgramme.code}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-['Sora'] mb-4">
                {activeModalProgramme.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeModalProgramme.description}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs mb-6">
                <div>
                  <span className="text-slate-500 block mb-1">Target Audience</span>
                  <span className="text-slate-200 font-semibold">{activeModalProgramme.targetAudience}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Curriculum Architecture</span>
                  <span className="text-slate-200 font-semibold">{activeModalProgramme.modulesCount} Structured Modules</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Learning Delivery Mode</span>
                  <span className="text-slate-200 font-semibold">{activeModalProgramme.mode}</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Accreditation Benchmark</span>
                  <span className="text-slate-200 font-semibold">HRD Corp / MQA Compliant</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProgramme(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700"
                >
                  Close
                </button>
                <Link
                  href=LMS_URL
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 text-white text-sm font-bold shadow-lg shadow-orange-500/25 flex items-center gap-2"
                >
                  <span>Enroll via LMS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
