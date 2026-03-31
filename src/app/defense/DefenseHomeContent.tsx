"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import DefenseNavigation from "@/components/defense/DefenseNavigation";
import DefenseFooter from "@/components/defense/DefenseFooter";
import FadeIn from "@/components/FadeIn";

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
    title: "Metal Fabrication",
    description:
      "Waterjet cutting, CNC machining, welding, and finishing in stainless steel, carbon steel, and aluminum. From armor-grade plate to precision components.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Precision Machining",
    description:
      "Multi-axis CNC centers delivering sub-millimeter tolerances on complex geometries. Prototyping through high-volume production runs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Tactical Textiles",
    description:
      "Industrial cut-and-sew operations for ballistic carriers, tactical gear, vehicle seating, and protective equipment. Kevlar, Cordura, and specialty fabrics.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
    title: "Assembly & Integration",
    description:
      "Complete assembly, testing, packaging, and fulfillment. Component-level or fully assembled systems ready for deployment.",
  },
];

const stats = [
  { value: "40+", label: "Years Manufacturing", suffix: "" },
  { value: "150K", label: "Sq Ft Facility", suffix: "" },
  { value: "3", label: "Core Disciplines", suffix: "" },
  { value: "100%", label: "American Made", suffix: "" },
];

const industries = [
  "Defense & Military",
  "Naval & Marine",
  "Aerospace",
  "Government / GSA",
  "Healthcare",
  "Industrial OEM",
];

export default function DefenseHomeContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>

      <DefenseNavigation />
      <main id="main-content">
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex h-screen items-center justify-center overflow-hidden"
        >
          <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
            <Image
              src="/images/metal-furniture-components-6-631x421_4d07ae21.jpg"
              alt="Precision metal manufacturing"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/90 via-[#0c1220]/75 to-[#070b14]/95" />
          </motion.div>

          <div className="defense-grid-bg absolute inset-0 z-[1] opacity-30" />

          <motion.div
            style={{ opacity }}
            className="relative z-10 flex flex-col items-center px-10 text-center md:px-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-[#c8a24d]" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                American Precision Manufacturing
              </span>
              <div className="h-[1px] w-12 bg-[#c8a24d]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.02em] text-[#f1f5f9]"
            >
              Built to Defend.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="mt-8 max-w-2xl text-[clamp(1rem,1.8vw,1.35rem)] font-light leading-relaxed text-[#94a3b8]"
            >
              Vertically integrated metal, textile, and precision machining —
              <br className="hidden md:block" />
              one facility, three disciplines, zero compromises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="mt-14 flex flex-col gap-5 sm:flex-row"
            >
              <Link
                href="/defense/capabilities"
                className="group relative overflow-hidden border border-[#c8a24d]/40 px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-500 hover:border-[#c8a24d]"
              >
                <span className="relative z-10">Our Capabilities</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-[#c8a24d] transition-transform duration-500 group-hover:translate-y-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center text-[12px] uppercase tracking-[0.2em] text-[#070b14] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Our Capabilities
                </span>
              </Link>
              <Link
                href="/defense/contact"
                className="px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#64748b] transition-colors duration-300 hover:text-[#f1f5f9]"
              >
                Request Capability Statement
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#64748b]">
                Scroll
              </span>
              <div className="h-12 w-[1px] bg-gradient-to-b from-[#64748b] to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-white/[0.06] bg-[#0c1220]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="flex flex-col items-center border-r border-white/[0.06] px-8 py-14 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <span className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight text-[#f1f5f9]">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Capabilities Overview */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                What We Do
              </span>
              <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Three disciplines under one roof.
                <span className="text-[#64748b]"> One standard of precision.</span>
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((cap, i) => (
                <FadeIn
                  key={cap.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.8,
                    delay: 0.1 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group border border-white/[0.06] bg-[#0c1220] p-7 transition-all duration-500 hover:border-[#c8a24d]/20 hover:bg-[#0f1729] sm:p-10"
                >
                  <div className="mb-6 text-[#c8a24d]">{cap.icon}</div>
                  <h3 className="mb-4 text-[18px] font-medium tracking-wide text-[#f1f5f9]">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[#94a3b8]">
                    {cap.description}
                  </p>
                </FadeIn>
              ))}
            </div>

            <FadeIn
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <Link
                href="/defense/capabilities"
                className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.15em] text-[#c8a24d] transition-colors hover:text-[#d4b162]"
              >
                View Full Capabilities
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="border-y border-white/[0.06] bg-[#0c1220] py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Industries
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light text-[#f1f5f9]">
                Markets We Serve
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
              {industries.map((industry, i) => (
                <FadeIn
                  key={industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * i }}
                  className="flex items-center justify-center border border-white/[0.06] bg-[#111827] px-4 py-6 text-center transition-all duration-300 hover:border-[#c8a24d]/20 sm:px-6 sm:py-8"
                >
                  <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#94a3b8]">
                    {industry}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                  Why Gilmore
                </span>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                  Your production partner.
                  <span className="text-[#64748b]"> Not your competitor.</span>
                </h2>
                <div className="mt-10 h-[2px] w-20 bg-[#c8a24d]" />
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-[#94a3b8]">
                  <p>
                    For over 40 years, Gilmore has been the manufacturing backbone
                    behind industry-leading brands. We build to your specification,
                    ship under your name, and never compete for your customer.
                  </p>
                  <p>
                    Our 150,000 square foot facility in Grand Rapids, Michigan
                    houses metal fabrication, textile operations, and precision
                    machining under one roof — giving prime contractors a single
                    domestic source for multi-discipline manufacturing.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {[
                    { value: "OEM", label: "Contract Model" },
                    { value: "3-in-1", label: "Disciplines" },
                    { value: "USA", label: "Manufactured" },
                    { value: "NDA", label: "Protected IP" },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-[#c8a24d]/30 pl-6">
                      <span className="text-2xl font-light text-[#f1f5f9]">
                        {item.value}
                      </span>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-[#64748b]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/WC18_Gilmore__65-293x449_c05f5377.jpg"
                    alt="CNC precision machining"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#070b14]/20" />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/other-metal-components-1-420x280_cf20020c.jpg"
                    alt="Metal fabrication components"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#070b14]/20" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#0c1220] py-36 lg:py-44">
          <div className="defense-grid-bg absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Get Started
              </span>
              <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Ready to Discuss Your Requirements?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-[#94a3b8]">
                Whether you need a capability statement, want to discuss a
                specific program, or are exploring domestic manufacturing
                partners — we&apos;re ready to talk.
              </p>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                <Link
                  href="/defense/contact"
                  className="group relative overflow-hidden border border-[#c8a24d] px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-500 hover:text-[#070b14]"
                >
                  <span className="relative z-10">Request Capability Statement</span>
                  <span className="absolute inset-0 z-0 translate-y-full bg-[#c8a24d] transition-transform duration-500 group-hover:translate-y-0" />
                </Link>
                <a
                  href="tel:616-475-5100"
                  className="px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#64748b] transition-colors duration-300 hover:text-[#f1f5f9]"
                >
                  Call 616-475-5100
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <DefenseFooter />
    </>
  );
}
