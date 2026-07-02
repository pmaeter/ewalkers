"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pinnedFeatures } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function PinnedStoryMobileSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.utils.toArray<HTMLElement>("[data-mobile-story]").forEach((el) => {
        gsap.from(el.querySelector("[data-mobile-copy]"), {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="lg:hidden">
      {pinnedFeatures.map((feature, index) => (
        <article
          key={feature.id}
          data-mobile-story
          className={`section-full relative flex items-end ${
            index % 2 === 0 ? "bg-[#050505]" : "bg-[#0F0F0F]"
          }`}
        >
          <Image
            src={feature.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/10" />

          <div data-mobile-copy className="relative z-10 ml-auto w-full max-w-xl px-6 pb-10 pt-32 md:pb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
              {feature.eyebrow}
            </p>
            <h2 className="text-display-md whitespace-pre-line font-semibold text-white">
              {feature.title}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/55">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
