/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import NextAuth, { DefaultSession, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: 'MANAGER' | 'SHOP' | 'USER';
      points?: number;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'MANAGER' | 'SHOP' | 'USER';
    points?: number;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
      },
      authorize: async (credentials) => {
        const { email } = credentials;

        if (!email) {
          throw new Error('Enter credentials');
        }

        const { data: user } = await axios.get<Session['user']>(
          `${process.env.NEXT_PUBLIC_API}/users/${email}`,
        );

        if (!user) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }: { token: JWT; user: Session['user'] }) {
      if (user) {
        token.role = user.role;
        token.points = user.points;
      }

      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.points = token.points;

      return session;
    },
  },
});
