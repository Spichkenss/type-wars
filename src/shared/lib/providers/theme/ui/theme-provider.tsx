"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type PropsWithChildren, useEffect, useState } from "react";

interface ThemeProviderProps extends PropsWithChildren { }

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      storageKey="theme"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};
