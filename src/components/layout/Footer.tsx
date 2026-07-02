import Link from "next/link";
import { footerLinks } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="mb-6" textClassName="text-2xl" />
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Lunettes de sport connectées EW_SGQ01 — technologie, design et
              liberté outdoor réunis en 52 grammes.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">
              Légal
            </p>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>
            <a
              href={`mailto:${footerLinks.contact}`}
              className="block text-sm text-white/55 transition-colors hover:text-[#00AEEF]"
            >
              {footerLinks.contact}
            </a>
            <ul className="mt-6 flex gap-4">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 transition-colors hover:text-white"
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/5 pt-8 text-xs text-white/30 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Ewalkers. Tous droits réservés.</p>
          <p>Réf. EW_SGQ01 · Lunettes de sport connectées</p>
        </div>
      </div>
    </footer>
  );
}
