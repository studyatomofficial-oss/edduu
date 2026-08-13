import type { StageDefinition } from '../../../types/learning'

export const redisBuildStage: StageDefinition = {
  id: 'redis-stage-05-build',
  number: 5,
  key: 'build',
  title: 'Build',

  objective: {
    statement:
      'Assemble a simple cache-aside flow: Application → Redis → Database, with cache fills on miss.',
    evidence: [
      'Orders the flow correctly and explains cache hits vs misses.',
      'Explains how cache is populated after a DB read.',
    ],
  },

  content: {
    eyebrow: '05 — BUILD',
    title: 'Build a simple cache flow',
    description:
      'Application checks Redis, returns on hit. On miss, application reads DB, writes Redis, and returns the result.',
    explanation: 'This reduces DB load for repeated reads while providing bounded staleness via TTL.',
    takeaway: 'Cache-aside: read cache first, populate on miss with an expiration.',
  },

  interactions: [
    {
      id: 'redis-build-flow',
      type: 'flow',
      title: 'Assemble the cache flow',
      instruction: 'Arrange the steps for a cache-aside request path.',
      config: {
        steps: [
          { id: 'app', label: 'Application' },
          { id: 'redis', label: 'Redis' },
          { id: 'db', label: 'Database' },
          { id: 'response', label: 'Response' },
        ],
      },
    },
  ],

  completion: { type: 'interaction-complete' },
}
