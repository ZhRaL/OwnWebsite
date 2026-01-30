import { useState, useEffect } from 'react';
import { getTechClasses } from '../Technologies/Technologies';

const projects = [
  {
    title: 'Projekt Eins',
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg',
    ],
    shortDesc: 'Webanwendung zur effizienten Verwaltung von Aufgaben.',
    tech: ['PostgreSQL', 'MySQL', 'TanStack Routing', 'APIs', 'Error Handling'],
    details:
      'Dieses Projekt demonstriert fortgeschrittene Datenbankintegration und robustes Fehlerhandling. Implementiert mit React und einem .NET-Backend.',
  },
  {
    title: 'Projekt Zwei',
    images: ['/images/project2-1.jpg', '/images/project2-2.jpg'],
    shortDesc:
      'Mobile App zur Erfassung und Auswertung von Fitnessaktivitäten.',
    tech: ['React Native', 'REST APIs', 'Authentication'],
    details:
      'Schwerpunkt auf mobilem UX und sicherer Datenverarbeitung. Enthält Nutzer-Authentifizierung und Echtzeit-Aktivitäts-Tracking.',
  },
  {
    title: 'Projekt Drei',
    images: [
      '/images/project3-1.jpg',
      '/images/project3-2.jpg',
      '/images/project3-3.jpg',
    ],
    shortDesc: 'E-Commerce-Plattform für lokale Geschäfte.',
    tech: ['Stripe Integration', 'Responsive Design', 'State Management'],
    details:
      'Entwickelt für Skalierbarkeit und einfache Zahlungsabwicklung. Nutzt modernes React-State-Management und Stripe für Zahlungen.',
  },
];

const TechTag = ({ name }) => {
  const classes = getTechClasses(name);
  return (
    <span
      className={`text-xs ${classes} px-3 py-1 rounded-full mr-2 mb-2 inline-block`}
      title={name}
      aria-label={name}
    >
      {name}
    </span>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((i) => (i + 1) % project.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition"
      onClick={onClick}
    >
      <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={project.images[imgIdx]}
          alt={project.title}
          className="object-cover h-full w-full"
        />
      </div>
      <h3 className="text-xl font-bold mb-1 text-blue-900">{project.title}</h3>
      <p className="text-gray-700 mb-2 text-center">{project.shortDesc}</p>
      <div className="w-full flex flex-wrap justify-center mt-2">
        {project.tech.map((t, i) => (
          <TechTag key={i} name={t} />
        ))}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => (
  <div
    className="fixed inset-0 flex items-center justify-center z-50"
    style={{ background: 'rgba(0, 0, 0, 0.6)' }}
    onClick={onClose}
  >
    <div
      className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-blue-700 text-2xl"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <div className="flex gap-2 mb-4">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} ${idx + 1}`}
            className="h-24 w-24 object-cover rounded"
          />
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-blue-900">{project.title}</h3>
      <p className="mb-3">{project.details}</p>
      <div className="mt-3">
        <div className="text-sm inline-flex flex-wrap">
          {project.tech.map((t, i) => (
            <TechTag key={i} name={t} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Projekte</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
