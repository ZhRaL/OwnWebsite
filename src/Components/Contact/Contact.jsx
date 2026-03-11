import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    'bot-field': '',
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const isDisabled = !form.name.trim() || !form.email.trim() || !form.message.trim();

  return (
    <section id="contact" className="content-section section-shell">
      <div className="section-header">
        <div>
          <span className="section-kicker">Kontakt</span>
          <h2>Direkter Austausch für Projekte mit technischem Anspruch.</h2>
        </div>
        <p>
          Wenn du eine verlässliche technische Umsetzung suchst und Wert auf saubere Entwicklung,
          klare Kommunikation und professionelle Zusammenarbeit legst, freue ich mich auf deine
          Nachricht.
        </p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <span className="card-label">Direkter Kontakt</span>
          <h3>Einfach, seriös und ohne Umwege.</h3>
          <p>
            Ob neue Anwendung, Weiterentwicklung bestehender Systeme oder technische Unterstützung in
            einem laufenden Projekt: Ich antworte gerne auf konkrete Anfragen.
          </p>
          <div className="contact-points">
            <div className="contact-point">
              <span>E-Mail</span>
              <a href="mailto:info@alpha-coding.dev">info@alpha-coding.dev</a>
            </div>
            <div className="contact-point">
              <span>Telefon</span>
              <a href="tel:+4915142492807">+49 151 42492807</a>
            </div>
            <div className="contact-point">
              <span>Standort</span>
              <p>53881 Euskirchen, Deutschland</p>
            </div>
          </div>
        </article>

        <article className="form-card">
          <span className="card-label">Nachricht senden</span>
          <h3>Projektanfrage oder fachlicher Austausch</h3>
          <form className="contact-form" method="post" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" onChange={handleChange} type="text" value={form['bot-field']} />
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                  type="text"
                  value={form.name}
                />
              </div>
              <div className="field">
                <label htmlFor="email">E-Mail *</label>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  type="email"
                  value={form.email}
                />
              </div>
              <div className="field">
                <label htmlFor="company">Firma</label>
                <input
                  id="company"
                  name="company"
                  onChange={handleChange}
                  type="text"
                  value={form.company}
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  value={form.phone}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Nachricht *</label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                required
                rows="6"
                value={form.message}
              />
            </div>

            <button className="button button-primary" disabled={isDisabled} type="submit">
              Nachricht senden
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contact;
