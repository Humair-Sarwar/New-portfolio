"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Bug,
  Workflow,
  Terminal,
  ShieldCheck,
  Zap,
  Bot,
} from "lucide-react";

const aiTools = [
  {
    name: "Claude Code",
    role: "Architecture & Codebase Reasoning",
    description:
      "Used for multi-file refactoring, complex API integration, and reasoning through full-stack architecture across React, Next.js, Laravel, and Node.js.",
  },
  {
    name: "Google Antigravity",
    role: "Agentic Full-Stack Development",
    description:
      "Leveraged as an AI-first engineering workspace to orchestrate UI implementation, backend endpoints, and end-to-end verification.",
  },
  {
    name: "Google Gemini Pro",
    role: "Problem Solving & Documentation",
    description:
      "Applied for rapid algorithm analysis, SQL/MongoDB query optimization, edge-case brainstorming, and clean technical documentation.",
  },
];

const workflowCapabilities = [
  {
    icon: <Code2 size={20} className="text-blue-400" />,
    title: "AI-Powered Code Generation",
    description:
      "Accelerating boilerplate setup, reusable React/Next.js components, and Laravel/Express controllers while strictly enforcing clean MVC and modular standards.",
  },
  {
    icon: <Zap size={20} className="text-blue-400" />,
    title: "Vibe Coding & Rapid Prototyping",
    description:
      "Transforming product requirements and wireframes into functional, responsive full-stack prototypes in a fraction of traditional development cycles.",
  },
  {
    icon: <Bug size={20} className="text-blue-400" />,
    title: "AI-Assisted Debugging",
    description:
      "Diagnosing state synchronization bugs, asynchronous API race conditions, middleware issues, and database query bottlenecks with precision.",
  },
  {
    icon: <Workflow size={20} className="text-blue-400" />,
    title: "AI-Assisted Development Workflows",
    description:
      "Pairing human architectural oversight, manual QA, and security review with AI speed—delivering maintainable, production-ready web applications.",
  },
];

export default function AIDevelopment() {
  return (
    <section
      id="ai-development"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#0066FF]/15 blur-[130px] rounded-full" />
        <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-indigo-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-5"
            >
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                Modern Engineering Workflow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]"
            >
              Building Smarter with{" "}
              <span className="text-[#0066FF]">AI-Assisted Development.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Modern AI coding tools complement my core full-stack engineering
              foundation. By combining hands-on expertise in React, Next.js,
              Laravel, and Node.js with AI-assisted workflows, I deliver cleaner
              code, faster iterations, and more reliable applications.
            </p>
          </div>
        </div>

        {/* AI Tools Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#0066FF]/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Bot size={20} />
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  Active Tool
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-1">
                {tool.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                {tool.role}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4 Workflow Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {workflowCapabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800/90 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Principle Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0066FF]/20 via-slate-900 to-indigo-600/20 border border-blue-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF] flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                Software Engineering First, AI-Augmented Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Every line of AI-assisted code is reviewed, structured, and
                validated against real full-stack engineering principles—ensuring
                secure authentication, clean database schemas, and maintainable
                frontend/backend architecture.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-blue-300 bg-slate-950/80 px-4 py-2.5 rounded-xl border border-blue-500/30 shrink-0 self-start md:self-center">
            <Terminal size={14} />
            <span>Verified by Engineer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
