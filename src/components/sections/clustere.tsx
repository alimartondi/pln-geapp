import { ArrowRight } from "lucide-react";

export default function Cluster() {
  return (
    <section className="py-12">
      <div className="container-wrapper space-y-10">
        <div className="max-w-md space-y-4">
          <h2 className="text-4xl font-semibold">Regional Clusters</h2>
          <p className="text-pretty">
            Transforming Indonesia&apos;s energy landscape through renewable
            solar PV and battery energy storage systems.ssssss
          </p>
        </div>

        <div>
          <div className="flex items-center gap-4 border-b py-5">
            <h2 className="hidden lg:block">01</h2>
            <div className="flex-1 space-y-1">
              <h2 className="font-semibold text-xl">UID Riau & Kepri</h2>
              <span className="block text-sm text-gray-500">(RKR)</span>
            </div>
            <ArrowRight />
          </div>
          <div className="flex items-center gap-4 border-b py-5">
            <h2 className="hidden lg:block">01</h2>
            <div className="flex-1 space-y-1">
              <h2 className="font-semibold text-xl">UID Kalimantan Barat</h2>
              <span className="block text-sm text-gray-500">(KALBAR)</span>
            </div>
            <ArrowRight />
          </div>
          <div className="flex items-center gap-4 border-b py-5">
            <h2 className="hidden lg:block">01</h2>
            <div className="flex-1 space-y-1">
              <h2 className="font-semibold text-xl">
                UID Kalimantan Timur & Utara
              </h2>
              <span className="block text-sm text-gray-500">(KALTIMRA)</span>
            </div>
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}
