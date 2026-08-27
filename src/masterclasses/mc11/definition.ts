import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc11Session01 } from './sessions/session01'
import { mc11Session02 } from './sessions/session02'
import { mc11Session03 } from './sessions/session03'
import { mc11Session04 } from './sessions/session04'
import { mc11Session05 } from './sessions/session05'
import { mc11Session06 } from './sessions/session06'
import { mc11Session07 } from './sessions/session07'
import { mc11Session08 } from './sessions/session08'
import { mapGuide11 } from './guides/mapGuide11'
import { codeGuide11 } from './guides/codeGuide11'

export const mc11: MasterclassDefinition = {
  id: 'mc11',
  number: 11,
  slug: 'scalability-performance-scale',
  title: 'Scalability, Performance & Data at Scale',
  subtitle:
    'Understand how systems handle increasing traffic, workload, latency pressure and rapidly growing data volumes.',
  objective:
    'Build practical understanding of scalability, performance engineering, caching, database optimization, partitioning, replication, capacity planning and data lifecycle, then apply these concepts to a production-oriented EDDUU architecture.',
  sessions: [
    mc11Session01,
    mc11Session02,
    mc11Session03,
    mc11Session04,
    mc11Session05,
    mc11Session06,
    mc11Session07,
    mc11Session08,
  ],
  guides: [mapGuide11, codeGuide11],
}
