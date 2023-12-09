import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";
import "../globals.css";
import { Providers } from "@/shared/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typewars",
};

interface RootLayoutProps extends PropsWithChildren { }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
