import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    "Technical Skills": [
      "Basic Computer Literacy",
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Internet Navigation and Research",
      "Basic Troubleshooting",
      "Email Management"
    ],
    "Core Competencies": [
      "Attention to Detail",
      "Problem-Solving",
      "Time Management",
      "Team Collaboration",
      "Adaptability",
      "Quick Learner"
    ],
    "STEM Foundation": [
      "Scientific Method",
      "Mathematical Reasoning",
      "Analytical Thinking",
      "Technical Writing",
      "Data Analysis"
    ],
    "Languages": [
      "English (Professional Working)",
      "Filipino (Native)"
    ]
  };

  return (
    <section id="skills" className="skills">
      <RevealOnScroll direction="fade" duration={0.8}>
        <h2>Skills & Competencies</h2>
      </RevealOnScroll>
      
      <div className="skills-container">
        {Object.entries(skills).map(([category, items], index) => (
          <RevealOnScroll 
            key={category} 
            direction="scale" 
            delay={0.2 + (index * 0.1)}
            threshold={0.3}
          >
            <motion.div 
              className="skill-category glass-card"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,123,255,0.2)" }}
            >
              <h3>{category}</h3>
              <div className="skill-items">
                {items.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-item glass-tag"
                    whileHover={{ 
                      scale: 1.15, 
                      backgroundColor: "rgba(0,123,255,0.3)",
                      rotate: [0, -2, 2, -2, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Skills;