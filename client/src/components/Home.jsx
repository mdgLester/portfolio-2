import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Home.css';

const Home = () => {
  // Array of profile images
  const images = [
    '/profile.jpg',
    '/profile1.jpg',
    '/profile2.jpg',
    '/profile3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="home">
      {/* Left content with fade and slide */}
      <RevealOnScroll direction="left" delay={0.2} duration={0.8}>
        <div className="home-left">
          <RevealOnScroll direction="up" delay={0.3} threshold={0.1}>
            <h1>Hi, I'm <span className="highlight">John Lester</span></h1>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.4} threshold={0.1}>
            <h2>BSIT College Graduate | Aspiring IT Professional</h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.5} threshold={0.1}>
            <p>
              Passionate about technology and eager to contribute to innovative projects 
              with a strong educational foundation.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.6} threshold={0.1}>
            <div className="home-buttons">
              <a href="#about" className="glass-btn">Know Me More</a>
              <a href="#projects" className="glass-btn">View Work</a>
              <a href="#skills" className="glass-btn">What Can I Do</a> {/* New button */}
              <a href="#contact" className="glass-btn">Contact Me</a>
            </div>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>

      {/* Right content with scale effect */}
      <RevealOnScroll direction="right" delay={0.3} duration={0.8}>
        <div className="home-right">
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
                transition={{ duration: 0.5 }}
                style={{ cursor: 'pointer' }}
              />
            </AnimatePresence>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;