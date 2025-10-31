"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON as RLGeoJSON,
} from "react-leaflet";
import L from "leaflet";
import type { FeatureCollection, Feature, Point } from "geojson";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FileDown } from "lucide-react";
import type { MarkerData } from "@/types/map.type";
import { Markers } from "@/data/markers";
import { parseKmzFromUrl } from "@/lib/parseKmz";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function Map() {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (marker: MarkerData) => {
    if (downloading) return;
    setDownloading(true);

    const link = document.createElement("a");
    link.href = marker.image;
    link.download = `${marker.name}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(false), 2000);
  };

  useEffect(() => {
    async function loadKmz() {
      try {
        const data = await parseKmzFromUrl("/maps/location.kmz");
        setGeoData(data);
      } catch (err) {
        console.error("Error loading KMZ:", err);
      }
    }
    loadKmz();
  }, []);

  return (
    <MapContainer
      center={[-2.5489, 117.924]}
      zoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />

      {/* 🟢 Tampilkan polygon & garis dari KMZ, tapi jangan tampilkan point */}
      {geoData && (
        <RLGeoJSON
          data={geoData}
          filter={(feature) => feature.geometry?.type !== "Point"}
          style={() => ({ color: "red", weight: 2 })}
        />
      )}

      {/* 🟢 Marker custom dari KMZ point */}
      {geoData?.features
        ?.filter(
          (f): f is Feature<Point, { name?: string }> =>
            f.geometry?.type === "Point"
        )
        .map((f, i: number) => {
          const [lng, lat] = f.geometry.coordinates as [number, number];
          const nameFromKmz = (f.properties?.name ?? "").toLowerCase().trim();

          const info = Markers.find((m) => {
            const markerName = m.name.toLowerCase().trim();
            return (
              nameFromKmz.includes(markerName) ||
              markerName.includes(nameFromKmz)
            );
          });

          return (
            <Marker key={i} position={[lat, lng]} icon={icon}>
              <Popup className="map-popup">
                {info ? (
                  <div className="flex flex-col gap-4 p-5">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{info.name}</h3>
                      <span className="text-sm block text-muted-foreground">
                        {info.region}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Capacity</span>
                        <span className="text-sm font-semibold">
                          {info.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Land Size</span>
                        <span className="text-sm font-semibold">
                          {info.landSize}
                        </span>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => handleDownload(info)}
                        disabled={downloading}
                      >
                        {downloading ? "Downloading..." : "Download Site Image"}
                        <FileDown />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 p-5">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">
                        {f.properties?.name || "Unknown location"}
                      </h3>
                      {/* <span className="text-sm block text-muted-foreground">
                        {f.properties?.region || "Unknown region"}
                      </span> */}
                    </div>
                  </div>
                )}
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
}
