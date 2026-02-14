import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Ophthalmology Consultation Platform',
    description: 'Full-stack healthcare app for ophthalmology clinics: patient management, appointments, medical records, and consultation tracking.',
    image: 'https://via.placeholder.com/600x340/1e1b4b/6366f1?text=Ophthalmology+App',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    category: 'web',
    github: 'https://github.com/Aybdell',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'University Management System',
    description: 'Academic system for student management, course registration, and admin functions. Built for reliability in educational environments.',
    image: 'https://via.placeholder.com/600x340/312e81/818cf8?text=Univ+System',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'web',
    github: 'https://github.com/Aybdell',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern responsive portfolio with smooth animations and a premium dark theme.',
    image: 'https://via.placeholder.com/600x340/4c1d95/a78bfa?text=Portfolio',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    github: 'https://github.com/Aybdell',
    live: 'https://ayoubdell.vercel.app',
    featured: false,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
  ];

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">Selected work</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            From healthcare platforms to academic systems—built for clarity and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-accent text-white'
                  : 'bg-dark-surface text-zinc-400 hover:text-white border border-dark-border'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden border border-dark-border bg-dark-surface/30 card-soft flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-dark-bg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-accent/90 text-white text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-bg text-zinc-400 border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-dark-bg border border-dark-border text-zinc-300 text-sm font-medium hover:border-accent/50 hover:text-accent transition-all"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link to="contact" smooth offset={-90} duration={500}>
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 rounded-xl border border-dark-border text-zinc-400 font-medium hover:border-accent/50 hover:text-accent transition-colors mr-4"
            >
              Start a project
            </motion.span>
          </Link>
          <a
            href="https://github.com/Aybdell"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-accent transition-colors"
          >
            <FaGithub size={18} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
