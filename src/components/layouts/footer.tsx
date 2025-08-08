import { Zap } from "lucide-react";
import Link from "next/link";

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
                <a
                  className="text-white/75 hover:underline hover:text-white transition-all duration-300"
                  href={link.to}
                >
                  {link.label}
                </a>
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
            <small className="text-accent">
              &copy; {new Date().getFullYear()} Company
            </small>
          </div>
          <div className="flex-1 flex gap-2 justify-end">
            <small className="text-accent">Privacy Policy</small>
            <small className="text-accent">Terms & Conditions</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
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
