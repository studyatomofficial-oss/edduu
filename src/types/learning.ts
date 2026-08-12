export type StageKey =
  | 'see'
  | 'understand'
  | 'technical'
  | 'interact'
  | 'build'
  | 'break'
  | 'fix'
  | 'production'
  | 'tpm'
  | 'interview'

export type Difficulty =
  | 'beginner'
  | 'intermediate'
  | 'advanced'

export type InteractionType =
  | 'click'
  | 'toggle'
  | 'slider'
  | 'drag-drop'
  | 'flow'
  | 'architecture'
  | 'codepad'
  | 'output'
  | 'failure'
  | 'diagnostic'
  | 'repair'
  | 'monitor'
  | 'decision'
  | 'interview'
  | 'pipeline'

export type LearningObjective = {
  statement: string
  evidence: string[]
}

export type CompletionCriteria = {
  type:
    | 'interaction-complete'
    | 'correct-answer'
    | 'pipeline-valid'
    | 'diagnosis-correct'
    | 'repair-successful'
    | 'metric-target'
    | 'decision-complete'
    | 'interview-complete'

  requiredInteractionIds?: string[]
  minimumScore?: number
}

export type InteractionDefinition = {
  id: string
  type: InteractionType
  title?: string
  instruction?: string
  config: Record<string, unknown>
}

export type StageContent = {
  eyebrow?: string
  title: string
  description?: string
  explanation?: string
  takeaway?: string

  failureScenario?: {
    title: string
    description: string
    expectedDiagnosis: string
  }
}

export type StageDefinition = {
  id: string
  number: number
  key: StageKey
  title: string
  objective: LearningObjective
  content: StageContent
  interactions: InteractionDefinition[]
  completion: CompletionCriteria
}

export type TechnologyDefinition = {
  id: string
  slug: string
  name: string
  shortName?: string
  moduleId: string
  category: string
  description: string
  difficulty: Difficulty
  experienceId?: string
}

export type ExperienceDefinition = {
  id: string
  technologyId: string
  version: string
  title: string
  objective: string
  stages: StageDefinition[]
}

export type LabDefinition = ExperienceDefinition

export type ProjectDefinition = {
  id: string
  slug: string
  title: string
  moduleId: string
  summary: string
  purpose: string

  technologyIds: string[]

  architecture: {
    components: {
      id: string
      label: string
      techId?: string
    }[]

    flow: {
      from: string
      to: string
      label?: string
    }[]
  }

  failureScenarios?: {
    title: string
    description: string
    relatedTechId?: string
  }[]

  productionConcerns?: string[]

  difficulty: Difficulty
}