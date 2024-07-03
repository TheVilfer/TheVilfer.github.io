import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header">
    <h1>Sergei Polin</h1>
    <p>Web Developer</p>
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/comic">Comic Viewer</Link>
    </nav>
  </header>
);

export default Header;
