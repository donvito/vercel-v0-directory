import { signIn } from "@/auth"

export function SignIn() {

    async function handleSignIn() {
        "use server"
        await signIn("github")
    }
    return (
        <form action={handleSignIn}>
            <button type="submit">Sign in with GitHub</button>
        </form>
    )
} 
