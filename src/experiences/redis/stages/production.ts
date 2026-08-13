import type { StageDefinition } from '../../../types/learning'

export const redisProductionStage: StageDefinition = {
  id: 'redis-stage-08-production',
  number: 8,
  key: 'production',
  title: 'Production',

  objective: {
    statement:
      'Run Redis in production with attention to invalidation, TTLs, memory pressure, persistence, and monitoring.',
    evidence: [
      'Lists TTL, invalidation, eviction, persistence, and monitoring as core concerns.',
      'Explains trade-offs between latency and correctness.',
    ],
  },

  content: {
    eyebrow: '08 — PRODUCTION',
    title: 'Operating Redis in production',
    description:
      'Production Redis requires planning for memory limits, eviction policies, persistence when needed, and reliable invalidation strategies to avoid correctness bugs.',
    explanation:
      'Monitor hit/miss ratios, evictions, memory usage, latency, and errors. Choose TTLs and eviction policies that align with business correctness and availability needs.',
    takeaway: 'Production safety is about balancing freshness, capacity, and resilience.',
  },

  interactions: [
    {
      id: 'redis-production-review',
      type: 'click',
      title: 'Review production concerns',
      instruction: 'Click to review core production risks and mitigations.',
      config: { label: 'Review production concerns' },
    },
  ],

  completion: { type: 'interaction-complete' },
}
