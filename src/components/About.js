import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: FaCode, description: 'React.js, HTML, CSS, JavaScript' },
    { name: 'Backend Development', icon: FaLaptopCode, description: 'Node.js, Express.js, PHP' },
    { name: 'Database Management', icon: FaUsers, description: 'PostgreSQL, MySQL' },
    { name: 'Problem Solving', icon: FaLightbulb, description: 'Analytical thinking, Creative solutions' }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate web developer and computer science student with a love for creating innovative digital solutions
          </p>
        </motion.div>

        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text)', marginBottom: '1.5rem' }}>
              Who I Am
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              I'm Ayoub DELLAOUI, a 21-year-old web developer and computer science student at Hassiba Ben Bouali University in Chlef. 
              I'm passionate about creating modern, efficient, and user-friendly web applications that solve real-world problems.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              My journey in web development started with curiosity and has evolved into a deep passion for building 
              scalable applications using modern technologies. I specialize in both frontend and backend development, 
              with expertise in React.js, Node.js, Express.js, PHP, and various database technologies.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Currently pursuing my Bachelor's Degree in Computer Science, I'm constantly learning and exploring 
              new technologies to stay up-to-date with the latest industry trends and best practices.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="skills-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card"
                style={{
                  background: 'var(--surface)',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                }}
              >
                <div className="skill-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <skill.icon className="skill-icon" style={{ color: 'var(--accent)', fontSize: '2rem' }} />
                  <h4 className="skill-name" style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text)', margin: 0 }}>{skill.name}</h4>
                </div>
                <p className="skill-description" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 