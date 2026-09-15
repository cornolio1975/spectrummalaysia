"use client";

import { useState } from "react";
import {
  Building2,
  FolderKanban,
  UserCheck,
  Users,
  Video,
  ClipboardList,
  TrendingUp,
  CheckCircle2,
  Award,
  BarChart4,
  ArrowRight,
} from "lucide-react";

export function EcosystemFlowSection() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      id: "centre",
      name: "Learning Centre",
      icon: Building2,
      role: "Physical & Digital Hub",
      description: "Community centres & digital learning spaces host programmes across all 14 states and territories.",
      kpi: "20+ Connected Centres",
    },
    {
      id: "programme",
      name: "Programme",
      icon: FolderKanban,
      role: "Structured Curriculum",
      description: "Programmes like eKelas Pelajar & AI WIRA structured with modules, passing thresholds, and timelines.",
      kpi: "Approved & Certified",
    },
    {
      id: "trainer",
      name: "Trainer",
      icon: UserCheck,
      role: "Instructional Lead",
      description: "Certified trainers manage materials, conduct live sessions, and mentor cohorts in dedicated workspaces.",
      kpi: "Isolated Workspaces",
    },
    {
      id: "participant",
      name: "Participant",
      icon: Users,
      role: "Enrolled Learner",
      description: "Students, youth, and entrepreneurs onboard seamlessly and access personalized learning tracks.",
      kpi: "2,485+ Learners",
    },
    {
      id: "content",
      name: "Learning Content",
      icon: Video,
      role: "Private Media Vault",
      description: "Secure, internal video lectures, PDF course materials, and interactive topic blocks.",
      kpi: "No Public Storage Leak",
    },
    {
      id: "assessment",
      name: "Assessment",
      icon: ClipboardList,
      role: "Knowledge Validation",
      description: "Automated quizzes and practical challenges test learner understanding with instant scoring.",
      kpi: "Objective & Validated",
    },
    {
      id: "progress",
      name: "Progress",
      icon: TrendingUp,
      role: "Real-Time Tracking",
      description: "Completion percentages update automatically as participants finish lessons and submit tests.",
      kpi: "Automated Checkpoints",
    },
    {
      id: "completion",
      name: "Completion",
      icon: CheckCircle2,
      role: "Milestone Verified",
      description: "Learners reach the required 70-80% threshold, qualifying them for certified graduation.",
      kpi: "Threshold Met",
    },
    {
      id: "certificate",
      name: "Certificate",
      icon: Award,
      role: "Credential Issued",
      description: "Digitally signed certificates generated with QR verification codes for employer validation.",
      kpi: "Instant Verification",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart4,
      role: "Strategic Impact",
      description: "Aggregated insights empower administrators and government stakeholders to evaluate ROI and impact.",
      kpi: "Actionable Reporting",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900/90 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">
            <span>Unified Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
            Connecting the Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              Learning Journey
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every component in SpectrumMalaysia operates as one unbroken digital chain — from physical learning
            centre enrollment to verified credentialing and executive analytics.
          </p>
        </div>

        {/* Pipeline Steps Flow (Interactive Desktop / Horizontal Scroll Mobile) */}
        <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="flex items-center justify-between min-w-[980px] gap-2 px-2 py-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedStep === idx;
              return (
                <div key={step.id} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setSelectedStep(idx)}
                    className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 w-24 text-center focus:outline-none ${
                      isSelected
                        ? "bg-slate-950 border-2 border-orange-400 shadow-xl shadow-orange-500/20 scale-105"
                        : "bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-950/90"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                        isSelected
                          ? "bg-gradient-to-tr from-rose-500 to-amber-500 text-white shadow-md"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-white leading-tight font-['Sora']">
                      {step.name}
                    </span>
                    <span className="text-[9px] text-slate-400 mt-1">Step {idx + 1}</span>
                  </button>

                  {/* Connector Arrow (unless last) */}
                  {idx < steps.length - 1 && (
                    <div className="w-6 sm:w-8 flex justify-center text-slate-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Spotlight Card */}
        <div className="mt-8 rounded-3xl bg-slate-950 border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  Step {selectedStep + 1} of 10
                </span>
                <span className="text-sm font-semibold text-slate-400">
                  {steps[selectedStep].role}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora'] mb-3">
                {steps[selectedStep].name}
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6">
                {steps[selectedStep].description}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-lg border border-amber-500/20">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Architecture Requirement: {steps[selectedStep].kpi}</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 via-orange-500 to-amber-500 flex items-center justify-center text-white shadow-xl mb-4">
                {(() => {
                  const CurrentIcon = steps[selectedStep].icon;
                  return <CurrentIcon className="w-8 h-8" />;
                })()}
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Active Phase Focus
              </span>
              <span className="text-lg font-bold text-white font-['Sora'] mt-1">
                {steps[selectedStep].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
