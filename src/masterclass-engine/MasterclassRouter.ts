import { mc01 } from '../masterclasses/mc01/definition'

export function resolveMasterclassHash(hash: string) {
  const match = /^#masterclass\/(.+)$/.exec(hash)

  if (!match) {
    return null
  }

  if (match[1] === mc01.slug) {
    return mc01
  }

  return null
}
