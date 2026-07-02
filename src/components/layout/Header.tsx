"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-[#050505]/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="#" className="relative z-10 shrink-0" aria-label="Ewalkers — accueil">
          <Logo
            className="transition-opacity duration-500"
            textClassName="text-xl md:text-2xl"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Acheter
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1">
            <span
              className={cn(
                "h-px w-full bg-white transition-transform",
                menuOpen && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-white transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-white transition-transform",
                menuOpen && "-translate-y-[5px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-0 bg-[#050505]/95 backdrop-blur-xl lg:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-syne)] text-2xl text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contact" variant="primary" className="mt-4">
              Acheter
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
