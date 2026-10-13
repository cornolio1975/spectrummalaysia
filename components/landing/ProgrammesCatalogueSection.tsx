"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { LMS_URL } from "@/lib/config";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  Search,
  CheckCircle2,
  X,
  ExternalLink,
  Tag,
  Building,
  Laptop,
  Users,
} from "lucide-react";
import { HRD_PROGRAMME_CATALOGUE, CourseItem } from "@/lib/spectrum-profile-data";

export function ProgrammesCatalogueSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCourse, setActiveCourse] = useState<CourseItem | null>(null);

  // Flatten all 45 courses
  const allCourses = useMemo(() => {
    return HRD_PROGRAMME_CATALOGUE.flatMap((cat) => cat.courses);
  }, []);

  // Filtered courses based on category & search
  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" ||
        course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        HRD_PROGRAMME_CATALOGUE.find((c) => c.id === selectedCategory)?.name === course.category;

      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allCourses, selectedCategory, searchQuery]);

  return (
    <section id="programmes" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glows matching Spectrum branding */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>HRD Corp Claimable Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Sora']">
              45 Programmes Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                9 Strategic Areas
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Each programme is 100% claimable under your HRD Corp levy and can be run as a public, in-house, or online class tailored to your industry.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 45 courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors"
            />
          </div>
        </div>

        {/* 9 Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-slate-800">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all font-['Sora'] ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All 45 Programmes
          </button>

          {HRD_PROGRAMME_CATALOGUE.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all font-['Sora'] flex items-center gap-1.5 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <span>{category.name}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-slate-950/60 text-[10px] text-amber-300">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/10 group cursor-pointer"
              onClick={() => setActiveCourse(course)}
            >
              <div>
                {/* Card Top: Duration & Claimable Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>HRD Corp Claimable</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-[11px] font-semibold text-slate-300 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                {/* Category kicker */}
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-['Sora']">
                  {course.category}
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-white font-['Sora'] leading-snug group-hover:text-amber-300 transition-colors mb-3">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>
              </div>

              {/* Card Footer: Click to View Details */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                <span>View Course Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white font-['Sora']">No programmes matched your filter</h4>
            <p className="text-xs text-slate-400 mt-1">Try resetting the search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Callout: Looking for custom in-house curriculum */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-white font-['Sora']">
              Need a Customized Corporate In-House Programme?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              All 45 courses can be fully tailored to your industry, team structure, and corporate KPIs. We assist with complete HRD Corp grant filing and documentation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all"
            >
              Request Custom TNA Quote
            </a>
            <Link
              href={LMS_URL}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all"
            >
              Access LMS
            </Link>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setActiveCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold text-amber-300">
                100% HRD Corp Claimable
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300">
                Duration: {activeCourse.duration}
              </span>
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-['Sora']">
              {activeCourse.category}
            </div>

            <h3 className="text-2xl font-bold text-white font-['Sora'] mb-4">
              {activeCourse.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeCourse.description}
            </p>

            {/* Highlights of Delivery */}
            <div className="space-y-2 mb-8 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs font-bold text-white uppercase tracking-wider font-['Sora'] mb-2">
                Course Highlights & Delivery
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Delivered by HRD Corp Certified TTT Trainers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Available via In-House, Public, or Remote Online Classes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full documentation supplied for employer grant approval & levy claim</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                onClick={() => setActiveCourse(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
              >
                Request Proposal for this Course
              </a>
              <Link
                href={LMS_URL}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm text-center border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore in LMS Portal</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
