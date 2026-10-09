import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@nexdial.io" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        if (credentials.email === "admin@nexdial.io" && credentials.password === "admin123") {
          return {
            id: "mock-admin-id",
            name: "Datta Sable",
            email: "admin@nexdial.io",
            role: "ADMIN",
          };
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        }).catch(() => null);

        if (!user || !user.password) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!user.email) return false;

        let dbUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!dbUser) {
          const isSuperAdmin = user.email.toLowerCase() === "sabledattatray@gmail.com";
          dbUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "Google User",
              role: isSuperAdmin ? "ADMIN" : "USER",
            },
          });
        }

        user.id = dbUser.id;
        (user as any).role = dbUser.role;
      }
      return true;
    },
    async jwt({ token, user, trigger }) {
      if (user || trigger === "update") {
        if (token.email) {
          const dbUser = await prisma.user.findUnique({
            where: { email: token.email },
            select: { id: true, role: true },
          }).catch(() => null);
          if (dbUser) {
            token.id = dbUser.id;
            token.role = dbUser.role;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login",
  }
};

export async function getAuthenticatedSession() {
  return await getServerSession(authOptions);
}
