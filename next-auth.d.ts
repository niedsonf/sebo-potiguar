import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      createdAt: string;
      lastAccess: string;
    } & DefaultSession['user'];
  }
}