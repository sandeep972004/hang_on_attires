import React from 'react'

export default function Contact() {
  return (
    <section className="container page">
      <h1>Contact Us</h1>
      <p>
        For orders or queries, reach us on Instagram or WhatsApp via the links in the navbar.
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Your message" rows="5" />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
