import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session03: SessionDefinition = {
  id: 'mc11-session-03',
  number: 3,
  stage: 'discover',
  title: 'Caching & Performance Acceleration - Serving Repeated Data Faster',
  objective:
    'Understand how caching reduces latency and backend load, then learn cache-aside, cache hits and misses, TTL, invalidation, stale data, cache stampede and practical caching decisions for EDDUU.',
  experiences: [
    {
      id: 'mc11-s03-caching-lesson',
      type: 'lesson',
      title: 'Why Do We Need a Cache?',
      description:
        'Build a practical understanding of caching by following repeated EDDUU requests from the application to the database and then introducing a faster shared cache.',
      lesson: {
        opening:
          'Imagine 10,000 EDDUU students open the same popular course page within a few minutes. If every request repeatedly reads the same relatively stable information from PostgreSQL, the database performs the same work again and again. A cache can keep frequently requested data closer to the application so repeated reads can be served faster.',
        sections: [
          {
            heading: '1. What is a cache?',
            explanation:
              'A cache is a faster storage layer used to keep data that can be reused so the system does not have to perform the full original operation every time.',
            example:
              'EDDUU can temporarily keep frequently requested course metadata in Redis so repeated course-page requests do not always require a PostgreSQL query.',
          },
          {
            heading: '2. Cache hit',
            explanation:
              'A cache hit occurs when the requested data is already present in the cache and can be returned without going to the original data source.',
            example:
              'A student requests the same course information and Redis already contains the required course object.',
          },
          {
            heading: '3. Cache miss',
            explanation:
              'A cache miss occurs when the requested data is not available in the cache. The application must retrieve it from the original source and may then place it into the cache.',
            example:
              'The first request for a newly published course misses Redis, reads PostgreSQL and stores the result in Redis.',
          },
          {
            heading: '4. Cache-aside pattern',
            explanation:
              'In cache-aside, the application checks the cache first. On a miss, it reads from the database and then populates the cache.',
            example:
              'EDDUU checks Redis for course:123. If it is missing, the Learning Service reads PostgreSQL and stores the course data in Redis.',
          },
          {
            heading: '5. Why caching improves performance',
            explanation:
              'A cache can reduce repeated database work and lower latency when cached data can be returned much faster than accessing the original source.',
            example:
              'A dashboard request that previously waited for a database query may return much faster when frequently reused data is available in Redis.',
          },
          {
            heading: '6. Caching reduces load, not just latency',
            explanation:
              'When repeated reads are served from a cache, the original database or downstream service receives fewer requests.',
            example:
              'If thousands of students request the same course configuration, the database does not need to execute the same read for every student when the value is cached.',
          },
          {
            heading: '7. TTL',
            explanation:
              'Time to Live defines how long a cached value remains valid before it expires automatically.',
            example:
              'EDDUU may cache a course catalogue response for five minutes if a small amount of staleness is acceptable.',
          },
          {
            heading: '8. Cache invalidation',
            explanation:
              'When underlying data changes, the corresponding cached value may become outdated. The system therefore needs a strategy for expiring, replacing or invalidating cached data.',
            example:
              'If an administrator changes a course title, the old cached course object should not remain indefinitely.',
          },
          {
            heading: '9. Stale data',
            explanation:
              'Cached data can become older than the authoritative source. Whether that is acceptable depends on the business requirement.',
            example:
              'A slightly stale course description may be acceptable, while a student payment status generally requires stronger freshness guarantees.',
          },
          {
            heading: '10. Not everything should be cached',
            explanation:
              'Caching is most useful when data is expensive to obtain, requested frequently and acceptable to reuse for some period of time.',
            example:
              'Frequently requested course metadata is a better caching candidate than highly sensitive information whose correctness must always come from the authoritative source.',
          },
          {
            heading: '11. Cache consistency trade-offs',
            explanation:
              'A cache introduces another copy of information. The system must decide how much freshness, complexity and operational cost it is willing to accept.',
            example:
              'EDDUU may choose a short TTL for frequently changing recommendation data but a longer TTL for relatively stable course metadata.',
          },
          {
            heading: '12. Cache stampede',
            explanation:
              'A cache stampede can occur when a popular cached value expires and many requests simultaneously attempt to regenerate it from the database or another expensive source.',
            example:
              'If a popular EDDUU course cache expires during an examination, thousands of requests may simultaneously hit PostgreSQL for the same data.',
          },
          {
            heading: '13. Preventing stampedes',
            explanation:
              'Techniques such as request coalescing, locking, staggered expiration and prewarming can reduce the number of simultaneous regeneration requests.',
            example:
              'EDDUU can allow one request to refresh a missing popular value while other requests wait for or reuse the refreshed result.',
          },
          {
            heading: '14. Cache eviction',
            explanation:
              'Caches have finite memory. When space is required, entries may be removed according to an eviction policy.',
            example:
              'Redis can remove less useful entries when memory pressure increases so frequently accessed data remains available.',
          },
          {
            heading: '15. Cache failure must be survivable',
            explanation:
              'A cache should not automatically become a single point of failure for the application. The system should define what happens when the cache is unavailable.',
            example:
              'If Redis becomes unavailable, EDDUU may temporarily fall back to PostgreSQL for selected read operations while protecting the database from uncontrolled traffic.',
          },
        ],
        realWorldConnection:
          'Caching is one of the most common ways large platforms improve read performance and reduce pressure on expensive dependencies. The difficult part is not putting Redis into the architecture; it is deciding what can be cached, how long it can remain cached and what happens when the cache is stale or unavailable.',
        keyIdea:
          'A cache trades additional complexity and possible staleness for faster repeated access and lower load on the authoritative data source.',
        recap: [
          'A cache stores reusable data in a faster layer.',
          'A cache hit avoids the original expensive lookup.',
          'A cache miss requires the application to retrieve the data elsewhere.',
          'Cache-aside lets the application populate the cache after a miss.',
          'TTL controls automatic expiration.',
          'Cache invalidation handles changes to underlying data.',
          'Cached data may become stale.',
          'Not every data type is a good caching candidate.',
          'Cache stampedes can overload the source when popular values expire.',
          'Eviction manages finite cache capacity.',
          'Cache failure should have a defined fallback strategy.',
        ],
      },
    },

    {
      id: 'mc11-s03-caching-animation',
      type: 'animation',
      title: 'Watch EDDUU Add a Cache',
      description:
        'Visualize how a repeated database read changes when a cache is introduced between the application and PostgreSQL.',
      animation: {
        visual: 'distributed',
        opening:
          'Follow repeated requests for the same EDDUU course information before and after Redis is introduced.',
        parts: [
          {
            id: 'without-cache',
            label: 'WITHOUT CACHE',
            explanation:
              'Every request travels from the application to the database for the same reusable information.',
            example:
              'One thousand requests for the same course produce one thousand database reads.',
          },
          {
            id: 'cache-check',
            label: 'CHECK CACHE',
            explanation:
              'The application first checks whether the requested value is already stored in Redis.',
            example:
              'The Learning Service checks course:123 before querying PostgreSQL.',
          },
          {
            id: 'cache-hit',
            label: 'CACHE HIT',
            explanation:
              'The requested value exists in Redis and can be returned immediately.',
            example:
              'The course object is returned without another PostgreSQL query.',
          },
          {
            id: 'cache-miss',
            label: 'CACHE MISS',
            explanation:
              'The value is absent or expired, so the application reads from the authoritative source.',
            example:
              'The first request after expiration queries PostgreSQL.',
          },
          {
            id: 'populate',
            label: 'POPULATE CACHE',
            explanation:
              'The application stores the retrieved value in Redis for future requests.',
            example:
              'The Learning Service stores course:123 with an appropriate TTL.',
          },
          {
            id: 'repeat-hit',
            label: 'REPEATED HITS',
            explanation:
              'Subsequent requests can reuse the cached value until it expires or is invalidated.',
            example:
              'Hundreds of students receive the same course metadata from Redis.',
          },
          {
            id: 'invalidation',
            label: 'INVALIDATION',
            explanation:
              'When the underlying data changes, the cached value must be expired, replaced or invalidated according to the consistency strategy.',
            example:
              'An administrator updates the course title and the corresponding cached entry is invalidated.',
          },
        ],
        closing:
          'Caching improves performance by avoiding repeated expensive work, but every cached value creates a freshness decision that the architecture must handle deliberately.',
      },
    },

    {
      id: 'mc11-s03-caching-simulation',
      type: 'simulation',
      title: 'Choose the Right Caching Strategy',
      description:
        'Practice choosing an appropriate caching response for common EDDUU workload situations.',
      simulation: {
        instruction:
          'Match each EDDUU scenario with the caching strategy that best addresses the described problem.',
        items: [
          {
            id: 'repeated-read',
            label:
              'Thousands of students repeatedly request the same relatively stable course metadata.',
            description:
              'The same value is read frequently and can tolerate a defined period of reuse.',
            correctTargetId: 'cache-aside',
          },
          {
            id: 'stale-value',
            label:
              'An administrator changes course metadata but users continue receiving an old cached copy.',
            description:
              'The cached representation no longer matches the authoritative source.',
            correctTargetId: 'invalidation',
          },
          {
            id: 'popular-expiry',
            label:
              'A highly popular cache entry expires and thousands of requests simultaneously query PostgreSQL.',
            description:
              'Many requests are attempting to regenerate the same expensive value.',
            correctTargetId: 'stampede-protection',
          },
          {
            id: 'cache-down',
            label:
              'Redis becomes temporarily unavailable.',
            description:
              'The application must avoid turning cache failure into total application failure.',
            correctTargetId: 'fallback',
          },
        ],
        targets: [
          {
            id: 'cache-aside',
            label: 'CACHE-ASIDE',
            description:
              'Check the cache first, then load from the source on a miss.',
          },
          {
            id: 'invalidation',
            label: 'CACHE INVALIDATION',
            description:
              'Remove or replace stale cached information after a source change.',
          },
          {
            id: 'stampede-protection',
            label: 'STAMPede PROTECTION',
            description:
              'Coordinate regeneration so many requests do not overload the source.',
          },
          {
            id: 'fallback',
            label: 'DEFINED FALLBACK',
            description:
              'Continue safely using an authoritative source or another controlled path.',
          },
        ],
        successMessage:
          'Excellent. You connected each caching problem with the architectural strategy designed to address it.',
        failureMessage:
          'Look at the actual problem first: repeated reads, stale data, simultaneous regeneration or cache failure require different responses.',
      },
    },

    {
      id: 'mc11-s03-caching-question',
      type: 'question',
      title: 'Caching Architecture Check',
      description:
        'Check whether you understand the cache-aside pattern and the trade-off introduced by caching.',
      question: {
        id: 'mc11-s03-caching',
        type: 'single-choice',
        question:
          'EDDUU receives frequent requests for course metadata that changes only occasionally. Which approach is the most appropriate cache-aside flow?',
        options: [
          {
            id: 'cache-first',
            text:
              'Check the cache first; on a miss read the database and populate the cache.',
            correct: true,
          },
          {
            id: 'database-only',
            text:
              'Always query PostgreSQL and never reuse previously retrieved data.',
            correct: false,
          },
          {
            id: 'cache-only',
            text:
              'Store the only copy of course data in the cache and remove the authoritative database.',
            correct: false,
          },
          {
            id: 'random-refresh',
            text:
              'Refresh every cached value on every request regardless of whether it changed.',
            correct: false,
          },
        ],
        explanation:
          'Cache-aside checks the cache first. A miss causes the application to retrieve the authoritative value and populate the cache so later requests can be served faster.',
        hints: [
          'The database remains the authoritative source.',
          'The cache is an acceleration layer rather than automatically becoming the system of record.',
        ],
      },
    },
  ],
}
