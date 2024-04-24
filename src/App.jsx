import './App.css'
import Header from './components/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import SocialMedia from './components/Social'
import SecondaryNavigation from './components/Nav'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'



function App() {

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
      {/* <SecondaryNavigation /> */}
      <Footer />
      <CursorTrail />
    </>
  )
}

export default App
