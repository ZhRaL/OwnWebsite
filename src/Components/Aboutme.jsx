const principles = [
  {
    title: 'Technische Klarheit',
    text: 'Ich arbeite strukturiert, denke Systeme sauber durch und bevorzuge Lösungen, die langfristig tragfähig bleiben.',
  },
  {
    title: 'Verlässliche Zusammenarbeit',
    text: 'Offene Kommunikation, Transparenz und eine konstruktive Fehlerkultur sind für mich kein Zusatz, sondern Standard.',
  },
  {
    title: 'Business-Verständnis',
    text: 'Technik soll nicht nur funktionieren, sondern konkrete Anforderungen sauber, effizient und nachvollziehbar abbilden.',
  },
  {
    title: 'Qualität mit Anspruch',
    text: 'Wartbarkeit, Performance, saubere Architektur und nutzerorientierte Umsetzung haben für mich hohen Stellenwert.',
  },
];

const Aboutme = () => {
  return (
    <section id="about" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Über mich</span>
          <h2>Entwicklung mit Fokus, Verantwortung und technischer Tiefe.</h2>
        </div>
        <p>
          Ich bin Basti, 32 Jahre alt, Fullstack-Entwickler aus Deutschland und arbeite
          schwerpunktmäßig mit .NET und React. Mein fachliches Zuhause liegt klar im Backend,
          gleichzeitig denke ich Anwendungen immer als Ganzes.
        </p>
      </div>

      <div className="two-column-layout">
        <div className="body-copy">
          <p>
            Ich entwickle Softwarelösungen mit dem Anspruch, echten Mehrwert zu schaffen. Mir ist
            wichtig, dass Anwendungen nicht nur kurzfristig liefern, sondern auch strukturell sauber,
            nachvollziehbar und belastbar bleiben.
          </p>
          <p>
            Neue Herausforderungen nehme ich gerne an. Ich arbeite bevorzugt in agilen,
            kollaborativen Umfeldern und schätze Zusammenarbeit, in der fachliche Klarheit, direkte
            Kommunikation und ein hoher Qualitätsanspruch selbstverständlich sind.
          </p>
          <p>
            Kundenzufriedenheit hat für mich oberste Priorität. Das zeigt sich nicht nur im
            Ergebnis, sondern vor allem in einer verlässlichen, professionellen und
            lösungsorientierten Arbeitsweise.
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
