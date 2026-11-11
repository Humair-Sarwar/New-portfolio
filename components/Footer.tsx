"use client";

import React from "react";
import { ArrowUp, Download, Mail, Phone } from "lucide-react";

const footerNav = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "AI Development", href: "#ai-development" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-12 px-5 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#0066FF] rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20">
                HS
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight block leading-none">
                  Humair Sarwar<span className="text-[#0066FF]">.</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Full Stack &bull; Multi-Stack &bull; AI-Assisted Developer
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Building responsive frontend experiences, powerful backend
              systems, and scalable web applications using React.js, Next.js,
              Laravel, Node.js, and modern AI-assisted development workflows.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Humair-Sarwar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-[#0066FF] hover:border-[#0066FF] flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/humair-sarwar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:bg-[#0066FF] hover:border-[#0066FF] flex items-center justify-center text-slate-300 hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="/Humair-Sarwar-CV.pdf"
                download="Humair-Sarwar-CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 transition-colors"
              >
                <Download size={14} className="text-[#0066FF]" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2.5">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact Details
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:humairsarwar956@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-[#0066FF] shrink-0" />
                <span className="truncate">humairsarwar956@gmail.com</span>
              </a>
              <a
                href="tel:+923088340373"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-[#0066FF] shrink-0" />
                <span>+92 308 8340373</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0066FF] border border-slate-800 hover:border-[#0066FF] text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Humair Sarwar. All rights reserved.</p>
          <p className="text-slate-400">
            Built with Next.js, React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
