"use client";

import { useReducedMotion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Made in USA",
    "Grand Rapids, MI",
    "Since 1983",
    "OEM Excellence",
    "Wood & Metal",
    "Private Label",
    "Drop Shipping",
    "CNC Precision",
  ];

  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="border-y border-charcoal/10 bg-linen py-8">
        <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 sm:px-10 md:px-20 lg:px-28">
          {items.map((item) => (
            <li
              key={item}
              className="text-xs uppercase tracking-[0.3em] text-charcoal/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-y border-charcoal/10 bg-linen py-8">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              {item}
            </span>
            <span className="mx-10 inline-block h-1.5 w-1.5 rotate-45 border border-brass" />
          </span>
        ))}
      </div>
    </div>
  );
}
