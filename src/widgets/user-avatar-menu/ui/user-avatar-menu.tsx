import Image from "next/image";
import { getCurrentUser } from "@/shared/lib/session";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { SignOutButton } from "@/features/auth/sign-out";
import { suspened } from "@/shared/lib/hocs/suspened";
import { UserAvatarMenuSkeleton } from "@/widgets/user-avatar-menu/ui/user-avatar-menu-skeleton";

const UserAvatarMenu = async () => {
  await new Promise((resolve) => { setTimeout(resolve, 3000); });
  const user = await getCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ml-4 cursor-pointer">
        <Image
          src={user?.image || ""}
          alt="avatar"
          width={35}
          height={35}
          className="rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          My account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="items-center gap-1">
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default suspened(UserAvatarMenu, UserAvatarMenuSkeleton);
