"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

function SplitHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden lg:grid lg:grid-cols-2">
      {/* Left — content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-end bg-charcoal p-10 pb-20 md:p-20 lg:justify-center lg:p-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="flex items-center gap-4"
        >
          <div className="h-[1px] w-10 bg-brass" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
            Est. 1983
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="mt-8 font-serif text-[clamp(3rem,7vw,7rem)] font-light leading-[0.92] tracking-[-0.02em] text-white"
        >
          Craft
          <br />
          Meets
          <br />
          <span className="text-brass">Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 max-w-md text-[clamp(0.95rem,1.5vw,1.15rem)] font-light leading-[1.8] text-white/40"
        >
          Grand Rapids&apos; premier OEM manufacturer. Furniture and components
          you want to put your name on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-14 flex gap-6"
        >
          <Link
            href="/capabilities"
            className="group relative overflow-hidden border border-brass px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
          >
            <span className="relative z-10">Explore</span>
            <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
          <Link
            href="/quote"
            className="px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-white"
          >
            Get a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-20 hidden items-center gap-16 border-t border-white/[0.06] pt-10 lg:flex"
        >
          {[
            { stat: "40+", label: "Years" },
            { stat: "200k+", label: "Units / Year" },
            { stat: "100%", label: "American Made" },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-serif text-3xl font-light text-white">
                {s.stat}
              </span>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/25">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right — image */}
      <div className="absolute inset-0 lg:relative">
        <motion.div style={{ scale: imgScale }} className="h-full w-full">
          <Image
            src="/images/Slide-1_b6fa6d94.jpg"
            alt="Gilmore workshop"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/60 lg:bg-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Scroll
            </span>
            <div className="h-14 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    {
      title: "Cylinder & Cube Tables",
      description: "The industry standard for monoform tables.",
      image: "/images/CylinderTables-350x450_73bb2661.jpg",
      span: "col-span-1 row-span-2",
      aspect: "aspect-[3/5]",
    },
    {
      title: "Occasional Tables",
      description: "Small-lot, made-to-order production.",
      image: "/images/Tusk-Tables-359x423_b8c23323.jpg",
      span: "col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Benches",
      description: "Built to withstand the toughest use.",
      image: "/images/Sirra-Bench-370x443_8c2ffa0c.jpg",
      span: "col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Lounge Seating",
      description: "Crafted by trained upholstery artisans.",
      image: "/images/Venlo-Lounge-Pair-418x323_57c611d7.jpg",
      span: "col-span-2 row-span-1",
      aspect: "aspect-[21/9]",
    },
  ];

  return (
    <section className="bg-linen py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Complete Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em]"
            >
              What We Build
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 border border-charcoal/15 px-8 py-3.5 text-[12px] uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:border-brass hover:text-brass"
            >
              All Products <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid auto-rows-auto gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 * i, ease }}
              className={item.span}
            >
              <Link href="/solutions" className="group relative block h-full overflow-hidden rounded-sm">
                <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                  <h3 className="font-serif text-xl font-medium text-white lg:text-2xl">
                    {item.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-10 bg-brass transition-all duration-500 group-hover:w-16" />
                  <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                    {item.description}
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

function CinematicProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-900">
      {/* Full-width parallax image */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="absolute inset-[-20%]">
          <Image
            src="/images/WC18_Gilmore__47-631x421_f6c8082c.jpg"
            alt="Gilmore workshop detail"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease }}
            className="text-center"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
              The Process
            </span>
            <h2 className="mt-6 font-serif text-[clamp(3rem,6vw,6rem)] font-light leading-[0.95] text-white">
              Built to <em className="not-italic text-brass">Partner.</em>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Process steps */}
      <div ref={ref} className="relative z-10 mx-auto max-w-[1800px] px-10 py-24 md:px-20 lg:px-28 lg:py-32">
        <div className="grid gap-0 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Design & Engineer",
              description: "We integrate at the design phase — value engineering for strength, durability, and cost.",
            },
            {
              step: "02",
              title: "Prototype & Refine",
              description: "Rapid prototyping with your specifications, iterated until every detail is right.",
            },
            {
              step: "03",
              title: "Manufacture at Scale",
              description: "CNC precision and skilled hands produce consistent quality at any volume.",
            },
            {
              step: "04",
              title: "Ship Under Your Label",
              description: "Private label finishing, packaging, and drop shipping direct to your customers.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease }}
              className="group relative border-t border-white/[0.06] px-1 py-12 md:border-l md:border-t-0 md:px-10 md:py-0 md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-serif text-5xl font-light text-brass/20 transition-colors duration-500 group-hover:text-brass/50">
                {step.step}
              </span>
              <h3 className="mt-5 font-serif text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-white/35">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlternatingShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const rows = [
    {
      label: "Wood Components",
      title: "Solid Craftsmanship,\nPrecision Cut.",
      description:
        "Table legs, rails, skirts, tops, bases, bench parts, and door frames in any species — unfinished or finished. Grade A select and balanced veneer faces laminated over smooth cores.",
      image: "/images/WC18_Gilmore__65-293x449_c05f5377.jpg",
      reverse: false,
    },
    {
      label: "Metal Components",
      title: "Engineered for\nStrength & Beauty.",
      description:
        "Stainless steel, carbon steel, and aluminum fabrications from simple components to complex parts. Welding, forming, and polishing to exacting standards.",
      image: "/images/WC18_Gilmore__15-420x280_3d793e9b.jpg",
      reverse: true,
    },
  ];

  return (
    <section className="bg-linen py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <div className="space-y-28 lg:space-y-36">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 * i, ease }}
              className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-28 ${
                row.reverse ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
                <Image
                  src={row.image}
                  alt={row.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={row.reverse ? "lg:[direction:ltr]" : ""}>
                <span className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
                  {row.label}
                </span>
                <h3 className="whitespace-pre-line font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.12] tracking-[-0.01em]">
                  {row.title}
                </h3>
                <div className="mt-8 h-[2px] w-20 origin-left bg-brass" />
                <p className="mt-8 max-w-lg text-[15px] leading-[1.9] text-muted">
                  {row.description}
                </p>
                <Link
                  href="/components"
                  className="group mt-10 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
                >
                  View Components
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const logos = [
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
  ];

  return (
    <section className="border-y border-charcoal/5 bg-cream py-16 lg:py-20">
      <div ref={ref} className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-muted"
        >
          Trusted by Industry Leaders
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20"
        >
          {logos.map((c) => (
            <div
              key={c.name}
              className="relative h-9 w-20 opacity-30 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-11 md:w-24"
            >
              <Image
                src={c.logo}
                alt={c.name}
                fill
                className="object-contain"
                sizes="100px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const caps = [
    {
      title: "Advanced CNC Machining",
      description: "Multi-axis CNC centers capable of complex geometry and high-volume throughput.",
      image: "/images/ComponentsFeatureSlider-539x367_112a0e6d.jpg",
      large: true,
    },
    {
      title: "Private Label Finishing",
      description: "UV, water-based, and custom stain matching on automated and hand-spray lines.",
      image: "/images/WC18_Gilmore__57-420x280_cdfddacb.jpg",
      large: false,
    },
    {
      title: "Assembly & Packaging",
      description: "Full assembly, hardware installation, and white-label packaging.",
      image: "/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg",
      large: false,
    },
    {
      title: "Material Expertise",
      description: "Solid woods, veneers, laminates, metals, stone, and glass integration.",
      image: "/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg",
      large: true,
    },
  ];

  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
          >
            Manufacturing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white"
          >
            Our Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/35"
          >
            State-of-the-art technology meets 40 years of American craftsmanship
            in our Grand Rapids facility.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {caps.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.12 * i, ease }}
              className={`group relative overflow-hidden rounded-sm ${
                cap.large ? "md:col-span-2 md:h-[400px]" : "h-[340px]"
              }`}
            >
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-colors duration-500 group-hover:from-black/90" />
              <div className="absolute inset-x-0 bottom-0 p-10 lg:p-14">
                <span className="mb-3 block font-serif text-4xl font-light text-brass/30">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl text-white lg:text-3xl">
                  {cap.title}
                </h3>
                <p className="mt-3 max-w-lg text-[14px] leading-[1.7] text-white/45">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 border border-white/15 px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-white/60 transition-all duration-300 hover:border-brass hover:text-brass"
          >
            See Full Capabilities <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="bg-linen py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-10 flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="text-brass/30"
            >
              <path
                d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                fill="currentColor"
              />
              <path
                d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.4] tracking-[-0.01em] text-charcoal">
            Gilmore has been an indispensable partner. Their ability to deliver
            on complex designs with consistent quality at volume is unmatched in
            the industry.
          </p>
          <div className="mt-10 h-[2px] w-16 mx-auto bg-brass" />
          <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.2em] text-charcoal">
            Manufacturing Partner
          </p>
          <p className="mt-2 text-[13px] text-muted">
            Fortune 500 Office Furniture Brand
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-charcoal py-32 lg:py-44">
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/images/WC18_Gilmore__51-300x300_8e3387e9.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 opacity-[0.015]">
        <span className="font-serif text-[32rem] leading-none text-white">
          G
        </span>
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
          >
            Start a Conversation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white"
          >
            Let&apos;s Build
            <br />
            Something Together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.8] text-white/35"
          >
            Whether you need complete solutions, custom components, or
            engineering support — Gilmore is ready to be your dedicated
            manufacturing partner.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            <Link
              href="/quote"
              className="group relative overflow-hidden border border-brass px-14 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10">Request a Quote</span>
              <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
            </Link>
            <a
              href="tel:616-475-5100"
              className="text-[14px] text-white/25 transition-colors hover:text-white/50"
            >
              or call 616-475-5100
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function VariationPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <SplitHero />
        <LogoStrip />
        <BentoProducts />
        <CinematicProcess />
        <AlternatingShowcase />
        <CapabilitiesGrid />
        <TestimonialBanner />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
