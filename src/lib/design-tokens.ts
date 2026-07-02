export type DesignDirectionId = "obsidian-pulse" | "alpine-horizon" | "iridescent-flow";

export interface DesignDirection {
  id: DesignDirectionId;
  name: string;
  tagline: string;
  mood: string;
  fonts: {
    display: string;
    body: string;
    googleFonts: string;
  };
  colors: {
    background: string;
    backgroundAlt: string;
    surface: string;
    foreground: string;
    foregroundMuted: string;
    accent: string;
    accentSoft: string;
    border: string;
    gradient: string;
  };
}

export const designDirections: Record<DesignDirectionId, DesignDirection> = {
  "obsidian-pulse": {
    id: "obsidian-pulse",
    name: "Obsidian Pulse",
    tagline: "Tech premium · minimal · cinématique",
    mood:
      "Inspiré Meta AI Glasses : fond noir profond, typographie monumentale, accent cyan de la marque Ewalkers. Ambiance studio produit, très contrastée.",
    fonts: {
      display: "var(--font-syne)",
      body: "var(--font-inter)",
      googleFonts: "Syne + Inter",
    },
    colors: {
      background: "#050505",
      backgroundAlt: "#0F0F0F",
      surface: "#161616",
      foreground: "#F5F5F5",
      foregroundMuted: "#A3A3A3",
      accent: "#00AEEF",
      accentSoft: "rgba(0, 174, 239, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      gradient: "linear-gradient(135deg, #00AEEF 0%, #0077B6 100%)",
    },
  },
  "alpine-horizon": {
    id: "alpine-horizon",
    name: "Alpine Horizon",
    tagline: "Outdoor premium · lumineux · sportif",
    mood:
      "Alternance clair/sombre inspirée des visuels neige et piste : blanc immaculé, charbon profond, bleu électrique des verres et touche chaude coucher de soleil.",
    fonts: {
      display: "var(--font-instrument-sans)",
      body: "var(--font-dm-sans)",
      googleFonts: "Instrument Sans + DM Sans",
    },
    colors: {
      background: "#FAFAF8",
      backgroundAlt: "#111111",
      surface: "#FFFFFF",
      foreground: "#111111",
      foregroundMuted: "#5C5C5C",
      accent: "#0088FF",
      accentSoft: "rgba(0, 136, 255, 0.1)",
      border: "rgba(17, 17, 17, 0.08)",
      gradient: "linear-gradient(135deg, #0088FF 0%, #FF6B35 100%)",
    },
  },
  "iridescent-flow": {
    id: "iridescent-flow",
    name: "Iridescent Flow",
    tagline: "Tech-outdoor · gradient · immersif",
    mood:
      "Reprend les reflets iridescents des verres (cyan → violet) : sections sombres avec dégradés subtils, accents chromatiques pour CTAs et highlights.",
    fonts: {
      display: "var(--font-outfit)",
      body: "var(--font-sora)",
      googleFonts: "Outfit + Sora",
    },
    colors: {
      background: "#0A0B10",
      backgroundAlt: "#12131A",
      surface: "#181922",
      foreground: "#ECECF1",
      foregroundMuted: "#9B9BB0",
      accent: "#00E5FF",
      accentSoft: "rgba(124, 58, 237, 0.15)",
      border: "rgba(255, 255, 255, 0.06)",
      gradient: "linear-gradient(135deg, #00E5FF 0%, #7C3AED 50%, #A855F7 100%)",
    },
  },
};

export const defaultDirection: DesignDirectionId = "obsidian-pulse";
