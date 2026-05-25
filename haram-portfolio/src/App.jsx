import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import FloatingAssistant from './components/FloatingAssistant'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && (
        <>
          <CursorGlow />
          <ScrollProgress />
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <FloatingAssistant />
        </>
      )}
    </ThemeProvider>
  )
}
