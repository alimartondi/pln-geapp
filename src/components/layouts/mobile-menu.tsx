"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link as ScrollTo } from "react-scroll";
import { SwitchToggleTheme } from "@/components/theme/switch-toggle-theme";

type NavLink = {
  to: string;
  label: string;
};

type MobileMenuProps = {
  links: NavLink[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"lg"} className="has-[>svg]:p-0">
          <Menu className="size-8 text-muted-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} className="rounded-l-lg">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <ul className="px-4 space-y-1">
          {links.map((link, i) => (
            <li key={i}>
              <ScrollTo
                className="text-2xl cursor-pointer"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setOpen(false)} // tutup sheet saat klik link
              >
                {link.label}
              </ScrollTo>
            </li>
          ))}
        </ul>
        <div className="p-4 mt-auto">
          <SwitchToggleTheme />
        </div>
      </SheetContent>
    </Sheet>
  );
}
