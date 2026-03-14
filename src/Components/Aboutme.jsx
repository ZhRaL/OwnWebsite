const principles = [
  {
    title: 'Technische Klarheit',
    text: 'Ich analysiere Anforderungen und bestehende Systeme so, dass technische Entscheidungen nachvollziehbar und realistisch bleiben.',
  },
  {
    title: 'Strukturierte Systemarchitektur',
    text: 'Ich bevorzuge Architekturen mit klaren Verantwortlichkeiten, stabilen Schnittstellen und einer sauberen technischen Grundlage.',
  },
  {
    title: 'Ehrliche Kommunikation',
    text: 'Ich benenne technische Risiken, Aufwand und Grenzen offen, damit Entscheidungen auf einer belastbaren Grundlage getroffen werden können.',
  },
  {
    title: 'Nachhaltige Softwarelösungen',
    text: 'Mein Fokus liegt auf Software, die nicht nur kurzfristig funktioniert, sondern später auch wartbar und weiterentwickelbar bleibt.',
  },
];

const Aboutme = () => {
  return (
    <section id="about" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Über mich</span>
          <h2>Softwareentwicklung mit Fokus auf tragfähige Lösungen.</h2>
        </div>
        <p>
          Ich bin Basti, Fullstack-Entwickler aus Deutschland mit Schwerpunkt
          Backend-Entwicklung.
        </p>
      </div>

      <div className="two-column-layout">
        <div className="body-copy">
          <p>
            Ich unterstütze Startups, Gründer und Unternehmen dabei,
            Webplattformen, APIs und technische Produkte umzusetzen oder
            bestehende Systeme weiterzuentwickeln.
          </p>
          <p>
            Viele Projekte starten mit einer Idee oder mit Software, die über
            die Jahre gewachsen ist. In solchen Situationen analysiere ich
            bestehende Strukturen, bringe Ordnung in komplexe Logik und
            entwickle Lösungen, die stabil und nachvollziehbar bleiben.
          </p>
          <p>
            Neben praktischer Entwicklungserfahrung habe ich einen
            Masterabschluss in Cyber-Sicherheit. Dadurch betrachte ich Software
            nicht nur funktional, sondern auch aus einer Sicherheits- und
            Architekturperspektive.
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
