import NextAuth, { NextAuthOptions } from 'next-auth'
import { credentialsProvider } from './credentialProvider'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'

const providers = [
  credentialsProvider,
  GoogleProvider({
    clientId: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
  }),
  GithubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
  }),
  FacebookProvider({
    clientId: process.env.FACEBOOK_ID as string,
    clientSecret: process.env.FACEBOOK_SECRET as string,
  }),
  TwitterProvider({
    clientId: process.env.TWITTER_ID as string,
    clientSecret: process.env.TWITTER_SECRET as string,
  }),
]

export const authOptions: NextAuthOptions = { providers, }

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
