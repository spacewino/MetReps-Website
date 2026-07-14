import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import appIcon from './icon v10 -transparent background.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-[#1e2538] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle grid lines background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(30,37,56,0.05)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none opacity-45" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-[#1e2538]">
          
          {/* Column 1: Brand & Credits */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#0f1422] border border-[#1e2538] rounded-none overflow-hidden">
                <img 
                  src={appIcon} 
                  alt="MetReps Icon" 
                  className="w-full h-full object-contain p-1" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-mono font-black text-base text-white uppercase tracking-tight">
                MET<span className="text-indigo-400">REPS</span>
              </span>
            </div>
            <p className="font-mono text-xs text-[#94a3b8] max-w-md leading-relaxed uppercase">
              Created by Fil Filidei. Designed for those who love mathematical progression.
            </p>
          </div>

          {/* Column 2: Support & Contact */}
          <div className="flex flex-col md:items-end justify-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#94a3b8]/60 tracking-wider uppercase">// INQUIRIES & DEBUGS</span>
            <a 
              href="mailto:MetRepsApp@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 bg-[#0a0d16] hover:bg-indigo-950/20 border border-zinc-800/80 hover:border-indigo-500/40 text-white font-mono text-xs transition-all uppercase rounded-none"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Support / Feedback: MetRepsApp@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-[#94a3b8]/40 font-mono uppercase tracking-wider">
            &copy; {currentYear} METREPS. ALL RIGHTS RESERVED. SECURE ON-DEVICE ATHLETIC TELEMETRY.
          </p>

          <a
            href="#"
            onClick={handleScrollToTop}
            className="text-[10px] font-mono text-[#94a3b8]/60 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1.5"
          >
            <span>[ BACK TO TOP ]</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
