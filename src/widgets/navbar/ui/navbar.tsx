import Link from "next/link";
import { Pages } from "@/app/config/pages";
import { SignedIn, SignedOut } from "@/shared/lib/wrappers";

import { Button } from "@/shared/ui/button";
import { ThemeSwitcher } from "@/shared/lib/providers/theme";
import { UserAvatarMenu } from "@/widgets/user-avatar-menu";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex w-full bg-background shadow-sm">
      <nav className="container flex h-12 items-center justify-between">
        <Link href={Pages.home} className="text-xl font-bold">Typewars</Link>
        <div className="flex flex-row items-center">
          <ThemeSwitcher />
          <SignedOut>
            <Button asChild variant="link">
              <Link href={Pages.signin}>
                Sign in
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserAvatarMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};
