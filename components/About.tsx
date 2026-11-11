"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Workflow,
  Terminal,
  GraduationCap,
  Award,
} from "lucide-react";

const highlights = [
  {
    icon: <Layers className="text-[#0066FF]" size={22} />,
    title: "Multi-Stack Versatility",
    description:
      "Proficient across both the MERN Stack (MongoDB, Express.js, React.js, Node.js) and the PHP Laravel Stack (React.js / Next.js, PHP, Laravel, MySQL).",
  },
  {
    icon: <Code2 className="text-[#0066FF]" size={22} />,
    title: "End-to-End Ownership",
    description:
      "Experienced in developing RESTful APIs, implementing authentication (Laravel Sanctum, JWT) and RBAC, and managing MySQL & MongoDB databases.",
  },
  {
    icon: <Workflow className="text-[#0066FF]" size={22} />,
    title: "3+ Years Hands-On Delivery",
    description:
      "Proven track record building multi-vendor POS platforms, HRMS modules, enterprise RBAC portals, and live commercial client websites.",
  },
  {
    icon: <Sparkles className="text-[#0066FF]" size={22} />,
    title: "AI-Augmented Workflows",
    description:
      "Leveraging Claude Code, Google Antigravity, and Google Gemini Pro to accelerate feature delivery, streamline debugging, and maintain clean code.",
  },
];

const certifications = [
  "Full Stack Web Development Certificate – Udemy",
  "PHP / Laravel Internship Certificate – Eziline Software House (2026)",
  "Web Development Certificate – eHunar (2024)",
  "C++ Programming Certificate – Cisco (2024)",
  "WordPress Certificate – DigiSkills (2023)",
  "Search Engine Optimization (SEO) Certificate – DigiSkills (2023)",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[#0066FF] font-bold text-xs uppercase tracking-widest">
              About Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
          >
            Results-Driven Full Stack Developer Across{" "}
            <span className="text-[#0066FF]">Modern Web Ecosystems.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            <p className="text-slate-900 font-semibold text-lg sm:text-xl leading-snug">
              I am <span className="text-[#0066FF]">Humair Sarwar</span>, a
              results-driven Full Stack Web Developer based in Islamabad,
              Pakistan, with over 3 years of hands-on experience designing,
              developing, and maintaining responsive web applications.
            </p>

            <p>
              I specialize in building dynamic frontend interfaces using{" "}
              <strong className="text-slate-900 font-semibold">
                JavaScript (ES6+), React.js, Next.js, Tailwind CSS, and Bootstrap
              </strong>
              , paired with scalable backend architectures powered by{" "}
              <strong className="text-slate-900 font-semibold">
                Node.js, Express.js, PHP, and Laravel
              </strong>
              . I have deep practical experience developing RESTful APIs,
              implementing authentication and role-based access control (Laravel
              Sanctum, JWT, RBAC), and managing both relational (
              <strong className="text-slate-900 font-semibold">MySQL</strong>)
              and NoSQL (
              <strong className="text-slate-900 font-semibold">MongoDB</strong>)
              databases.
            </p>

            <p>
              Across professional engagements at{" "}
              <strong className="text-slate-900 font-semibold">
                DoneSol Technologies, Veeivs, Eziline Software House, and
                Afflictor (Dubai, UAE)
              </strong>
              , I have built and maintained multi-vendor e-commerce &amp; POS
              systems, HRMS platforms, enterprise intern portals, and food
              ordering web applications.
            </p>

            <p>
              I also leverage modern AI-assisted development tools—including{" "}
              <strong className="text-slate-900 font-semibold">
                Claude Code, Google Antigravity, and Google Gemini Pro
              </strong>
              —to accelerate feature delivery, streamline debugging, and
              maintain clean, production-ready code.
            </p>

            {/* Core Stack Combinations Box */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-1.5">
                  <Terminal size={15} />
                  <span>MERN Stack</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  MongoDB, Express.js, React.js, Node.js, TypeScript &amp; JWT
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-1.5">
                  <Database size={15} />
                  <span>PHP Laravel Stack</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  React.js / Next.js, PHP, Laravel, Sanctum, MySQL &amp; REST APIs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CheckCircle2 size={14} className="text-[#0066FF]" />
                  <span>Verified Experience</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div className="mt-14 pt-12 border-t border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF]">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-black text-slate-950 tracking-tight">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-[#0066FF]">
                    2023 – 2026
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Lahore, Pakistan
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  Bachelor of Science in Information Technology (BSIT)
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Virtual University of Pakistan
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-[#0066FF]">
                    2020 – 2022
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Rawalpindi, Pakistan
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  Intermediate – FSC (ICS) Computer Science
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Gordon College, Rawalpindi
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF]">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-950 tracking-tight">
                  Certifications &amp; Professional Training
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs font-bold text-slate-800"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-[#0066FF] shrink-0 mt-0.5"
                    />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-semibold">
              <span>Location: Islamabad, Pakistan</span>
              <span>Languages: English (Fluent) &bull; Urdu (Native)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
