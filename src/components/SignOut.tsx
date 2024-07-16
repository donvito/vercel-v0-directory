import { signOut } from "@/auth"

export function SignOut() {
    async function handleSignOut() {
        "use server"
        await signOut()
    }
    return (
        <form action={handleSignOut}>
            <button type="submit">Logout</button>
        </form>
    )
} 
