"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LMS_URL, LANDING_PAGE_URL } from "@/lib/config";
import { SpectrumLogo } from "./SpectrumLogo";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Award,
  Briefcase,
  Globe,
  Layers,
  BookOpen,
  Users,
  Building2,
  FileText,
  Phone,
  Home,
  GraduationCap,
} from "lucide-react";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>("divisions");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const divisionsMenu = [
    {
      title: "Corporate Training (HRD Corp)",
      desc: "45 Claimable public, in-house & online programmes",
      href: "#programmes",
      icon: Briefcase,
      badge: "45 Courses",
    },
    {
      title: "HRD Corp Claim Roadmap",
      desc: "5-Step employer levy claim and TNA guide",
      href: "#hrd-claim",
      icon: FileText,
      badge: "100% Levy",
    },
    {
      title: "Student Recruitment",
      desc: "Local & international admissions into colleges",
      href: "#recruitment",
      icon: Globe,
      badge: "Global Network",
    },
    {
      title: "Lifelong Learning & TVET",
      desc: "MQA & JPK micro-credentials stackable to degree",
      href: "#lifelong",
      icon: Layers,
      badge: "MQA / JPK",
    },
  ];

  const companyMenu = [
    {
      title: "About Spectrum",
      desc: "Company profile, core values & mission",
      href: "#about",
      icon: Building2,
    },
    {
      title: "Board of Advisors",
      desc: "Academic & statutory governance council",
      href: "#advisors",
      icon: GraduationCap,
    },
    {
      title: "Accreditation & Partners",
      desc: "HRD Corp, MQA, JPK, universities & colleges",
      href: "#partners",
      icon: Award,
    },
    {
      title: "Training Gallery",
      desc: "Program Madani & field training sessions",
      href: "#advisors", // or gallery
      icon: Users,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 shadow-2xl py-2.5"
            : "bg-slate-950/85 backdrop-blur-md border-b border-slate-900/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" ref={dropdownRef}>
            {/* Logo */}
            <a
              href={LANDING_PAGE_URL}
              className="flex items-center group focus:outline-none"
              aria-label="Spectrum Edu Resources (M) Sdn. Bhd."
            >
              <SpectrumLogo size="md" variant="horizontal" />
            </a>

            {/* Desktop Centered Floating Navigation Pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 rounded-full px-2.5 py-1 shadow-inner backdrop-blur-md">
              {/* Dropdown 1: Our Divisions & Services */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("divisions")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "divisions" ? null : "divisions")}
                  className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-full flex items-center gap-1.5 transition-all ${
                    openDropdown === "divisions"
                      ? "text-amber-400 bg-slate-800/80 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>Our Divisions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === "divisions" ? "rotate-180 text-amber-400" : "text-slate-400"
                    }`}
                  />
                </button>

                {openDropdown === "divisions" && (
                  <div className="absolute top-full left-0 mt-2 w-96 rounded-2xl bg-slate-950/98 border border-slate-800 shadow-2xl p-2.5 backdrop-blur-2xl animate-fadeIn z-50">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 font-['Sora'] flex items-center justify-between">
                      <span>3 Core Education Pillars</span>
                      <span className="text-amber-400 font-mono">HRD Corp Registered</span>
                    </div>
                    {divisionsMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start justify-between gap-3 p-2.5 rounded-xl hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 group-hover:text-amber-300 shrink-0 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors font-['Sora']">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5 max-w-[210px]">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                          {item.badge && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[9px] font-bold text-amber-300 font-mono self-start mt-1">
                              {item.badge}
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Direct Link 1: 45 HRD Catalog */}
              <a
                href="#programmes"
                className="px-3.5 py-1.5 text-[13px] font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-colors flex items-center gap-1.5"
              >
                <span>45 HRD Courses</span>
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold font-mono">
                  45
                </span>
              </a>

              {/* Direct Link 2: 5-Step Claim Roadmap */}
              <a
                href="#hrd-claim"
                className="px-3.5 py-1.5 text-[13px] font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-colors"
              >
                Claim Roadmap
              </a>

              {/* Dropdown 2: About Spectrum & Governance */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("company")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
                  className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-full flex items-center gap-1.5 transition-all ${
                    openDropdown === "company"
                      ? "text-amber-400 bg-slate-800/80 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === "company" ? "rotate-180 text-amber-400" : "text-slate-400"
                    }`}
                  />
                </button>

                {openDropdown === "company" && (
                  <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl bg-slate-950/98 border border-slate-800 shadow-2xl p-2.5 backdrop-blur-2xl animate-fadeIn z-50">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 font-['Sora']">
                      Governance & Accreditations
                    </div>
                    {companyMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 group-hover:text-amber-300 shrink-0 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors font-['Sora']">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Direct Link 3: Contact */}
              <a
                href="#contact"
                className="px-3.5 py-1.5 text-[13px] font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Right Action Bar */}
            <div className="hidden sm:flex items-center gap-3">
              {/* HRD Corp Badge with Live Pulse */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-semibold text-amber-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>HRD Corp Registered</span>
              </div>

              <Link
                href={LMS_URL}
                className="px-4 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Access LMS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href={LMS_URL}
                className="px-2.5 py-1.5 text-xs font-bold text-white rounded-md bg-gradient-to-r from-red-600 to-orange-500"
              >
                Access LMS
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Neat Accordions */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <SpectrumLogo size="sm" variant="horizontal" />
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-300">
                <Award className="w-3 h-3" />
                <span>HRD Corp Registered</span>
              </div>
            </div>

            {/* Accordion 1: Our Divisions */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "divisions" ? null : "divisions"
                  )
                }
                className="w-full p-3.5 flex items-center justify-between text-left text-sm font-bold text-white font-['Sora']"
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>Our Three Divisions</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileExpandedSection === "divisions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "divisions" && (
                <div className="p-3 pt-0 space-y-1.5 border-t border-slate-800/60">
                  {divisionsMenu.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 2: Company Profile */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "company" ? null : "company"
                  )
                }
                className="w-full p-3.5 flex items-center justify-between text-left text-sm font-bold text-white font-['Sora']"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  <span>Company & Governance</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileExpandedSection === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "company" && (
                <div className="p-3 pt-0 space-y-1.5 border-t border-slate-800/60">
                  {companyMenu.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <a
              href="#programmes"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-sm font-bold text-white font-['Sora']"
            >
              <span>45 Claimable Programmes Catalogue</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono">
                45 Courses
              </span>
            </a>

            <a
              href="#hrd-claim"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-sm font-bold text-white font-['Sora']"
            >
              <span>5-Step HRD Claim Roadmap</span>
              <FileText className="w-4 h-4 text-amber-400" />
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-sm font-bold text-white font-['Sora']"
            >
              <span>Contact & Office Location</span>
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800 mt-6">
            <Link
              href={LMS_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center font-bold text-white bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              <span>Access Spectrum LMS Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Spectrum Edu Resources (M) Sdn. Bhd.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
