"use client";

import { AuthProvider } from "@/components/auth/auth-context";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MetaThemeColor } from "@/components/theme/meta-theme-color";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MetaThemeColor />
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
