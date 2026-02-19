'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, Calendar, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GitHubRepo } from '@/lib/github'

interface ProjectCardProps {
  repo: GitHubRepo
  index: number
}

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const getProjectStatus = () => {
    if (repo.private) return { text: 'Private Project', variant: 'secondary' as const }
    if (repo.fork) return { text: 'Code Available', variant: 'outline' as const }
    if (repo.open_issues_count > 0 || repo.description?.includes('WIP') || repo.description?.includes('TODO')) {
      return { text: 'In Development', variant: 'default' as const }
    }
    return { text: 'Code Available', variant: 'outline' as const }
  }

  const getTechStack = () => {
    const tech: string[] = []
    if (repo.language) tech.push(repo.language)
    
    // Extract tech from topics
    const topicToTech: { [key: string]: string } = {
      'react': 'React',
      'nextjs': 'Next.js',
      'typescript': 'TypeScript',
      'tailwind': 'Tailwind CSS',
      'nodejs': 'Node.js',
      'express': 'Express',
      'mongodb': 'MongoDB',
      'postgresql': 'PostgreSQL',
      'python': 'Python',
      'django': 'Django',
      'vue': 'Vue.js',
      'nuxt': 'Nuxt.js',
      'graphql': 'GraphQL',
      'prisma': 'Prisma',
      'vercel': 'Vercel',
      'aws': 'AWS',
      'docker': 'Docker',
      'kubernetes': 'Kubernetes',
      'redis': 'Redis',
      'mysql': 'MySQL',
      'sqlite': 'SQLite',
      'jwt': 'JWT',
      'oauth': 'OAuth',
      'stripe': 'Stripe',
      'twilio': 'Twilio',
      'sendgrid': 'SendGrid',
      'aws-lambda': 'AWS Lambda',
      'cloudflare': 'Cloudflare',
      'netlify': 'Netlify',
      'heroku': 'Heroku',
    }
    
    repo.topics.forEach(topic => {
      const techName = topicToTech[topic.toLowerCase()]
      if (techName && !tech.includes(techName)) {
        tech.push(techName)
      }
    })
    
    return tech.slice(0, 6)
  }

  const getProjectDescription = () => {
    if (repo.description) return repo.description
    
    const name = repo.name.replace(/[-_]/g, ' ')
    const topics = repo.topics.slice(0, 3).join(', ')
    
    if (topics) {
      return `A ${name} project built with ${topics}`
    }
    
    return `A ${name} project`
  }

  const getProjectProblem = () => {
    // Generate problem statement based on repo type and topics
    if (repo.topics.includes('ecommerce')) {
      return 'Complex e-commerce workflows and inventory management challenges'
    }
    if (repo.topics.includes('ai') || repo.topics.includes('machine-learning')) {
      return 'Inefficient task organization and lack of intelligent automation'
    }
    if (repo.topics.includes('analytics') || repo.topics.includes('dashboard')) {
      return 'Delayed data insights and complex reporting workflows'
    }
    if (repo.topics.includes('social') || repo.topics.includes('scheduler')) {
      return 'Manual social media management and engagement tracking'
    }
    if (repo.topics.includes('education') || repo.topics.includes('learning')) {
      return 'Limited engagement and poor progress tracking in online learning'
    }
    
    return 'Traditional development approaches lacking modern optimization'
  }

  const getProjectSolution = () => {
    if (repo.topics.includes('ecommerce')) {
      return 'Built with Next.js, Stripe integration, and real-time inventory updates'
    }
    if (repo.topics.includes('ai') || repo.topics.includes('machine-learning')) {
      return 'Implemented ML algorithms for intelligent task prioritization and automation'
    }
    if (repo.topics.includes('analytics') || repo.topics.includes('dashboard')) {
      return 'WebSocket integration and interactive real-time data visualization'
    }
    if (repo.topics.includes('social') || repo.topics.includes('scheduler')) {
      return 'API integrations and automated posting workflows with analytics'
    }
    if (repo.topics.includes('education') || repo.topics.includes('learning')) {
      return 'Gamification elements and real-time progress visualization'
    }
    
    return 'Modern architecture with performance optimization and clean code practices'
  }

  const status = getProjectStatus()
  const techStack = getTechStack()
  const description = getProjectDescription()
  const problem = getProjectProblem()
  const solution = getProjectSolution()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 shadow-steel hover:shadow-steel-lg transition-all duration-300 glass-steel-hover">
        {/* Project Image/Preview */}
        <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-accent/20 to-midnight-accentDark/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            <Badge variant={status.variant} className="text-xs glass-steel">
              {status.text}
            </Badge>
          </div>
          
          {/* Language Icon */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg glass-steel flex items-center justify-center">
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-midnight-accent" />
            </div>
          </div>
          
          {/* Preview Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 glass-steel rounded-2xl flex items-center justify-center">
              <Github className="h-6 w-6 sm:h-8 sm:w-8 text-midnight-text" />
            </div>
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between text-midnight-textSecondary text-xs">
            <div className="flex items-center gap-1">
              <Star className="h-2 w-2 sm:h-3 sm:w-3" />
              <span className="text-xs">{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-2 w-2 sm:h-3 sm:w-3" />
              <span className="text-xs">{repo.forks_count}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span className="text-xs">{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-2 sm:pb-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg sm:text-xl group-hover:text-midnight-accent transition-colors leading-tight text-midnight-text pr-2">
              {repo.name}
            </CardTitle>
            {repo.language && (
              <Badge variant="secondary" className="text-xs shrink-0 glass-steel">
                {repo.language}
              </Badge>
            )}
          </div>
          <CardDescription className="text-sm leading-relaxed text-midnight-textSecondary line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2 sm:pb-4">
          <div className="space-y-2 sm:space-y-3">
            <div className="text-sm">
              <span className="font-medium text-midnight-textSecondary">Problem:</span>
              <p className="text-xs mt-1 leading-relaxed text-midnight-text line-clamp-2">{problem}</p>
            </div>
            <div className="text-sm">
              <span className="font-medium text-midnight-textSecondary">Solution:</span>
              <p className="text-xs mt-1 leading-relaxed text-midnight-text line-clamp-2">{solution}</p>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-4">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs glass-steel px-2 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-2 sm:pt-4 gap-2 sm:gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 group/btn btn-steel-secondary text-xs sm:text-sm"
            onClick={() => window.open(repo.html_url, '_blank')}
          >
            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover/btn:text-midnight-accent transition-colors" />
            <span className="hidden sm:inline">View Code</span>
            <span className="sm:hidden">Code</span>
          </Button>
          {repo.homepage && (
            <Button 
              size="sm" 
              variant="default" 
              className="flex-1 group/btn btn-steel-primary text-xs sm:text-sm"
              onClick={() => window.open(repo.homepage || '', '_blank')}
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover/btn:translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
