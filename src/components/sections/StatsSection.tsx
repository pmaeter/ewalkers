"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.from("[data-stat-item]", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/5 bg-[#0F0F0F] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,174,239,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-16 text-center text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
          En chiffres
        </p>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-stat-item
              className="text-center lg:border-l lg:border-white/5 lg:first:border-l-0 lg:pl-8 lg:first:pl-0"
            >
              <p className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
                {stat.value}
                <span className="text-[#00AEEF]">{stat.unit}</span>
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.15em] text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
