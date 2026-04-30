"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Laptop, Zap, Globe, MousePointer2 } from "lucide-react";


export default function Hero() {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  // Primary Color from Veeivs: #0066FF
  const primaryColor = "#0066FF";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FFFFFF] selection:bg-[#0066FF] selection:text-white">
      
      {/* 1. VEEIVS STYLE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Blue Orbs */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#0066FF]/05 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-blue-50/40 blur-[100px] rounded-full" />
        
        {/* Modern thin grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 2. TEXT CONTENT */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 mb-10">
              <span className="flex h-2 w-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span className="text-[#0066FF] font-bold text-[10px] uppercase tracking-[0.2em]">Innovating the Web</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[72px] md:text-[110px] font-[1000] leading-[0.85] tracking-[-0.05em] text-slate-900 mb-10">
              Future<br />
              <span className="text-[#0066FF]">Focused.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-500 max-w-lg mb-12 leading-relaxed font-medium">
              I’m <span className="text-slate-900">Humair</span>. Building high-performance interfaces with a focus on speed, scalability, and <span className="text-[#0066FF] italic font-serif">precision.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              {/* Veeivs Style Primary Button */}
              <button 
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="group px-12 cursor-pointer py-6 bg-[#0066FF] text-white font-bold rounded-2xl hover:shadow-[0_20px_40px_-10px_rgba(0,102,255,0.4)] transition-all duration-500 flex items-center gap-3 text-xs uppercase tracking-widest overflow-hidden relative"
>
  <span className="relative z-10 flex items-center gap-3">
    Start Project <ArrowRight size={18} />
  </span>
  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
</button>
              
              <button 
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="px-12 cursor-pointer py-6 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-300 flex items-center gap-3 text-xs uppercase tracking-widest"
>
  Portfolio <Laptop size={18} />
</button>
            </motion.div>
          </motion.div>

          {/* 3. VISUAL BOX */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#0066FF] to-cyan-400 rounded-[4rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <div className="relative bg-white rounded-[4rem] border border-slate-100 p-4 shadow-2xl">
                <div className="aspect-[4/5] rounded-[3.2rem] overflow-hidden bg-slate-50 relative">
                  <img 
                    src="/full-stack.jpg" 
                    alt="Humair"
                    className="w-full h-full object-cover saturate-[1.1] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Tech Chip */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                    <span className="text-[10px] font-black text-slate-900 uppercase">React Expert</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 p-6 bg-slate-950 rounded-[2.5rem] shadow-2xl text-white border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center">
                    <Zap size={20} fill="white" />
                  </div>
                  <div>
                    <div className="text-xl font-black">99+</div>
                    <div className="text-[8px] text-slate-400 uppercase tracking-widest">Efficiency</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}