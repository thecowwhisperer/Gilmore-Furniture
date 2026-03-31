"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const pillars = [
  {
    number: "01",
    title: "We Never Left",
    description:
      "When offshoring hollowed out American furniture manufacturing in the 1990s and 2000s, Gilmore stayed. We invested in our Grand Rapids facility, in our people, and in the advanced equipment that would keep us competitive against any factory on earth. We didn't stay out of stubbornness — we stayed because we believed the work mattered and the quality spoke for itself.",
  },
  {
    number: "02",
    title: "The Skills Live Here",
    description:
      "Forty years of continuous operation means institutional knowledge that can't be rebuilt overnight. Our machinists, upholsterers, welders, and finishers carry decades of expertise — the kind of deep craft intelligence that only comes from doing the work, year after year, on a real production floor. This is the foundation that reindustrialization is built on.",
  },
  {
    number: "03",
    title: "Vertically Integrated, Fully Accountable",
    description:
      "Upholstery, woodworking, and metal fabrication under one roof. No overseas subcontractors, no opaque supply chains, no finger-pointing when something goes wrong. When you work with Gilmore, you have a single American partner accountable for every aspect of your product — from raw material to packaged, labeled, and shipped.",
  },
  {
    number: "04",
    title: "Built for What's Next",
    description:
      "We've invested in 5-axis CNC machining, automated UV finishing lines, waterjet cutting, and precision welding — not to replace our craftspeople, but to amplify them. American manufacturing wins when it combines the best technology with the best hands. That's exactly what our 150,000 square foot facility does every day.",
  },
];

const reasons = [
  {
    title: "Supply Chain Resilience",
    description:
      "Domestic manufacturing means shorter supply chains, faster response times, and none of the shipping disruptions, tariff volatility, or quality control gaps that come with overseas production.",
  },
  {
    title: "Transparent Quality",
    description:
      "You can walk our production floor. You can meet the people who build your products. The quality isn't a claim on a spec sheet — it's visible, touchable, and verifiable any day of the week.",
  },
  {
    title: "Speed to Market",
    description:
      "No container ships, no port delays, no customs brokers. Prototypes in weeks, production in weeks more. When your customer needs product, domestic manufacturing delivers on a timeline that offshore can't touch.",
  },
  {
    title: "American Jobs, American Communities",
    description:
      "Every product we manufacture supports families in Grand Rapids, Michigan. It supports local suppliers, local services, and a local community that has been the furniture capital of America for over a century.",
  },
  {
    title: "IP Protection",
    description:
      "Your designs stay in the United States, protected by U.S. law, handled by a team bound by NDA and decades of trusted partnership. No risk of designs appearing in overseas markets under someone else's name.",
  },
  {
    title: "Sustainability by Proximity",
    description:
      "Domestic sourcing and domestic manufacturing mean a fraction of the carbon footprint of trans-Pacific shipping. Shorter supply chains are greener supply chains.",
  },
];

export default function AmericanManufacturingPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__47_f67ac56a.jpg"
            alt="American furniture manufacturing floor at Gilmore Furniture in Grand Rapids, Michigan"
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
              American Manufacturing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              Built Here.
              <br />
              Built Right.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              America is rebuilding its manufacturing base. At Gilmore
              Furniture, we never stopped building ours. Since 1983, every piece
              has been made in Grand Rapids, Michigan — and we&apos;ve never been
              more proud of what that means.
            </motion.p>
          </div>
        </section>

        {/* The Moment */}
        <section className="bg-white py-32 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                The Reindustrialization
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.3] text-charcoal">
                Something is happening in American manufacturing. And it&apos;s
                about time.
              </h2>
              <div className="mt-10 h-[2px] w-20 bg-brass" />
              <div className="mt-10 space-y-6 text-[16px] leading-[2] text-muted">
                <p>
                  For decades, the story of American manufacturing was one of
                  decline. Factories closed. Skills were lost. Communities that
                  had built the products the world depended on watched their
                  livelihoods move overseas. The furniture industry was hit
                  especially hard — production shifted to Asia, margins
                  compressed, and the deep craft knowledge that defined places
                  like Grand Rapids began to erode.
                </p>
                <p>
                  But the tide is turning. Supply chain disruptions exposed the
                  fragility of offshoring. Quality issues, intellectual property
                  risks, and unpredictable lead times made brands rethink where
                  and how their products are made. At the same time, advances in
                  CNC technology, automation, and finishing systems made American
                  factories competitive again — not by racing to the bottom on
                  cost, but by delivering quality, speed, and reliability that
                  offshore production simply cannot match.
                </p>
                <p>
                  This is the reindustrialization. It&apos;s not a slogan. It&apos;s
                  happening on shop floors like ours, where the sound of CNC
                  spindles and welding arcs and sewing machines means something
                  again. It&apos;s happening in communities like Grand Rapids, where
                  a new generation is discovering that making things with your
                  hands — and with the best technology on earth — is meaningful,
                  skilled, well-paid work.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Our Part in the Story */}
        <section className="bg-linen py-32 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Our Role
              </span>
              <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-charcoal">
                We didn&apos;t come back.
                <br />
                <span className="text-muted">We never left.</span>
              </h2>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2">
              {pillars.map((pillar, i) => (
                <FadeIn
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.8,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-sm border border-stone bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-10"
                >
                  <span className="font-serif text-3xl font-light text-brass/60">
                    {pillar.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.9] text-muted">
                    {pillar.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Grand Rapids Legacy */}
        <section className="bg-white py-32 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/WC18_Gilmore__04_20c6ac63.jpg"
                    alt="Skilled craftsman hand-finishing wood furniture at Gilmore"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/WC18_Gilmore__24_04406fcc.jpg"
                    alt="Metal fabrication on the Gilmore production floor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Grand Rapids, Michigan
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.15] text-charcoal">
                  The Furniture Capital
                  <br />
                  <span className="text-muted">of America.</span>
                </h2>
                <div className="mt-10 h-[2px] w-20 bg-brass" />
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted">
                  <p>
                    Grand Rapids has been synonymous with furniture manufacturing
                    since the 1800s. The combination of hardwood forests, water
                    power, skilled immigrant craftspeople, and entrepreneurial
                    spirit made this city the center of the American furniture
                    industry — a title it held for over a century.
                  </p>
                  <p>
                    That heritage is in our DNA. When Gilmore was founded in
                    1983, we inherited a tradition of making things that goes
                    back generations. Today, our 150,000 square foot facility
                    sits in the same city that gave the world some of its finest
                    furniture — and we carry that legacy forward with every piece
                    we manufacture.
                  </p>
                  <p>
                    We&apos;re not just a manufacturer in Grand Rapids. We&apos;re a
                    Grand Rapids manufacturer. The distinction matters. It means
                    we draw from a talent pool with furniture in its blood. It
                    means our suppliers, our partners, and our community
                    understand what we do at a level that no other location can
                    replicate.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-charcoal/10 bg-linen">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid grid-cols-2 gap-8 py-20 md:grid-cols-4 md:gap-12">
              {[
                { value: "1983", label: "Founded" },
                { value: "150K", label: "Sq Ft Facility" },
                { value: "40+", label: "Years Continuous Operation" },
                { value: "100%", label: "American Made" },
              ].map((stat, i) => (
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

        {/* Why American Manufacturing Matters */}
        <section className="bg-white py-32 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                The Case for Domestic
              </span>
              <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-charcoal">
                Why American Manufacturing Matters
              </h2>
            </FadeIn>

            <div className="grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, i) => (
                <FadeIn
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.15em] text-charcoal">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.9] text-muted">
                    {reason.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* The Honor */}
        <section className="bg-linen py-32 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Looking Forward
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.3] text-charcoal">
                It&apos;s an honor to do this work.
              </h2>
              <div className="mt-10 h-[2px] w-20 bg-brass" />
              <div className="mt-10 space-y-6 text-[16px] leading-[2] text-muted">
                <p>
                  We don&apos;t take for granted what it means to be an American
                  manufacturer in this moment. After decades of watching
                  factories close and production move overseas, the fact that
                  companies are choosing to build in America again — and
                  choosing partners like Gilmore to build with — is something we
                  feel deeply.
                </p>
                <p>
                  Every conference table base that ships from our dock, every
                  upholstered lounge chair that rolls off our line, every
                  precision metal component that passes our quality inspection —
                  these aren&apos;t just products. They&apos;re proof that American
                  manufacturing works. That it&apos;s competitive. That the skills
                  and the will and the infrastructure still exist to make things
                  at the highest level, right here.
                </p>
                <p>
                  We&apos;re excited about what&apos;s ahead. Not just for Gilmore, but
                  for every American manufacturer that chose to stay, to invest,
                  and to believe that making things in this country was worth
                  fighting for. The reindustrialization is here. And we&apos;re
                  ready.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Cross-links */}
        <section className="border-t border-charcoal/10 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-center"
            >
              <span className="text-[13px] text-muted">Learn more:</span>
              <Link
                href="/story"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Our Story
              </Link>
              <Link
                href="/mission"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Mission & Values
              </Link>
              <Link
                href="/capabilities"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Capabilities
              </Link>
              <Link
                href="/customers"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Customers
              </Link>
              <Link
                href="/blog"
                className="text-[13px] font-medium text-charcoal underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass"
              >
                Blog
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
                Partner with American Manufacturing
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to Build in America?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Whether you&apos;re reshoring production, launching a new line, or
                looking for a domestic OEM partner you can trust — Gilmore is
                ready. Let&apos;s make something together.
              </p>
              <div className="mt-12 flex flex-col items-center gap-5">
                <Button
                  href="/quote"
                  variant="primary"
                  className="inline-block"
                >
                  Start the Conversation
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
