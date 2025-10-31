// src/lib/parseKmz.ts
import JSZip from "jszip";
import type { FeatureCollection } from "geojson";
import { kml as kmlToGeoJSON } from "@tmcw/togeojson";

async function fetchArrayBuffer(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.arrayBuffer();
}

/**
 * parseKmzFromUrl
 * - Hanya dipakai pada client (browser). Akan error jika dipanggil di server (Node).
 */
export async function parseKmzFromUrl(url: string): Promise<FeatureCollection> {
  if (typeof window === "undefined") {
    throw new Error(
      "parseKmzFromUrl must be called from client-side (browser)"
    );
  }

  const arrayBuffer = await fetchArrayBuffer(url);
  const zip = await JSZip.loadAsync(arrayBuffer);

  const kmlEntry = Object.keys(zip.files).find((n) =>
    n.toLowerCase().endsWith(".kml")
  );
  if (!kmlEntry) throw new Error("No .kml found inside KMZ");

  const kmlText = await zip.file(kmlEntry)!.async("text");

  // Use native DOMParser in browser
  const parser = new DOMParser();
  const kmlDoc = parser.parseFromString(kmlText, "text/xml");

  // convert to GeoJSON (togeojson.kml expects a Document)
  // togeojson typings are loose; cast to any
  const geojson = kmlToGeoJSON(kmlDoc);
  return geojson as FeatureCollection;
}
