"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase, Globe } from "lucide-react";

const experiences = [
  {
    company: "Veeivs",
    role: "Front-End Developer",
    period: "May 2026 — July 2026",
    link: "https://www.veeivs.com/",
    description: "Developed and optimized responsive, interactive user interfaces for a Human Resource Management System (HRMS) using React.js. Focused on building modular components, managing complex application state efficiently, and ensuring seamless front-end performance for core HR modules.",
    stack: ["React.js", "NextJs", "Tailwind CSS", "Redux", "React Query", "JavaScript", "HTML5", "CSS3"],
    isCurrent: false,
  },
  {
    company: "Eziline Software House Pvt Ltd",
    role: "Laravel Intern",
    period: "Dec 2025 — Mar 2026",
    link: "https://www.eziline.com/",
    description: "Intensive focus on MVC architecture and backend systems. Contributing to full-stack workflows and mastering Laravel's ecosystem for scalable applications.",
    stack: ["Laravel", "PHP", "Blade", "MySQL", "MVC"],
    isCurrent: false,
  },
  {
    company: "Afflictor-FZCO (Remote)",
    role: "Front-End Developer",
    period: "Jan 2025 — Aug 2025",
    link: "https://afli.ae/",
    description: "Translated complex Figma designs into responsive e-commerce UIs. Focused on creating modern, mobile-friendly layouts and high-performance web sections.",
    stack: ["JavaScript", "jQuery", "Bootstrap", "HTML5", "CSS3", "Figma"],
    isCurrent: false,
  },
  {
    company: "DoneSol Technologies (Hybrid)",
    role: "Full-Stack Developer",
    period: "Jan 2023 — Present",
    link: "https://donesol.co.uk/",
    description: "Dual responsibility of building responsive websites and leading QA testing. Improved site visibility through technical SEO and developed modular, reusable components.",
    stack: ["Front-End Tech", "QA Testing", "WordPress", "Elementor", "Technical SEO"],
    isCurrent: false,
  },
];

function ExperienceItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  return (
    <motion.div 
    id="experience"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative pl-10 md:pl-16 pb-24 group last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-slate-100 group-last:h-0">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full bg-gradient-to-b from-[#0066FF] to-transparent"
        />
      </div>
      
      {/* Circle Indicator */}
      <div className={`absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-white border-2 transition-all duration-500 group-hover:scale-150 ${exp.isCurrent ? 'border-[#0066FF]' : 'border-slate-300'}`}>
        {exp.isCurrent && (
          <div className="absolute inset-0 bg-[#0066FF] rounded-full animate-ping opacity-30" />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Period */}
        <div className="lg:col-span-3 pt-1">
          <div className="flex flex-col gap-3">
             <span className="text-slate-400 font-[900] text-[10px] uppercase tracking-[0.3em]">
               {exp.period}
             </span>
             {exp.isCurrent && (
               <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                 <span className="text-slate-900 font-bold text-[9px] uppercase tracking-widest text-emerald-600">Current Engagement</span>
               </div>
             )}
          </div>
        </div>

        {/* Right: Card */}
        <div className="lg:col-span-9 bg-[#F8FAFC] border border-slate-100 p-8 md:p-12 rounded-[3rem] group-hover:bg-white group-hover:shadow-[0_40px_80px_-15px_rgba(0,102,255,0.1)] group-hover:border-[#0066FF]/10 transition-all duration-700 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
            <div>
              <h3 className="text-4xl font-[1000] text-slate-900 tracking-tighter mb-2 group-hover:text-[#0066FF] transition-colors">
                {exp.company}
              </h3>
              <div className="inline-flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-wide">
                <Briefcase size={14} className="text-[#0066FF]" />
                {exp.role}
              </div>
            </div>
            
            {/* Live Link Button */}
            <a 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF]/20 hover:shadow-md transition-all active:scale-90"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-3xl">
            {exp.description}
          </p>

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200/60 px-4 py-2 rounded-xl bg-white group-hover:text-slate-900 group-hover:border-[#0066FF]/20 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0066FF]/05 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-1.5 bg-[#0066FF] rounded-full" />
            <span className="text-[#0066FF] font-black text-xs uppercase tracking-[0.4em]">
              Professional History
            </span>
          </motion.div>
          
          <h2 className="text-[80px] md:text-[140px] font-[1000] text-slate-900 tracking-[-0.06em] leading-[0.8]">
            Career<span className="text-[#0066FF]">.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}