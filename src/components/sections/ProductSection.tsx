"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { presentation } from "@/lib/content";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      gsap.from("[data-product-intro]", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.to("[data-product-image]", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="produit"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0F0F0F]"
    >
      <div className="section-full relative flex items-center">
        <div
          data-product-image
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/lifestyle-new/runner-2.png"
            alt=""
            fill
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]/20" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          <div data-product-intro>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
              {presentation.eyebrow}
            </p>
            <h2 className="text-display-lg font-semibold text-white">
              {presentation.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/55">
              {presentation.description}
            </p>
            <div className="mt-10">
              <Button href="#technologie" variant="primary">
                Explorer la technologie
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-[16/11] w-full max-w-[min(92vw,560px)] sm:max-w-2xl lg:max-w-none">
            <Image
              src="/images/product/sgq01-front.png"
              alt="Ewalkers SGQ01"
              fill
              className="object-contain drop-shadow-[0_40px_80px_rgba(0,174,239,0.18)]"
              sizes="(max-width: 1024px) 92vw, 720px"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#050505] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {presentation.highlights.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-white/5 bg-[#0F0F0F] p-8 transition-all duration-500 hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5 md:p-10"
            >
              <span className="font-display text-5xl font-bold text-white/10">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/50">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
