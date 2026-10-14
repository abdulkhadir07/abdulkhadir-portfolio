import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Coursework from './sections/Coursework'
import Closing from './sections/Closing'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen text-ink">
      <div className="site-bg" aria-hidden="true" />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Coursework />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
