"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function QuoteBanner() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: visible ? "0%" : "100%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-charcoal/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3.5 sm:px-10 md:px-20 lg:px-28">
        <p className="text-[13px] tracking-wide text-white/70">
          <span className="hidden sm:inline">Ready to bring your designs to life? </span>
          <span className="font-medium text-white">Let&apos;s talk about your next project.</span>
        </p>
        <Link
          href="/quote"
          className="shrink-0 border border-brass bg-brass px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal transition-all duration-300 hover:bg-transparent hover:text-brass"
        >
          Request a Quote
        </Link>
      </div>
    </motion.div>
  );
}
