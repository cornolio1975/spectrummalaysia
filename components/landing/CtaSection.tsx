import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-rose-600/20 via-orange-500/20 to-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-amber-400 uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Large-Scale Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-6 max-w-2xl mx-auto">
            Transform the Way{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300">
              Learning is Delivered.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Connect programmes, trainers, participants and learning resources through one intelligent learning
            ecosystem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#programmes"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>Explore SpectrumMalaysia LMS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/login"
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Login to Portal</span>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Session Handling · Hostinger Cloud Ready · Role-Based Security</span>
          </div>
        </div>
      </div>
    </section>
  );
}
