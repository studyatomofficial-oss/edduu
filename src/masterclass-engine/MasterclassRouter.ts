import { mc01 } from '../masterclasses/mc01/definition'
import { mc02 } from '../masterclasses/mc02/definition'
import { mc03 } from '../masterclasses/mc03/definition'
import { mc04 } from '../masterclasses/mc04/definition'
import { mc05 } from '../masterclasses/mc05/definition'
import { mc06 } from '../masterclasses/mc06/definition'
import { mc07 } from '../masterclasses/mc07/definition'

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
  if (match[1] === mc04.slug) {
    return mc04
  }  if (match[1] === mc05.slug) {
    return mc05
  }
  if (match[1] === mc06.slug) {
    return mc06
  }
  if (match[1] === mc07.slug) {
    return mc07
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
