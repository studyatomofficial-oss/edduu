import type { ProjectDefinition } from '../types/learning'

export const projects: ProjectDefinition[] = [
  {
    id: 'ai-knowledge-assistant',
    slug: 'ai-knowledge-assistant',
    title: 'AI Knowledge Assistant',
    moduleId: 'ai-intelligence',
    summary:
      'A grounded assistant that retrieves the right information before producing an answer.',
    purpose:
      'Reduce hallucination and improve answer quality by combining retrieval, memory, and model reasoning in a controlled flow.',
    technologyIds: ['rag', 'llms', 'postgresql', 'redis', 'docker'],
    architecture: {
      components: [
        { id: 'user', label: 'User Question' },
        { id: 'retrieval', label: 'RAG Retrieval', techId: 'rag' },
        { id: 'documents', label: 'Document Store', techId: 'postgresql' },
        { id: 'cache', label: 'Cache Layer', techId: 'redis' },
        { id: 'model', label: 'LLM Reasoning', techId: 'llms' },
        { id: 'runtime', label: 'Container Runtime', techId: 'docker' },
      ],
      flow: [
        { from: 'user', to: 'retrieval', label: 'Ask question' },
        { from: 'retrieval', to: 'documents', label: 'Fetch chunks' },
        { from: 'documents', to: 'cache', label: 'Warm results' },
        { from: 'cache', to: 'model', label: 'Supply grounded context' },
        { from: 'model', to: 'runtime', label: 'Serve response' },
      ],
    },
    failureScenarios: [
      {
        title: 'Dirty retrieval context',
        description:
          'When the document store is stale or incomplete, the assistant answers confidently with weak evidence.',
        relatedTechId: 'rag',
      },
      {
        title: 'Cache thundering',
        description:
          'Repeated requests can overwhelm the retrieval layer if cache policies are not tuned for hot documents.',
        relatedTechId: 'redis',
      },
    ],
    productionConcerns: [
      'Retrieval freshness and indexing quality',
      'Latency and cache invalidation',
      'Access controls for sensitive documents',
      'Answer quality monitoring and evaluation',
    ],
    difficulty: 'advanced',
  },
  {
    id: 'e-commerce-platform',
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    moduleId: 'application-engineering',
    summary:
      'A production storefront that combines user flows, APIs, storage, and operational resilience.',
    purpose:
      'Demonstrate how a user-facing product becomes a coordinated system of application logic, persistence, caching, and deployment concerns.',
    technologyIds: ['python', 'fastapi', 'rest-apis', 'postgresql', 'redis', 'docker', 'cloud'],
    architecture: {
      components: [
        { id: 'shop', label: 'Storefront UI' },
        { id: 'api', label: 'API Layer', techId: 'fastapi' },
        { id: 'catalog', label: 'Catalog APIs', techId: 'rest-apis' },
        { id: 'db', label: 'Transactional Database', techId: 'postgresql' },
        { id: 'cache', label: 'Session and Catalog Cache', techId: 'redis' },
        { id: 'deploy', label: 'Cloud Deployment', techId: 'cloud' },
        { id: 'runtime', label: 'Container Packaging', techId: 'docker' },
        { id: 'app', label: 'Python Service', techId: 'python' },
      ],
      flow: [
        { from: 'shop', to: 'api', label: 'Browse products' },
        { from: 'api', to: 'catalog', label: 'Fetch product data' },
        { from: 'catalog', to: 'db', label: 'Query catalog' },
        { from: 'api', to: 'cache', label: 'Reuse hot data' },
        { from: 'cache', to: 'app', label: 'Reduce latency' },
        { from: 'app', to: 'deploy', label: 'Scale safe delivery' },
        { from: 'deploy', to: 'runtime', label: 'Package and ship' },
      ],
    },
    failureScenarios: [
      {
        title: 'Catalog drift',
        description:
          'The storefront renders stale inventory if the cache and database are not kept consistent during pricing updates.',
        relatedTechId: 'redis',
      },
      {
        title: 'Dependency bottleneck',
        description:
          'A slow downstream API can cascade into a delayed checkout path when request concurrency spikes.',
        relatedTechId: 'fastapi',
      },
    ],
    productionConcerns: [
      'Database consistency and transactional safety',
      'API latency and concurrency management',
      'Deployment rollback and health checks',
      'Operational observability under traffic spikes',
    ],
    difficulty: 'intermediate',
  },
  {
    id: 'ai-agent',
    slug: 'ai-agent',
    title: 'AI Agent',
    moduleId: 'ai-intelligence',
    summary:
      'An agentic workflow that turns goals into actions, tools, and iterative reflections.',
    purpose:
      'Show how an AI system moves from a single prompt to tool usage, state tracking, and controlled execution loops.',
    technologyIds: ['agents', 'mcp', 'rag', 'docker', 'github-actions'],
    architecture: {
      components: [
        { id: 'goal', label: 'Task Goal' },
        { id: 'planning', label: 'Agent Planning', techId: 'agents' },
        { id: 'tooling', label: 'Tool Integration', techId: 'mcp' },
        { id: 'knowledge', label: 'Grounded Retrieval', techId: 'rag' },
        { id: 'runtime', label: 'Execution Environment', techId: 'docker' },
        { id: 'automation', label: 'Workflow Automation', techId: 'github-actions' },
      ],
      flow: [
        { from: 'goal', to: 'planning', label: 'Outline steps' },
        { from: 'planning', to: 'tooling', label: 'Select tools' },
        { from: 'tooling', to: 'knowledge', label: 'Fetch context' },
        { from: 'knowledge', to: 'runtime', label: 'Act with evidence' },
        { from: 'runtime', to: 'automation', label: 'Run repeated checks' },
      ],
    },
    failureScenarios: [
      {
        title: 'Tool misuse',
        description:
          'The agent may choose the wrong tool or use incomplete context when the workflow design is under-specified.',
        relatedTechId: 'agents',
      },
      {
        title: 'Context drift',
        description:
          'If retrieval output is stale or inaccurate, the agent can pursue the wrong action with high confidence.',
        relatedTechId: 'rag',
      },
    ],
    productionConcerns: [
      'Tool permissions and safe execution boundaries',
      'State management across long-running tasks',
      'Verification and retry loops for critical decisions',
      'Operational safety and observability',
    ],
    difficulty: 'advanced',
  },
]

export const projectRegistry = new Map(
  projects.map((project) => [project.slug, project]),
)

export const projectById = new Map(
  projects.map((project) => [project.id, project]),
)

export function getProjectBySlug(slug: string) {
  return projectRegistry.get(slug)
}
