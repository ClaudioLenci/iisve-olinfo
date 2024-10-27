type Material = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export function MaterialCard({ material }: { material: Material }) {
  return (
    <div className="bg-dark-black shadow-md rounded-lg p-4 border border-light2-black hover:shadow-lg transition-shadow duration-200">
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
  );
}
