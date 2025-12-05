"use client";

import { Link as ScrollTo } from "react-scroll";
import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function Register() {
  return (
    <section className="pb-12 lg:pb-20">
      <ScrollWrapper name="register" className="container-wrapper">
        <div className="relative aspect-3/4 rounded-lg md:aspect-16/11 lg:aspect-16/8 bg-[url('/images/register-image-background.png')] bg-cover bg-center after:absolute after:inset-0 after:bg-secondary/75 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
            <div className="max-w-4xl space-y-4 text-white lg:text-center">
              <h2 className="text-4xl lg:text-5xl lg:leading-tight font-bold">
                Let&apos;s Build a Brighter Future. Together.
              </h2>
              <p>
                Transforming Indonesia&apos;s energy landscape through renewable
                solar PV <br className="hidden lg:block" /> and battery energy
                storage systems.
              </p>
              <ScrollTo
                to="contact"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                className="inline-flex items-center justify-center px-5 py-2 h-11 bg-white/15 text-sm rounded-md backdrop-blur-sm border border-white hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
              >
                Register for Access
              </ScrollTo>
            </div>
          </div>
        </div>
      </ScrollWrapper>
    </section>
  );
}
