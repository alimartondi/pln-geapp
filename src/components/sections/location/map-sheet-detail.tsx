"use client";

import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import type { MarkerData } from "@/types/map.type";
import Image from "next/image";

interface MapSheetDetailProps {
  marker: MarkerData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MapSheetDetail({
  marker,
  open,
  onOpenChange,
}: MapSheetDetailProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-xl h-[95dvh]">
        {marker && (
          <>
            <SheetHeader aria-describedby={undefined}>
              <SheetTitle>PLTD Sungai Laut Site Synopsis</SheetTitle>
              <SheetDescription />
            </SheetHeader>
            <div className="px-4 pb-4 overflow-y-auto flex flex-col lg:flex-row gap-6">
              <div className="basis-full lg:basis-8/12 flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                  <div className="w-full md:w-1/2 flex flex-col gap-4 border rounded-md overflow-hidden p-4">
                    <h3 className="text-lg font-semibold">
                      Technical & Finance
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Capacity
                        </span>
                        <Badge variant={"info"}>2.5 MW</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          LCOE
                        </span>
                        <Badge variant={"info"}>$0.12/kWh</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          ACE
                        </span>
                        <Badge variant={"info"}>4.200 MWH/yr</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          CAPEX Estimate
                        </span>
                        <Badge variant={"warning"}>$3.2M</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Expected IRR
                        </span>
                        <Badge variant={"info"}>15.2%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Payback Period
                        </span>
                        <Badge variant={"info"}>6.8 years</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Grid Connection (250m)
                        </span>
                        <Badge variant={"success"}>Ready</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Solar Irradiance
                        </span>
                        <Badge variant={"info"}>4.8 kWh/m²/day</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col gap-4 border rounded-md overflow-hidden p-4">
                    <h3 className="text-lg font-semibold">
                      Development Readiness
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Timeline to Operation
                        </span>
                        <Badge variant={"warning"}>18-24 months</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Grid Connection (250m)
                        </span>
                        <Badge variant={"success"}>Ready</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Road Access (257m)
                        </span>
                        <Badge variant={"success"}>Good</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Terrain (3.5% slope)
                        </span>
                        <Badge variant={"success"}>Favorable</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          PPA Status
                        </span>
                        <Badge variant={"warning"}>PLN Committed</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Local Content Req.
                        </span>
                        <Badge variant={"warning"}>35% TKDN</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                  <div className="w-full md:w-1/2 flex flex-col gap-4 border rounded-md overflow-hidden p-4">
                    <h3 className="text-lg font-semibold">Approval Pathway</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Licensing Pathway
                        </span>
                        <Badge variant={"warning"}>UKL/UPL</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Land Registration
                        </span>
                        <Badge variant={"error"}>Tier 4</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          State Forest Overlap
                        </span>
                        <Badge variant={"info"}>100%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Disputed Lands
                        </span>
                        <Badge variant={"success"}>None</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Forest Moratorium
                        </span>
                        <Badge variant={"success"}>None</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Land Type
                        </span>
                        <Badge variant={"warning"}>Degraded Mangrove</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col gap-4 border rounded-md overflow-hidden p-4">
                    <h3 className="text-lg font-semibold">
                      E & S Operational Resilience
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Land Acquisition
                        </span>
                        <Badge variant={"warning"}>Moderate</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Community Support
                        </span>
                        <Badge variant={"success"}>Strong</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Preliminary ESIA
                        </span>
                        <Badge variant={"error"}>Low Impact</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Multi-Hazard
                        </span>
                        <Badge variant={"warning"}>Medium Flood</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Climate Vulnerability
                        </span>
                        <Badge variant={"warning"}>Medium (46.9)</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Key Risk Factor
                        </span>
                        <Badge variant={"warning"}>Coastal Flooding</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-2 lg:hidden" />

              <div className="w-full lg:w-4/12 flex flex-col md:flex-row lg:flex-col gap-4">
                <div className="relative aspect-16/11 rounded-md overflow-hidden w-full">
                  <Image
                    src="/images/Picture1.png"
                    alt="Panel Solar"
                    fill
                    sizes="600px"
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-16/11 rounded-md overflow-hidden w-full">
                  <Image
                    src="/images/Picture2.jpg"
                    alt="Panel Solar"
                    fill
                    sizes="600px"
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
