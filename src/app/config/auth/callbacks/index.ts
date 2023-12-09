import { type NextAuthOptions } from "next-auth";

export const callbacks: NextAuthOptions["callbacks"] = {
  async jwt({ token, user }) {
    if (user) {
      return {
        ...token,
        id: user.id,
      };
    }
    return token;
  },
  session: async ({ session, token }) => {
    if (session.user) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    }
    return session;
  },
};
