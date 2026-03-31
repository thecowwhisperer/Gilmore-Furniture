"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import type { IndustryVertical } from "@/content/verticals";

export default function VerticalContent({
  vertical,
}: {
  vertical: IndustryVertical;
}) {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-slate-900 pb-28 pt-48">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              {vertical.eyebrow}
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
              {vertical.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              {vertical.description}
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-charcoal/10 bg-white">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:gap-12">
              {vertical.stats.map((stat, i) => (
                <FadeIn
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="text-center"
                >
                  <div className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-charcoal">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[12px] uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-linen py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto max-w-3xl">
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Overview
                </span>
                <p className="text-[17px] leading-[2] text-muted">
                  {vertical.intro}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-white py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                What We Build
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-charcoal">
                Capabilities for {vertical.headline}
              </h2>
            </FadeIn>
            <div className="mt-20 grid gap-16 md:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
              {vertical.capabilities.map((cap, i) => (
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
                >
                  <h3 className="font-serif text-[1.4rem] font-light text-charcoal">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.9] text-muted">
                    {cap.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="border-y border-charcoal/10 bg-linen py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
              <FadeIn
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Product Range
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                  What We Produce for {vertical.headline}
                </h2>
                <ul className="mt-10 space-y-5">
                  {vertical.products.map((product) => (
                    <li
                      key={product}
                      className="flex items-start gap-4 text-[15px] leading-[1.7] text-muted"
                    >
                      <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {product}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Why Gilmore
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                  The Gilmore Advantage
                </h2>
                <div className="mt-10 space-y-10">
                  {vertical.whyGilmore.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.15em] text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.9] text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-center"
            >
              <span className="text-[13px] text-muted">
                Explore our capabilities:
              </span>
              <Link
                href="/capabilities/upholstery"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Upholstery
              </Link>
              <Link
                href="/capabilities/woodworking"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Woodworking
              </Link>
              <Link
                href="/capabilities/metal-fabrication"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Metal Fabrication
              </Link>
              <span className="text-charcoal/20">|</span>
              <Link
                href="/solutions"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                All Solutions
              </Link>
              <Link
                href="/components"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Components
              </Link>
            </FadeIn>
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
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Get Started
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to discuss your {vertical.headline.toLowerCase()} project?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Whether you need complete furniture solutions, custom components,
                or engineering support — let&apos;s discuss how Gilmore can
                become your dedicated manufacturing partner.
              </p>
              <div className="mt-12 flex flex-col items-center gap-5">
                <Button
                  href="/quote"
                  variant="primary"
                  className="inline-block"
                >
                  Request a Quote
                </Button>
                <a
                  href="tel:616-475-5100"
                  className="text-[14px] text-white/70 transition-colors hover:text-white"
                >
                  or call 616-475-5100
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
