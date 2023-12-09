import { type NextAuthOptions } from "next-auth";
import { GoogleProvider } from "./providers/GoogleProvider";
import { callbacks } from "./callbacks";

export const nextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider,
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks,
} satisfies NextAuthOptions;
