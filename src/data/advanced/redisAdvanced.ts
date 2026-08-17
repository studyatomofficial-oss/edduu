import type { AdvancedDefinition } from './types'

export const redisAdvanced: AdvancedDefinition = {
  technologyId: 'redis',
  slug: 'redis',
  eyebrow: 'REDIS ADVANCED',
  title: 'Build It in the Real World',
  summary:
    'A practical implementation guide for understanding how Redis is selected, designed, integrated, operated, and scaled in production systems.',

  sections: [
    {
      id: 'problem',
      step: '01',
      title: 'Start with the problem',
      paragraphs: [
        'Redis becomes useful when an application needs extremely fast access to frequently used data, temporary state, counters, sessions, queues, or other low-latency workloads.',
        'The engineering goal is not simply to put Redis in front of a database. The goal is to identify the workload that benefits from an in-memory data layer and design the system so Redis improves performance without creating correctness or reliability problems.',
      ],
    },

    {
      id: 'architecture',
      step: '02',
      title: 'Understand Redis architecture',
      paragraphs: [
        'A Redis-backed application can be understood as an application layer communicating with an in-memory Redis data layer, which may work alongside a primary database or other services.',
        'The application decides what should live in Redis, how long it should remain there, and what should happen when Redis does not contain the requested data.',
      ],
      flow: [
        'User Request',
        'Application',
        'Redis',
        'Cache Hit',
        'Response',
        'Primary Database',
        'Cache Fill',
      ],
    },

    {
      id: 'use-case',
      step: '03',
      title: 'Choose the right Redis use case',
      paragraphs: [
        'Redis should be introduced because a workload benefits from its capabilities, not simply because it is fast.',
        'Common use cases include caching, sessions, counters, rate limiting, queues, pub/sub, streams, and short-lived application state.',
      ],
      items: [
        ['Caching', 'Keep frequently requested data available without repeatedly querying the primary database.'],
        ['Sessions', 'Store temporary user session state that needs fast access.'],
        ['Counters', 'Maintain rapidly changing numeric values such as request counts or usage metrics.'],
        ['Rate limiting', 'Track request activity and enforce limits with low-latency operations.'],
        ['Queues and streams', 'Support asynchronous processing and event-oriented workflows where the Redis data structures fit the requirement.'],
      ],
    },

    {
      id: 'data-model',
      step: '04',
      title: 'Design your Redis data model',
      paragraphs: [
        'Redis data modelling starts with deciding what information should be represented as keys and which Redis data structure best matches the access pattern.',
        'The model should be designed around how the application reads and writes the information rather than simply copying the relational database schema into Redis.',
      ],
      items: [
        ['Keys', 'Use predictable naming conventions so related data can be identified and managed safely.'],
        ['Strings', 'Useful for simple values, counters, flags, and serialized objects.'],
        ['Hashes', 'Useful when a logical object contains multiple fields that need to be accessed together.'],
        ['Lists, sets and sorted sets', 'Useful for ordered collections, membership operations, rankings, and other specialised access patterns.'],
        ['Streams', 'Useful for append-oriented event data and consumer-based processing patterns.'],
      ],
    },

    {
      id: 'integration',
      step: '05',
      title: 'Integrate Redis with your application',
      paragraphs: [
        'The application should interact with Redis through a clear data-access layer rather than spreading Redis commands throughout unrelated business logic.',
        'A common cache-aside pattern checks Redis first, retrieves missing data from the primary source, and then stores the result in Redis for subsequent requests.',
      ],
      flow: [
        'Application Request',
        'Check Redis',
        'Cache Hit?',
        'Return Cached Data',
        'Query Primary Database',
        'Store in Redis',
        'Return Data',
      ],
    },

    {
      id: 'caching',
      step: '06',
      title: 'Design caching correctly',
      paragraphs: [
        'Caching is useful only when the system has a clear policy for what is cached, when it is refreshed, and what happens when cached information becomes stale.',
        'The team must choose an appropriate caching pattern based on consistency requirements, read frequency, write behaviour, and the cost of retrieving the underlying data.',
      ],
      items: [
        ['Cache-aside', 'The application reads Redis first and loads missing values from the primary data source.'],
        ['Write-through', 'Writes update the cache and the underlying data source as part of the chosen consistency strategy.'],
        ['Read-through', 'A cache layer can load missing data from the underlying source through an abstraction.'],
        ['Invalidation', 'The application removes or refreshes cached values when the underlying data changes.'],
      ],
    },

    {
      id: 'ttl',
      step: '07',
      title: 'Handle TTL, eviction and consistency',
      paragraphs: [
        'Redis introduces operational decisions around how long data should remain available, what happens when memory becomes constrained, and how stale data is handled.',
        'A cache can improve performance while still returning incorrect information if expiration and invalidation policies do not match the business requirement.',
      ],
      items: [
        ['TTL', 'Define how long temporary or cached information should remain valid.'],
        ['Expiration', 'Allow Redis to automatically remove data after its useful lifetime.'],
        ['Eviction', 'Define what Redis should remove when memory limits are reached.'],
        ['Consistency', 'Decide how the application handles stale values and synchronization with the primary data source.'],
        ['Failure handling', 'Design the application behaviour when Redis is unavailable or becomes unhealthy.'],
      ],
    },

    {
      id: 'production',
      step: '08',
      title: 'Design Redis for production',
      paragraphs: [
        'A production Redis deployment must be treated as an operational system rather than simply a fast key-value store.',
        'The design should account for memory, persistence requirements, security, monitoring, availability, backups, connection management, and failure recovery.',
      ],
      production: [
        'Memory management',
        'Persistence',
        'Replication',
        'High availability',
        'Backups',
        'Monitoring',
        'Security',
        'Connection management',
        'Failure recovery',
        'Capacity planning',
      ],
    },

    {
      id: 'deployment',
      step: '09',
      title: 'Choose deployment and scaling strategy',
      paragraphs: [
        'The deployment model should follow the workload, availability requirements, operational maturity, and expected traffic rather than being selected only because a particular Redis service is popular.',
        'Teams may choose a managed Redis service, a self-managed deployment, replication, or a clustered architecture depending on the system requirements.',
        'Scaling decisions should consider memory capacity, throughput, connection counts, availability, failover behaviour, and operational complexity.',
      ],
      items: [
        ['Managed Redis', 'Reduce infrastructure operations by using a managed service where appropriate.'],
        ['Replication', 'Maintain additional Redis instances to improve availability and support operational requirements.'],
        ['Clustering', 'Distribute data and workload when a single Redis instance is insufficient for the required scale.'],
        ['Capacity planning', 'Estimate memory, throughput, connections, and growth before the system reaches its limits.'],
      ],
    },

    {
      id: 'verify',
      step: '10',
      title: 'Verify the whole system',
      paragraphs: [
        'Redis should be evaluated as part of the complete application rather than only by measuring individual Redis commands.',
        'The team should verify whether Redis actually improves the intended workload and whether the system remains correct and resilient when cache misses, stale data, memory pressure, or Redis failures occur.',
      ],
      items: [
        ['Performance evaluation', 'Does Redis reduce the latency and database load expected from the target workload?'],
        ['Correctness evaluation', 'Does the application return acceptable data when cached values are stale or missing?'],
        ['Failure evaluation', 'Does the application behave safely when Redis becomes unavailable?'],
        ['Capacity evaluation', 'Can the Redis deployment handle expected memory, throughput, connections, and growth?'],
        ['Operational evaluation', 'Are monitoring, alerts, backups, recovery, and maintenance procedures adequate?'],
      ],
    },
  ],
}

export default redisAdvanced
