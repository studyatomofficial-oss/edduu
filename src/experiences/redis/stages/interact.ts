import type { StageDefinition } from '../../../types/learning'

export const redisInteractStage: StageDefinition = {
  id: 'redis-stage-04-interact',
  number: 4,
  key: 'interact',
  title: 'Interact',

  objective: {
    statement:
      'Make a practical caching decision based on freshness and read frequency.',
    evidence: [
      'Chooses caching when reads are frequent and data can tolerate brief staleness.',
      'Recognizes when to avoid caching for highly dynamic data.',
    ],
  },

  content: {
    eyebrow: '04 — INTERACT',
    title: 'Should this data be cached?',
    description:
      'Decide whether to cache frequently-read shipping status updates that change every few minutes.',
    explanation:
      'A short TTL with invalidation on updates balances latency and freshness for frequently-read, slightly-stale-tolerant data.',
    takeaway: 'Choose short TTLs or explicit invalidation when data updates frequently but still benefits from caching.',
  },

  interactions: [
    {
      id: 'redis-interact-decision',
      type: 'diagnostic',
      title: 'Choose the caching approach',
      instruction: 'Which approach suits a frequently-read, slightly-dynamic dataset?',
      config: {
        options: [
          { id: 'short-ttl', label: 'Cache with short TTL and invalidate on updates' },
          { id: 'no-cache', label: 'Always read from DB' },
          { id: 'long-ttl', label: 'Cache indefinitely' },
          { id: 'queue', label: 'Queue reads for batch processing' },
        ],
        correctOptionId: 'short-ttl',
      },
    },
  ],

  completion: { type: 'interaction-complete' },
}
