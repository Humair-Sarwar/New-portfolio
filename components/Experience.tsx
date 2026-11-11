"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Briefcase,
  Calendar,
  CheckCircle2,
  Building2,
  MapPin,
} from "lucide-react";

interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  link: string;
  responsibilities: string[];
  stack: string[];
  isCurrent: boolean;
}

const experiences: ExperienceEntry[] = [
  {
    company: "DoneSol Technologies",
    role: "Full Stack Developer",
    location: "Hybrid, Islamabad",
    period: "Jan 2023 – Present",
    link: "https://donesol.co.uk/",
    responsibilities: [
      "Developed and maintained full-stack web applications, e-commerce storefronts, and corporate web platforms using React.js, Next.js, JavaScript, PHP, and relational databases.",
      "Built responsive, component-driven user interfaces and integrated backend services and REST APIs for seamless end-to-end functionality.",
      "Delivered feature enhancements, product catalog management, and database operations for live platforms including Eclat E-Commerce and Doctor Gadgets.",
      "Led functional Quality Assurance (QA) testing, systematic debugging, and technical SEO optimizations to improve site reliability and search visibility.",
      "Collaborated with cross-functional teams across the full software development lifecycle from requirement analysis to deployment.",
    ],
    stack: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "PHP",
      "REST APIs",
      "Relational Databases",
      "Technical SEO",
      "QA Testing",
    ],
    isCurrent: true,
  },
  {
    company: "Veeivs",
    role: "React.js Developer",
    location: "Onsite, Islamabad",
    period: "May 2026 – July 2026",
    link: "https://www.veeivs.com/",
    responsibilities: [
      "Developed and optimized responsive, interactive user interfaces for a Human Resource Management System (HRMS) using React.js, Next.js, Tailwind CSS, and JavaScript (ES6+).",
      "Built modular, reusable UI components and implemented modern frontend architecture to streamline core HR workflows.",
      "Integrated RESTful APIs using Axios and managed complex application state and data flow across multiple modules.",
      "Applied React Hooks and frontend performance optimization techniques to ensure fast rendering and smooth user experiences.",
      "Collaborated closely with backend engineers and product team members to deliver reliable, user-focused web applications.",
    ],
    stack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Axios",
      "RESTful APIs",
      "React Hooks",
    ],
    isCurrent: false,
  },
  {
    company: "Eziline Software House",
    role: "Laravel Developer Intern",
    location: "Onsite, Islamabad",
    period: "Dec 2025 – Mar 2026",
    link: "https://www.eziline.com/",
    responsibilities: [
      "Developed and maintained full-stack web applications using PHP, Laravel, Blade, JavaScript, and MySQL following MVC architecture.",
      "Contributed to the Ezitech iPortal enterprise system, implementing hierarchical Role-Based Access Control (RBAC) for Admins, Managers, Supervisors, and Internees.",
      "Designed relational database schemas, authored Eloquent ORM models, migrations, and seeders, and built secure CRUD operations.",
      "Integrated responsive frontend views with backend services and RESTful endpoints to support attendance, task, and performance tracking.",
      "Collaborated with senior developers on code reviews, debugging, and database query optimization.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "Blade",
      "MySQL",
      "MVC Architecture",
      "Eloquent ORM",
      "RBAC",
      "RESTful APIs",
    ],
    isCurrent: false,
  },
  {
    company: "Afflictor",
    role: "Frontend Developer",
    location: "Remote, Dubai, UAE",
    period: "Jan 2025 – Aug 2025",
    link: "https://afli.ae/",
    responsibilities: [
      "Developed responsive and interactive e-commerce and web interfaces using HTML5, CSS3, JavaScript, jQuery, and Bootstrap, ensuring cross-browser compatibility and mobile-first responsiveness.",
      "Translated complex Figma UI/UX mockups and prototypes into clean, pixel-accurate, and user-friendly frontend layouts.",
      "Integrated frontend interfaces with backend APIs to enable dynamic content rendering and seamless client-server data flow.",
      "Optimized frontend assets and rendering performance, achieving fast page load times across desktop and mobile devices.",
      "Maintained clean, modular, and reusable frontend code adhering to modern web development standards.",
    ],
    stack: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "Figma (UI/UX)",
      "API Integration",
    ],
    isCurrent: false,
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceEntry;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative pl-8 sm:pl-12 pb-12 last:pb-0 group"
    >
      {/* Vertical Timeline Line */}
      <div className="absolute left-[11px] top-3 bottom-0 w-0.5 bg-slate-200 group-last:bg-gradient-to-b group-last:from-slate-200 group-last:to-transparent" />

      {/* Timeline Node */}
      <div
        className={`absolute left-0 top-2.5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-colors ${
          exp.isCurrent
            ? "bg-[#0066FF] border-blue-100 shadow-sm shadow-blue-500/30"
            : "bg-white border-slate-300 group-hover:border-[#0066FF]"
        }`}
      >
        {exp.isCurrent && (
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        )}
      </div>

      {/* Card Body */}
      <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-blue-500/[0.05] hover:border-blue-200/90 transition-all duration-300">
        {/* Top Row: Company, Role, Dates, Link */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                {exp.company}
              </h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200/70">
                <MapPin size={11} />
                {exp.location}
              </span>
              {exp.isCurrent && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Current Role
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-[#0066FF]">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={15} />
                {exp.role}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500 font-semibold text-xs">
                <Calendar size={14} />
                {exp.period}
              </span>
            </div>
          </div>

          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${exp.company} website`}
            className="self-start lg:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-[#0066FF] text-slate-700 hover:text-white border border-slate-200/80 hover:border-[#0066FF] text-xs font-bold transition-all duration-200"
          >
            <Building2 size={14} />
            <span>Company Website</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Responsibilities */}
        <div className="py-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
            Responsibilities &amp; Key Contributions
          </h4>
          <ul className="space-y-2.5">
            {exp.responsibilities.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed"
              >
                <CheckCircle2
                  size={16}
                  className="text-[#0066FF] shrink-0 mt-0.5"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Technologies:
          </span>
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100/90 text-slate-700 border border-slate-200/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70 relative overflow-hidden"
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
                Professional Experience
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              Work History &amp;{" "}
              <span className="text-[#0066FF]">Industry Impact.</span>
            </motion.h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Over 3 years of hands-on experience building full-stack web
            applications, HRMS platforms, enterprise portals, and e-commerce
            solutions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
