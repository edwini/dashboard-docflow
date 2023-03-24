import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
import { PostAuth } from "@/lib/fetch"
import { URL_AUTH_LOGIN } from "@/utils/apis"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const URL = URL_AUTH_LOGIN()
        const data = {
          username: credentials?.username,
          password: credentials?.password,
        }
        const user = await PostAuth(URL, data)
        // If no error and we have user data, return it
        if (user?.messages?.successMessage) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
    error: "/auth-denied",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token

      return session
    },
  },
}

export default NextAuth(authOptions)
