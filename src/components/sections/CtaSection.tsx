"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { retailer } from "@/lib/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.to("[data-cta-glow]", {
        scale: 1.2,
        opacity: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-full relative flex items-center overflow-hidden bg-[#050505]"
    >
      <div
        data-cta-glow
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,700px)] w-[min(90vw,700px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00AEEF]/12 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <RevealOnScroll>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
            Passez à l&apos;action
          </p>
          <h2 className="text-display-lg font-semibold text-white">
            Prêt à voir plus loin ?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-white/50">
            Découvrez les Ewalkers SGQ01 en vente exclusive chez Electro
            Dépôt — ou contactez-nous pour en savoir plus.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href={retailer.url} variant="primary">
              Acheter
            </Button>
            <Button href="mailto:contact@ewalkers.com" variant="secondary">
              Nous contacter
            </Button>
          </div>

          <Link
            href={retailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 inline-flex flex-col items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${retailer.tagline} — ouvrir Electro Dépôt`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">
              {retailer.tagline}
            </p>
            <Image
              src={retailer.logo}
              alt="Electro Dépôt"
              width={220}
              height={48}
              className="h-10 w-auto md:h-12"
            />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
