"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  solutionDeepLinks,
  componentNavItems,
} from "@/content/sectionNav";

const aboutChildren = [
  { label: "Our Story", href: "/story" },
  { label: "Mission & Values", href: "/mission" },
  { label: "Customers", href: "/customers" },
  { label: "Careers", href: "/careers" },
] as const;

const solutionChildren = solutionDeepLinks.map(({ name, href }) => ({
  label: name,
  href,
}));

const navItems = [
  {
    name: "Solutions",
    href: "/solutions",
    children: solutionChildren,
  },
  {
    name: "Components",
    href: "/components",
    children: componentNavItems.map((c) => ({ label: c.label, href: c.href })),
  },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Blog", href: "/blog" },
  {
    name: "About",
    href: "/story",
    children: [...aboutChildren],
  },
] as const;

type NavEntry = (typeof navItems)[number];

function hasChildren(
  item: NavEntry,
): item is Extract<NavEntry, { children: readonly { label: string; href: string }[] }> {
  return "children" in item && Array.isArray(item.children);
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [focusedChild, setFocusedChild] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuItemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/") || pathname.startsWith(href + "#");
  }

  const getMenuItemRef = useCallback(
    (navIdx: number, childIdx: number) => menuItemRefs.current.get(`${navIdx}-${childIdx}`) ?? null,
    [],
  );

  const closeDropdown = useCallback(
    (navIdx: number) => {
      setOpenDropdown(null);
      triggerRefs.current[navIdx]?.focus();
    },
    [],
  );

  const handleTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent, navIdx: number, childrenLen: number) => {
      if (e.key === "ArrowDown" || (e.key === "Enter" && childrenLen > 0)) {
        e.preventDefault();
        setOpenDropdown(navIdx);
        setFocusedChild(0);
        requestAnimationFrame(() => getMenuItemRef(navIdx, 0)?.focus());
      } else if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    },
    [getMenuItemRef],
  );

  const handleMenuItemKeyDown = useCallback(
    (e: React.KeyboardEvent, navIdx: number, childIdx: number, childrenLen: number) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = (childIdx + 1) % childrenLen;
        setFocusedChild(next);
        getMenuItemRef(navIdx, next)?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (childIdx - 1 + childrenLen) % childrenLen;
        setFocusedChild(prev);
        getMenuItemRef(navIdx, prev)?.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeDropdown(navIdx);
      } else if (e.key === "Tab") {
        setOpenDropdown(null);
      }
    },
    [closeDropdown, getMenuItemRef],
  );

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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!menuOpen) return;
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = mobileNavRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [menuOpen],
  );

  useEffect(() => {
    if (!menuOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => {
      const panel = mobileNavRef.current;
      if (panel) {
        const first = panel.querySelector<HTMLElement>("a[href]");
        first?.focus();
      }
    }, 100);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [menuOpen, handleKeyDown]);

  const linkClass = scrolled ? "text-charcoal/70" : "text-white/70";
  const subLinkClass = scrolled
    ? "text-charcoal/80 hover:bg-charcoal/5 hover:text-charcoal"
    : "text-charcoal/90 hover:bg-charcoal/5 hover:text-charcoal";

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-linen/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 md:px-20 lg:px-28"
          aria-label="Primary"
        >
          <Link href="/" className="relative z-50">
            <span className="relative block h-8 w-[160px]">
              <Image
                src="/images/Gilmore-Logo_9f627029.png"
                alt="Gilmore Furniture Inc."
                width={160}
                height={40}
                className={`h-8 w-auto transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
                priority
              />
              <span
                className={`logo-white absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
                aria-hidden="true"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-14 lg:flex">
            {navItems.map((item, navIdx) => {
              const active = isActive(item.href);
              const isOpen = openDropdown === navIdx;
              return hasChildren(item) ? (
                <div
                  key={item.name}
                  className="group relative"
                  onMouseLeave={() => { if (isOpen) setOpenDropdown(null); }}
                >
                  <Link
                    href={item.href}
                    ref={(el) => { triggerRefs.current[navIdx] = el; }}
                    className="group/link relative"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onKeyDown={(e) => handleTriggerKeyDown(e, navIdx, item.children.length)}
                  >
                    <span
                      className={`text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 group-hover/link:text-brass group-focus-visible/link:text-brass ${active ? "text-brass" : linkClass}`}
                    >
                      {item.name}
                    </span>
                    <span className={`absolute -bottom-1.5 left-0 h-[1px] bg-brass transition-all duration-300 group-hover/link:w-full group-focus-within:w-full ${active ? "w-full" : "w-0"}`} />
                  </Link>
                  <div
                    className={`absolute left-1/2 top-full z-[60] min-w-[240px] -translate-x-1/2 pt-4 transition-opacity duration-200 ${
                      isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100"
                    }`}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    <ul className="border border-charcoal/10 bg-linen/95 py-2 shadow-lg backdrop-blur-md">
                      {item.children.map((child, childIdx) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            ref={(el) => {
                              if (el) menuItemRefs.current.set(`${navIdx}-${childIdx}`, el);
                              else menuItemRefs.current.delete(`${navIdx}-${childIdx}`);
                            }}
                            role="menuitem"
                            tabIndex={isOpen && focusedChild === childIdx ? 0 : -1}
                            onKeyDown={(e) => handleMenuItemKeyDown(e, navIdx, childIdx, item.children.length)}
                            className={`block px-5 py-2.5 text-[13px] tracking-wide transition-colors ${subLinkClass}`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="group relative">
                  <span
                    className={`text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-brass ${active ? "text-brass" : linkClass}`}
                  >
                    {item.name}
                  </span>
                  <span className={`absolute -bottom-1.5 left-0 h-[1px] bg-brass transition-all duration-300 group-hover:w-full ${active ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
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
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex flex-col gap-[6px] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
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
            id="mobile-nav-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-linen"
          >
            <nav
              ref={mobileNavRef}
              className="flex min-h-full flex-col items-center gap-10 px-6 pb-16 pt-28"
              aria-label="Mobile"
            >
              {navItems.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex w-full max-w-md flex-col items-center gap-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl tracking-[0.05em] text-charcoal transition-colors hover:text-brass sm:text-4xl"
                  >
                    {link.name}
                  </Link>
                  {hasChildren(link) && (
                    <ul className="flex w-full flex-col items-center gap-3 border-t border-charcoal/10 pt-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[14px] text-muted transition-colors hover:text-brass"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Link
                  href="/quote"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 border border-brass px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-brass transition-all hover:bg-brass hover:text-white"
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
