import { mc01 } from '../masterclasses/mc01/definition'
import { mc02 } from '../masterclasses/mc02/definition'
import { mc03 } from '../masterclasses/mc03/definition'
import { mc04 } from '../masterclasses/mc04/definition'
import { mc05 } from '../masterclasses/mc05/definition'
import { mc06 } from '../masterclasses/mc06/definition'
import { mc07 } from '../masterclasses/mc07/definition'
import { mc09 } from '../masterclasses/mc09/definition'
import { mc10 } from '../masterclasses/mc10/definition'
import { mc11 } from '../masterclasses/mc11/definition'
import { mc12 } from '../masterclasses/mc12/definition'
import { mc08 } from '../masterclasses/mc08/definition'

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

  if (match[1] === mc09.slug) {
    return mc09
  }

  if (match[1] === mc10.slug) {
    return mc10
  }

  if (match[1] === mc11.slug) {
    return mc11
  }
  if (match[1] === mc12.slug) {
    return mc12
  }
  if (match[1] === mc08.slug) {
    return mc08
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


