import type { MasterclassDefinition } from '../../masterclass-engine/types'

import { mc05Session01 } from './sessions/session01'
import { mc05Session02 } from './sessions/session02'
import { mc05Session03 } from './sessions/session03'
import { mc05Session04 } from './sessions/session04'
import { mc05Session05 } from './sessions/session05'
import { mc05Session06 } from './sessions/session06'
import { mc05Session07 } from './sessions/session07'
import { mc05Session08 } from './sessions/session08'
import { mapGuide05 } from './guides/mapGuide05'
import { codeGuide05 } from './guides/codeGuide05'
export const mc05: MasterclassDefinition = {
  id: 'mc05',
  number: 5,
  slug: 'apis-backend-engineering',
  title: 'APIs & Backend Engineering',
  subtitle:
    'Understand how applications communicate, process requests and deliver reliable backend services.',
  objective:
    'Build a practical mental model of APIs and backend systems, from HTTP requests and responses to application logic, authentication and real-world service architecture.',
  sessions: [
    mc05Session01,
    mc05Session02,
    mc05Session03,
    mc05Session04,
    mc05Session05,
    mc05Session06,
    mc05Session07,
    mc05Session08,
  ],
  guides: [
    mapGuide05,
    codeGuide05,
  ],
}
