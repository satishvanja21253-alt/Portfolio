import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
