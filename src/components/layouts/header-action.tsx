"use client";

import { ThemeToggle } from "@/components/theme/toggle-theme";
import { Button } from "../ui/button";
import { Link as ScrollTo } from "react-scroll";
import { Separator } from "../ui/separator";

export default function HeaderAction() {
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
    </div>
  );
}
