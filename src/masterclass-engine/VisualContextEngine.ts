import type {
  AnimationDefinition,
  AnimationVisual,
} from './types'

type VisualScore = {
  visual: AnimationVisual
  score: number
  matched: string[]
}

type VisualSignature = {
  visual: AnimationVisual
  required: string[]
  supporting: string[]
  priority: number
}

const VISUAL_SIGNATURES: VisualSignature[] = [
  {
    visual: 'programming',
    priority: 88,
    required: ['program'],
    supporting: [
      'code',
      'variable',
      'function',
      'loop',
      'condition',
      'algorithm',
      'instruction',
      'execute',
      'output',
    ],
  },

  {
    visual: 'database',
    priority: 88,
    required: ['database'],
    supporting: [
      'table',
      'row',
      'column',
      'record',
      'query',
      'sql',
      'storage',
      'retrieve',
      'insert',
      'update',
    ],
  },

  {
    visual: 'api',
    priority: 88,
    required: ['api'],
    supporting: [
      'endpoint',
      'http',
      'request',
      'response',
      'json',
      'client',
      'backend',
      'route',
      'service',
    ],
  },

  {
    visual: 'architecture',
    priority: 86,
    required: ['architecture'],
    supporting: [
      'component',
      'service',
      'frontend',
      'backend',
      'load balancer',
      'system',
      'application',
      'layer',
      'design',
    ],
  },

  {
    visual: 'cloud',
    priority: 86,
    required: ['cloud'],
    supporting: [
      'server',
      'compute',
      'storage',
      'region',
      'availability',
      'deployment',
      'infrastructure',
    ],
  },

  {
    visual: 'distributed',
    priority: 86,
    required: ['distributed'],
    supporting: [
      'service',
      'node',
      'replica',
      'partition',
      'message',
      'network',
      'cluster',
      'failure',
    ],
  },

  {
    visual: 'security',
    priority: 86,
    required: ['security'],
    supporting: [
      'authentication',
      'authorization',
      'identity',
      'token',
      'permission',
      'encryption',
      'trust',
      'access',
    ],
  },

  {
    visual: 'machine-learning',
    priority: 90,
    required: ['machine learning'],
    supporting: [
      'dataset',
      'feature',
      'training',
      'model',
      'prediction',
      'inference',
      'label',
      'evaluation',
    ],
  },

  {
    visual: 'llm',
    priority: 92,
    required: ['language model'],
    supporting: [
      'llm',
      'prompt',
      'token',
      'generation',
      'transformer',
      'context',
      'completion',
      'model',
    ],
  },

  {
    visual: 'rag',
    priority: 94,
    required: ['retrieval'],
    supporting: [
      'embedding',
      'vector',
      'knowledge',
      'context',
      'document',
      'search',
      'chunk',
      'language model',
    ],
  },

  {
    visual: 'agent',
    priority: 94,
    required: ['agent'],
    supporting: [
      'goal',
      'reasoning',
      'tool',
      'observation',
      'action',
      'planning',
      'workflow',
      'decision',
    ],
  },

  {
    visual: 'production-ai',
    priority: 96,
    required: ['production ai'],
    supporting: [
      'deployment',
      'monitoring',
      'reliability',
      'latency',
      'cost',
      'evaluation',
      'observability',
      'model',
    ],
  },

  {
    visual: 'browser-render',
    priority: 95,
    required: [
      'html',
      'css',
      'javascript',
      'browser',
      'screen',
    ],
    supporting: [
      'server response',
      'response',
      'browser processing',
      'page',
      'render',
      'structure',
      'presentation',
      'behaviour',
      'interactive',
      'resources',
    ],
  },

  {
    visual: 'capstone',
    priority: 100,
    required: [
      'browser',
      'dns',
      'server',
    ],
    supporting: [
      'network',
      'http response',
      'browser display',
      'request',
      'response',
      'ip address',
    ],
  },

  {
    visual: 'web',
    priority: 90,
    required: [
      'browser',
      'dns',
      'server',
    ],
    supporting: [
      'ip address',
      'http response',
      'web server',
      'website',
      'request',
      'response',
      'domain',
    ],
  },

  {
    visual: 'internet',
    priority: 80,
    required: [
      'device',
      'router',
      'isp',
      'internet',
      'server',
    ],
    supporting: [
      'remote server',
      'local network',
      'wider internet',
      'connection',
      'traffic',
    ],
  },

  {
    visual: 'network',
    priority: 70,
    required: [
      'sender',
      'data',
      'network',
      'receiver',
    ],
    supporting: [
      'communication',
      'communicate',
      'send',
      'receive',
      'transfer',
      'device',
      'connection',
    ],
  },

  {
    visual: 'process',
    priority: 60,
    required: [
      'program',
      'ram',
      'process',
      'cpu',
    ],
    supporting: [
      'memory',
      'instruction',
      'execution',
      'running',
      'execute',
      'loaded',
    ],
  },

  {
    visual: 'storage',
    priority: 50,
    required: [
      'folder',
      'file',
      'path',
    ],
    supporting: [
      'extension',
      'storage',
      'filename',
      'document',
      'save',
    ],
  },

  {
    visual: 'html-structure',
    priority: 96,
    required: ['html'],
    supporting: [
      'document',
      'structure',
      'element',
      'heading',
      'paragraph',
      'link',
      'page',
      'browser',
    ],
  },

  {
    visual: 'css-presentation',
    priority: 96,
    required: ['css'],
    supporting: [
      'presentation',
      'style',
      'spacing',
      'font',
      'layout',
      'sizing',
      'appearance',
      'html',
    ],
  },

  {
    visual: 'javascript-interaction',
    priority: 96,
    required: ['javascript'],
    supporting: [
      'event',
      'click',
      'dom',
      'interaction',
      'handler',
      'logic',
      'browser',
      'change',
    ],
  },

  {
    visual: 'frontend-components',
    priority: 96,
    required: ['frontend'],
    supporting: [
      'component',
      'react',
      'state',
      'interface',
      'application',
      'reusable',
      'browser',
      'ui',
    ],
  },

  {
    visual: 'computer',
    priority: 10,
    required: [],
    supporting: [
      'computer',
      'hardware',
      'keyboard',
      'mouse',
      'input',
      'output',
      'cpu',
      'ram',
    ],
  },
]

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/[^\w\s.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildPartContext(
  animation: AnimationDefinition,
): string {
  return animation.parts
    .map(
      (part) =>
        `${part.label} ${part.explanation} ${part.example ?? ''}`,
    )
    .join(' ')
    .toLowerCase()
}

function buildSecondaryContext(
  animation: AnimationDefinition,
  title?: string,
  description?: string,
): string {
  return [
    title ?? '',
    description ?? '',
    animation.opening ?? '',
    animation.closing ?? '',
  ]
    .join(' ')
    .toLowerCase()
}

function containsConcept(
  context: string,
  concept: string,
): boolean {
  const normalizedConcept =
    normalize(concept)

  if (
    normalizedConcept.includes(' ')
  ) {
    return context.includes(
      normalizedConcept,
    )
  }

  return new RegExp(
    `\\b${normalizedConcept.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&',
    )}\\b`,
  ).test(context)
}

function scoreSignature(
  partContext: string,
  secondaryContext: string,
  signature: VisualSignature,
): VisualScore | null {
  const matched: string[] = []

  const requiredMatches =
    signature.required.filter(
      (keyword) => {
        const matchedInParts =
          containsConcept(
            partContext,
            keyword,
          )

        if (matchedInParts) {
          matched.push(
            `required:${keyword}`,
          )
        }

        return matchedInParts
      },
    )

  /*
   * Required concepts must come from
   * animation.parts.
   *
   * This is the important protection
   * against Session 4 accidentally
   * becoming a web animation merely
   * because its description mentions
   * a browser.
   */
  if (
    requiredMatches.length !==
    signature.required.length
  ) {
    return null
  }

  let score =
    signature.required.length * 20

  for (
    const keyword of signature.supporting
  ) {
    if (
      containsConcept(
        partContext,
        keyword,
      )
    ) {
      score += 8
      matched.push(
        `part:${keyword}`,
      )
    } else if (
      containsConcept(
        secondaryContext,
        keyword,
      )
    ) {
      score += 2
      matched.push(
        `context:${keyword}`,
      )
    }
  }

  score +=
    signature.priority

  return {
    visual: signature.visual,
    score,
    matched,
  }
}

export function resolveAnimationVisual(
  animation: AnimationDefinition,
  title?: string,
  description?: string,
): AnimationVisual {
  /*
   * Explicit visual remains the strongest
   * possible instruction when a future
   * animation needs manual control.
   */
  if (animation.visual) {
    console.log(
      '[EDDUU VISUAL DEBUG]',
      {
        title,
        selectedVisual:
          animation.visual,
        source: 'explicit',
      },
    )

    return animation.visual
  }

  const partContext =
    buildPartContext(animation)

  const secondaryContext =
    buildSecondaryContext(
      animation,
      title,
      description,
    )

  const candidates =
    VISUAL_SIGNATURES
      .map((signature) =>
        scoreSignature(
          partContext,
          secondaryContext,
          signature,
        ),
      )
      .filter(
        (
          result,
        ): result is VisualScore =>
          result !== null,
      )
      .sort(
        (a, b) =>
          b.score - a.score,
      )

  const selectedVisual =
    candidates[0]?.visual ??
    'concept-flow'

  console.log(
    '[EDDUU VISUAL DEBUG]',
    {
      title,
      selectedVisual,
      partContext,
      candidates,
    },
  )

  return selectedVisual
}




