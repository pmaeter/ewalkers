"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { variants } from "@/lib/content";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function VariantsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.from("[data-variant-card]", {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="coloris" ref={sectionRef} className="bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
              Coloris
            </p>
            <h2 className="text-display-md font-semibold text-white">
              Trouvez votre reflet.
            </h2>
          </div>
          <p className="max-w-md text-white/50">
            Monture matte noire et verres miroir iridescents — deux finitions
            pour un même standard de performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {variants.map((variant) => (
            <article
              key={variant.name}
              data-variant-card
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                variant.active
                  ? "border-[#00AEEF]/40 bg-[#00AEEF]/[0.04]"
                  : "border-white/5 bg-[#050505] hover:border-white/15"
              }`}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#050505]">
                <Image
                  src={variant.image}
                  alt={variant.name}
                  fill
                  className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)] opacity-60" />
              </div>
              <div className="flex items-start justify-between gap-4 p-8 md:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {variant.name}
                    </h3>
                    {variant.active && (
                      <span className="rounded-full bg-[#00AEEF] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
                        Disponible
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-white/45">{variant.description}</p>
                </div>
                <Button href="#contact" variant="secondary" className="shrink-0 !px-5 !py-2.5">
                  Découvrir
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
