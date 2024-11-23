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
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'MANAGER' | 'SHOP' | 'USER';
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        if (!email || !password) {
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
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;

      return session;
    },
  },
});
