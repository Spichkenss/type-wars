import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import "./globals.css";
import { Navbar } from "@/widgets/navbar";
import { PageWrapper } from "@/shared/ui/page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typewars",
};

interface RootLayoutProps extends PropsWithChildren { }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
