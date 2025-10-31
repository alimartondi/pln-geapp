"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function MetaThemeColor() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    // Ambil warna background dari CSS variable ShadCN/Tailwind
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();

    if (color) meta.setAttribute("content", `hsl(${color})`);
  }, [theme, systemTheme]);

  return null;
}
