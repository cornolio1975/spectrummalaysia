"use client";

import { useState } from "react";
import {
  FolderKanban,
  GraduationCap,
  Users,
  UserCheck,
  FileBox,
  ClipboardCheck,
  Award,
  BarChart2,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

export function CapabilitiesSection() {
  const [activeCapability, setActiveCapability] = useState<number | null>(null);

  const capabilities = [
    {
      title: "Programme Management",
      icon: FolderKanban,
      summary: "Create, manage and monitor learning programmes from one central platform.",
      details:
        "Define target age demographics, categories, cohort start/end timelines, pass criteria thresholds, and multi-state delivery logistics effortlessly.",
      tag: "Centralised Delivery",
      color: "from-rose-500 to-red-600",
    },
    {
      title: "Learning Management",
      icon: GraduationCap,
      summary: "Deliver structured learning through modules, lessons and digital resources.",
      details:
        "Sequential curriculum design with mandatory topic gating, lesson durations, rich multimedia attachments, and automated completion verification.",
      tag: "Curriculum Engine",
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Trainer Management",
      icon: Users,
      summary: "Allow authorised trainers to manage assigned programmes and their own learning materials.",
      details:
        "Dedicated isolated trainer workspaces allowing instructors to upload course collateral, stream live Google Meet classes, and record attendance independently.",
      tag: "Secure Isolation",
      color: "from-amber-500 to-yellow-600",
    },
    {
      title: "Participant Management",
      icon: UserCheck,
      summary: "Manage participant profiles, enrolments, learning activities and progress.",
      details:
        "Complete learner lifecycles including IC/Passport tracking, state & learning centre association, attendance histories, and engagement analytics.",
      tag: "Learner Central",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Digital Learning Resources",
      icon: FileBox,
      summary: "Centralise documents, presentations, images, files and video learning content.",
      details:
        "Enterprise media vault hosting private learning video repositories, PDF course packs, worksheets, and secure downloadable trainer assets.",
      tag: "Private Storage",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Assessments & Quizzes",
      icon: ClipboardCheck,
      summary: "Create assessments and monitor participant results and performance.",
      details:
        "Flexible question banks (multiple choice, true/false, short answer) with customizable passing marks, instant grading, and automated retry policies.",
      tag: "Knowledge Checks",
      color: "from-indigo-500 to-violet-600",
    },
    {
      title: "Certificates & Verification",
      icon: Award,
      summary: "Manage certificate eligibility, generation, issuance and verification.",
      details:
        "Automated digital certificate generation with unique verification QR/serial codes, publicly checkable via `/verify/[certificate_no]` with zero forgery risk.",
      tag: "Verifiable Badges",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      title: "Analytics & Reporting",
      icon: BarChart2,
      summary: "Transform operational learning data into dashboards, KPIs and reports.",
      details:
        "Multi-dimensional drilldown filters by state, centre, gender, age band, and session period to satisfy institutional and government KPIs.",
      tag: "Executive Insights",
      color: "from-rose-600 to-pink-600",
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <span>Enterprise & Institutional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
            Everything You Need to Manage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              Digital Learning
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From single-centre training to nationwide government initiatives, SpectrumMalaysia delivers end-to-end
            governance, instructional delivery, and performance measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isExpanded = activeCapability === idx;
            return (
              <div
                key={cap.title}
                onClick={() => setActiveCapability(isExpanded ? null : idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isExpanded
                    ? "bg-slate-900 border-orange-500/80 shadow-2xl shadow-orange-500/10 -translate-y-1.5"
                    : "bg-slate-900/60 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700 hover:-translate-y-1 shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Sora'] mb-2.5">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                    {cap.summary}
                  </p>

                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed animate-fadeIn">
                      <div className="flex items-start gap-2 mb-2 text-amber-400">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span className="font-semibold">Deep Dive:</span>
                      </div>
                      {cap.details}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-orange-400 hover:text-orange-300">
                  <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
