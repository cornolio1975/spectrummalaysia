import Image from "next/image";
import { Globe, Users, Award, Briefcase, CheckCircle2, MapPin, Building, GraduationCap, ArrowRight } from "lucide-react";
import { RECRUITMENT_REGIONS, COMPANY_INFO } from "@/lib/spectrum-profile-data";

export function StudentRecruitmentSection() {
  const approaches = [
    {
      title: "Diverse Talent Pool",
      desc: "We recruit both local and international students, bringing a rich variety of cultural backgrounds, academic strengths, and perspectives.",
      icon: Users,
    },
    {
      title: "Global Reach, Local Engagement",
      desc: "International recruitment platforms, education expos and fairs, reinforced by an entrenched presence and counselor network in Malaysian schools.",
      icon: Globe,
    },
    {
      title: "Targeted Skill Development",
      desc: "Internships, scholarships, and career-readiness pathways that align student competencies with high-growth industry demands.",
      icon: Briefcase,
    },
    {
      title: "Inclusive Assessment Process",
      desc: "Every candidate is holistically evaluated on qualifications, academic readiness, problem-solving skills, and career potential.",
      icon: CheckCircle2,
    },
    {
      title: "Long-Term Career Development",
      desc: "Structured mentorship, professional networking, and alumni integration that smoothly transitions students from campus into industry careers.",
      icon: GraduationCap,
    },
  ];

  const metrics = [
    { value: "80–100%", label: "Yearly Target Achieved", desc: "Average annual institutional recruitment goal met" },
    { value: "15", label: "Marketing Executives", desc: "Permanent dedicated admissions and marketing staff" },
    { value: "20+", label: "Agents Nationwide", desc: "Active network covering Peninsular, Sabah & Sarawak" },
    { value: "25 yrs", label: "Industry Reputation", desc: "Trusted track record in higher education recruitment" },
  ];

  return (
    <section id="recruitment" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Division 02 • Higher Education Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Sora']">
            Student Recruitment
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Connecting local and international students with Malaysia&apos;s premier colleges and universities through established admissions channels and global outreach.
          </p>
        </div>

        {/* 4 Big Recruitment Metrics from PDF Page 16 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-orange-500/40 p-6 text-center transition-all shadow-xl group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-['Sora'] mb-1">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-['Sora'] mb-1">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Global Counterparts & College Pedigree Banner */}
        <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl mb-16">
          <div className="mb-6 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-['Sora']">
              Global Sourcing Footprint
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Sora'] mt-1">
              Our International Business Counterparts
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Established overseas agent representations and educational consortia across key source markets:
            </p>
          </div>

          {/* Country Badges */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {RECRUITMENT_REGIONS.map((country) => (
              <span
                key={country}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2 hover:border-amber-400/50 hover:bg-slate-800 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{country}</span>
              </span>
            ))}
          </div>

          {/* College Management Pedigree Card with Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-gradient-to-r from-red-950/40 via-orange-950/30 to-slate-900 border border-orange-500/30 overflow-hidden shadow-lg">
            <div className="lg:col-span-8 p-6 sm:p-7 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-['Sora']">
                  Institutional College Operations Pedigree
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Beyond student recruitment, Spectrum has managed and operated several private colleges in Malaysia as part of its core business model — possessing deep regulatory, MQA accreditation, and campus administration expertise.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 relative min-h-[160px] w-full border-t lg:border-t-0 lg:border-l border-orange-500/20 bg-slate-950">
              <Image
                src="/images/student-recruitment.jpg"
                alt="Institutional student counseling and university recruitment"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 5 Recruitment Approaches */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white font-['Sora']">
              Our Structured Recruitment Approach
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Ensuring high placement rates and academic success for both students and partner institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-orange-500/40 hover:bg-slate-800/40 transition-all p-6 flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white font-['Sora'] mb-2 group-hover:text-amber-300 transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
