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

  {
    header: "",
    id: "dummyGroupForProjectName",
    columns: [
      {
        accessorKey: "projectName",
        header: ({ column }) => <div>Project Name</div>,
      },
    ],
  },

  {
    header: "Project Overview",
    columns: [
      { accessorKey: "cluster", header: "Geographic Cluster" },
      {
        accessorKey: "capacity",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Capacity</span>
            <Badge variant={"outline"}>(kW)</Badge>
          </div>
        ),
      },
      { accessorKey: "lat", header: "Lat" },
      { accessorKey: "lng", header: "Long" },
      {
        accessorKey: "landSize",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Project Land Size</span>
            <Badge variant={"outline"}>(ha)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "PLTDDist",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">PLTD Distance</span>
            <Badge variant={"outline"}>(m)</Badge>
          </div>
        ),
      },
    ],
  },

  {
    header: "Energy & Economic",
    columns: [
      {
        accessorKey: "bpp",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">BPP</span>
            <Badge variant={"outline"}>($/kWh)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "ace",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">ACE</span>
            <Badge variant={"outline"}>(MWh/yr)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "peakLoad",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Peak Load</span>
            <Badge variant={"outline"}>(kW)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "meanLoad",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Mean Load</span>
            <Badge variant={"outline"}>(kW)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "renewablePenetration",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Renewable Penetration</span>
            <Badge variant={"outline"}>(%)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "connectionVoltage",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Connection Voltage</span>
            <Badge variant={"outline"}>(kW)</Badge>
          </div>
        ),
      },
    ],
  },

  {
    header: "Siting Suitability",
    columns: [
      {
        accessorKey: "avgSlope",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Average Slope</span>
            <Badge variant={"outline"}>(%)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "slopeAspect",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Slope Aspect</span>
            <Badge variant={"outline"}>(°)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "offsiteShading",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Off-site Shading</span>
          </div>
        ),
      },
      {
        accessorKey: "distPort",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Distance Port</span>
            <Badge variant={"outline"}>(m)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "distRoad",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Distance Road</span>
            <Badge variant={"outline"}>(m)</Badge>
          </div>
        ),
      },
      {
        accessorKey: "distCoast",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Distance Coast</span>
            <Badge variant={"outline"}>(m)</Badge>
          </div>
        ),
      },
      { accessorKey: "landUseSensitivity", header: "Land Use Sensitivity" },
      {
        accessorKey: "registerLand",
        header: ({ column }) => (
          <div className="space-y-1">
            <span className="block">Registered Land</span>
            <Badge variant={"outline"}>(%)</Badge>
          </div>
        ),
      },
      { accessorKey: "disputedLand", header: "Disputed Lands" },
      { accessorKey: "stateForesty", header: "State Foresty" },
      { accessorKey: "forestMoratorium", header: "Forest Moratorium" },
    ],
  },
  {
    header: "Hazards & Preliminary Climate Risk",
    columns: [
      { accessorKey: "keyHazards", header: "Key Hazards" },
      // {
      //   accessorKey: "esia",
      //   header: "ESIA",
      //   cell: ({ row }) => {
      //     const value = row.getValue("esia") as string | null;
      //     if (!value) return null;

      //     const statusMap: Record<
      //       string,
      //       {
      //         variant: "success" | "warning" | "secondary";
      //         icon: React.ElementType;
      //         bg: string;
      //       }
      //     > = {
      //       completed: {
      //         variant: "success",
      //         icon: CircleCheck,
      //         bg: "bg-success-foreground",
      //       },
      //       pending: {
      //         variant: "warning",
      //         icon: Clock6,
      //         bg: "bg-warning-foreground",
      //       },
      //     };

      //     const statusKey = value.toLowerCase();
      //     const status = statusMap[statusKey] || statusMap["failed"]; // default kalau tidak ada

      //     const Icon = status.icon;

      //     return (
      //       <Badge variant={status.variant} className="gap-2">
      //         <Icon className="size-3" strokeWidth={2} />
      //         {value}
      //       </Badge>
      //     );
      //   },
      // },
      {
        accessorKey: "preliminaryClimateRisk",
        header: "Preliminary Climate Risk",
      },
    ],
  },
  {
    header: "Regulatory & Risk",
    columns: [
      { accessorKey: "GOIApprovalsProfile", header: "GOI Approvals Profile" },
      {
        accessorKey: "preliminaryPositiveImpacts",
        header: "Preliminary Posative Impacts ",
      },
      {
        accessorKey: "preliminaryNegativeImpacts",
        header: "Preliminary Negative Impacts",
      },
      { accessorKey: "IFCRiskCategory", header: "IFC Risk Category" },
      {
        accessorKey: "keyEAndSManagementPlans",
        header: "Key E&S Management Plans",
      },
    ],
  },
];
