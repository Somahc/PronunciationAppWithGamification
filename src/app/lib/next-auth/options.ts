import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../lib/prisma";
import type { Adapter } from 'next-auth/adapters';

import type { DefaultSession, NextAuthOptions } from 'next-auth';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}

export const nextAuthOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    session: {
        strategy: "database",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        updateAge: 60 * 60 * 24, // 24 hours
    },
    callbacks: {
        async session({session, user}) {
          if (session?.user) {
            session.user.id = user.id;
          }
          return session;
        },
    },
}