import type {
  ExperienceDefinition,
  TechnologyDefinition,
} from '../../types/learning'

import { ragSeeStage } from './stages/see'
import { ragUnderstandStage } from './stages/understand'
import { ragTechnicalStage } from './stages/technical'
import { ragInteractStage } from './stages/interact'
import { ragBuildStage } from './stages/build'
import { ragBreakStage } from './stages/break'
import { ragFixStage } from './stages/fix'
import { ragProductionStage } from './stages/production'

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
    'Explain why RAG exists, understand the technical architecture, build a basic pipeline, diagnose retrieval failures, repair the system, and verify production concerns.',
  stages: [
    ragSeeStage,
    ragUnderstandStage,
    ragTechnicalStage,
    ragInteractStage,
    ragBuildStage,
    ragBreakStage,
    ragFixStage,
    ragProductionStage,
  ],
}
