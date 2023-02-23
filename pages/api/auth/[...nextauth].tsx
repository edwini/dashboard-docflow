import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
import { PostFetch } from "@/lib/fetch"
import { URL_AUTH_LOGIN } from "@/utils/apis"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const URL = URL_AUTH_LOGIN()
        console.log("URL", URL)
        const user = await PostFetch(URL, {
          username: credentials?.username,
          password: credentials?.password,
        })

        // If no error and we have user data, return it
        if (user) {
          console.log("user", user)
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
