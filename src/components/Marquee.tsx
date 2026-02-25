"use client";

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

  return (
    <div className="overflow-hidden border-y border-charcoal/5 bg-linen py-8">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-charcoal/25">
              {item}
            </span>
            <span className="mx-10 inline-block h-1.5 w-1.5 rotate-45 border border-brass/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
