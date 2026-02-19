'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Palette, Smartphone, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  { name: 'React/Next.js', icon: Code, level: 90 },
  { name: 'TypeScript', icon: Database, level: 85 },
  { name: 'Tailwind CSS', icon: Palette, level: 95 },
  { name: 'Responsive Design', icon: Smartphone, level: 90 },
  { name: 'Performance', icon: Zap, level: 85 },
  { name: 'Web Standards', icon: Globe, level: 88 },
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
  'Framer Motion', 'Node.js', 'PostgreSQL', 'Vercel',
  'Git', 'VS Code', 'Figma', 'REST APIs'
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Crafting Digital Experiences
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}with Passion
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Ayoub Dell, a frontend developer from Algeria focused on building modern, scalable web applications using Next.js and AI-powered workflows. I combine clean UI design with performance optimization to create high-quality digital products.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey in web development has been driven by curiosity and a constant desire to learn. From crafting pixel-perfect UIs to optimizing performance, I approach every project with dedication and innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently open to freelance and remote work opportunities, bringing expertise in modern frontend technologies and a passion for creating exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <Card key={skill.name} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "secondary" : "outline"}
                  className="cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
