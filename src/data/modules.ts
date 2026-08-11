export type ModuleDefinition = {
  id: string
  slug: string
  name: string
  description?: string
}

export const modules: ModuleDefinition[] = [
  {
    id: 'ai-intelligence',
    slug: 'ai-intelligence',
    name: 'AI / Intelligence',
    description: 'AI systems, models, and decision infrastructure.',
  },
  {
    id: 'application-engineering',
    slug: 'application-engineering',
    name: 'Application engineering',
    description: 'Product systems, interfaces, and service design.',
  },
  {
    id: 'data',
    slug: 'data',
    name: 'Data',
    description: 'Knowledge, storage, retrieval, and information flow.',
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure',
    name: 'Infrastructure',
    description: 'Runtime environments, reliability, and deployment.',
  },
  {
    id: 'systems',
    slug: 'systems',
    name: 'Systems / execution',
    description: 'Execution loops, operational thinking, and platform strategy.',
  },
]
