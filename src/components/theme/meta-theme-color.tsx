"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function MetaThemeColor() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    const isDark =
      theme === "dark" || (theme === "system" && systemTheme === "dark");

    // Ambil nilai background dari CSS variable sesuai mode
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();

    if (color) {
      // Gunakan warna dari CSS variable
      meta.setAttribute(
        "content",
        color.startsWith("hsl(") ? color : `hsl(${color})`
      );
    } else {
      // fallback jika CSS variable tidak ditemukan
      meta.setAttribute("content", isDark ? "#0a0a0a" : "#ffffff");
    }
  }, [theme, systemTheme]);

  return null;
}
