"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const solutions = [
  {
    title: "Cylinder & Cube Tables",
    description:
      "The ubiquitous cylinder table has been around for more than 40 years and is still a popular table. We are specialists at producing these monoform tables in veneer, laminate, metal; unfinished or finished.",
    image: "/images/CylinderTables-350x450_73bb2661.jpg",
    features: [
      "Veneer, laminate, and metal options",
      "Unfinished or fully finished",
      "Custom sizes and configurations",
      "High-volume production capability",
    ],
  },
  {
    title: "Occasional Tables",
    description:
      "We produce many different types of occasional tables for our customers in the Contract Furniture industry, complete and ready to finish or finished and boxed per order.",
    image: "/images/Tusk-Tables-359x423_b8c23323.jpg",
    features: [
      "Small-lot, made-to-order production",
      "End tables, coffee tables, side tables",
      "Ready to finish or fully finished",
      "Boxed and shipped per order",
    ],
  },
  {
    title: "Benches",
    description:
      "As one of the leading bench suppliers for the leaders in the industry, Gilmore delivers high-quality seating according to a tailored delivery schedule.",
    image: "/images/Sirra-Bench-370x443_8c2ffa0c.jpg",
    features: [
      "Lobby, reception, and collaborative seating",
      "Solid wood and upholstered options",
      "Custom dimensions and finishes",
      "Tailored delivery scheduling",
    ],
  },
  {
    title: "Lounge Seating",
    description:
      "Fine products upholstered in either leather or fabric, crafted with an incredible attention to detail and outstanding durability.",
    image: "/images/Venlo-Lounge-Pair-418x323_57c611d7.jpg",
    features: [
      "Leather and fabric upholstery",
      "Trained upholstery artisans",
      "Contract-grade durability",
      "Custom frame and finish options",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg"
            alt="Complete furniture solutions"
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
              Complete Solutions
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
              Furniture Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/45"
            >
              Everything but the name on the box. We manufacture complete,
              ready-to-ship furniture pieces for your catalog — from engineering
              and prototyping to finishing and packaging.
            </motion.p>
          </div>
        </section>

        {/* Solutions grid */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <div className="space-y-32 lg:space-y-40">
              {solutions.map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
                    i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
                      Complete Solution
                    </span>
                    <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                      {solution.title}
                    </h2>
                    <p className="mt-6 text-[15px] leading-[1.9] text-muted">
                      {solution.description}
                    </p>
                    <ul className="mt-8 space-y-4">
                      {solution.features.map((feature) => (
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
                    className={`relative aspect-[4/5] overflow-hidden rounded-sm ${
                      i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
                Your Brand, Our Craft
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Need a Custom Solution?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/40">
                We specialize in producing complete furniture under your brand.
                From a single prototype to a full production run, our team is
                ready to bring your designs to life.
              </p>
              <Link
                href="/quote"
                className="group relative mt-12 inline-block overflow-hidden border border-brass px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
