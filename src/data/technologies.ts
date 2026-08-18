import { aiTechnologies } from './technologies/ai'
import { applicationTechnologies } from './technologies/application'
import { dataTechnologies } from './technologies/data'
import { apiTechnologies } from './technologies/apis'
import { cloudTechnologies } from './technologies/cloud'
import { devopsTechnologies } from './technologies/devops'
import { systemTechnologies } from './technologies/systems'
import { reliabilityTechnologies } from './technologies/reliability'
import { securityTechnologies } from './technologies/security'
import { engineeringTechnologies } from './technologies/engineering'
import type { TechnologyDefinition } from './technologies/types'

export type { TechnologyDefinition } from './technologies/types'

export const technologies: TechnologyDefinition[] = [
  ...aiTechnologies,
  ...applicationTechnologies,
  ...dataTechnologies,
  ...apiTechnologies,
  ...cloudTechnologies,
  ...devopsTechnologies,
  ...systemTechnologies,
  ...reliabilityTechnologies,
  ...securityTechnologies,
  ...engineeringTechnologies,
]

export const homepageTechnologySlugs = [
  'ai',
  'genai',
  'llms',
  'rag',
  'agents',
  'mcp',
  'full-stack',
  'python',
  'fastapi',
  'rest-apis',
  'data',
  'postgresql',
  'redis',
  'cloud',
  'docker',
  'kubernetes',
  'systems',
  'production',
  'github-actions',
  'loop-engineering',
] as const

export const technologyRegistry = new Map(
  technologies.map((technology) => [technology.slug, technology]),
)

export const technologyById = new Map(
  technologies.map((technology) => [technology.id, technology]),
)

export function getTechnologyBySlug(slug: string) {
  return technologyRegistry.get(slug)
}

