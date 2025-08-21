"use client";

import { useState, useEffect } from "react";
import { Columns2 } from "lucide-react";
import type { Table } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface DataTableSectionFilterProps<TData> {
  table: Table<TData>;
}

export default function DataTableSectionFilter<TData>({
  table,
}: DataTableSectionFilterProps<TData>) {
  const [open, setOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const groups = table.getAllColumns().filter((col) => col.columns?.length);

  const applyFiltering = (sections: string[]) => {
    if (sections.length === 0) {
      // Show all sections when none selected
      groups.forEach((group) => {
        const leafCols = group.getLeafColumns();
        leafCols.forEach((col) => col.toggleVisibility(true));
      });
    } else {
      // Show only selected sections
      groups.forEach((group) => {
        const leafCols = group.getLeafColumns();
        const shouldBeVisible = sections.includes(group.id);
        leafCols.forEach((col) => col.toggleVisibility(shouldBeVisible));
      });
    }
  };

  const initializeDefaultVisibility = () => {
    // Use the first available group as default, or "project_overview" if it exists
    const availableGroupIds = groups.map((g) => g.id);
    const defaultSections = availableGroupIds.includes("project_overview")
      ? ["project_overview"]
      : availableGroupIds.length > 0
      ? [availableGroupIds[0]]
      : [];

    setSelectedSections(defaultSections);
    applyFiltering(defaultSections);
  };

  useEffect(() => {
    if (groups.length > 0) {
      initializeDefaultVisibility();
    }
  }, [groups.length]); // Added dependency to ensure groups are loaded

  const toggleSection = (groupId: string) => {
    const newSelectedSections = selectedSections.includes(groupId)
      ? selectedSections.filter((id) => id !== groupId)
      : [...selectedSections, groupId];

    setSelectedSections(newSelectedSections);
    applyFiltering(newSelectedSections);
  };

  const clearAllSections = () => {
    setSelectedSections([]);
    applyFiltering([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="lg" className="gap-3">
          <Columns2 />
          <span className="hidden lg:block">Sections</span>
          <Separator orientation="vertical" />
          <Badge variant="info" className="rounded-full px-2 py-1 text-xs">
            {selectedSections.length === 0
              ? "All Sections"
              : `${selectedSections.length} Selected`}
          </Badge>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-60" align="end">
        <Command>
          <CommandInput placeholder="Search sections..." />
          <CommandList>
            <CommandEmpty>No section found.</CommandEmpty>
            <CommandGroup>
              {groups.map((group) => {
                const leafCols = group.getLeafColumns();
                const isSelected = selectedSections.includes(group.id);

                return (
                  <CommandItem
                    key={group.id}
                    onSelect={() => toggleSection(group.id)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox checked={isSelected} className="h-4 w-4" />
                      <span className="text-sm">
                        {group.columnDef.header as string}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {leafCols.length}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedSections.length > 0 && (
              <div className="p-2 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllSections}
                  className="w-full"
                >
                  All Sections
                </Button>
              </div>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
