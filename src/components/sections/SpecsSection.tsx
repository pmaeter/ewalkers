"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features, specs, techHighlights } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function SpecsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.utils.toArray<HTMLElement>("[data-tech-panel]").forEach((panel) => {
        const copy = panel.querySelector("[data-tech-copy]");

        if (!copy) return;

        gsap.fromTo(
          copy,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 75%",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="technologie" ref={sectionRef} className="bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 items-center gap-6 border-b border-white/5 pb-10 md:grid-cols-[1fr_auto] md:gap-8 md:pb-12">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
              Technologie
            </p>
            <h2 className="text-display-md max-w-xl font-semibold text-white">
              Ingénierie de précision. Performance sans compromis.
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/50">
              Chaque composant est optimisé pour l&apos;outdoor : légèreté,
              autonomie, capture et connectivité — dans un seul objet de 52
              grammes.
            </p>
          </div>

          <div className="relative mx-auto h-36 w-full max-w-[280px] shrink-0 sm:h-44 sm:max-w-[320px] md:mx-0 md:h-48 md:max-w-[360px]">
            <Image
              src="/images/product/sgq01-angle.png"
              alt="Ewalkers SGQ01 — détail technologique"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,174,239,0.18)]"
              sizes="(max-width: 768px) 280px, 360px"
            />
          </div>
        </div>
      </div>

      {techHighlights.map((item, index) => (
        <article
          key={item.id}
          data-tech-panel
          className="relative min-h-[70svh] overflow-hidden md:min-h-[75svh]"
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className={`absolute inset-0 ${
              index % 2 === 1
                ? "bg-gradient-to-l from-[#050505] via-[#050505]/55 to-[#050505]/15"
                : "bg-gradient-to-r from-[#050505] via-[#050505]/55 to-[#050505]/15"
            }`}
          />

          <div
            data-tech-copy
            className={`relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-6 pb-14 pt-32 md:min-h-[75svh] md:pb-20 ${
              index % 2 === 1
                ? "justify-end text-right"
                : "justify-start text-left"
            }`}
          >
            <div className="max-w-xl">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#00AEEF]">
                {item.eyebrow}
              </p>
              <h3 className="text-display-md font-semibold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        </article>
      ))}

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div
          data-spec-grid
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {specs.map((spec) => (
            <article
              key={spec.label}
              data-spec-card
              className="group flex h-full flex-col rounded-3xl border border-white/5 bg-[#0F0F0F] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5 md:p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                {spec.label}
              </p>
              <p className="mt-4 font-display text-xl font-semibold text-white md:text-2xl">
                {spec.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                {spec.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/5 bg-[#0F0F0F] p-8 md:mt-12 md:p-10">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#00AEEF]">
            Fonctions intégrées
          </p>
          <div className="flex flex-wrap gap-3">
            {features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-[#00AEEF]/30 hover:text-white"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
