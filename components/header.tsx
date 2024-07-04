import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="header">
    <h1>Sergei Polin</h1>
    <p>Web Developer</p>
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/comic">Comic Viewer</Link>
    </nav>
  </header>
);

export default Header;
