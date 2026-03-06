import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="home-title">
          Hi, I'm <span className="highlight">John Lester M. De Guzman</span>
        </h1>
        <h2 className="home-subtitle">STEM Graduate | Aspiring IT Professional</h2>
        <p className="home-description">
          A fresh graduate from Bulacan State University with a passion for technology 
          and a strong foundation in STEM. Eager to apply my skills and contribute to 
          innovative projects in an entry-level IT position.
        </p>
        <motion.div 
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary glass-btn">View My Work</a>
          <a href="#contact" className="btn btn-secondary glass-btn">Contact Me</a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="home-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="profile-container glass-circle">
          <img 
            src="/profile.jpg" 
            alt="John Lester M. De Guzman" 
            className="profile-image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;