import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Aybdell', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-greeting"
          >
            Hello, I'm
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-title"
          >
            Ayoub DELLAOUI
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-subtitle"
          >
            Web Developer & CS Student
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-description"
          >
            Passionate web developer with expertise in modern technologies. 
            Currently pursuing my Bachelor's Degree in Computer Science at Hassiba Ben Bouali University.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero-buttons"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-outline"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none'
                }}
                whileHover={{ scale: 1.1, color: 'white' }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 