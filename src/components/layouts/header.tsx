import React from "react";
import { Zap } from "lucide-react";
import MobileMenu from "@/components/layouts/mobile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container-wrapper">
        <nav className="flex justify-between py-3">
          <div className="flex gap-2 items-center">
            <div className="h-8 w-8 bg-yellow-400 flex items-center justify-center rounded-md">
              <Zap fill="#D34036" stroke="#D34036" className="size-4" />
            </div>
            <h3 className="text-xl font-semibold tracking-wider text-primary">
              PLN
            </h3>
          </div>

          <MobileMenu links={navLinks} />

          {/* <div>
            <ToggleTheme />
          </div> */}
        </nav>
      </div>
    </header>
  );
}

const navLinks = [
  {
    to: "/",
    label: "Overview",
  },
  {
    to: "/",
    label: "Locations",
  },
  {
    to: "/",
    label: "Clusters",
  },
  {
    to: "/",
    label: "Register",
  },
];
