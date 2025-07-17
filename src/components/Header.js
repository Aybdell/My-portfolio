import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: 'rgba(30,41,59,0.85)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 4px 24px 0 var(--shadow)' : '0 2px 8px 0 var(--shadow)',
        borderBottom: '2px solid var(--accent)',
        borderRadius: '0 0 2rem 2rem',
        transition: 'all 0.3s',
        zIndex: 1000,
      }}
    >
      <div className="modern-header-inner">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="modern-logo"
          style={{
            fontSize: '2.1rem',
            fontWeight: 900,
            letterSpacing: '1px',
            color: '#fff',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 12px #fff, 0 0 2px var(--accent)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Ayyb | <span className="accent" style={{ fontWeight: 900, marginLeft: 6 }}>Techfolio</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="modern-nav-links" style={{ display: 'flex', gap: '2.5rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="modern-nav-link"
              activeClass="active"
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.15rem',
                letterSpacing: '0.5px',
                textShadow: '0 2px 8px #000, 0 0 2px #fff',
                padding: '0.25rem 0',
                borderRadius: '8px',
                transition: 'color 0.2s, background 0.2s',
              }}
              activeStyle={{
                color: 'var(--accent)',
                background: 'rgba(0,212,255,0.08)',
                textShadow: '0 2px 12px var(--accent)',
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'none',
            border: 'none',
            color: isDarkMode ? '#fff' : '#333',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            transition: 'all 0.3s ease',
          }}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.button>

        {/* Hamburger (mobile) */}
        <button
          className={`modern-hamburger${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="modern-mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button
                className="modern-mobile-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={32} />
              </button>
              <div className="modern-mobile-links">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="modern-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="modern-header-gradient" />
    </header>
  );
};

export default Header; 