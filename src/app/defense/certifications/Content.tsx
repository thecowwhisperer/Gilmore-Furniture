"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DefenseNavigation from "@/components/defense/DefenseNavigation";
import DefenseFooter from "@/components/defense/DefenseFooter";
import FadeIn from "@/components/FadeIn";

const certifications = [
  {
    status: "in-progress",
    name: "SAM.gov Registration",
    description:
      "System for Award Management — required registration for all federal government contractors and grant recipients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    status: "in-progress",
    name: "CAGE Code",
    description:
      "Commercial and Government Entity code — unique identifier used by the Department of Defense to identify contractors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    status: "planned",
    name: "ITAR Registration",
    description:
      "International Traffic in Arms Regulations — required for manufacturing defense articles and providing defense services as defined by the USML.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    status: "planned",
    name: "ISO 9001:2015",
    description:
      "Quality Management System certification — the international standard for demonstrating consistent quality processes and continuous improvement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    status: "planned",
    name: "CMMC Level 2",
    description:
      "Cybersecurity Maturity Model Certification — required for handling Controlled Unclassified Information (CUI) in DoD contracts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    status: "planned",
    name: "AS9100 Rev D",
    description:
      "Aerospace Quality Management System — the standard for quality management in the aerospace and defense industry, building on ISO 9001.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
];

const statusConfig = {
  active: {
    label: "Active",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    dot: "bg-green-400",
  },
  "in-progress": {
    label: "In Progress",
    color: "text-[#c8a24d]",
    bg: "bg-[#c8a24d]/10",
    border: "border-[#c8a24d]/20",
    dot: "bg-[#c8a24d]",
  },
  planned: {
    label: "Planned",
    color: "text-[#64748b]",
    bg: "bg-[#64748b]/10",
    border: "border-[#64748b]/20",
    dot: "bg-[#64748b]",
  },
};

const complianceAreas = [
  {
    title: "Quality Assurance",
    items: [
      "Documented quality management processes",
      "Incoming material inspection",
      "In-process quality checks",
      "Final inspection and testing protocols",
      "Lot traceability and record retention",
      "Non-conformance tracking and corrective action",
    ],
  },
  {
    title: "Operational Security",
    items: [
      "NDA and IP protection for all programs",
      "Controlled access facility",
      "Secure document handling procedures",
      "Employee background verification",
      "Visitor management protocols",
      "Data security and IT controls",
    ],
  },
  {
    title: "Regulatory Readiness",
    items: [
      "OSHA compliance",
      "Environmental compliance (EPA)",
      "Hazardous materials handling",
      "Fire safety and emergency procedures",
      "Workers compensation and insurance",
      "State and federal labor law compliance",
    ],
  },
];

export default function DefenseCertificationsContent() {
  return (
    <>

      <DefenseNavigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__57-420x280_cdfddacb.jpg"
            alt="Quality manufacturing processes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#070b14]/92" />
          <div className="defense-grid-bg absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]"
            >
              Trust & Compliance
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-[#f1f5f9]"
            >
              Certifications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#94a3b8]"
            >
              We&apos;re actively building the certification and compliance
              infrastructure required to serve defense and government markets at
              the highest level.
            </motion.p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Certification Roadmap
              </span>
              <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Building the compliance foundation for defense-grade
                manufacturing.
              </h2>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, i) => {
                const config = statusConfig[cert.status as keyof typeof statusConfig];
                return (
                  <FadeIn
                    key={cert.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewportMargin="-30px"
                    transition={{
                      duration: 0.7,
                      delay: 0.08 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border border-white/[0.06] bg-[#0c1220] p-7 sm:p-10"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <div className="text-[#c8a24d]">{cert.icon}</div>
                      <span
                        className={`flex items-center gap-2 rounded-full ${config.bg} ${config.border} border px-3 py-1`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
                        <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${config.color}`}>
                          {config.label}
                        </span>
                      </span>
                    </div>
                    <h3 className="mb-3 text-[17px] font-medium text-[#f1f5f9]">
                      {cert.name}
                    </h3>
                    <p className="text-[14px] leading-[1.8] text-[#94a3b8]">
                      {cert.description}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Areas */}
        <section className="border-y border-white/[0.06] bg-[#0c1220] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Current Compliance
              </span>
              <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Operational quality and compliance already in place.
              </h2>
            </FadeIn>

            <div className="grid gap-10 lg:grid-cols-3">
              {complianceAreas.map((area, i) => (
                <FadeIn
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                    {area.title}
                  </h3>
                  <ul className="space-y-4">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14px] leading-[1.7] text-[#94a3b8]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#c8a24d]/60"
                        >
                          <path d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Questions About Compliance?
              </span>
              <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Let&apos;s Discuss Your Requirements
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-[#94a3b8]">
                Every program has unique compliance requirements. Contact us to
                discuss how our certification roadmap aligns with your needs.
              </p>
              <Link
                href="/defense/contact"
                className="group relative mt-12 inline-block overflow-hidden border border-[#c8a24d] px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-500 hover:text-[#070b14]"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-[#c8a24d] transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <DefenseFooter />
    </>
  );
}
