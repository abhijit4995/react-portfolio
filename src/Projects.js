import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Calculator',
      description: 'A web application built with html, css, javascript',
      link: 'https://abhijit4995.github.io/Calculator/',
    },
    {
      title: 'Stopwatch',
      description: 'A full-stack application using Node.js and MongoDB.',
      link: 'https://abhijit4995.github.io/stopwatch/',
    },
    {
      title: 'Project 3',
      description: 'An e-commerce website built with React and Redux.',
      link: 'https://example.com/project3',
    },
    {
      title: 'Project 4',
      description: 'A mobile app built with React Native.',
      link: 'https://example.com/project4',
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-row">
        {projects.slice(0, 2).map((project, index) => (
          <div key={index} className="project-box">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>

      <div className="projects-row">
        {projects.slice(2, 4).map((project, index) => (
          <div key={index} className="project-box">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;