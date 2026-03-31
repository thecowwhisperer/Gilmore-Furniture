"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    src: "/images/Header%20Images/Cambridge_Metal_Divan%20-%20LARGE.jpg",
    alt: "Cambridge metal divan by Gilmore Furniture",
  },
  {
    src: "/images/Header%20Images/cumberland_DET_revo_002.jpg",
    alt: "Revo detail craftsmanship by Gilmore Furniture",
  },
  {
    src: "/images/Header%20Images/cumberland_DET_ST_revo_004.jpg",
    alt: "Revo stool detail by Gilmore Furniture",
  },
  {
    src: "/images/Header%20Images/cumberland_WS_MT_cuff_woodbase_conference_continuous_002.jpg",
    alt: "Cuff wood base conference table by Gilmore Furniture",
  },
  {
    src: "/images/Header%20Images/cumberland_WS_MT_facade_conference_metalbase_001-2.jpg",
    alt: "Facade conference table with metal base by Gilmore Furniture",
  },
];

const stats = [
  {
    label: "Made in USA",
    sublabel: "Grand Rapids, MI",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
    ),
  },
  {
    label: "Since 1983",
    sublabel: "40+ Years of Excellence",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
    ),
  },
  {
    label: "Relationship First",
    sublabel: "Dedicated Partnership",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
];

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const statsInView = useInView(statsRef, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const bgStyle = reduceMotion ? undefined : { y, scale };
  const contentOpacityStyle = reduceMotion ? undefined : { opacity };

  const t = (duration: number, delay = 0) =>
    reduceMotion ? { duration: 0, delay: 0 } : { duration, delay };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide, reduceMotion]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Rotating background images */}
      <motion.div style={bgStyle} className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
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
        style={contentOpacityStyle}
        className="relative z-10 flex flex-col items-center px-6 text-center sm:px-10 md:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...t(1, 0.3), ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-brass" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brass">
            American Made Excellence
          </span>
          <div className="h-[1px] w-12 bg-brass" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...t(1.2, 0.5), ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3.5rem,9vw,10rem)] font-light leading-[0.9] tracking-[-0.02em] text-white"
        >
          Redefining OEM.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t(1.5, 1.2)}
          className="mt-8 max-w-2xl text-[clamp(1rem,1.8vw,1.35rem)] font-light leading-relaxed text-white/70"
        >
          Upholstery, woodworking, and metal fabrication — all under one roof.
          <br className="hidden md:block" />
          Furniture and components you want to put your name on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(1, 1.8)}
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
            className="border-b border-white/25 px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-white/75 transition-colors duration-300 hover:border-brass hover:text-white"
          >
            Partner With Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-32 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-28">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === currentSlide ? "w-8 bg-brass" : "w-4 bg-white/30"
            }`}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Stats strip */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-slate-900/60 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-around gap-6 px-6 py-5 sm:px-10 md:flex-row md:items-center md:px-20 lg:px-28">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="flex items-center gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brass">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-white">
                  {stat.label}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-white/60">
                  {stat.sublabel}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="ml-6 hidden h-10 w-[1px] bg-white/10 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
