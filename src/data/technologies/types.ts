import type { Difficulty } from '../../types/learning'

export type TechnologyDefinition = {
  id: string
  slug: string
  name: string
  shortName?: string
  moduleId: string
  domainId: string
  category: string
  description: string
  difficulty: Difficulty
  experienceId?: string
  knowledgeAvailable?: boolean
  advancedAvailable?: boolean
  labAvailable?: boolean
}
