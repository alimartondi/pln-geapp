import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Cluster, ClusterTableRow } from "@/types/cluster.type";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { clusterDetails } from "@/data/cluster";
import { useMemo } from "react";
import { MapPinCheck, MapPinned, Zap } from "lucide-react";

type Props = {
  cluster: Cluster;
  onClose: () => void;
};

export default function ClusterDetailSheet({ cluster, onClose }: Props) {
  const currentClusterTableData = useMemo(() => {
    return clusterDetails
      .filter((d) => d.clusterId === cluster.id)
      .flatMap((d) => d.table); // <== gunakan flatMap di sini
  }, [cluster.id]);

  return (
    <Sheet open={true} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        className="rounded-t-xl h-[95vh] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>{cluster.name}</SheetTitle>
        </SheetHeader>
        <div className="px-4 lg:px-12 pb-4 grid grid-cols-1 gap-6">
          <div className="space-y-4 p-4 lg:p-6 border rounded-md">
            <h3>Statistic</h3>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <div className="w-full border-r flex items-center gap-4">
                <div className="h-12 w-12 bg-primary/10 text-primary rounded lg:rounded-md flex items-center justify-center">
                  <MapPinned />
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold text-gray-500">
                    Total Sites
                  </h6>
                  <h3 className="text-2xl font-semibold">21</h3>
                </div>
              </div>
              <div className="w-full border-r flex items-center gap-4">
                <div className="h-12 w-12 bg-destructive/10 text-destructive rounded lg:rounded-md flex items-center justify-center">
                  <Zap />
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold text-gray-500">
                    Total Capacity
                  </h6>
                  <h3 className="text-2xl font-semibold">21</h3>
                </div>
              </div>
              <div className="w-full flex items-center gap-4">
                <div className="h-12 w-12 bg-secondary/10 text-secondary rounded lg:rounded-md flex items-center justify-center">
                  <MapPinCheck />
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold text-gray-500">
                    Confirmed Sites
                  </h6>
                  <h3 className="text-2xl font-semibold">21</h3>
                </div>
              </div>
            </div>
          </div>

          <DataTable<ClusterTableRow, unknown>
            columns={columns}
            data={currentClusterTableData}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
