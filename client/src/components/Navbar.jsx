import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Always show navbar at very top
      if (currentScroll < 10) {
        setShowNavbar(true);
      } 
      // Hide when scrolling down
      else if (currentScroll > lastScrollY) {
        setShowNavbar(false);
      } 
      // Show when scrolling up
      else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'nav-show' : 'nav-hide'}`}>
      <div className="nav-container">

        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">JLMDG</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;