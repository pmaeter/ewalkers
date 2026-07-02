import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AEEF]";

  const variants = {
    primary:
      "bg-gradient-to-br from-[#00AEEF] to-[#0077B6] text-black hover:opacity-90 hover:scale-[1.02]",
    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:border-white/20 hover:bg-white/10",
    ghost: "text-white/70 hover:text-white",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
