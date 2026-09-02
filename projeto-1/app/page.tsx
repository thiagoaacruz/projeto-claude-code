import { CtaSection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { ModelsSection } from "@/components/models-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <FeaturesSection />
        <ModelsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
