"use client";

import type { ComponentProps } from "react";

import { ThemeProvider as NextThemesProvider } from "@teispace/next-themes";

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
