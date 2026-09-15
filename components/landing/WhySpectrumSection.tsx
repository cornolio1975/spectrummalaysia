import {
  Globe2,
  ShieldCheck,
  Cpu,
  BarChart,
  Layers,
  Network,
  Sparkles,
} from "lucide-react";

export function WhySpectrumSection() {
  const pillars = [
    {
      title: "Centralised",
      icon: Globe2,
      tagline: "One platform for programmes, learning, trainers and participants.",
      description:
        "Eliminates fragmented tools by uniting registration, content streaming, live classes, grading, and certification under a single enterprise roof.",
      color: "from-rose-500 to-red-600",
    },
    {
      title: "Secure",
      icon: ShieldCheck,
      tagline: "Role-based access control with server-side authorisation and Supabase RLS.",
      description:
        "Every database query is validated via PostgreSQL Row-Level Security. Private course materials and participant data remain strictly protected.",
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Scalable",
      icon: Cpu,
      tagline: "Designed to support large numbers of users, programmes and learning resources.",
      description:
        "High-performance cloud architecture running on Next.js and Supabase, capable of scaling across thousands of simultaneous learners and centres.",
      color: "from-amber-500 to-yellow-600",
    },
    {
      title: "Data Driven",
      icon: BarChart,
      tagline: "Powerful dashboards, KPIs and reporting.",
      description:
        "Convert raw classroom attendance and quiz submissions into audit-ready metrics filtered by demographic, state, centre, and time period.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Flexible",
      icon: Layers,
      tagline: "Supports different programmes, modules, resources, assessments and learning models.",
      description:
        "Whether delivering self-paced micro-credentials, youth STEM bootcamps, or executive leadership workshops, configure workflows to suit.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Connected",
      icon: Network,
      tagline: "Creates one unified learning ecosystem connecting all stakeholders.",
      description:
        "Seamless bridge connecting government awarding bodies, trainers, community centres, parents, and participants in one harmonious community.",
      color: "from-indigo-500 to-violet-600",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for Institutional Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              SpectrumMalaysia LMS?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Engineered from the ground up for resilience, compliance, and large-scale educational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 hover:border-orange-500/40 hover:bg-slate-950 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Sora'] mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-orange-400/90 mb-3 leading-snug">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
