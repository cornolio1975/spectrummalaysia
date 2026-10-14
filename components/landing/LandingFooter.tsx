import { LMS_URL, LANDING_PAGE_URL } from "@/lib/config";
import Link from "next/link";
import { SpectrumLogo } from "./SpectrumLogo";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";
import { ShieldCheck, Award, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Official Company Brand */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href={LANDING_PAGE_URL} className="inline-block mb-4">
                <img
                  src="/spectrum-logo.png"
                  alt="Spectrum Edu Resources (M) Sdn. Bhd."
                  className="h-14 sm:h-16 w-auto object-contain"
                  loading="eager"
                />
              </a>

              <div className="text-xs font-bold text-slate-900 font-['Sora'] mt-1">
                {COMPANY_INFO.name}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                Company No. {COMPANY_INFO.registrationNo}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed max-w-sm">
                Empowering Minds. Building Futures. Delivering comprehensive HRD Corp claimable corporate training, nationwide student recruitment, and lifelong micro-credentials.
              </p>

              <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-orange-600 shrink-0" />
                <div className="text-[11px] text-slate-800 leading-tight">
                  <span className="font-bold text-orange-700">HRD Corp Registered Provider</span>
                  <div className="text-slate-500 font-mono">Serial No: {COMPANY_INFO.hrdCorp.certificateSerialNo}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Our Three Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Sora'] mb-4">
              Our Three Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#divisions" className="hover:text-orange-600 transition-colors">
                  01. Corporate Training (HRD Corp)
                </a>
              </li>
              <li>
                <a href="#recruitment" className="hover:text-orange-600 transition-colors">
                  02. Student Recruitment
                </a>
              </li>
              <li>
                <a href="#lifelong" className="hover:text-orange-600 transition-colors">
                  03. Lifelong Learning & Micro-Credentials
                </a>
              </li>
              <li>
                <a href="#hrd-claim" className="hover:text-orange-600 transition-colors">
                  HRD Corp Claim Guide (5 Steps)
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-orange-600 transition-colors">
                  45 Claimable Programmes Catalogue
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Partners */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Sora'] mb-4">
              Governance & Partners
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#advisors" className="hover:text-orange-600 transition-colors">
                  Board of Advisors
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-orange-600 transition-colors">
                  Accreditation Bodies
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-orange-600 transition-colors">
                  Institutional Partners
                </a>
              </li>
              <li>
                <Link href={`${LMS_URL.replace(/\/$/, "")}/verify`} className="hover:text-orange-600 transition-colors">
                  Verify a Certificate
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600 transition-colors">
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Portal Access */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Sora'] mb-4">
              LMS Portal & Offices
            </h4>

            <div className="text-xs text-slate-600 space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Suite 3A.18, Block I, Setiawalk, Puchong, Selangor</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-orange-600">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <Link
              href={LMS_URL}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all"
            >
              <span>Access Spectrum LMS Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All Rights Reserved. Empowering Minds. Building Futures.
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Pembangunan Sumber Manusia Berhad (Act 2001) Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
