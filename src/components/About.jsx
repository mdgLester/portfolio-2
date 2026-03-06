import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      
      <RevealOnScroll direction="fade">
        <h2>About Me</h2>
      </RevealOnScroll>

      <div className="about-container">

        {/* Education - Top */}
        <RevealOnScroll direction="up">
          <div className="glass-card about-card about-education">
            <h3>🎓 Education</h3>
            <p>
              Bachelor of Science in Information Technology  
              <br />
              Bulacan State University (2021 - 2026)
            </p>

            <p>
              STEM Graduate  
              <br />
              Sacred Heart Academy of Santa Maria, Bulacan (2019 - 2021)
            </p>
          </div>
        </RevealOnScroll>

        {/* Experience */}
        <RevealOnScroll direction="left">
          <div className="glass-card about-card about-experience">
            <h3>💼 Experience</h3>
            <p>- Internship of 500 hours at Bulacan State University.</p>
            <p>- Developed teamwork, discipline, and leadership.</p>
          </div>
        </RevealOnScroll>

        {/* Hobbies - Middle */}
        <RevealOnScroll direction="right">
          <div className="glass-card about-card about-hobbies">
            <h3>🎯 Hobbies</h3>
            <p>🎵 Music</p>
            <p>🏍 Riding</p>
            <p>🎬 Watching Movies</p>
          </div>
        </RevealOnScroll>

        {/* Objective - Bottom */}
        <RevealOnScroll direction="down">
          <div className="glass-card about-card about-objective">
            <h3>🚀 Career Goal</h3>
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