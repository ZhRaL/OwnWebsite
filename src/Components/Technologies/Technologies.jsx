const technologyGroups = [
  {
    title: 'Technologien',
    text: 'Schwerpunkte in moderner Webentwicklung mit einem klaren Fokus auf robuste, praxisnahe Umsetzung.',
    badges: ['C#', '.NET', 'React', 'Unity'],
  },
  {
    title: 'Ausbildung',
    text: 'Fundierte akademische Basis in Softwareentwicklung und IT-Sicherheit.',
    badges: ['B.Sc. Informatik', 'M.Sc. Cyber-Sicherheit (2023)'],
  },
  {
    title: 'Zertifikate',
    text: 'Gezielte fachliche Vertiefung in Qualität und sichere Webentwicklung.',
    badges: ['Clean Code (2025)', 'Web-Securities (2025)'],
  },
  {
    title: 'Arbeitsprofil',
    text: 'Professionelle Umsetzung mit Fokus auf Nachhaltigkeit, Zusammenarbeit und technische Exzellenz.',
    badges: ['Backend-Fokus', 'Agile Zusammenarbeit', 'Transparenz', 'Konstruktive Fehlerkultur'],
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Kompetenzen & Profil</span>
          <h2>Fundierte Qualifikation, technischer Fokus und ein klarer Qualitätsstandard.</h2>
        </div>
        <p>
          Meine Kenntnisse verbinden praktische Entwicklungserfahrung, akademische Tiefe und ein
          Arbeitsverständnis, das auf sauberer Umsetzung, Zuverlässigkeit und nachhaltiger
          Softwareentwicklung basiert.
        </p>
      </div>

      <div className="category-grid">
        {technologyGroups.map((group) => (
          <article key={group.title} className="category-card">
            <h3>{group.title}</h3>
            <p>{group.text}</p>
            <div className="badge-group">
              {group.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
