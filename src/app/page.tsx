import { auth } from "../auth"
import CoursePage from "@/components/CoursePage"

export default async function Home() {
    const session = await auth()

    if (session) {
        return (
            <>
                <CoursePage />
            </>
        )
    }

    return (
        <>
            {/*
            <SignIn />*/
            }
        </>
    )
}
