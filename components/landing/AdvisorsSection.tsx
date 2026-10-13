import { Shield, Award, GraduationCap, Building2 } from "lucide-react";
import { BOARD_OF_ADVISORS } from "@/lib/spectrum-profile-data";

export function AdvisorsSection() {
  return (
    <section id="advisors" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Leadership & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Sora']">
            Board of Advisors
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Distinguished leaders from national qualifications authorities, public universities, higher education institutions, and industry training councils guiding our curriculum standards.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOARD_OF_ADVISORS.map((advisor) => (
            <div
              key={advisor.name}
              className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Initials Avatar & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-800 border border-slate-700/80 group-hover:border-amber-500/50 flex items-center justify-center font-extrabold text-base text-amber-400 font-['Sora'] shadow-md transition-colors">
                    {advisor.initials}
                  </div>

                  {advisor.badge && (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-300 uppercase tracking-wider font-['Sora']">
                      {advisor.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white font-['Sora'] mb-1.5 group-hover:text-amber-300 transition-colors">
                  {advisor.name}
                </h3>

                {/* Role */}
                <div className="text-xs font-semibold text-orange-400 mb-2 font-['Sora']">
                  {advisor.role}
                </div>

                {/* Organisation */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {advisor.organization}
                </p>
              </div>

              {/* Verified Governance Marker */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Advisory & Curriculum Oversight</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
