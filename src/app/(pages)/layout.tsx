import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import { Navbar } from "@/widgets/navbar";
import { Providers } from "@/shared/lib/providers";
import { PageWrapper } from "@/shared/ui/page-wrapper";
import { inter } from "@/shared/fonts";
import "../config/style/globals.css";

export const metadata: Metadata = {
  title: "Typewars",
};

interface RootLayoutProps extends PropsWithChildren { }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
