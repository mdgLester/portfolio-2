import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-content">
        <div className="footer-social">
          {['GitHub', 'LinkedIn', 'Email'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="social-link"
              whileHover={{ y: -3, color: '#007bff' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <motion.p 
          className="footer-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} John Lester M. De Guzman. All rights reserved.
        </motion.p>
        <motion.p 
          className="footer-text-small"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          STEM Graduate | Bulacan State University
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;