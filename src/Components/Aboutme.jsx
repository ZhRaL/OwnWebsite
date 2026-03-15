const principles = [
  {
    title: 'Technologischer Fokus',
    text: 'C#, .NET, React, Webplattformen und APIs',
  },
  {
    title: 'Arbeitsweise',
    text: 'Strukturiert, direkt und lösungsorientiert',
  },
  {
    title: 'Zusammenarbeit',
    text: 'Offene Kommunikation und ehrliche technische Einschätzung',
  },
  {
    title: 'Fachlicher Hintergrund',
    text: 'B.Sc. Informatik, M.Sc. Cyber-Sicherheit',
  },
];

const Aboutme = () => {
  return (
    <section id="about" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Über mich</span>
          <h2>Softwareentwicklung mit Fokus auf strukturierte und tragfähige Lösungen.</h2>
        </div>
        <p>
          Ich bin Basti, Freelancer für Fullstack-Entwicklung aus Deutschland mit Schwerpunkt Backend-Entwicklung.
        </p>
      </div>

      <div className="two-column-layout">
        <div className="body-copy">
          <p>
            Ich unterstütze Startups, Gründer, Agenturen und Unternehmen dabei,
            Webplattformen, APIs und technische Produkte umzusetzen oder
            bestehende Systeme weiterzuentwickeln.
          </p>
          <p>
            Besonders interessant sind für mich Projekte, bei denen technische
            Struktur eine wichtige Rolle spielt: wenn Systeme über Zeit
            gewachsen sind, wenn neue Produkte sauber aufgebaut werden sollen
            oder wenn bestehende Anwendungen stabiler und wartbarer werden
            müssen.
          </p>
          <p>
            Meine Stärke liegt darin, komplexe technische Situationen ruhig und
            strukturiert zu analysieren und daraus Lösungen zu entwickeln, die
            im Alltag tatsächlich tragfähig sind.
          </p>
          <p>
            Neben praktischer Entwicklungserfahrung habe ich einen
            Masterabschluss in Cyber-Sicherheit. Dadurch betrachte ich Software
            nicht nur funktional, sondern auch mit Blick auf Stabilität,
            Architektur und Sicherheit.
          </p>
        </div>

        <div className="highlight-list">
          {principles.map((principle) => (
            <article key={principle.title} className="detail-card">
              <strong>{principle.title}</strong>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
