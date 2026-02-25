"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Cylinder & Cube Tables",
    description:
      "The industry standard for monoform tables — made in veneer, laminate, metal; unfinished or finished.",
    image: "/images/CylinderTables-350x450_73bb2661.jpg",
    size: "tall" as const,
  },
  {
    title: "Occasional Tables",
    description:
      "Small-lot, made-to-order, high-quality table production at an extremely reasonable price.",
    image: "/images/Tusk-Tables-359x423_b8c23323.jpg",
    size: "tall" as const,
  },
  {
    title: "Benches",
    description:
      "High-quality seating crafted with extraordinary attention to detail and built to withstand the toughest use.",
    image: "/images/Sirra-Bench-370x443_8c2ffa0c.jpg",
    size: "tall" as const,
  },
  {
    title: "Lounge Seating",
    description:
      "Fine products upholstered in leather or fabric, crafted by trained upholstery artisans.",
    image: "/images/Venlo-Lounge-Pair-418x323_57c611d7.jpg",
    size: "wide" as const,
  },
];

export default function FeaturedCollections() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        {/* Header */}
        <div ref={ref} className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white"
            >
              Complete Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/40"
            >
              Everything but the name on the box. We manufacture complete pieces
              ready for your catalog.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 border border-white/20 px-8 py-3.5 text-[12px] uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-brass hover:text-brass"
            >
              View All Products
              <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>

        {/* Product grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/solutions"
                className="group relative block h-[480px] overflow-hidden rounded-sm"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-10">
                  <h3 className="font-serif text-xl font-medium text-white">
                    {product.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-10 bg-brass transition-all duration-500 group-hover:w-16" />
                  <p className="mt-4 text-[13px] leading-relaxed text-white/50 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {product.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
