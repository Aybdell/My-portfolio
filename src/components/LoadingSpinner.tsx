'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  text, 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <motion.div
          className={`${sizeClasses[size]} rounded-full border-2 border-primary border-t-transparent`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  )
}

// Skeleton loading component
export function SkeletonCard() {
  return (
    <div className="rounded-2xl border bg-card p-6 space-y-4">
      <div className="h-48 bg-muted rounded-xl animate-pulse" />
      <div className="space-y-3">
        <div className="h-6 bg-muted rounded-lg animate-pulse w-3/4" />
        <div className="h-4 bg-muted rounded-lg animate-pulse w-full" />
        <div className="h-4 bg-muted rounded-lg animate-pulse w-2/3" />
      </div>
      <div className="flex gap-2 pt-4">
        <div className="h-8 bg-muted rounded-lg animate-pulse flex-1" />
        <div className="h-8 bg-muted rounded-lg animate-pulse flex-1" />
      </div>
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-xl" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Loading amazing content...
        </motion.p>
      </motion.div>
    </div>
  )
}
