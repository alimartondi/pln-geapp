"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function MetaThemeColor() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const meta = document.querySelector('meta[name="theme-color"]');

    if (meta) {
      if (currentTheme === "dark") {
        meta.setAttribute("content", "#09090b"); // warna gelap
      } else {
        meta.setAttribute("content", "#ffffff"); // warna terang
      }
    }
  }, [theme, systemTheme]);

  return null;
}
