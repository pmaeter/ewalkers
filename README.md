# Ewalkers — Landing page SGQ01

Site one-page premium pour les lunettes de sport connectées Ewalkers (réf. EW_SGQ01).

## Stack technique

| Technologie | Rôle |
|---|---|
| **Next.js 16** (App Router) | Framework React, SSG/SSR, déploiement Vercel en un clic |
| **Tailwind CSS v4** | Design system rapide, responsive mobile-first |
| **GSAP + ScrollTrigger** | Animations scroll (fade-in, parallax léger) |
| **TypeScript** | Typage et maintenabilité |

**Pourquoi ce choix :** Next.js offre un excellent rapport rapidité/performance pour une landing statique, avec optimisation d'images native (`next/image`), SEO et hébergement trivial sur Vercel. Tailwind accélère la mise en page premium sans CSS custom lourd. GSAP reste la référence pour des animations scroll fluides type Meta AI Glasses, plus légère que Framer Motion pour du parallax pur.

## Structure

```
site/
├── public/images/
│   ├── logo-ewalkers.png
│   ├── product/          # Visuels produit (hero, angles)
│   ├── lifestyle/        # Mises en situation outdoor
│   └── gallery/          # Galerie photos
├── src/
│   ├── app/
│   │   ├── page.tsx              # Accueil (placeholder)
│   │   ├── design/page.tsx       # Preview des 3 directions artistiques
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── design/               # Composants preview direction
│   │   ├── layout/               # Header, Footer (à venir)
│   │   └── sections/             # Hero, Specs, FAQ… (à venir)
│   └── lib/
│       └── design-tokens.ts      # 3 palettes + typographies
└── assets crea/                  # Fichiers source (PDF, originaux)
```

## Lancer le projet

```bash
cd site
npm run dev
```

- Accueil : http://localhost:3000
- Direction artistique : http://localhost:3000/design

## Contenu produit (EW_SGQ01)

Source : `assets crea/Fiche sport glasses Ewalkers SGQ01.pdf`

- Bluetooth 5.3 + Wi-Fi 5 GHz
- Mémoire 4 Go · Caméra Sony IMX 219 8 MP
- Batterie 270 mAh · 9 h musique · 50 min photo/vidéo
- Double micro + haut-parleurs stéréo Φ13
- EIS · IA ChatGPT · 52 g · 158,5 × 61 × 165,5 mm

## Prochaine étape

Valider une direction artistique (A, B ou C) avant développement des sections complètes.
