import type { MasterclassDefinition } from '../../masterclass-engine/types'

import { mc04Session01 } from './sessions/session01'
import { mc04Session02 } from './sessions/session02'
import { mc04Session03 } from './sessions/session03'
import { mc04Session04 } from './sessions/session04'
import { mc04Session05 } from './sessions/session05'
import { mc04Session06 } from './sessions/session06'
import { mc04Session07 } from './sessions/session07'
import { mc04Session08 } from './sessions/session08'
import { mapGuide04 } from './guides/mapGuide04'
import { codeGuide04 } from './guides/codeGuide04'

export const mc04: MasterclassDefinition = {
  id: 'mc04',
  number: 4,
  slug: 'data-databases',
  title: 'Data & Databases',
  subtitle:
    'Understand how information is represented, organized, stored and retrieved.',
  objective:
    'Build a practical mental model of data and databases, from individual values and records to structured storage and querying.',
  sessions: [
    mc04Session01,
    mc04Session02,
    mc04Session03,
    mc04Session04,
    mc04Session05,
    mc04Session06,
    mc04Session07,
    mc04Session08,
  ],
  guides: [
    mapGuide04,
    codeGuide04,
  ],
}