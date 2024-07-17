import PricingSection from "@/components/PricingSection"
import { auth } from "../auth"
import CoursePage from "@/components/CoursePage"
import TestimonialSection from "@/components/TestimonialsSection"
import HeroMain from "@/components/HeroMain"

export default async function Home() {
    return (
        <>
            <HeroMain />
            <TestimonialSection />
            <PricingSection />

        </>
    )
}
