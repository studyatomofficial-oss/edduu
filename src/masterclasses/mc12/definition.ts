import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc12Session01 } from './sessions/session01'
import { mc12Session02 } from './sessions/session02'
import { mc12Session03 } from './sessions/session03'
import { mc12Session04 } from './sessions/session04'
import { mc12Session05 } from './sessions/session05'
import { mc12Session06 } from './sessions/session06'
import { mc12Session07 } from './sessions/session07'
import { mc12Session08 } from './sessions/session08'
import { mapGuide12 } from './guides/mapGuide12'
import { codeGuide12 } from './guides/codeGuide12'

export const mc12: MasterclassDefinition = {
  id: 'mc12',
  number: 12,
  slug: 'scalability-performance-scale',
  title: 'Scalability, Performance & Data at Scale',
  subtitle:
    'Understand how systems handle growing traffic, increasing data volume, latency pressure and production-scale workloads.',
  objective:
    'Design, measure and operate systems that scale safely across traffic, performance and data volume.',
  sessions: [
    mc12Session01,
    mc12Session02,
    mc12Session03,
    mc12Session04,
    mc12Session05,
    mc12Session06,
    mc12Session07,
    mc12Session08,
  ],
  guides: [mapGuide12, codeGuide12],
}
