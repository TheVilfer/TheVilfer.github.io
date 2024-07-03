import React from 'react';

const Bio: React.FC = () => (
  <section className="bio">
    <h2>About Me</h2>
    <div className="bio-container">
      <img
        src="IMG_2129.jpg"
        alt="Portrait of Sergei Polin"
        className="portrait"
      />
      <p>
        Hi, I&apos;m Sergei Polin. I&apos;m a web developer with a passion for
        creating interactive and dynamic web experiences. I have experience in
        HTML, CSS, and JavaScript, and I enjoy working on innovative projects
        that challenge my skills.
      </p>
    </div>
  </section>
);

export default Bio;
