const Impressum = () => {
  return (
    <section id="impressum" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Impressum</span>
          <h2>Rechtliche Angaben</h2>
        </div>
        <p>Angaben gemäß § 5 TMG und weitere gesetzlich erforderliche Informationen.</p>
      </div>

      <div className="service-grid">
        <article className="service-card">
          <h3>Anbieter</h3>
          <p>Sebastian Albert Softwareentwicklung</p>
          <p>Ohmstr. 9, 53881 Euskirchen, Deutschland</p>
          <p>E-Mail: Sebastian.Albert@alpha-coding.dev</p>
          <p>Telefon: +49 151 42492807</p>
        </article>

        <article className="service-card">
          <h3>Tätigkeit</h3>
          <p>Freiberuflicher Softwareentwickler</p>
          <p>Umsatzsteuer-Identifikationsnummer: DE459876602</p>
          <p>Verantwortlich für den Inhalt: Sebastian Albert, Ohmstr. 9, 53881 Euskirchen</p>
        </article>

        <article className="service-card">
          <h3>Berufsrechtliche Angaben</h3>
          <p>
            Für die ausgeübte Tätigkeit gelten keine speziellen berufsrechtlichen Vorschriften, da
            es sich um einen nicht reglementierten Beruf handelt.
          </p>
        </article>

        <article className="service-card">
          <h3>Haftungsausschluss</h3>
          <p>
            Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
            übernommen werden.
          </p>
          <p>
            Externe Links werden gegebenenfalls nicht fortlaufend geprüft. Für die Inhalte
            verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Impressum;
