import type { ExperienceDefinition } from '../types/learning'
import { ragExperience } from '../experiences/rag/rag'

const registry: Record<string, ExperienceDefinition> = {
  [ragExperience.id]: ragExperience,
}

export function getExperienceById(id?: string): ExperienceDefinition | null {
  if (!id) return null
  return registry[id] ?? null
}

export const allExperiences = Object.values(registry)

export default { getExperienceById, allExperiences }
