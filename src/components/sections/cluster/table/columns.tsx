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
    accessorKey: "cluster",
    header: "Province",
  },
  {
    accessorKey: "projectName",
    header: "Project Name",
  },

  {
    header: "Location",
    columns: [
      {
        accessorKey: "coordinates",
        header: "Coordinates",
      },
    ],
  },

  {
    header: "Project Overview",
    columns: [
      {
        accessorKey: "capacity",
        header: "Capacity",
      },
      {
        accessorKey: "landSize",
        header: "Land Size",
      },
      {
        accessorKey: "pltdDistance",
        header: "PLTD Distance",
      },
    ],
  },

  {
    header: "Energy & Economics",
    columns: [
      {
        accessorKey: "bpp",
        header: "BPP",
      },
      {
        accessorKey: "ace",
        header: "ACE",
      },
      {
        accessorKey: "peakLoad",
        header: "Peak Load",
      },
      {
        accessorKey: "meanLoad",
        header: "Mean Load",
      },
      {
        accessorKey: "existingSolar",
        header: "Existing Solar",
      },
      {
        accessorKey: "renewablePenetration",
        header: "Renewable Penetration",
      },
      {
        accessorKey: "connectionVoltage",
        header: "Connection Voltage",
      },
    ],
  },

  {
    header: "Siting Suaitability",
    columns: [
      {
        accessorKey: "averageSlope",
        header: "Average Slope",
      },
      {
        accessorKey: "slopeAspect",
        header: "Slope Aspect",
      },
      {
        accessorKey: "offsiteShading",
        header: "Off-site Shading",
      },
      {
        accessorKey: "distanceRoad",
        header: "Distance Road",
      },
      {
        accessorKey: "distanceCoast",
        header: "Distance Coast",
      },
      {
        accessorKey: "landSensitivity",
        header: "Land Use Sensitivity",
      },
      {
        accessorKey: "registeredLandPercent",
        header: "Registered Land (%)",
      },
      {
        accessorKey: "stateForest",
        header: "State Forest",
      },
      {
        accessorKey: "registeredLand",
        header: "Registered Land",
      },
      {
        accessorKey: "disputedLands",
        header: "Disputed Lands",
      },
    ],
  },

  {
    header: "Physical Hazards",
    columns: [
      {
        accessorKey: "keyHazards",
        header: "Key Hazards",
      },
    ],
  },

  {
    header: "Climate Risk",
    columns: [
      {
        accessorKey: "preliminaryRisk",
        header: "Preliminary Climate Risk",
      },
    ],
  },

  {
    header: "Execution Pathway",
    columns: [
      {
        accessorKey: "ifcCategory",
        header: "IFC Category",
      },
      {
        accessorKey: "keyEAndSManagementPlans",
        header: "Key E&S Management Plans",
      },
      {
        accessorKey: "environmentalLicensingPathway",
        header: "Environmental Licensing Pathway",
      },
    ],
  },
];
