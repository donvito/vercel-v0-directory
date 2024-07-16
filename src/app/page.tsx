// mark as client component
"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

import HeroMain from "@/components/HeroMain";
import InstructionsSectionCode from "@/components/InstructionsSectionCode";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialsSection";

export default function Home() {
    // extracting data from usesession as session
    const { data: session } = useSession()

    // checking if sessions exists
    if (session) {
        // rendering components for logged in users
        return (
        <>
        <p>Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
        </>
        )
    }

    return (
        <>
        //<main className="flex min-h-screen flex-col justify-between p-8">
            <p>Not Signed In</p>
            <button onClick={() => signIn('github')}>Sign in with Github</button>
            <button onClick={() => signIn('google')}>Sign in with Google</button>
        //</main>
        </>
    );
}
