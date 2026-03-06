import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-card">
      <div className="footer-social">
        {['GitHub','LinkedIn','Email'].map((s,i)=><a key={i} href="#" className="social-link">{s}</a>)}
      </div>
      <p>© {new Date().getFullYear()} John Lester M. De Guzman. All rights reserved.</p>
    </footer>
  );
};

export default Footer;