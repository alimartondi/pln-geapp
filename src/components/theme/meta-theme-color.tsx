"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * Mengatur warna <meta name="theme-color">
 * agar mengikuti theme (light/dark/system) secara real-time.
 */
export function MetaThemeColor() {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Tentukan warna sesuai theme
    const color =
      resolvedTheme === "dark"
        ? "#09090b" // background dark
        : "#ffffff"; // background light

    // Ambil atau buat meta tag
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    // Set warna theme
    meta.setAttribute("content", color);
  }, [theme, resolvedTheme]);

  return null;
}
