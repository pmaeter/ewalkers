import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimationsProvider } from "@/components/providers/ScrollAnimationsProvider";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PinnedStorySection } from "@/components/sections/PinnedStorySection";
import { PinnedStoryMobileSection } from "@/components/sections/PinnedStoryMobileSection";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <ScrollAnimationsProvider>
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <StatementSection />
        <ProductSection />
        <StatsSection />
        <PinnedStorySection />
        <PinnedStoryMobileSection />
        <SpecsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </ScrollAnimationsProvider>
  );
}
