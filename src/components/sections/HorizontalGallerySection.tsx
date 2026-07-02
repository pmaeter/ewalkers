"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section || prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const scrollWidth = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="galerie"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0F0F0F] md:min-h-screen"
    >
      <div className="px-6 pt-24 md:absolute md:left-6 md:top-24 md:z-10 md:px-0 md:pt-0">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
          Galerie
        </p>
        <h2 className="text-display-md max-w-lg font-semibold text-white">
          Chaque angle révèle l&apos;ingénierie.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 px-6 py-16 md:mt-32 md:w-max md:py-0 md:pl-6 md:pr-[20vw]"
      >
        {galleryImages.map((image, index) => (
          <figure
            key={image.src}
            className={`relative shrink-0 overflow-hidden rounded-3xl border border-white/5 ${
              index === 0
                ? "h-[420px] w-[min(85vw,640px)]"
                : "h-[380px] w-[min(75vw,480px)]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 85vw, 640px"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                {image.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
