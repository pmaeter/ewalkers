"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/5 bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealOnScroll>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
                FAQ
              </p>
              <h2 className="text-display-md font-semibold text-white">
                Tout ce qu&apos;il faut savoir.
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/50">
                Autonomie, sport intensif, IA et contenu de la boîte — les
                réponses aux questions les plus fréquentes.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <RevealOnScroll key={item.question} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#050505]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="text-base font-medium text-white md:text-lg">
                        {item.question}
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white/50 transition-all duration-300",
                          isOpen &&
                            "rotate-45 border-[#00AEEF]/30 bg-[#00AEEF]/10 text-[#00AEEF]",
                        )}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={cn(
                            "px-6 leading-relaxed text-white/50",
                            "link" in item && item.link ? "pb-3" : "pb-6",
                          )}
                        >
                          {item.answer}
                        </p>
                        {"link" in item && item.link ? (
                          <div className="px-6 pb-6">
                            <a
                              href={item.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-[#00AEEF] transition-colors hover:text-white"
                            >
                              {item.link.label}
                              <span aria-hidden>↗</span>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
