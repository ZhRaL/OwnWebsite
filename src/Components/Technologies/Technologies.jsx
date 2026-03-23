const technologyGroups = [
  {
    title: 'Technologien',
    text: 'Technologien, mit denen ich regelmäßig arbeite.',
    badges: ['C#', '.NET', 'React', 'Unity'],
  },
  {
    title: 'Ausbildung',
    text: 'Akademischer Hintergrund in Entwicklung und Sicherheit.',
    badges: ['B.Sc. Computer Science', 'M.Sc. Cyber Security (2023)'],
  },
  {
    title: 'Zertifikate',
    text: 'Weiterbildung mit Fokus auf Codequalität und Sicherheit.',
    badges: ['Clean Code (2025)', 'Web Security (2025)', 'Softwarearchitektur für Entwickler (2026)'],
  },
  {
    title: 'Arbeitsprofil',
    text: 'So arbeite ich in Projekten.',
    badges: ['Backend focus', 'Agile collaboration', 'Structured development', 'Transparent communication'],
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Kompetenzen & Profil</span>
          <h2>Technologien, Ausbildung und Arbeitsweise im Überblick.</h2>
        </div>
        <p>
          Die Auswahl zeigt die Technologien, fachlichen Grundlagen und die
          Arbeitsweise, mit denen ich Projekte strukturiert umsetze.
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
