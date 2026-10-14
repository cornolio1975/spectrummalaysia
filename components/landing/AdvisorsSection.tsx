import { Shield, Award, GraduationCap, Building2 } from "lucide-react";
import { BOARD_OF_ADVISORS } from "@/lib/spectrum-profile-data";

export function AdvisorsSection() {
  return (
    <section id="advisors" className="py-12 sm:py-16 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Leadership & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Sora']">
            Board of Advisors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Distinguished leaders from national qualifications authorities, public universities, higher education institutions, and industry training councils guiding our curriculum standards.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOARD_OF_ADVISORS.map((advisor) => (
            <div
              key={advisor.name}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group"
            >
              <div>
                {/* Initials Avatar & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-50 to-amber-50 border border-orange-200 flex items-center justify-center font-extrabold text-base text-orange-600 font-['Sora'] shadow-sm transition-colors">
                    {advisor.initials}
                  </div>

                  {advisor.badge && (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-[10px] font-bold text-amber-800 uppercase tracking-wider font-['Sora']">
                      {advisor.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 font-['Sora'] mb-1.5 group-hover:text-orange-600 transition-colors">
                  {advisor.name}
                </h3>

                {/* Role */}
                <div className="text-xs font-semibold text-orange-600 mb-2 font-['Sora']">
                  {advisor.role}
                </div>

                {/* Organisation */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {advisor.organization}
                </p>
              </div>

              {/* Verified Governance Marker */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Advisory & Curriculum Oversight</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
