import React from "react";

const projects = [
  {
    title: "HotDog or Not?",
    description:
      "A small project to recognise hotdogs in an image using machine learning",
    link: "https://github.com/TheVilfer/hotdogornot-serverside",
  },
  {
    title: "ZeroKelvin shop",
    description:
      "A small e-commerce project written by me from scratch without using JavaScript frameworks",
    link: "https://github.com/TheVilfer/ZeroKelvin",
  },
  {
    title: "Research project",
    description: "A small site to investigate user focus",
    link: "https://github.com/TheVilfer/lera-research",
  },
  {
    title: "XKCD Comic Viewer",
    description: "A project to fetch and display XKCD comics using an API",
    link: "/comic",
  },
];

const Projects: React.FC = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
