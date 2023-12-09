import { type PropsWithChildren } from "react";

interface AppLayoutProps extends PropsWithChildren { }

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
