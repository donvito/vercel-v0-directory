import { HeaderNavigation } from "@/components/header-navigation";
import { HeroFeatures } from "@/components/hero-features";
import { HeroMain } from "@/components/hero-main";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8">      
     <HeroMain />
     <HeroFeatures />
     <PricingSection />
    </main>
  );
}
