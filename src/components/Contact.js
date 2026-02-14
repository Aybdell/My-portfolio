import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'ayoub40dell@gmail.com',
    link: 'mailto:ayoub40dell@gmail.com',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+213 (0) 665 49 10 79',
    link: 'tel:+213665491079',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Chlef, Algeria',
    link: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Aybdell', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 relative bg-dark-surface/20">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Get in touch</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 text-lg">
            Open to freelance and full-time opportunities. Tell me about your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="space-y-5 mb-10"
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-4 p-4 rounded-2xl border border-dark-border bg-dark-bg/50 card-soft mx-auto max-w-md"
            >
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                <item.icon size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  {item.title}
                </p>
                {item.link ? (
                  <a href={item.link} className="text-white font-medium hover:text-accent transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-dark-surface border border-dark-border text-zinc-400 hover:text-accent hover:border-accent/30 transition-colors"
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-zinc-500">Available for new projects</span>
        </div>

        <motion.a
          href="mailto:ayoub40dell@gmail.com"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, boxShadow: '0 16px 32px -8px rgba(99, 102, 241, 0.35)' }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-accent text-white font-semibold text-base shadow-lg shadow-accent/25"
        >
          <FaEnvelope size={18} />
          Start a project
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
