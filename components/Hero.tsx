"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  Server,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white"
    >
      {/* Subtle Architectural Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-[#0066FF]/[0.06] blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-24 w-[460px] h-[460px] bg-indigo-500/[0.05] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_65%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Identity & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-7"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {/* Status & Professional Identity Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/70"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0066FF]" />
              </span>
              <span className="text-[#0066FF] font-bold text-xs tracking-wide">
                Full Stack Web Developer | Multi-Stack Developer | AI-Assisted Developer
              </span>
            </motion.div>

            {/* Name & Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-slate-500">
                Hi, I&apos;m <span className="text-slate-900">Humair Sarwar</span>
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                Building Modern Web Applications with{" "}
                <span className="text-[#0066FF]">
                  React, Next.js, Laravel &amp; Node.js.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              I build responsive frontend experiences, powerful backend systems,
              and scalable web applications using modern technologies. I also
              leverage AI-powered development tools to improve productivity and
              accelerate software engineering workflows.
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0066FF] text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/Humair-Sarwar-CV.pdf"
                download="Humair-Sarwar-CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all duration-200"
              >
                <Download size={17} />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-200 font-bold text-sm hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-200"
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links & Stack Highlights Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Connect:
                </span>
                <a
                  href="https://github.com/Humair-Sarwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Humair Sarwar GitHub Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200/80 text-xs font-bold transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
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
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/humair-sarwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Humair Sarwar LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#0066FF] text-slate-700 hover:text-white border border-slate-200/80 text-xs font-bold transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
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
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#0066FF]" />
                  Multi-Stack Architecture
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#0066FF]" />
                  AI-Augmented Workflow
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Developer Visual & Multi-Stack Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0066FF]/20 via-indigo-500/10 to-cyan-400/20 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-slate-950 rounded-[2rem] border border-slate-800 p-5 sm:p-6 shadow-2xl text-white overflow-hidden">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    humair-sarwar.stack.ts
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0066FF]/20 text-blue-400 border border-blue-500/30">
                    Production Ready
                  </span>
                </div>

                {/* Developer Visual Banner */}
                <div className="relative h-52 sm:h-56 rounded-2xl overflow-hidden mb-5 border border-slate-800">
                  <img
                    src="/full-stack.jpg"
                    alt="Humair Sarwar – Full Stack Web Developer workspace illustration"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                        Full-Cycle Engineering
                      </p>
                      <p className="text-sm sm:text-base font-bold text-white">
                        Frontend UI to Backend APIs &amp; Databases
                      </p>
                    </div>
                  </div>
                </div>

                {/* Authentic Multi-Stack Capability Rows */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800/90">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Code2 size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          Frontend Engineering
                        </div>
                        <div className="text-[11px] text-slate-400">
                          React.js, Next.js, JavaScript (ES6+), Tailwind CSS
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800/90">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <Server size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          Backend &amp; Databases
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Laravel, PHP, Node.js, Express.js, MySQL, MongoDB
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/15 border border-blue-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0066FF] flex items-center justify-center text-white">
                        <Layers size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          AI-Assisted Development
                        </div>
                        <div className="text-[11px] text-blue-200">
                          Claude Code, Google Antigravity &amp; Gemini Pro
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
