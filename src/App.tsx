import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsEDDUU from './components/WhatIsEDDUU'
import ExperienceDemo from './components/ExperienceDemo'
import TechnologyUniverse from './components/TechnologyUniverse'
import RAGLab from './pages/RAGLab'
import { getTechnologyBySlug } from './data/technologies'
import { ragExperience } from './experiences/rag/rag'

const experienceMap = {
  'rag-v1': ragExperience,
}

function resolveLabHash(hash: string) {
  if (hash === '#lab' || hash === '#lab/') {
    return {
      slug: 'rag',
      technology: getTechnologyBySlug('rag'),
    }
  }

  const match = /^#lab\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  const slug = match[1]
  const technology = getTechnologyBySlug(slug)

  return {
    slug,
    technology,
  }
}

function App() {
  const [labState, setLabState] = useState(() => {
    const resolved = resolveLabHash(window.location.hash)

    if (!resolved) {
      return { kind: 'home' as const }
    }

    const experience =
      resolved.technology?.experienceId &&
      resolved.technology.experienceId in experienceMap
        ? experienceMap[
            resolved.technology.experienceId as keyof typeof experienceMap
          ]
        : null

    return {
      kind: experience ? ('lab' as const) : ('coming-soon' as const),
      technology: resolved.technology,
      experience,
    }
  })

  useEffect(() => {
    const handleHashChange = () => {
      const resolved = resolveLabHash(window.location.hash)

      if (!resolved) {
        setLabState({ kind: 'home' })
        return
      }

      const experience =
        resolved.technology?.experienceId &&
        resolved.technology.experienceId in experienceMap
          ? experienceMap[
              resolved.technology.experienceId as keyof typeof experienceMap
            ]
          : null

      setLabState({
        kind: experience ? 'lab' : 'coming-soon',
        technology: resolved.technology,
        experience,
      })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (labState.kind === 'lab' && labState.experience) {
    return (
      <>
        <Navbar />
        <main id="lab">
          <RAGLab />
        </main>
      </>
    )
  }

  if (labState.kind === 'coming-soon' && labState.technology) {
    return (
      <>
        <Navbar />
        <main id="lab">
          <section className="edduu-learning-lab">
            <div className="edduu-container">
              <p className="edduu-section-eyebrow">Technology</p>
              <h1 className="edduu-section-title">
                {labState.technology.name}
              </h1>
              <p className="edduu-section-description">
                Coming Soon.
              </p>
            </div>
          </section>
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
