"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Sparkles,
  Award,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/spectrum-profile-data";
import { ContactInfo } from "@/services/landing.service";

interface ContactSectionProps {
  contact?: ContactInfo;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    divisionInterest: "Corporate Training (HRD Corp)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMsg("Please fill in your name, email address, and message.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFeedbackMsg(
        "Thank you! Your inquiry has been received by Spectrum Edu Resources. An advisor will contact you within 24 hours."
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organisation: "",
        divisionInterest: "Corporate Training (HRD Corp)",
        message: "",
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Contact Details from PDF Page 24 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora'] mb-4">
                Let&apos;s Build Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                  Workforce Together.
                </span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-8 font-normal">
                Talk to us about HRD Corp claimable corporate training, stackable micro-credentials, or tertiary student recruitment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-['Sora']">
                      Registered Corporate Entity
                    </div>
                    <div className="text-sm font-bold text-white font-['Sora'] mt-0.5">
                      {COMPANY_INFO.name}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      Company No: {COMPANY_INFO.registrationNo}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-['Sora']">
                      HRD Corp Accreditation
                    </div>
                    <div className="text-sm text-slate-200 mt-0.5">
                      {COMPANY_INFO.hrdCorp.status}
                    </div>
                    <div className="text-xs text-amber-300 font-mono mt-0.5">
                      Serial No: {COMPANY_INFO.hrdCorp.certificateSerialNo}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-['Sora']">
                      Office Address
                    </div>
                    <div className="text-sm text-slate-300 mt-0.5 leading-relaxed max-w-sm">
                      {COMPANY_INFO.address.suite},<br />
                      {COMPANY_INFO.address.building},<br />
                      {COMPANY_INFO.address.postcode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-['Sora']">
                      Electronic Mail
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-['Sora']">
                      Operating Hours
                    </div>
                    <div className="text-sm text-slate-300 mt-0.5">{COMPANY_INFO.contact.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered under Pembangunan Sumber Manusia Berhad (Act 2001)</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-['Sora'] mb-2">
                Send an Inquiry or TNA Request
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Connect with our corporate training directors and institutional admissions consultants.
              </p>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2.5 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm mb-6">
                  {feedbackMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-['Sora']">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Encik Azman Ibrahim"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-['Sora']">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="azman@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-['Sora']">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+60 12-345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-['Sora']">
                      Organisation / Employer
                    </label>
                    <input
                      type="text"
                      placeholder="Company or College Name"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-['Sora']">
                    Division of Interest
                  </label>
                  <select
                    value={formData.divisionInterest}
                    onChange={(e) => setFormData({ ...formData, divisionInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400/60"
                  >
                    <option value="Corporate Training (HRD Corp)">Division 01: Corporate Training (HRD Corp Claimable)</option>
                    <option value="Student Recruitment">Division 02: Student Recruitment (Colleges & Universities)</option>
                    <option value="Lifelong Learning & Micro-Credentials">Division 03: Lifelong Learning (MQA & JPK Micro-Credentials)</option>
                    <option value="Custom Training Needs Analysis (TNA)">Custom Training Needs Analysis (TNA)</option>
                    <option value="LMS Portal Access">LMS Digital Learning Portal Access</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-['Sora']">
                    Message / Training Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your team size, preferred course areas, dates, or student recruitment goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
