"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  FileText,
  Phone,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("humairsarwar956@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Ignore clipboard error if permissions denied
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      if (web3FormsKey) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject:
              formData.subject || `Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
          }),
        });
        if (res.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          return;
        }
      }

      // Client-safe static fallback: open pre-filled email draft to Humair's inbox
      await new Promise((resolve) => setTimeout(resolve, 600));
      const mailtoSubject = encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:humairsarwar956@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-5 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[#0066FF] font-bold text-xs uppercase tracking-widest">
              Contact Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
          >
            Let&apos;s Build Your Next{" "}
            <span className="text-[#0066FF]">Web Application.</span>
          </motion.h2>
        </div>

        {/* Main Contact Card */}
        <div className="rounded-[2.5rem] bg-slate-50 border border-slate-200/90 overflow-hidden shadow-xl shadow-blue-500/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Side: Dark Contact Info & Socials */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0066FF]/20 blur-[90px] rounded-full pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Opportunities
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
                    Get in Touch Directly
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Whether you are hiring a Full Stack Web Developer, looking
                    for a multi-stack engineer for your team, or starting a new
                    project, feel free to reach out.
                  </p>
                </div>

                {/* Direct Contact Channels */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                    <a
                      href="mailto:humairsarwar956@gmail.com"
                      className="flex items-center gap-3.5 group min-w-0"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#0066FF]/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-[#0066FF] group-hover:text-white transition-colors shrink-0">
                        <Mail size={19} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Email Address
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate block">
                          humairsarwar956@gmail.com
                        </span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedEmail ? (
                        <Check size={15} className="text-emerald-400" />
                      ) : (
                        <Copy size={15} />
                      )}
                    </button>
                  </div>

                  <a
                    href="tel:+923088340373"
                    className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 flex items-center gap-3.5 group transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF]/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-[#0066FF] group-hover:text-white transition-colors shrink-0">
                      <Phone size={19} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Phone / WhatsApp
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        +92 308 8340373
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800/90">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                  Professional Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/Humair-Sarwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 hover:bg-[#0066FF] border border-slate-800 hover:border-[#0066FF] text-xs font-bold text-white transition-all"
                  >
                    <span>GitHub</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/humair-sarwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 hover:bg-[#0066FF] border border-slate-800 hover:border-[#0066FF] text-xs font-bold text-white transition-all"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                        >
                          Your Name <span className="text-[#0066FF]">*</span>
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          />
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="John Doe"
                            className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0066FF] focus:ring-3 focus:ring-blue-500/15 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                        >
                          Email Address <span className="text-[#0066FF]">*</span>
                        </label>
                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="you@company.com"
                            className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0066FF] focus:ring-3 focus:ring-blue-500/15 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Subject <span className="text-[#0066FF]">*</span>
                      </label>
                      <div className="relative">
                        <FileText
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        />
                        <input
                          id="contact-subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          placeholder="Full-Stack Role / Project Inquiry / Freelance Collaboration"
                          className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0066FF] focus:ring-3 focus:ring-blue-500/15 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Message <span className="text-[#0066FF]">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare
                          size={18}
                          className="absolute left-4 top-4 text-slate-400 pointer-events-none"
                        />
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Share details about your project, timeline, or role requirements..."
                          className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0066FF] focus:ring-3 focus:ring-blue-500/15 pl-11 pr-4 py-3.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-y"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Preparing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950">
                      Message Ready to Send!
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you,{" "}
                      <strong className="text-slate-900">
                        {formData.name}
                      </strong>
                      . Your message has been formatted for{" "}
                      <span className="font-semibold text-[#0066FF]">
                        humairsarwar956@gmail.com
                      </span>
                      . I will get back to you promptly.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={`mailto:humairsarwar956@gmail.com?subject=${encodeURIComponent(
                          formData.subject
                        )}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                      >
                        <Mail size={14} />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
