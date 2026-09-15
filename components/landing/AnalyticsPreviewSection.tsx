"use client";

import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Filter,
  CheckCircle,
  Building2,
  Users,
  Award,
  Calendar,
  Sparkles,
} from "lucide-react";

export function AnalyticsPreviewSection() {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("Yearly");
  const [selectedDimension, setSelectedDimension] = useState("All States");

  const timeFilters = ["Weekly", "Monthly", "Quarterly", "Yearly", "All Time"];
  const dimensions = ["All States", "Selangor", "Johor", "Pulau Pinang", "Sabah & Sarawak"];

  return (
    <section id="analytics" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learning + Programme Management + Analytics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
            From Learning Data to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              Meaningful Insights
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            SpectrumMalaysia transcends traditional LMS boundaries. Built-in business intelligence gives
            administrators, partners, and government stakeholders instant visibility into participation, KPI
            milestones, and community transformation.
          </p>
        </div>

        {/* Dashboard Preview Interface */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
          {/* Top Filter Bar Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Multi-Dimensional Filters:
              </span>
              <div className="flex flex-wrap gap-1.5 ml-2">
                {dimensions.map((dim) => (
                  <button
                    key={dim}
                    type="button"
                    onClick={() => setSelectedDimension(dim)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      selectedDimension === dim
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/40"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {dim}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {timeFilters.map((tf) => (
                <button
                  key={tf}
                  type="button"
                  onClick={() => setSelectedTimeFilter(tf)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedTimeFilter === tf
                      ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Simulated KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">Total Registered</span>
                <Users className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora']">2,485</div>
              <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>99.4% of 2026 Target Achieved</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">Average Attendance</span>
                <Calendar className="w-4 h-4 text-orange-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora']">87.0%</div>
              <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Exceeds Target (85%)</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">Completion Rate</span>
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora']">74.2%</div>
              <div className="text-xs text-amber-300 mt-1 flex items-center gap-1">
                <span>Near Target Benchmark (75%)</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">Certificates Issued</span>
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora']">1,218</div>
              <div className="text-xs text-slate-400 mt-1">Verified with QR Checksums</div>
            </div>
          </div>

          {/* Chart Visual Simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-sm font-bold text-white font-['Sora']">
                    Quarterly Cohort Enrollment & Completion Trend
                  </h4>
                  <p className="text-xs text-slate-400">Monthly learner throughput across all registered programmes</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  +18.4% YoY
                </span>
              </div>

              {/* Bar Graph Simulation */}
              <div className="h-44 flex items-end justify-between gap-3 pt-6 border-b border-slate-800">
                {[
                  { month: "Jan", h1: "45%", h2: "35%" },
                  { month: "Feb", h1: "60%", h2: "48%" },
                  { month: "Mar", h1: "75%", h2: "62%" },
                  { month: "Apr", h1: "70%", h2: "58%" },
                  { month: "May", h1: "85%", h2: "72%" },
                  { month: "Jun", h1: "90%", h2: "80%" },
                  { month: "Jul", h1: "95%", h2: "84%" },
                  { month: "Aug", h1: "100%", h2: "88%" },
                ].map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <div className="w-full flex items-end justify-center gap-1 h-full">
                      <div
                        style={{ height: bar.h1 }}
                        className="w-full max-w-[14px] bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-sm transition-all group-hover:brightness-125"
                      />
                      <div
                        style={{ height: bar.h2 }}
                        className="w-full max-w-[14px] bg-slate-700 group-hover:bg-slate-600 rounded-t-sm transition-all"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{bar.month}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
                    <span>Registered Participants</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-slate-700" />
                    <span>Course Completions</span>
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-500">Live PostgreSQL Sync</span>
              </div>
            </div>

            {/* Demographics & State Breakdown */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white font-['Sora'] mb-1">
                  Participant Demographics
                </h4>
                <p className="text-xs text-slate-400 mb-5">Gender & Age cohort distribution</p>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Female Participants</span>
                      <span className="font-bold text-white">56%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-rose-500 h-1.5 rounded-full w-[56%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Youth (Ages 13–24)</span>
                      <span className="font-bold text-white">68%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-orange-500 h-1.5 rounded-full w-[68%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Entrepreneurs & Adults (25+)</span>
                      <span className="font-bold text-white">32%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className="bg-amber-400 h-1.5 rounded-full w-[32%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-400 block mb-2">
                  Compliant with Ministry of Digital & MDEC national audit metrics.
                </span>
                <span className="text-xs font-semibold text-orange-400 hover:underline cursor-pointer">
                  Export Audit-Ready Reports &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
