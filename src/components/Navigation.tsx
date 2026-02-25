"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      "Cylinder & Cube Tables",
      "Occasional Tables",
      "Benches",
      "Lounge Seating",
    ],
  },
  {
    name: "Components",
    href: "/components",
    children: [
      "Conference Table Bases",
      "Wood Components",
      "Metal Components",
      "Other Components",
    ],
  },
  { name: "Capabilities", href: "/capabilities" },
  {
    name: "Company",
    href: "/story",
    children: ["Our Story", "Mission & Values", "Customers", "Careers"],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-linen/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-10 py-7 md:px-20 lg:px-28">
          <Link href="/" className="relative z-50">
            <Image
              src="/images/Gilmore-Logo_9f627029.png"
              alt="Gilmore Furniture Inc."
              width={160}
              height={40}
              className={`h-8 w-auto transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          <div className="hidden items-center gap-14 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group relative">
                <span
                  className={`text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-brass ${
                    scrolled ? "text-charcoal/70" : "text-white/70"
                  }`}
                >
                  {link.name}
                </span>
                <span className="absolute -bottom-1.5 left-0 h-[1px] w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/quote"
              className={`border px-7 py-2.5 text-[12px] uppercase tracking-[0.2em] transition-all duration-300 ${
                scrolled
                  ? "border-charcoal/20 text-charcoal hover:border-brass hover:text-brass"
                  : "border-white/30 text-white hover:border-brass hover:text-brass"
              }`}
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex flex-col gap-[6px] lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className={`block h-[1.5px] w-7 ${menuOpen || scrolled ? "bg-charcoal" : "bg-white"}`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-[1.5px] w-7 ${menuOpen || scrolled ? "bg-charcoal" : "bg-white"}`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className={`block h-[1.5px] w-7 ${menuOpen || scrolled ? "bg-charcoal" : "bg-white"}`}
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
            className="fixed inset-0 z-40 flex items-center justify-center bg-linen"
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
                    className="font-serif text-4xl tracking-[0.05em] text-charcoal transition-colors hover:text-brass"
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
                  href="/quote"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 border border-brass px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-brass transition-all hover:bg-brass hover:text-white"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
