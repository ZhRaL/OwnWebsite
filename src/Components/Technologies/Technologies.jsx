const techList = [
  { name: 'React', category: 'Frontend' },
  { name: 'TanStack Query', category: 'Frontend' },
  { name: 'TanStack Routing', category: 'Frontend' },
  { name: '.NET', category: 'Backend' },
  { name: 'EF Core', category: 'Backend' },
  { name: 'JWT Authentication', category: 'Security' },
  { name: 'OAuth', category: 'Security' },
  { name: 'Stripe', category: 'E-Commerce' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
];

const categoryColors = {
  Frontend: 'bg-blue-100 text-blue-800',
  Backend: 'bg-green-100 text-green-800',
  Security: 'bg-red-100 text-red-800',
  'E-Commerce': 'bg-purple-100 text-purple-800',
  Database: 'bg-yellow-100 text-yellow-800',
};

const Technologies = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">
        Technologies I Use
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {techList.map((tech, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start p-4 rounded-xl shadow hover:scale-105 transition cursor-default ${
              categoryColors[tech.category]
            }`}
          >
            <span className="text-lg font-semibold">{tech.name}</span>
            <span className="text-xs mt-1 opacity-80">{tech.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
