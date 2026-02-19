'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Rocket, Globe } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const currentProjects = [
  {
    id: 1,
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent VS Code extension that helps developers write better code faster with AI suggestions and automated refactoring.',
    progress: 75,
    tech: ['TypeScript', 'React', 'OpenAI API', 'VS Code API'],
    status: 'In Development',
    eta: '2 weeks',
    icon: Code
  },
  {
    id: 2,
    title: 'Real-time Collaboration Platform',
    description: 'A modern collaboration tool for remote teams with real-time editing, video calls, and AI-powered task management.',
    progress: 45,
    tech: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
    status: 'Planning',
    eta: '1 month',
    icon: Globe
  },
  {
    id: 3,
    title: 'Performance Monitoring Dashboard',
    description: 'Advanced monitoring solution for web applications with real-time metrics, alerts, and automated performance insights.',
    progress: 90,
    tech: ['React', 'D3.js', 'Node.js', 'Redis'],
    status: 'Beta Testing',
    eta: '1 week',
    icon: Zap
  },
  {
    id: 4,
    title: 'Mobile App Development Kit',
    description: 'A comprehensive development kit for building cross-platform mobile apps with shared components and utilities.',
    progress: 30,
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
    status: 'Research',
    eta: '6 weeks',
    icon: Rocket
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Development': return 'bg-green-500'
    case 'Planning': return 'bg-blue-500'
    case 'Beta Testing': return 'bg-yellow-500'
    case 'Research': return 'bg-purple-500'
    default: return 'bg-gray-500'
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'In Development': return 'default'
    case 'Planning': return 'secondary'
    case 'Beta Testing': return 'outline'
    case 'Research': return 'outline'
    default: return 'secondary'
  }
}

export default function CurrentlyBuilding() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            🔧 Currently Building
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I'm
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Working On
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Side projects and experiments that I'm actively developing. 
            These range from AI tools to open-source contributions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={getStatusVariant(project.status)} className="text-xs">
                            {project.status}
                          </Badge>
                          {project.eta && (
                            <Badge variant="outline" className="text-xs">
                              ETA: {project.eta}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed mt-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${getStatusColor(project.status)}`}
                        />
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Interested in collaborating or want to learn more about these projects?
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            I'm always open to discussing new ideas and potential partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
