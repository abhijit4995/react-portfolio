import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create the respective CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ABHIJIT</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link">Skills</Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;