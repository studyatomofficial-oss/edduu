import { getTechnologyBySlug } from '../data/technologies'
import { getKnowledgeBySlug } from '../data/knowledge'

/**
 * EDDUU Technology Navigation Contract
 *
 * Knowledge exists  -> Knowledge page
 * Knowledge absent + Lab exists -> Lab
 * Neither exists -> no destination
 *
 * Navigation is technology-agnostic.
 * Do not add technology-specific routing hacks.
 */
export function getTechnologyPrimaryHref(slug: string): string | null {
  const knowledge = getKnowledgeBySlug(slug)

  if (knowledge) {
    return `#knowledge/${slug}`
  }

  const technology = getTechnologyBySlug(slug)

  if (technology?.experienceId) {
    return `#lab/${slug}`
  }

  return null
}

export function getTechnologyKnowledgeHref(slug: string): string | null {
  return getKnowledgeBySlug(slug)
    ? `#knowledge/${slug}`
    : null
}

export function getTechnologyLabHref(slug: string): string | null {
  const technology = getTechnologyBySlug(slug)

  return technology?.experienceId
    ? `#lab/${slug}`
    : null
}
