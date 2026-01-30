const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">
        Kenntnisse &amp; Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div>
          <p className="mb-3 text-lg">
            Ich verfüge über eine fundierte Ausbildung und mehrjährige
            Praxiserfahrung in Softwareentwicklung und IT‑Sicherheit. Im
            Folgenden findest du einen kurzen Überblick über meine
            Kernkompetenzen und Qualifikationen.
          </p>
        </div>

        <div>
          <ul className="skill-list list-disc pl-5">
            <li className="mb-2">
              <strong>Programmiersprachen &amp; Frameworks:</strong> C#, .NET
              (seit 8 Jahren)
            </li>
            <li className="mb-2">
              <strong>Game Development:</strong> Arbeiten mit Unity über fünf
              Jahre, zuletzt bis 2025
            </li>
            <li className="mb-2">
              <strong>Ausbildung:</strong> Bachelor of Science in Informatik;
              Master of Science in Cyber‑Sicherheit (Masterabschluss 2023)
            </li>
            <li className="mb-2">
              <strong>Zertifikate:</strong>
              <div className="mt-2">
                <span className="skill-badge">Clean Code (2025)</span>
                <span className="skill-badge">Web‑Securities (2025)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
