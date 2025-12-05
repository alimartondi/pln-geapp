"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import MobileMenu from "@/components/layouts/mobile-menu";
import DesktopMenu from "@/components/layouts/desktop-menu";
import HeaderAction from "@/components/layouts/header-action";

import { Separator } from "@/components/ui/separator";
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
        isScrolled && "border-b shadow-xs backdrop-blur-xl bg-background/75",
        "sticky top-0 z-50 bg-background"
      )}
    >
      <div className="container-wrapper">
        <nav className="flex justify-between py-2 items-center lg:py-6">
          <div
            className="flex gap-2 items-center cursor-pointer h-9"
            onClick={scrollToTop}
          >
            <Image
              src="/images/PLN-Logo-Mark.svg"
              alt="PLN Logo"
              width={36}
              height={36}
            />
            <Separator orientation="vertical" className="ml-1" />
            <Image
              src="/images/GEAPP-Logo-Mark.svg"
              alt="GEAPP Logo"
              width={38}
              height={36}
            />
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
    to: "overview",
    label: "Overview",
  },
  {
    to: "about",
    label: "About",
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
