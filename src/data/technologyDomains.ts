export type TechnologyDomainDefinition = {
  id: string
  name: string
  description: string
  moduleIds: string[]
}

export const technologyDomains: TechnologyDomainDefinition[] = [
  {
    id: 'ai-intelligence',
    name: 'AI & Intelligence',
    description:
      'Artificial intelligence, generative models, language systems, retrieval, agents, and intelligent execution.',
    moduleIds: ['ai-intelligence'],
  },
  {
    id: 'application-engineering',
    name: 'Application Engineering',
    description:
      'Application development across interfaces, services, runtimes, and product systems.',
    moduleIds: ['application-engineering'],
  },
  {
    id: 'data-databases',
    name: 'Data & Databases',
    description:
      'Data structures, databases, storage, retrieval, caching, and information systems.',
    moduleIds: ['data'],
  },
  {
    id: 'apis-integration',
    name: 'APIs & Integration',
    description:
      'APIs, service communication, integrations, events, authentication flows, and connectivity.',
    moduleIds: [],
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    description:
      'Cloud platforms, containers, infrastructure, runtime environments, and deployment foundations.',
    moduleIds: ['infrastructure'],
  },
  {
    id: 'devops-delivery',
    name: 'DevOps & Delivery',
    description:
      'Source control, automation, CI/CD, release engineering, and software delivery systems.',
    moduleIds: [],
  },
  {
    id: 'systems-architecture',
    name: 'Systems & Architecture',
    description:
      'System design, distributed systems, service boundaries, scalability, and architecture thinking.',
    moduleIds: ['systems'],
  },
  {
    id: 'reliability-observability',
    name: 'Reliability & Observability',
    description:
      'Production reliability, monitoring, logging, metrics, tracing, and operational visibility.',
    moduleIds: [],
  },
  {
    id: 'security-identity',
    name: 'Security & Identity',
    description:
      'Security foundations, identity, authentication, authorization, access control, and secrets.',
    moduleIds: [],
  },
  {
    id: 'engineering-product-practice',
    name: 'Engineering & Product Practice',
    description:
      'Product engineering, technical leadership, delivery thinking, decision systems, and continuous improvement.',
    moduleIds: [],
  },
]
