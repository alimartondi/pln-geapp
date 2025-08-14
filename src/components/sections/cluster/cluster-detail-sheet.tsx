import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Cluster, ClusterTableRow } from "@/types/cluster.type";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { clusterDetails } from "@/data/cluster";
import { useMemo } from "react";
import { MapPinCheck, MapPinned, Zap } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  cluster: Cluster;
  onClose: () => void;
};

export default function ClusterDetailSheet({ cluster, onClose }: Props) {
  // Ambil semua data, biar DataTable yang filter
  const allClusterTableData = useMemo(() => {
    return clusterDetails.flatMap((d) =>
      d.table.map((project) => ({
        clusterId: d.clusterId,
        ...project,
      }))
    );
  }, []);

  return (
    <Sheet open={true} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="bottom" className="rounded-t-xl h-[95dvh]">
        <SheetHeader aria-describedby={undefined} className="shrink-0">
          <SheetTitle>{cluster.name}</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <div className="px-4 pb-4 space-y-6 overflow-y-auto">
          <Card>
            <CardHeader>
              <CardTitle>Statistic</CardTitle>
            </CardHeader>
            <CardContent className="flex md:gap-8 flex-col md:flex-row gap-4">
              <div className="w-full border-b md:border-b-0 md:border-r flex items-center gap-4 pb-4 md:pb-0">
                <div className="h-12 w-12 bg-secondary text-secondary-foreground rounded-md flex items-center justify-center">
                  <MapPinned />
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold text-gray-500">
                    Total Sites
                  </h6>
                  <h3 className="text-2xl font-semibold">50</h3>
                </div>
              </div>

              <div className="w-full border-b md:border-b-0 md:border-r flex items-center gap-4 pb-4 md:pb-0">
                <div className="h-12 w-12 bg-tertiary text-tertiary-foreground rounded-md flex items-center justify-center">
                  <Zap />
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold text-gray-500">
                    Total Capacity
                  </h6>
                  <h3 className="text-2xl font-semibold">54,902</h3>
                </div>
              </div>

              <div className="w-full flex items-center gap-4">
                <div className="h-12 w-12 bg-destructive text-destructive-foreground rounded-md flex items-center justify-center">
                  <MapPinCheck />
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-semibold text-gray-500">
                    Confirmed Sites
                  </h6>
                  <h3 className="text-2xl font-semibold">48</h3>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Table */}
          <DataTable<ClusterTableRow, unknown>
            columns={columns}
            data={allClusterTableData}
            defaultClusterId={String(cluster.id)} // default pilih cluster yang diklik
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
