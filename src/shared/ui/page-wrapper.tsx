import { PropsWithChildren } from "react";

interface PageWrapperProps extends PropsWithChildren {}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grow bg-red-100 pt-12">
        <div className="container">
          {children}
        </div>
      </div>
    </main>
  );
};
