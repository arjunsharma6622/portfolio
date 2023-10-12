import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Projects from './components/Projects'
import CursorTrail from './components/CursorTrail'
import Contact from './components/Contact'
import SocialMedia from './components/Social'
import SecondaryNavigation from './components/Nav'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
<Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <SocialMedia />
      <SecondaryNavigation />
      <Footer />

      <CursorTrail />

      

    </>
  )
}

export default App
