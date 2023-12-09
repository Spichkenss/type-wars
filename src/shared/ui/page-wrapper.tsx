import { type PropsWithChildren } from "react";

interface PageWrapperProps extends PropsWithChildren {}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="pt-12">
        <div className="container">
          {children}
        </div>
      </div>
    </main>
  );
};
