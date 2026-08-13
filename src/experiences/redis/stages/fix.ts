import type { StageDefinition } from '../../../types/learning'

export const redisFixStage: StageDefinition = {
  id: 'redis-stage-07-fix',
  number: 7,
  key: 'fix',
  title: 'Fix',

  objective: {
    statement:
      'Select and apply practical fixes: TTL tuning, explicit invalidation on updates, and monitoring to prevent recurrence.',
    evidence: [
      'Chooses invalidation or TTL reduction as corrective measures.',
      'Explains why the chosen fix addresses stale values.',
    ],
  },

  content: {
    eyebrow: '07 — FIX',
    title: 'How do we repair a stale cache?',
    description:
      'Invalidate the affected key on update, shorten TTLs for volatile data, and add monitoring for cache-hit ratios and evictions.',
    explanation:
      'The simplest fix is explicit invalidation when the source changes or using a shorter TTL; for systemic issues, add observability and fallback plans.',
    takeaway: 'Prefer explicit invalidation and sensible TTLs; monitor hit/miss and eviction metrics.',
  },

  interactions: [
    {
      id: 'redis-fix-choice',
      type: 'diagnostic',
      title: 'Choose a repair',
      instruction: 'Which repair most directly resolves stale product data?',
      config: {
        options: [
          { id: 'invalidate', label: 'Invalidate the cache key on update' },
          { id: 'long-ttl', label: 'Increase the TTL' },
          { id: 'ignore', label: 'Ignore the issue' },
          { id: 'rewrite', label: 'Rewrite the DB schema' },
        ],
        correctOptionId: 'invalidate',
      },
    },
  ],

  completion: { type: 'interaction-complete' },
}
