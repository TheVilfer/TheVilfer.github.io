import React from 'react';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => (
  <div>
    <Bio />
    <Projects />
    <Contact />
  </div>
);

export default Home;
