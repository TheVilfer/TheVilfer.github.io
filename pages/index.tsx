import React from "react";
import Bio from "../components/bio";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Home: React.FC = () => (
  <div>
    <Bio />
    <Projects />
    <Contact />
  </div>
);

export default Home;
