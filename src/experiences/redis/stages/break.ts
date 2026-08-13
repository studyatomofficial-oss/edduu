import type { StageDefinition } from '../../../types/learning'

export const redisBreakStage: StageDefinition = {
  id: 'redis-stage-06-break',
  number: 6,
  key: 'break',
  title: 'Break',

  objective: {
    statement:
      'Identify a realistic cache failure such as stale data due to missed invalidation or TTL misconfiguration.',
    evidence: [
      'Observes stale values returned from cache after DB updates.',
      'Locates the failure in the invalidation/expiration path.',
    ],
  },

  content: {
    eyebrow: '06 — BREAK',
    title: 'What can go wrong with a cache?',
    description:
      'A common issue is stale cache entries: the DB changes but Redis still returns the old value because invalidation or TTL failed.',
    explanation:
      'Stale cache results in incorrect responses for many users until the cache expires or is invalidated.',
    takeaway: 'Cache issues are correctness problems; they often stem from missing invalidation or overly long TTLs.',
    failureScenario: {
      title: 'Stale product price after update',
      description:
        'A product price is updated in the DB, but users still see the old price because the cache was not invalidated.',
      expectedDiagnosis: 'The cache key was not invalidated or TTL was too long.',
    },
  },

  interactions: [
    {
      id: 'redis-break-diagnosis',
      type: 'diagnostic',
      title: 'Diagnose the stale cache',
      instruction: 'Which issue most directly explains the stale data?',
      config: {
        options: [
          { id: 'ttl', label: 'Cache key not invalidated or expired' },
          { id: 'db', label: 'Database not updated' },
          { id: 'network', label: 'Network partition' },
          { id: 'cpu', label: 'Application CPU saturation' },
        ],
        correctOptionId: 'ttl',
      },
    },
  ],

  completion: { type: 'interaction-complete' },
}
