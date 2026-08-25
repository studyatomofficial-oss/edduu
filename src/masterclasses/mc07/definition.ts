import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc07Session01 } from './sessions/session01'
import { mc07Session02 } from './sessions/session02'
import { mc07Session03 } from './sessions/session03'
import { mc07Session04 } from './sessions/session04'
import { mc07Session05 } from './sessions/session05'
import { mc07Session06 } from './sessions/session06'
import { mc07Session07 } from './sessions/session07'
import { mc07Session08 } from './sessions/session08'
import { mapGuide07 } from './guides/mapGuide07'
import { codeGuide07 } from './guides/codeGuide07'

export const mc07: MasterclassDefinition = {
  id: 'mc07',
  number: 7,
  slug: 'software-architecture-system-design',
  title: 'Software Architecture & System Design',
  subtitle:
    'Learn how to transform business requirements into system boundaries, components, data flows and architecture decisions.',
  objective:
    'Build a practical mental model of software architecture and system design, from requirements and constraints to components, interfaces, data flow and architectural trade-offs.',
  sessions: [
    mc07Session01,
    mc07Session02,
    mc07Session03,
    mc07Session04,
    mc07Session05,
    mc07Session06,
    mc07Session07,
    mc07Session08,
  ],
  guides: [
    mapGuide07,
    codeGuide07,
  ],
}