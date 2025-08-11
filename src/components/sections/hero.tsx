"use client";

import { Link as ScrollTo } from "react-scroll";

export default function Hero() {
  return (
    <section className="py-1">
      <div className="container-wrapper h-full grid gap-6">
        <div className="relative bg-[url('/images/Hero-Image-by-Kindel-Media.webp')] h-[calc(100dvh-110px)] max-h-[650px] rounded-lg after:absolute after:inset-0 bg-cover bg-center after:bg-gradient-to-t after:from-secondary/95 after:to-secondary/30 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
            <div className="max-w-3xl space-y-4 text-white lg:text-center">
              <h1 className="text-4xl lg:text-5xl lg:leading-tight font-bold">
                Driving a Greener Indonesia: The Diesel Replacement Program
              </h1>
              <p className="text-lg text-pretty">
                Transforming Indonesia&apos;s energy landscape through renewable
                solar PV <br className="hidden lg:block" /> and battery energy
                storage systems
              </p>

              <ScrollTo
                to="cluster"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                className="inline-flex items-center justify-center px-5 py-2 h-11 bg-white/15 text-sm rounded backdrop-blur-sm border border-white hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
              >
                Explore Sites
              </ScrollTo>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="relative w-full h-[200px] rounded-md overflow-hidden bg-[url('/images/indonesia-map.png')] bg-center bg-[#C4E7ED] after:absolute after:inset-0 after:bg-gradient-to-tr after:from-primary after:from-30%">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="p-6 space-y-2 w-full text-white">
                <h2 className="text-4xl font-bold">45 +</h2>
                <span className="block">Total Sites for Solar PV & BESS</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[200px] rounded-md overflow-hidden bg-[url('/images/solar-panel.png')] bg-cover after:absolute after:inset-0 after:bg-gradient-to-tr after:from-tertiary after:from-30%">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="p-6 space-y-2 w-full text-gray-900">
                <h2 className="text-4xl font-bold">6 +</h2>
                <span className="block">Regional Clusters</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[200px] p-4 rounded-md bg-[url('/images/windmills-fuel-and-power-generation.png')] bg-contain bg-right bg-no-repeat bg-secondary">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="p-6 space-y-2 w-full text-white">
                <h2 className="relative text-4xl font-bold">
                  54,902{" "}
                  <span className="absolute text-xs bg-tertiary px-1 py-.5 text-gray-900 rounded-full ml-1">
                    kWh
                  </span>
                </h2>
                <span className="block">Total Capacity</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8" />
      </div>
    </section>
  );
}
