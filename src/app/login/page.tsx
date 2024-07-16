'use client'

import LoginSection from "@/components/LoginSection";
import { useSession } from "next-auth/react"

export default function LoginPage() {
    return (
      <>    
        <LoginSection />
      </>
    );

}
