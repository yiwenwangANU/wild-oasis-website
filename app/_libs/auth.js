import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "@/app/_libs/data-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    async signIn({ user, account, profile }) {
      //create new user in supabase if oauth email not exist
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest) {
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      // add user id(from supabase) to session
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
});
