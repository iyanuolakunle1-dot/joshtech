import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorGlow />
      <AmbientBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Experience />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
