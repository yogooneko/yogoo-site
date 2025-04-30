import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID!,
        clientSecret: process.env.TWITTER_CLIENT_SECRET!,
        version: "2.0",
        authorization: {
          params: {
            scope: "users.read tweet.read offline.access",
          },
        },
      })      
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/pawprint`
    },
  },
}

export default NextAuth(authOptions)
