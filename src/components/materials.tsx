import materialsList from "@/materials.json";

type Material = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export default function Materials() {
  const materials: Material[] = materialsList;
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Materiali</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <div
            key={material.id}
            className="bg-dark-black shadow-md rounded-lg p-4 border border-light2-black hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold mb-2">{material.title}</h3>
            <p className="text-sm mb-4">{material.description}</p>
            <a
              href={material.link}
              target="_blank"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
