'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command } from 'cmdk'
import { Search, ExternalLink, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react'

const navigationItems = [
  { id: 'home', label: 'Home', href: '#home', icon: '🏠' },
  { id: 'about', label: 'About', href: '#about', icon: '👤' },
  { id: 'projects', label: 'Projects', href: '#projects', icon: '🚀' },
  { id: 'process', label: 'How I Build', href: '#how-i-build', icon: '🔧' },
  { id: 'contact', label: 'Contact', href: '#contact', icon: '📧' },
]

const actions = [
  { id: 'theme', label: 'Toggle Theme', action: 'toggle-theme', icon: '🌓' },
  { id: 'download', label: 'Download Resume', action: 'download-resume', icon: '📄' },
]

const socialLinks = [
  { id: 'github', label: 'GitHub', href: 'https://github.com', icon: Github },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleAction = (action: string) => {
    switch (action) {
      case 'toggle-theme':
        document.documentElement.classList.toggle('dark')
        break
      case 'download-resume':
        // Implement resume download
        console.log('Download resume')
        break
    }
    setOpen(false)
  }

  const navigateToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setOpen(false)}
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50"
          >
            <Command className="rounded-2xl border border-border/50 bg-background/95 backdrop-blur-lg shadow-2xl">
              <div className="flex items-center border-b border-border/50 px-4">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <Command.Input
                  placeholder="Type a command or search..."
                  value={search}
                  onValueChange={setSearch}
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Command.List className="max-h-[450px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                {/* Navigation */}
                <Command.Group heading="Navigation">
                  {navigationItems
                    .filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                      <Command.Item
                        key={item.id}
                        onSelect={() => navigateToSection(item.href)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-accent transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </Command.Item>
                    ))}
                </Command.Group>

                {/* Actions */}
                <Command.Group heading="Actions">
                  {actions
                    .filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                      <Command.Item
                        key={item.id}
                        onSelect={() => handleAction(item.action)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-accent transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </Command.Item>
                    ))}
                </Command.Group>

                {/* Social Links */}
                <Command.Group heading="Social">
                  {socialLinks
                    .filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                      <Command.Item
                        key={item.id}
                        onSelect={() => window.open(item.href, '_blank')}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-accent transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                        <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
                      </Command.Item>
                    ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
