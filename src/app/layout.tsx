import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Frontend Developer',
  description: 'I build modern, high-performing web experiences. Frontend Developer & AI-powered builder.',
  keywords: ['frontend developer', 'web developer', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio | Frontend Developer',
    description: 'I build modern, high-performing web experiences.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
