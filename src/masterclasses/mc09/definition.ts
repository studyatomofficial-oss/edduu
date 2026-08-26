import type { MasterclassDefinition } from '../../masterclass-engine/types'
import { mc09Session01 } from './sessions/session01'
import { mc09Session02 } from './sessions/session02'
import { mc09Session03 } from './sessions/session03'
import { mc09Session04 } from './sessions/session04'
import { mc09Session05 } from './sessions/session05'
import { mc09Session06 } from './sessions/session06'
import { mc09Session07 } from './sessions/session07'
import { mc09Session08 } from './sessions/session08'
import { mapGuide09 } from './guides/mapGuide09'
import { codeGuide09 } from './guides/codeGuide09'
export const mc09: MasterclassDefinition = {
  id: 'mc09',
  number: 9,
  slug: 'containers-kubernetes-infrastructure',
  title: 'Containers, Kubernetes & Infrastructure',
  subtitle:
    'Understand how applications are packaged, orchestrated, scaled and operated on modern infrastructure.',
  objective:
    'Build practical understanding of containers, Docker, Kubernetes and infrastructure as code, then apply them to a production-oriented EDDUU deployment architecture.',
  sessions: [
    mc09Session01,
    mc09Session02,
    mc09Session03,
    mc09Session04,
    mc09Session05,
    mc09Session06,
    mc09Session07,
    mc09Session08,
  ],
  guides: [mapGuide09, codeGuide09],
}