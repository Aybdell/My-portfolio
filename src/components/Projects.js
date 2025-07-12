import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Ophthalmology Consultation Web App',
      description: 'My PFE (Final Year Project) - A comprehensive web application for specialized ophthalmology consultation management. Features include patient management, appointment scheduling, medical records, and consultation tracking.',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Ophthalmology+App',
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML', 'CSS'],
      category: 'web',
      github: 'https://github.com/Aybdell',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Univ_System',
      description: 'University management system developed during my second year of studies. This academic project includes student management, course registration, and administrative functions using PHP and traditional web technologies.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Univ+System',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/Aybdell',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, interactive components, and a professional design to showcase my skills and projects.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'React Icons'],
      category: 'web',
      github: 'https://github.com/Aybdell',
      live: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: FaGlobe },
    { id: 'web', label: 'Web Apps', icon: FaCode },
    { id: 'mobile', label: 'Mobile Apps', icon: FaMobile }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              <filter.icon style={{ marginRight: '0.5rem' }} size={16} />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'linear-gradient(45deg, #2563eb, #3b82f6)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <FaGithub style={{ marginRight: '0.5rem' }} size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a
            href="https://github.com/Aybdell"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <FaGithub style={{ marginRight: '0.5rem' }} size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 