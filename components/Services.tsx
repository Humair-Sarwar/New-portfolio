"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Code2,
  Globe,
  Server,
  Cpu,
  Webhook,
  ShoppingCart,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development combining responsive frontend interfaces with secure, scalable backend architectures and databases.",
    icon: <Layers size={22} className="text-[#0066FF]" />,
    deliverables: [
      "Complete frontend & backend architecture",
      "MySQL & MongoDB database design",
      "Authentication & role-based access control",
    ],
  },
  {
    title: "React.js Development",
    description:
      "Interactive, component-driven Single Page Applications (SPAs), enterprise dashboards, and dynamic user interfaces built with modern React.js.",
    icon: <Code2 size={22} className="text-[#0066FF]" />,
    deliverables: [
      "Reusable modular component libraries",
      "State management & API integration",
      "Responsive Tailwind CSS & Bootstrap UI",
    ],
  },
  {
    title: "Next.js Development",
    description:
      "SEO-friendly, high-performance web applications and corporate websites leveraging Next.js App Router, static generation, and modern routing.",
    icon: <Globe size={22} className="text-[#0066FF]" />,
    deliverables: [
      "SEO-optimized pages & metadata",
      "Fast page loads & responsive layouts",
      "Production-ready Next.js architecture",
    ],
  },
  {
    title: "PHP Laravel Development",
    description:
      "Robust enterprise web portals, custom management systems, and MVC backend applications powered by PHP and the Laravel ecosystem.",
    icon: <Server size={22} className="text-[#0066FF]" />,
    deliverables: [
      "MVC architecture & Eloquent ORM",
      "Multi-role RBAC & middleware security",
      "Blade views or React frontend pairing",
    ],
  },
  {
    title: "Node.js Backend Development",
    description:
      "Fast, event-driven server-side applications and microservices built with Node.js, Express.js, and relational or NoSQL databases.",
    icon: <Cpu size={22} className="text-[#0066FF]" />,
    deliverables: [
      "Express.js server & middleware setup",
      "JWT / session authentication workflows",
      "MongoDB & MySQL data persistence",
    ],
  },
  {
    title: "REST API Development",
    description:
      "Clean, well-structured RESTful APIs designed for seamless communication between web frontends, admin panels, and third-party services.",
    icon: <Webhook size={22} className="text-[#0066FF]" />,
    deliverables: [
      "Structured JSON endpoints & validation",
      "Postman-verified API reliability",
      "Secure token & role authorization",
    ],
  },
  {
    title: "E-commerce Development",
    description:
      "Custom online stores, multi-vendor marketplaces, Point of Sale (POS) systems, and catalog management platforms tailored for retail growth.",
    icon: <ShoppingCart size={22} className="text-[#0066FF]" />,
    deliverables: [
      "Multi-vendor & POS functionality",
      "Product catalog, cart & order workflows",
      "Admin & vendor management dashboards",
    ],
  },
  {
    title: "AI-Assisted Application Development",
    description:
      "Rapid prototyping, feature implementation, codebase refactoring, and debugging accelerated by modern AI-assisted engineering workflows.",
    icon: <Sparkles size={22} className="text-[#0066FF]" />,
    deliverables: [
      "Fast MVP & prototype turnaround",
      "AI-assisted debugging & optimization",
      "Clean, engineer-verified production code",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-slate-50/80 border-b border-slate-200/70 relative overflow-hidden"
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
                Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              Solutions I Deliver for{" "}
              <span className="text-[#0066FF]">Teams &amp; Clients.</span>
            </motion.h2>
          </div>

          <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
            Available for full-time engineering roles, international remote
            contracts, and custom full-stack project development.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.06, duration: 0.45 }}
              className="group rounded-3xl bg-white border border-slate-200/85 p-6 sm:p-7 flex flex-col justify-between hover:border-[#0066FF]/40 hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-[#0066FF] transition-colors">
                  <div className="[&>svg]:group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-950 tracking-tight mb-2.5 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                    >
                      <Check
                        size={14}
                        className="text-[#0066FF] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="pt-4 border-t border-slate-100 inline-flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#0066FF] transition-colors"
              >
                <span>Inquire About Service</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
