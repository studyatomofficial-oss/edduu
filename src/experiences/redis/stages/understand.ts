import type { StageDefinition } from '../../../types/learning'

export const redisUnderstandStage: StageDefinition = {
  id: 'redis-stage-02-understand',
  number: 2,
  key: 'understand',
  title: 'Understand',

  objective: {
    statement:
      'Explain the memory-first model, key-value concept, and why cache-aside is commonly used with Redis and a database.',
    evidence: [
      'Describes the key-value mental model and TTL trade-offs.',
      'Explains cache-aside: read from cache, fallback to DB, then populate cache.',
    ],
  },

  content: {
    eyebrow: '02 — UNDERSTAND',
    title: 'Why use Redis and what mental model matters?',
    description:
      'Redis favors in-memory access for speed; developers reason in terms of keys, values, and expiration for freshness.',
    explanation:
      'Cache-aside is the most common pattern: on a miss, load from the database and write to Redis with a TTL to bound staleness.',
    takeaway: 'Think memory-first: fast reads, bounded staleness, and explicit invalidation.',
  },

  interactions: [
    {
      id: 'redis-understand-quiz',
      type: 'diagnostic',
      title: 'Pick the cache-aside behavior',
      instruction: 'Which describes cache-aside?',
      config: {
        options: [
          { id: 'cache-aside', label: 'Read from cache, on miss read DB then write cache' },
          { id: 'write-through', label: 'Write to cache and DB synchronously' },
          { id: 'write-back', label: 'Write to cache and flush later' },
          { id: 'no-cache', label: 'Never cache data' },
        ],
        correctOptionId: 'cache-aside',
      },
    },
  ],

  completion: { type: 'interaction-complete' },
}
