import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  // Array of profile images
  const images = [
    '/profile.jpg',
    '/profile1.jpg',
    '/profile2.jpg',
    '/profile3.jpg',
    '/profile4.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    // Cycle to the next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="home">
      <motion.div 
        className="home-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm <span className="highlight">John Lester</span></h1>
        <h2>STEM Graduate | College Graduate | Aspiring IT Professional | Musician</h2>
        <p>
          Passionate about technology and eager to contribute to innovative projects 
          with a strong educational foundation.
        </p>
        <div className="home-buttons">
          <a href="#about" className="glass-btn">Know Me More</a>
          <a href="#projects" className="glass-btn">View Work</a>
          <a href="#contact" className="glass-btn">Contact Me</a>
        </div>
      </motion.div>

      <motion.div 
        className="home-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-container glass-card" onClick={handleImageClick}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="John Lester"
              className="profile-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              style={{ cursor: 'pointer' }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;