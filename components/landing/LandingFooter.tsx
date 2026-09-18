import { LMS_URL, LANDING_PAGE_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowUp, ShieldCheck, Heart } from "lucide-react";

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column (Span 2 on lg) */}
          <div className="lg:col-span-2">
            <a href={LANDING_PAGE_URL} className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-orange-400 to-amber-300 font-['Sora']">
                    S
                  </span>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight font-['Sora']">
                  Spectrum<span className="text-orange-400">Malaysia</span> LMS
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                  Digital Learning Ecosystem
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              SpectrumMalaysia LMS is a comprehensive digital learning and programme-management platform
              connecting learners, trainers, programmes and learning resources through one secure ecosystem.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-amber-400">Positioning:</span>
              <span>Empowering Learning. Connecting Communities. Building Futures.</span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Sora'] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#programmes" className="hover:text-orange-400 transition-colors">
                  Programmes Catalogue
                </a>
              </li>
              <li>
                <a href="#learning" className="hover:text-orange-400 transition-colors">
                  Digital Learning Vault
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-orange-400 transition-colors">
                  Trainer Workspaces
                </a>
              </li>
              <li>
                <a href="#participants" className="hover:text-orange-400 transition-colors">
                  Participant Portals
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-orange-400 transition-colors">
                  Analytics & Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Sora'] mb-4">
              Information
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About SpectrumMalaysia
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-orange-400 transition-colors">
                  Achievements & Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact & Support
                </a>
              </li>
              <li>
                <Link href={LMS_URL} className="hover:text-orange-400 transition-colors">
                  Certificate Verification
                </Link>
              </li>
              <li>
                <span className="text-slate-600">Privacy Policy (PDPA)</span>
              </li>
              <li>
                <span className="text-slate-600">Terms of Service</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Role-Based Portals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Sora'] mb-4">
              Portal Access
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={LMS_URL}
                  className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-medium"
                >
                  <span>Participant Login</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href={LMS_URL}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium"
                >
                  <span>Trainer Login</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href={LMS_URL}
                  className="inline-flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-medium"
                >
                  <span>Management Login</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Authorized roles: Super Admin, Admin, Trainer, Participant, Observer.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            &copy; {currentYear} SpectrumMalaysia LMS. All Rights Reserved. Empowering Learning. Connecting Communities.
            Building Futures.
          </p>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sovereign Cloud Data Architecture</span>
            </span>
            <a
              href="#top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white text-slate-400 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
