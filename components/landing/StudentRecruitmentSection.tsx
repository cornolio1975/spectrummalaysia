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
    { value: "80–100%", label: "Target Achievement Rate", desc: "Average annual institutional admissions target fulfilled" },
    { value: "15", label: "Admissions Executives", desc: "Permanent dedicated higher education marketing officers" },
    { value: "6+", label: "Key Global Source Markets", desc: "Direct outreach across ASEAN, Central Asia & South Asia" },
    { value: "100%", label: "End-to-End Guidance", desc: "From career counseling and visa support to enrollment" },
  ];

  return (
    <section id="recruitment" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-orange-700 uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5 text-orange-600" />
            <span>Division 02 • Higher Education Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Sora']">
            Student Recruitment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Connecting local and international students with Malaysia&apos;s premier colleges and universities through established admissions channels and global outreach.
          </p>
        </div>

        {/* 4 Targeted Recruitment Metrics (Zero duplicates with KPI strip) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-orange-300 hover:bg-white text-center transition-all shadow-sm hover:shadow-md group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 font-['Sora'] mb-1">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 font-['Sora'] mb-1">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Global Counterparts & College Pedigree Banner */}
        <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-md mb-16">
          <div className="mb-6 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-['Sora']">
              Global Sourcing Footprint
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Sora'] mt-1">
              Our International Business Counterparts
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Established overseas agent representations and educational consortia across key source markets:
            </p>
          </div>

          {/* Country Badges */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {RECRUITMENT_REGIONS.map((country) => (
              <span
                key={country}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2 hover:border-orange-300 hover:text-orange-600 shadow-sm transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>{country}</span>
              </span>
            ))}
          </div>

          {/* College Management Pedigree Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Sora']">
                    Institutional College Operations Pedigree
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Beyond student recruitment, Spectrum has managed and operated several private colleges in Malaysia as part of its core business model — possessing deep regulatory, MQA accreditation compliance, and campus administration expertise.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 relative h-36 w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/student-recruitment.jpg"
                  alt="Higher education campus admissions and student counseling briefing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5 Recruitment Approaches */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 font-['Sora']">
              Our Structured Recruitment Approach
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Ensuring high placement rates and academic success for both students and partner institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-300 hover:shadow-lg transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 font-['Sora'] mb-2 group-hover:text-orange-600 transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
