"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
    title: "Ezitech iPortal",
    category: "Portal Application",
    description:
      "A multi-layered enterprise management system designed for Eziline Software House. It features a hierarchical role-based access control (RBAC) system for Admins, Managers, Supervisors, and Internees to streamline project workflows, attendance, and performance tracking.",
    link: "https://ezitech.org/ip-admin/public/",
    tags: ["PHP", "Laravel", 'SQL', 'Blade'],
    image: "eziline.png",
  },
    {
    title: "Quiz Master Website",
    category: "Quiz Site",
    description:
      "A full-stack Quiz Master platform built using the MERN stack with TypeScript, enabling users to attempt quizzes, track scores, and manage questions through a scalable and type-safe architecture.",
    link: "https://quiz-app-frontend-kohl.vercel.app/",
    tags: ["React JS", "Typescript", 'NodeJS', 'Express', 'Mongodb'],
    image: "1.jpg",
  },
    {
    title: "Lola's Food & Catering",
    category: "Restaurant Site",
    description:
      "A catering project providing customized menus and professional event services for private and corporate clients. I contributed to menu planning, order placement, and event logistics while ensuring smooth coordination, high-quality food service.",
    link: "https://lolascatering.co.uk/",
    tags: ["Wordpress", "Javascript", 'PHP', 'Elementor'],
    image: "/lolas-catering.png",
  },
    {
    title: "Line Security Ltd",
    category: "Security Company",
    description:
      "Developed the Line Security Ltd website, featuring key pages: Home, Services, and Contact Us. The site showcases the company’s expert security services with a modern, responsive design, providing users with easy access to information and support.",
    link: "https://www.linesecurity.co.uk/",
    tags: ["NextJS", "Tailwind CSS"],
    image: "/linesecurity.png",
  },
     {
    title: "DoneSol Technologies",
    category: "Software Company",
    description:
      "Developed the Donesol Technologies website with key pages: Home, About, Services, and Contact Us. The site offers a modern, responsive design that highlights the company’s software development expertise and services.",
    link: "https://donesol.co.uk/",
    tags: ["ReactJS", "Javascript", "SEO"],
    image: "/donesol.png",
  },
    {
    title: "Eclat E-Commerce",
    category: "E-Commerce",
    description:
      "Contributed to the development of an online shopping platform by adding new features, performing manual testing to ensure functionality and user experience, and handling data entry to maintain accurate product information.",
    link: "https://eclattech.co.uk/",
    tags: ["ReactJS", "Next.js", "PostgreSQL"],
    image: "/eclat.png",
  },
  {
    title: "Doctor Gadgets Website",
    category: "E-Commerce",
    description:
      "Worked on an online retail platform specializing in gadgets and accessories, contributing to feature enhancements, manual testing for quality assurance, and product data entry to ensure accurate and seamless user experience.",
    link: "https://doctorgadgets.co.uk/",
    tags: ["ReactJS", "Next.js", "PostgreSQL"],
    image: "/gadgets.png",
  },
  {
    title: "Stack Food Admin",
    category: "Restaurant site",
    description:
      "Designed and developed an admin dashboard theme for food management systems using HTML, CSS, JavaScript, and Bootstrap, featuring responsive layouts, intuitive navigation, and organized data presentation to streamline tasks.",
    link: "https://humair.goafli.com/themes/stack-food-site/admin-panel/index.html",
    tags: ["HTML5", "CSS3", "BootStrap", "Javascript"],
    image: "/stack_food.png",
  },
  {
    title: "Task Management",
    category: "Task CRUD",
    description:
      "Developed a Task Management system using the PERN stack that allows users to manage daily tasks with a secure recovery feature.",
    link: "https://taskmanage1.netlify.app",
    tags: ["React JS", "MUI", "Express", "PostgreSQL"],
    image: "/task-manage.png",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative flex flex-col bg-[#F8FAFC] border border-slate-100 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(0,102,255,0.12)] hover:border-[#0066FF]/20"
    >
      {/* Visual Header - Image Replacement */}
      <div className="h-72 bg-slate-200 relative overflow-hidden flex items-center justify-center">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

        <div className="absolute top-6 right-6 z-10">
          <div className="bg-white/80 backdrop-blur-md border border-white px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-3xl font-[1000] text-slate-900 tracking-tight mb-3 group-hover:text-[#0066FF] transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-black text-slate-400 border border-slate-200 px-3 py-1.5 rounded-xl bg-white/50 group-hover:border-[#0066FF]/10 group-hover:text-slate-600 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Links */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-900 font-bold text-sm group/link hover:text-[#0066FF] transition-colors"
          >
            <span>Launch Project</span>
            <ExternalLink
              size={16}
              className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white relative">
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <h1 className="text-[300px] font-black tracking-tighter text-slate-900">
          WORK
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-1.5 bg-[#0066FF] rounded-full" />
              <span className="text-[#0066FF] font-[1000] text-xs uppercase tracking-[0.5em]">
                Project Gallery
              </span>
            </motion.div>

            <h2 className="text-[80px] md:text-[110px] font-[1000] text-slate-900 tracking-[-0.07em] leading-[0.8] mb-8">
              Digital<br />Products<span className="text-[#0066FF]">.</span>
            </h2>
          </div>
          <div className="max-w-md pb-4">
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              Precision code meets future-focused design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}