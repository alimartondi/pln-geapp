"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function SwitchToggleTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  // Cek tombol mana yang aktif
  const isSystemActive = theme === "system";
  const isLightActive = !isSystemActive && resolvedTheme === "light";
  const isDarkActive = !isSystemActive && resolvedTheme === "dark";

  return (
    <div className="flex border w-fit rounded-md overflow-x-hidden p-1">
      <Button
        variant="ghost"
        className={clsx(
          "w-10 h-10",
          isLightActive && "bg-muted text-muted-foreground"
        )}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-5" />
      </Button>
      <Button
        variant="ghost"
        className={clsx(
          "w-10 h-10",
          isSystemActive && "bg-muted text-muted-foreground"
        )}
        onClick={() => setTheme("system")}
      >
        <Monitor className="size-5" />
      </Button>
      <Button
        variant="ghost"
        className={clsx(
          "w-10 h-10",
          isDarkActive && "bg-muted text-muted-foreground"
        )}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-5" />
      </Button>
    </div>
  );
}
