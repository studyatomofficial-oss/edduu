export type MasterclassStage =
  | 'zero'
  | 'discover'
  | 'guided'
  | 'practice'
  | 'challenge'
  | 'break'
  | 'diagnose'
  | 'production'
  | 'decide'
  | 'defend'

export type ExperienceType =
    | 'lesson'
| 'explanation'
  | 'animation'
  | 'simulation'
  | 'question'
  | 'diagnostic'
  | 'decision'
  | 'reflection'
  | 'sequencing'

export type QuestionType =
  | 'single-choice'
  | 'multi-choice'
  | 'true-false'
  | 'ordering'
  | 'matching'

export type MasterclassOption = {
  id: string
  text: string
  correct?: boolean
}

export type QuestionDefinition = {
  id: string
  type: QuestionType
  question: string
  options?: MasterclassOption[]
  explanation?: string
  hints?: string[]
}

export type SimulationItem = {
  id: string
  label: string
  description?: string
  correctTargetId: string
}

export type SimulationTarget = {
  id: string
  label: string
  description?: string
}

export type SimulationDefinition = {
  instruction: string
  items: SimulationItem[]
  targets: SimulationTarget[]
  successMessage?: string
  failureMessage?: string
}

export type SequenceItem = {
  id: string
  label: string
  description?: string
  correctPosition: number
}

export type SequencingDefinition = {
  instruction: string
  items: SequenceItem[]
  successMessage?: string
  failureMessage?: string
}

export type LessonSection = {
  heading: string
  explanation: string
  example?: string
}

export type LessonDefinition = {
  opening?: string
  sections: LessonSection[]
  realWorldConnection?: string
  keyIdea?: string
  recap?: string[]
}
export type AnimationPart = {
  id: string
  label: string
  explanation: string
  example?: string
}

export type AnimationVisual = 'computer' | 'storage' | 'process' | 'network' | 'internet' | 'web' | 'capstone' | 'browser-render'

export type AnimationDefinition = {
  visual?: AnimationVisual
  opening?: string
  parts: AnimationPart[]
  closing?: string
}
export type ExperienceDefinition = {
  id: string
  type: ExperienceType
  title: string
  description?: string
  lesson?: LessonDefinition
  animation?: AnimationDefinition
  simulation?: SimulationDefinition
  sequencing?: SequencingDefinition
  question?: QuestionDefinition
}

export type SessionDefinition = {
  id: string
  number: number
  stage: MasterclassStage
  title: string
  objective: string
  experiences: ExperienceDefinition[]
}

export type MasterclassDefinition = {
  id: string
  number: number
  slug: string
  title: string
  subtitle: string
  objective: string
  sessions: SessionDefinition[]
}








