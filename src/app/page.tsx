import Header from "@/components/Header";
import HeroMain from "@/components/HeroMain";
import InstructionsSectionCode from "@/components/InstructionsSectionCode";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8">        
      <HeroMain />
      <InstructionsSectionCode />
      <TestimonialSection />
      <PricingSection />
    </main>
  );
}
