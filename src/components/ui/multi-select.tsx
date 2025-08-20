import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface MultiSelectFilterProps {
  options: { label: string; value: string; count?: number }[];
  selected: string[];
  onChange: (values: string[]) => void;
  label: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  label,
}: MultiSelectFilterProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // <1024px dianggap mobile/tablet
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleValue = (value: string) => {
    if (value === "all") {
      onChange([]);
    } else if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  let badgeText = "";
  if (isMobile) {
    // 📱 Mobile / Tablet
    if (selected.length === 0) {
      badgeText = "All Clusters";
    } else {
      badgeText = `${selected.length} Selected`;
    }
  } else {
    // 💻 Desktop (logika lama)
    if (selected.length === 0) {
      badgeText = "All Clusters";
    } else if (selected.length === 1) {
      badgeText =
        options.find((opt) => opt.value === selected[0])?.label || selected[0];
    } else {
      badgeText = `${selected.length} Selected`;
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="justify-between h-11 px-4 gap-4 w-full overflow-x-auto"
        >
          {label}
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-8"
          />
          <Badge variant="info" className="px-2 py-1 rounded-full">
            {badgeText}
          </Badge>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search clusters..." />
          <CommandEmpty>No options found.</CommandEmpty>

          <CommandGroup>
            {options.map((opt) => (
              <CommandItem
                key={opt.value}
                onSelect={() => toggleValue(opt.value)}
                className="flex items-center gap-2"
              >
                <Checkbox checked={selected.includes(opt.value)} />
                <span className="max-w-full">{opt.label}</span>
                {opt.count !== undefined && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    {opt.count}
                  </span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>

        {selected.length > 0 && (
          <>
            <Separator />
            <div className="p-2">
              <Button
                variant="ghost"
                className="w-full justify-center"
                onClick={() => onChange([])}
              >
                All Clusters
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
