import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "pg"
 
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: parseInt(process.env.DATABASE_PORT || ""),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: PostgresAdapter(pool),
  trustHost: true,
  callbacks: {
    async signIn({ user }) {
      console.log("User : ", user)
      return true
    },    
  }
})
