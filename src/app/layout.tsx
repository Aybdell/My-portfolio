import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Ayoub Dell | Frontend Developer & UI Engineer',
  description: 'Building exceptional digital experiences with cutting-edge technologies. Frontend Developer & AI-powered builder.',
  keywords: ['frontend developer', 'ui engineer', 'web developer', 'react', 'next.js', 'typescript', 'tailwind css'],
  authors: [{ name: 'Ayoub Dell' }],
  openGraph: {
    title: 'Ayoub Dell | Frontend Developer & UI Engineer',
    description: 'Building exceptional digital experiences with cutting-edge technologies.',
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased bg-midnight-background text-midnight-text`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
