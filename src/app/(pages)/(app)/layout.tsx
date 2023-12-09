import { PageWrapper } from "@/shared/ui/page-wrapper";
import { Navbar } from "@/widgets/navbar";
import { type PropsWithChildren } from "react";

interface AppLayoutProps extends PropsWithChildren { }

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Navbar />
      <PageWrapper>
        {children}
      </PageWrapper>
    </div>
  );
}
