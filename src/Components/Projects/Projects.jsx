import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Project One',
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg',
    ],
    shortDesc: 'A web app for managing tasks efficiently.',
    tech: 'PostgreSQL, MySQL, TanStack Routing, API usage, Error Handling',
    details:
      'This project demonstrates advanced database integration and robust error management. Built with React and .NET backend.',
  },
  {
    title: 'Project Two',
    images: ['/images/project2-1.jpg', '/images/project2-2.jpg'],
    shortDesc: 'Mobile app for tracking fitness activities.',
    tech: 'React Native, REST APIs, Authentication',
    details:
      'Focus on mobile UX and secure data handling. Includes user authentication and real-time activity tracking.',
  },
  {
    title: 'Project Three',
    images: [
      '/images/project3-1.jpg',
      '/images/project3-2.jpg',
      '/images/project3-3.jpg',
    ],
    shortDesc: 'E-commerce platform for local businesses.',
    tech: 'Stripe Integration, Responsive Design, State Management',
    details:
      'Built for scalability and easy payment processing. Uses modern React state management and Stripe for payments.',
  },
];

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
      <p className="text-gray-700 mb-2">{project.shortDesc}</p>
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
        {project.tech}
      </span>
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
      <div className="text-sm text-blue-800 bg-blue-100 px-2 py-1 rounded inline-block">
        {project.tech}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">My Projects</h2>
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
