"use client";

import { useState, useEffect, useCallback } from "react";
import { Zap } from "lucide-react";
import MobileMenu from "@/components/layouts/mobile-menu";
import DesktopMenu from "@/components/layouts/desktop-menu";
import HeaderAction from "@/components/layouts/header-action";
import clsx from "clsx";
import { animateScroll as scroll } from "react-scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutCubic",
    });
  }, []);

  return (
    <header
      className={clsx(
        isScrolled && "border-b shadow-xs",
        "sticky top-0 z-50 bg-background"
      )}
    >
      <div className="container-wrapper">
        <nav className="flex justify-between py-2 items-center lg:py-6">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="h-8 w-8 bg-yellow-400 flex items-center justify-center rounded-md">
              <Zap fill="#D34036" stroke="#D34036" className="size-4" />
            </div>
            <h3 className="text-xl font-semibold tracking-wider text-primary">
              PLN
            </h3>
          </div>
          <div className="lg:hidden">
            <MobileMenu links={navLinks} />
          </div>

          <div className="hidden lg:block">
            <DesktopMenu links={navLinks} />
          </div>

          <div className="hidden lg:block">
            <HeaderAction />
          </div>
        </nav>
      </div>
    </header>
  );
}

const navLinks = [
  {
    to: "about",
    label: "Overview",
  },
  {
    to: "location",
    label: "Locations",
  },
  {
    to: "cluster",
    label: "Clusters",
  },
  {
    to: "register",
    label: "Register",
  },
];
