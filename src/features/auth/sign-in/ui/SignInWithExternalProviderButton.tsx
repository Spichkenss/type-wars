"use client";

import { signIn } from "next-auth/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const signInWithExternalProviderButtonVariant = cva("h-8 w-full rounded-md text-white", {
  variants: {
    variant: {
      google: "bg-[#EA4335]",
    },
  },
});

type AuthProviderType = "google"

interface SignInWithExternalProviderButtonProps
  extends VariantProps<typeof signInWithExternalProviderButtonVariant>
{
  provider: AuthProviderType
}

export const SignInWithExternalProviderButton = (
  { provider, variant }: SignInWithExternalProviderButtonProps,
) => {
  const handleClick = async () => {
    await signIn(provider, { callbackUrl: "/challenges" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(signInWithExternalProviderButtonVariant({ variant }))}
    >
      Continue with&nbsp;
      {provider}
    </button>
  );
};
