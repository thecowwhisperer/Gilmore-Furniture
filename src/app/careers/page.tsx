"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const benefits = [
  {
    title: "Competitive Pay",
    description: "Industry-leading wages with performance-based advancement opportunities.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision insurance for you and your family.",
  },
  {
    title: "Retirement Planning",
    description: "401(k) plan with company match to help you build for the future.",
  },
  {
    title: "Paid Time Off",
    description: "Generous PTO policy plus paid holidays so you can recharge.",
  },
  {
    title: "Skill Development",
    description: "On-the-job training and opportunities to master new manufacturing technologies.",
  },
  {
    title: "Stable Career",
    description: "40+ years in business with long-standing client relationships means job stability.",
  },
];

const openings = [
  {
    title: "CNC Machine Operator",
    department: "Manufacturing",
    type: "Full-time",
  },
  {
    title: "Finishing Specialist",
    department: "Finishing",
    type: "Full-time",
  },
  {
    title: "Assembly Technician",
    department: "Assembly",
    type: "Full-time",
  },
  {
    title: "Quality Control Inspector",
    department: "Quality",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__47-631x421_f6c8082c.jpg"
            alt="Gilmore Furniture team at work"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative z-10 mx-auto w-full max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Join Our Team
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
              Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/45"
            >
              Build your career with a company that values craftsmanship,
              innovation, and its people. We&apos;re always looking for talented
              individuals to join our Grand Rapids team.
            </motion.p>
          </div>
        </section>

        {/* Why Gilmore */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
                Why Gilmore
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                Benefits &amp; Perks
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-sm border border-charcoal/5 bg-white p-10"
                >
                  <h3 className="font-serif text-xl text-charcoal">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section className="bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
                Open Positions
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                Current Openings
              </h2>
              <p className="mt-4 text-[15px] text-muted">
                All positions are based in Grand Rapids, Michigan.
              </p>
            </motion.div>

            <div className="divide-y divide-charcoal/5">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-muted">
                      {job.department} &middot; {job.type}
                    </p>
                  </div>
                  <a
                    href="mailto:careers@gilmorefurnitureinc.com"
                    className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-brass"
                  >
                    Apply Now <span>&rarr;</span>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 rounded-sm border border-charcoal/5 bg-linen p-10"
            >
              <p className="text-[14px] leading-[1.8] text-muted">
                Don&apos;t see a position that fits? We&apos;re always
                interested in hearing from talented craftspeople and
                professionals. Send your resume to{" "}
                <a
                  href="mailto:careers@gilmorefurnitureinc.com"
                  className="text-brass transition-colors hover:text-charcoal"
                >
                  careers@gilmorefurnitureinc.com
                </a>{" "}
                and we&apos;ll keep you in mind for future opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-28 lg:py-36">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-between gap-10 md:flex-row"
            >
              <div>
                <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light text-white">
                  Ready to Build Something?
                </h2>
                <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/40">
                  Join a team that takes pride in crafting furniture for
                  America&apos;s leading brands.
                </p>
              </div>
              <a
                href="mailto:careers@gilmorefurnitureinc.com"
                className="group relative shrink-0 overflow-hidden border border-brass px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Send Your Resume</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
