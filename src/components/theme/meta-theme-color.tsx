"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function MetaThemeColor() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');

    // Pastikan tag meta ada, kalau belum kita buat
    if (!meta) {
      const newMeta = document.createElement("meta");
      newMeta.name = "theme-color";
      document.head.appendChild(newMeta);
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    // Warna hex sesuai mode
    const color = currentTheme === "dark" ? "#0a0a0a" : "#ffffff";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
  }, [theme, systemTheme]);

  return null;
}
