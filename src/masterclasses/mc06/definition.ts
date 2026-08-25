import type { MasterclassDefinition } from '../../masterclass-engine/types'

import { mc06Session01 } from './sessions/session01'
import { mc06Session02 } from './sessions/session02'
import { mc06Session03 } from './sessions/session03'
import { mc06Session04 } from './sessions/session04'
import { mc06Session05 } from './sessions/session05'
import { mc06Session06 } from './sessions/session06'
import { mc06Session07 } from './sessions/session07'
import { mc06Session08 } from './sessions/session08'
import { mapGuide06 } from './guides/mapGuide06'
import { codeGuide06 } from './guides/codeGuide06'

export const mc06: MasterclassDefinition = {
  id: 'mc06',
  number: 6,
  slug: 'git-collaboration-delivery',
  title: 'Git, Collaboration & Software Delivery',
  subtitle:
    'Understand how teams use Git, branches, reviews and delivery workflows to build software together.',
  objective:
    'Build a practical mental model of Git-based software collaboration, from commits and branches to pull requests, code review and reliable software delivery.',
  sessions: [
    mc06Session01,
    mc06Session02,
    mc06Session03,
    mc06Session04,
    mc06Session05,
    mc06Session06,
    mc06Session07,
    mc06Session08,
  ],
  guides: [
    mapGuide06,
    codeGuide06,
  ],
}