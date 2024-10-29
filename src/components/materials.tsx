import materialsList from "@/materials.json";
import { MaterialCard } from "./material-card";

type Material = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export default function Materials() {
  const materials: Material[] = materialsList;
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Materiali</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
}
