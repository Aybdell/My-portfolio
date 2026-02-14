import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaGit,
  FaCss3Alt,
} from 'react-icons/fa';
import { SiExpress, SiPhp, SiPostgresql, SiMysql } from 'react-icons/si';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGit, color: '#F05032' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 relative bg-dark-surface/20">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Stack</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Skills & expertise
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Technologies I use to build fast, maintainable products.
          </p>
        </motion.div>

        <div className="space-y-14">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-5">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl border border-dark-border bg-dark-bg/80 card-soft"
                  >
                    <skill.icon
                      size={36}
                      className="mb-3"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
            Also use
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['VS Code', 'Postman', 'GitHub', 'npm', 'REST APIs', 'Responsive Design', 'Framer Motion', 'Tailwind'].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-4 py-2 rounded-xl text-sm text-zinc-400 bg-dark-surface/50 border border-dark-border"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
