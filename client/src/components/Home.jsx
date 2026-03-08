import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import SkeletonLoader from './SkeletonLoader';
import '../styles/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/profile.jpg',
    '/profile1.jpg',
    '/profile2.jpg',
    '/profile3.jpg'
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate 1.5s load time
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [loading, images.length]);

  const handleImageClick = () => {
    if (!loading) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  if (loading) {
    return (
      <section id="home" className="home">
        <div className="home-left">
          <SkeletonLoader.Title />
          <SkeletonLoader.Text lines={2} />
          <SkeletonLoader.Button count={3} />
        </div>
        <div className="home-right">
          <SkeletonLoader.Avatar />
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="home">
      {/* Your existing home content */}
      <RevealOnScroll direction="left" delay={0.2} duration={0.8}>
        <div className="home-left">
          <RevealOnScroll direction="up" delay={0.3} threshold={0.1}>
            <h1>Hi, I'm <span className="highlight">John Lester</span></h1>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.4} threshold={0.1}>
            <h2>College Graduate | Aspiring IT Professional</h2>
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
              <a href="#skills" className="glass-btn">What Can I Do</a>
              <a href="#contact" className="glass-btn">Contact Me</a>
            </div>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>

      <RevealOnScroll direction="right" delay={0.3} duration={0.8}>
        <div className="home-right">
          <div className="profile-container" onClick={handleImageClick}>
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