import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./images/download.png"; // Ensure correct path

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Converta" />
        <span className={`logo-text ${scrolled ? "scrolled-text" : ""}`}>Seemarise</span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navbar Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""} ${scrolled ? "scrolled-links" : ""}`}>
        <div className="nav-item" onClick={() => setMenuOpen(false)}>Home</div>
        <div className="nav-item" onClick={() => setMenuOpen(false)}>About Us</div>
        <div className="nav-item" onClick={() => setMenuOpen(false)}>Pages</div>
        <div className="nav-item" onClick={() => setMenuOpen(false)}>Features</div>
        <div className="nav-item" onClick={() => setMenuOpen(false)}>Blog</div>
        <div className="nav-item" onClick={() => setMenuOpen(false)}>Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
