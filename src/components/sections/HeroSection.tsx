"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { product } from "@/lib/content";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      const copy = copyRef.current;

      if (!section || !bg || !copy) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) {
        gsap.set(copy, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(copy, { opacity: 0, y: 28 });
      gsap.set(bg, { scale: 1.12 });

      gsap
        .timeline({ delay: 0.1 })
        .to(bg, { scale: 1, duration: 1.6, ease: "power2.out" })
        .to(
          copy,
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=1.1",
        )
        .add(() => {
          gsap.fromTo(
            copy,
            { opacity: 1, y: 0 },
            {
              opacity: 0,
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "65% top",
                scrub: 1,
              },
            },
          );
        });

      gsap.fromTo(
        bg,
        { y: 0 },
        {
          y: "18%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#050505]"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/lifestyle-new/hero-1.png"
          alt="Cycliste portant les lunettes connectées Ewalkers SGQ01 au coucher du soleil"
          fill
          priority
          className="object-cover object-[62%_38%] sm:object-[58%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505]/75 via-[#050505]/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-end justify-end px-6 pb-14 pt-40 sm:pb-20 lg:pb-24">
        <div ref={copyRef} className="max-w-xl text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#00AEEF]">
            {product.reference}
          </p>
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            {product.headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/75 lg:text-lg">
            {product.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <Button href="#produit" variant="primary">
              Découvrir
            </Button>
            <Button href="#technologie" variant="secondary">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-b from-transparent to-[#050505] sm:hidden"
      />
    </section>
  );
}
