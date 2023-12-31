import NextAuth from "next-auth/next";
import { nextAuthConfig } from "@/app/config/auth";

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
