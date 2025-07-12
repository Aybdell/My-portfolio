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

        <div className="about-grid">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827' }}>
              Who I Am
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
              I'm Ayoub DELLAOUI, a 21-year-old web developer and computer science student at Hassiba Ben Bouali University in Chlef. 
              I'm passionate about creating modern, efficient, and user-friendly web applications that solve real-world problems.
            </p>
            <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
              My journey in web development started with curiosity and has evolved into a deep passion for building 
              scalable applications using modern technologies. I specialize in both frontend and backend development, 
              with expertise in React.js, Node.js, Express.js, PHP, and various database technologies.
            </p>
            <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
              Currently pursuing my Bachelor's Degree in Computer Science, I'm constantly learning and exploring 
              new technologies to stay up-to-date with the latest industry trends and best practices.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="skills-grid"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card"
              >
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                <p className="skill-description">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginTop: '5rem' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', textAlign: 'center', marginBottom: '3rem' }}>
            Education & Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
            {
                year: '2021',
                title: 'Baccalaureate Degree',
                company: 'High School Diploma',
                description: 'Successfully completed my baccalaureate degree, marking the beginning of my academic journey in computer science.'
                },
              {
                year: '2021 - 2025',
                title: 'Bachelor\'s Degree in Computer Science',
                company: 'Hassiba Ben Bouali University, Chlef',
                description: 'Currently pursuing my degree with focus on web development, algorithms, and software engineering principles. Expected graduation in 2025.'
              },
              {
                year: '2023 - 2024',
                title: 'Univ_System Project',
                company: 'Second Year Academic Project',
                description: 'Developed a university management system using PHP, HTML, and CSS. This project was part of my second-year curriculum and helped me understand web development fundamentals.'
              },
              {
                year: '2024 - 2025',
                title: 'PFE Project: Ophthalmology Consultation Web App',
                company: 'University Final Year Project',
                description: 'Design and development of a specialized web application for ophthalmology consultation management. This comprehensive project demonstrates my full-stack development skills.'
              }
              
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="experience-item"
              >
                <div style={{ minWidth: '200px' }}>
                  <div className="experience-card">
                    <div className="experience-year">{experience.year}</div>
                    <div className="experience-title">{experience.title}</div>
                    <div className="experience-company">{experience.company}</div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 