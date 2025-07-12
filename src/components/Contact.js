import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ayoub40dell@gmail.com',
      link: 'mailto:ayoub40dell@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+213 (0) 665 49 10 79',
      link: 'tel:+213665491079'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Chlef, Algeria',
      link: null
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Aybdell', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="contact-grid" style={{ justifyContent: 'center' }}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info"
            style={{ maxWidth: '600px', width: '100%' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '1.5rem', textAlign: 'center' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: '#6b7280', margin: 0 }}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>Follow Me</h4>
              <div className="social-links" style={{ justifyContent: 'center' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="availability"
              style={{ marginTop: '2rem', textAlign: 'center' }}
            >
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Availability</h4>
              <p style={{ color: '#6b7280', marginBottom: '0.75rem', lineHeight: '1.6' }}>
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <div className="availability-status" style={{ justifyContent: 'center' }}>
                <div className="status-dot"></div>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 