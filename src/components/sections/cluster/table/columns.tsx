"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ClusterTableRow } from "@/types/cluster.type";
import { Badge } from "@/components/ui/badge";
import { CircleCheck, Clock6 } from "lucide-react";

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

  { accessorKey: "siteName", header: "Site Name" },

  {
    header: "Identification",
    columns: [
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
      {
        accessorKey: "esia",
        header: "ESIA",
        cell: ({ row }) => {
          const value = row.getValue("esia") as string | null;
          if (!value) return null;

          const statusMap: Record<
            string,
            {
              variant: "success" | "warning" | "secondary";
              icon: React.ElementType;
              bg: string;
            }
          > = {
            completed: {
              variant: "success",
              icon: CircleCheck,
              bg: "bg-success-foreground",
            },
            pending: {
              variant: "warning",
              icon: Clock6,
              bg: "bg-warning-foreground",
            },
          };

          const statusKey = value.toLowerCase();
          const status = statusMap[statusKey] || statusMap["failed"]; // default kalau tidak ada

          const Icon = status.icon;

          return (
            <Badge variant={status.variant} className="gap-2">
              <Icon className="size-3" strokeWidth={2} />
              {value}
            </Badge>
          );
        },
      },
      { accessorKey: "uklUpl", header: "UKL/UPL" },
      { accessorKey: "hazards", header: "Hazards" },
      { accessorKey: "climate", header: "Climate" },
      { accessorKey: "esPlans", header: "E&S Plans" },
    ],
  },
];
