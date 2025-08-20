"use client";

import * as React from "react";
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import clsx from "clsx";
import { Settings2, Search, ChevronRight, ChevronLeft } from "lucide-react";

import { MultiSelect } from "@/components/ui/multi-select";
import { clusters } from "@/data/cluster";
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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  defaultClusterId?: string;
}

// ⬅️ pastikan TData punya clusterId
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
              className="min-w-[260px] max-w-full pl-9"
            />
          </div>

          <div className="hidden md:block">
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

        <div className="flex items-center gap-4 max-w-full w-full lg:justify-end justify-between">
          <div className="md:hidden flex-1 overflow-hidden">
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

          <div className="ml-auto">
            {/* Column Visibility */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size={"lg"}>
                  <Settings2 />
                  Sections
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((col) => col.columns?.length)
                  .map((group) => {
                    const leafCols = group.getLeafColumns();
                    const allVisible = leafCols.every((col) =>
                      col.getIsVisible()
                    );

                    return (
                      <DropdownMenuCheckboxItem
                        key={group.id}
                        className="capitalize"
                        checked={allVisible}
                        onCheckedChange={(value) => {
                          leafCols.forEach((col) =>
                            col.toggleVisibility(!!value)
                          );
                        }}
                      >
                        {group.columnDef.header as string}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
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
                            "sticky left-0 bg-primary border-t border-[#27a9c2] after:absolute after:right-0 after:h-full after:w-px after:bg-border after:top-0 translate-z-0 text-left will-change-transform z-10",
                          header.column.columnDef.header ===
                            "Cluster Geography" && "text-left",
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
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell, index) => {
                      const isFirst = index === 0; // cek kolom pertama
                      const rowIndex = row.index; // index baris

                      return (
                        <TableCell
                          key={cell.id}
                          className={clsx(
                            isFirst &&
                              "sticky left-0 z-10 after:absolute after:inset-y-0 after:right-0 after:w-[0.1px] after:bg-border",
                            isFirst &&
                              (rowIndex % 2 === 0
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
      <CardFooter className="flex items-center justify-between gap-4">
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
      </CardFooter>
    </Card>
  );
}
