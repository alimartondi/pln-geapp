"use client";

import { ThemeToggle } from "@/components/theme/toggle-theme";
import { Button } from "../ui/button";
import { Link as ScrollTo } from "react-scroll";
import { Separator } from "../ui/separator";
import { useAuth } from "@/components/auth/auth-context";
import { LogOut } from "lucide-react";

export default function HeaderAction() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="flex items-center gap-3 h-10">
      <Button asChild>
        <ScrollTo
          to="contact"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
        >
          Request Full Report
        </ScrollTo>
      </Button>

      <Separator orientation="vertical" />

      <ThemeToggle />

      {isAuthenticated && (
        <>
          <Separator orientation="vertical" />
          <Button
            variant="outline"
            aria-label="Logout button"
            onClick={async () => {
              await logout();
            }}
          >
            <LogOut className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </>
      )}
    </div>
  );
}
