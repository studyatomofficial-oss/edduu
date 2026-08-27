import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc10Session01 } from './sessions/session01'
import { mc10Session02 } from './sessions/session02'
import { mc10Session03 } from './sessions/session03'
import { mc10Session04 } from './sessions/session04'
import { mc10Session05 } from './sessions/session05'
import { mc10Session06 } from './sessions/session06'
import { mc10Session07 } from './sessions/session07'
import { mc10Session08 } from './sessions/session08'
import { mapGuide10 } from './guides/mapGuide10'
import { codeGuide10 } from './guides/codeGuide10'

export const mc10: MasterclassDefinition = {
  id: 'mc10',
  number: 10,
  slug: 'distributed-systems-microservices',
  title: 'Distributed Systems & Microservices',
  subtitle:
    'Understand how distributed applications communicate, coordinate, scale and remain reliable across multiple services and machines.',
  objective:
    'Build a practical understanding of distributed systems and microservices and learn how to design, communicate, scale, observe and operate reliable distributed platforms.',
  sessions: [
    mc10Session01,
    mc10Session02,
    mc10Session03,
    mc10Session04,
    mc10Session05,
    mc10Session06,
    mc10Session07,
    mc10Session08,
  ],
  guides: [mapGuide10, codeGuide10],
}