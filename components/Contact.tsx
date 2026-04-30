"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, User, MessageSquare, ArrowRight, Globe, Phone } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-48 px-6 bg-white relative overflow-hidden">
      {/* Dynamic Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0066FF]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-300/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="bg-[#F8FAFC] rounded-[4rem] border border-slate-100 overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,102,255,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side: Dark Info Panel */}
            <div className="bg-slate-900 p-12 md:p-20 relative overflow-hidden flex flex-col justify-between">
              {/* Abstract Design Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF] opacity-10 blur-[80px] -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8"
                >
                  <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Available for projects</span>
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter leading-[0.9] mb-10">
                  Ready to start a <span className="text-[#0066FF]">revolution?</span>
                </h2>
                
                <p className="text-slate-400 text-lg font-medium max-w-sm mb-12">
                  Drop me a message and let's discuss how we can turn your vision into a digital masterpiece.
                </p>

                <div className="space-y-6">
                  <a href="mailto:humairsarwar956@gmail.com" className="flex items-center gap-4 text-white group w-fit">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0066FF] transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="text-lg font-bold group-hover:translate-x-2 transition-transform">humairsarwar956@gmail.com</span>
                  </a>
                  <a href="tel:03088340373" className="flex items-center gap-4 text-white group w-fit">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0066FF] transition-all">
                      <Phone size={20} />
                    </div>
                    <span className="text-lg font-bold group-hover:translate-x-2 transition-transform">03088340373</span>
                  </a>
                  {/* <div className="flex items-center gap-4 text-white group w-fit">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <Globe size={20} />
                    </div>
                    <span className="text-lg font-bold">Based in Lahore, PK</span>
                  </div> */}
                </div>
              </div>

              {/* Social Links */}
              <div className="relative z-10 pt-20 flex gap-4">
                {/* {[Linkedin, Github, Globe].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-500">
                    <Icon size={18} />
                  </button>
                ))} */}
              </div>
            </div>

            {/* Right Side: Modern Form */}
            <div className="p-12 md:p-20 bg-white">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="space-y-6">
                      {/* Full Name */}
                      <div className="group relative">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Identity</label>
                        <div className="relative mt-2">
                          <User className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0066FF] transition-colors" size={20} />
                          <input 
                            required
                            type="text" 
                            placeholder="Humair Sarwar"
                            className="w-full bg-transparent border-b border-slate-200 py-4 pl-8 outline-none focus:border-[#0066FF] transition-all font-bold text-slate-900 placeholder:text-slate-200"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="group relative">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Where to reply?</label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0066FF] transition-colors" size={20} />
                          <input 
                            required
                            type="email" 
                            placeholder="email@example.com"
                            className="w-full bg-transparent border-b border-slate-200 py-4 pl-8 outline-none focus:border-[#0066FF] transition-all font-bold text-slate-900 placeholder:text-slate-200"
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="group relative">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">The Project</label>
                        <div className="relative mt-2">
                          <MessageSquare className="absolute left-0 top-4 text-slate-300 group-focus-within:text-[#0066FF] transition-colors" size={20} />
                          <textarea 
                            required
                            rows={3}
                            placeholder="Tell me about your amazing idea..."
                            className="w-full bg-transparent border-b border-slate-200 py-4 pl-8 outline-none focus:border-[#0066FF] transition-all font-bold text-slate-900 placeholder:text-slate-200 resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full group relative flex items-center justify-between bg-slate-900 text-white p-2 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-[#0066FF]"
                    >
                      <span className="ml-8 font-black text-xs uppercase tracking-[0.2em] relative z-10">Submit</span>
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:rotate-[-45deg] transition-all duration-500 relative z-10">
                        <ArrowRight size={24} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="relative mb-8">
                      <div className="w-32 h-32 bg-blue-50 rounded-[3rem] rotate-12 absolute inset-0 -z-10" />
                      <div className="w-32 h-32 bg-[#0066FF] rounded-[3rem] flex items-center justify-center text-white shadow-xl shadow-blue-200">
                        <Send size={40} className="animate-bounce" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-[1000] text-slate-900 mb-4 tracking-tight">System Online!</h3>
                    <p className="text-slate-500 font-medium max-w-[240px]">
                      Your message has been successfully transmitted. I'll respond shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}