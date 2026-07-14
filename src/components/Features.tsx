import { motion } from 'motion/react';
import { Calendar, TrendingUp, ClipboardList, Activity, Sliders, LineChart } from 'lucide-react';

const FEATURES = [
  {
    icon: <Calendar className="w-6 h-6 text-indigo-400" />,
    title: "Dynamic Program Builder",
    description: "Custom strength/hypertrophy routines with assigned weekdays.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#22d3ee]" />,
    title: "Progression Algorithms",
    description: "Auto-calculating linear, step, and undulating progression models.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-indigo-400" />,
    title: "Advanced Set Logging",
    description: "Track Warm-ups, Drop-sets, RIR/RPE, and custom set comments.",
  },
  {
    icon: <Activity className="w-6 h-6 text-[#22d3ee]" />,
    title: "Daily Recovery Metrics",
    description: "Correlation tracking for Sleep, Hydration Levels, and Protein.",
  },
  {
    icon: <Sliders className="w-6 h-6 text-indigo-400" />,
    title: "Execution Quality Tracker",
    description: "Log form rating (Strict, Standard, Loose) to audit lift quality.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-[#22d3ee]" />,
    title: "Epley 1RM Analytics",
    description: "Beautiful mathematical projection curves showing estimated 1RM over time.",
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#05070d] border-t border-[#1e2538] relative">
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tighter uppercase">
            THE METREPS ADVANTAGE
          </h2>
          <div className="w-12 h-1 bg-[#1e2538] mx-auto" />
          <p className="font-mono text-xs text-[#94a3b8] leading-relaxed uppercase">
            Tracking for intermediate to advanced lifters
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, index) => (
            <div
              key={feat.title}
              className="relative p-8 rounded-none bg-[#0a0d16] border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Icon wrapper */}
                <div className="p-3 w-fit rounded-none bg-[#05070d] border border-zinc-800/80 text-white">
                  {feat.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-black text-white uppercase tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[#94a3b8] leading-relaxed uppercase">
                    {feat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro-copy representing the App store status */}
        <div className="mt-16 text-center border-t border-[#1e2538] pt-8">
          <p className="font-mono text-[10px] text-[#94a3b8]/50 uppercase">
            🔒 FULLY OFFLINE-COMPATIBLE. METREPS RESPECTS YOUR PRIVACY AND LOCALIZES ALL BIOMETRICS ON-DEVICE.
          </p>
        </div>

      </div>
    </section>
  );
}
