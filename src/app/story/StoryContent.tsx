"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const milestones = [
  {
    year: "1983",
    title: "Founded in Grand Rapids",
    description:
      "Gilmore Furniture Inc. was established in Grand Rapids, Michigan — the furniture capital of America.",
  },
  {
    year: "1990s",
    title: "Component Manufacturing",
    description:
      "Expanded into OEM component manufacturing for major contract furniture brands, establishing key industry partnerships.",
  },
  {
    year: "2000s",
    title: "Metal Fabrication",
    description:
      "Added stainless steel, carbon steel, and aluminum fabrication capabilities alongside our core wood manufacturing.",
  },
  {
    year: "2010s",
    title: "Advanced CNC & Finishing",
    description:
      "Invested in multi-axis CNC machining centers and automated finishing lines, dramatically expanding production capacity.",
  },
  {
    year: "Today",
    title: "150,000 Sq Ft Facility",
    description:
      "A state-of-the-art manufacturing campus delivering complete solutions and components to industry leaders nationwide.",
  },
];

export default function StoryPage() {
  return (
    <>

      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__67_banner_3.jpg"
            alt="The Gilmore workshop"
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
              Since 1983
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
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              Four decades of American craftsmanship, innovation, and
              partnership — from a workshop in the furniture capital of America.
            </motion.p>
          </div>
        </section>

        {/* About section */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <Image
                  src="/images/partner.jpg"
                  alt="Gilmore craftsmen at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Who We Are
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] tracking-[-0.01em] text-charcoal">
                  A dedicated partner
                  <br />
                  <span className="text-muted">for your brand.</span>
                </h2>
                <div className="mt-10 h-[2px] w-20 bg-brass" />
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted">
                  <p>
                    Gilmore Inc. is a resource for completely assembled wooden
                    office furniture, unfinished as well as finished; we
                    manufacture occasional tables, conference tables, benches and
                    case goods per order or in small and medium sized runs.
                  </p>
                  <p>
                    By utilizing our private label finishing and drop ship
                    program, Gilmore Inc. will produce your designs through
                    engineering, prototyping, manufacturing, finishing and
                    packaging, and then drop shipping them directly to your
                    customers with your name on the label.
                  </p>
                  <p>
                    Acting as a dedicated partner, we maintain your design intent
                    and quality standards while leveraging 40+ years of
                    manufacturing expertise in Grand Rapids, Michigan.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Our Journey
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                40+ Years of Excellence
              </h2>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-[112px] top-0 hidden h-full w-[1px] bg-charcoal/10 md:block" />
              <div className="space-y-16 md:space-y-20">
                {milestones.map((milestone, i) => (
                  <FadeIn
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewportMargin="-50px"
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid md:grid-cols-[80px_1fr] md:gap-16"
                  >
                    <div className="relative mb-4 md:mb-0">
                      <span className="font-serif text-2xl font-light text-brass">
                        {milestone.year}
                      </span>
                      <div className="absolute left-[106px] top-3 hidden h-3 w-3 rounded-full border-2 border-brass bg-white md:block" />
                    </div>
                    <div className="rounded-sm border border-stone bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-10">
                      <h3 className="font-serif text-xl text-charcoal">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facility */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Grand Rapids, Michigan
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.15] text-charcoal">
                  Our Facility
                </h2>
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted">
                  <p>
                    Our 150,000 square foot manufacturing campus in Grand
                    Rapids, Michigan houses state-of-the-art equipment alongside
                    skilled craftspeople who bring decades of experience to every
                    project.
                  </p>
                  <p>
                    From multi-axis CNC machining centers to automated finishing
                    lines, our facility combines modern technology with
                    traditional craftsmanship to deliver consistent quality at
                    scale.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {[
                    { value: "150K", label: "Sq Ft Facility" },
                    { value: "40+", label: "Years Operating" },
                    { value: "5-Axis", label: "CNC Centers" },
                    { value: "100%", label: "American Made" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-l-2 border-brass/20 pl-6">
                      <span className="font-serif text-2xl font-light text-charcoal">
                        {stat.value}
                      </span>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-muted">
                        {stat.label}
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
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/WC18_Gilmore__47_f67ac56a.jpg"
                    alt="Gilmore facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/WC18_Gilmore__24_04406fcc.jpg"
                    alt="Gilmore manufacturing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
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
                Partner With Us
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to Work Together?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Join the industry leaders who trust Gilmore as their dedicated
                manufacturing partner. Let&apos;s discuss how we can bring your
                designs to life.
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
