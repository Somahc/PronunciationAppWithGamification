import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import type { Adapter } from 'next-auth/adapters';

import { nextAuthOptions } from '@/app/lib/next-auth/options';

const handler = NextAuth(nextAuthOptions);
// const handler = NextAuth({
//     adapter: PrismaAdapter(prisma) as Adapter,
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID as string,
//             clientSecret: process.env.GOOGLE_SECRET as string,
//         }),
//     ],
//     session: {
//         strategy: "database",
//         maxAge: 60 * 60 * 24 * 30, // 30 days
//         updateAge: 60 * 60 * 24, // 24 hours
//       },
// });



export { handler as GET, handler as POST }