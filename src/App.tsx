import './App.css'
import ExperienceDemo from './components/ExperienceDemo'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <div className="edduu-app">
      <Navbar />
      <Hero />
      <ExperienceDemo />
      <ProjectsSection />
    </div>
  )
}

export default App