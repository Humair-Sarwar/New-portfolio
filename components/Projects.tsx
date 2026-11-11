"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Eye,
  X,
  CheckCircle2,
  Layers,
  Code2,
  Sparkles,
  ShoppingCart,
  Users,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "Core Full-Stack" | "Client & Production";
  badge: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  image?: string;
  visualTheme?: "ecommerce" | "hrms";
  liveUrl?: string;
  featuredPriority: boolean;
}

const projectsData: ProjectItem[] = [
  {
    id: "ecommerce-management-system",
    title: "Multi-Vendor E-Commerce & POS System",
    category: "Core Full-Stack",
    badge: "Laravel + React.js",
    shortDescription:
      "Full-stack multi-vendor e-commerce marketplace and Point of Sale (POS) platform built with Laravel and React.js, featuring Vendor, Customer, and Website portals.",
    fullDescription:
      "Built a full-stack multi-vendor e-commerce marketplace and Point of Sale (POS) platform featuring dedicated Vendor, Customer, and Website portals. Engineered with a Laravel RESTful backend (Laravel Sanctum authentication, role-based vendor middleware) and a dynamic React.js frontend.",
    features: [
      "Built a full-stack multi-vendor e-commerce marketplace and Point of Sale (POS) platform with dedicated Vendor, Customer, and Website portals",
      "Engineered Laravel Sanctum authentication and role-based vendor middleware for secure multi-tenant access",
      "Implemented multi-step product creation, dynamic variation generation, and brand/category CRUD operations",
      "Built media management, online ordering workflows, and real-time POS sales order tracking",
    ],
    tags: [
      "React.js",
      "PHP",
      "Laravel",
      "MySQL",
      "Laravel Sanctum",
      "RESTful APIs",
      "Axios",
      "Bootstrap",
    ],
    visualTheme: "ecommerce",
    featuredPriority: true,
  },
  {
    id: "employee-management-system",
    title: "Employee Management System (HRMS)",
    category: "Core Full-Stack",
    badge: "React.js + REST APIs",
    shortDescription:
      "Interactive Human Resource & Employee Management System built with React.js, Next.js, and RESTful backend APIs with role-based access control.",
    fullDescription:
      "Developed and optimized responsive, interactive user interfaces for an enterprise Employee Management System (HRMS) using React.js, Next.js, Tailwind CSS, and RESTful APIs. Built modular components and managed complex application state across HR workflows.",
    features: [
      "Modular, reusable React.js UI components and modern frontend architecture for core HR workflows",
      "Integrated RESTful backend APIs using Axios for employee management and real-time data flow",
      "Role-Based Access Control (RBAC) across administrative and employee portal modules",
      "Applied React Hooks and performance optimization techniques for fast rendering across complex views",
    ],
    tags: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "RESTful APIs",
      "Axios",
      "RBAC",
    ],
    visualTheme: "hrms",
    featuredPriority: true,
  },
  {
    id: "internee-portal",
    title: "Ezitech iPortal – Enterprise RBAC System",
    category: "Core Full-Stack",
    badge: "Laravel + Blade MVC",
    shortDescription:
      "Multi-layered enterprise management portal featuring hierarchical Role-Based Access Control (RBAC) for Admins, Managers, Supervisors, and Internees.",
    fullDescription:
      "Developed a multi-layered enterprise management portal for Eziline Software House using PHP, Laravel, Blade, Eloquent ORM, and MySQL. Features hierarchical Role-Based Access Control (RBAC) for Admins, Managers, Supervisors, and Internees.",
    features: [
      "Developed a multi-layered enterprise management portal with hierarchical RBAC for Admins, Managers, Supervisors, and Internees",
      "Implemented project workflow tracking, intern attendance logs, and performance evaluation modules",
      "Backed by Eloquent ORM models, MySQL relational migrations, seeders, and secure CRUD operations",
      "Responsive Blade and Bootstrap views integrated with Laravel MVC controllers and middleware",
    ],
    tags: [
      "PHP",
      "Laravel",
      "MySQL",
      "Eloquent ORM",
      "Blade",
      "JavaScript",
      "Bootstrap",
      "MVC Architecture",
    ],
    image: "/eziline.png",
    liveUrl: "https://ezitech.org/ip-admin/public/",
    featuredPriority: true,
  },
  {
    id: "quiz-master",
    title: "Quiz Master – Full-Stack MERN Platform",
    category: "Core Full-Stack",
    badge: "MERN + TypeScript",
    shortDescription:
      "Full-stack interactive quiz platform built with the MERN stack and TypeScript, enabling users to attempt quizzes, track real-time scores, and compete on leaderboards.",
    fullDescription:
      "Created a full-stack interactive quiz platform enabling users to attempt quizzes, track real-time scores, and compete on dynamic leaderboards. Architected the Node.js/Express.js REST API backend with MongoDB for user authentication, quiz/question CRUD, and score calculation, paired with a responsive React.js/TypeScript frontend.",
    features: [
      "Created a full-stack interactive quiz platform with real-time score tracking and dynamic leaderboards",
      "Architected Node.js and Express.js REST API backend with MongoDB for quiz/question CRUD and score calculation",
      "Implemented secure JWT user authentication and role-protected question bank management",
      "Built a responsive, type-safe React.js and TypeScript frontend interface",
    ],
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "RESTful APIs",
      "JWT Auth",
    ],
    image: "/1.jpg",
    liveUrl: "https://quiz-app-frontend-kohl.vercel.app/",
    featuredPriority: true,
  },
  {
    id: "online-food-ordering-system",
    title: "Food Order & Delivery Web Application",
    category: "Core Full-Stack",
    badge: "React + Laravel API",
    shortDescription:
      "End-to-end food ordering, admin management, and delivery system combining React.js/TypeScript client interfaces, a Laravel API backend, and admin dashboards.",
    fullDescription:
      "Developed an end-to-end food ordering and delivery system featuring decoupled React.js/TypeScript client interfaces, a modular Laravel API backend with Laravel Sanctum authentication, and an administrative management dashboard.",
    features: [
      "Developed an end-to-end food ordering and delivery system with decoupled React.js/TypeScript client views and a modular Laravel API backend",
      "Implemented dedicated Laravel Sanctum authentication, admin management, and customer ordering workflows",
      "Secure token-based API communication and relational MySQL data modeling for menus, orders, and delivery tracking",
      "Responsive admin dashboard interface for restaurant order dispatch and catalog management",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "PHP",
      "Laravel",
      "MySQL",
      "Laravel Sanctum",
      "Tailwind CSS",
      "REST APIs",
    ],
    image: "/stack_food.PNG",
    liveUrl:
      "https://humair.goafli.com/themes/stack-food-site/admin-panel/index.html",
    featuredPriority: true,
  },
  {
    id: "line-security-ltd",
    title: "Line Security Ltd",
    category: "Client & Production",
    badge: "Next.js + Tailwind CSS",
    shortDescription:
      "Modern corporate website built with Next.js and Tailwind CSS for a UK-based security company, featuring service showcases and lead generation.",
    fullDescription:
      "Developed the production website for Line Security Ltd (UK) using Next.js and Tailwind CSS. Engineered for fast page loads, strong SEO structure, and clear presentation of commercial security services.",
    features: [
      "Built with Next.js and Tailwind CSS for fast rendering and mobile-first responsiveness",
      "Structured service pages, company credentials, and customer inquiry workflows",
      "SEO-friendly semantic HTML structure and accessible navigation",
    ],
    tags: ["Next.js", "React.js", "Tailwind CSS", "Responsive Web Design"],
    image: "/linesecurity.PNG",
    liveUrl: "https://www.linesecurity.co.uk/",
    featuredPriority: false,
  },
  {
    id: "donesol-technologies",
    title: "DoneSol Technologies",
    category: "Client & Production",
    badge: "React.js + SEO",
    shortDescription:
      "Official software agency website for DoneSol Technologies (UK), showcasing digital services, portfolio highlights, and client consultation flows.",
    fullDescription:
      "Developed key pages (Home, About, Services, and Contact) for DoneSol Technologies using React.js and modern JavaScript, focusing on clean visual hierarchy, responsive performance, and technical SEO.",
    features: [
      "Interactive React.js component architecture with smooth transitions",
      "Technical SEO optimization and responsive layouts across all viewports",
      "Clear service presentation and client inquiry conversion funnel",
    ],
    tags: ["React.js", "JavaScript (ES6+)", "CSS3", "Technical SEO"],
    image: "/donesol.PNG",
    liveUrl: "https://donesol.co.uk/",
    featuredPriority: false,
  },
  {
    id: "eclat-ecommerce",
    title: "Eclat E-Commerce Retail Platform",
    category: "Client & Production",
    badge: "Next.js + React.js",
    shortDescription:
      "UK online retail storefront built with React.js, Next.js, and relational databases, featuring reusable UI components, catalog management, and SEO.",
    fullDescription:
      "Contributed to full-stack feature development, reusable UI components, and product catalog management for the live Eclat E-Commerce retail storefront. Conducted end-to-end functional QA testing, issue debugging, and performance/SEO optimizations.",
    features: [
      "Full-stack feature development, reusable UI components, and product catalog management",
      "End-to-end functional QA testing and systematic issue debugging across shopping flows",
      "Performance and technical SEO optimizations for cross-device reliability",
    ],
    tags: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Relational Databases",
      "Technical SEO",
    ],
    image: "/eclat.PNG",
    liveUrl: "https://eclattech.co.uk/",
    featuredPriority: false,
  },
  {
    id: "doctor-gadgets",
    title: "Doctor Gadgets Retail Platform",
    category: "Client & Production",
    badge: "Next.js + React.js",
    shortDescription:
      "Online retail platform for electronics and accessories in the UK, focusing on full-stack feature enhancements, catalog operations, and QA validation.",
    fullDescription:
      "Contributed to full-stack feature development, reusable UI components, and product catalog management for the live Doctor Gadgets retail storefront, alongside functional QA testing and SEO optimization.",
    features: [
      "Responsive e-commerce catalog and product detail interfaces built with React.js and Next.js",
      "Product catalog management and relational database operations",
      "Cross-device functional QA testing and technical SEO enhancements",
    ],
    tags: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Relational Databases",
      "Technical SEO",
    ],
    image: "/gadgets.PNG",
    liveUrl: "https://doctorgadgets.co.uk/",
    featuredPriority: false,
  },
  {
    id: "lolas-catering",
    title: "Lola's Food & Catering",
    category: "Client & Production",
    badge: "PHP + JavaScript",
    shortDescription:
      "Custom catering and event ordering website for private and corporate clients in the UK, featuring customizable menus and booking workflows.",
    fullDescription:
      "Built and customized key web modules for Lola's Food & Catering (UK), enabling private and corporate clients to explore tailored catering menus and coordinate event orders online.",
    features: [
      "Interactive menu browsing and customized event inquiry workflows",
      "Responsive layout tailored for hospitality and food service branding",
      "PHP and JavaScript frontend/backend customizations",
    ],
    tags: ["PHP", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Web Design"],
    image: "/lolas-catering.png",
    liveUrl: "https://lolascatering.co.uk/",
    featuredPriority: false,
  },
  {
    id: "task-management-app",
    title: "Task Management Application",
    category: "Client & Production",
    badge: "React.js + Express.js",
    shortDescription:
      "Full-stack task CRUD and productivity web application built with React.js and Express.js, featuring task lifecycle tracking and recovery.",
    fullDescription:
      "A full-stack task management system built with React.js and Express.js REST APIs that enables users to create, organize, update, and recover daily tasks through a clean interface.",
    features: [
      "Complete CRUD operations with RESTful Express.js backend endpoints",
      "Task status filtering, priority tracking, and deleted task recovery workflow",
      "Responsive React.js user interface",
    ],
    tags: ["React.js", "Node.js", "Express.js", "RESTful APIs"],
    image: "/task-manage.PNG",
    liveUrl: "https://taskmanage1.netlify.app",
    featuredPriority: false,
  },
];

function ArchitecturalPreview({ theme }: { theme: "ecommerce" | "hrms" }) {
  if (theme === "ecommerce") {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-6 flex flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#0066FF]/25 rounded-full blur-2xl" />
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <ShoppingCart size={12} /> Multi-Vendor + POS
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Laravel + React
          </span>
        </div>

        <div className="my-auto space-y-2.5 py-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-slate-400">POS Terminal</div>
              <div className="text-xs font-bold text-white mt-0.5">
                Sales Tracking
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-slate-400">Portals</div>
              <div className="text-xs font-bold text-emerald-400 mt-0.5">
                Vendor &amp; User
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-slate-400">Sanctum Auth</div>
              <div className="text-xs font-bold text-blue-400 mt-0.5">
                RBAC Protected
              </div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-300">
              Sanctum API &bull; Variations &bull; POS Orders
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="text-[11px] text-slate-400 font-medium">
          Multi-Vendor Marketplace &amp; Point of Sale Platform
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 flex flex-col justify-between text-white relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-indigo-500/25 rounded-full blur-2xl" />
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
          <Users size={12} /> Enterprise HRMS
        </span>
        <span className="text-[11px] font-mono text-slate-400">
          React.js + REST API
        </span>
      </div>

      <div className="my-auto space-y-2.5 py-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] text-slate-400">Directory</div>
            <div className="text-xs font-bold text-white mt-0.5">
              Employees
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] text-slate-400">Access</div>
            <div className="text-xs font-bold text-indigo-300 mt-0.5">
              RBAC Roles
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] text-slate-400">Workflows</div>
            <div className="text-xs font-bold text-emerald-400 mt-0.5">
              HR Modules
            </div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">
            RBAC: Admin &bull; HR Manager &bull; Staff
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-400" />
        </div>
      </div>

      <div className="text-[11px] text-slate-400 font-medium">
        Role-Based Employee Management &amp; Portal Interface
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Core Full-Stack" | "Client & Production"
  >("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="text-[#0066FF] font-bold text-xs uppercase tracking-widest">
                Featured Projects
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              Full-Stack Applications &amp;{" "}
              <span className="text-[#0066FF]">Real-World Work.</span>
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start lg:self-end">
            {(["All", "Core Full-Stack", "Client & Production"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === tab
                      ? "bg-[#0066FF] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
              className="group rounded-3xl bg-slate-50/70 border border-slate-200/85 overflow-hidden flex flex-col justify-between hover:bg-white hover:border-[#0066FF]/35 hover:shadow-xl hover:shadow-blue-500/[0.07] transition-all duration-300"
            >
              <div>
                {/* Visual Thumbnail or Architectural Preview */}
                <div className="h-56 bg-slate-900 relative overflow-hidden border-b border-slate-200/70">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </>
                  ) : (
                    <ArchitecturalPreview
                      theme={project.visualTheme || "ecommerce"}
                    />
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    {project.featuredPriority && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0066FF] text-white shadow-sm">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                    <span className="ml-auto px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black text-slate-950 tracking-tight mb-2.5 group-hover:text-[#0066FF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key Features Preview (Top 2) */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-[#0066FF] shrink-0 mt-0.5"
                        />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 sm:px-7 py-4 bg-white/80 border-t border-slate-200/70 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#0066FF] transition-colors cursor-pointer"
                >
                  <Eye size={15} className="text-[#0066FF]" />
                  <span>View Details</span>
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0066FF] text-white hover:bg-blue-700 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <Layers size={13} className="text-[#0066FF]" />
                    <span>Architecture</span>
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[120] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
            >
              {/* Modal Banner */}
              <div className="h-56 sm:h-64 bg-slate-900 relative overflow-hidden">
                {selectedProject.image ? (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  </>
                ) : (
                  <ArchitecturalPreview
                    theme={selectedProject.visualTheme || "ecommerce"}
                  />
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/75 text-white hover:bg-[#0066FF] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0066FF] text-white">
                    {selectedProject.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                <div>
                  <h3
                    id="modal-project-title"
                    className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Code2 size={14} className="text-[#0066FF]" />
                    <span>Key Features &amp; Architecture</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#0066FF] shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                    >
                      <span>Request Walkthrough / Case Study</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
