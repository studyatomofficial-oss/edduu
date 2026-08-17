import { ragAdvanced } from './ragAdvanced'
import { redisAdvanced } from './redisAdvanced'
import type { AdvancedDefinition } from './types'

export const advancedEntries: AdvancedDefinition[] = [
  ragAdvanced,
  redisAdvanced,
]

export const advancedBySlug = new Map(
  advancedEntries.map((entry) => [entry.slug, entry]),
)

export function getAdvancedBySlug(
  slug: string,
): AdvancedDefinition | undefined {
  return advancedBySlug.get(slug)
}

export default advancedEntries
