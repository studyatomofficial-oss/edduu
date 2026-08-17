import type { KnowledgeDefinition } from './knowledge'

export const redisKnowledge: KnowledgeDefinition = {
  technologyId: 'redis',
  slug: 'redis',
  title: 'What is Redis?',
  summary:
    'Redis is an in-memory data store commonly used for caching, fast lookups, sessions, queues, counters, and other low-latency application workloads.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Redis?',
      content:
        'Redis is an in-memory data store designed for very fast data access. It stores data primarily in memory and provides data structures such as strings, hashes, lists, sets, sorted sets, and streams.',
    },
    {
      title: 'Why do we need Redis?',
      content:
        'Applications often need to access frequently used information faster than a traditional database can provide. Redis can keep hot data close to the application so repeated requests can avoid expensive database operations.',
    },
    {
      title: 'How does Redis work?',
      content:
        'An application sends a command to Redis, Redis performs the operation against its in-memory data structures, and the result is returned to the application. Because the primary working dataset is kept in memory, common operations can have very low latency.',
    },
    {
      title: 'Redis as a cache',
      content:
        'One of the most common Redis patterns is caching. The application first checks Redis for frequently requested information. If the value exists, it can be returned quickly. If it does not exist, the application can retrieve the data from the primary database and place a copy in Redis.',
    },
    {
      title: 'Important Redis concepts',
      content:
        'Important concepts include keys, values, expiration, TTL, eviction policies, persistence, replication, transactions, pub/sub, streams, atomic operations, and data structures.',
    },
    {
      title: 'Redis and application performance',
      content:
        'Redis can reduce database load and application latency, but adding Redis also introduces another system that must be monitored and operated. Cache invalidation, stale data, memory pressure, eviction, connection management, and failure handling must be considered.',
    },
    {
      title: 'Redis in production',
      content:
        'A production Redis deployment should consider memory limits, persistence requirements, high availability, replication, backup strategy, monitoring, security, connection limits, eviction behaviour, and failure recovery.',
    },
    {
      title: 'Redis and databases',
      content:
        'Redis and relational databases solve different problems. A relational database is normally the system of record for transactional data, while Redis is often used as a fast access layer, cache, session store, queue, or coordination mechanism.',
    },
    {
      title: 'Explore Redis in EDDUU',
      content:
        'EDDUU uses the same technology learning architecture for Redis as it does for RAG: Knowledge explains the technology, Advanced will explain implementation when available, and Lab provides an interactive experience when available.',
    },
  ],
  relatedTechnologyIds: [
    'postgresql',
    'docker',
    'rest-apis',
  ],
}

export default redisKnowledge
