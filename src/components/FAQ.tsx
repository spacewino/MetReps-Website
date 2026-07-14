import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: "What is MetReps and who is it designed for?",
    answer: "MetReps is a premium, high-contrast workout planning and logging platform built for intermediate-to-advanced athletes who want to \"min/max\" their training. Unlike casual trackers, MetReps focuses on systematic progressive overload, fatigue management, and mathematical tracking of your strength and recovery indices."
  },
  {
    question: "Is MetReps really 100% free? Are there any hidden subscriptions?",
    answer: "Yes, absolutely. We believe that physical self-improvement, health, and athletic progress should never be locked behind paywalls. There are no monthly subscriptions, no locked premium screens, no microtransactions, and no intrusive ads. Every analytical graph, customization, and logging feature is completely free."
  },
  {
    question: "Where is my workout data stored? Is my privacy protected?",
    answer: "Your privacy is our absolute priority. MetReps is built on an offline-first architecture. This means 100% of your programmed splits, historical lifts, and body metrics are stored locally on your device's browser database. We do not require any registration, email sign-ups, or passwords, and your data is never tracked, shared, or sent to an external server."
  },
  {
    question: "How do I back up my lift history or transfer my data to a new phone?",
    answer: "Since your data resides securely on your own device, we have integrated a one-click Data Backup System. In your Settings menu under App Data Management, you can download a complete backup of your logs, custom exercises, and active programs as a lightweight .json file. When changing devices, simply tap Load Saved Logs and select that file to restore your entire profile instantly."
  },
  {
    question: "How does the app's progression algorithm work?",
    answer: "When you construct or assign a training routine in the Program tab, you can select from our science-backed linear and hypertrophy-oriented progression templates. As you train, MetReps utilizes classic exercise science formulas (such as Epley’s Estimated 1RM equation) combined with a proprietary Work Volume Index to intelligently predict your fatigue levels and suggest precise target weights for your upcoming sessions."
  },
  {
    question: "What makes the Workout screen different from other logs?",
    answer: "When you open your next scheduled session under the active Workout tab, you don't start with a blank slate. MetReps automatically pre-populates your target weights, sets, reps, and RPE targets using your previous successful performance metrics and progression calculations. This removes gym decision-fatigue so you can focus entirely on executing the lift."
  },
  {
    question: "What is the difference between \"Programs\" and \"One-Off\" workouts?",
    answer: "Programs are designed for structured, multi-week training cycles where systematic, progressive overload is mathematically calculated from week to week.\n\nOne-Offs are designed for auxiliary, ad-hoc, or spontaneous workouts (e.g., a hotel gym session, active recovery, or a casual pump day). Logging a One-Off captures your volume and metrics without disrupting the progression flow of your main program."
  },
  {
    question: "How does the app handle bodyweight exercises (like Pull-ups and Dips)?",
    answer: "Within the Settings menu, you can input your default Bodyweight (in kg or lbs). For exercises marked under a \"bodyweight\" modality, the system automatically merges your bodyweight into the volume and tonnage calculations. This guarantees that your progressive overload and work index tracking remain highly accurate over time as your body composition changes."
  },
  {
    question: "Can I customize the look and feel of the app?",
    answer: "Yes! MetReps features three custom-tailored theme presets designed for maximum legibility in different training environments (especially under direct outdoor sunlight or dim gym lighting):\n\n• Subnautic: A clean, sleek Blue Slate dark mode.\n• Feralas: An immersive, high-contrast Forest Green and Onyx canvas.\n• Crimson Desert: A warm, organic Desert Leather and off-white light theme."
  },
  {
    question: "What is \"Execution Quality\" and why does it matter?",
    answer: "To prevent \"ego-lifting\" from throwing off your data, every set you complete can be graded as Strict, Standard, or Loose. This form indicator overlays your trends and reports, letting you see at a glance whether a new personal record was executed with pristine technique or if extreme fatigue compromised your biomechanics."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-[#05070d] border-t border-[#1e2538] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#6366f1] uppercase block">
            // METREPS SUPPORT MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tighter uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto" />
          <p className="text-sm font-mono text-[#94a3b8] uppercase">
            Everything you need to know about the MetReps core architecture, privacy standards, and athletic progression.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-none border transition-all duration-300 ${isOpen ? 'bg-[#0f1422] border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.15)]' : 'bg-[#0f1422]/40 border-[#1e2538] hover:border-[#94a3b8]/40'}`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 sm:px-8 py-5.5 flex justify-between items-center gap-4 focus:outline-none select-none"
                >
                  <span className="font-mono text-xs sm:text-sm font-bold text-white hover:text-indigo-400 transition-colors duration-200 uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-none bg-[#05070d] border border-[#1e2538] text-[#94a3b8] transition-all duration-300 ${isOpen ? 'rotate-180 text-indigo-400 border-indigo-500/40' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 font-mono text-[11px] sm:text-xs text-[#94a3b8] leading-relaxed border-t border-[#1e2538]/60 pt-4 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
