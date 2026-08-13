import type { Difficulty } from '../types/learning'

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

export const technologies: TechnologyDefinition[] = [
  {
    id: 'ai',
    slug: 'ai',
    name: 'AI',
    shortName: 'AI',
    moduleId: 'ai-intelligence',
    category: 'AI / Intelligence',
    description: 'Foundational artificial intelligence and decision systems.',
    difficulty: 'beginner',
  },
  {
    id: 'genai',
    slug: 'genai',
    name: 'Generative AI',
    shortName: 'GenAI',
    moduleId: 'ai-intelligence',
    category: 'AI / Intelligence',
    description: 'Models that generate text, code, media, and multimodal output.',
    difficulty: 'intermediate',
  },
  {
    id: 'llms',
    slug: 'llms',
    name: 'Large Language Models',
    shortName: 'LLMs',
    moduleId: 'ai-intelligence',
    category: 'AI / Intelligence',
    description: 'Transformer-based language systems for reasoning and interaction.',
    difficulty: 'intermediate',
  },
  {
    id: 'rag',
    slug: 'rag',
    name: 'Retrieval-Augmented Generation',
    shortName: 'RAG',
    moduleId: 'ai-intelligence',
    category: 'AI / Intelligence',
    description:
      'Ground LLM responses using retrieved external knowledge.',
    difficulty: 'advanced',
    experienceId: 'rag-v1',
  },
  {
    id: 'agents',
    slug: 'agents',
    name: 'AI Agents',
    shortName: 'Agents',
    moduleId: 'ai-intelligence',
    category: 'AI / Intelligence',
    description: 'Autonomous execution loops and tool-mediated work.',
    difficulty: 'advanced',
  },
  {
    id: 'mcp',
    slug: 'mcp',
    name: 'Model Context Protocol',
    shortName: 'MCP',
    moduleId: 'ai-intelligence',
    category: 'AI / Intelligence',
    description: 'Standardized context and tool connectivity for models.',
    difficulty: 'advanced',
  },
  {
    id: 'full-stack',
    slug: 'full-stack',
    name: 'Full Stack',
    shortName: 'Full Stack',
    moduleId: 'application-engineering',
    category: 'Application engineering',
    description: 'End-to-end product engineering across client and server layers.',
    difficulty: 'intermediate',
  },
  {
    id: 'python',
    slug: 'python',
    name: 'Python',
    shortName: 'Python',
    moduleId: 'application-engineering',
    category: 'Application engineering',
    description: 'A flexible runtime for modern software and data products.',
    difficulty: 'beginner',
  },
  {
    id: 'fastapi',
    slug: 'fastapi',
    name: 'FastAPI',
    shortName: 'FastAPI',
    moduleId: 'application-engineering',
    category: 'Application engineering',
    description: 'High-performance API development with strong Python ergonomics.',
    difficulty: 'intermediate',
  },
  {
    id: 'rest-apis',
    slug: 'rest-apis',
    name: 'REST APIs',
    shortName: 'REST APIs',
    moduleId: 'application-engineering',
    category: 'Application engineering',
    description: 'Resource-oriented interfaces across distributed products.',
    difficulty: 'intermediate',
  },
  {
    id: 'data',
    slug: 'data',
    name: 'Data',
    shortName: 'Data',
    moduleId: 'data',
    category: 'Data',
    description: 'The structure, movement, and interpretation of information systems.',
    difficulty: 'beginner',
  },
  {
    id: 'postgresql',
    slug: 'postgresql',
    name: 'PostgreSQL',
    shortName: 'PostgreSQL',
    moduleId: 'data',
    category: 'Data',
    description: 'A relational database platform for transactional and analytical workloads.',
    difficulty: 'intermediate',
  },
  {
    id: 'redis',
    slug: 'redis',
    name: 'Redis',
    shortName: 'Redis',
    moduleId: 'data',
    category: 'Data',
    description: 'In-memory data structures and operational caching patterns.',
    difficulty: 'intermediate',
    experienceId: 'redis-v1',
  },
  {
    id: 'cloud',
    slug: 'cloud',
    name: 'Cloud',
    shortName: 'Cloud',
    moduleId: 'infrastructure',
    category: 'Infrastructure',
    description: 'Managed, elastic infrastructure for product delivery and scale.',
    difficulty: 'intermediate',
  },
  {
    id: 'docker',
    slug: 'docker',
    name: 'Docker',
    shortName: 'Docker',
    moduleId: 'infrastructure',
    category: 'Infrastructure',
    description: 'Container packaging and repeatable runtime delivery.',
    difficulty: 'intermediate',
  },
  {
    id: 'kubernetes',
    slug: 'kubernetes',
    name: 'Kubernetes',
    shortName: 'Kubernetes',
    moduleId: 'infrastructure',
    category: 'Infrastructure',
    description: 'Container orchestration and resilient service operation.',
    difficulty: 'advanced',
  },
  {
    id: 'systems',
    slug: 'systems',
    name: 'Systems',
    shortName: 'Systems',
    moduleId: 'systems',
    category: 'Systems / execution',
    description: 'Operating models for resilient, observable, and intentional execution.',
    difficulty: 'intermediate',
  },
  {
    id: 'production',
    slug: 'production',
    name: 'Production',
    shortName: 'Production',
    moduleId: 'systems',
    category: 'Systems / execution',
    description: 'Designing for reliability, monitoring, and real-world change.',
    difficulty: 'intermediate',
  },
  {
    id: 'github-actions',
    slug: 'github-actions',
    name: 'GitHub Actions',
    shortName: 'GitHub Actions',
    moduleId: 'systems',
    category: 'Systems / execution',
    description: 'Automation for CI/CD and operational workflows in software delivery.',
    difficulty: 'intermediate',
  },
  {
    id: 'loop-engineering',
    slug: 'loop-engineering',
    name: 'Loop Engineering',
    shortName: 'Loop Engineering',
    moduleId: 'systems',
    category: 'Systems / execution',
    description: 'Designing feedback loops that continuously improve product operations.',
    difficulty: 'advanced',
  },
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
