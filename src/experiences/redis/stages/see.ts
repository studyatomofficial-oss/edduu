import type { StageDefinition } from '../../../types/learning'

export const redisSeeStage: StageDefinition = {
  id: 'redis-stage-01-see',
  number: 1,
  key: 'see',
  title: 'See',

  objective: {
    statement:
      'Recognize Redis as an in-memory layer used to speed reads and share transient state across services.',
    evidence: [
      'Locates Redis between application and slower data stores.',
      'Explains that Redis reduces repeated work by serving cached values.',
    ],
  },

  content: {
    eyebrow: '01 — SEE',
    title: 'Where does Redis sit in a system?',
    description:
      'Redis is an in-memory store often placed in front of databases or services to serve frequently requested data quickly.',
    explanation:
      'Applications typically check Redis first for cached values and fall back to the database on cache misses.',
    takeaway:
      'Redis speeds the common path; it is a performance layer, not the canonical source of truth.',
  },

  interactions: [
    {
      id: 'redis-see-start',
      type: 'click',
      title: 'Observe the layer',
      instruction: 'Click to observe where Redis sits in the request path.',
      config: { label: 'Observe the layer' },
    },
  ],

  completion: { type: 'interaction-complete' },
}
