"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "AI Development", href: "#ai-development", id: "ai-development" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "py-5 bg-white/50 backdrop-blur-md"
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setActiveId("home")}
            className="flex items-center gap-3 group shrink-0 focus:outline-none"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0066FF] rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-md shadow-blue-500/20" />
              <span className="relative z-10 text-white font-black text-sm tracking-tight">
                HS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-slate-900 leading-none">
                Humair Sarwar<span className="text-[#0066FF]">.</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wide mt-0.5 hidden sm:inline">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pills */}
          <div className="hidden xl:flex items-center gap-0.5 bg-slate-100/80 backdrop-blur-md p-1 rounded-2xl border border-slate-200/70">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveId(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#0066FF]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/80"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="/Humair-Sarwar-CV.pdf"
              download="Humair-Sarwar-CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-950 border border-slate-200/80 transition-all duration-200"
            >
              <Download size={14} className="text-[#0066FF]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0066FF] hover:bg-blue-700 shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 transition-all duration-200"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden relative z-[110] p-2.5 rounded-xl text-slate-800 hover:text-[#0066FF] hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[95] bg-white/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto xl:hidden"
          >
            <div className="max-w-md mx-auto w-full flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <motion.a
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    href={item.href}
                    onClick={() => {
                      setActiveId(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-bold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-[#0066FF] border border-blue-100"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="max-w-md mx-auto w-full mt-8 pt-6 border-t border-slate-200 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/Humair-Sarwar-CV.pdf"
                  download="Humair-Sarwar-CV.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 border border-slate-200 hover:border-[#0066FF]"
                >
                  <Download size={15} className="text-[#0066FF]" />
                  <span>Download CV</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#0066FF] shadow-md shadow-blue-500/20"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 pt-2">
                <a
                  href="mailto:humairsarwar956@gmail.com"
                  className="font-semibold text-slate-700 hover:text-[#0066FF] transition-colors"
                >
                  humairsarwar956@gmail.com
                </a>
                <div className="flex items-center gap-4 font-semibold">
                  <a
                    href="https://github.com/Humair-Sarwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0066FF]"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/humair-sarwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0066FF]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
