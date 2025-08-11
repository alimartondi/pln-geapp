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
import { Settings2, Search } from "lucide-react";

import { MultiSelect } from "@/components/ui/multi-select";
import { clusters } from "@/data/cluster";

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
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      clusterId: false,
    });

  const [selectedClusters, setSelectedClusters] = React.useState<string[]>(
    defaultClusterId ? [defaultClusterId] : []
  );

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

  // Sinkronisasi filter clusterId setiap selectedClusters berubah
  React.useEffect(() => {
    if (selectedClusters.length === 0) {
      table.getColumn("clusterId")?.setFilterValue(undefined);
    } else {
      table.getColumn("clusterId")?.setFilterValue(selectedClusters);
    }
  }, [selectedClusters, table]);

  return (
    <div className="border rounded-md p-4 lg:p-6">
      {/* Top toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between sticky top-0 z-50 bg-background pb-4">
        <div className="flex flex-col gap-4 w-full">
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
              onChange={setSelectedClusters}
              label="Clusters"
            />
          </div>

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
        </div>

        <div className="flex items-center gap-4 max-w-full w-full lg:justify-end justify-between">
          <div className="lg:hidden flex-1 overflow-hidden">
            <MultiSelect
              options={clusters.map((c) => ({
                label: c.shortName,
                value: String(c.id),
                count: data.filter(
                  (row) => String(row.clusterId) === String(c.id)
                ).length,
              }))}
              selected={selectedClusters}
              onChange={setSelectedClusters}
              label="Clusters"
            />
          </div>
          <div className="ml-auto">
            {/* Column Visibility */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size={"lg"}>
                  <Settings2 />
                  Columns
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
      </div>

      {/* Table */}
      <Table>
        <TableHeader className="bg-accent">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className={clsx(
                      header.colSpan > 1 &&
                        "text-center border-r last:border-r-0 uppercase font-semibold",
                      (header.column.columnDef.header === "Physical Hazards" ||
                        header.column.columnDef.header === "Climate Risk" ||
                        header.column.columnDef.header === "Location") &&
                        "text-center border-r last:border-r-0 uppercase font-semibold",
                      header.column.columnDef.header === "Project Name" &&
                        "first:sticky first:left-0 first:bg-accent"
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
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="first:sticky first:left-0 bg-background"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 pt-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
