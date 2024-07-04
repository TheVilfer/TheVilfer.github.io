import React from "react";
import Image from "next/image";

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
        <Image src="/github-icon.png" alt="GitHub" width={50} height={50} />
      </a>
      <a
        id="tg-link"
        href="https://t.me/vilfer"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/telegram-icon.png" alt="Telegram" width={50} height={50} />
      </a>
      <a id="email" href="mailto:dev.vilfer@gmail.com">
        <Image src="/email-icon.png" alt="Email" width={50} height={50} />
      </a>
    </div>
  </section>
);

export default Contact;
