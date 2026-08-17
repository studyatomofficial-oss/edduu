export type AdvancedSection = {
  id: string
  step: string
  title: string
  paragraphs: string[]
  flow?: string[]
  items?: [string, string][]
  production?: string[]
}

export type AdvancedDefinition = {
  technologyId: string
  slug: string
  eyebrow: string
  title: string
  summary: string
  sections: AdvancedSection[]
}
