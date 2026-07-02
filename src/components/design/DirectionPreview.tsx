"use client";

import Image from "next/image";
import { designDirections, type DesignDirection } from "@/lib/design-tokens";

function DirectionCard({ direction }: { direction: DesignDirection }) {
  const { colors, fonts } = direction;

  return (
    <article
      className="overflow-hidden rounded-3xl border transition-transform duration-500 hover:scale-[1.01]"
      style={{ borderColor: colors.border, background: colors.background }}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: colors.backgroundAlt }}
      >
        <Image
          src="/images/product/sgq01-hero.png"
          alt="Ewalkers SGQ01"
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background: `linear-gradient(to top, ${colors.background}, transparent)`,
          }}
        />
      </div>

      <div className="space-y-6 p-8">
        <div>
          <p
            className="mb-2 text-xs uppercase tracking-[0.2em]"
            style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
          >
            Direction {direction.id === "obsidian-pulse" ? "A" : direction.id === "alpine-horizon" ? "B" : "C"}
          </p>
          <h2
            className="text-3xl font-semibold tracking-tight"
            style={{ color: colors.foreground, fontFamily: fonts.display }}
          >
            {direction.name}
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
          >
            {direction.tagline}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
        >
          {direction.mood}
        </p>

        <div className="space-y-3">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
          >
            Palette
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries({
              Fond: colors.background,
              Alt: colors.backgroundAlt,
              Texte: colors.foreground,
              Accent: colors.accent,
            }).map(([label, hex]) => (
              <div key={label} className="flex items-center gap-2">
                <span
                  className="h-8 w-8 rounded-full border"
                  style={{ background: hex, borderColor: colors.border }}
                />
                <span
                  className="text-xs"
                  style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
                >
                  {label}
                </span>
              </div>
            ))}
            <div
              className="h-8 w-16 rounded-full"
              style={{ background: colors.gradient }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
          >
            Typographie · {fonts.googleFonts}
          </p>
          <p
            className="text-4xl font-semibold leading-none tracking-tight"
            style={{ color: colors.foreground, fontFamily: fonts.display }}
          >
            Voir plus loin.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: colors.foregroundMuted, fontFamily: fonts.body }}
          >
            Lunettes de sport connectées avec IA, caméra 8 MP et audio stéréo
            immersif pour l&apos;exploration outdoor.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            className="rounded-full px-6 py-3 text-sm font-medium text-black"
            style={{ background: colors.gradient, fontFamily: fonts.body }}
          >
            Découvrir
          </button>
          <button
            type="button"
            className="rounded-full border px-6 py-3 text-sm font-medium"
            style={{
              borderColor: colors.border,
              color: colors.foreground,
              fontFamily: fonts.body,
            }}
          >
            En savoir plus
          </button>
        </div>
      </div>
    </article>
  );
}

export function DirectionPreview() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {Object.values(designDirections).map((direction) => (
        <DirectionCard key={direction.id} direction={direction} />
      ))}
    </div>
  );
}
