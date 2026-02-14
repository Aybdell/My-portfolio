import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 px-4 md:px-6'
          : 'py-5 px-4 md:px-6'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'rounded-2xl bg-dark-bg/80 backdrop-blur-xl border border-dark-border py-3 px-5 shadow-xl shadow-black/20'
            : ''
        }`}
      >
        <Link
          to="home"
          smooth
          duration={500}
          className="text-lg font-bold tracking-tight text-white hover:text-accent transition-colors"
        >
          Ayoub<span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy
              smooth
              offset={-90}
              duration={500}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative"
              activeClass="!text-accent"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="contact" smooth offset={-90} duration={500}>
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-5 py-2.5 rounded-xl bg-accent/10 text-accent font-semibold text-sm border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              Let's talk
            </motion.span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-accent transition-colors"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-dark-surface border border-dark-border shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy
                  smooth
                  offset={-90}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-accent py-3 px-4 rounded-xl hover:bg-dark-bg/50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                offset={-90}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-accent py-3 px-4 mt-2"
              >
                Let's talk →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
