"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 xl:py-10 bg-secondary">
      <div className="container-wrapper flex flex-col gap-6 lg:gap-8">
        <div className="flex items-center flex-col lg:flex-row gap-8 justify-between">
          <div className="flex items-center divide-x">
            <Link
              href="https://web.pln.co.id/"
              target="_blank"
              className="pr-5"
            >
              <Image
                src="/images/PLN-Logo.svg"
                alt="GEAPP - PLN Logo"
                width={101}
                height={36}
                className="w-full h-auto"
              />
            </Link>
            <Link
              href="https://energyalliance.org/"
              target="_blank"
              className="pl-4"
            >
              <Image
                src="/images/GEAPP-LOGO-HORIZONTAL-REVERSED.svg"
                alt="GEAPP Logo"
                width={192}
                height={36}
                className="w-full h-auto"
              />
            </Link>
          </div>

          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} PLN - GEAPP | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
