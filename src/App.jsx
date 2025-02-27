import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App () {

  return (
   <>
   <Navbar/>
   <Main/>
   <Skills/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App