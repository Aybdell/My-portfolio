'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Aybdell', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ayoub-dell-003010337/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://web.facebook.com/ayoub.del.2025', label: 'Facebook' },
  { icon: Mail, href: 'mailto:ayoub40dell@gmail.com', label: 'Email' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Account for fixed navigation height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-midnight-surface border-t border-midnight-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-midnight-accent to-midnight-accentDark bg-clip-text text-transparent mb-4">
              Ayoub Dell
            </h3>
            <p className="text-midnight-textSecondary text-sm leading-relaxed mb-4">
              Frontend developer focused on building modern, scalable web applications with exceptional user experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-steel flex items-center justify-center text-midnight-textSecondary hover:text-midnight-accent transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-midnight-text">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-midnight-textSecondary hover:text-midnight-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-midnight-text">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-midnight-text">Email:</span>
                <a 
                  href="mailto:ayoub40dell@gmail.com" 
                  className="text-midnight-textSecondary hover:text-midnight-accent transition-colors ml-2"
                >
                  ayoub40dell@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium text-midnight-text">Location:</span>
                <span className="text-midnight-textSecondary ml-2">Algeria</span>
              </div>
              <div>
                <span className="font-medium text-midnight-text">Available:</span>
                <span className="text-midnight-textSecondary ml-2">Freelance & Remote</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-midnight-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-midnight-textSecondary text-sm">
            2024 Ayoub Dell. All rights reserved.
          </p>
          <p className="text-midnight-textSecondary text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-midnight-accent mx-1" /> using Next.js
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass-steel flex items-center justify-center text-midnight-textSecondary hover:text-midnight-accent transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
