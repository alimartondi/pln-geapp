import ClusterDetailSheetWrapper from "./cluster-detail-sheet-wrapper";
import { clusters } from "@/data/cluster";

export default function ClusterSection() {
  return (
    <section className="py-12">
      <div className="container-wrapper space-y-10">
        <div className="max-w-md space-y-4">
          <h2 className="text-4xl font-semibold">Regional Clusters</h2>
          <p className="text-pretty">
            Transforming Indonesia&apos;s energy landscape through renewable
            solar PV and battery energy storage systems.
          </p>
        </div>

        <div>
          <ClusterDetailSheetWrapper cluster={clusters} />
        </div>
      </div>
    </section>
  );
}
