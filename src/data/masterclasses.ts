export type MasterclassLevel = 'basic' | 'intermediate' | 'advanced'

export type Masterclass = {
  number: number
  level: MasterclassLevel
  title: string
  description: string
  slug: string
}

export const masterclasses: Masterclass[] = [
  {
    number: 1,
    level: 'basic',
    title: 'Computers, Networks & The Internet',
    description: 'Understand what actually happens when you use a computer and the internet.',
    slug: 'computers-networks-internet',
  },
  {
    number: 2,
    level: 'basic',
    title: 'How Websites & Applications Work',
    description: 'Understand how modern websites become working applications.',
    slug: 'websites-applications',
  },
  {
    number: 3,
    level: 'basic',
    title: 'Programming & Python',
    description: 'Learn how to teach a computer to solve problems.',
    slug: 'programming-python',
  },
  {
    number: 4,
    level: 'basic',
    title: 'Data & Databases',
    description: 'Understand how software stores, retrieves and manages information.',
    slug: 'data-databases',
  },
  {
    number: 5,
    level: 'basic',
    title: 'APIs & Backend Engineering',
    description: 'Understand how software systems communicate and process requests.',
    slug: 'apis-backend-engineering',
  },
  {
    number: 6,
    level: 'basic',
    title: 'Git, Collaboration & Software Delivery',
    description: 'Learn how engineering teams build, review, test and deliver software.',
    slug: 'git-collaboration-delivery',
  },
  {
    number: 7,
    level: 'intermediate',
    title: 'Software Architecture & System Design',
    description: 'Learn how to structure systems and make architectural decisions.',
    slug: 'software-architecture-system-design',
  },
  {
    number: 8,
    level: 'intermediate',
    title: 'Cloud Computing',
    description: 'Understand how modern applications run on cloud infrastructure.',
    slug: 'cloud-computing',
  },
  {
    number: 9,
    level: 'intermediate',
    title: 'Containers, Kubernetes & Infrastructure',
    description: 'Learn how applications are packaged, deployed and operated at scale.',
    slug: 'containers-kubernetes-infrastructure',
  },
  {
    number: 10,
    level: 'intermediate',
    title: 'Distributed Systems & Microservices',
    description: 'Understand what changes when applications become distributed systems.',
    slug: 'distributed-systems-microservices',
  },
  {
    number: 11,
    level: 'intermediate',
    title: 'Scalability, Performance & Data at Scale',
    description: 'Learn how systems evolve from small workloads to large-scale traffic.',
    slug: 'scalability-performance-scale',
  },
  {
    number: 12,
    level: 'intermediate',
    title: 'Event-Driven Systems & Data Pipelines',
    description: 'Understand events, messaging, streaming and asynchronous systems.',
    slug: 'event-driven-systems-data-pipelines',
  },
  {
    number: 13,
    level: 'intermediate',
    title: 'Security, Identity & Trust',
    description: 'Learn how modern systems protect users, data and infrastructure.',
    slug: 'security-identity-trust',
  },
  {
    number: 14,
    level: 'intermediate',
    title: 'Production Engineering, Observability & Reliability',
    description: 'Learn how to operate, observe and keep production systems reliable.',
    slug: 'production-observability-reliability',
  },
  {
    number: 15,
    level: 'advanced',
    title: 'Product Engineering, Agile & Technical Leadership',
    description: 'Connect engineering execution with product decisions and technical leadership.',
    slug: 'product-engineering-technical-leadership',
  },
  {
    number: 16,
    level: 'advanced',
    title: 'Machine Learning & Deep Learning',
    description: 'Understand how machines learn patterns from data.',
    slug: 'machine-learning-deep-learning',
  },
  {
    number: 17,
    level: 'advanced',
    title: 'Generative AI & Large Language Models',
    description: 'Understand how modern generative AI and LLM systems work.',
    slug: 'generative-ai-llms',
  },
  {
    number: 18,
    level: 'advanced',
    title: 'RAG & AI Knowledge Systems',
    description: 'Learn how AI systems use external knowledge to produce grounded answers.',
    slug: 'rag-ai-knowledge-systems',
  },
  {
    number: 19,
    level: 'advanced',
    title: 'AI Agents, Agentic AI & Tool-Using Systems',
    description: 'Understand systems where AI can reason, use tools and execute workflows.',
    slug: 'ai-agents-agentic-ai',
  },
  {
    number: 20,
    level: 'advanced',
    title: 'Production AI Systems & Engineering Leadership',
    description: 'Bring engineering, cloud, reliability, product and AI together in one production system.',
    slug: 'production-ai-engineering-leadership',
  },
]

export const masterclassesByLevel = {
  basic: masterclasses.filter((masterclass) => masterclass.level === 'basic'),
  intermediate: masterclasses.filter((masterclass) => masterclass.level === 'intermediate'),
  advanced: masterclasses.filter((masterclass) => masterclass.level === 'advanced'),
}
