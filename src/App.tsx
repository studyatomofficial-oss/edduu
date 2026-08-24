import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsEDDUU from './components/WhatIsEDDUU'
import ExperienceDemo from './components/ExperienceDemo'
import TechnologyUniverse from './components/TechnologyUniverse'
import TechnologyUniversePage from './components/TechnologyUniversePage'
import ProjectsSection from './components/ProjectsSection'
import AllProjectsPage from './components/AllProjectsPage'
import ProjectDetailShell from './components/ProjectDetailShell'
import KnowledgePage from './components/KnowledgePage'
import RAGAdvanced from './pages/RAGAdvanced'
import RedisAdvanced from './pages/RedisAdvanced'
import LearningLabShell from './engine/LearningLabShell'
import AvinashPage from './components/AvinashPage'
import { getProjectBySlug } from './data/projects'
import { getTechnologyBySlug } from './data/technologies'
import { getExperienceById } from './data/experiences'
import { getKnowledgeBySlug } from './data/knowledge'
import MasterclassShell from './masterclass-engine/MasterclassShell'
import GuidePage from './masterclass-engine/GuidePage'
import {
  resolveMasterclassHash,
  resolveGuideHash,
} from './masterclass-engine/MasterclassRouter'
import type { GuideDefinition } from './masterclass-engine/types'

function resolveAvinashHash(hash: string) {
  return hash === '#avinash'
}

function resolveProjectsHash(hash: string) {
  return hash === '#projects'
}
function resolveTechnologyUniverseHash(hash: string) {
  return hash === '#technologies'
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
    kind: (technology?.experienceId ? 'lab' : 'coming-soon') as AppState['kind'],
  }
}


function resolveAdvancedHash(hash: string) {
  const match = /^#advanced\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  return match[1]
}
function resolveKnowledgeHash(hash: string) {
  const match = /^#knowledge\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  return getKnowledgeBySlug(match[1]) ?? null
}

function resolveProjectHash(hash: string) {
  const match = /^#project\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  return getProjectBySlug(match[1])
}

type AppState = {
  kind: 'home' | 'lab' | 'coming-soon' | 'advanced' | 'knowledge' | 'project' | 'projects' | 'technology-universe' | 'avinash' | 'masterclass' | 'guide'
  technology: NonNullable<ReturnType<typeof getTechnologyBySlug>> | null
  experience: NonNullable<ReturnType<typeof getExperienceById>> | null
  project: NonNullable<ReturnType<typeof getProjectBySlug>> | null
  knowledge: NonNullable<ReturnType<typeof getKnowledgeBySlug>> | null
  masterclass: NonNullable<ReturnType<typeof resolveMasterclassHash>> | null
  guide: GuideDefinition | null
  advancedSlug: string | null
}

function createHomeState(): AppState {
  return {
    kind: 'home',
    technology: null,
    experience: null,
    project: null,
    knowledge: null,
    masterclass: null,
    guide: null,
    advancedSlug: null,
  }
}

function resolveAppState(hash: string): AppState {
  const resolvedGuide = resolveGuideHash(hash)

  if (resolvedGuide) {
    return {
      kind: 'guide',
      technology: null,
      experience: null,
      project: null,
      knowledge: null,
      masterclass: resolvedGuide.masterclass,
      guide: resolvedGuide.guide,
      advancedSlug: null,
    }
  }

  const masterclass = resolveMasterclassHash(hash)

  if (masterclass) {
    return {
      kind: 'masterclass',
      technology: null,
      experience: null,
      project: null,
      knowledge: null,
      masterclass,
      guide: null,
      advancedSlug: null,
    }
  }

  if (resolveAvinashHash(hash)) {
    return {
      kind: 'avinash',
      technology: null,
      experience: null,
      project: null,
      knowledge: null,
      masterclass: null,
      guide: null,
      advancedSlug: null,
    }
  }

  if (resolveProjectsHash(hash)) {
    return {
      kind: 'projects',
      technology: null,
      experience: null,
      project: null,
      knowledge: null,
      masterclass: null,
      guide: null,
      advancedSlug: null,
    }
  }
  if (resolveTechnologyUniverseHash(hash)) {
    return {
      kind: 'technology-universe',
      technology: null,
      experience: null,
      project: null,
      knowledge: null,
      masterclass: null,
      guide: null,
      advancedSlug: null,
    }
  }
  const resolvedLab = resolveLabHash(hash)

  if (resolvedLab) {
    const experience =
      resolvedLab.technology?.experienceId
        ? getExperienceById(resolvedLab.technology.experienceId)
        : null

    return {
      kind: resolvedLab.kind as AppState['kind'],
      technology: resolvedLab.technology ?? null,
      experience,
      project: null,
      knowledge: null,
      masterclass: null,
      guide: null,
      advancedSlug: null,
    }
  }

  const advanced = resolveAdvancedHash(hash)

  if (advanced) {
    return {
      kind: 'advanced',
      technology: null,
      experience: null,
      project: null,
      knowledge: null,
      masterclass: null,
      guide: null,
      advancedSlug: advanced,
    }
  }

  const knowledge = resolveKnowledgeHash(hash)

  if (knowledge) {
    return {
      kind: 'knowledge',
      technology: null,
      experience: null,
      project: null,
      knowledge,
      masterclass: null,
      guide: null,
      advancedSlug: null,
    }
  }

  const project = resolveProjectHash(hash)

  if (project) {
    return {
      kind: 'project',
      technology: null,
      experience: null,
      project,
      knowledge: null,
      masterclass: null,
      guide: null,
      advancedSlug: null,
    }
  }

  return createHomeState()
}

function App() {
  const [state, setState] = useState<AppState>(() =>
    resolveAppState(window.location.hash),
  )

  useEffect(() => {
    const handleHashChange = () => {
      setState(resolveAppState(window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  if (
    state.kind === 'guide' &&
    state.masterclass &&
    state.guide
  ) {
    return (
      <>
        <Navbar />
        <main id="guide">
          <GuidePage
            masterclass={state.masterclass}
            guide={state.guide}
          />
        </main>
      </>
    )
  }

  if (state.kind === 'masterclass' && state.masterclass) {
    return (
      <>
        <Navbar />
        <main id="masterclass">
          <MasterclassShell
            masterclass={state.masterclass}
          />
        </main>
      </>
    )
  }

  if (state.kind === 'avinash') {
    return (
      <>
        <Navbar />
        <main id="avinash">
          <AvinashPage />
        </main>
      </>
    )
  }

  if (state.kind === 'technology-universe') {
    return (
      <>
        <Navbar />
        <main id="technologies">
          <TechnologyUniversePage />
        </main>
      </>
    )
  }
  if (state.kind === 'lab' && state.experience) {
    return (
      <>
        <Navbar />
        <main id="lab">
          <LearningLabShell experience={state.experience} />
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


  if (state.kind === 'projects') {
    return (
      <main id="projects">
        <Navbar />
        <AllProjectsPage />
      </main>
    )
  }
  if (state.kind === 'advanced') {
    return (
      <>
        <Navbar />
        <main id="advanced">
          {state.advancedSlug === 'redis' ? (
            <RedisAdvanced />
          ) : (
            <RAGAdvanced />
          )}
        </main>
      </>
    )
  }
  if (state.kind === 'knowledge' && state.knowledge) {
    return (
      <>
        <Navbar />
        <main id="knowledge">
          <KnowledgePage knowledge={state.knowledge} />
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


















