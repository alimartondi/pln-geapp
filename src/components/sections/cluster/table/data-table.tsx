"use client";

import * as React from "react";
import { clusters } from "@/data/cluster";
import DataTableSectionFilter from "./data-table-section-Filter";
import { MultiSelect } from "@/components/ui/multi-select";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import clsx from "clsx";

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  defaultClusterId?: string;
}

export function DataTable<TData extends { clusterId: number }, TValue>({
  columns,
  data,
  defaultClusterId,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    defaultClusterId ? [{ id: "clusterId", value: [defaultClusterId] }] : []
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      clusterId: false,
    });

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      columnVisibility,
      sorting,
    },
  });

  const selectedClusters =
    (table.getColumn("clusterId")?.getFilterValue() as string[]) ?? [];

  return (
    <Card>
      {/* Top toolbar */}
      <CardHeader className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex items-center relative">
            <Search className="size-4 absolute left-3 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Find project name..."
              value={
                (table.getColumn("projectName")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("projectName")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-full pl-9"
            />
          </div>

          <div className="hidden lg:block">
            <MultiSelect
              options={clusters.map((c) => ({
                label: c.shortName,
                value: String(c.id),
                count: data.filter(
                  (row) => String(row.clusterId) === String(c.id)
                ).length,
              }))}
              selected={selectedClusters}
              onChange={(values) =>
                table.getColumn("clusterId")?.setFilterValue(values)
              }
              label="Clusters"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-between md:justify-end w-full overflow-x-auto">
          <div className="lg:hidden w-full md:w-auto">
            <MultiSelect
              options={clusters.map((c) => ({
                label: c.shortName,
                value: String(c.id),
                count: data.filter(
                  (row) => String(row.clusterId) === String(c.id)
                ).length,
              }))}
              selected={selectedClusters}
              onChange={(values) =>
                table.getColumn("clusterId")?.setFilterValue(values)
              }
              label="Clusters"
            />
          </div>

          <div className="lg:ml-auto w-full md:w-auto">
            <DataTableSectionFilter table={table} />
          </div>
        </div>
      </CardHeader>

      {/* Table */}
      <CardContent>
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        className={clsx(
                          header.colSpan > 1 &&
                            "text-center uppercase font-semibold",
                          header.column.id === "projectName" &&
                            !header.isPlaceholder &&
                            "sticky left-0 bg-primary border-t border-[#e5e7eb] dark:border-[#27a9c2] after:absolute after:right-0 after:h-full after:w-[0.1px] after:bg-border after:top-0 translate-z-0 text-left will-change-transform z-10",
                          headerGroup.headers.indexOf(header) === 0 &&
                            headerGroup.headers[0].isPlaceholder &&
                            "sticky left-0 bg-primary after:absolute after:right-0 after:h-full after:w-[0.1px] after:bg-border after:top-0 border-[#e5e7eb] dark:border-[#27a9c2] will-change-transform z-10",
                          "tex-center text-white"
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, actualIndex) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell, index) => {
                      const isFirst = index === 0; // cek kolom pertama

                      return (
                        // Di dalam loop table.getRowModel().rows.map((row, actualIndex) =>
                        <TableCell
                          key={cell.id}
                          className={clsx(
                            isFirst &&
                              "sticky left-0 z-10 after:absolute after:inset-y-0 after:right-0 after:w-[0.1px] after:bg-border",
                            isFirst &&
                              (actualIndex % 2 === 0 // Gunakan actualIndex dari map
                                ? "bg-[#ffffff] dark:bg-[#18181a]"
                                : "bg-[#f6f7f9] dark:bg-[#232227]")
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + 24}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Pagination */}
      <CardFooter className="flex flex-col gap-6">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm hidden md:block">Rows per page</span>
            <Select
              value={String(table.getState().pagination.pageSize)}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="w-[80px]">
                {table.getState().pagination.pageSize}
              </SelectTrigger>
              <SelectContent>
                {[10, 25, 50].map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-11"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-11"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="w-full lg:w-auto lg:ml-auto"
            >
              About the Data
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[85dvh] px-0">
            <DialogHeader className="px-6 lg:px-8">
              <DialogTitle>About the Data</DialogTitle>
              <DialogDescription>Data Context & Limitations</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 overflow-y-auto px-6 lg:px-8 pb-6 lg:pb-8">
              <p>
                All data displayed on this website has been curated from four
                principal sources:
              </p>
              <ul className="list-decimal pl-4">
                <li>
                  ITP–Synkrona Consortium Feasibility Study: including energy
                  system modelling, economic and financial analysis, PLN load
                  and diesel-generation data, and field surveys conducted by
                  trained grid engineers.
                </li>
                <li>
                  Mosaic Risk Analytics’ site-suitability assessments: applying
                  advanced satellite imaging, computer vision, and
                  location-intelligence techniques to process and evaluate
                  siting constraints, land characteristics, technical
                  suitability, and infrastructure access.
                </li>
                <li>
                  Open-source information including Government of Indonesia
                  ministry and agency portals, OpenStreetMap, national and
                  international hazard inventories, and IPCC climate change
                  projection datasets.
                </li>
                <li>
                  Mosaic’s environmental and social impact scoping identifying
                  preliminary impacts, regulatory pathways, and IFC safeguards
                  project categorisation using BPS statistics and village-level
                  informants.
                </li>
              </ul>
              <p>
                Portfolio information was compiled using the latest available
                datasets during <strong>Q1–Q2 2025</strong>.
              </p>
              <p>
                <strong>Limitation & Disclaimer</strong>
              </p>
              <p>
                Data coverage, original collection dates, and accuracy vary
                across all sources. Ground conditions, regulatory requirements,
                and agency datasets may change without notice. Some indicators
                rely on secondary data, community-level insights, or modelling
                assumptions that may be refined in subsequent phases.
              </p>
              <p>
                Accordingly, all figures are <strong>indicative</strong> and for{" "}
                <strong>planning purposes only,</strong> and are{" "}
                <strong>
                  not warranted for construction, permitting, land acquisition,
                  or legal use.
                </strong>{" "}
                No responsibility can be taken for discrepancies arising from
                site changes, regulatory updates, or data revisions occurring
                after the compilation date.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
