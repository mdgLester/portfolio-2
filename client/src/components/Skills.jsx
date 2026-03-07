import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import SkeletonLoader from './SkeletonLoader';
import '../styles/Skills.css';

const Skills = () => {
  const [loading, setLoading] = useState(true);
  
  // Your original skills array
  const skills = [
    "Microsoft Office","Basic IT","Problem Solving","Teamwork","Analytical Thinking",
    "Responsive Web Design","React.js","Node.js","Git & GitHub","MongoDB","MySQL",
    "HTML","CSS","JavaScript","Robot Framework","Relational Databases",
    "Cisco Packet Tracer","Server Management","Network Troubleshooting",
    "Technical Support","Communication Skills","Time Management","Adaptability"
  ];

  // Simulate loading (remove when using real data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Shows skeleton for 1 second
    
    return () => clearTimeout(timer);
  }, []);

  // Generate skeleton items (same count as real skills)
  const skeletonItems = Array(skills.length).fill(0);

  return (
    <section id="skills" className="skills">
      {loading ? (
        // Show title skeleton while loading
        <SkeletonLoader.Title level="h2" />
      ) : (
        // Show real title after loading
        <RevealOnScroll direction="fade">
          <h2>Skills</h2>
        </RevealOnScroll>
      )}
      
      <div className="skills-container">
        {loading
          ? // Show skeleton items while loading
            skeletonItems.map((_, i) => (
              <RevealOnScroll key={i} direction="up">
                <div className="glass-card skill-item skeleton-skill" />
              </RevealOnScroll>
            ))
          : // Show real skills after loading
            skills.map((skill, i) => (
              <RevealOnScroll key={i} direction="up">
                <div className="glass-card skill-item">{skill}</div>
              </RevealOnScroll>
            ))
        }
      </div>
    </section>
  );
};

export default Skills;