"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { Link as ScrollTo } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 bg-secondary">
      <div className="container-wrapper flex flex-col gap-4 lg:gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 items-center">
            <div className="h-10 w-10 bg-yellow-400 flex items-center justify-center rounded-md">
              <Zap fill="#D34036" stroke="#D34036" className="size-4" />
            </div>
            <h3 className="text-2xl font-semibold tracking-wider text-white">
              PLN
            </h3>
          </div>
          <ul className="flex justify-between gap-6">
            {footerLinks.map((link, i) => (
              <li key={i}>
                <ScrollTo
                  className="text-white/75 hover:underline hover:text-white transition-all duration-300 cursor-pointer"
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
          <Link
            href="/"
            className="text-white/75 hover:underline hover:text-white transition-all duration-300"
          >
            info@company.com
          </Link>
        </div>

        <hr className="opacity-75" />

        <div className="flex justify-between gap-4 items-center text-gray-500">
          <div>
            <small className="text-gray-300">
              &copy; {new Date().getFullYear()} Company
            </small>
          </div>
          <div className="flex-1 flex gap-2 justify-end">
            <small className="text-gray-300">Privacy Policy</small>
            <small className="text-gray-300">Terms & Conditions</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
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
