import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session03: SessionDefinition = {
  id: 'mc12-session-03',
  number: 3,
  stage: 'guided',
  title: 'Caching - Reducing Repeated Work',
  objective:
    'Understand caching, cache keys, TTL, invalidation, cache-aside patterns, hit rate and failure behavior.',
  experiences: [
    {
      id: 'mc12-s03-caching-lesson',
      type: 'lesson',
      title: 'Why Do We Cache?',
      lesson: {
        opening:
          'If thousands of students repeatedly request the same course metadata, recalculating or rereading identical data every time wastes resources. A cache stores useful results closer to the workload.',
        sections: [
          {
            heading: '1. Cache basics',
            explanation:
              'A cache stores data that can be reused for later requests.',
            example:
              'EDDUU can cache frequently requested course metadata.',
          },
          {
            heading: '2. Cache hit and miss',
            explanation:
              'A cache hit returns data from the cache. A miss requires fetching or calculating the data from the source.',
            example:
              'The first course request may query PostgreSQL while later requests use Redis.',
          },
          {
            heading: '3. Cache-aside',
            explanation:
              'In cache-aside, the application checks the cache first and loads the source data when the cache misses.',
            example:
              'EDDUU checks Redis before querying PostgreSQL for course information.',
          },
          {
            heading: '4. TTL',
            explanation:
              'Time-to-live defines how long cached data remains valid before expiration.',
            example:
              'Course catalog metadata might have a five-minute TTL.',
          },
          {
            heading: '5. Cache invalidation',
            explanation:
              'When source data changes, stale cached values can become incorrect. Systems need an invalidation or freshness strategy.',
            example:
              'Publishing a new course version may require invalidating cached course metadata.',
          },
          {
            heading: '6. Cache keys',
            explanation:
              'A cache key uniquely identifies the cached value.',
            example:
              'course:101:v2 can identify a particular course representation.',
          },
          {
            heading: '7. Hit rate',
            explanation:
              'Cache hit rate measures how often requested values are found in the cache.',
            example:
              'A 90% hit rate means most requests avoid the backing store.',
          },
          {
            heading: '8. Cache failure',
            explanation:
              'A cache should not automatically become a single point of failure for the application.',
            example:
              'If Redis is unavailable, the service may fall back to PostgreSQL with controlled protection.',
          },
        ],
        realWorldConnection:
          'Caching can dramatically reduce repeated computation, database load and latency when freshness requirements are compatible with cached data.',
        keyIdea:
          'Caching trades freshness and memory for reduced repeated work and faster access.',
        recap: [
          'Cache hits avoid backing-store work.',
          'Cache misses require source retrieval.',
          'TTL controls freshness duration.',
          'Cache invalidation controls stale data.',
          'Cache keys must be deterministic.',
          'Cache failures need controlled fallback behavior.',
        ],
      },
    },
    {
      id: 'mc12-s03-caching-animation',
      type: 'animation',
      title: 'See Redis Protect PostgreSQL',
      animation: {
        visual: 'database',
        opening:
          'Watch repeated course requests move through Redis before reaching PostgreSQL.',
        parts: [
          {
            id: 'request',
            label: 'COURSE REQUEST',
            explanation:
              'A student requests course information.',
          },
          {
            id: 'redis',
            label: 'REDIS CACHE',
            explanation:
              'The application checks for a cached value.',
          },
          {
            id: 'hit',
            label: 'CACHE HIT',
            explanation:
              'The cached value is returned without querying PostgreSQL.',
          },
          {
            id: 'miss',
            label: 'CACHE MISS',
            explanation:
              'The application reads PostgreSQL and can populate the cache.',
          },
          {
            id: 'source',
            label: 'POSTGRESQL',
            explanation:
              'PostgreSQL remains the authoritative source for durable data.',
          },
        ],
        closing:
          'A cache reduces repeated backing-store work, but correctness depends on an explicit freshness strategy.',
      },
    },
    {
      id: 'mc12-s03-caching-simulation',
      type: 'simulation',
      title: 'Choose the Cache Strategy',
      simulation: {
        instruction:
          'Match each situation with the most appropriate caching concept.',
        items: [
          {
            id: 'frequent-read',
            label: 'The same read-heavy data is requested repeatedly.',
            correctTargetId: 'cache',
          },
          {
            id: 'stale',
            label: 'Cached data should automatically expire after a fixed period.',
            correctTargetId: 'ttl',
          },
          {
            id: 'update',
            label: 'A source update makes an old cached value invalid.',
            correctTargetId: 'invalidate',
          },
          {
            id: 'cache-down',
            label: 'Redis becomes temporarily unavailable.',
            correctTargetId: 'fallback',
          },
        ],
        targets: [
          { id: 'cache', label: 'CACHE REPEATED READS' },
          { id: 'ttl', label: 'TIME-TO-LIVE' },
          { id: 'invalidate', label: 'CACHE INVALIDATION' },
          { id: 'fallback', label: 'CONTROLLED FALLBACK' },
        ],
        successMessage:
          'Excellent. You connected caching problems to explicit cache-management strategies.',
        failureMessage:
          'Think about whether the problem is repeated work, freshness, updates or cache failure.',
      },
    },
    {
      id: 'mc12-s03-caching-question',
      type: 'question',
      title: 'Caching Check',
      question: {
        id: 'mc12-s03-caching-question',
        type: 'single-choice',
        question:
          'What is the main purpose of a cache-aside strategy?',
        options: [
          {
            id: 'reduce-load',
            text: 'Reuse frequently requested data and reduce repeated backing-store work.',
            correct: true,
          },
          {
            id: 'durability',
            text: 'Make the cache the permanent authoritative database.',
            correct: false,
          },
          {
            id: 'security',
            text: 'Automatically encrypt every application request.',
            correct: false,
          },
          {
            id: 'consistency',
            text: 'Guarantee that cached data can never become stale.',
            correct: false,
          },
        ],
        explanation:
          'Cache-aside improves repeated reads, but freshness and invalidation must still be designed explicitly.',
      },
    },
  ],
}