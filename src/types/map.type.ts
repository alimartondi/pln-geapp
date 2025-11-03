export interface MarkerData {
  id: number;
  name: string;
  lat: number;
  lng: number;
  capacity: string;
  landSize: string;
  status: "Confirmed" | "Pending" | "Cancelled" | "Planned";
  region: string;
  pdf: string;
}
