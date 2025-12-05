import { ArrowRight } from "lucide-react";
import { Cluster } from "@/types/cluster.type";

type Props = {
  index: number;
  cluster: Cluster;
  onClick: () => void;
};

export default function ClusterItem({ index, cluster, onClick }: Props) {
  return (
    <button
      className="w-full flex items-center gap-4 border-b py-5 group hover:px-8 transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-pointer hover:rounded-lg group"
      onClick={onClick}
    >
      <h2 className="hidden lg:block font-bold w-32 lg:w-36 text-3xl text-left">
        {String(index).padStart(2, "0")}
      </h2>
      <div className="flex-1 space-y-1 text-left">
        <h2 className="font-semibold text-xl lg:text-2xl text-pretty">
          {cluster.name}
        </h2>
        <span className="block text-sm text-gray-500 group-hover:text-gray-300">
          ({cluster.alias})
        </span>
      </div>
      <ArrowRight className="lg:size-8" />
    </button>
  );
}
