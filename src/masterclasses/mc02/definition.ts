import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc02Session01 } from './sessions/session01'
import { mc02Session02 } from './sessions/session02'
import { mc02Session03 } from './sessions/session03'
import { mc02Session04 } from './sessions/session04'
import { mc02Session05 } from './sessions/session05'
import { mc02Session06 } from './sessions/session06'
import { mc02Session07 } from './sessions/session07'
import { mc02Session08 } from './sessions/session08'
import { mapGuide02 } from './guides/mapGuide02'
import { codeGuide02 } from './guides/codeGuide02'

export const mc02: MasterclassDefinition = {
  id: 'mc02',
  number: 2,
  slug: 'websites-applications',
  title: 'How Websites & Applications Work',
  subtitle:
    'Understand how computers represent, store, process and move information.',
  objective:
    'Build the next layer of computer understanding by connecting information, memory, processing and data movement.',
  sessions: [
    mc02Session01,
    mc02Session02,
    mc02Session03,
    mc02Session04,
    mc02Session05,
    mc02Session06,
    mc02Session07,
    mc02Session08,
  ],
  guides: [
    mapGuide02,
    codeGuide02,
  ],
}



