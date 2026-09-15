import {
  Video,
  FileText,
  Sliders,
  ShieldCheck,
  Lock,
  Play,
  DownloadCloud,
  CheckCircle2,
  FolderLock,
} from "lucide-react";

export function DigitalLearningSection() {
  const resourceCategories = [
    { title: "Structured Video Lessons", count: "350+ Hours", desc: "Encoded video lectures stored securely inside LMS cloud storage with signed access URLs." },
    { title: "PDF & Course Modules", count: "120+ Guides", desc: "Comprehensive step-by-step student workbooks and reference materials." },
    { title: "Trainer Presentation Decks", count: "80+ Decks", desc: "Structured PowerPoint & slide materials organized by lesson topic." },
    { title: "Interactive Assessments", count: "50+ Quizzes", desc: "Self-correcting quizzes and knowledge checks with immediate feedback." },
  ];

  return (
    <section id="learning" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Encrypted LMS Media Vault</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6">
            Learning Resources.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              One Secure Platform.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Private, sovereign learning content hosted within the protected SpectrumMalaysia LMS storage
            architecture — eliminating dependence on third-party video networks while securing intellectual property.
          </p>
        </div>

        {/* Video Player Preview Mockup + Architecture Security Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Video Player Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
              {/* Media Player Shell */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 aspect-video relative flex flex-col justify-between p-4 overflow-hidden group">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badge: Security indicator */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-emerald-400 backdrop-blur-md">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TOKENIZED RLS STREAM</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                    1080p HD
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-2xl shadow-orange-500/40 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                </div>

                {/* Bottom Video Controls Mockup */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold">Modul 02: Kecerdasan Buatan dalam Kehidupan Harian</span>
                    <span className="font-mono text-slate-400">14:28 / 22:50</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-1.5 rounded-full w-[65%]" />
                  </div>
                </div>
              </div>

              {/* Secure Architecture Callout Box below Player */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <FolderLock className="w-5 h-5 text-orange-400 shrink-0" />
                  <span className="text-slate-300">
                    Proprietary media stays inside Supabase storage — never exposed via public URLs.
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Secured
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Resource Cards */}
          <div className="lg:col-span-5 space-y-4">
            {resourceCategories.map((res) => (
              <div
                key={res.title}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-base font-bold text-white font-['Sora']">{res.title}</h4>
                  <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {res.count}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
