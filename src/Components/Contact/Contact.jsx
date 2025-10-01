import { useState } from 'react';
import SingleLineInput from './SingleLineInput';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { 'form-name': 'contact', ...form };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => {
        alert(
          'Danke, deine Nachricht wurde erfolgreich gesendet! Have a nice day :)'
        );
        setForm({ name: '', email: '', company: '', phone: '', message: '' });
      })
      .catch((error) => alert('Es ist ein Fehler aufgetreten: ' + error));
  };

  const isDisabled = !form.name.trim() || !form.email.trim();

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Contact</h2>
      <p>
        {' '}
        if you are interested in getting in touch with me, to raise your project
        to the next level, please dont hesitate to ask!
      </p>
      <p>E-mail: info@bastidev.com</p>
      <p> or use this amazing form:</p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full"
      >
        {/* hidden field, wichtig für Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="flex flex-row gap-5 w-full">
          {/* Linke Spalte */}
          <div className="flex flex-col gap-5 flex-1">
            <label
              className="font-bold font-sans text-left text-blue-900"
              htmlFor="name"
            >
              Name:<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label
              className="font-bold font-sans text-left text-blue-900"
              htmlFor="email"
            >
              E-mail:<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Rechte Spalte */}
          <div className="flex flex-col gap-5 flex-1">
            <label
              className="font-bold font-sans text-left text-blue-900"
              htmlFor="company"
            >
              Company:
            </label>
            <input
              className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
            />

            <label
              className="font-bold font-sans text-left text-blue-900"
              htmlFor="phone"
            >
              Phone number:
            </label>
            <input
              className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
              type="text"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <label
          className="font-bold font-sans text-left text-blue-900"
          htmlFor="message"
        >
          Your Message:
        </label>
        <textarea
          className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={`mt-4 px-6 py-2 font-bold rounded-lg shadow-lg transition ${
            isDisabled
              ? 'bg-gray-400 text-gray-200'
              : 'bg-blue-500 text-white hover:bg-blue-700 cursor-pointer'
          }`}
          disabled={isDisabled}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
