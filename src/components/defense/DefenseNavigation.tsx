"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Capabilities", href: "/defense/capabilities" },
  { name: "Markets", href: "/defense/markets" },
  { name: "About", href: "/defense/about" },
  { name: "Certifications", href: "/defense/certifications" },
];

export default function DefenseNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0c1220]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 md:px-20 lg:px-28">
          <Link href="/defense" className="relative z-50 flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-[#c8a24d]/40">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-[#c8a24d]"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold tracking-[0.08em] text-[#f1f5f9]">
                  GILMORE
                </span>
                <span className="text-[9px] font-medium tracking-[0.25em] text-[#c8a24d]">
                  DEFENSE & INDUSTRIAL
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-14 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group relative">
                <span className="text-[13px] uppercase tracking-[0.15em] text-[#94a3b8] transition-colors duration-300 group-hover:text-[#c8a24d]">
                  {link.name}
                </span>
                <span className="absolute -bottom-1.5 left-0 h-[1px] w-0 bg-[#c8a24d] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/defense/contact"
              className="border border-[#c8a24d]/40 px-7 py-2.5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-300 hover:border-[#c8a24d] hover:bg-[#c8a24d]/10"
            >
              Request Capability Statement
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex flex-col gap-[6px] lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] w-7 bg-[#f1f5f9]"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[1.5px] w-7 bg-[#f1f5f9]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] w-7 bg-[#f1f5f9]"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#0c1220]"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-light tracking-[0.08em] text-[#f1f5f9] transition-colors hover:text-[#c8a24d]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="/defense/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 border border-[#c8a24d] px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all hover:bg-[#c8a24d] hover:text-[#0c1220]"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
