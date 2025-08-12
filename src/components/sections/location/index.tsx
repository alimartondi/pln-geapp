"use client";

import { useState } from "react";
import ScrollWrapper from "@/components/layouts/scroll-wrapper";
import { MarkerData } from "@/types/map.type";

import dynamic from "next/dynamic";
import MapSheetDetail from "./map-sheet-detail";

const Map = dynamic(() => import("@/components/sections/location/map"), {
  ssr: false,
});

export default function Location() {
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleMarkerSelect = (marker: MarkerData) => {
    setSelectedMarker(marker);
    setSheetOpen(true);
  };

  return (
    <section className="py-12 bg-muted/50 lg:py-20">
      <ScrollWrapper name="location" className="container-wrapper space-y-10">
        <div className="max-w-md space-y-4">
          <h2 className="text-4xl lg:text-5xl font-semibold">Site Locations</h2>
          <p className="text-pretty">
            View Solar PV & BESS Project Sites Across Indonesia
          </p>
        </div>

        <div className="aspect-3/4 md:aspect-16/11 lg:aspect-16/8 bg-muted rounded-md overflow-hidden border shadow-xs">
          <Map onMarkerSelect={handleMarkerSelect} />

          <MapSheetDetail
            marker={selectedMarker}
            open={sheetOpen}
            onOpenChange={setSheetOpen}
          />
        </div>
      </ScrollWrapper>
    </section>
  );
}
