'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check for dark mode preference
    const darkModePreference = localStorage.getItem('darkMode')
    if (darkModePreference === 'true' || 
        (!darkModePreference && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark')
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: 'how-i-build' },
    { label: 'Contact', href: '#contact' }
  ]

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
    setIsOpen(false)
  }

  return (
    <>
      {/* Command Palette Hint */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-3 sm:top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full glass-steel border border-midnight-border text-xs text-midnight-textSecondary">
          <Command className="h-3 w-3" />
          <span className="hidden sm:inline">Press</span>
          <kbd className="px-1 sm:px-1.5 py-0.5 rounded glass-steel text-midnight-textSecondary text-xs">⌘</kbd>
          <kbd className="px-1 sm:px-1.5 py-0.5 rounded glass-steel text-midnight-textSecondary text-xs">K</kbd>
          <span className="hidden sm:inline">to open command palette</span>
        </div>
      </motion.div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-steel border-b border-midnight-border shadow-steel' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-midnight-accent to-midnight-accentDark bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <span className="hidden sm:inline">Portfolio</span>
              <span className="sm:hidden">AD</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 sm:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs sm:text-sm font-medium text-midnight-textSecondary hover:text-midnight-accent transition-colors relative group"
                >
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.label.charAt(0)}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-midnight-accent to-midnight-accentDark group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="btn-steel-secondary hover:text-midnight-accent w-8 h-8 sm:w-10 sm:h-10"
              >
                {isDark ? <Sun className="h-3 w-3 sm:h-4 sm:w-4" /> : <Moon className="h-3 w-3 sm:h-4 sm:w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="btn-steel-secondary hover:text-midnight-accent w-8 h-8"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="btn-steel-secondary hover:text-midnight-accent w-8 h-8"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              height: isOpen ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 sm:px-4 py-2 sm:py-2 text-sm font-medium text-midnight-textSecondary hover:text-midnight-accent hover:bg-midnight-surface rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}
