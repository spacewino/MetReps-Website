import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Radio, Play } from 'lucide-react';
import appIcon from './icon v10 -transparent background.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SPECIFICATIONS', href: '#features' },
    { name: 'PHILOSOPHY', href: '#philosophy' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-t-2 border-indigo-500 ${scrolled ? 'bg-[#05070d]/90 backdrop-blur-md border-b border-[#1e2538] py-3 shadow-2xl' : 'bg-[#05070d]/70 backdrop-blur-sm border-b border-[#1e2538]/50 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with App Icon - Sharp Brutalist Theme */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center bg-[#0f1422] border border-[#1e2538] rounded-none overflow-hidden group-hover:border-indigo-500/50 transition-colors duration-300">
              {/* Custom App Icon */}
              <img 
                src={appIcon} 
                alt="MetReps Icon" 
                className="w-full h-full object-contain p-1.5" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-black text-xl tracking-tighter text-white">
                MET<span className="text-indigo-400">REPS</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 bg-emerald-400 animate-pulse rounded-none" />
                <span className="font-mono text-[8px] text-[#94a3b8] tracking-widest uppercase">
                  BETA 2.4 LIVE
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-mono tracking-wider text-[#94a3b8] hover:text-white transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Platform Status Indicator Dot & Action Button */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#0f1422] border border-[#1e2538] font-mono text-[10px] text-[#34d399]">
              <Play className="w-2.5 h-2.5 text-[#34d399] fill-[#34d399]" />
              <span>PLATFORM: GOOGLE PLAY STORE</span>
            </div>
            <a
              href="#waitlist"
              onClick={(e) => handleScrollTo(e, '#waitlist')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-none border border-indigo-400 hover:border-indigo-300 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            >
              GET METREPS
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-[#0f1422] border border-[#1e2538] text-[#94a3b8] hover:text-white transition-colors focus:outline-none rounded-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#05070d]/95 backdrop-blur-lg border-b border-[#1e2538] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-2.5 font-mono text-xs text-[#94a3b8] hover:text-white hover:bg-[#0f1422] transition-colors"
                >
                  &gt; {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#1e2538]/60 flex flex-col gap-3 px-3">
                <div className="flex items-center gap-2 py-1.5 font-mono text-[9px] text-[#34d399]">
                  <Play className="w-2.5 h-2.5 text-[#34d399] fill-[#34d399]" />
                  <span>PLATFORM: GOOGLE PLAY STORE</span>
                </div>
                <a
                  href="#waitlist"
                  onClick={(e) => handleScrollTo(e, '#waitlist')}
                  className="w-full text-center py-2.5 text-xs font-mono font-bold tracking-wider bg-indigo-600 border border-indigo-400 text-white rounded-none hover:bg-indigo-500 transition-all"
                >
                  GET METREPS
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
