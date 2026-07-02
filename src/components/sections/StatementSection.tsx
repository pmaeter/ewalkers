"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statements } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      const blocks = gsap.utils.toArray<HTMLElement>("[data-statement-block]");

      blocks.forEach((block) => {
        const lines = block.querySelectorAll("[data-statement-line]");

        gsap.from(lines, {
          opacity: 0,
          y: 80,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-[#050505]">
      {statements.map((statement, index) => (
        <div
          key={index}
          data-statement-block
          className="section-full relative flex items-end overflow-hidden"
        >
          <Image
            src={statement.image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 via-transparent to-[#050505]/60" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
            <div className="space-y-2 md:space-y-4">
              {[statement.line1, statement.line2, statement.line3].map(
                (line, lineIndex) => (
                  <p
                    key={line}
                    data-statement-line
                    className={`text-display-xl font-semibold [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] ${
                      lineIndex === 1
                        ? "text-white/40"
                        : lineIndex === 2
                          ? "bg-gradient-to-r from-[#00AEEF] to-[#0077B6] bg-clip-text text-transparent"
                          : "text-white"
                    }`}
                  >
                    {line}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
