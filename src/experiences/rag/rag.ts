import type {
  ExperienceDefinition,
  TechnologyDefinition,
} from '../../types/learning'

import { ragSeeStage } from './stages/see'
import { ragUnderstandStage } from './stages/understand'
import { ragBuildStage } from './stages/build'
import { ragBreakStage } from './stages/break'

export const ragTechnology: TechnologyDefinition = {
  id: 'rag',
  slug: 'rag',
  name: 'Retrieval-Augmented Generation',
  shortName: 'RAG',
  moduleId: 'ai-knowledge-systems',
  category: 'AI / Knowledge Systems',
  description:
    'Ground LLM responses using retrieved external knowledge.',
  difficulty: 'advanced',
  experienceId: 'rag-v1',
}

export const ragExperience: ExperienceDefinition = {
  id: 'rag-v1',
  technologyId: 'rag',
  version: '1.0.0',
  title: 'RAG Learning Lab',
  objective:
    'Explain why RAG exists, understand how a RAG system works, build a basic one, diagnose retrieval failures, improve it, and discuss production trade-offs as a technical leader.',
  stages: [
  ragSeeStage,
  ragUnderstandStage,
  ragBuildStage,
  ragBreakStage,
  ],
}
