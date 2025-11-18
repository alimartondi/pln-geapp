"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON as RLGeoJSON,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import type { FeatureCollection, Feature, Point } from "geojson";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import type { MarkerData } from "@/types/map.type";
import { Markers } from "@/data/markers";
import { parseKmzFromUrl } from "@/lib/parseKmz";
import { LayerGroup } from "react-leaflet";

// ======================================================
// Custom Icon
// ======================================================
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// ======================================================
// Hybrid Layer (Imagery + Labels)
// Dibungkus dalam component sendiri agar LayersControl bekerja benar
// ======================================================
function HybridLayer() {
  return (
    <LayersControl.BaseLayer name="Satellite">
      <LayerGroup>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
        />
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
        />
      </LayerGroup>
    </LayersControl.BaseLayer>
  );
}

export default function Map() {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [downloading, setDownloading] = useState(false);

  // OSM Tile URL
  const OSM_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const OSM_ATTR =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

  // ======================================================
  // PDF Download Handler
  // ======================================================
  const handleDownload = async (marker: MarkerData) => {
    if (downloading) return;
    setDownloading(true);

    try {
      const urlParts = marker.pdf.split("/");
      const fileName = urlParts[urlParts.length - 1];

      const response = await fetch(
        `/api/proxy-pdf?url=${encodeURIComponent(
          marker.pdf
        )}&name=${encodeURIComponent(fileName)}`
      );

      if (!response.ok) throw new Error("Failed to download PDF file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download PDF:", error);
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  };

  // ======================================================
  // Load KMZ upon mount
  // ======================================================
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

  // ======================================================
  // Render Component
  // ======================================================
  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={[-2.5489, 117.924]}
        zoom={5}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        {/* ========================================= */}
        {/* Base Layers (ONLY TWO)                    */}
        {/* ========================================= */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer url={OSM_URL} attribution={OSM_ATTR} />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite">
            <HybridLayer />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* ========================================= */}
        {/* KMZ Polygon (no points)                   */}
        {/* ========================================= */}
        {geoData && (
          <RLGeoJSON
            data={geoData}
            filter={(feature) => feature.geometry?.type !== "Point"}
            style={() => ({ color: "red", weight: 2 })}
          />
        )}

        {/* ========================================= */}
        {/* KMZ Points as Custom Marker               */}
        {/* ========================================= */}
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
                          {downloading ? "Downloading..." : "Download"}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 p-5">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                          {f.properties?.name || "Unknown location"}
                        </h3>
                      </div>
                    </div>
                  )}
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
}
