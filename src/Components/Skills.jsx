const services = [
  {
    label: 'Leistung 01',
    title: 'Fullstack-Webentwicklung',
    text: 'Mein Fokus liegt darauf, Ideen in funktionierende, praxistaugliche Software zu überführen. Ich entwickle keine Luftschlösser, sondern Lösungen, die sauber umgesetzt, sinnvoll eingesetzt und im Alltag belastbar genutzt werden können.',
    points: ['Frontend mit React', 'Strukturierte Anwendungslogik', 'Praxisnahe Umsetzung mit echtem Nutzwert'],
  },
  {
    label: 'Leistung 02',
    title: 'Backend-Entwicklung mit .NET',
    text: 'Backend-Systeme, APIs und serverseitige Logik mit besonderem Fokus auf Stabilität, Wartbarkeit, technische Sauberkeit und klare Verantwortlichkeiten.',
    points: ['C# und .NET seit 8 Jahren', 'Starke Backend-Ausrichtung', 'Robuste Daten- und Prozesslogik'],
  },
  {
    label: 'Leistung 03',
    title: 'Sicherheitsorientierte Umsetzung',
    text: 'Entwicklung mit Blick auf technische Risiken, saubere Strukturen und fundiertes Verständnis für IT-Sicherheit und sichere Softwareentwicklung.',
    points: ['Master in Cyber-Sicherheit', 'Web-Securities-Zertifikat', 'Bewusster Umgang mit Qualität und Risiken'],
  },
  {
    label: 'Leistung 04',
    title: 'Technische Prototypen und interaktive Systeme',
    text: 'Erfahrung aus mehreren Jahren Unity-Entwicklung ergänzt meinen Blick für interaktive Anwendungen, saubere Systemlogik und prototypische Umsetzung.',
    points: ['Unity-Erfahrung über 5 Jahre', 'Interaktive Produktlogik', 'Praxisnahe technische Umsetzung'],
  },
];

const Skills = () => {
  return (
    <section id="services" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Leistungen & Schwerpunkte</span>
          <h2>Klare technische Leistungen für anspruchsvolle digitale Vorhaben.</h2>
        </div>
        <p>
          Mein Fokus liegt auf Lösungen, die nicht nur gut klingen, sondern sauber umgesetzt und in
          der Praxis wirklich eingesetzt werden. Ich verbinde technische Tiefe mit einem klaren
          Blick für Machbarkeit, Nutzwert und nachhaltige Umsetzung.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <span className="card-label">{service.label}</span>
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
