'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Midnight Steel background */}
      <div className="absolute inset-0 bg-midnight-background">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-accent/10 via-transparent to-midnight-accentDark/10 animate-gradient" />
      </div>
      
      {/* Floating animated elements with Midnight Steel colors - responsive positioning */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-5 w-12 h-12 sm:top-20 sm:left-10 sm:w-20 sm:h-20 bg-midnight-accent/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-20 right-5 w-16 h-16 sm:top-40 sm:right-20 sm:w-32 sm:h-32 bg-midnight-accentDark/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-midnight-accent/15 rounded-full blur-xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <Badge variant="glass" className="mb-4 text-xs sm:text-sm">
            👋 Welcome to my portfolio
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-midnight-text mb-4 sm:mb-6 leading-tight px-2"
        >
          I build modern,
          <br />
          <span className="bg-gradient-to-r from-midnight-accent to-midnight-accentDark bg-clip-text text-transparent">
            scalable
          </span>
          <br />
          web applications.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-midnight-textSecondary mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
        >
          Frontend Developer focused on building modern, scalable web applications using Next.js and AI-powered workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <Button 
            size="lg" 
            variant="gradient"
            className="btn-steel-primary group w-full sm:w-auto text-sm sm:text-base"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            variant="glass"
            className="btn-steel-secondary group w-full sm:w-auto text-sm sm:text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12 sm:mb-16 px-4"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <Badge variant="glass" className="text-xs px-2 py-1">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-midnight-textSecondary"
        >
          <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
