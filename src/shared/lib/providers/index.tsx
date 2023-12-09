"use client";

import { type PropsWithChildren } from "react";
import { ThemeProvider } from "./theme/ui/theme-provider";

interface ProvidersProps extends PropsWithChildren {}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
