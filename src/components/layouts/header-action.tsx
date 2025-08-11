"use client";

import { ToggleTheme } from "@/components/theme/toggle-theme";
import { Button } from "../ui/button";
import { Link as ScrollTo } from "react-scroll";

export default function HeaderAction() {
  return (
    <div className="flex items-center gap-4">
      <Button asChild>
        <ScrollTo
          to="contact"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
        >
          Sign In
        </ScrollTo>
      </Button>
      <ToggleTheme />
    </div>
  );
}
