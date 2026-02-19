'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Sparkles, Code2, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Midnight Steel background */}
      <div className="absolute inset-0 bg-midnight-background">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-accent/5 via-transparent to-midnight-accentDark/5 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15)_0%,transparent_50%)]" />
      </div>
      
      {/* Premium floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orb */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-20 h-20 sm:top-20 sm:left-20 sm:w-32 sm:h-32 bg-midnight-accent/20 rounded-full blur-2xl"
        />
        
        {/* Medium floating orb */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-32 right-10 w-16 h-16 sm:top-40 sm:right-32 sm:w-24 sm:h-24 bg-midnight-accentDark/25 rounded-full blur-2xl"
        />
        
        {/* Small floating orb */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-midnight-accent/15 rounded-full blur-xl"
        />
        
        {/* Floating code brackets */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/3 right-1/4 text-midnight-accent/30 text-4xl sm:text-6xl font-mono"
        >
          {'{ }'}
        </motion.div>
        
        {/* Floating sparkles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/2 left-1/3"
        >
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-midnight-accent/40" />
        </motion.div>
      </div>

      {/* Premium main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Welcome badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <Badge variant="premium" className="mb-3 sm:mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 shadow-steel">
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="hidden sm:inline">Frontend Developer & UI Engineer</span>
            <span className="sm:hidden">Dev & UI Engineer</span>
          </Badge>
        </motion.div>

        {/* Premium headline with responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-midnight-text mb-4 sm:mb-6 leading-tight tracking-tight px-2"
        >
          <span className="block">I build</span>
          <span className="block bg-gradient-to-r from-midnight-accent via-midnight-accent to-midnight-accentDark bg-clip-text text-transparent animate-gradient">
            exceptional
          </span>
          <span className="block">digital experiences</span>
        </motion.h1>

        {/* Premium paragraph with responsive sizing and max-width */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-midnight-textSecondary mb-6 sm:mb-8 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-2"
        >
          <span className="block sm:hidden">Crafting modern web apps with AI workflows.</span>
          <span className="hidden sm:block">Crafting modern, scalable web applications with cutting-edge technologies and AI-powered workflows. Transforming ideas into premium digital products.</span>
        </motion.p>

        {/* Premium CTA buttons with responsive stacking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="premium"
              className="text-sm sm:text-base font-semibold w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">View My Work</span>
              <span className="sm:hidden">Work</span>
              <ExternalLink className="hidden sm:inline w-4 h-4 ml-2" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="glass"
              className="text-sm sm:text-base font-semibold w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Premium tech stack with responsive badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer', 'Node.js'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Badge variant="glass" className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 shadow-steel hover:shadow-steel-lg group-hover:bg-midnight-accent/10 group-hover:border-midnight-accent/30">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Premium scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-midnight-textSecondary"
        >
          <span className="text-xs sm:text-sm mb-2 font-medium tracking-wide">Explore More</span>
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-midnight-accent/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-midnight-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
