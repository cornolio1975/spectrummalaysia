import { ACCREDITATIONS, INSTITUTIONAL_PARTNERS } from "@/lib/spectrum-profile-data";
import { ShieldCheck, Award, Building2 } from "lucide-react";

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Accreditation & Awarding Bodies */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-['Sora']">
            National Recognition & Statutory Bodies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Sora'] mt-1">
            Accreditation & Awarding Bodies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Aligned with national qualifications frameworks, institutional benchmarks, and accredited awarding agencies across Malaysia.
          </p>
        </div>

        {/* Accreditation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-20">
          {ACCREDITATIONS.map((partner) => (
            <div
              key={partner.name}
              className="h-28 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-sm">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-orange-600 font-['Sora'] transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 group-hover:text-slate-700 mt-0.5 transition-colors line-clamp-1 leading-tight">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

        {/* Institutional Partners */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-['Sora']">
            Higher Education Alliances
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Sora'] mt-1">
            Institutional Partners
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Colleges, universities, and specialized education centers partnering for student admissions, progression, and academic credit transfer.
          </p>
        </div>

        {/* Institutional Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INSTITUTIONAL_PARTNERS.map((inst) => (
            <div
              key={inst.name}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-orange-200 hover:bg-white hover:shadow-sm transition-all flex items-start gap-3.5 group"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-orange-600 shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-['Sora'] group-hover:text-orange-600 transition-colors">
                  {inst.name}
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-2">
                  {inst.fullName}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-semibold text-slate-700 shadow-sm">
                  {inst.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
