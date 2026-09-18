"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { LMS_URL } from "@/lib/config";

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#programmes" },
    { name: "Learning", href: "#learning" },
    { name: "Trainers", href: "#trainers" },
    { name: "Participants", href: "#participants" },
    { name: "Analytics", href: "#analytics" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#top"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="SpectrumMalaysia LMS Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-orange-400 to-amber-300 font-['Sora']">
                    S
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-white font-['Sora']">
                    Spectrum<span className="text-orange-400">Malaysia</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    LMS
                  </span>
                </div>
                <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
                  Digital Learning Ecosystem
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors duration-200 relative group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href=LMS_URL
                className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white rounded-lg border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/60 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href=LMS_URL
                className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Access LMS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href=LMS_URL
                className="px-3 py-1.5 text-xs font-semibold text-white rounded-md bg-orange-500/20 border border-orange-500/40"
              >
                Login
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400/80 mb-2">
              Navigation
            </span>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-orange-400 py-2 border-b border-slate-800/80 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
            <Link
              href=LMS_URL
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 rounded-xl"
            >
              Sign In to Portal
            </Link>
            <Link
              href=LMS_URL
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center font-semibold text-white bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/30"
            >
              Access SpectrumMalaysia LMS
            </Link>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Enterprise & Government Ready</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
