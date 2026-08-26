import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc08Session01 } from './sessions/session01'
import { mc08Session02 } from './sessions/session02'
import { mc08Session03 } from './sessions/session03'
import { mc08Session04 } from './sessions/session04'
import { mc08Session05 } from './sessions/session05'
import { mc08Session06 } from './sessions/session06'
import { mc08Session07 } from './sessions/session07'
import { mc08Session08 } from './sessions/session08'
import { mapGuide08 } from './guides/mapGuide08'
import { codeGuide08 } from './guides/codeGuide08'

export const mc08: MasterclassDefinition = {
  id: 'mc08',
  number: 8,
  slug: 'cloud-computing',
  title: 'Cloud Computing',
  subtitle:
    'Understand how modern cloud platforms provide compute, storage, networking, security, scalability and operational capabilities.',
  objective:
    'Build a practical understanding of cloud computing and learn how to design, deploy, scale and operate cloud-based systems.',
  sessions: [
    mc08Session01,
    mc08Session02,
    mc08Session03,
    mc08Session04,
    mc08Session05,
    mc08Session06,
    mc08Session07,
    mc08Session08,
  ],
  guides: [mapGuide08, codeGuide08],
}