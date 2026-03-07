import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Skills.css';

const Skills = () => {
  const skills = ["Microsoft Office","Basic IT","Problem Solving","Teamwork","Analytical Thinking","Responsive Web Design","React.js","Node.js","Git & GitHub","MongoDB","MySQL","HTML","CSS","JavaScript","Robot Framework","Relational Databases","Cisco Packet Tracer","Server Management","Network Troubleshooting","Technical Support","Communication Skills","Time Management","Adaptability",];
  return (
    <section id="skills" className="skills">
      <RevealOnScroll direction="fade"><h2>Skills</h2></RevealOnScroll>
      <div className="skills-container">
        {skills.map((skill,i)=>(
          <RevealOnScroll key={i} direction="up">
            <div className="glass-card skill-item">{skill}</div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Skills;