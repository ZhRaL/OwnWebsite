const focusAreas = [
  {
    label: 'Fokusfeld',
    title: 'Backend-zentrierte Produktentwicklung',
    text: 'Mein Schwerpunkt liegt dort, wo Anwendungen tragfähig werden: in sauberer Business-Logik, belastbaren Schnittstellen, klarer Datenverarbeitung und stabilen technischen Strukturen.',
  },
  {
    label: 'Arbeitsweise',
    title: 'Agil, kollaborativ und direkt',
    text: 'Ich arbeite gerne in Teams, in denen Anforderungen klar diskutiert, technische Entscheidungen nachvollziehbar getroffen und Probleme offen gelöst werden.',
  },
  {
    label: 'Qualitätsanspruch',
    title: 'Saubere Lösungen statt kurzfristiger Workarounds',
    text: 'Mein Anspruch ist eine Umsetzung, die nicht nur heute funktioniert, sondern auch später nachvollziehbar, wartbar und professionell weiterentwickelbar bleibt.',
  },
  {
    label: 'Status',
    title: 'Referenzen im Ausbau',
    text: 'Die öffentliche Darstellung einzelner Projekte befindet sich aktuell noch im Aufbau. Inhaltlich liegt mein Fokus klar auf technischer Qualität, sauberer Umsetzung und verlässlicher Zusammenarbeit.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Projekte, Erfahrung & Arbeitsweise</span>
          <h2>Technische Arbeit, die auf Qualität und belastbare Ergebnisse ausgerichtet ist.</h2>
        </div>
        <p>
          Die bestehende Projektübersicht wird aktuell weiter ausgebaut. Bereits heute ist jedoch
          klar, wofür ich in der Umsetzung stehe: solide Entwicklung, direkte Kommunikation und ein
          Anspruch, der über reine Funktionserfüllung hinausgeht.
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
        <h3>Projektinformationen werden gezielt ausgebaut</h3>
        <p>
          Statt unpräziser Showcase-Karten oder austauschbarer Platzhalter wird diese Sektion
          schrittweise mit belastbaren Inhalten ergänzt. Bis dahin zeigt die Seite bewusst den
          professionellen Rahmen, die fachlichen Schwerpunkte und die Art, wie ich technische
          Zusammenarbeit angehe.
        </p>
      </div>
    </section>
  );
};

export default Projects;
