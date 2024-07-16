'use client'

import LoginSection from "@/components/LoginSection";
import { useSession } from "next-auth/react"

export default function LoginPage() {
    //return (
    //  <>    
    //    <LoginSection />
    //  </>
    //);
    // checking if sessions exists
    //

    const { data: session } = useSession()

    if (session) {
        //logged in code
        return (
            <>You are logged in {session.user?.name}
            </>
        )
    } else {
        return (
            // not logged in code
            // <LoginSection />
            <>not logged in
            </>
        )

    }

}
