"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { MarkerData } from "@/types/map.type";
import { useState } from "react";
import { FileDown } from "lucide-react";
import { jsPDF } from "jspdf";

interface MapClientProps {
  onMarkerSelect: (marker: MarkerData) => void;
}

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const markers: MarkerData[] = [
  {
    id: 1,
    name: "Sungai Bela",
    lat: -0.38696,
    lng: 103.58886,
    capacity: "596 kW",
    landSize: "1.4253 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 2,
    name: "Sungai Buluh",
    lat: -0.41682,
    lng: 103.59338,
    capacity: "200 kW",
    landSize: "0.7302 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 3,
    name: "Sungai Laut",
    lat: -0.50706,
    lng: 103.50688,
    capacity: "340 kW",
    landSize: "0.8759 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 4,
    name: "Tanjung Pasir",
    lat: -0.51684,
    lng: 103.40774,
    capacity: "200 kW",
    landSize: "0.85 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 5,
    name: "Alai",
    lat: 0.65503,
    lng: 103.48224,
    capacity: "1,001 kW",
    landSize: "2.1915 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 6,
    name: "Teluk Lanus",
    lat: 0.73786,
    lng: 102.84745,
    capacity: "200 kW",
    landSize: "2.2767 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 7,
    name: "Daek Lingga",
    lat: -0.18241,
    lng: 104.6762,
    capacity: "4,599 kW",
    landSize: "10.4892 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 8,
    name: "Ladan",
    lat: 3.31524,
    lng: 106.261,
    capacity: "4,306 kW",
    landSize: "10.1602 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 9,
    name: "Tarempa",
    lat: 3.22498,
    lng: 106.23177,
    capacity: "5,976 kW",
    landSize: "2.5802 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 10,
    name: "Penarah",
    lat: 0.80615,
    lng: 103.52073,
    capacity: "940 kW",
    landSize: "5.6853 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 11,
    name: "Penuba",
    lat: -0.32183,
    lng: 104.45169,
    capacity: "1,260 kW",
    landSize: "3.0091 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 12,
    name: "Pangkil",
    lat: 0.82063,
    lng: 104.35882,
    capacity: "360 kW",
    landSize: "1.1717 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 13,
    name: "Nyamuk",
    lat: 3.13915,
    lng: 106.33099,
    capacity: "605 kW",
    landSize: "2.251 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 14,
    name: "Mubur",
    lat: 3.29985,
    lng: 106.21735,
    capacity: "528 kW",
    landSize: "0.5505 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 15,
    name: "Sanglar",
    lat: 0.61753,
    lng: 103.7031,
    capacity: "250 kW",
    landSize: "0.3949 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 16,
    name: "Buluh Patah",
    lat: 0.78048,
    lng: 103.93801,
    capacity: "200 kW",
    landSize: "2.2041 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 17,
    name: "Ngal",
    lat: 0.67913,
    lng: 103.586,
    capacity: "66 kW",
    landSize: "0.3976 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 18,
    name: "Pulau Duyung",
    lat: 0.35741,
    lng: 104.47036,
    capacity: "40 kW",
    landSize: "1.0355 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 19,
    name: "Pulau Bukit",
    lat: 0.44705,
    lng: 104.4325,
    capacity: "65 kW",
    landSize: "0.952 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 20,
    name: "Impol",
    lat: 3.08915,
    lng: 105.7245,
    capacity: "100 kW",
    landSize: "1.5132 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 21,
    name: "Dabo Singkep",
    lat: -0.48124,
    lng: 104.55826,
    capacity: "8.2 kW",
    landSize: "10.9121 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 22,
    name: "Berhala",
    lat: -0.85853,
    lng: 104.40707,
    capacity: "140 kW",
    landSize: "0.9104 hectares",
    status: "Pending",
    region: "Riau & Kepri",
  },
  {
    id: 23,
    name: "Belibak",
    lat: 3.30644,
    lng: 106.3051,
    capacity: "40 kW",
    landSize: "1.1491 hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 24,
    name: "Air Putih",
    lat: 3.13662,
    lng: 106.29881,
    capacity: "40 kW",
    landSize: "1.2346 hectares",
    status: "Confirmed",
    region: "Riau & Kepri",
  },
  {
    id: 25,
    name: "Kundur",
    lat: 0.84125,
    lng: 103.37349,
    capacity: "7.62 kW",
    landSize: "null hectares",
    status: "Planned",
    region: "Riau & Kepri",
  },
  {
    id: 26,
    name: "Jongkong",
    lat: 0.6403,
    lng: 112.27895,
    capacity: "2,009 kW",
    landSize: "4.7795 hectares",
    status: "Confirmed",
    region: "Kalimantan",
  },
  {
    id: 27,
    name: "Kayan Hulu",
    lat: 1.79959,
    lng: 114.90442,
    capacity: "900 kW",
    landSize: "null hectares",
    status: "Pending",
    region: "Kalimantan",
  },
  {
    id: 28,
    name: "Labang",
    lat: 4.29836,
    lng: 116.41648,
    capacity: "40 kW",
    landSize: "0.9674 hectares",
    status: "Planned",
    region: "Kalimantan",
  },
  {
    id: 29,
    name: "Long Layu",
    lat: 3.61341,
    lng: 115.69567,
    capacity: "100 kW",
    landSize: "1.2228 hectares",
    status: "Confirmed",
    region: "Kalimantan",
  },
  {
    id: 30,
    name: "Pa Upan",
    lat: 3.56165,
    lng: 115.75979,
    capacity: "50 kW",
    landSize: "null hectares",
    status: "Planned",
    region: "Kalimantan",
  },
  {
    id: 31,
    name: "Sei Menggaris",
    lat: 4.16664,
    lng: 117.26233,
    capacity: "1,300 kW",
    landSize: "4.4966 hectares",
    status: "Pending",
    region: "Kalimantan",
  },
  {
    id: 32,
    name: "Tanah Merah",
    lat: 3.66716,
    lng: 117.54281,
    capacity: "1,310 kW",
    landSize: "4.0598 hectares",
    status: "Confirmed",
    region: "Kalimantan",
  },
  {
    id: 33,
    name: "Salingkere",
    lat: 3.09693,
    lng: 125.49318,
    capacity: "40 kW",
    landSize: "0.7402 hectares",
    status: "Pending",
    region: "North Sulawesi",
  },
  {
    id: 34,
    name: "Bebalang",
    lat: 3.33744,
    lng: 125.57096,
    capacity: "120 kW",
    landSize: "1.0453 hectares",
    status: "Planned",
    region: "North Sulawesi",
  },
  {
    id: 35,
    name: "Makalehi",
    lat: 2.73528,
    lng: 125.16525,
    capacity: "385 kW",
    landSize: "2.7737 hectares",
    status: "Confirmed",
    region: "North Sulawesi",
  },
  {
    id: 36,
    name: "Kalama",
    lat: 3.23829,
    lng: 125.4505,
    capacity: "235 kW",
    landSize: "null hectares",
    status: "Pending",
    region: "North Sulawesi",
  },
  {
    id: 37,
    name: "Mahengetang",
    lat: 3.14496,
    lng: 125.45415,
    capacity: "135 kW",
    landSize: "1.4987 hectares",
    status: "Planned",
    region: "North Sulawesi",
  },
  {
    id: 38,
    name: "Siau",
    lat: 2.76063,
    lng: 125.37924,
    capacity: "5.64 kW",
    landSize: "6.1155 hectares",
    status: "Confirmed",
    region: "North Sulawesi",
  },
  {
    id: 39,
    name: "Bangkurung",
    lat: -1.91343,
    lng: 123.08117,
    capacity: "1.72 kW",
    landSize: "2.0574 hectares",
    status: "Pending",
    region: "North Sulawesi",
  },
  {
    id: 40,
    name: "Siladen",
    lat: 1.63135,
    lng: 124.80381,
    capacity: "320 kW",
    landSize: "1.3236 hectares",
    status: "Planned",
    region: "North Sulawesi",
  },
  {
    id: 41,
    name: "Waibalun",
    lat: -8.31703,
    lng: 122.91943,
    capacity: "7.76 kW",
    landSize: "27.7383 hectares",
    status: "Confirmed",
    region: "NTT",
  },
  {
    id: 42,
    name: "Kedi",
    lat: 1.67139,
    lng: 127.5898,
    capacity: "977 kW",
    landSize: "2.3641 hectares",
    status: "Planned",
    region: "Maluku",
  },
  {
    id: 43,
    name: "Dagasuli",
    lat: 2.18527,
    lng: 127.74855,
    capacity: "200 kW",
    landSize: "4.8357 hectares",
    status: "Pending",
    region: "Maluku",
  },
  {
    id: 44,
    name: "Dama",
    lat: 2.22715,
    lng: 127.79978,
    capacity: "538 kW",
    landSize: "2.3392 hectares",
    status: "Confirmed",
    region: "Maluku",
  },
  {
    id: 45,
    name: "Lonthoir",
    lat: -4.5475,
    lng: 129.89515,
    capacity: "1.45 kW",
    landSize: "2.7649 hectares",
    status: "Pending",
    region: "Maluku",
  },
  {
    id: 46,
    name: "Saparua",
    lat: -3.57365,
    lng: 128.64346,
    capacity: "3.67 kW",
    landSize: "8.44 hectares",
    status: "Planned",
    region: "Maluku",
  },
  {
    id: 47,
    name: "Wahai",
    lat: -2.79591,
    lng: 129.5029,
    capacity: "2,168 kW",
    landSize: "12.6698 hectares",
    status: "Confirmed",
    region: "Maluku",
  },
];
export default function Map({ onMarkerSelect }: MapClientProps) {
  const [key] = useState(() => Date.now());

  return (
    <MapContainer
      key={key}
      center={[-2.5489, 117.924]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />

      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]} icon={icon}>
          <Popup className="map-popup">
            <div className="flex flex-col gap-4 p-5">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{marker.name}</h3>
                <span className="text-sm block text-muted-foreground">
                  {marker.region}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Capacity</span>
                  <span className="text-sm font-semibold">
                    {marker.capacity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Land Size</span>
                  <span className="text-sm font-semibold">
                    {marker.landSize}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Status</span>
                  <Badge className="bg-[#f0f9ff] text-[#0ba5ec]">
                    {marker.status}
                  </Badge>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = " /documents/sample.pdf"; // path relatif dari folder public
                    link.download = "sample.pdf"; // nama file yang di-download
                    link.click();
                  }}
                >
                  Download Site Profile
                  <FileDown />
                </Button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
