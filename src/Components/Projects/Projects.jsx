const focusAreas = [
  {
    label: 'Fokusfeld',
    title: 'Backend-zentrierte Produktentwicklung',
    text: 'Ich arbeite vor allem an den Teilen eines Produkts, die für Stabilität, klare Prozesse und saubere technische Grundlagen verantwortlich sind.',
  },
  {
    label: 'Arbeitsweise',
    title: 'Zusammenarbeit in kleinen Teams',
    text: 'Viele Projekte entstehen in kleinen Teams oder direkt mit Gründern. Dort sind klare Abstimmung und pragmatische technische Entscheidungen besonders wichtig.',
  },
  {
    label: 'Qualitätsanspruch',
    title: 'Saubere Architektur statt kurzfristiger Workarounds',
    text: 'Ich bevorzuge Lösungen, die die Systemstruktur verbessern, statt spätere Probleme durch kurzfristige Abkürzungen zu verstärken.',
  },
  {
    label: 'Status',
    title: 'Kontinuierliche Weiterentwicklung von Software',
    text: 'Ein grosser Teil meiner Arbeit besteht nicht nur im Neubau, sondern in der schrittweisen Weiterentwicklung bestehender Anwendungen und Systeme.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Projekte, Erfahrung & Arbeitsweise</span>
          <h2>Technische Umsetzung mit Fokus auf stabile Systeme.</h2>
        </div>
        <p>
          Ein grosser Teil meiner Arbeit besteht darin, Systeme zu entwickeln
          oder bestehende Software weiterzuentwickeln. Der Fokus liegt dabei auf
          klarer Architektur, stabiler Backend-Logik und Lösungen, die
          langfristig wartbar bleiben.
        </p>
      </div>

      <div className="focus-grid">
        {focusAreas.map((area) => (
          <article key={area.title} className="focus-card">
            <span className="card-label">{area.label}</span>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </div>

      <div className="muted-panel mt-6">
        <h3>Praktische Entwicklung statt Showcases</h3>
        <p>
          Diese Seite beschreibt bewusst den fachlichen Schwerpunkt und die Art
          der Zusammenarbeit. Im Vordergrund stehen reale Entwicklungsarbeit,
          stabile Systeme und nachvollziehbare technische Entscheidungen.
        </p>
      </div>
    </section>
  );
};

export default Projects;
