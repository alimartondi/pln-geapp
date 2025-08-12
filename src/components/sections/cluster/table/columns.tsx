"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ClusterTableRow } from "@/types/cluster.type";

export const columns: ColumnDef<ClusterTableRow>[] = [
  {
    id: "clusterId",
    accessorKey: "clusterId",
    header: () => null,
    cell: () => null,
    enableSorting: false,
    enableHiding: true,
    size: 0,
    minSize: 0,
    maxSize: 0,
  },

  {
    header: "Identification",
    columns: [
      { accessorKey: "siteName", header: "Site Name" },
      { accessorKey: "province", header: "Province" },
      { accessorKey: "lat", header: "Lat" },
      { accessorKey: "lng", header: "Long" },
    ],
  },
  {
    header: "Business & Economic",
    columns: [
      { accessorKey: "bpp", header: "BPP $/kWh" },
      { accessorKey: "ace", header: "ACE MWh/yr" },
      { accessorKey: "solarKw", header: "Solar kW" },
      { accessorKey: "pltdKw", header: "PLTD kW" },
      { accessorKey: "genMwh", header: "Gen MWh" },
      { accessorKey: "solarPercent", header: "Solar %" },
    ],
  },
  {
    header: "Technical",
    columns: [
      { accessorKey: "resource", header: "Resource" },
      { accessorKey: "areaHa", header: "Area ha" },
      { accessorKey: "gradientPercent", header: "Gradient %" },
      { accessorKey: "voltageKv", header: "Voltage kV" },
      { accessorKey: "distKm", header: "Dist km" },
      { accessorKey: "existKw", header: "Exist kW" },
      { accessorKey: "generator", header: "Generator" },
    ],
  },
  {
    header: "Logistics",
    columns: [
      { accessorKey: "roadM", header: "Road m" },
      { accessorKey: "portKm", header: "Port km" },
      { accessorKey: "portCap", header: "Port Cap" },
      { accessorKey: "complex", header: "Complex" },
    ],
  },
  {
    header: "Regulatory & Risk",
    columns: [
      { accessorKey: "ifcCat", header: "IFC Cat" },
      { accessorKey: "esia", header: "ESIA" },
      { accessorKey: "uklUpl", header: "UKL/UPL" },
      { accessorKey: "hazards", header: "Hazards" },
      { accessorKey: "climate", header: "Climate" },
      { accessorKey: "esPlans", header: "E&S Plans" },
    ],
  },
];
