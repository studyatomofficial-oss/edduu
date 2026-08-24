import type { MasterclassDefinition } from '../../masterclass-engine/types'

import { mc03Session01 } from './sessions/session01'
import { mc03Session02 } from './sessions/session02'
import { mc03Session03 } from './sessions/session03'
import { mc03Session04 } from './sessions/session04'
import { mc03Session05 } from './sessions/session05'
import { mc03Session06 } from './sessions/session06'
import { mc03Session07 } from './sessions/session07'
import { mc03Session08 } from './sessions/session08'
import { mapGuide03 } from './guides/mapGuide03'
import { codeGuide03 } from './guides/codeGuide03'

export const mc03: MasterclassDefinition = {
  id: 'mc03',
  number: 3,
  slug: 'programming-python',
  title: 'Programming & Python',
  subtitle:
    'Learn how to tell a computer what to do, from absolute zero.',
  objective:
    'Build programming fundamentals through simple examples, visual explanations, interactive practice and real coding challenges.',
  sessions: [
    mc03Session01,
    mc03Session02,
    mc03Session03,
    mc03Session04,
    mc03Session05,
    mc03Session06,
    mc03Session07,
    mc03Session08,
  ],
  guides: [
    mapGuide03,
    codeGuide03,
  ],
}