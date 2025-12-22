"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/auth-context";

import ClusterItem from "./cluster-item";
import ClusterItemRegular from "./cluster-item-regular";
import ClusterDetailSheet from "./cluster-detail-sheet";
import { Cluster, ClusterList } from "@/types/cluster.type";

type Props = {
  cluster: ClusterList;
};

export default function ClusterDetailSheetWrapper({ cluster }: Props) {
  const { isAuthenticated } = useAuth();
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);

  return (
    <>
      {cluster.map((item, index) =>
        isAuthenticated ? (
          <ClusterItem
            key={item.id}
            index={index + 1}
            cluster={item}
            onClick={() => setSelectedCluster(item)}
          />
        ) : (
          <ClusterItemRegular key={item.id} index={index + 1} cluster={item} />
        )
      )}

      {/* Sheet hanya bisa kebuka saat login */}
      {isAuthenticated && selectedCluster && (
        <ClusterDetailSheet
          cluster={selectedCluster}
          onClose={() => setSelectedCluster(null)}
        />
      )}
    </>
  );
}
