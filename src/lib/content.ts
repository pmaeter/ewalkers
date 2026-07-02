export const navLinks = [
  { label: "Produit", href: "#produit" },
  { label: "Expérience", href: "#experience" },
  { label: "Technologie", href: "#technologie" },
  { label: "FAQ", href: "#faq" },
] as const;

export const product = {
  name: "Ewalkers SGQ01",
  reference: "EW_SGQ01",
  tagline: "Voir plus loin.",
  headline: "Des lunettes connectées pour explorer sans limites.",
  subtitle:
    "Caméra 8 MP, audio stéréo immersif et intelligence artificielle — conçues pour l'outdoor, pensées pour bouger.",
};

export const statements = [
  {
    line1: "Légères.",
    line2: "Robustes.",
    line3: "Connectées.",
    image: "/images/texte/robuste.png",
  },
  {
    line1: "Capturez.",
    line2: "Écoutez.",
    line3: "Demandez.",
    image: "/images/texte/capturez.png",
  },
];

export const stats = [
  { value: "52", unit: "g", label: "Ultra-légères" },
  { value: "9", unit: "h", label: "Autonomie musique" },
  { value: "8", unit: "MP", label: "Caméra Sony" },
  { value: "4", unit: "Go", label: "Mémoire interne" },
];

export const pinnedFeatures = [
  {
    id: "camera",
    eyebrow: "01 · Caméra",
    title: "Chaque instant,\nimmortalisé.",
    description:
      "Capteur Sony IMX 219 8 MP avec stabilisation EIS. Photos et vidéos nettes, même en mouvement — sans sortir votre téléphone.",
    image: "/images/lifestyle-new/runner-3.png",
  },
  {
    id: "audio",
    eyebrow: "02 · Audio",
    title: "Un son qui\nvous porte.",
    description:
      "Double haut-parleur stéréo Φ13, 0,8 W optimisé outdoor. Musique, appels directionnels — clair même par vent fort.",
    image: "/images/lifestyle-new/son-qui-vous-porte.png",
  },
  {
    id: "ia",
    eyebrow: "03 · Intelligence",
    title: "L'IA,\nà portée de voix.",
    description:
      "ChatGPT intégré, traduction et contrôle vocal. Posez vos questions, obtenez des conseils terrain — mains libres.",
    image: "/images/lifestyle-new/homme-plage.png",
  },
  {
    id: "endurance",
    eyebrow: "04 · Endurance",
    title: "Prêtes\n toute la journée.",
    description:
      "270 mAh, 9 heures de musique, 50 minutes de capture. Charge complète en 1 h 30. Indicateurs LED sur la branche.",
    image: "/images/lifestyle-new/runner-2.png",
  },
];

export const presentation = {
  eyebrow: "Le produit",
  title: "Votre compagnon outdoor intelligent.",
  description:
    "Ewalkers SGQ01 repense les lunettes de sport : légères, robustes et connectées, elles capturent vos aventures, accompagnent vos entraînements et répondent à vos questions — mains libres, yeux sur l'horizon.",
  highlights: [
    {
      title: "Pour les sportifs exigeants",
      text: "Course, vélo, randonnée : un équipement pensé pour bouger sans compromis.",
    },
    {
      title: "Pour les explorateurs curieux",
      text: "Capturez, écoutez, interrogez l'IA — tout depuis vos lunettes.",
    },
    {
      title: "Pour le quotidien actif",
      text: "Appels, musique et traduction intégrés dans un design épuré et discret.",
    },
  ],
};

export const techHighlights = [
  {
    id: "mics",
    eyebrow: "Micros patch silicone · Synergie double micro · Réduction de bruit",
    title: "Des appels d'une clarté cristalline.",
    description:
      "Filtre avec précision le vent outdoor et le bruit ambiant, pour une qualité sonore claire et stable lors de vos appels Bluetooth. Appel professionnel ou message d'un proche en pleine nature — communiquez sans interrompre votre parcours.",
    image: "/images/texte/appels-cristallins.png",
  },
  {
    id: "audio",
    eyebrow: "Audio outdoor immersif",
    title: "Le sport prend un rythme plus fort.",
    description:
      "Haut-parleur sport haute fidélité de 13 mm, optimisé à 0,8 W pour l'outdoor — son clair et transparent, graves profonds et aigus nets. Vos hymnes sportifs en course ou à vélo enflamment instantanément votre passion. Appels directionnels et musique équilibrés : un son net, même par vent fort.",
    image: "/images/lifestyle-new/cycliste.png",
  },
];

export const specs = [
  {
    label: "Connectivité",
    value: "Bluetooth 5.3 + Wi-Fi 5 GHz",
    detail: "Synchronisation rapide et mises à jour OTA.",
  },
  {
    label: "Mémoire",
    value: "4 Go internes",
    detail: "Stockage local pour vos médias.",
  },
  {
    label: "Caméra",
    value: "Sony IMX 219 · 8 MP",
    detail: "Photos et vidéos stabilisées EIS.",
  },
  {
    label: "Autonomie",
    value: "Jusqu'à 9 h de musique",
    detail: "50 min de photo/vidéo · charge 1,5 h.",
  },
  {
    label: "Batterie",
    value: "270 mAh rechargeable",
    detail: "Indicateurs LED sur la branche.",
  },
  {
    label: "Audio",
    value: "Double HP stéréo Φ13",
    detail: "Micros silicium à réduction de bruit.",
  },
  {
    label: "Matériaux",
    value: "ABS + PC",
    detail: "Choc, rayure et corrosion résistants.",
  },
  {
    label: "Poids",
    value: "52 g",
    detail: "158,5 × 61 × 165,5 mm · ultra-léger.",
  },
];

export const features = [
  "Photo & vidéo",
  "Lecteur musique",
  "Appels mains libres",
  "Traduction",
  "IA ChatGPT",
  "Contrôle vocal",
  "Zone tactile",
  "Détection du port",
];

export const galleryImages = [
  {
    src: "/images/product/sgq01-hero.png",
    alt: "Ewalkers SGQ01 — vue trois-quarts",
    caption: "Design wraparound",
  },
  {
    src: "/images/lifestyle-new/face.png",
    alt: "Ewalkers SGQ01 — vue de face",
    caption: "Verres miroir iridescents",
  },
  {
    src: "/images/lifestyle-new/runner-2.png",
    alt: "Ewalkers portées sur piste d'athlétisme",
    caption: "Performance outdoor",
  },
  {
    src: "/images/lifestyle-new/runner-3.png",
    alt: "Ewalkers en conditions outdoor",
    caption: "Résistance extrême",
  },
  {
    src: "/images/lifestyle-new/cycliste.png",
    alt: "Audio immersif en cyclisme",
    caption: "Audio directionnel",
  },
  {
    src: "/images/product/sgq01-angle.png",
    alt: "Ewalkers SGQ01 — angle",
    caption: "Finitions premium",
  },
  {
    src: "/images/lifestyle-new/homme-plage.png",
    alt: "Ewalkers portées au coucher du soleil",
    caption: "Style au quotidien",
  },
  {
    src: "/images/product/sgq01-front.png",
    alt: "Ewalkers SGQ01 — détail",
    caption: "Détails techniques",
  },
];

export const usageItems = [
  {
    title: "Capturez l'instant",
    text: "Photo et vidéo 8 MP stabilisées EIS. Immortalisez vos trails, vos cols et vos panoramiques sans sortir votre téléphone.",
    image: "/images/lifestyle-new/runner-3.png",
  },
  {
    title: "Audio qui suit le rythme",
    text: "Haut-parleurs stéréo Φ13 optimisés outdoor. Musique, appels directionnels — un son clair même par vent fort.",
    image: "/images/lifestyle-new/cycliste.png",
  },
  {
    title: "IA à portée de voix",
    text: "Posez vos questions, traduisez, obtenez des conseils terrain. ChatGPT intégré pour une exploration sans friction.",
    image: "/images/lifestyle-new/homme-plage.png",
  },
];

export const variants = [
  {
    name: "Cyan Miroir",
    description: "Verre iridescent bleu-cyan, finition matte noire.",
    image: "/images/product/sgq01-front.png",
    active: true,
  },
  {
    name: "Noir Profond",
    description: "Monture matte intégrale, verre miroir bleu électrique.",
    image: "/images/product/sgq01-angle.png",
    active: false,
  },
];

export const faqItems = [
  {
    question: "Quelle est l'autonomie réelle des Ewalkers SGQ01 ?",
    answer:
      "Jusqu'à 9 heures en lecture musicale continue, ou environ 50 minutes en enregistrement photo/vidéo. La charge complète prend 1 h 30 via le câble USB fourni.",
  },
  {
    question: "Les lunettes sont-elles adaptées au sport intensif ?",
    answer:
      "Oui. Frame ABS+PC résistant aux chocs, verres anti-rayures, embouts silicone anti-dérapants et pads nasaux ajustables pour un maintien sécurisé en mouvement.",
  },
  {
    question: "Comment fonctionne l'assistant IA ?",
    answer:
      "Via commande vocale et double moteur IA (ChatGPT à l'international). Posez vos questions, demandez une traduction ou des conseils — mains libres, sans sortir votre smartphone.",
  },
  {
    question: "Que contient la boîte ?",
    answer:
      "Lunettes SGQ01, étui de transport, chiffon de nettoyage, câble USB, support nasal silicone et supports d'oreille silicone.",
  },
  {
    question: "Où trouver le manuel utilisateur ?",
    answer:
      "Le manuel complet EW_SGQ01 (installation, utilisation, entretien et fonctionnalités) est disponible au format PDF.",
    link: {
      label: "Télécharger le manuel EW_SGQ01 (PDF)",
      href: "/documents/ew-sgq01-manual.pdf",
    },
  },
];

export const retailer = {
  name: "Electro Dépôt",
  url: "https://www.electrodepot.fr/catalogsearch/result/??q=lunettes+intelligentes+ewalkers",
  logo: "/images/partners/electrodepot.png",
  tagline: "Vente exclusive chez Electro Dépôt",
};

export const footerLinks = {
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  contact: "contact@ewalkers.com",
};

export const marqueeItems = [
  "EWALKERS",
  "SGQ01",
  "OUTDOOR",
  "8 MP",
  "IA CHATGPT",
  "52 GRAMMES",
  "9 HEURES",
  "STÉRÉO",
];
