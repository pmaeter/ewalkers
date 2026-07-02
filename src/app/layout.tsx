import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ewalkers — Lunettes de sport connectées SGQ01",
  description:
    "Lunettes de sport connectées Ewalkers SGQ01 : caméra 8 MP, audio stéréo immersif, IA ChatGPT et autonomie 9 h. Conçues pour l'exploration outdoor.",
  openGraph: {
    title: "Ewalkers — Lunettes de sport connectées",
    description:
      "Voir plus loin. Lunettes connectées avec IA, caméra Sony 8 MP et audio stéréo pour le sport outdoor.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-white">{children}</body>
    </html>
  );
}
