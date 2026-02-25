"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const customers = [
  { name: "Steelcase", logo: "/images/steelcase_49b8dead.gif" },
  { name: "Haworth", logo: "/images/haworth_87461589.gif" },
  { name: "Kimball", logo: "/images/kimball_ebd6efb2.jpg" },
  { name: "HBF", logo: "/images/hbf_b9884d38.gif" },
  { name: "HON", logo: "/images/hon_d66e289b.gif" },
  { name: "Coalesse", logo: "/images/coalesse_b187b1fe.jpg" },
  { name: "Cumberland", logo: "/images/cumberland_81273bc1.jpg" },
  { name: "OFS", logo: "/images/OFS_47bdcf2d.jpg" },
  { name: "Tuohy", logo: "/images/tuohy_44e5bcf4.gif" },
  { name: "JSI", logo: "/images/jsi_5ed4811f.gif" },
  { name: "Brayton", logo: "/images/brayton_2a3eceda.gif" },
  { name: "Martin Brattrud", logo: "/images/martinbrattud_e6cb59ea.gif" },
];

export default function CustomerLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div
        ref={ref}
        className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28"
      >
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
          >
            Trusted By
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light"
          >
            Industry-Leading Partners
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-14 px-4 md:gap-20"
        >
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="relative h-10 w-24 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-12 md:w-28"
            >
              <Image
                src={customer.logo}
                alt={customer.name}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-18 text-center"
        >
          <Link
            href="/customers"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-brass transition-colors hover:text-charcoal"
          >
            View All Partners <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
