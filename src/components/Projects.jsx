import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    { title: "FloraNet", description: "Plant ID & care system", tech:["React","Node","MongoDB"], gradient:"linear-gradient(135deg,#667eea,#764ba2)" },
    { title: "Celestial DB", description: "Database of stars and galaxies", tech:["SQL","Data Organization"], gradient:"linear-gradient(135deg,#00b4db,#0083b0)" }
  ];

  return (
    <section id="projects" className="projects">
      <RevealOnScroll direction="fade"><h2>Projects</h2></RevealOnScroll>
      <div className="projects-grid">
        {projects.map((p,i) => (
          <RevealOnScroll key={i} direction={i%2===0?'left':'right'}>
            <div className="glass-card project-card" style={{background:p.gradient}}>
              <span className="project-category">Academic</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tech">{p.tech.map((t,j)=><span key={j} className="tech-tag">{t}</span>)}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;