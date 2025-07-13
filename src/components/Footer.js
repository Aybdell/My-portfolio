import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Aybdell', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' }
  ];

  return (
    <footer className="footer">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <FaCode style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '0.5rem' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Ayoub DELLAOUI
            </h3>
            <p style={{ color: '#d1d5db', maxWidth: '400px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Web Developer & CS Student passionate about creating amazing digital experiences and innovative solutions.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="footer-social-link"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                width: 56,
                height: 56,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                margin: '0 0.5rem',
                boxShadow: '0 4px 16px rgba(102,126,234,0.15)',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              whileHover={{
                scale: 1.15,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderColor: '#fff',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(102,126,234,0.25)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', color: '#b3b8c5', fontSize: '1rem', marginBottom: '2.5rem' }}
        >
          <p>Let's connect and build something amazing together!</p>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            margin: '2rem 0 1.5rem'
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="footer-copyright"
        >
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.95rem' }}>
            © {new Date().getFullYear()} Ayoub DELLAOUI. Made with{' '}
            <FaHeart style={{ 
              display: 'inline', 
              color: '#ef4444', 
              margin: '0 0.25rem',
              animation: 'pulse 2s infinite'
            }} />
            using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 