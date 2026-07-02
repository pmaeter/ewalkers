import Image from "next/image";
import { DirectionPreview } from "@/components/design/DirectionPreview";

export const metadata = {
  title: "Ewalkers — Direction artistique",
  description: "Choix de la direction visuelle pour la landing page Ewalkers SGQ01",
};

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Image
            src="/images/logo-ewalkers.png"
            alt="Ewalkers"
            width={140}
            height={40}
            className="h-8 w-auto"
          />
          <span className="text-xs uppercase tracking-[0.25em] text-white/50">
            Direction artistique
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#00AEEF]">
          Étape 1 · Validation
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Choisissez l&apos;ambiance visuelle de la landing page
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Trois directions inspirées du produit SGQ01, du logo cyan Ewalkers et
          du style Meta AI Glasses. Une fois validée, nous développerons
          l&apos;ensemble des sections en détail.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <DirectionPreview />
      </section>
    </main>
  );
}
