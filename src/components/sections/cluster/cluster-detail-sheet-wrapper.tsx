"use client";

import { useState } from "react";
import ClusterItem from "./cluster-item";
import ClusterDetailSheet from "./cluster-detail-sheet";
import { Cluster, ClusterList } from "@/types/cluster.type";

type Props = {
  cluster: ClusterList;
};

export default function ClusterDetailSheetWrapper({ cluster }: Props) {
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);

  return (
    <>
      {cluster.map((item, index) => (
        <ClusterItem
          key={item.id}
          index={index + 1}
          cluster={item}
          onClick={() => setSelectedCluster(item)}
        />
      ))}

      {selectedCluster && (
        <ClusterDetailSheet
          cluster={selectedCluster}
          onClose={() => setSelectedCluster(null)}
        />
      )}
    </>
  );
}
