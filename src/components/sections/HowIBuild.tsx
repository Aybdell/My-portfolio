'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Palette, Code, Rocket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    id: 1,
    title: "Idea",
    description: "Understanding requirements and defining the vision",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-400",
    details: [
      "Research & Analysis",
      "User Stories",
      "Technical Feasibility",
      "Project Planning"
    ]
  },
  {
    id: 2,
    title: "Design",
    description: "Creating intuitive and beautiful user interfaces",
    icon: Palette,
    color: "from-purple-400 to-pink-400",
    details: [
      "Wireframing",
      "UI/UX Design",
      "Prototyping",
      "Design Systems"
    ]
  },
  {
    id: 3,
    title: "Build",
    description: "Writing clean, efficient, and scalable code",
    icon: Code,
    color: "from-blue-400 to-cyan-400",
    details: [
      "Clean Architecture",
      "Best Practices",
      "Testing",
      "Code Reviews"
    ]
  },
  {
    id: 4,
    title: "Deploy",
    description: "Launching and monitoring the final product",
    icon: Rocket,
    color: "from-green-400 to-emerald-400",
    details: [
      "CI/CD Pipeline",
      "Performance Optimization",
      "Monitoring",
      "Maintenance"
    ]
  }
]

export default function HowIBuild() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How I
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Build
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My systematic approach to turning ideas into reality, 
            ensuring quality and excellence at every step.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection lines */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
              
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-8 text-center">
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Step number */}
                  <div className="text-4xl font-bold text-muted-foreground/20 mb-4">
                    0{step.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul className="text-xs text-left space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg">
            <span>Ready to build something amazing?</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
