"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pinnedFeatures } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function PinnedStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-story-panel]");
        const images = gsap.utils.toArray<HTMLElement>("[data-story-image]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: pinRef.current,
          },
        });

        panels.forEach((panel, index) => {
          if (index === 0) return;

          tl.to(
            panels[index - 1],
            { opacity: 0, y: -24, duration: 0.5 },
            index,
          ).fromTo(
            panel,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.5 },
            index,
          );

          tl.to(
            images[index - 1],
            { opacity: 0, duration: 0.5 },
            index,
          ).to(images[index], { opacity: 0.85, duration: 0.5 }, index);
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative hidden bg-[#050505] lg:block"
      style={{ height: `${pinnedFeatures.length * 100}vh` }}
    >
      <div ref={pinRef} className="section-full relative overflow-hidden">
        <div className="absolute inset-0">
          {pinnedFeatures.map((feature, index) => (
            <div
              key={feature.id}
              data-story-image
              className="absolute inset-0"
              style={{ opacity: index === 0 ? 0.85 : 0 }}
            >
              <Image
                src={feature.image}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-[#050505]/10" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-end justify-end px-6 pb-16 md:pb-24">
          <div className="relative min-h-[280px] w-full max-w-xl">
            {pinnedFeatures.map((feature, index) => (
              <article
                key={feature.id}
                data-story-panel
                className="absolute inset-x-0 bottom-0"
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
                  {feature.eyebrow}
                </p>
                <h2 className="text-display-md whitespace-pre-line font-semibold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                  {feature.title}
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
