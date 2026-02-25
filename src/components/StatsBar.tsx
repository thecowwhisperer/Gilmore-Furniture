"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Made in USA", sublabel: "Grand Rapids, MI", icon: "flag" },
  { label: "Since 1983", sublabel: "40+ Years of Excellence", icon: "factory" },
  {
    label: "Relationship First",
    sublabel: "Dedicated Partnership",
    icon: "people",
  },
];

function StatIcon({ type }: { type: string }) {
  if (type === "flag")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
    );
  if (type === "factory")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
    );
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="border-b border-white/10 bg-slate-900 py-14">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-around gap-10 px-10 md:flex-row md:px-20 lg:px-28">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            className="flex items-center gap-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-brass">
              <StatIcon type={stat.icon} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {stat.label}
              </h3>
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/40">
                {stat.sublabel}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="ml-8 hidden h-12 w-[1px] bg-white/10 md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
