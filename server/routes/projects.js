const express = require('express');
const router = express.Router();

// This would come from a database in production
const projects = [
  {
    id: 1,
    title: "FloraNet",
    description: "Smart Community Management System for Milflora Homes Subdivision Baliwag, Bulacan",
    tech: ["React js", "Laravel", "MySQL"],
    category: "Capstone Project",
    gradient: "linear-gradient(135deg,#667eea,#764ba2)",
    image: "/projects/floranet.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "PMES Web",
    description: "Personal Management and Evaluation System website",
    tech: ["React js", "JavaScript", "CSS"],
    category: "Internship Project",
    gradient: "linear-gradient(135deg,#00b4db,#0083b0)",
    image: "/projects/pmes.jpg",
    link: "#"
  }
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get single project by ID
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;