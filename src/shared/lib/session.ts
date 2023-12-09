import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/app/config/auth";

export const getCurrentUser = async () => {
  const session = await getServerSession(nextAuthConfig);
  return session?.user;
};
