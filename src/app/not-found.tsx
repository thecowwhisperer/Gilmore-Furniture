import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to Gilmore Furniture Inc.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linen px-6 text-center">
      <span className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-brass">
        404
      </span>
      <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] text-charcoal">
        Page Not Found
      </h1>
      <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.8] text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="group relative mt-12 overflow-hidden border border-brass px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
      >
        <span className="relative z-10">Back to Home</span>
        <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
      </Link>
    </main>
  );
}
