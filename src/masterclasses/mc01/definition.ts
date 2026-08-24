import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc01Session01 } from './sessions/session01'
import { mc01Session02 } from './sessions/session02'
import { mc01Session03 } from './sessions/session03'
import { mc01Session04 } from './sessions/session04'
import { mc01Session05 } from './sessions/session05'
import { mc01Session06 } from './sessions/session06'
import { mc01Session07 } from './sessions/session07'
import { mc01Session08 } from './sessions/session08'
import { mapGuide01 } from './guides/mapGuide01'
import { codeGuide01 } from './guides/codeGuide01'

export const mc01: MasterclassDefinition = {
  id: 'mc01',
  number: 1,
  slug: 'computers-networks-internet',
  title: 'Computers, Networks & the Internet',
  subtitle:
    'Understand what actually happens when you use the internet.',
  objective:
    'Build a strong mental model of computers, networks and the internet from absolute zero.',
  sessions: [
    mc01Session01,
    mc01Session02,
    mc01Session03,
    mc01Session04,
    mc01Session05,
    mc01Session06,
    mc01Session07,
    mc01Session08,
  ],
  guides: [
    mapGuide01,
    codeGuide01,
  ],
}

