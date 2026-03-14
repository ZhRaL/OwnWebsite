const services = [
  {
    title: 'Webplattformen und Anwendungen',
    text: 'Ich entwickle Webplattformen und Single-Page-Applications mit React und .NET. Dabei liegt der Fokus auf klarer Architektur, stabiler Backend-Logik und einer soliden Grundlage für zukünftige Erweiterungen.',
    points: ['React Frontend', 'Strukturierte Backend-Logik', 'Skalierbare Architektur'],
  },
  {
    title: 'Backend-Entwicklung und APIs',
    text: 'Backend-Systeme sind das Fundament moderner Anwendungen. Ich entwickle APIs und serverseitige Systeme mit Fokus auf Stabilität, Wartbarkeit und nachvollziehbare Datenstrukturen.',
    points: ['C# und .NET', 'API-Design', 'klare Daten- und Prozesslogik'],
  },
  {
    title: 'MVPs und Prototypen',
    text: 'Für Startups und Gründer entwickle ich technische MVPs, mit denen Produktideen schnell getestet und weiterentwickelt werden können.',
    points: ['schnelle technische Umsetzung', 'Fokus auf funktionierende Kernlogik', 'Grundlage für spätere Weiterentwicklung'],
  },
  {
    title: 'Stabilisierung bestehender Systeme',
    text: 'Viele Anwendungen wachsen über Jahre und werden schwer wartbar. Ich unterstütze dabei, bestehende Systeme zu analysieren, Architekturprobleme zu identifizieren und Backend-Strukturen zu verbessern.',
    points: ['Analyse bestehender Systeme', 'Refactoring und Strukturverbesserung', 'Stabilisierung der Backend-Logik'],
  },
];

const Skills = () => {
  return (
    <section id="services" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Leistungen & Schwerpunkte</span>
          <h2>Klare technische Leistungen für digitale Produkte und bestehende Systeme.</h2>
        </div>
        <p>
          Ich übernehme Projekte dort, wo technische Struktur, stabile
          Backend-Logik und nachvollziehbare Umsetzung entscheidend sind.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul className="bullet-list">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
