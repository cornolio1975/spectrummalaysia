"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
  Users,
  MessageSquare,
  Laptop,
  ShieldAlert,
  Truck,
  TrendingUp,
  FileSpreadsheet,
  Award,
  Briefcase,
  Layers,
} from "lucide-react";
import { HRD_PROGRAMME_CATALOGUE, CourseItem } from "@/lib/spectrum-profile-data";

const CATEGORY_CONFIG: Record<
  string,
  {
    icon: typeof Users;
    image: string;
    badgeColor: string;
    accentColor: string;
    borderHover: string;
  }
> = {
  leadership: {
    icon: Users,
    image: "/images/cat-leadership.jpg",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    accentColor: "text-blue-600",
    borderHover: "hover:border-blue-300",
  },
  "Leadership & Management": {
    icon: Users,
    image: "/images/cat-leadership.jpg",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    accentColor: "text-blue-600",
    borderHover: "hover:border-blue-300",
  },
  communication: {
    icon: MessageSquare,
    image: "/images/cat-communication.jpg",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    accentColor: "text-cyan-600",
    borderHover: "hover:border-cyan-300",
  },
  "Communication & Soft Skills": {
    icon: MessageSquare,
    image: "/images/cat-communication.jpg",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    accentColor: "text-cyan-600",
    borderHover: "hover:border-cyan-300",
  },
  digital: {
    icon: Laptop,
    image: "/images/cat-it-digital.jpg",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    accentColor: "text-violet-600",
    borderHover: "hover:border-violet-300",
  },
  "Digital & Technology": {
    icon: Laptop,
    image: "/images/cat-it-digital.jpg",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    accentColor: "text-violet-600",
    borderHover: "hover:border-violet-300",
  },
  osh: {
    icon: ShieldAlert,
    image: "/images/cat-safety-health.jpg",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    accentColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  "Occupational Safety & Health": {
    icon: ShieldAlert,
    image: "/images/cat-safety-health.jpg",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    accentColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  "Occupational Safety & Health (OSH)": {
    icon: ShieldAlert,
    image: "/images/cat-safety-health.jpg",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    accentColor: "text-amber-600",
    borderHover: "hover:border-amber-300",
  },
  logistics: {
    icon: Truck,
    image: "/images/cat-logistics.jpg",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    accentColor: "text-sky-600",
    borderHover: "hover:border-sky-300",
  },
  "Logistics & Supply Chain": {
    icon: Truck,
    image: "/images/cat-logistics.jpg",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    accentColor: "text-sky-600",
    borderHover: "hover:border-sky-300",
  },
  sales: {
    icon: TrendingUp,
    image: "/images/cat-sales-marketing.jpg",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    accentColor: "text-rose-600",
    borderHover: "hover:border-rose-300",
  },
  "Customer Service & Sales": {
    icon: TrendingUp,
    image: "/images/cat-sales-marketing.jpg",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    accentColor: "text-rose-600",
    borderHover: "hover:border-rose-300",
  },
  finance: {
    icon: FileSpreadsheet,
    image: "/images/cat-finance.jpg",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  "Finance, HR & Administration": {
    icon: FileSpreadsheet,
    image: "/images/cat-finance.jpg",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accentColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  quality: {
    icon: Award,
    image: "/images/cat-quality-productivity.jpg",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    accentColor: "text-indigo-600",
    borderHover: "hover:border-indigo-300",
  },
  "Quality & Productivity": {
    icon: Award,
    image: "/images/cat-quality-productivity.jpg",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    accentColor: "text-indigo-600",
    borderHover: "hover:border-indigo-300",
  },
  workforce: {
    icon: Briefcase,
    image: "/images/cat-human-resource.jpg",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    accentColor: "text-teal-600",
    borderHover: "hover:border-teal-300",
  },
  "Workforce Development": {
    icon: Briefcase,
    image: "/images/cat-human-resource.jpg",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    accentColor: "text-teal-600",
    borderHover: "hover:border-teal-300",
  },
};

export function ProgrammesCatalogueSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCourse, setActiveCourse] = useState<CourseItem | null>(null);

  // Flatten all 45 courses, ensuring categoryId is preserved
  const allCourses = useMemo(() => {
    return HRD_PROGRAMME_CATALOGUE.flatMap((cat) =>
      cat.courses.map((course) => ({
        ...course,
        categoryId: course.categoryId || cat.id,
      }))
    );
  }, []);

  // Filtered courses based on category & search
  const filteredCourses = useMemo(() => {
    const activeCat = HRD_PROGRAMME_CATALOGUE.find((c) => c.id === selectedCategory);
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" ||
        course.categoryId === selectedCategory ||
        (activeCat ? activeCat.courses.some((c) => c.id === course.id) : false) ||
        course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        activeCat?.name.toLowerCase() === course.category.toLowerCase() ||
        (selectedCategory === "osh" &&
          (course.category.toLowerCase().includes("safety") ||
            course.category.toLowerCase().includes("health") ||
            course.category.toLowerCase().includes("osh")));

      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allCourses, selectedCategory, searchQuery]);

  // Find currently active category object (if not "all")
  const currentCategoryData = useMemo(() => {
    if (selectedCategory === "all") return null;
    return HRD_PROGRAMME_CATALOGUE.find((c) => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  return (
    <section id="programmes" className="py-12 sm:py-16 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>HRD Corp Claimable Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Sora']">
              45 Programmes Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600">
                9 Strategic Areas
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
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
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* 9 Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-slate-200">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all font-['Sora'] flex items-center gap-1.5 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-500/20"
                : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All 45 Programmes</span>
          </button>

          {HRD_PROGRAMME_CATALOGUE.map((category) => {
            const cfg = CATEGORY_CONFIG[category.id] || CATEGORY_CONFIG.leadership;
            const Icon = cfg.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all font-['Sora'] flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{category.name}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Spotlight Header (When a single category is selected) */}
        {currentCategoryData && (
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-fadeIn">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-orange-600 font-['Sora'] shadow-xs">
                  Strategic Area Spotlight
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800">
                  {currentCategoryData.count} HRD Corp Claimable Courses
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Sora'] mb-2">
                {currentCategoryData.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {currentCategoryData.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% HRD Corp Levy Claimable</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>In-House & Public Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Certified TTT Trainers</span>
                </div>
              </div>
            </div>

            {/* Single Curated Category Showcase Image */}
            <div className="lg:col-span-5 relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <Image
                src={CATEGORY_CONFIG[currentCategoryData.id]?.image || "/images/cat-leadership.jpg"}
                alt={`${currentCategoryData.name} training session`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                  Professional Curriculum
                </span>
                <span className="font-semibold text-orange-200">
                  {currentCategoryData.count} Modules Available
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Executive Portfolio Strip (When "All 45 Programmes" is selected) */}
        {!currentCategoryData && !searchQuery.trim() && (
          <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-extrabold text-slate-900 font-['Sora']">45</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">Approved Courses</div>
              <div className="text-[11px] text-slate-400 mt-1">100% Levy Claimable</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-extrabold text-slate-900 font-['Sora']">9</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">Strategic Disciplines</div>
              <div className="text-[11px] text-slate-400 mt-1">Leadership to OSH & ESG</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-extrabold text-slate-900 font-['Sora']">3</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">Delivery Formats</div>
              <div className="text-[11px] text-slate-400 mt-1">In-House, Public, Online</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-extrabold text-slate-900 font-['Sora']">100%</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">TTT Certified</div>
              <div className="text-[11px] text-slate-400 mt-1">Industry-Experienced Faculty</div>
            </div>
          </div>
        )}

        {/* Clean, Executive Programme Cards Grid (Zero Repeated Photo Fatigue) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const cfg =
              CATEGORY_CONFIG[course.category] ||
              (course.categoryId ? CATEGORY_CONFIG[course.categoryId] : null) ||
              CATEGORY_CONFIG.leadership;
            const Icon = cfg.icon;

            return (
              <div
                key={course.id}
                className="rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group cursor-pointer"
                onClick={() => setActiveCourse(course)}
              >
                <div>
                  {/* Card Header: Category Icon, Name & Claimable Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-xs ${cfg.badgeColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block font-['Sora']">
                          {course.category}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800 flex items-center gap-1 shrink-0">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>100% Claimable</span>
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Sora'] leading-snug group-hover:text-orange-600 transition-colors mb-2.5">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Metadata: Duration & Delivery Mode */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-mono font-medium">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-600">
                      In-House
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-600">
                      Public
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-600">
                      Online
                    </span>
                  </div>
                </div>

                {/* Card Footer: Click to View Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 group-hover:text-orange-700">
                  <span>View Syllabus & Outline</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900 font-['Sora']">No programmes matched your filter</h4>
            <p className="text-xs text-slate-500 mt-1">Try resetting the search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-800 shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Callout: Looking for custom in-house curriculum */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-['Sora']">
              Need a Customized Corporate In-House Programme?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              All 45 courses can be fully tailored to your industry, team structure, and corporate KPIs. We assist with complete HRD Corp grant filing and documentation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all"
            >
              Request Custom TNA Quote
            </a>
            <Link
              href={LMS_URL}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 transition-all shadow-sm"
            >
              Access LMS
            </Link>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setActiveCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden bg-slate-100 border-b border-slate-200">
              <Image
                src={
                  CATEGORY_CONFIG[activeCourse.category]?.image ||
                  (activeCourse.categoryId ? CATEGORY_CONFIG[activeCourse.categoryId]?.image : null) ||
                  "/images/cat-leadership.jpg"
                }
                alt={activeCourse.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-4 left-6 sm:left-8 right-6 flex items-center justify-between text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-300 font-['Sora'] bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {activeCourse.category}
                </span>
                <span className="text-xs font-semibold bg-emerald-600/90 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  100% HRD Corp Claimable
                </span>
              </div>
            </div>

            {/* Modal Meta Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800">
                HRD Corp Approved
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700">
                Duration: {activeCourse.duration}
              </span>
            </div>

            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2 font-['Sora']">
              {activeCourse.category}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 font-['Sora'] mb-4">
              {activeCourse.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeCourse.description}
            </p>

            {/* Highlights of Delivery */}
            <div className="space-y-2 mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Sora'] mb-2">
                Course Highlights & Delivery
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Delivered by HRD Corp Certified TTT Trainers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Available via In-House, Public, or Remote Online Classes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm text-center border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore in LMS Portal</span>
                <ExternalLink className="w-4 h-4 text-slate-600" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
