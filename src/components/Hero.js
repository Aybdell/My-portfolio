import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  }),
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Aybdell', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[60%] max-w-2xl h-[80%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left: Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.p variants={item} className="text-zinc-400 text-sm sm:text-base mb-4">
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5"
          >
            Ayoub <span className="text-accent">Dell</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-zinc-300 font-semibold mb-4"
          >
            Frontend Developer & JavaScript Specialist
          </motion.p>
          <motion.p variants={item} className="text-zinc-500 text-base sm:text-lg max-w-lg mb-8 lg:max-w-md">
            I build modern, responsive, and scalable web applications.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Link to="projects" smooth offset={-80} duration={600}>
              <motion.span
                whileHover={{ scale: 1.03, boxShadow: '0 12px 28px -8px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25"
              >
                View Work
              </motion.span>
            </Link>
            <Link to="contact" smooth offset={-80} duration={600}>
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-3.5 rounded-xl border-2 border-zinc-600 text-zinc-300 font-semibold text-sm hover:border-zinc-500 hover:text-white transition-colors"
              >
                Contact Me
              </motion.span>
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex gap-5 justify-center lg:justify-start">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="text-zinc-500 hover:text-accent transition-colors"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Minimal design element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-dark-border rotate-6 scale-95" />
            <div className="absolute inset-0 rounded-3xl bg-dark-surface/80 border border-dark-border flex items-center justify-center -rotate-3">
              <div className="text-zinc-600 font-mono text-6xl font-bold select-none">{'</>'}</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20" />
            <div className="absolute -top-2 -left-2 w-16 h-16 rounded-xl bg-accent/5 border border-dark-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
