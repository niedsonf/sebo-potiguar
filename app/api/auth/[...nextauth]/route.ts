import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import firestore from "@/utils/firestore";

const handler = NextAuth({
  // adapter: FirestoreAdapter(),
  callbacks: {
    signIn: async ({ user }) => {
      const userDoc = doc(firestore, 'users', user.id);
      const userDocData = await getDoc(userDoc);
      if (userDocData.exists()) {
        await updateDoc(userDoc, {
          lastAccess: new Date().toISOString()
        });
      } else {
        await setDoc(userDoc, {
          name: user.name,
          email: user.email,
          image: user.image,
          createdAt: new Date().toISOString(),
          lastAccess: new Date().toISOString(),
        });
      }
      return true
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.name = token.name;
        session.user.id = token.sub;
        session.user.createdAt = token.createdAt;
        session.user.lastAccess = token.lastAccess;
      }
      return session;
    },
    jwt: async ({ token, trigger, user, session }) => {
      if (trigger === 'update') {
        const lastAccess = new Date().toISOString();
        const userDoc = doc(firestore, 'users', token.sub ?? '');
        await updateDoc(userDoc, {
          ...session,
          lastAccess
        });
        return {
          ...token,
          ...session,
          lastAccess
        }
      }
      if (user) {
        const userDoc = doc(firestore, 'users', user.id);
        const userDocData = (await getDoc(userDoc)).data();
        return {
          ...token,
          ...userDocData
        }
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
})

export { handler as GET, handler as POST }