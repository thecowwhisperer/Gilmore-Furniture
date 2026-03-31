"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { componentsCatalog } from "@/content/componentsCatalog";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export default function ComponentsPage() {
  useScrollToHash();

  return (
    <>

      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/components/conference-table-bases/cumberland_WS_MT_metros_001.jpg"
            alt="Furniture components manufacturing"
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
              Supply Chain
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
              Components
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              Custom or mass production capabilities for your assembly line. One
              of our strengths is working with customers at the design phase to
              engineer components that meet exact specifications.
            </motion.p>
          </div>
        </section>

        {/* Components */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="space-y-36 lg:space-y-44">
              {componentsCatalog.map((comp, i) => (
                <FadeIn
                  key={comp.title}
                  id={comp.sectionId}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-80px"
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`scroll-mt-28 grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
                      i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                      <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-brass">
                        Component
                      </span>
                      <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                        {comp.title}
                      </h2>
                      <p className="mt-6 text-[15px] leading-[1.9] text-muted">
                        {comp.description}
                      </p>
                      <ul className="mt-8 space-y-4">
                        {comp.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-4 text-[14px] leading-[1.7] text-muted"
                          >
                            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brass" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/quote"
                        className="mt-10 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
                      >
                        Request Quote
                        <span className="transition-transform duration-300 hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                        i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <Image
                        src={comp.image}
                        alt={comp.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Gallery */}
                  {comp.gallery.length > 0 && (
                    <div className="mt-16">
                      {/* Featured row: first image large, second beside it */}
                      {comp.gallery.length >= 2 ? (
                        <div className="grid gap-5 md:grid-cols-3">
                          <div className="group relative aspect-[4/3] overflow-hidden rounded border border-charcoal/10 bg-white md:col-span-2 md:aspect-[3/2]">
                            <Image
                              src={comp.gallery[0]}
                              alt={comp.galleryAlts?.[0] ?? comp.title}
                              fill
                              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 66vw"
                            />
                          </div>
                          <div className="group relative aspect-[4/3] overflow-hidden rounded border border-charcoal/10 bg-white md:aspect-auto">
                            <Image
                              src={comp.gallery[1]!}
                              alt={comp.galleryAlts?.[1] ?? comp.title}
                              fill
                              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="group relative aspect-[16/9] overflow-hidden rounded border border-charcoal/10 bg-white">
                          <Image
                            src={comp.gallery[0]}
                            alt={comp.galleryAlts?.[0] ?? comp.title}
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            sizes="100vw"
                          />
                        </div>
                      )}

                      {/* Remaining images in a 3-column grid */}
                      {comp.gallery.length > 2 && (
                        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
                          {comp.gallery.slice(2).map((img, gi) => (
                            <div
                              key={img}
                              className="group relative aspect-[4/3] overflow-hidden rounded border border-charcoal/10 bg-white"
                            >
                              <Image
                                src={img}
                                alt={comp.galleryAlts?.[gi + 2] ?? comp.title}
                                fill
                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 33vw"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
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
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Engineering Partnership
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Need Custom Components?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                We work with your engineering team from the design phase through
                production. Whether you need a single prototype or a full
                production run, our facility is equipped to deliver.
              </p>
              <Button
                href="/quote"
                variant="primary"
                className="mt-12 inline-block"
              >
                Start the Conversation
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
