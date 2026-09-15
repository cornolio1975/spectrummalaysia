export function PartnersSection() {
  const partners = [
    { name: "HRD Corp", type: "National Training Agency" },
    { name: "PERKESO", type: "Employment Social Security" },
    { name: "MQA", type: "Malaysian Qualifications Agency" },
    { name: "JPK Malaysia", type: "Skills Development Department" },
    { name: "KPT", type: "Ministry of Higher Education" },
    { name: "MDEC", type: "Malaysia Digital Economy Corp" },
    { name: "UTMSPACE", type: "Lifelong Learning Institution" },
    { name: "UniSZA", type: "Public University Partner" },
    { name: "UNIMEL", type: "Tertiary Education Partner" },
    { name: "USM", type: "Research University Partner" },
    { name: "OTHM", type: "Awarding Organisation" },
    { name: "ICMS", type: "Professional Body" },
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Institutional Alliances & Awarding Bodies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Sora'] mt-1">
            Built for a Connected Learning Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Aligned with national qualifications frameworks, institutional benchmarks, and accredited awarding
            agencies across Malaysia.
          </p>
        </div>

        {/* Logo Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-24 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 flex flex-col items-center justify-center text-center group"
            >
              <span className="font-extrabold text-base sm:text-lg text-slate-300 group-hover:text-white font-['Sora'] transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 group-hover:text-slate-400 mt-0.5 transition-colors line-clamp-1">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
