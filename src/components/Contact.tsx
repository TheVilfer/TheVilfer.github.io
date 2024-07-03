import React from 'react';

const Contact: React.FC = () => (
  <section className="contact">
    <h2>Contact</h2>
    <div className="social-links">
      <a
        id="gh-link"
        href="https://github.com/thevilfer"
        target="_blank"
        rel="noreferrer"
      >
        <img src="github-icon.png" alt="GitHub" />
      </a>
      <a
        id="tg-link"
        href="https://t.me/vilfer"
        target="_blank"
        rel="noreferrer"
      >
        <img src="telegram-icon.png" alt="Telegram" />
      </a>
      <a id="email" href="mailto:dev.vilfer@gmail.com">
        <img src="email-icon.png" alt="Email" />
      </a>
    </div>
  </section>
);

export default Contact;
