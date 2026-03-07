import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-card">
      <div className="footer-social">
        <a href="https://github.com/mdgLester" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        <a href="https://www.linkedin.com/in/lester-de-guzman-528852302/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        <a href="https://www.facebook.com/lestermdg21/" className="social-link">Facebook</a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} John Lester M. De Guzman. All rights reserved.</p>
    </footer>
  );
};

export default Footer;