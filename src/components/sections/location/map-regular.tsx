import { MapContainer, TileLayer } from "react-leaflet";

export default function MapRegular() {
  return (
    <MapContainer
      center={[-2.5489, 117.924]}
      zoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
