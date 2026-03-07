import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer glass-card">
      <div className="footer-social">
        <a
          href="https://github.com/mdgLester"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub size={36} />
        </a>

        <a
          href="https://www.linkedin.com/in/lester-de-guzman-528852302/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={36} />
        </a>

        <a
          href="https://www.facebook.com/lestermdg21/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook size={36} />
        </a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} John Lester M. De Guzman. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;