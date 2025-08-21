"use client";

import { Link as ScrollTo } from "react-scroll";
type NavLink = {
  to: string;
  label: string;
};

type MobileMenuProps = {
  links: NavLink[];
};

export default function DesktopMenu({ links }: MobileMenuProps) {
  return (
    <ul className="flex gap-6">
      {links.map((link, i) => (
        <li key={i}>
          <ScrollTo
            className="font-medium hover:underline transition-all duration-300 cursor-pointer"
            to={link.to}
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
          >
            {link.label}
          </ScrollTo>
        </li>
      ))}
    </ul>
  );
}
