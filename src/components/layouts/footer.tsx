"use client";

import Image from "next/image";
import Link from "next/link";

import { Link as ScrollTo } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-10 pb-6 lg:pb-8 bg-secondary">
      <div className="container-wrapper flex flex-col gap-6 lg:gap-8">
        <div className="flex items-center flex-col lg:flex-row gap-6 justify-between">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/GEAPP-PLN-Logo.svg"
              width={317}
              height={36}
              alt="GEAPP - PLN Logo"
              className="w-full h-auto"
            />
          </div>
          <ul className="justify-between gap-6 hidden md:flex">
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

        <div className="space-y-3">
          <hr className="opacity-75" />

          <div className="flex justify-between gap-4 items-center text-gray-500">
            <div>
              <small className="text-gray-300">
                &copy; {new Date().getFullYear()} Company | All rights reserved.
              </small>
            </div>
            <div className="flex-1 flex gap-2 justify-end">
              <small className="text-gray-300">Privacy Policy</small>
            </div>
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
