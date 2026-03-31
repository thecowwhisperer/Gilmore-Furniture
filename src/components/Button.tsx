import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "border border-brass text-brass hover:text-white",
  secondary:
    "border border-white/20 text-white/70 hover:border-brass hover:text-brass",
  ghost:
    "border border-charcoal/20 text-charcoal hover:border-brass hover:text-brass",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base = `group relative overflow-hidden px-12 py-5 text-[12px] uppercase tracking-[0.2em] transition-all duration-500 ${variantStyles[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
