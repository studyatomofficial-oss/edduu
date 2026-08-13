import type { StageDefinition } from '../../../types/learning'

export const redisTechnicalStage: StageDefinition = {
  id: 'redis-stage-03-technical',
  number: 3,
  key: 'technical',
  title: 'Technical',

  objective: {
    statement:
      'Describe keys/values, TTL, expiration, eviction, and common data structures used in Redis.',
    evidence: [
      'Explains keys, TTL and expiration semantics.',
      'Names common structures: strings, hashes, lists, sets, sorted sets, streams.',
    ],
  },

  content: {
    eyebrow: '03 — TECHNICAL',
    title: 'Redis essentials',
    description:
      'Redis stores key-value data with optional TTL. It provides multiple data structures for common patterns and eviction when memory is constrained.',
    explanation:
      'TTL sets expiry for keys; eviction policies remove keys when memory is low. Choose data structures based on access patterns and persistence needs.',
    takeaway: 'Understand TTL, expiration, eviction, and the right data structure for the job.',
  },

  interactions: [
    {
      id: 'redis-technical-ttl',
      type: 'diagnostic',
      title: 'Why use a TTL?',
      instruction: 'Select the primary purpose of a TTL on a cache key.',
      config: {
        options: [
          { id: 'freshness', label: 'Bound staleness and auto-expire outdated values' },
          { id: 'durability', label: 'Make values permanently durable' },
          { id: 'index', label: 'Serve as a primary database index' },
          { id: 'network', label: 'Guarantee message delivery' },
        ],
        correctOptionId: 'freshness',
      },
    },
  ],

  completion: { type: 'interaction-complete' },
}
