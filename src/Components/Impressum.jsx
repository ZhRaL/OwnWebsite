import React from 'react';

const Impressum = () => {
  return (
    <section id="impressum" className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Impressum</h2>

      <p className="mb-2">Angaben gemäß § 5 TMG:</p>
      <p className="mb-1">Name: Sebastian Albert Softwareentwicklung</p>
      <p className="mb-1">
        Anschrift: Ohmstr. 9, 53881 Euskirchen, Deutschland
      </p>
      <p className="mb-4">
        Kontakt: E-Mail: Sebastian.Albert@alpha-coding.dev, Telefon: +49 151
        42492807
      </p>

      <h3 className="font-semibold mt-4 mb-2">Tätigkeitsbezeichnung</h3>
      <p className="mb-4">Freiberuflicher Softwareentwickler</p>

      <h3 className="font-semibold mt-4 mb-2">Berufsrechtliche Angaben</h3>
      <p className="mb-4">
        Für die ausgeübte Tätigkeit gelten keine speziellen berufsrechtlichen
        Vorschriften (nicht reglementierter Beruf).
      </p>

      <p className="mb-2">Umsatzsteuer-Identifikationsnummer: DE459876602</p>

      <h3 className="font-semibold mt-4 mb-2">
        Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)
      </h3>
      <p className="mb-4">Sebastian Albert, Ohmstr. 9, 53881 Euskirchen</p>

      <h3 className="font-semibold mt-4 mb-2">Haftungsausschluss</h3>
      <p className="mb-2">
        Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich
        jedoch keine Gewähr übernehmen.
      </p>

      <p className="mb-2">
        Externe Links werden ggf. nicht fortlaufend überprüft. Für den Inhalt
        verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
    </section>
  );
};

export default Impressum;
