import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaJs, FaGit, FaDatabase
} from 'react-icons/fa';
import { SiExpress, SiPhp, SiPostgresql, SiMysql, SiCss3 } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
    { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
    { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, level: 75, color: '#000000' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
    { name: 'PHP', icon: SiPhp, level: 70, color: '#777BB4' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
    { name: 'Git', icon: FaGit, level: 85, color: '#F05032' }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 90 },
    { name: 'Creativity', level: 85 },
    { name: 'Team Collaboration', level: 80 }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{
            color: '#111',
            fontWeight: 900,
            fontSize: '3rem',
            textShadow: '0 2px 8px #b3b8c5',
            letterSpacing: '1px',
          }}>Skills & Expertise</h2>
          <p className="section-subtitle" style={{
            color: '#222',
            fontWeight: 500,
            fontSize: '1.25rem',
            textShadow: '0 2px 8px #fff',
          }}>
            A comprehensive overview of my technical and soft skills
          </p>
        </motion.div>

        <div className="skills-container" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#222',
              marginBottom: '2rem',
              letterSpacing: '1px',
              background: 'none',
              textShadow: '0 2px 8px #fff',
              textAlign: 'center',
            }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-progress"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30,41,59,0.85) 60%, rgba(0,212,255,0.10) 100%)',
                    padding: '2rem 1.2rem',
                    borderRadius: '1.5rem',
                    boxShadow: '0 8px 24px 0 rgba(0,212,255,0.10), 0 2px 8px 0 var(--shadow)',
                    border: '2px solid var(--accent)',
                    minWidth: 270,
                    maxWidth: 340,
                    margin: '0 auto',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  whileHover={{ scale: 1.06, boxShadow: '0 24px 64px 0 rgba(0,212,255,0.18), 0 4px 24px 0 var(--shadow)' }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 120 }}
                >
                  <div className="skill-header-progress" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <skill.icon 
                        style={{ fontSize: '2.2rem', marginRight: '0.75rem', color: skill.color, filter: 'drop-shadow(0 2px 8px rgba(0,212,255,0.25))' }}
                      />
                      <span style={{ fontWeight: 900, color: '#fff', fontSize: '1.25rem', textShadow: '0 2px 8px #222, 0 0 2px #fff' }}>{skill.name}</span>
                    </div>
                    <span style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 900, textShadow: '0 2px 8px #222, 0 0 2px #fff' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-progress-fill"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#222',
              marginBottom: '2rem',
              letterSpacing: '1px',
              background: 'none',
              textShadow: '0 2px 8px #fff',
              textAlign: 'center',
            }}>Soft Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-progress"
                  style={{
                    background: 'var(--surface)',
                    padding: '2.5rem 2rem',
                    borderRadius: '1.5rem',
                    boxShadow: '0 4px 20px var(--shadow)',
                    border: '1px solid var(--border)',
                    minWidth: 320,
                    maxWidth: 420,
                    margin: '0 auto',
                  }}
                >
                  <div className="skill-header-progress" style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                    <span style={{ fontWeight: 900, color: '#fff', fontSize: '1.25rem', textShadow: '0 2px 8px #222, 0 0 2px #fff' }}>{skill.name}</span>
                    <span style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 900, textShadow: '0 2px 8px #222, 0 0 2px #fff' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-progress-fill"
                      style={{ backgroundColor: '#667eea' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', textAlign: 'center', marginBottom: '2rem' }}>
            Tools & Technologies
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { name: 'VS Code', icon: '💻' },
              { name: 'Postman', icon: '📮' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'npm', icon: '📦' },
              { name: 'Webpack', icon: '📦' },
              { name: 'REST APIs', icon: '🔗' },
              { name: 'JSON', icon: '📄' },
              { name: 'Responsive Design', icon: '📱' }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="skill-card"
                style={{ textAlign: 'center', padding: '1.5rem' }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 