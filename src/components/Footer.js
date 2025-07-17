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
            <FaCode style={{ fontSize: '3.2rem', color: 'var(--accent)', marginBottom: '0.5rem', filter: 'drop-shadow(0 2px 12px var(--accent-secondary))' }} />
            <motion.h3
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                marginBottom: '0.5rem',
                color: '#fff',
                letterSpacing: '1px',
                textAlign: 'center',
                background: 'none',
                textShadow: '0 2px 8px #222',
              }}
            >
              Ayoub DELLAOUI
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                color: '#fff',
                maxWidth: '500px',
                margin: '0 auto',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                textShadow: '0 2px 8px #222',
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              Web Developer & CS Student passionate about creating amazing digital experiences and innovative solutions.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '2rem' }}
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
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
                color: '#fff',
                width: 64,
                height: 64,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                margin: '0 0.5rem',
                boxShadow: '0 8px 32px var(--accent-secondary), 0 2px 8px var(--shadow)',
                transition: 'all 0.3s',
                border: '2.5px solid #fff',
                filter: 'drop-shadow(0 2px 12px var(--accent))',
              }}
              whileHover={{
                scale: 1.18,
                background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent) 100%)',
                borderColor: 'var(--accent)',
                color: '#fff',
                boxShadow: '0 12px 48px var(--accent), 0 4px 16px var(--shadow)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={32} />
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', color: '#fff', fontSize: '1.15rem', marginBottom: '2.5rem', textShadow: '0 2px 8px #000, 0 0 2px #fff', fontWeight: 600 }}
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