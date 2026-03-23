import { useState } from 'react';

const scenarios = [
  {
    title:
      'Du hast eine Idee für ein digitales Produkt und möchtest herausfinden, ob sie funktioniert.',
    description:
      'Ich setze deine Idee als ersten funktionsfähigen Prototyp um, damit du testen kannst, ob dein Konzept in der Praxis überzeugt – bevor du viel Zeit oder Geld investierst.',
  },
  {
    title:
      'Du startest oder hast schon ein Unternehmen und brauchst eine professionelle Website.',
    description:
      'Ich erstelle eine übersichtliche und moderne Website, die dein Angebot verständlich präsentiert und Vertrauen bei deinen Kunden aufbaut.',
  },
  {
    title:
      'Du möchtest Abläufe in deinem Unternehmen digitalisieren oder wiederkehrende Aufgaben automatisieren.',
    description:
      'Ich entwickle Software, die dir hilft, Prozesse zu vereinfachen, Zeit zu sparen und Fehler zu reduzieren – damit du dich auf dein eigentliches Geschäft konzentrieren kannst.',
  },
  {
    title:
      'Du möchtest ein digitales Produkt entwickeln und suchst jemanden, der die technische Umsetzung übernimmt.',
    description:
      'Ich unterstütze dich dabei, deine Idee Schritt für Schritt umzusetzen – strukturiert, verständlich und mit Blick auf eine langfristig funktionierende Lösung.',
  },
];

const Scenarios = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="scenarios" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Typische Szenarien</span>
          <h2>Wann ich unterstütze – und wie Projekte schneller starten.</h2>
        </div>
        <p>
          Nicht jedes Projekt startet mit einer fertigen technischen
          Spezifikation. Oft gibt es zunächst nur ein Ziel, eine Idee oder ein
          Problem, das gelöst werden soll.
        </p>
      </div>

      <div className="scenarios-accordion">
        {scenarios.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={item.title}
              className={`accordion-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="accordion-trigger"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <span className="accordion-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                className="accordion-panel"
                aria-hidden={!isOpen}
                hidden={!isOpen}
              >
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Scenarios;
