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

        <div className="px-4 space-y-6 h-full overflow-hidden">
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
