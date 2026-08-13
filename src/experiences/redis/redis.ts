import type { ExperienceDefinition } from '../../types/learning'

import { redisSeeStage } from './stages/see'
import { redisUnderstandStage } from './stages/understand'
import { redisTechnicalStage } from './stages/technical'
import { redisInteractStage } from './stages/interact'
import { redisBuildStage } from './stages/build'
import { redisBreakStage } from './stages/break'
import { redisFixStage } from './stages/fix'
import { redisProductionStage } from './stages/production'

export const redisExperience: ExperienceDefinition = {
  id: 'redis-v1',
  technologyId: 'redis',
  version: '1.0.0',
  title: 'Redis Learning Lab',
  objective:
    'Understand Redis as an in-memory caching layer, reason about TTL and invalidation, and diagnose/repair common cache failures.',
  stages: [
    redisSeeStage,
    redisUnderstandStage,
    redisTechnicalStage,
    redisInteractStage,
    redisBuildStage,
    redisBreakStage,
    redisFixStage,
    redisProductionStage,
  ],
}

export default redisExperience
