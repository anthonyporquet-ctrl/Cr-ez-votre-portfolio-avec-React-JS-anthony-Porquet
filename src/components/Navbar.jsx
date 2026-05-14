import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">ANTHONY PORQUET</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
        <li><NavLink to="/services" onClick={closeMenu}>SERVICES</NavLink></li>
        <li><NavLink to="/portfolio" onClick={closeMenu}>PORTFOLIO</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink></li>
        <li><NavLink to="/mentions-legal" onClick={closeMenu}>MENTIONS LEGALE </NavLink></li>
      </ul>
    </nav>
  );
}
