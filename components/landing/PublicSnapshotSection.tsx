import { PublicSnapshot } from "@/services/landing.service";
import { ArrowRight, BookOpen, GraduationCap, Users, Award, Calendar, ExternalLink, Clock } from "lucide-react";

export function PublicSnapshotSection({ snapshot }: { snapshot: PublicSnapshot | null }) {
  if (!snapshot) {
    // Fallback if API fails
    return (
      <section className="py-24 px-6 md:px-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Sora'] tracking-tight">
            Latest LMS Information
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our public snapshot is currently updating. Please check back shortly for the latest statistics and programme updates.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden" id="snapshot">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Snapshot
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Sora'] tracking-tight">
            Spectrum Malaysia — Latest Updates
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A real-time glimpse into the active learning ecosystem, showcasing our latest achievements, active programmes, and community growth.
          </p>
        </div>

        {/* High-level Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-['Sora']">
              {snapshot.activeLearners.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 font-medium">Active Learners</div>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-['Sora']">
              {snapshot.programmes.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 font-medium">Active Programmes</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-['Sora']">
              {snapshot.trainers.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 font-medium">Registered Trainers</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white mb-1 font-['Sora']">
              {snapshot.certificatesIssued.toLocaleString()}
            </div>
            <div className="text-sm text-slate-400 font-medium">Certificates Issued</div>
          </div>
        </div>

        {/* Latest Updates Feed */}
        {snapshot.latestUpdates && snapshot.latestUpdates.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 font-['Sora'] flex items-center gap-3">
              <Calendar className="w-6 h-6 text-emerald-400" />
              Latest Programmes & Updates
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {snapshot.latestUpdates.map((update, idx) => (
                <div key={update.id || idx} className="group flex flex-col p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-800 text-emerald-400 border border-emerald-500/20">
                      {update.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(update.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {update.title}
                  </h4>
                  
                  <p className="text-sm text-slate-400 mb-6 flex-grow line-clamp-3">
                    {update.description || "Learn more about this new programme in the LMS portal."}
                  </p>
                  
                  <a
                    href={update.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white mt-auto hover:text-emerald-400 transition-colors"
                  >
                    Learn More in LMS
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Last Updated Timestamp */}
        <div className="text-center pt-8 border-t border-slate-800/50">
          <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Snapshot generated on: {new Date(snapshot.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
}
