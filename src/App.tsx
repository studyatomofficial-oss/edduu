import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsEDDUU from './components/WhatIsEDDUU'
import ExperienceDemo from './components/ExperienceDemo'
import TechnologyUniverse from './components/TechnologyUniverse'
import RAGLab from './pages/RAGLab'

function App() {
  const [isLabDestination, setIsLabDestination] = useState(
    () => window.location.hash === '#lab',
  )

  useEffect(() => {
    const handleHashChange = () => {
      setIsLabDestination(window.location.hash === '#lab')
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (isLabDestination) {
    return (
      <>
        <Navbar />
        <main id="lab">
          <RAGLab />
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsEDDUU />
      <ExperienceDemo />
      <TechnologyUniverse />
    </>
  )
}

export default App
