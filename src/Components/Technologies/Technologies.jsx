import React from 'react';

export const categoryColors = {
  Frontend: 'bg-sky-100 text-sky-800',
  Backend: 'bg-green-100 text-green-800',
  Database: 'bg-blue-100 text-blue-800',
  DevTools: 'bg-indigo-100 text-indigo-800',
  DevOps: 'bg-yellow-100 text-yellow-800',
  Mobile: 'bg-cyan-100 text-cyan-800',
  Payments: 'bg-pink-100 text-pink-800',
  UI: 'bg-teal-100 text-teal-800',
  Security: 'bg-purple-100 text-purple-800',
  Error: 'bg-red-100 text-red-800',
  default: 'bg-gray-100 text-gray-800',
};

// Single source of truth: liste aller Techs mit Kategorie
export const techList = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },

  { name: '.NET', category: 'Backend' },
  { name: 'ASP.NET Core', category: 'Backend' },
  { name: 'EF Core', category: 'Backend' },
  { name: 'SignalR', category: 'Backend' },

  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },

  { name: 'JWT Authentication', category: 'Security' },
  { name: 'OAuth2 / OpenID Connect', category: 'Security' },

  { name: 'Docker', category: 'DevOps' },
  { name: 'Azure', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },

  { name: 'MySQL', category: 'Database' },
  { name: 'TanStack Router', category: 'DevTools' },
  { name: 'APIs', category: 'Backend' },
  { name: 'Error Handling', category: 'Error' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Authentication', category: 'Security' },
  { name: 'Stripe Integration', category: 'Payments' },
  { name: 'Responsive Design', category: 'UI' },
  { name: 'State Management', category: 'DevTools' },
];

// helper map für O(1)-Lookup
const techMap = Object.fromEntries(techList.map((t) => [t.name, t.category]));

// Gibt die Tailwind-Classes für einen Tech-Tag zurück
export function getTechClasses(name) {
  const category = techMap[name] || 'default';
  return categoryColors[category] || categoryColors.default;
}

const Technologies = () => {
  return (
    <section id="technologies" className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {techList.map((tech, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start p-4 rounded-xl shadow hover:scale-105 transition cursor-default ${
              categoryColors[tech.category] || categoryColors.default
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
