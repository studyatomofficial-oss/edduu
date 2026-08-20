import type { KnowledgeDefinition } from './knowledge'

export const cachingKnowledge: KnowledgeDefinition = {
  technologyId: 'caching',
  slug: 'caching',
  title: 'Caching',
  summary:
    'Caching stores frequently needed data closer to the application or user so repeated requests can be served faster while reducing load on slower systems.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Caching?',
      content:
        'Caching is the practice of storing a copy of data in a faster storage layer so that future requests can be served without repeating the original expensive operation. A cache can reduce latency, database load, network traffic, and compute cost.',
      highlights: [
        {
          title: 'Cache',
          description:
            'A fast storage layer containing data that can be reused for future requests.',
        },
        {
          title: 'Cache hit',
          description:
            'A request where the required data is found in the cache.',
        },
        {
          title: 'Cache miss',
          description:
            'A request where the required data is not available in the cache.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine you keep your most-used books on your desk instead of walking to a library every time you need them. The desk is the cache. The library is the slower original data source. If the book is on your desk, you get it quickly. If not, you go to the library and may then keep a copy on your desk.',
      highlights: [
        {
          title: 'Desk',
          description:
            'Comparable to the cache.',
        },
        {
          title: 'Library',
          description:
            'Comparable to the primary database or original data source.',
        },
        {
          title: 'Frequently used book',
          description:
            'Comparable to frequently requested data.',
        },
      ],
    },

    {
      title: 'Why Use Caching?',
      content:
        'Caching is primarily used to reduce response latency and repeated work. It can protect databases and downstream services from excessive traffic and allow applications to handle larger workloads with the same underlying resources.',
      highlights: [
        {
          title: 'Lower latency',
          description:
            'Serving data from a faster location reduces response time.',
        },
        {
          title: 'Reduced database load',
          description:
            'Repeated reads can be served without querying the database every time.',
        },
        {
          title: 'Higher throughput',
          description:
            'The system can handle more requests when expensive operations are avoided.',
        },
        {
          title: 'Cost reduction',
          description:
            'Reducing repeated computation, database operations, or network calls can lower infrastructure cost.',
        },
      ],
    },

    {
      title: 'Cache Hit and Cache Miss',
      content:
        'When requested data exists in the cache, the request is a cache hit. When it does not exist, the request is a cache miss and the application usually retrieves the data from the source and may store it in the cache for future requests.',
      highlights: [
        {
          title: 'Cache hit',
          description:
            'Requested data is available in the cache.',
        },
        {
          title: 'Cache miss',
          description:
            'Requested data is not available and must be obtained from another source.',
        },
        {
          title: 'Hit ratio',
          description:
            'The proportion of cache requests successfully served from the cache.',
        },
      ],
    },

    {
      title: 'Cache Hit Ratio',
      content:
        'Cache hit ratio is an important performance metric. A high hit ratio generally means the cache is effectively serving repeated requests, although the correct target depends on the workload and the cost of cache misses.',
      highlights: [
        {
          title: 'Hit ratio',
          description:
            'Cache hits divided by total cache lookup requests.',
        },
        {
          title: 'Miss ratio',
          description:
            'Cache misses divided by total cache lookup requests.',
        },
        {
          title: 'Workload dependent',
          description:
            'A useful cache hit ratio depends on the access pattern and cost of the underlying data source.',
        },
      ],
    },

    {
      title: 'Cache-Aside Pattern',
      content:
        'In cache-aside, the application checks the cache first. On a hit, it returns the cached value. On a miss, it reads from the database, returns the result, and places the data into the cache.',
      highlights: [
        {
          title: 'Cache-aside',
          description:
            'An application-managed caching strategy where the application explicitly reads and writes the cache.',
        },
        {
          title: 'Read-through on miss',
          description:
            'The application obtains missing data from the source before populating the cache.',
        },
        {
          title: 'Common use',
          description:
            'Frequently used for read-heavy application workloads.',
        },
      ],
    },

    {
      title: 'Read-Through Cache',
      content:
        'In a read-through design, the cache layer is responsible for loading missing data from the underlying source. The application interacts primarily with the cache abstraction.',
      highlights: [
        {
          title: 'Read-through',
          description:
            'The cache automatically obtains missing data from the backing store.',
        },
        {
          title: 'Backing store',
          description:
            'The underlying database or system containing the authoritative data.',
        },
        {
          title: 'Application simplicity',
          description:
            'The application can avoid implementing some cache-miss loading logic itself.',
        },
      ],
    },

    {
      title: 'Write-Through Cache',
      content:
        'In a write-through design, data is written to the cache and backing store as part of the write operation. This can keep cached data relatively fresh but may add write latency.',
      highlights: [
        {
          title: 'Write-through',
          description:
            'Writes are propagated to the cache and backing store as part of the write path.',
        },
        {
          title: 'Freshness',
          description:
            'The cache is updated when the underlying data changes.',
        },
        {
          title: 'Write latency',
          description:
            'Additional work during writes can increase write response time.',
        },
      ],
    },

    {
      title: 'Write-Behind Cache',
      content:
        'In write-behind or write-back caching, data is first written to the cache and persisted to the backing store asynchronously. This can improve write performance but increases durability and consistency complexity.',
      highlights: [
        {
          title: 'Write-behind',
          description:
            'Persisting cache changes to the backing store asynchronously.',
        },
        {
          title: 'Asynchronous persistence',
          description:
            'The cache acknowledges or stores a change before the backing store is updated.',
        },
        {
          title: 'Durability risk',
          description:
            'A failure before persistence can potentially lose recently written data.',
        },
      ],
    },

    {
      title: 'Refresh-Ahead',
      content:
        'Refresh-ahead caching attempts to refresh frequently accessed data before it expires. This can reduce cache misses for predictable workloads but requires additional background processing.',
      highlights: [
        {
          title: 'Refresh-ahead',
          description:
            'Refreshing cached data before its normal expiration.',
        },
        {
          title: 'Background refresh',
          description:
            'Updating cache entries asynchronously before users encounter expiration.',
        },
        {
          title: 'Predictable access',
          description:
            'A workload characteristic that can make refresh-ahead strategies useful.',
        },
      ],
    },

    {
      title: 'TTL',
      content:
        'TTL, or time to live, defines how long a cached entry remains valid before it expires. TTL helps prevent cached data from remaining indefinitely but requires choosing a value appropriate for freshness requirements.',
      highlights: [
        {
          title: 'TTL',
          description:
            'The duration for which a cached entry remains valid.',
        },
        {
          title: 'Expiration',
          description:
            'The point at which cached data is considered no longer valid.',
        },
        {
          title: 'Freshness requirement',
          description:
            'How quickly cached data must reflect changes in the source system.',
        },
      ],
    },

    {
      title: 'Cache Invalidation',
      content:
        'Cache invalidation means removing or updating cached data when the underlying source changes. It is one of the hardest parts of caching because stale data can produce incorrect application behavior.',
      highlights: [
        {
          title: 'Invalidation',
          description:
            'Removing or marking cached information as no longer valid.',
        },
        {
          title: 'Stale data',
          description:
            'Cached data that no longer matches the current source of truth.',
        },
        {
          title: 'Freshness',
          description:
            'How closely cached data reflects the latest authoritative state.',
        },
      ],
    },

    {
      title: 'Expiration-Based Invalidation',
      content:
        'With expiration-based invalidation, cached entries become invalid after a configured period. It is simple and predictable but can temporarily serve stale information until the TTL expires.',
      highlights: [
        {
          title: 'Expiration',
          description:
            'Automatic invalidation after a configured duration.',
        },
        {
          title: 'TTL trade-off',
          description:
            'Long TTL improves cache reuse while increasing potential staleness.',
        },
        {
          title: 'Short TTL',
          description:
            'Improves freshness but can increase cache misses and backend load.',
        },
      ],
    },

    {
      title: 'Event-Based Invalidation',
      content:
        'Applications can invalidate or update cache entries when a domain event indicates that underlying data has changed. This can improve freshness but requires reliable event delivery and clear ownership.',
      highlights: [
        {
          title: 'Event-based invalidation',
          description:
            'Updating or removing cache entries in response to application events.',
        },
        {
          title: 'Domain event',
          description:
            'An event representing a meaningful business occurrence or state change.',
        },
        {
          title: 'Consistency dependency',
          description:
            'Cache freshness depends partly on reliable event processing.',
        },
      ],
    },

    {
      title: 'Cache Eviction',
      content:
        'When a cache reaches its memory or storage limit, it needs an eviction policy to decide which entries should be removed. Common policies include LRU, LFU, FIFO, and TTL-based eviction.',
      highlights: [
        {
          title: 'Eviction',
          description:
            'Removing cache entries to make room for new data.',
        },
        {
          title: 'LRU',
          description:
            'Least Recently Used: removing entries that have not been accessed recently.',
        },
        {
          title: 'LFU',
          description:
            'Least Frequently Used: removing entries accessed less often.',
        },
        {
          title: 'FIFO',
          description:
            'First In, First Out: removing the oldest entries first.',
        },
      ],
    },

    {
      title: 'LRU',
      content:
        'LRU eviction removes the entries that have been least recently accessed. It is useful when recently accessed data is more likely to be accessed again.',
      highlights: [
        {
          title: 'LRU',
          description:
            'Least Recently Used eviction policy.',
        },
        {
          title: 'Recency',
          description:
            'How recently a cache entry was accessed.',
        },
        {
          title: 'Temporal locality',
          description:
            'The tendency for recently accessed data to be accessed again.',
        },
      ],
    },

    {
      title: 'LFU',
      content:
        'LFU eviction removes entries that have been accessed least frequently. It can work well when frequently requested items should remain cached even if they have not been accessed very recently.',
      highlights: [
        {
          title: 'LFU',
          description:
            'Least Frequently Used eviction policy.',
        },
        {
          title: 'Frequency',
          description:
            'How often an item has been accessed.',
        },
        {
          title: 'Hot data',
          description:
            'Data that receives disproportionately high request volume.',
        },
      ],
    },

    {
      title: 'Cache Key',
      content:
        'A cache key uniquely identifies the data stored in the cache. Good cache-key design prevents collisions and ensures that different users, tenants, locales, or query parameters do not accidentally share incorrect data.',
      highlights: [
        {
          title: 'Cache key',
          description:
            'The identifier used to store and retrieve a cached value.',
        },
        {
          title: 'Key collision',
          description:
            'Two logically different values accidentally mapping to the same cache key.',
        },
        {
          title: 'Tenant-aware key',
          description:
            'A cache key that includes tenant identity where tenant-specific data must remain isolated.',
        },
      ],
    },

    {
      title: 'Cache Stampede',
      content:
        'A cache stampede occurs when many requests simultaneously miss or lose the same cache entry and all attempt to rebuild it. This can overwhelm the underlying database or service.',
      highlights: [
        {
          title: 'Cache stampede',
          description:
            'A sudden burst of backend requests caused by simultaneous cache misses.',
        },
        {
          title: 'Thundering herd',
          description:
            'A related pattern where many clients simultaneously perform expensive work.',
        },
        {
          title: 'Origin overload',
          description:
            'Excessive traffic reaching the underlying source because cached responses are unavailable.',
        },
      ],
    },

    {
      title: 'Preventing Cache Stampede',
      content:
        'Techniques include request coalescing, distributed locks, jittered expiration, stale-while-revalidate, background refresh, and controlled regeneration so only limited work rebuilds an expired entry.',
      highlights: [
        {
          title: 'Request coalescing',
          description:
            'Combining simultaneous requests for the same missing data into one backend operation.',
        },
        {
          title: 'Jitter',
          description:
            'Adding controlled randomness to expiration times to avoid synchronized expiration.',
        },
        {
          title: 'Stale-while-revalidate',
          description:
            'Serving slightly stale data while refreshing the cache in the background.',
        },
      ],
    },

    {
      title: 'Cache Penetration',
      content:
        'Cache penetration occurs when requests repeatedly ask for data that does not exist, causing every request to reach the underlying database or service. Negative caching can reduce this workload.',
      highlights: [
        {
          title: 'Cache penetration',
          description:
            'Repeated requests for nonexistent data bypassing the cache.',
        },
        {
          title: 'Negative caching',
          description:
            'Temporarily caching the fact that requested data does not exist.',
        },
        {
          title: 'Invalid query protection',
          description:
            'Preventing obviously invalid requests from repeatedly reaching expensive backend systems.',
        },
      ],
    },

    {
      title: 'Cache Breakdown',
      content:
        'Cache breakdown can occur when a highly popular entry expires and a large number of requests suddenly access the backing store at the same time. Hot-key protection and controlled refresh can reduce this risk.',
      highlights: [
        {
          title: 'Hot key',
          description:
            'A cache key receiving unusually high request volume.',
        },
        {
          title: 'Hot-key protection',
          description:
            'Techniques that prevent a single popular key from overwhelming the backing system.',
        },
        {
          title: 'Controlled refresh',
          description:
            'Refreshing popular entries in a coordinated way.',
        },
      ],
    },

    {
      title: 'Distributed Cache',
      content:
        'A distributed cache stores data across multiple nodes so cache capacity and throughput can grow beyond a single machine. Distributed caches require considerations around partitioning, replication, consistency, networking, and failure.',
      highlights: [
        {
          title: 'Distributed cache',
          description:
            'A cache deployed across multiple nodes.',
        },
        {
          title: 'Partitioning',
          description:
            'Distributing cache keys across multiple nodes.',
        },
        {
          title: 'Replication',
          description:
            'Maintaining additional copies of cached data for resilience or read scaling.',
        },
      ],
    },

    {
      title: 'Redis',
      content:
        'Redis is a commonly used in-memory data platform that supports caching and other data structures. It is frequently used for application caching, sessions, counters, rate limiting, queues, and short-lived state.',
      highlights: [
        {
          title: 'Redis',
          description:
            'An in-memory data platform commonly used as a cache and for other low-latency workloads.',
        },
        {
          title: 'In-memory',
          description:
            'Data stored primarily in memory for fast access.',
        },
        {
          title: 'Data structures',
          description:
            'Structures such as strings, hashes, lists, sets, and sorted sets that support different application patterns.',
        },
      ],
    },

    {
      title: 'Local Cache',
      content:
        'A local cache resides inside the application process or host. It can be extremely fast because it avoids network calls, but each application instance has its own copy and invalidation becomes more difficult in distributed systems.',
      highlights: [
        {
          title: 'Local cache',
          description:
            'A cache stored within an application process or host.',
        },
        {
          title: 'Very low latency',
          description:
            'Local memory access avoids network round trips.',
        },
        {
          title: 'Instance-specific state',
          description:
            'Each application instance may have a different cached value.',
        },
      ],
    },

    {
      title: 'Distributed Cache vs Local Cache',
      content:
        'Local caches provide the lowest access latency but can become inconsistent across instances. Distributed caches provide shared access across instances but add network latency and operational complexity.',
      highlights: [
        {
          title: 'Local cache advantage',
          description:
            'Extremely low access latency.',
        },
        {
          title: 'Distributed cache advantage',
          description:
            'Shared cache state across multiple application instances.',
        },
        {
          title: 'Trade-off',
          description:
            'Choosing between speed, consistency, shared state, and operational complexity.',
        },
      ],
    },

    {
      title: 'CDN Caching',
      content:
        'A CDN can cache static files and selected HTTP responses at edge locations closer to users. This reduces origin traffic and improves latency for geographically distributed users.',
      highlights: [
        {
          title: 'CDN',
          description:
            'A geographically distributed network that serves content closer to users.',
        },
        {
          title: 'Edge cache',
          description:
            'Cached content stored at a CDN edge location.',
        },
        {
          title: 'Origin',
          description:
            'The original server or service from which cached content is obtained.',
        },
      ],
    },

    {
      title: 'HTTP Cache-Control',
      content:
        'HTTP caching behavior can be controlled through response headers such as Cache-Control, ETag, and Last-Modified. These mechanisms allow browsers and intermediaries to reuse or validate responses.',
      highlights: [
        {
          title: 'Cache-Control',
          description:
            'An HTTP response header used to define caching behavior.',
        },
        {
          title: 'ETag',
          description:
            'A validator that identifies a particular representation of a resource.',
        },
        {
          title: 'Last-Modified',
          description:
            'A response header indicating when a resource was last changed.',
        },
      ],
    },

    {
      title: 'Browser Cache',
      content:
        'Web browsers can cache static assets such as JavaScript, CSS, images, and selected API responses. Effective browser caching can significantly reduce network requests and improve page-load performance.',
      highlights: [
        {
          title: 'Browser cache',
          description:
            'Client-side storage used to reuse previously downloaded resources.',
        },
        {
          title: 'Static asset',
          description:
            'A resource such as an image, stylesheet, or JavaScript file that can often be cached.',
        },
        {
          title: 'Cache validation',
          description:
            'Checking whether a cached response remains valid before reusing it.',
        },
      ],
    },

    {
      title: 'Cache Consistency',
      content:
        'Caching introduces another copy of data, which creates consistency questions. Architects must decide how stale data may become, how updates propagate, and which system remains authoritative.',
      highlights: [
        {
          title: 'Cache consistency',
          description:
            'How closely cached data matches the authoritative source.',
        },
        {
          title: 'Source of truth',
          description:
            'The authoritative system or dataset for a particular piece of information.',
        },
        {
          title: 'Staleness window',
          description:
            'The maximum period during which cached data may differ from the current source.',
        },
      ],
    },

    {
      title: 'Strong vs Eventual Cache Consistency',
      content:
        'Some workloads require cached data to reflect changes very quickly, while others can tolerate temporary staleness. The appropriate strategy depends on business requirements rather than a universal rule.',
      highlights: [
        {
          title: 'Strong freshness',
          description:
            'Cached information is updated or invalidated quickly after the source changes.',
        },
        {
          title: 'Eventual consistency',
          description:
            'Cached information may temporarily differ from the source before converging.',
        },
        {
          title: 'Business tolerance',
          description:
            'The acceptable amount of stale data depends on the use case.',
        },
      ],
    },

    {
      title: 'Caching and Security',
      content:
        'Caching private or tenant-specific data requires careful key design and access controls. A cache misconfiguration can expose one user’s data to another user if responses are incorrectly shared.',
      highlights: [
        {
          title: 'Private data',
          description:
            'Information that must only be accessible to authorized users.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Ensuring cached data belonging to one tenant cannot be returned to another tenant.',
        },
        {
          title: 'Cache poisoning',
          description:
            'Manipulating cached content so other users receive incorrect or malicious data.',
        },
      ],
    },

    {
      title: 'Caching and Multi-Tenancy',
      content:
        'Multi-tenant applications should include the correct tenant context in cache keys and authorization decisions. Cache entries should not accidentally become shared across tenants when the underlying data is tenant-specific.',
      highlights: [
        {
          title: 'Tenant-aware cache key',
          description:
            'A key that distinguishes data belonging to different tenants.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Preventing one tenant from accessing another tenant’s cached information.',
        },
        {
          title: 'Authorization',
          description:
            'Verifying that the requesting identity is allowed to access the cached data.',
        },
      ],
    },

    {
      title: 'Caching and Database Scaling',
      content:
        'Caching can reduce database read pressure and allow application capacity to grow without proportionally increasing database traffic. However, cache misses still reach the database, so cache behavior must be evaluated under peak workloads.',
      highlights: [
        {
          title: 'Database offload',
          description:
            'Reducing database workload by serving repeated reads from cache.',
        },
        {
          title: 'Peak miss load',
          description:
            'The backend traffic generated when cache misses increase during high demand.',
        },
        {
          title: 'Read-heavy workload',
          description:
            'A workload where reads substantially exceed writes.',
        },
      ],
    },

    {
      title: 'Caching and APIs',
      content:
        'API responses can be cached when the response is safe to reuse for subsequent requests. Cache keys should account for relevant path parameters, query parameters, headers, authorization context, and tenant information.',
      highlights: [
        {
          title: 'API response cache',
          description:
            'A cache containing previously generated API responses.',
        },
        {
          title: 'Varying request',
          description:
            'A request whose response changes based on headers, parameters, identity, or other context.',
        },
        {
          title: 'Cache safety',
          description:
            'Ensuring cached responses are only reused when the response is valid for the requester and request context.',
        },
      ],
    },

    {
      title: 'Caching AI and RAG Systems',
      content:
        'AI platforms can cache embeddings, retrieval results, model responses, prompts, metadata, and expensive intermediate computations where correctness and privacy permit. Caching can reduce model calls and improve latency, but semantic correctness and freshness must be considered.',
      highlights: [
        {
          title: 'Semantic cache',
          description:
            'A cache that attempts to reuse results for semantically similar requests rather than only identical keys.',
        },
        {
          title: 'Embedding cache',
          description:
            'Cached vector representations to avoid recomputing embeddings for unchanged content.',
        },
        {
          title: 'LLM response cache',
          description:
            'Cached model responses for requests where reuse is safe and appropriate.',
        },
        {
          title: 'Privacy boundary',
          description:
            'Rules determining whether AI inputs or outputs may safely be reused across users or tenants.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'An AI voice platform can cache agent configuration, customer metadata, frequently used prompts, provider configuration, and other non-sensitive data that is repeatedly accessed during calls. Real-time call state requires special care because stale data can affect active conversations.',
      highlights: [
        {
          title: 'Agent configuration cache',
          description:
            'Cached configuration required repeatedly by voice-processing components.',
        },
        {
          title: 'Real-time state',
          description:
            'Information that must remain accurate during an active voice interaction.',
        },
        {
          title: 'Latency optimization',
          description:
            'Using caching to reduce repeated database or network calls during latency-sensitive workflows.',
        },
      ],
    },

    {
      title: 'Cache Warming',
      content:
        'Cache warming means populating the cache before users request the data. It can be useful after deployments, restarts, or predictable traffic events when a large number of requests would otherwise generate simultaneous cache misses.',
      highlights: [
        {
          title: 'Cache warming',
          description:
            'Pre-populating cache entries before they are requested by normal traffic.',
        },
        {
          title: 'Cold cache',
          description:
            'A cache with little or none of the expected frequently accessed data.',
        },
        {
          title: 'Warm cache',
          description:
            'A cache already containing commonly requested data.',
        },
      ],
    },

    {
      title: 'Cold Start and Caching',
      content:
        'After an application restart, deployment, cache eviction event, or infrastructure failure, the cache may be empty. The resulting increase in backend traffic is known as a cold-cache condition and should be considered in capacity planning.',
      highlights: [
        {
          title: 'Cold cache',
          description:
            'A cache containing little or none of the frequently requested data.',
        },
        {
          title: 'Backend surge',
          description:
            'Increased traffic reaching the source because cached responses are unavailable.',
        },
        {
          title: 'Warm-up strategy',
          description:
            'A process for gradually or proactively repopulating important cached data.',
        },
      ],
    },

    {
      title: 'Caching Failure Modes',
      content:
        'Common cache failures include stale data, cache stampedes, cache penetration, cache poisoning, hot keys, memory exhaustion, cache-node failure, incorrect key construction, and inconsistent invalidation.',
      highlights: [
        {
          title: 'Stale data',
          description:
            'Cached information that no longer represents the current source state.',
        },
        {
          title: 'Memory exhaustion',
          description:
            'The cache reaches its available memory limit.',
        },
        {
          title: 'Hot key',
          description:
            'A single key receives unusually high request traffic.',
        },
        {
          title: 'Incorrect key',
          description:
            'A cache key does not uniquely represent the data and request context it should identify.',
        },
      ],
    },

    {
      title: 'Cache Observability',
      content:
        'Production cache monitoring should include hit ratio, miss ratio, latency, memory usage, evictions, key distribution, hot keys, backend load during misses, connection usage, and errors.',
      highlights: [
        {
          title: 'Hit ratio',
          description:
            'The percentage of cache lookups served successfully from cache.',
        },
        {
          title: 'Eviction rate',
          description:
            'The rate at which entries are removed because of cache policies or capacity limits.',
        },
        {
          title: 'Cache latency',
          description:
            'The time required to retrieve or store data in the cache.',
        },
        {
          title: 'Origin load',
          description:
            'The workload reaching the underlying data source after cache decisions.',
        },
      ],
    },

    {
      title: 'Caching Trade-offs',
      content:
        'Caching is a trade-off between speed, freshness, memory cost, complexity, and correctness. More caching is not automatically better. The right strategy depends on how frequently data changes, how expensive it is to retrieve, how often it is accessed, and how much staleness the business can tolerate.',
      highlights: [
        {
          title: 'Performance',
          description:
            'Caching can reduce latency and backend work.',
        },
        {
          title: 'Freshness',
          description:
            'Cached data may become stale.',
        },
        {
          title: 'Complexity',
          description:
            'Invalidation, eviction, consistency, and failure handling add engineering complexity.',
        },
        {
          title: 'Memory cost',
          description:
            'Cached data consumes infrastructure resources.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is caching? Cache hit vs miss? What is cache-aside? What is TTL? How do you invalidate cache? LRU vs LFU? What is cache stampede? How do you prevent it? Local cache vs distributed cache? How would you cache an API? How would you design caching for a high-traffic application?',
      highlights: [
        {
          title: 'Cache invalidation',
          description:
            'Explain how cached data is updated or removed after source changes.',
        },
        {
          title: 'Cache-aside',
          description:
            'Explain the common application-managed caching pattern.',
        },
        {
          title: 'Cache stampede',
          description:
            'Explain how synchronized cache misses can overload the backend.',
        },
        {
          title: 'Trade-offs',
          description:
            'Explain freshness, memory, latency, consistency, and complexity.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would introduce caching for data that is expensive to retrieve and frequently reused. I would first define freshness requirements and then choose a strategy such as cache-aside with an appropriate TTL. I would design cache keys carefully, monitor hit ratio and backend load, and plan for invalidation, stampede protection, cache-node failure, and tenant isolation. I would not cache blindly because stale or incorrectly shared data can create correctness and security problems.”',
      highlights: [
        {
          title: 'Freshness first',
          description:
            'Define how stale data may become before selecting the caching strategy.',
        },
        {
          title: 'Correctness',
          description:
            'Ensure cached values remain valid for the intended request context.',
        },
        {
          title: 'Failure planning',
          description:
            'Design for misses, eviction, node failure, and backend overload.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include saying caching always improves performance, ignoring invalidation, using long TTLs without understanding freshness requirements, failing to include tenant or user context in cache keys, ignoring cache stampedes, and treating Redis as a permanent source of truth without considering durability and ownership requirements.',
      highlights: [
        {
          title: 'Caching everything',
          description:
            'Caching data without considering freshness, access frequency, or correctness.',
        },
        {
          title: 'Invalidation ignored',
          description:
            'Failing to define how stale data will be removed or refreshed.',
        },
        {
          title: 'Tenant leakage',
          description:
            'Returning one tenant’s cached data to another tenant.',
        },
        {
          title: 'Cache as source of truth',
          description:
            'Treating cached copies as authoritative without a deliberate architecture for doing so.',
        },
      ],
    },

    {
      title: 'Caching for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, caching is a capacity and product-quality decision as much as a technical optimization. The leader should understand which workloads benefit from caching, what freshness users expect, how caching affects infrastructure cost, and what risks stale or incorrectly shared data creates.',
      highlights: [
        {
          title: 'Performance strategy',
          description:
            'Using caching to meet latency and throughput objectives.',
        },
        {
          title: 'Cost strategy',
          description:
            'Reducing expensive database, network, or model operations.',
        },
        {
          title: 'Risk management',
          description:
            'Managing stale data, invalidation, security, and failure behavior.',
        },
        {
          title: 'Business alignment',
          description:
            'Choosing caching policies based on actual product freshness and reliability requirements.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'monolith',
    'event-driven-systems',
    'scalability',
    'load-balancing',
    'queues',
    'consistency',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'redis',
    'postgresql',
    'mongodb',
    'aws',
    'azure',
    'google-cloud',
    'cloudflare',
    'nginx',
    'docker',
    'kubernetes',
  ],
}

export default cachingKnowledge
