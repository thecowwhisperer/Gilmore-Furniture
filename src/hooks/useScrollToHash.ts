"use client";

import { useEffect } from "react";

/** Scroll to `#id` on mount when present (client-rendered sections). */
export function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frameId = requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    });
    return () => cancelAnimationFrame(frameId);
  }, []);
}
