"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Sparkles,
  Wrench,
  Check,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  accent: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "User Interfaces & Client Architecture",
    description:
      "Building responsive, accessible, and interactive web interfaces with modern component architectures and seamless API integration.",
    icon: <Layout size={22} className="text-[#0066FF]" />,
    skills: [
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "API Integration",
    ],
    accent: "from-blue-500/10 to-transparent",
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Server-Side Logic & API Engineering",
    description:
      "Developing structured MVC applications, RESTful services, role-based authentication systems, and relational data models.",
    icon: <Server size={22} className="text-[#0066FF]" />,
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "RESTful APIs",
      "MVC Architecture",
      "Authentication and Authorization",
      "Eloquent ORM",
      "Middleware",
    ],
    accent: "from-indigo-500/10 to-transparent",
  },
  {
    id: "ai-tools",
    title: "AI Tools & AI-Assisted Development",
    subtitle: "Modern AI-Augmented Engineering",
    description:
      "Leveraging intelligent coding environments and large language models to accelerate implementation, debugging, and iterative workflows.",
    icon: <Sparkles size={22} className="text-[#0066FF]" />,
    skills: [
      "Claude Code",
      "Google Antigravity",
      "Google Gemini Pro",
      "AI-Assisted Coding",
      "Vibe Coding",
      "AI-Powered Debugging",
      "AI-Assisted Development Workflows",
    ],
    accent: "from-cyan-500/10 to-transparent",
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "Relational & Document Data Stores",
    description:
      "Designing normalized relational schemas and flexible NoSQL document collections for full-stack web applications.",
    icon: <Database size={22} className="text-[#0066FF]" />,
    skills: ["MySQL", "MongoDB"],
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    id: "dev-tools",
    title: "Development Tools",
    subtitle: "Version Control, API Testing & Environment",
    description:
      "Maintaining clean version control history, testing REST endpoints thoroughly, and managing PHP/JavaScript package ecosystems.",
    icon: <Wrench size={22} className="text-[#0066FF]" />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Composer"],
    accent: "from-slate-500/10 to-transparent",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="text-[#0066FF] font-bold text-xs uppercase tracking-widest">
                Technical Skills
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              Technologies &amp; Tools I Use{" "}
              <span className="text-[#0066FF]">in Production.</span>
            </motion.h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Organized across frontend, backend, databases, AI-assisted
            workflows, and core developer tooling—focused strictly on
            technologies I actively build with.
          </p>
        </div>

        {/* Top 3 Major Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {skillCategories.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-3xl bg-slate-50/90 border border-slate-200/80 p-7 sm:p-8 hover:bg-white hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center group-hover:border-blue-200 transition-colors">
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200/70">
                    {category.skills.length} Skills
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-1">
                  {category.subtitle}
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-slate-200/70">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-200/90 group-hover:border-blue-200/90 transition-colors shadow-2xs"
                  >
                    <Check size={12} className="text-[#0066FF] shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 Categories (Databases & Development Tools) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.slice(3).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.08, duration: 0.5 }}
              className="group relative rounded-3xl bg-slate-50/90 border border-slate-200/80 p-7 sm:p-8 hover:bg-white hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 group-hover:border-blue-200 transition-colors">
                    {category.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-1">
                      {category.subtitle}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="self-start text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200/70 shrink-0">
                  {category.skills.length} Skills
                </span>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2.5 pt-4 border-t border-slate-200/70">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-200/90 group-hover:border-blue-200/90 transition-colors shadow-2xs"
                  >
                    <Check size={12} className="text-[#0066FF] shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
