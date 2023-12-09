"use client";

import Link from "next/link";
import { Pages } from "@/app/config/pages";
import { signIn } from "next-auth/react";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex w-full bg-background shadow-sm">
      <nav className="container flex h-12 items-center justify-between">
        <Link href={Pages.Home} className="text-xl font-bold">Typewars</Link>
        <button type="button" onClick={() => signIn("google")}>Login</button>
      </nav>
    </header>
  );
}
