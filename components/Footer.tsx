"use client";

import React from "react";
import { motion } from "framer-motion";

// Custom SVG Components (No external dependencies)
const Icons = {
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Twitter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  ArrowUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-900 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="w-10 h-10 bg-[#0066FF] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(0,102,255,0.3)] group-hover:rotate-12 transition-transform">
                H
              </div>
              <span className="text-2xl font-[1000] text-white tracking-tighter">
                Humair<span className="text-[#0066FF]">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg font-medium max-w-sm leading-relaxed">
              Full-Stack Developer specializing in high-end UI/UX and scalable web architectures. Designing the future with precision and code.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Icons.Github />, link: "https://github.com/Humair-Sarwar" },
                { icon: <Icons.Linkedin />, link: "https://www.linkedin.com/in/humair-sarwar/" },
                
              ].map((social, i) => (
                <motion.a
                target="_blank"
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, backgroundColor: "#0066FF", borderColor: "#0066FF" }}
                  className="w-12 h-12 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-50">Navigation</h4>
            <ul className="space-y-4">
              
              {["Home", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 font-bold hover:text-[#0066FF] transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-50">Connect</h4>
            <div className="space-y-6">
                <a href="mailto:humairsarwar956@gmail.com">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#0066FF]">
                  <Icons.Mail />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-bold">humairsarwar956@gmail.com</p>
              </div>
                </div></a>
                <a href="tel:03088340373" className="flex mt-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#0066FF]">
                  <Icons.Phone />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-bold">03088340373</p>
              </div>
                </div></a>
              <button 
                onClick={scrollToTop}
                className="group flex mt-10 items-center gap-3 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-[#0066FF] transition-colors"
              >
                Back to top
                <div className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center group-hover:-translate-y-1 transition-transform bg-slate-900">
                  <Icons.ArrowUp />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Humair Sarwar. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative Text (Dark Version) */}
      <div className="mt-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15vw] font-black tracking-tighter text-white leading-none text-center">
          HUMAIR SARWAR
        </h2>
      </div>
    </footer>
  );
}