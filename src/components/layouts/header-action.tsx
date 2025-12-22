"use client";

import Image from "next/image";

import { ThemeToggle } from "@/components/theme/toggle-theme";
import { Button } from "../ui/button";
import { Link as ScrollTo } from "react-scroll";
import { Separator } from "../ui/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { useAuth } from "@/components/auth/auth-context";
import { User } from "lucide-react";

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-10 w-10 rounded-md overflow-hidden cursor-pointer">
                <Image
                  src="/images/user-placeholder.png"
                  alt="avatar"
                  width={600}
                  height={600}
                />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={async () => {
                  await logout();
                }}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  );
}
