"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SquareCard {
  type: "square";
  src: string;
  alt: string;
  radius: string;
}

interface TrianglePair {
  type: "triangles";
  a: { src: string; alt: string };
  b: { src: string; alt: string };
}

type CardEntry = SquareCard | TrianglePair;

const topRow: CardEntry[] = [
  {
    type: "triangles",
    a: {
      src: "/images/Venlo-Lounge-Pair-418x323_57c611d7.jpg",
      alt: "Lounge Seating",
    },
    b: {
      src: "/images/Lyric-Bench-257x243_3f6fcb69.jpg",
      alt: "Lyric Bench",
    },
  },
  {
    type: "square",
    src: "/images/CylinderTables-350x450_73bb2661.jpg",
    alt: "Cylinder Tables",
    radius: "20px",
  },
  {
    type: "square",
    src: "/images/Cambridge-Metal-631x498_50754349.jpg",
    alt: "Metal Fabrication",
    radius: "20px 38% 20px 20px",
  },
];

const bottomRow: CardEntry[] = [
  {
    type: "square",
    src: "/images/Sirra-Bench-370x443_8c2ffa0c.jpg",
    alt: "Bench Seating",
    radius: "20px",
  },
  {
    type: "square",
    src: "/images/Tusk-Tables-359x423_b8c23323.jpg",
    alt: "Occasional Tables",
    radius: "20px",
  },
  {
    type: "triangles",
    a: {
      src: "/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg",
      alt: "Complete Solutions",
    },
    b: {
      src: "/images/Santa-Fe-209x165_7ce625e3.jpg",
      alt: "Santa Fe Collection",
    },
  },
];

function TriangleCell({
  pair,
  index,
}: {
  pair: TrianglePair;
  index: number;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] shadow-[0_8px_40px_rgba(196,94,44,0.12),0_2px_12px_rgba(0,0,0,0.08)]">
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-[20px] ring-1 ring-white/20" />

      {/* Top-left triangle */}
      <div
        className="group absolute inset-0 cursor-pointer overflow-hidden"
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 28px) 0%, calc(100% - 18px) 10px, 10px calc(100% - 18px), 0% calc(100% - 28px))",
        }}
      >
        <Image
          src={pair.a.src}
          alt={pair.a.alt}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 768px) 50vw, 30vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-charcoal/20 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(135deg, rgba(196,94,44,0.15) 0%, transparent 60%)" }}
        />
      </div>

      {/* Bottom-right triangle */}
      <div
        className="group absolute inset-0 cursor-pointer overflow-hidden"
        style={{
          clipPath:
            "polygon(calc(100% - 10px) 18px, 100% 28px, 100% 100%, 28px 100%, 18px calc(100% - 10px))",
        }}
      >
        <Image
          src={pair.b.src}
          alt={pair.b.alt}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 768px) 50vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-charcoal/20 transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(315deg, rgba(196,94,44,0.15) 0%, transparent 60%)" }}
        />
      </div>
    </div>
  );
}

function SquareCell({ card }: { card: SquareCard }) {
  return (
    <div
      className="group relative h-full w-full cursor-pointer overflow-hidden shadow-[0_8px_40px_rgba(196,94,44,0.12),0_2px_12px_rgba(0,0,0,0.08)] transition-shadow duration-500 hover:shadow-[0_12px_50px_rgba(196,94,44,0.2),0_4px_20px_rgba(0,0,0,0.12)]"
      style={{ borderRadius: card.radius }}
    >
      {/* Glow border */}
      <div
        className="pointer-events-none absolute inset-0 z-20 ring-1 ring-white/20 transition-all duration-500 group-hover:ring-burnt-orange/30"
        style={{ borderRadius: card.radius }}
      />

      <Image
        src={card.src}
        alt={card.alt}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        sizes="(max-width: 768px) 50vw, 30vw"
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-charcoal/25 transition-opacity duration-500 group-hover:opacity-40" />

      {/* Hover warm glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(196,94,44,0.18) 0%, transparent 70%)" }}
      />

      {/* Glassmorphism label */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <div className="mx-3 mb-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
            {card.alt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function V2Splash() {
  const reduceMotion = useReducedMotion();

  const t = (duration: number, delay = 0) =>
    reduceMotion
      ? { duration: 0 }
      : { duration, delay, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-cream">
      {/* Animated mesh gradient background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Primary warm glow — top-right */}
        <motion.div
          animate={reduceMotion ? {} : {
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-burnt-orange) 0%, var(--color-burnt-orange-light) 40%, transparent 70%)",
          }}
        />
        {/* Deep glow — bottom-left */}
        <motion.div
          animate={reduceMotion ? {} : {
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[650px] w-[650px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-burnt-orange) 0%, var(--color-burnt-orange-light) 30%, transparent 65%)",
          }}
        />
        {/* Accent — top-left */}
        <motion.div
          animate={reduceMotion ? {} : {
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 -top-16 h-[400px] w-[400px] rounded-full opacity-20 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-burnt-orange-light) 0%, transparent 55%)",
          }}
        />
        {/* Accent — bottom-right */}
        <motion.div
          animate={reduceMotion ? {} : {
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -right-16 h-[450px] w-[450px] rounded-full opacity-25 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-burnt-orange) 0%, transparent 50%)",
          }}
        />
        {/* Center luminance */}
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-burnt-orange-light) 0%, transparent 50%)",
          }}
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(196,94,44,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(196,94,44,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-1">
        {/* GILMORE logo — overlaid top-left with glow */}
        <div className="pointer-events-none absolute left-4 top-8 z-30 hidden flex-col items-center gap-5 md:flex lg:left-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={t(1, 0.1)}
            className="pointer-events-auto select-none"
          >
            <span
              className="block rotate-180 text-[clamp(1.1rem,1.8vw,1.5rem)] font-black uppercase tracking-[0.4em] text-charcoal drop-shadow-[0_0_20px_rgba(196,94,44,0.25)]"
              style={{ writingMode: "vertical-rl" }}
            >
              Gilmore
            </span>
          </motion.div>
        </div>

        {/* Mobile logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.8)}
          className="absolute left-5 top-5 z-30 md:hidden"
        >
          <span className="text-lg font-black uppercase tracking-[0.35em] text-charcoal drop-shadow-[0_0_15px_rgba(196,94,44,0.2)]">
            Gilmore
          </span>
        </motion.div>

        {/* Card rows */}
        <div className="flex flex-1 flex-col justify-center gap-4 px-4 py-16 md:gap-6 md:px-6 md:py-6 lg:gap-8 lg:px-10">
          {/* Top row — indented to clear GILMORE logo */}
          <div className="grid h-full flex-1 grid-cols-[1.2fr_1fr] gap-4 pl-[72px] md:grid-cols-[1.4fr_1fr_0.8fr] md:gap-6 md:pl-[80px] lg:gap-8 lg:pl-[88px]">
            {topRow.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={t(1, 0.2 + i * 0.1)}
                className="relative"
              >
                {entry.type === "triangles" ? (
                  <TriangleCell pair={entry} index={i} />
                ) : (
                  <SquareCell card={entry} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom row — full width */}
          <div className="grid h-full flex-1 grid-cols-[1.2fr_1fr] gap-4 md:grid-cols-[1.4fr_1fr_0.8fr] md:gap-6 lg:gap-8">
            {bottomRow.map((entry, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={t(1, 0.5 + i * 0.1)}
                className="relative"
              >
                {entry.type === "triangles" ? (
                  <TriangleCell pair={entry} index={i + 3} />
                ) : (
                  <SquareCell card={entry} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Glassmorphism bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(1, 1)}
            className="mt-2 flex w-full items-center justify-between rounded-2xl border border-white/30 bg-white/40 px-6 py-3 shadow-[0_4px_30px_rgba(196,94,44,0.08)] backdrop-blur-xl"
          >
            <p className="text-xs font-medium tracking-[0.15em] text-muted/70">
              Grand Rapids, MI &middot; Since 1983
            </p>
            <div className="flex gap-3">
              <Link
                href="/capabilities"
                className="rounded-full border border-charcoal/10 bg-white/50 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-burnt-orange/40 hover:bg-burnt-orange hover:text-white hover:shadow-[0_4px_20px_rgba(196,94,44,0.3)]"
              >
                Explore
              </Link>
              <Link
                href="/quote"
                className="rounded-full bg-burnt-orange px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgba(196,94,44,0.25)] transition-all duration-300 hover:bg-burnt-orange-light hover:shadow-[0_6px_30px_rgba(196,94,44,0.4)]"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
