"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usageItems } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function UsageSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.utils.toArray<HTMLElement>("[data-usage-panel]").forEach((panel) => {
        const image = panel.querySelector("[data-usage-image]");
        const copy = panel.querySelector("[data-usage-copy]");

        gsap.from(copy, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 65%",
          },
        });

        if (image) {
          gsap.to(image, {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="usage" ref={sectionRef} className="bg-[#050505]">
      {usageItems.map((item, index) => (
        <article
          key={item.title}
          data-usage-panel
          className="section-full relative flex items-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <div
              data-usage-image
              className="relative h-full w-full scale-100 will-change-transform"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div
              className={`absolute inset-0 ${
                index % 2 === 1
                  ? "bg-gradient-to-l from-[#050505] via-[#050505]/55 to-[#050505]/15"
                  : "bg-gradient-to-r from-[#050505] via-[#050505]/55 to-[#050505]/15"
              }`}
            />
          </div>

          <div
            data-usage-copy
            className={`relative z-10 mx-auto w-full max-w-7xl px-6 ${
              index % 2 === 1 ? "md:ml-auto md:max-w-2xl md:pr-16 md:text-right" : "md:max-w-2xl"
            }`}
          >
            <span className="font-display text-8xl font-bold text-white/[0.04] md:text-9xl">
              0{index + 1}
            </span>
            <h3 className="text-display-md mt-2 font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-white/60">{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
