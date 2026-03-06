import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <RevealOnScroll direction="fade" duration={0.8}>
        <h2>About Me</h2>
      </RevealOnScroll>
      
      <div className="about-container">
        <RevealOnScroll direction="rotate" delay={0.2} threshold={0.3}>
          <div className="about-card glass-card about-image-card">
            <div className="about-small-image-container">
              <img 
                src="/profile.jpg" 
                alt="John Lester" 
                className="about-small-image"
              />
            </div>
            <h3>John Lester M. De Guzman</h3>
            <p className="about-tagline">STEM Graduate | Bulacan State University</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="flip" delay={0.3} threshold={0.3}>
          <div className="about-card glass-card">
            <div className="about-icon">🎓</div>
            <h3>Education</h3>
            <p className="about-institution">Bulacan State University</p>
            <p className="about-detail">Science, Technology, Engineering, and Mathematics (STEM) Graduate</p>
            <p className="about-year">2020 - 2024</p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll direction="scale" delay={0.4} threshold={0.3}>
          <div className="about-card glass-card">
            <div className="about-icon">🎵</div>
            <h3>Leadership & Experience</h3>
            <p className="about-institution">BulSU Symphonic Band</p>
            <p className="about-detail">Active member demonstrating discipline, teamwork, and commitment to excellence through musical performances and university events.</p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll direction="left" delay={0.5} threshold={0.3}>
          <div className="about-card glass-card">
            <div className="about-icon">💻</div>
            <h3>Objective</h3>
            <p className="about-detail">Seeking an entry-level IT position where I can utilize my STEM background, technical skills, and strong work ethic to contribute to organizational success while continuing to learn and grow professionally.</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;