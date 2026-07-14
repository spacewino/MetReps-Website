import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Upload, 
  Trash2, 
  Play, 
  Sparkles, 
  Shield, 
  UserX, 
  Coins, 
  Activity, 
  Cpu, 
  Zap, 
  Gauge, 
  Compass, 
  Sliders,
  Calendar,
  CheckSquare,
  Dumbbell,
  BarChart3,
  LineChart
} from 'lucide-react';
import Header from './components/Header';
import Features from './components/Features';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import showcaseImage from './components/Showcase3.png';
import loggerScreenshot from './components/Screenshot 1 - Workout logger screen cropped.JPG';
import loggerCroppedScreenshot from './components/Logger - cropped.PNG';
import recoveryScreenshot from './components/screenshot-mobile-3.png';

// A high-fidelity, interactive screenshot dropzone component with persistent storage
interface DropzoneProps {
  id: string;
  label: string;
  aspect: 'square' | 'portrait' | 'landscape';
  caption: string;
  defaultWireframe: React.ReactNode;
  defaultImage?: string;
}

function ScreenshotDropzone({ id, label, aspect, caption, defaultWireframe, defaultImage }: DropzoneProps) {
  const [image, setImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`metreps_img_${id}`);
    if (saved) {
      setImage(saved);
    } else if (defaultImage) {
      setImage(defaultImage);
    }
  }, [id, defaultImage]);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setImage(dataUrl);
      localStorage.setItem(`metreps_img_${id}`, dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
    localStorage.removeItem(`metreps_img_${id}`);
  };

  return (
    <div
      onDragOver={(e) => { if (!image) { e.preventDefault(); setIsDragOver(true); } }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => { if (!image) handleDrop(e); }}
      className={`relative border-2 ${isDragOver ? 'border-[#6366f1] bg-[#6366f1]/5' : 'border-[#1e2538]'} bg-[#0f1422] transition-all duration-300 rounded-none overflow-hidden ${image ? 'cursor-default' : 'cursor-pointer hover:border-[#6366f1]/40'} group`}
    >
      {!image && (
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileInputChange} 
          className="absolute inset-0 opacity-0 cursor-pointer z-20"
        />
      )}

      <div className={`${aspect === 'square' ? 'aspect-square' : aspect === 'landscape' ? 'aspect-[16/9]' : 'aspect-[9/16]'} w-full relative flex flex-col items-center justify-center`}>
        {image ? (
          <div className="absolute inset-0 z-10 bg-[#020617] flex items-center justify-center">
            <img 
              src={image} 
              alt={label} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-[#020617]" 
            />
          </div>
        ) : (
          <div className="p-6 text-center space-y-4 flex flex-col items-center justify-center h-full z-0 pointer-events-none">
            {defaultWireframe}
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#22d3ee] uppercase block group-hover:text-white transition-colors">
                {caption}
              </span>
              <span className="font-mono text-[9px] text-[#94a3b8]/40 uppercase block">
                DRAG & DROP OR CLICK TO UPLOAD
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [telemetry, setTelemetry] = useState({
    strengthVector: 142.5,
    loadIndex: 18.4,
    recoveryStats: 'OPTIMAL',
    adaptationStandard: 'HYPERTROPHY'
  });

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Live Telemetry Fluctuation Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry(prev => {
        const strengthDelta = (Math.random() - 0.5) * 0.4;
        const loadDelta = (Math.random() - 0.5) * 0.2;

        return {
          strengthVector: Math.min(Math.max(Number((prev.strengthVector + strengthDelta).toFixed(1)), 141.5), 143.5),
          loadIndex: Math.min(Math.max(Number((prev.loadIndex + loadDelta).toFixed(1)), 17.5), 19.5),
          recoveryStats: 'OPTIMAL',
          adaptationStandard: 'HYPERTROPHY'
        };
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070d] text-neutral-100 flex flex-col font-sans relative antialiased selection:bg-indigo-500/20 selection:text-indigo-400">
      
      {/* Brutalist Fine Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      {/* Header component */}
      <Header />

      <main className="flex-1 relative z-10">
        
        {/* SECTION 1: THE FIRST IMPRESSION (HERO BANNERS & TELEMETRY CARD) */}
        <section id="hero" className="pt-32 pb-16 overflow-hidden relative min-h-[95vh] flex flex-col justify-center">
          
          {/* Strict Palette Geometric Accents */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
            
            {/* Top Grid: Headline and Drag-and-drop placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-6 space-y-8 text-left">

                {/* Cybernetic Header */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-black text-white tracking-tighter leading-[0.95] uppercase">
                    WELCOME TO METREPS
                  </h1>
                  <p className="font-mono text-xs sm:text-sm text-[#94a3b8] max-w-2xl leading-relaxed">
                    METREPS is an elite athletic tracking client engineered for algorithmic program building and precise lifting analysis. Plan multi-week periodised cycles, log your training set-by-set, and map your physical adaptation rates—all with 100% offline privacy.
                  </p>
                </div>

                {/* Real-World Action Triggers */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.metreps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group rounded-none"
                  >
                    <span>Download on Google Play</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#features"
                    onClick={(e) => handleScrollTo(e, '#features')}
                    className="px-8 py-4 bg-transparent border border-indigo-500/50 hover:border-indigo-400 hover:bg-indigo-500/10 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-none"
                  >
                    <span>View Core features</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Landscape Bezel for Drag-and-drop Showcase Image */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full max-w-[760px] lg:max-w-none space-y-3">

                  
                  {/* Landscape wireframe bezel wrapping the dropzone */}
                  <div className="relative p-2.5 bg-[#05070d] border-4 border-[#1e2538] shadow-2xl rounded-none w-full">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-12 bg-[#1e2538] z-30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    </div>

                    <ScreenshotDropzone
                      id="play_showcase"
                      label="Play Store Landscape Showcase"
                      aspect="landscape"
                      caption="Google Play Splash Image (Landscape)"
                      defaultImage={showcaseImage}
                      defaultWireframe={
                        <div className="relative w-full h-full bg-[#05070c] overflow-hidden flex items-center p-4 select-none">
                          {/* Dark Grid Overlay */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                          
                          {/* Dramatic Orange/Amber Glow */}
                          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-amber-500/10 to-transparent blur-2xl pointer-events-none" />
                          
                          <div className="grid grid-cols-12 w-full h-full items-center z-10 relative">
                            {/* Left: Weight Plate SVG */}
                            <div className="col-span-4 flex justify-center relative">
                              <svg className="w-16 h-16 sm:w-20 sm:h-20 text-neutral-800 drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]" viewBox="0 0 100 100" fill="none">
                                {/* Outer Ring */}
                                <circle cx="50" cy="50" r="45" stroke="#1e293b" strokeWidth="6" />
                                <circle cx="50" cy="50" r="44" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-50" />
                                {/* Inner Plate Details */}
                                <circle cx="50" cy="50" r="32" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                                {/* Center Hole */}
                                <circle cx="50" cy="50" r="10" fill="#020617" stroke="#475569" strokeWidth="3" />
                                {/* Engravings */}
                                <text x="50" y="30" fill="#94a3b8" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-mono tracking-widest">45</text>
                                <text x="50" y="78" fill="#94a3b8" fontSize="6" fontWeight="bold" textAnchor="middle" className="font-mono tracking-widest">LBS</text>
                                {/* Subtle Highlights */}
                                <path d="M15 50 A 35 35 0 0 1 85 50" stroke="#f59e0b" strokeWidth="0.5" className="opacity-30" />
                              </svg>
                            </div>

                            {/* Right: MetReps HUD Branding & Chart */}
                            <div className="col-span-8 pl-4 space-y-2 text-left">
                              {/* Brand logo */}
                              <div className="space-y-0.5">
                                <h3 className="font-mono font-black text-sm text-white uppercase tracking-tighter leading-none">
                                  MET<span className="text-amber-500">REPS</span>
                                </h3>
                                <p className="font-mono text-[5px] tracking-[0.2em] text-[#22d3ee] uppercase leading-none">
                                  LIFTING, MEASURED
                                </p>
                              </div>

                              {/* Mini glowing chart & HUD stats */}
                              <div className="border border-[#1e2538] bg-[#0f1422]/80 p-2 space-y-1.5">
                                <div className="flex justify-between items-center text-[6px] font-mono text-[#94a3b8]/60">
                                  <span>// PERFORMANCE STATUS</span>
                                  <span className="text-[#34d399] font-black">87% TRENDING UP</span>
                                </div>
                                
                                {/* Line Chart Draw */}
                                <svg className="w-full h-8 stroke-1" viewBox="0 0 100 30" fill="none">
                                  <path d="M10 25 L 30 20 L 50 12 L 70 15 L 90 5" stroke="#22d3ee" strokeWidth="1.5" />
                                  <circle cx="10" cy="25" r="1.5" fill="#05070d" stroke="#22d3ee" strokeWidth="1" />
                                  <circle cx="30" cy="20" r="1.5" fill="#05070d" stroke="#22d3ee" strokeWidth="1" />
                                  <circle cx="50" cy="12" r="1.5" fill="#05070d" stroke="#22d3ee" strokeWidth="1" />
                                  <circle cx="70" cy="15" r="1.5" fill="#05070d" stroke="#22d3ee" strokeWidth="1" />
                                  <circle cx="90" cy="5" r="1.5" fill="#34d399" stroke="#34d399" strokeWidth="1" />
                                </svg>

                                <div className="grid grid-cols-2 gap-2 text-[5px] font-mono text-[#94a3b8]/60 uppercase leading-none">
                                  <div>
                                    <span className="text-white font-black block text-[4.5px]">1RM EST.</span>
                                    <span>525 LBS <span className="text-[#34d399]">(+18%)</span></span>
                                  </div>
                                  <div>
                                    <span className="text-white font-black block text-[4.5px]">VOLUME</span>
                                    <span>12,450 LBS</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Absolute upload badge indicator */}
                          <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-[7px] uppercase tracking-widest z-20">
                            [ DROP PNG IMAGE HERE TO REPLACE ]
                          </div>
                        </div>
                      }
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* Real-Time Live Telemetry Metrics Row */}
            <div className="border-t border-[#1e2538] pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1 */}
                <div className="bg-[#0f1422] border border-[#1e2538] p-5 relative overflow-hidden flex flex-col justify-between rounded-none font-mono">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] text-indigo-400 uppercase tracking-widest">// STRENGTH VECTOR</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-black text-white">{telemetry.strengthVector.toFixed(1)} KG</span>
                  </div>
                  <div className="mt-2 space-y-0.5">
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight leading-snug">
                      EPLEY ESTIMATED ONE-REP MAX
                    </p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-[#0f1422] border border-[#1e2538] p-5 relative overflow-hidden flex flex-col justify-between rounded-none font-mono">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] text-[#22d3ee] uppercase tracking-widest">// LOAD INDEX</span>
                    <span className="text-[9px] text-[#22d3ee] font-bold">LIVE METRIC</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-black text-white">+{telemetry.loadIndex.toFixed(1)}%</span>
                  </div>
                  <div className="mt-2 space-y-0.5">
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight leading-snug">
                      ACCUMULATED WORK VOLUME
                    </p>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-[#0f1422] border border-[#1e2538] p-5 relative overflow-hidden flex flex-col justify-between rounded-none font-mono">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] text-amber-500 uppercase tracking-widest">// RECOVERY STATS</span>
                    <span className="text-[9px] text-amber-500 font-bold">AUTOREG</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-black text-emerald-400">{telemetry.recoveryStats}</span>
                  </div>
                  <div className="mt-2 space-y-0.5">
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight leading-snug">
                      HYDRATION & SLEEP SYNC
                    </p>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-[#0f1422] border border-[#1e2538] p-5 relative overflow-hidden flex flex-col justify-between rounded-none font-mono">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] text-[#34d399] uppercase tracking-widest">// ADAPTATION STANDARD</span>
                    <Zap className="w-3.5 h-3.5 text-[#34d399] fill-current" />
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-black text-white">{telemetry.adaptationStandard}</span>
                  </div>
                  <div className="mt-2 space-y-0.5">
                    <p className="text-[10px] font-bold text-white uppercase tracking-tight leading-snug">
                      STEP-PROGRESSION PROTOCOL
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: THE TECH SPECS (FEATURE WALKTHROUGHS & GRAPHIC LAYOUTS) */}
        <section id="specs" className="py-24 bg-[#05070d] border-t border-[#1e2538] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tighter uppercase">
                METREPS CORE FEATURES
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mx-auto" />
              <p className="font-mono text-xs text-[#94a3b8]">
                Explore the core modules engineered to construct routines, log training set-by-set, and map recovery index targets.
              </p>
            </div>

            {/* Vertical Spec Feed */}
            <div className="space-y-12">
              
              {/* Feature 1: Comprehensive Program Builder */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0f1422]/60 border border-[#1e2538] p-6 sm:p-10 rounded-none relative">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#22d3ee]">
                    <span>[ CORE MODULE 01 ]</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-mono font-black text-white uppercase tracking-tight">
                    COMPREHENSIVE PROGRAM BUILDER & SCIENCE-BASED ALGORITHMS
                  </h3>
                  <p className="font-mono text-xs text-[#94a3b8] leading-relaxed uppercase">
                    Navigate the program tab to build custom multi-week routines or select from pre-loaded master templates. Leverage progressive step-loading or daily undulating periodisation models to structure your path without plateaus.
                  </p>
                  <div className="pt-4 border-t border-[#1e2538] grid grid-cols-2 gap-4 font-mono text-[10px] text-[#94a3b8]/60">
                    <div>
                      <span className="text-white font-bold block uppercase">PLAN SPAN:</span>
                      <span>Multi-Week Cycles</span>
                    </div>
                    <div>
                      <span className="text-white font-bold block uppercase">ALGORITHMS:</span>
                      <span>Hypertrophy Step / Strength Undulating</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[280px]">
                    <ScreenshotDropzone
                      id="spec_program_builder"
                      label="Program Builder UI Screenshot"
                      aspect="portrait"
                      caption="Drop Program Builder Screenshot Here"
                      defaultImage={loggerScreenshot}
                      defaultWireframe={
                        <div className="w-full h-full bg-[#05070c] p-4 text-[#94a3b8] font-mono text-[9px] uppercase space-y-3 flex flex-col justify-between select-none min-h-[360px]">
                          <div className="flex justify-between items-center border-b border-[#1e2538] pb-1.5 text-white font-bold">
                            <span>// ROUTINE BUILDER</span>
                            <span className="text-[#22d3ee]">v1.0</span>
                          </div>
                          <div className="space-y-2 flex-1 pt-3">
                            <div className="flex justify-between items-center bg-[#0f1422] p-1.5 border border-[#1e2538]">
                              <span>WEEK 1-4: INTRO HYPERTROPHY</span>
                              <span className="text-[#22d3ee] font-bold">[ACTIVE]</span>
                            </div>
                            <div className="p-1.5 border border-[#1e2538]/50 space-y-1">
                              <div className="flex justify-between text-[8px] text-[#94a3b8]/60">
                                <span>DAY A: BENCH / ROW SESSIONS</span>
                                <span>STEPS</span>
                              </div>
                              <div className="h-1 w-full bg-[#1e2538]">
                                <div className="h-full w-2/3 bg-indigo-500" />
                              </div>
                            </div>
                            <div className="p-1.5 border border-[#1e2538]/50 space-y-1">
                              <div className="flex justify-between text-[8px] text-[#94a3b8]/60">
                                <span>DAY B: SQUAT / CALF VOLUMES</span>
                                <span>STEPS</span>
                              </div>
                              <div className="h-1 w-full bg-[#1e2538]">
                                <div className="h-full w-[85%] bg-[#22d3ee]" />
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#0f1422] p-2 border border-indigo-500/30 space-y-1 text-center">
                            <div className="text-[7px] text-[#94a3b8]/50">PROJECTION MATRIX MODEL</div>
                            <div className="text-[9px] text-indigo-300 font-black">HYPERTROPHY UNDULATING</div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2: High-Precision Workout Logger */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0f1422]/60 border border-[#1e2538] p-6 sm:p-10 rounded-none relative">
                <div className="lg:col-span-7 space-y-6 lg:order-last">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#34d399]">
                    <span>[ CORE MODULE 02 ]</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-mono font-black text-white uppercase tracking-tight">
                    HIGH-PRECISION WORKOUT LOGGER & AUTO-PREPOPULATION
                  </h3>
                  <p className="font-mono text-xs text-[#94a3b8] leading-relaxed uppercase">
                    Stop wasting time typing numbers. MetReps pre-populates your active workout with values from your previous sessions. Record set-by-set weights, reps, Rating of Perceived Exertion (RPE), dropsets, and custom form execution quality.
                  </p>
                  <div className="pt-4 border-t border-[#1e2538] grid grid-cols-2 gap-4 font-mono text-[10px] text-[#94a3b8]/60">
                    <div>
                      <span className="text-white font-bold block uppercase">PREPOPULATION RATE:</span>
                      <span>100% Historical Sync</span>
                    </div>
                    <div>
                      <span className="text-white font-bold block uppercase">LOGGING OPTIONS:</span>
                      <span>RPE, Dropsets & Form Analysis</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[280px]">
                    <ScreenshotDropzone
                      id="spec_workout_logger"
                      label="Workout Logger UI Screenshot"
                      aspect="portrait"
                      caption="Drop Workout Logger Screenshot Here"
                      defaultImage={loggerCroppedScreenshot}
                      defaultWireframe={
                        <div className="w-full h-full bg-[#05070c] p-4 text-[#94a3b8] font-mono text-[9px] uppercase space-y-3 flex flex-col justify-between select-none min-h-[360px]">
                          <div className="flex justify-between items-center border-b border-[#1e2538] pb-1.5 text-white font-bold">
                            <span>// BACK SQUAT ACTIVE</span>
                            <span className="text-[#34d399]">SET 3/4</span>
                          </div>
                          <div className="space-y-1.5 flex-1 pt-3">
                            <div className="flex justify-between items-center bg-[#0f1422] p-1.5 border border-[#1e2538]">
                              <span>SET 1: 140 KG x 5 REPS</span>
                              <span className="text-[#34d399] font-bold">[✓] 8.5 RPE</span>
                            </div>
                            <div className="flex justify-between items-center bg-[#0f1422] p-1.5 border border-[#1e2538]">
                              <span>SET 2: 140 KG x 5 REPS</span>
                              <span className="text-[#34d399] font-bold">[✓] 9.0 RPE</span>
                            </div>
                            <div className="flex justify-between items-center bg-indigo-950/20 p-1.5 border border-indigo-500/40">
                              <span>SET 3: 142.5 KG x 5 REPS</span>
                              <span className="text-indigo-400 animate-pulse">[ACTIVE]</span>
                            </div>
                          </div>
                          <div className="space-y-1.5 pt-1.5 border-t border-[#1e2538]">
                            <div className="flex justify-between text-[7px] text-[#94a3b8]/60">
                              <span>EXECUTION STRICTNESS</span>
                              <span className="text-amber-400 font-black">STRICT</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 text-[7px] text-center">
                              <div className="bg-amber-500/20 text-amber-300 border border-amber-500/40 py-1 font-bold">STRICT</div>
                              <div className="bg-[#0f1422] text-[#94a3b8]/50 border border-[#1e2538] py-1">STANDARD</div>
                              <div className="bg-[#0f1422] text-[#94a3b8]/50 border border-[#1e2538] py-1">LOOSE</div>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Feature 3: Recovery & Adaptation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0f1422]/60 border border-[#1e2538] p-6 sm:p-10 rounded-none relative">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] text-indigo-400">
                    <span>[ CORE MODULE 03 ]</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-mono font-black text-white uppercase tracking-tight">
                    MULTI-DIMENSIONAL RECOVERY & ADAPTATION CORRELATION
                  </h3>
                  <p className="font-mono text-xs text-[#94a3b8] leading-relaxed uppercase">
                    Gym performance doesn't happen in a vacuum. Track daily recovery metrics including sleep duration, water hydration levels (Dehydrated to Optimal), protein/calorie intake, muscle soreness, and workout motivation to understand exactly what fuels your lifts.
                  </p>
                  <div className="pt-4 border-t border-[#1e2538] grid grid-cols-2 gap-4 font-mono text-[10px] text-[#94a3b8]/60">
                    <div>
                      <span className="text-white font-bold block uppercase">METRICS MAPPED:</span>
                      <span>6-Dimension Wellness Index</span>
                    </div>
                    <div>
                      <span className="text-white font-bold block uppercase">DATA PRIVACY:</span>
                      <span>100% Local Device Storage</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[280px]">
                    <ScreenshotDropzone
                      id="spec_recovery_analytics"
                      label="Recovery & Analytics UI Screenshot"
                      aspect="portrait"
                      caption="Drop Recovery Screenshot Here"
                      defaultImage={recoveryScreenshot}
                      defaultWireframe={
                        <div className="w-full h-full bg-[#05070c] p-4 text-[#94a3b8] font-mono text-[9px] uppercase space-y-3 flex flex-col justify-between select-none min-h-[360px]">
                          <div className="flex justify-between items-center border-b border-[#1e2538] pb-1.5 text-white font-bold">
                            <span>// RECOVERY INDEX</span>
                            <span className="text-[#22d3ee]">6D SYNC</span>
                          </div>
                          <div className="space-y-2 flex-1 pt-3">
                            {/* Sleep Indicator */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[7px]">
                                <span>SLEEP DURATION</span>
                                <span className="text-indigo-400">8.2 HRS // OPTIMAL</span>
                              </div>
                              <div className="h-1.5 w-full bg-[#1e2538]">
                                <div className="h-full w-[82%] bg-indigo-400" />
                              </div>
                            </div>
                            {/* Hydration Indicator */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[7px]">
                                <span>HYDRATION LEVEL</span>
                                <span className="text-[#22d3ee]">HYDRATED // HIGH</span>
                              </div>
                              <div className="h-1.5 w-full bg-[#1e2538]">
                                <div className="h-full w-[90%] bg-[#22d3ee]" />
                              </div>
                            </div>
                            {/* Protein Target */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[7px]">
                                <span>PROTEIN TARGET</span>
                                <span className="text-emerald-400">165G // 180G GOAL</span>
                              </div>
                              <div className="h-1.5 w-full bg-[#1e2538]">
                                <div className="h-full w-[91%] bg-emerald-400" />
                              </div>
                            </div>
                          </div>
                          {/* Micro Chart */}
                          <div className="border border-[#1e2538] p-1 bg-[#0f1422] flex items-end justify-between h-10 px-2 pt-2 gap-1">
                            <div className="w-full bg-[#22d3ee]/20 h-[30%]" />
                            <div className="w-full bg-[#22d3ee]/30 h-[45%]" />
                            <div className="w-full bg-[#22d3ee]/40 h-[65%]" />
                            <div className="w-full bg-[#22d3ee]/50 h-[50%]" />
                            <div className="w-full bg-indigo-500/60 h-[80%]" />
                            <div className="w-full bg-emerald-400/85 h-[95%]" />
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <Features />

        {/* SECTION 3: THE METREPS PHILOSOPHY (The Heart of the App) */}
        <section id="philosophy" className="py-24 bg-[#05070d] border-t border-[#1e2538] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono tracking-[0.2em] text-[#6366f1] uppercase block">
                // THE HEART OF THE APP
              </span>
              <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tighter uppercase">
                THE METREPS PHILOSOPHY
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mx-auto" />
              <p className="font-mono text-xs text-[#94a3b8] uppercase">
                A bold commitment to athletic integrity, privacy, and absolute physical progression.
              </p>
            </div>

            {/* 3-Column Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Column 1 */}
              <div className="bg-[#0f1422] border border-[#1e2538] p-8 space-y-6 rounded-none hover:border-[#6366f1]/40 transition-all duration-300">
                <div className="p-3 w-fit bg-[#05070d] border border-[#1e2538]">
                  <Cpu className="w-6 h-6 text-[#22d3ee]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-black text-white uppercase tracking-tight">
                    Data-Driven, No BS
                  </h3>
                  <p className="font-mono text-[11px] text-[#94a3b8] leading-relaxed uppercase">
                    Born out of 25 years of real iron experience to min/max your real strength gains. No social media noise, just raw numbers.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-[#0f1422] border border-[#1e2538] p-8 space-y-6 rounded-none hover:border-[#6366f1]/40 transition-all duration-300">
                <div className="p-3 w-fit bg-[#05070d] border border-[#1e2538]">
                  <Coins className="w-6 h-6 text-[#6366f1]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-black text-white uppercase tracking-tight">
                    No Subscriptions. Ever.
                  </h3>
                  <p className="font-mono text-[11px] text-[#94a3b8] leading-relaxed uppercase">
                    Physical self-betterment shouldn't be locked behind paywalls. No monthly fees, no microtransactions, 100% free.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="bg-[#0f1422] border border-[#1e2538] p-8 space-y-6 rounded-none hover:border-[#6366f1]/40 transition-all duration-300">
                <div className="p-3 w-fit bg-[#05070d] border border-[#1e2538]">
                  <Shield className="w-6 h-6 text-[#34d399]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-black text-white uppercase tracking-tight">
                    Privacy-First, Offline-First
                  </h3>
                  <p className="font-mono text-[11px] text-[#94a3b8] leading-relaxed uppercase">
                    Your data belongs to you. Zero sign-up portals, no forced cloud accounts, and no logging in. Everything lives strictly on your device storage.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* GOOGLE PLAY COMPLIANT PRIVACY POLICY */}
        <PrivacyPolicy />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
