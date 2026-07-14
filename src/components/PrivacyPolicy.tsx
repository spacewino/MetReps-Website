import React, { useRef } from 'react';
import { Shield, EyeOff, FileText, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="privacy" className="py-24 bg-[#05070d] border-t border-[#1e2538] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.2em] text-[#6366f1] uppercase block">
            // PLAY STORE COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tighter uppercase">
            PRIVACY POLICY
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto" />
          <p className="text-sm font-mono text-[#94a3b8] uppercase">
            Official Google Play-Compliant Privacy Standards & Offline-First Assurances.
          </p>
        </div>

        {/* Tactical Steel Policy Container */}
        <div className="bg-[#0f1422] border border-[#1e2538] rounded-none p-6 sm:p-10 relative overflow-hidden">
          {/* Top subtle bar with status */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e2538] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#05070d] border border-[#1e2538]">
                <Shield className="w-5 h-5 text-[#34d399]" />
              </div>
              <div>
                <h3 className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                  METREPS PRIVACY MATRIX
                </h3>
                <p className="font-mono text-[9px] text-[#34d399] uppercase tracking-wider">
                  ● Status: Active & Secured
                </p>
              </div>
            </div>
            
            <div className="font-mono text-[10px] text-[#94a3b8] uppercase">
              LAST UPDATED: <span className="text-white">JULY 14, 2026</span>
            </div>
          </div>

          {/* Elegant scrollable policy box */}
          <div 
            ref={scrollRef}
            className="max-h-[350px] overflow-y-auto pr-4 font-mono text-[11px] sm:text-xs text-[#94a3b8] uppercase space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
          >
            <div className="space-y-2">
              <span className="text-[#6366f1] font-bold block">// COMMITMENT TO ATHLETES</span>
              <p className="leading-relaxed">
                At MetReps, we are committed to providing a clean, professional, and privacy-first workout tracking experience. We believe your physical telemetry is yours alone.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="text-indigo-400">1.</span>
                <span>INFORMATION WE COLLECT</span>
              </div>
              <p className="leading-relaxed pl-4 border-l border-[#1e2538]">
                MetReps is built on an offline-first architecture. We do not require, request, or store your personal identity information, name, email address, password, phone number, or physical location. All training logs, program plans, weights, and metrics are written directly to your local device storage.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="text-indigo-400">2.</span>
                <span>THIRD-PARTY DATA TRANSMISSION</span>
              </div>
              <p className="leading-relaxed pl-4 border-l border-[#1e2538]">
                We do not use tracking pixels, external telemetry tools, advertising networks, or third-party analytical SDKs. No workout data or personal parameters are collected, shared, or sent to external cloud storage servers.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="text-indigo-400">3.</span>
                <span>DEVICE PERMISSIONS</span>
              </div>
              <p className="leading-relaxed pl-4 border-l border-[#1e2538]">
                MetReps may request access to your local device storage solely to perform local backup-and-restore functions that you explicitly trigger inside the app. This data is handled entirely on your device.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="text-indigo-400">4.</span>
                <span>CONTACT US</span>
              </div>
              <p className="leading-relaxed pl-4 border-l border-[#1e2538]">
                For privacy-related questions, feature proposals, or user support, contact Fil Filidei at MetRepsApp@gmail.com.
              </p>
            </div>
          </div>

          {/* Bottom security micro-indicators */}
          <div className="border-t border-[#1e2538] mt-8 pt-6 flex flex-wrap justify-between items-center gap-4 text-[9px] text-[#94a3b8]/50 font-mono">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>ZERO REMOTE ACCOUNTS</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="w-3.5 h-3.5 text-[#34d399]" />
              <span>100% SECURED LOCAL STORAGE</span>
            </div>
          </div>

          {/* Link to Dedicated Privacy Page */}
          <div className="mt-8 pt-6 border-t border-[#1e2538]/60 text-center">
            <a
              href="/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#05070d] hover:bg-indigo-950/20 border border-[#1e2538] hover:border-indigo-500/40 text-xs text-[#cbd5e1] hover:text-white font-mono transition-all uppercase rounded-none"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>[ Open Dedicated Privacy Policy Page ]</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
