import { marqueeItems } from "@/lib/content";

export function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-white/5 bg-[#050505] py-6"
    >
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-sm font-medium uppercase tracking-[0.35em] text-white/20 md:text-base"
          >
            {item}
            <span className="mx-12 text-[#00AEEF]/40">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
