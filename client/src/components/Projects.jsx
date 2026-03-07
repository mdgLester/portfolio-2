import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import SkeletonLoader from './SkeletonLoader';
import '../styles/Projects.css';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProjects([
        { 
          title: "FloraNet", 
          description: "Smart Community Management System for Milflora Homes Subdivision Baliwag, Bulacan", 
          tech: ["React js", "Laravel", "MySQL"], 
          gradient: "linear-gradient(135deg,#667eea,#764ba2)",
          category: "Capstone Project"
        },
        { 
          title: "PMES Web", 
          description: "Personal Management and Evaluation System website", 
          tech: ["React js", "JavaScript", "CSS"], 
          gradient: "linear-gradient(135deg,#00b4db,#0083b0)",
          category: "Internship Project"
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects">
        {/* Title skeleton for "Projects" */}
        <SkeletonLoader.Title level="h2" />
        <SkeletonLoader.CardGrid count={2} />
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <RevealOnScroll direction="fade">
        <h2>Projects</h2>
      </RevealOnScroll>
      
      <div className="projects-grid">
        {projects.map((p, i) => (
          <RevealOnScroll key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className="glass-card project-card" style={{background: p.gradient}}>
              <span className="project-category">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;