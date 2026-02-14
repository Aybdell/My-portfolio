import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Aybdell', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' },
];

const quickLinks = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10"
        >
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white">
              Ayoub<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-zinc-500 mt-1 max-w-xs">
              Frontend Developer · Modern, responsive, scalable web applications.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                offset={-90}
                duration={500}
                className="text-sm text-zinc-500 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-zinc-400 hover:text-accent hover:border-accent/30 transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-dark-border text-center"
        >
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Ayoub DELLAOUI. Made with{' '}
            <FaHeart className="inline text-red-500" /> using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
