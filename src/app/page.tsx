import Navigation from '@/components/Navigation'
import CommandPalette from '@/components/CommandPalette'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding'
import GitHubStats from '@/components/sections/GitHubStats'
import HowIBuild from '@/components/sections/HowIBuild'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-background text-midnight-text font-sans dark">
      <ScrollProgress />
      <Navigation />
      <CommandPalette />
      
      {/* Add padding top to account for fixed navigation */}
      <div className="pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <About />
        
        <Projects />
        
        <CurrentlyBuilding />
        
        <GitHubStats />
        
        <HowIBuild />
        
        <Contact />
        
        <Footer />
      </div>
    </main>
  )
}
