"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import type { ComponentEntry } from "@/content/componentsCatalog";

export default function ComponentDetailContent({
  component,
}: {
  component: ComponentEntry;
}) {
  const { page } = component;

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src={component.image}
            alt={page.heroAlt}
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
              Components
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(3rem,7vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              {component.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              {component.description}
            </motion.p>
          </div>
        </section>

        {/* Overview */}
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
                  {page.longDescription}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Gallery */}
        {component.gallery.length > 0 && (
          <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
              <FadeIn
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                viewportMargin="-50px"
                transition={{ duration: 0.8 }}
              >
                {/* Featured row: first image large, second beside it */}
                {(component.gallery.length as number) >= 2 ? (
                  <div className="grid gap-5 md:grid-cols-3">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded border border-charcoal/10 bg-white md:col-span-2 md:aspect-[3/2]">
                      <Image
                        src={component.gallery[0]}
                        alt={component.galleryAlts[0] ?? component.title}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                    </div>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded border border-charcoal/10 bg-white md:aspect-auto">
                      <Image
                        src={component.gallery[1]!}
                        alt={component.galleryAlts[1] ?? component.title}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="group relative aspect-[16/9] overflow-hidden rounded border border-charcoal/10 bg-white">
                    <Image
                      src={component.gallery[0]}
                      alt={component.galleryAlts[0] ?? component.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                    />
                  </div>
                )}

                {/* Remaining images in a 3-column grid */}
                {(component.gallery.length as number) > 2 && (
                  <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
                    {component.gallery.slice(2).map((img, gi) => (
                      <div
                        key={img}
                        className="group relative aspect-[4/3] overflow-hidden rounded border border-charcoal/10 bg-white"
                      >
                        <Image
                          src={img}
                          alt={component.galleryAlts[gi + 2] ?? component.title}
                          fill
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>
          </section>
        )}

        {/* Specifications + Processes */}
        <section className="border-y border-charcoal/10 bg-linen py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-start gap-20 lg:grid-cols-2 lg:gap-24">
              {/* Specifications */}
              <FadeIn
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Specifications
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                  Technical Details
                </h2>
                <ul className="mt-10 space-y-5">
                  {page.specifications.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-4 text-[15px] leading-[1.7] text-muted"
                    >
                      <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Processes */}
              <FadeIn
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  How We Make Them
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                  Our Process
                </h2>
                <div className="mt-10 space-y-10">
                  {page.processes.map((process) => (
                    <div key={process.title}>
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.15em] text-charcoal">
                        {process.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.9] text-muted">
                        {process.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Common Questions
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <div className="mt-16 space-y-12 lg:max-w-3xl">
              {page.faq.map((item, i) => (
                <FadeIn
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <h3 className="text-[16px] font-medium leading-[1.5] text-charcoal">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-muted">
                    {item.answer}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-t border-charcoal/10 bg-linen py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-center"
            >
              <span className="text-[13px] text-muted">
                Explore more:
              </span>
              <Link
                href="/components"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                All Components
              </Link>
              <Link
                href="/solutions"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Complete Solutions
              </Link>
              <Link
                href="/capabilities"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Capabilities
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
                Engineering Partnership
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Need Custom {component.title}?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                We work with your engineering team from the design phase through
                production. Whether you need a single prototype or a full
                production run, our facility is equipped to deliver.
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
