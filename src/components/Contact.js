import React, { useState } from 'react';

/**
 * Contact form section.
 */
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      JSON.stringify({ level: 'INFO', action: 'submit_contact', data: form })
    );
    // TODO: hook up your email/send endpoint here
    alert('Thanks for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="content-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
