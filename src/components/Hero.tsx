"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/Slide-1_b6fa6d94.jpg"
          alt="Gilmore Furniture workshop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <div className="absolute left-[15%] top-0 h-full w-[1px] bg-white" />
        <div className="absolute left-[50%] top-0 h-full w-[1px] bg-white" />
        <div className="absolute left-[85%] top-0 h-full w-[1px] bg-white" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center px-10 text-center md:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-brass" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
            American Made Excellence
          </span>
          <div className="h-[1px] w-12 bg-brass" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3.5rem,9vw,10rem)] font-light leading-[0.9] tracking-[-0.02em] text-white"
        >
          Redefining OEM.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-8 max-w-2xl text-[clamp(1rem,1.8vw,1.35rem)] font-light leading-relaxed text-white/50"
        >
          Furniture and components you want to put your name on.
          <br className="hidden md:block" />
          Partnering with industry leaders since 1983.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-14 flex flex-col gap-5 sm:flex-row"
        >
          <Link
            href="/capabilities"
            className="group relative overflow-hidden border border-white/20 px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-brass"
          >
            <span className="relative z-10">Our Capabilities</span>
            <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
          <Link
            href="/quote"
            className="px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Partner With Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
