import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading (remove when using real data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Shows skeleton for 1 second
    
    return () => clearTimeout(timer);
  }, []);

  // Skeleton loader for footer
  if (loading) {
    return (
      <footer className="footer glass-card">
        <div className="footer-social skeleton-footer-social">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="social-link skeleton-social-link" />
          ))}
        </div>
        <div className="footer-text skeleton-footer-text" />
      </footer>
    );
  }

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