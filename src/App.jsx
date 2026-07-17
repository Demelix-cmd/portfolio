import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Maintenance from "./components/Maintenance"
import Contact from "./components/Contact"
import Formulaire from "./components/Formulaire"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Maintenance />
      <Formulaire />
      <Contact />
      <Analytics />
    </>
  )
}

export default App
