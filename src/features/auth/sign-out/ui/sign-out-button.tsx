"use client";

import { Icon } from "@/shared/ui/icon";
import { Button } from "@/shared/ui/button";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  const handleClick = async () => {
    await signOut();
  };

  return (
    <Button
      onClick={handleClick}
      variant="text"
      size="fit"
      className="space-x-1 font-medium text-red-500"
    >
      <Icon
        name="Logout"
        className="h-4 w-4"
      />
      <span>Log out</span>
    </Button>
  );
};
