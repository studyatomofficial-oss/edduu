import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsEDDUU from './components/WhatIsEDDUU'
import ExperienceDemo from './components/ExperienceDemo'
import TechnologyUniverse from './components/TechnologyUniverse'
import ProjectsSection from './components/ProjectsSection'
import ProjectDetailShell from './components/ProjectDetailShell'
import RAGLab from './pages/RAGLab'
import { getProjectBySlug } from './data/projects'
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
      kind: 'lab' as const,
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
    kind: technology?.experienceId ? 'lab' : 'coming-soon',
  }
}

function resolveProjectHash(hash: string) {
  const match = /^#project\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  return getProjectBySlug(match[1])
}

function App() {
  const [state, setState] = useState(() => {
    const resolvedLab = resolveLabHash(window.location.hash)

    if (resolvedLab) {
      const experience =
        resolvedLab.technology?.experienceId &&
        resolvedLab.technology.experienceId in experienceMap
          ? experienceMap[
              resolvedLab.technology.experienceId as keyof typeof experienceMap
            ]
          : null

      return {
        kind: resolvedLab.kind,
        technology: resolvedLab.technology,
        experience,
        project: null,
      }
    }

    const project = resolveProjectHash(window.location.hash)

    if (project) {
      return {
        kind: 'project' as const,
        technology: null,
        experience: null,
        project,
      }
    }

    return { kind: 'home' as const, technology: null, experience: null, project: null }
  })

  useEffect(() => {
    const handleHashChange = () => {
      const resolvedLab = resolveLabHash(window.location.hash)

      if (resolvedLab) {
        const experience =
          resolvedLab.technology?.experienceId &&
          resolvedLab.technology.experienceId in experienceMap
            ? experienceMap[
                resolvedLab.technology.experienceId as keyof typeof experienceMap
              ]
            : null

        setState({
          kind: resolvedLab.kind,
          technology: resolvedLab.technology,
          experience,
          project: null,
        })

        return
      }

      const project = resolveProjectHash(window.location.hash)

      if (project) {
        setState({
          kind: 'project',
          technology: null,
          experience: null,
          project,
        })

        return
      }

      setState({ kind: 'home', technology: null, experience: null, project: null })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (state.kind === 'lab' && state.experience) {
    return (
      <>
        <Navbar />
        <main id="lab">
          <RAGLab />
        </main>
      </>
    )
  }

  if (state.kind === 'coming-soon' && state.technology) {
    return (
      <>
        <Navbar />
        <main id="lab">
          <section className="edduu-learning-lab">
            <div className="edduu-container">
              <p className="edduu-section-eyebrow">Technology</p>
              <h1 className="edduu-section-title">{state.technology.name}</h1>
              <p className="edduu-section-description">Coming Soon.</p>
            </div>
          </section>
        </main>
      </>
    )
  }

  if (state.kind === 'project' && state.project) {
    return (
      <>
        <Navbar />
        <main id="project">
          <ProjectDetailShell project={state.project} />
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
      <ProjectsSection />
    </>
  )
}

export default App
