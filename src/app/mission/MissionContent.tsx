"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const values = [
  {
    number: "01",
    title: "Quality Without Compromise",
    description:
      "Every piece that leaves our facility meets the highest standards. We invest in precision equipment and skilled craftspeople because quality is not negotiable.",
  },
  {
    number: "02",
    title: "Partnership Over Transaction",
    description:
      "We build long-term relationships with our clients. Your success is our success — we work alongside your team from design through delivery.",
  },
  {
    number: "03",
    title: "American Manufacturing",
    description:
      "We're proud to manufacture in Grand Rapids, Michigan. Our commitment to domestic production means shorter lead times, easier communication, and supporting American jobs.",
  },
  {
    number: "04",
    title: "Innovation & Tradition",
    description:
      "We embrace advanced CNC technology and automated finishing while preserving the hand-craftsmanship that defines truly exceptional furniture.",
  },
  {
    number: "05",
    title: "Integrity in Every Detail",
    description:
      "From honest lead times to transparent pricing, we operate with integrity. We say what we'll do and deliver on our commitments.",
  },
  {
    number: "06",
    title: "Sustainability",
    description:
      "Responsible material sourcing, efficient manufacturing processes, and waste reduction are part of our commitment to the environment and future generations.",
  },
];

export default function MissionPage() {
  return (
    <>

      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__50_d3a17604.jpg"
            alt="Gilmore Furniture craftsmanship"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              What Drives Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              Mission &amp; Values
            </motion.h1>
          </div>
        </section>

        {/* Mission statement */}
        <section className="bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl text-center"
            >
              <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Our Mission
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.3] text-charcoal">
                To be the premier American OEM manufacturing partner for the
                contract furniture industry — delivering exceptional quality,
                innovative solutions, and unwavering reliability to every brand
                we serve.
              </h2>
              <div className="mx-auto mt-12 h-[2px] w-20 bg-brass" />
            </FadeIn>
          </div>
        </section>

        {/* Values grid */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Our Foundation
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                Core Values
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, i) => (
                <FadeIn
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.8,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-sm border border-stone bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-10"
                >
                  <span className="font-serif text-3xl font-light text-brass/75">
                    {value.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.8] text-muted">
                    {value.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Share Our Values?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                We partner with brands that share our commitment to quality and
                craftsmanship. Let&apos;s explore how we can work together.
              </p>
              <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <Button href="/quote" variant="primary">
                  Partner With Us
                </Button>
                <Link
                  href="/careers"
                  className="border border-white/20 px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
                >
                  Join Our Team
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
