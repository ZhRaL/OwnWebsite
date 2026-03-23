const Datenschutz = () => {
  return (
    <section id="datenschutz" className="content-section">
      <div className="section-header">
        <div>
          <span className="section-kicker">Datenschutz</span>
          <h2>Datenschutzerklärung</h2>
        </div>
        <p>
          Informationen zur Verarbeitung personenbezogener Daten auf dieser
          Website gemäß DSGVO.
        </p>
      </div>

      <div className="service-grid">
        <article className="service-card">
          <h3>1. Verantwortlicher</h3>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Sebastian Albert Softwareentwicklung
            <br />
            Ohmstr. 9, 53881 Euskirchen, Deutschland
            <br />
            info@alpha-coding.dev
            <br />
          </p>
          <br />
          <p>
            Der Verantwortliche entscheidet allein oder gemeinsam mit anderen
            über die Zwecke und Mittel der Verarbeitung von personenbezogenen
            Daten.
          </p>
        </article>

        <article className="service-card">
          <h3>2. Hosting</h3>
          <p>
            Diese Website wird bei dem Anbieter Netlify, Inc., 2325 3rd Street,
            Suite 296, San Francisco, CA 94107, USA gehostet.
          </p>
          <p>
            Netlify stellt die Infrastruktur und Plattform zum Betrieb dieser
            Website bereit. Beim Aufruf der Website werden durch Netlify
            automatisch Informationen in sogenannten Server-Logfiles erfasst.
          </p>
          <p>Dabei können folgende Daten verarbeitet werden:</p>
          <ul className="bullet-list">
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
          </ul>
          <p>
            Die Verarbeitung dieser Daten erfolgt zum Zweck der technischen
            Bereitstellung der Website sowie zur Gewährleistung der Stabilität
            und Sicherheit der Systeme.
          </p>
          <p>
            Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse).
          </p>
          <p>
            Unser berechtigtes Interesse besteht in der sicheren und effizienten
            Bereitstellung unseres Onlineangebotes.
          </p>
          <p>
            Da Netlify ein Unternehmen mit Sitz in den USA ist, kann eine
            Übermittlung personenbezogener Daten in ein Drittland erfolgen. Die
            Datenübermittlung erfolgt auf Grundlage geeigneter Garantien gemäß
            Art. 46 DSGVO, insbesondere durch die Verwendung von
            Standardvertragsklauseln.
          </p>
          <p>
            Weitere Informationen zum Datenschutz bei Netlify finden Sie unter:
            <br />
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.netlify.com/privacy/
            </a>
          </p>
        </article>

        <article className="service-card">
          <h3>3. Kontaktformular</h3>
          <p>
            Auf dieser Website ist ein Kontaktformular vorhanden, über das Sie
            mit uns in Kontakt treten können.
          </p>
          <p>
            Wenn Sie uns über das Formular kontaktieren, werden die von Ihnen
            eingegebenen Daten an uns übermittelt und verarbeitet. Dies betrifft
            insbesondere:
          </p>
          <ul className="bullet-list">
            <li>Name</li>
            <li>Firma</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Bestätigung der Datenschutzerklärung</li>
            <li>Inhalt der Nachricht</li>
          </ul>
          <p>
            Die Verarbeitung dieser Daten erfolgt ausschließlich zum Zweck der
            Bearbeitung Ihrer Anfrage und der möglichen Anbahnung eines
            Vertragsverhältnisses.
          </p>
          <p>
            Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO
            (Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
          </p>
          <p>
            Die über das Kontaktformular übermittelten Daten werden nur so lange
            gespeichert, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist
            oder gesetzliche Aufbewahrungspflichten bestehen.
          </p>
        </article>

        <article className="service-card">
          <h3>4. SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw.
            TLS-Verschlüsselung.
          </p>
          <p>
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von „http://“ auf „https://“ wechselt sowie
            an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>
        </article>

        <article className="service-card">
          <h3>5. Ihre Rechte</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf:
          </p>
          <ul className="bullet-list">
            <li>
              Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15
              DSGVO)
            </li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte können Sie sich jederzeit an den oben
            genannten Verantwortlichen wenden.
          </p>
        </article>

        <article className="service-card">
          <h3>6. Beschwerderecht bei der Aufsichtsbehörde</h3>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über
            die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          </p>
          <p>
            Zuständige Aufsichtsbehörde in Nordrhein-Westfalen ist
            beispielsweise:
          </p>
          <p>
            Landesbeauftragte für Datenschutz und Informationsfreiheit
            Nordrhein-Westfalen
            <br />
            <a href="https://www.ldi.nrw.de" target="_blank" rel="noreferrer">
              https://www.ldi.nrw.de
            </a>
          </p>
          <p>
            Sie können sich jedoch auch an jede andere
            Datenschutzaufsichtsbehörde innerhalb der Europäischen Union wenden.
          </p>
        </article>

        <article className="service-card">
          <h3>7. Aktualität und Änderung dieser Datenschutzerklärung</h3>
          <p>Diese Datenschutzerklärung hat den Stand: März 2026</p>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Änderungen unserer Leistungen in der Datenschutzerklärung
            umzusetzen.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Datenschutz;
