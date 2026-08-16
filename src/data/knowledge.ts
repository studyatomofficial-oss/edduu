import type { Difficulty } from '../types/learning'
import { ragKnowledge } from './ragKnowledge'

export type KnowledgeSection = {
  title: string
  content: string
}

export type KnowledgeDefinition = {
  technologyId: string
  slug: string
  title: string
  summary: string
  difficulty: Difficulty
  sections: KnowledgeSection[]
  relatedTechnologyIds?: string[]
}

export const knowledgeEntries: KnowledgeDefinition[] = [
  ragKnowledge,
]

export const knowledgeBySlug = new Map(
  knowledgeEntries.map((entry) => [entry.slug, entry]),
)

export function getKnowledgeBySlug(slug: string) {
  return knowledgeBySlug.get(slug)
}

export default knowledgeEntries

