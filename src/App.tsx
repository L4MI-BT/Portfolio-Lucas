import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Parcours from './components/Parcours'

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Parcours />

      <Projects />

      <Skills />

      <Contact />
    </>
  )
}

export default App