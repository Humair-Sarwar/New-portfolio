"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layout, Server, Database, Layers, Globe, 
  Cpu, Rocket, ShieldCheck, Zap 
} from "lucide-react";

// Sari skills aik hi list mein logical groups ke sath
const skillGroups = [
  {
    title: "Modern Frontend",
    icon: <Layout className="text-[#0066FF]" size={22} />,
    skills: ["React 19", "Next.js 15", "TypeScript", "Redux", "HTML5", "CSS3"],
    description: "Building high-performance, SEO-friendly interfaces with clean architecture.",
    color: "from-blue-500/10",
  },
  {
    title: "Backend & Systems",
    icon: <Server className="text-[#0066FF]" size={22} />,
    skills: ["Laravel", "Node.js", "PHP", "Express", "MVC"],
    description: "Designing robust server-side logic and scalable RESTful APIs.",
    color: "from-indigo-500/10",
  },
  {
    title: "Database Architecture",
    icon: <Database className="text-[#0066FF]" size={22} />,
    skills: ["PostgreSQL", "SQL (MySQL)", "MongoDB", "Database Design"],
    description: "Managing data integrity and optimizing complex query performance.",
    color: "from-cyan-500/10",
  },
  {
    title: "UI Frameworks",
    icon: <Layers className="text-[#0066FF]" size={22} />,
    skills: ["Tailwind CSS", "Material UI", "Bootstrap"],
    description: "Creating responsive, mobile-first designs with modern UI/UX principles.",
    color: "from-blue-400/10",
  },
  {
    title: "Specialized Tech",
    icon: <Globe className="text-[#0066FF]" size={22} />,
    skills: ["WordPress", "Trade-in Portals", "Admin Systems"],
    description: "Delivering niche solutions for tech trade-in and resale platforms.",
    color: "from-sky-500/10",
  },
  {
    title: "Engineering Tools",
    icon: <Cpu className="text-[#0066FF]" size={22} />,
    skills: ["Git", "Docker", "REST APIs", "Clean Code"],
    description: "Utilizing professional DevOps tools for seamless deployment workflows.",
    color: "from-blue-600/10",
  },
];

export default function Expertise() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
               <div className="w-10 h-[2px] bg-[#0066FF]" />
               <span className="text-[#0066FF] font-black text-[11px] uppercase tracking-[0.5em]">My Tech Stack</span>
            </motion.div>
            <h2 className="text-7xl md:text-[100px] font-[1000] text-slate-900 tracking-[-0.06em] leading-[0.85]">
              Expertise<span className="text-[#0066FF]">.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-snug">
            Professional workflow and clean code architecture honed at <span className="text-slate-900">DoneSol Technologies</span> & <span className="text-slate-900">Eziline</span>.
          </p>
        </div>

        {/* Unified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative p-10 rounded-[3rem] bg-[#F8FAFC] border border-slate-100 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/20"
            >
              {/* Subtle Color Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]`} />

              <div className="relative z-10">
                {/* Icon Box */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-50 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-500">
                    <div className="group-hover:text-white transition-colors duration-500">
                      {group.icon}
                    </div>
                  </div>
                  <Zap size={16} className="text-slate-200 group-hover:text-[#0066FF]/30 transition-colors" />
                </div>

                <h3 className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.25em] mb-4">
                  {group.title}
                </h3>
                
                <p className="text-2xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                  {group.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[9px] font-[900] uppercase tracking-widest text-slate-400 border border-slate-200/60 px-3 py-1.5 rounded-xl bg-white/50 group-hover:text-slate-900 group-hover:border-[#0066FF]/20 transition-all duration-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}