import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "FloraNet",
      description: "A plant identification and care management system developed as an academic project. Helps users identify plants and provides personalized care instructions based on plant species and environmental factors.",
      tech: ["React", "Node.js", "MongoDB", "Plant Identification API"],
      category: "Academic Project",
      link: "#",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Celestial Bodies Database",
      description: "A comprehensive database project documenting various celestial objects including stars, planets, and galaxies. Features structured data organization and basic querying capabilities for educational purposes.",
      tech: ["SQL", "Database Design", "Data Organization", "Query Optimization"],
      category: "Database Project",
      link: "#",
      gradient: "linear-gradient(135deg, #00b4db 0%, #0083b0 100%)"
    }
  ];

  return (
    <section id="projects" className="projects">
      <RevealOnScroll direction="fade" duration={0.8}>
        <h2>Academic Projects</h2>
      </RevealOnScroll>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <RevealOnScroll 
            key={index} 
            direction={index % 2 === 0 ? 'left' : 'right'} 
            delay={0.2 + (index * 0.1)}
            threshold={0.3}
          >
            <motion.div 
              className="project-card glass-card" 
              style={{background: project.gradient}}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="tech-tag glass-tag"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a 
                href={project.link} 
                className="project-link"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More →
              </motion.a>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;