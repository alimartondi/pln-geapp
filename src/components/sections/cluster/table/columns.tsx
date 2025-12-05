"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ClusterTableRow } from "@/types/cluster.type";
import {
  Check,
  X,
  ChevronsUpDown,
  ArrowUp,
  ArrowDown,
  Info,
} from "lucide-react";
import clsx from "clsx";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

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
    filterFn: (row, columnId, filterValue: string[]) => {
      if (!filterValue || filterValue.length === 0) return true;
      return filterValue.includes(String(row.getValue(columnId)));
    },
  },

  {
    accessorKey: "projectName",
    header: "Project Name",
  },

  {
    header: "Project Overview",
    columns: [
      { accessorKey: "cluster", header: "Geographic Cluster" },
      {
        accessorKey: "capacity",
        header: ({ column }) => (
          <DropdownMenu>
            <div className="space-y-2">
              <DropdownMenuTrigger asChild>
                <Button
                  variant="glass"
                  size="sm"
                  className="ml-auto shadow-none"
                >
                  <span className="block">Existing Diesel<br/>Capacity (kW)</span>
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <Badge className="block mx-auto" variant={"glass"}>
                (kW)
              </Badge>
            </div>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                <ArrowUp className="mr-2 h-4 w-4" /> Asc
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                <ArrowDown className="mr-2 h-4 w-4" /> Desc
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.capacity}</span>
          </div>
        ),
      },
      {
        accessorKey: "coordinates",
        header: "Coordinates",
        cell: ({ row }) => {
          const coords = row.original.coordinates; // Coordinate[]
          return (
            <div className="flex flex-col gap-4">
              {coords.map((c, i) => (
                <span key={i}>
                  {c.lat}, {c.lng}
                </span>
              ))}
            </div>
          );
        },
      },

      {
        accessorKey: "landSize",
        header: () => (
          <div className="space-y-1">
            <span className="block">Project Land Size</span>
            <Badge variant={"glass"}>(ha)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.landSize}</span>
          </div>
        ),
      },
      {
        accessorKey: "pltdDist",
        header: () => (
          <div className="space-y-1">
            <span className="block">PLTD from Distance </span>
            <Badge variant={"glass"}>(m)</Badge>
          </div>
        ),
        cell: ({ row }) => {
          const dists = row.original.pltdDist;
          return (
            <div className="flex flex-col gap-4">
              {dists.map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>
          );
        },
      },
    ],
  },

  {
    header: "Energy & Economic",
    columns: [
      {
        accessorKey: "bpp",
        header: () => (
          <div className="space-y-1">
            <span className="block">BPP </span>
            <Badge variant={"glass"}>($/kWh)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.bpp}</span>
          </div>
        ),
      },
      {
        accessorKey: "ace",
        header: () => (
          <div className="space-y-1">
            <span className="block">Indicative Yield </span>
            <Badge variant={"glass"}>(MWh/yr)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.ace}</span>
          </div>
        ),
      },
      {
        accessorKey: "peakLoad",
        header: () => (
          <div className="space-y-1">
            <span className="block">Peak Load</span>
            <Badge variant={"glass"}>(kW)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.peakLoad}</span>
          </div>
        ),
      },
      {
        accessorKey: "meanLoad",
        header: () => (
          <div className="space-y-1">
            <span className="block">Mean Load</span>
            <Badge variant={"glass"}>(kW)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.meanLoad}</span>
          </div>
        ),
      },
      {
        accessorKey: "renewablePenetration",
        header: () => (
          <div className="space-y-1">
            <span className="block">
              % Renewable <br/>Penetration Target
            </span>
            <Badge variant={"glass"}>(%)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex flex-col gap-4">
            <span>{row.original.renewablePenetration}</span>
          </div>
        ),
      },
      {
        accessorKey: "connectionVoltage",
        header: () => (
          <div className="space-y-1">
            <span className="block">
              Connection <br /> Voltage
            </span>
            <Badge variant={"glass"}>(kW)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.connectionVoltage}</span>
          </div>
        ),
      },
    ],
  },

  {
    id: "sitingSuitability",
    header: "Siting Suitability",
    columns: [
      {
        accessorKey: "avgSlope",
        header: () => (
          <div className="space-y-1">
            <span className="block">Average Slope</span>
            <Badge variant={"glass"}>(%)</Badge>
          </div>
        ),
        cell: ({ row }) => {
          const avr = row.original.avgSlope;
          return (
            <div className="flex flex-col gap-4">
              {avr.map((a, i) => (
                <span key={i}>{a}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "slopeAspect",
        header: () => (
          <div className="space-y-1">
            <span className="block">Slope Aspect</span>
            <Badge variant={"glass"}>(°)</Badge>
          </div>
        ),
        cell: ({ row }) => {
          const slope = row.original.slopeAspect;
          return (
            <div className="flex flex-col gap-4">
              {slope.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "offsiteShading",
        header: () => (
          <div className="space-y-1">
            <span className="block">Potential Off-site <br/>Shading</span>
          </div>
        ),
        cell: ({ row }) => {
          const sites: string[] = row.original.offsiteShading;

          return (
            <div className="flex flex-col gap-4">
              {sites.map((s, i) => {
                const Icon = s.toLowerCase() === "yes" ? Check : X;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={clsx(
                        "flex h-5 w-5 rounded justify-center items-center p-1",
                        s.toLocaleLowerCase() === "yes"
                          ? "bg-success-background text-success-foreground"
                          : "bg-error-background text-error-foreground"
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <span>{s}</span>
                  </div>
                );
              })}
            </div>
          );
        },
      },

      {
        accessorKey: "distPort",
        header: () => (
          <div className="space-y-1">
            <span className="block">Distance to Port </span>
            <Badge variant={"glass"}>(m)</Badge>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <span>{row.original.distPort}</span>
          </div>
        ),
      },
      {
        accessorKey: "distRoad",
        header: () => (
          <div className="space-y-1">
            <span className="block">Distance to Road</span>
            <Badge variant={"glass"}>(m)</Badge>
          </div>
        ),
        cell: ({ row }) => {
          const road = row.original.distRoad;
          return (
            <div className="flex flex-col gap-4">
              {road.map((r, i) => (
                <span key={i}>{r}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "distCoast",
        header: () => (
          <div className="space-y-1">
            <span className="block">Distance to Coast</span>
            <Badge variant={"glass"}>(m)</Badge>
          </div>
        ),
        cell: ({ row }) => {
          const coast = row.original.distCoast;
          return (
            <div className="flex flex-col gap-4">
              {coast.map((c, i) => (
                <span key={i}>{c}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "landUseSensitivity",
        header: "Land Use Sensitivity",
        cell: ({ row }) => {
          const land = row.original.landUseSensitivity;
          return (
            <div className="flex flex-col gap-4">
              {land.map((group, i) => (
                <div key={i} className="flex gap-1">
                  {group.map((item, j) => (
                    <span key={j}>
                      {item}
                      {j !== group.length - 1 && ","}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "registerLand",
        header: () => (
          <div className="space-y-1">
            <span className="block">Indicative Registered<br/> Land % ~Q2 2025 </span>
            <Badge variant={"glass"}>(%)</Badge>
          </div>
        ),
        cell: ({ row }) => {
          const lands = row.original.registerLand;
          return (
            <div className="flex flex-col gap-4">
              {lands.map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "disputedLand",
        header: "Disputed Lands (TORA, PIAP)",
        cell: ({ row }) => {
          const disputed = row.original.disputedLand;
          return (
            <div className="flex flex-col gap-4">
              {disputed.map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "stateForesty",
        header: "State Foresty",
        cell: ({ row }) => {
          const state = row.original.stateForesty;
          return (
            <div className="flex flex-col gap-4">
              {state.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "forestMoratorium",
        header: "Forest Moratorium",
        cell: ({ row }) => {
          const forest = row.original.forestMoratorium;
          return (
            <div className="flex flex-col gap-4">
              {forest.map((f, i) => {
                const Icon = f.toLowerCase() === "yes" ? Check : X;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={clsx(
                        "flex h-5 w-5 rounded justify-center items-center p-1",
                        f.toLocaleLowerCase() === "yes"
                          ? "bg-success-background text-success-foreground"
                          : "bg-error-background text-error-foreground"
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <span>{f}</span>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    ],
  },

  {
    header: "Hazards & Preliminary Climate Risk",
    columns: [
      {
        accessorKey: "keyHazards",
        header: "Key Hazards",
        cell: ({ row }) => {
          const keys = row.original.keyHazards;
          return (
            <div className="flex flex-col gap-4">
              {keys.map((group, i) => (
                <div key={i} className="flex gap-1">
                  {group.map((item, j) => (
                    <span key={j}>
                      {item}
                      {j !== group.length - 1 && ","}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        },
      },

      {
        accessorKey: "preliminaryClimateRisk",
        header: () => (
          <span className="block">
            Preliminary <br /> Climate Risk
          </span>
        ),
        cell: ({ row }) => {
          const preliminary = row.original.preliminaryClimateRisk;
          const variants: Record<string, "error" | "warning" | "success"> = {
            Low: "success",
            Medium: "warning",
          };

          return (
            <div className="flex flex-col gap-4">
              {preliminary.map((p, i) => (
                <Badge variant={variants[p] ?? "error"} key={i}>
                  {p}
                </Badge>
              ))}
            </div>
          );
        },
      },
    ],
  },

  {
    header: "Approvals & Execution Pathway",
    columns: [
      { accessorKey: "goiApprovalsProfile", header: "GOI Approvals Profile" },
      {
        accessorKey: "preliminaryPositiveImpacts",
        header: "Preliminary Positive Impacts ",
        cell: ({ row }) => {
          const preliminary = row.original.preliminaryPositiveImpacts;
          return (
            <div className="flex flex-col gap-4">
              {preliminary.map((p, i) => (
                <span key={i}>{p}</span>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "preliminaryNegativeImpacts",
        header: "Preliminary Negative Impacts",
        cell: ({ row }) => {
          const preliminary = row.original.preliminaryNegativeImpacts;
          return (
            <div className="flex flex-col gap-4">
              {preliminary.map((group, i) => (
                <div key={i} className="flex gap-1">
                  {group.map((item, j) => (
                    <span key={j}>
                      {item}
                      {j !== group.length - 1 && ","}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        },
      },

      {
        accessorKey: "ifcRiskCategory",
        header: "IFC Risk Category",
        cell: ({ row }) => {
          const ifcRisk = row.original.ifcRiskCategory;
          return (
            <div className="flex flex-col gap-4">
              {ifcRisk.map((group, i) => (
                <div key={i} className="flex gap-1">
                  {group.map((item, j) => (
                    <span key={j}>
                      {item}
                      {j !== group.length - 1 && ","}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "keyEAndSManagementPlans",
        header: "Key E&S Management Plans",
        cell: ({ row }) => {
          const keysE = row.original.keyEAndSManagementPlans;
          return (
            <div className="flex flex-col gap-4">
              {keysE.map((group, i) => (
                <div key={i} className="flex gap-1">
                  {group.map((item, j) => (
                    <span key={j}>
                      {item}
                      {j !== group.length - 1 && ","}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        },
      },
      {
        accessorKey: "developmentFeasibilityClass",
        header: () => (
          <div className="relative">
            <div className="absolute -top-6 -right-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="bg-transparent hover:bg-transparent hover:text-white/50"
                    size="sm"
                  >
                    <Info size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                  <div className="text-sm space-y-3 opacity-75 p-1 lg:p-2">
                    <p>
                      <strong>Development Feasibility Index (DFI)</strong> is a
                      weighted, composite score used to indicate the overall
                      development complexity of each renewable project. It
                      combines key factors related to{" "}
                      <strong>
                        land conditions, hazards and climate, regulatory and
                        permitting complexity, and environmental and social
                        considerations.
                      </strong>
                    </p>
                    <p>
                      Each site is classified as{" "}
                      <span className="font-bold">Favourable,</span>{" "}
                      <span className="font-bold">Moderate,</span>{" "}
                      <span className="font-bold">Challenging,</span> or{" "}
                      <span className="font-bold">Critical,</span> providing a
                      quick, consistent signal of likely development effort and
                      potential risk.
                    </p>
                    <p>
                      The DFI is an <strong>early-stage planning tool</strong>{" "}
                      and should not be used as a substitute for detailed
                      engineering, ESIA, or permitting assessments.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <span className="block">
              Development <br /> Feasibility Class
            </span>
          </div>
        ),
        cell: ({ row }) => {
          const development = row.original.developmentFeasibilityClass;

          // mapping label → class Tailwind
          const colorVariants: Record<string, string> = {
            Favourable: "bg-success-foreground",
            Moderate: "bg-warning-foreground",
            Challenging: "bg-orange-300",
          };

          return (
            <div className="flex flex-col gap-4 divide-y">
              {development.map((d: string, i: number) => (
                <div className="flex gap-2 items-center first:pb-4" key={i}>
                  <div
                    className={`w-3 h-3 rounded-full mb-px ${
                      colorVariants[d] || "bg-error-foreground"
                    }`}
                  ></div>
                  <span className="uppercase">{d}</span>
                </div>
              ))}
            </div>
          );
        },
      },
    ],
  },
];
