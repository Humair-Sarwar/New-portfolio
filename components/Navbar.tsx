"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react"; // Icons add kiye hain behtar UI ke liye

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryBlue = "#0066FF";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "projects", "contacts"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-blue-50 shadow-[0_10px_40px_-15px_rgba(0,102,255,0.08)]" 
            : "bg-transparent"
        }`}
      >
        {/* 1. LOGO */}
        <motion.a 
          href="#home"
          className="flex items-center gap-3 group z-[110]"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0066FF] rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-blue-200" />
            <div className="relative z-10 text-white font-black text-xs">HS</div>
          </div>
          <span className="text-xs font-[1000] uppercase tracking-[0.3em] text-slate-900">
            Humair<span className="text-[#0066FF]">.</span>
          </span>
        </motion.a>

        {/* 2. DESKTOP CENTER NAV */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md p-1 rounded-2xl border border-blue-100/50 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-xl transition-all duration-500 relative font-black ${
                activeItem === item.name ? "text-[#0066FF]" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {activeItem === item.name && (
                <motion.div 
                  layoutId="navActivePill"
                  className="absolute inset-0 bg-[#0066FF]/5 rounded-xl border border-[#0066FF]/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* 3. RIGHT ACTIONS */}
        <div className="flex items-center gap-6">
          <motion.a 
            href="#contact"
            className="hidden lg:flex items-center gap-3 text-[10px] font-[1000] uppercase tracking-[0.2em] text-slate-900 group"
          >
            <span>Work with me</span>
            <div className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse shadow-[0_0_10px_#0066FF]" />
          </motion.a>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[110] p-2 text-slate-900 hover:text-[#0066FF] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* 4. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-white backdrop-blur-2xl flex flex-col justify-center px-10 md:hidden"
          >
            {/* Background Accent for Mobile Menu */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#0066FF]/10 blur-[100px] rounded-full" />

            <div className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-end gap-4"
                >
                  <span className="text-slate-200 font-black text-4xl group-hover:text-[#0066FF]/20 transition-colors">
                    0{index + 1}
                  </span>
                  <span className={`text-5xl font-[1000] tracking-tighter uppercase ${
                    activeItem === item.name ? "text-[#0066FF]" : "text-slate-900"
                  }`}>
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 pt-10 border-t border-slate-100"
            >
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Say Hello</p>
              <a href="mailto:hello@humair.com" className="text-2xl font-bold text-slate-900 hover:text-[#0066FF] transition-colors">
                hello@humair.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}