import { mc01 } from '../masterclasses/mc01/definition'
import { mc02 } from '../masterclasses/mc02/definition'
import { mc03 } from '../masterclasses/mc03/definition'

export function resolveMasterclassHash(hash: string) {
  const match = /^#masterclass\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  if (match[1] === mc01.slug) {
    return mc01
  }

  if (match[1] === mc02.slug) {
    return mc02
  }
  if (match[1] === mc03.slug) {
    return mc03
  }

  return null
}

export function resolveGuideHash(hash: string) {
  const match = /^#guide\/([^/]+)\/(map|code)$/.exec(hash)

  if (!match) {
    return null
  }

  const masterclass =
    resolveMasterclassHash(
      `#masterclass/${match[1]}`,
    )

  if (!masterclass) {
    return null
  }

  const guide =
    masterclass.guides?.find(
      (item) => item.type === match[2],
    ) ?? null

  if (!guide) {
    return null
  }

  return {
    masterclass,
    guide,
  }
}
