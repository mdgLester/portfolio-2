import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      
      <RevealOnScroll direction="fade">
        <h2>About Me</h2>
      </RevealOnScroll>

      <div className="about-grid">

        {/* Education - Top Left */}
        <RevealOnScroll direction="right">
          <div className="glass-card about-card">
            <h3>Education</h3>
            <p>
              <strong>Bachelor of Science in Information Technology</strong><br />
              Bulacan State University (2021 - 2026)
            </p>
          </div>
        </RevealOnScroll>

        {/* Experience - Top Right */}
        <RevealOnScroll direction="left">
          <div className="glass-card about-card">
            <h3>Experience</h3>
            <ul className="about-list">
              <li>500-hour internship at Bulacan State University</li>
              <li>Developed teamwork, discipline, and leadership</li>
            </ul>
          </div>
        </RevealOnScroll>

        {/* Hobbies - Bottom Left */}
        <RevealOnScroll direction="right">
          <div className="glass-card about-card">
            <h3>Hobbies</h3>
            <ul className="about-list hobbies-list">
              <li>Music</li>
              <li>Riding</li>
              <li>Watching Movies</li>
            </ul>
          </div>
        </RevealOnScroll>

        {/* Career Goal - Bottom Right */}
        <RevealOnScroll direction="left">
          <div className="glass-card about-card">
            <h3>Career Goal</h3>
            <p>
              Seeking an entry-level IT position where I can apply my
              technical skills, gain industry experience, and continue
              growing professionally.
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default About;