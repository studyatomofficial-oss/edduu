import type { KnowledgeDefinition } from './knowledge'

export const capacityPlanningKnowledge: KnowledgeDefinition = {
  technologyId: 'capacity-planning',
  slug: 'capacity-planning',
  title: 'Capacity Planning',
  summary:
    'Capacity Planning is the process of estimating the infrastructure, compute, storage, network, database, and operational capacity required to support expected workload while maintaining performance, reliability, and cost objectives.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Capacity Planning?',
      content:
        'Capacity planning means answering a simple business question: how much system capacity do we need today, how much will we need in the future, and what should we do before demand exceeds our available resources? It connects expected workload with infrastructure capacity, performance targets, reliability requirements, and cost.',
      highlights: [
        {
          title: 'Capacity',
          description:
            'The amount of workload a system can safely handle under defined performance and reliability requirements.',
        },
        {
          title: 'Capacity planning',
          description:
            'Estimating future resource requirements and preparing infrastructure before demand exceeds safe capacity.',
        },
        {
          title: 'Workload',
          description:
            'The requests, transactions, users, data, jobs, or other processing demand placed on a system.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a school auditorium with 500 seats. If you expect 450 students, the auditorium has enough capacity. If you expect 800 students next year, you must plan another hall or another arrangement before the event happens. Capacity planning in technology works the same way: understand expected demand, compare it with available capacity, and prepare before the limit is reached.',
      highlights: [
        {
          title: 'Seats',
          description:
            'Represent available system capacity.',
        },
        {
          title: 'Students',
          description:
            'Represent workload or demand.',
        },
        {
          title: 'Additional hall',
          description:
            'Represents scaling or additional infrastructure.',
        },
      ],
    },

    {
      title: 'Why Capacity Planning Matters',
      content:
        'Poor capacity planning can cause slow applications, outages, queue backlogs, database exhaustion, high cloud bills, or unnecessary infrastructure spending. Good capacity planning aims for enough capacity to meet demand without permanently over-provisioning expensive resources.',
      highlights: [
        {
          title: 'Under-provisioning',
          description:
            'Having insufficient capacity for expected workload.',
        },
        {
          title: 'Over-provisioning',
          description:
            'Maintaining substantially more capacity than required, increasing cost without proportional business value.',
        },
        {
          title: 'Capacity risk',
          description:
            'The possibility that demand exceeds safe system capacity.',
        },
      ],
    },

    {
      title: 'Capacity vs Performance',
      content:
        'Capacity and performance are related but different. Performance describes how quickly and efficiently the system handles work. Capacity describes how much work the system can handle while still meeting defined performance and reliability requirements.',
      highlights: [
        {
          title: 'Performance',
          description:
            'How efficiently or quickly a system processes workload.',
        },
        {
          title: 'Capacity',
          description:
            'How much workload can be supported within defined limits.',
        },
        {
          title: 'Performance target',
          description:
            'A measurable requirement such as latency, throughput, or error rate.',
        },
      ],
    },

    {
      title: 'Capacity Planning Inputs',
      content:
        'Capacity planning begins with measurable inputs. Typical inputs include current traffic, peak traffic, user growth, transactions per second, request size, storage growth, CPU usage, memory usage, network throughput, database workload, queue volume, latency targets, and availability requirements.',
      highlights: [
        {
          title: 'Traffic',
          description:
            'The volume and pattern of requests reaching the system.',
        },
        {
          title: 'Growth rate',
          description:
            'The expected rate at which workload or data increases.',
        },
        {
          title: 'Resource utilization',
          description:
            'How much CPU, memory, storage, network, or other resources are currently being consumed.',
        },
      ],
    },

    {
      title: 'Demand',
      content:
        'Demand represents the workload the system needs to process. Demand is not always constant. Systems often experience daily, weekly, seasonal, promotional, or event-driven traffic patterns.',
      highlights: [
        {
          title: 'Demand',
          description:
            'The amount of work requested from the system.',
        },
        {
          title: 'Peak demand',
          description:
            'The highest workload expected during a relevant period.',
        },
        {
          title: 'Traffic pattern',
          description:
            'The way workload changes over time.',
        },
      ],
    },

    {
      title: 'Peak vs Average Load',
      content:
        'Average traffic is useful for understanding normal operation, but capacity planning must account for peaks. A system sized only for average demand may become overloaded during predictable traffic spikes.',
      highlights: [
        {
          title: 'Average load',
          description:
            'The typical workload over a defined measurement period.',
        },
        {
          title: 'Peak load',
          description:
            'The highest or near-highest workload that must be supported.',
        },
        {
          title: 'Peak-to-average ratio',
          description:
            'A measure of how much larger peak workload is compared with average workload.',
        },
      ],
    },

    {
      title: 'Headroom',
      content:
        'Capacity headroom is the unused capacity intentionally maintained so the system can absorb traffic spikes, instance failures, operational changes, or forecast errors. Running every resource at maximum utilization leaves little room for unexpected demand.',
      highlights: [
        {
          title: 'Headroom',
          description:
            'Unused capacity reserved for spikes, failures, growth, and uncertainty.',
        },
        {
          title: 'Safety margin',
          description:
            'Additional capacity maintained beyond the expected workload requirement.',
        },
        {
          title: 'Capacity buffer',
          description:
            'Extra resource capacity available before scaling or emergency action is required.',
        },
      ],
    },

    {
      title: 'CPU Capacity',
      content:
        'CPU capacity represents the processing capability available to applications. Capacity planning should consider average CPU usage, peak CPU usage, workload characteristics, instance size, scaling behavior, and the utilization level at which latency begins to degrade.',
      highlights: [
        {
          title: 'CPU utilization',
          description:
            'The percentage of available CPU processing capacity currently being consumed.',
        },
        {
          title: 'CPU saturation',
          description:
            'A condition where CPU demand approaches or exceeds safe processing capacity.',
        },
        {
          title: 'Compute scaling',
          description:
            'Increasing or decreasing available compute resources to match workload.',
        },
      ],
    },

    {
      title: 'Memory Capacity',
      content:
        'Memory planning considers application memory usage, cache size, garbage collection behavior, concurrent workloads, and operating-system requirements. Memory exhaustion can cause crashes, swapping, or severe performance degradation.',
      highlights: [
        {
          title: 'Memory utilization',
          description:
            'The amount of memory currently consumed relative to available memory.',
        },
        {
          title: 'Memory pressure',
          description:
            'A condition where available memory becomes insufficient for safe workload operation.',
        },
        {
          title: 'Out of memory',
          description:
            'A condition where the system cannot allocate required memory.',
        },
      ],
    },

    {
      title: 'Storage Capacity',
      content:
        'Storage planning estimates how quickly data grows and how much usable storage is required after considering indexes, backups, replicas, logs, temporary files, and safety margins.',
      highlights: [
        {
          title: 'Storage growth',
          description:
            'The rate at which stored data increases over time.',
        },
        {
          title: 'Usable capacity',
          description:
            'The storage actually available for application data after system and safety requirements.',
        },
        {
          title: 'Storage headroom',
          description:
            'Unused storage maintained to avoid exhaustion during growth or unexpected events.',
        },
      ],
    },

    {
      title: 'Database Capacity',
      content:
        'Database capacity planning considers CPU, memory, connections, queries per second, transactions, disk I/O, storage growth, replication traffic, indexes, locks, and connection pool behavior. Database limits can become the bottleneck even when application servers have spare capacity.',
      highlights: [
        {
          title: 'QPS',
          description:
            'Queries Per Second: the number of database queries processed per second.',
        },
        {
          title: 'TPS',
          description:
            'Transactions Per Second: the number of completed transactions per second.',
        },
        {
          title: 'Connection capacity',
          description:
            'The number of concurrent database connections the database and surrounding infrastructure can safely support.',
        },
      ],
    },

    {
      title: 'Network Capacity',
      content:
        'Network capacity planning considers bandwidth, packets per second, request sizes, response sizes, geographic traffic, replication traffic, and peak network usage. Network saturation can create latency even when CPU and memory remain healthy.',
      highlights: [
        {
          title: 'Bandwidth',
          description:
            'The amount of data that can be transferred over a network in a given period.',
        },
        {
          title: 'Network throughput',
          description:
            'The actual rate of data transfer achieved by the system.',
        },
        {
          title: 'Network saturation',
          description:
            'A condition where network capacity is heavily consumed and additional traffic cannot be handled safely.',
        },
      ],
    },

    {
      title: 'Throughput',
      content:
        'Throughput measures how much work a system completes per unit of time. Depending on the system, throughput can be measured as requests per second, transactions per second, messages per second, or jobs per minute.',
      highlights: [
        {
          title: 'Throughput',
          description:
            'The amount of completed work per unit of time.',
        },
        {
          title: 'Requests per second',
          description:
            'A common throughput measure for APIs and web services.',
        },
        {
          title: 'Transactions per second',
          description:
            'A common throughput measure for transactional systems.',
        },
      ],
    },

    {
      title: 'Latency',
      content:
        'Latency measures how long an operation takes. Capacity planning should consider latency because a system may technically process more requests while user-facing latency becomes unacceptable.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The elapsed time required to complete an operation.',
        },
        {
          title: 'P95 latency',
          description:
            'The latency value below which approximately 95 percent of measured requests fall.',
        },
        {
          title: 'P99 latency',
          description:
            'The latency value below which approximately 99 percent of measured requests fall.',
        },
      ],
    },

    {
      title: 'Concurrency',
      content:
        'Concurrency represents how many operations are active or in progress at the same time. Capacity planning must consider concurrency because many simultaneous requests can exhaust connections, memory, threads, or other resources even when average traffic appears manageable.',
      highlights: [
        {
          title: 'Concurrency',
          description:
            'The number of operations being handled simultaneously.',
        },
        {
          title: 'Concurrent users',
          description:
            'Users actively generating workload at the same time.',
        },
        {
          title: 'Connection pool',
          description:
            'A managed set of reusable connections to a downstream resource such as a database.',
        },
      ],
    },

    {
      title: 'Little’s Law',
      content:
        'Little’s Law connects average concurrency, throughput, and average response time. In simplified form, L = lambda × W, where L is average number of items in the system, lambda is throughput, and W is average time an item spends in the system. It is useful for reasoning about queues and concurrency.',
      highlights: [
        {
          title: 'L',
          description:
            'Average number of items or requests in the system.',
        },
        {
          title: 'Lambda',
          description:
            'Average arrival or throughput rate.',
        },
        {
          title: 'W',
          description:
            'Average time an item spends in the system.',
        },
      ],
    },

    {
      title: 'Vertical Scaling',
      content:
        'Vertical scaling means increasing the resources of an existing machine or service instance, such as adding CPU, memory, or storage. It is often simple initially but has a physical or service-level upper limit.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing resources assigned to an existing instance.',
        },
        {
          title: 'Scale up',
          description:
            'Another term for increasing the capacity of an individual resource.',
        },
        {
          title: 'Scaling limit',
          description:
            'The maximum resource size supported by the platform or architecture.',
        },
      ],
    },

    {
      title: 'Horizontal Scaling',
      content:
        'Horizontal scaling means adding more instances to distribute workload. It can provide greater capacity and resilience but usually requires load balancing, stateless design, shared state management, or distributed coordination.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Increasing capacity by adding more instances.',
        },
        {
          title: 'Scale out',
          description:
            'Another term for adding additional instances.',
        },
        {
          title: 'Load distribution',
          description:
            'Distributing workload across multiple instances.',
        },
      ],
    },

    {
      title: 'Auto Scaling',
      content:
        'Auto scaling automatically adjusts capacity based on workload or system signals. It can reduce cost during low demand and increase capacity during traffic spikes, but scaling policies must account for startup time and workload behavior.',
      highlights: [
        {
          title: 'Auto scaling',
          description:
            'Automatically adjusting resource capacity according to defined conditions.',
        },
        {
          title: 'Scale-out event',
          description:
            'An operation that adds additional capacity.',
        },
        {
          title: 'Scale-in event',
          description:
            'An operation that removes excess capacity.',
        },
      ],
    },

    {
      title: 'Scaling Triggers',
      content:
        'Scaling can be triggered by CPU utilization, memory usage, request rate, queue depth, latency, custom business metrics, or predictive forecasts. The best signal is usually the resource or business metric most directly related to capacity pressure.',
      highlights: [
        {
          title: 'CPU trigger',
          description:
            'Scaling based on CPU utilization.',
        },
        {
          title: 'Queue-depth trigger',
          description:
            'Scaling consumers based on the amount of unprocessed work.',
        },
        {
          title: 'Latency trigger',
          description:
            'Scaling based on user-facing response-time behavior.',
        },
      ],
    },

    {
      title: 'Queue Capacity',
      content:
        'Queue-based systems require planning around message arrival rate, consumer processing rate, queue depth, message size, retention period, and recovery behavior. If producers consistently create work faster than consumers process it, backlog will grow.',
      highlights: [
        {
          title: 'Queue depth',
          description:
            'The amount of work currently waiting in a queue.',
        },
        {
          title: 'Consumer rate',
          description:
            'The rate at which consumers process queued work.',
        },
        {
          title: 'Backlog',
          description:
            'Accumulated work that has not yet been processed.',
        },
      ],
    },

    {
      title: 'Capacity Bottleneck',
      content:
        'A bottleneck is the component that limits overall system throughput. Adding capacity to non-bottleneck components may provide little benefit if the actual constraint remains unchanged.',
      highlights: [
        {
          title: 'Bottleneck',
          description:
            'The component or resource that currently limits system capacity.',
        },
        {
          title: 'Resource constraint',
          description:
            'A resource whose limited capacity restricts overall workload processing.',
        },
        {
          title: 'Bottleneck analysis',
          description:
            'Identifying the actual limiting component before investing in scaling.',
        },
      ],
    },

    {
      title: 'Capacity and Load Testing',
      content:
        'Load testing applies controlled workload to determine how the system behaves as demand increases. It helps identify throughput limits, latency degradation, resource saturation, and failure points before production traffic reaches those levels.',
      highlights: [
        {
          title: 'Load test',
          description:
            'A controlled test that applies representative workload to a system.',
        },
        {
          title: 'Stress test',
          description:
            'A test that pushes a system beyond normal expected capacity to understand its failure behavior.',
        },
        {
          title: 'Capacity test',
          description:
            'A test intended to determine how much workload can be supported while meeting defined requirements.',
        },
      ],
    },

    {
      title: 'Capacity Baseline',
      content:
        'A baseline captures normal system behavior and resource usage. Without a baseline, teams cannot easily distinguish normal growth from abnormal resource consumption or determine when capacity planning thresholds have been crossed.',
      highlights: [
        {
          title: 'Baseline',
          description:
            'A reference measurement representing expected normal system behavior.',
        },
        {
          title: 'Normal utilization',
          description:
            'Typical resource consumption during normal workload.',
        },
        {
          title: 'Trend',
          description:
            'The direction in which workload or resource consumption changes over time.',
        },
      ],
    },

    {
      title: 'Forecasting',
      content:
        'Forecasting estimates future demand using historical traffic, business growth, product plans, seasonality, launches, campaigns, and expected customer behavior. Forecasts should include uncertainty because future demand is rarely exact.',
      highlights: [
        {
          title: 'Forecast',
          description:
            'An estimate of future workload or resource requirements.',
        },
        {
          title: 'Seasonality',
          description:
            'Predictable workload patterns associated with time periods or events.',
        },
        {
          title: 'Forecast uncertainty',
          description:
            'The possibility that actual demand differs from the prediction.',
        },
      ],
    },

    {
      title: 'Growth Planning',
      content:
        'Capacity planning should connect technical growth with business growth. New customers, new features, increased API usage, AI adoption, larger datasets, and geographic expansion can all change capacity requirements.',
      highlights: [
        {
          title: 'User growth',
          description:
            'Increase in the number of users generating workload.',
        },
        {
          title: 'Feature-driven growth',
          description:
            'Additional workload created by new product capabilities.',
        },
        {
          title: 'Data growth',
          description:
            'Increase in stored or processed data over time.',
        },
      ],
    },

    {
      title: 'Capacity Planning for Databases',
      content:
        'Database capacity planning should examine read/write ratios, query complexity, indexes, connections, storage growth, replication, locks, cache hit rates, I/O, and transaction volume. A database can become the limiting factor even when application servers are lightly utilized.',
      highlights: [
        {
          title: 'Read/write ratio',
          description:
            'The relative amount of read workload compared with write workload.',
        },
        {
          title: 'Index overhead',
          description:
            'Additional storage and write work created by database indexes.',
        },
        {
          title: 'I/O capacity',
          description:
            'The ability of storage infrastructure to process read and write operations.',
        },
      ],
    },

    {
      title: 'Capacity Planning for Caches',
      content:
        'Caches require planning for memory size, object size, hit rate, eviction behavior, expiration policies, and traffic growth. An undersized cache may produce excessive cache misses and overload the underlying database or service.',
      highlights: [
        {
          title: 'Cache hit rate',
          description:
            'The percentage of cache requests successfully served from cached data.',
        },
        {
          title: 'Cache miss',
          description:
            'A request for data that is not currently available in the cache.',
        },
        {
          title: 'Eviction',
          description:
            'Removing cached entries to make room for new data.',
        },
      ],
    },

    {
      title: 'Capacity Planning for Kubernetes',
      content:
        'Kubernetes capacity planning includes node CPU and memory, pod requests and limits, replica counts, cluster autoscaling, workload startup time, scheduling constraints, and failure headroom. The cluster needs enough spare capacity to tolerate expected failures while still scheduling workloads.',
      highlights: [
        {
          title: 'Resource request',
          description:
            'The amount of CPU or memory a workload requests for scheduling purposes.',
        },
        {
          title: 'Resource limit',
          description:
            'The maximum CPU or memory a workload is allowed to consume according to its configuration.',
        },
        {
          title: 'Cluster headroom',
          description:
            'Unused node capacity maintained for scaling and failure recovery.',
        },
      ],
    },

    {
      title: 'Cloud Capacity Planning',
      content:
        'Cloud platforms make scaling easier but do not remove the need for capacity planning. Teams still need to understand quotas, instance limits, scaling delays, database limits, network constraints, regional capacity, cost, and service dependencies.',
      highlights: [
        {
          title: 'Cloud quota',
          description:
            'A provider-imposed limit on resource usage.',
        },
        {
          title: 'Scaling delay',
          description:
            'The time required to provision and make additional capacity usable.',
        },
        {
          title: 'Cost-capacity trade-off',
          description:
            'Balancing available capacity against infrastructure spending.',
        },
      ],
    },

    {
      title: 'Capacity and Cost',
      content:
        'Capacity planning is not only about avoiding outages. Over-provisioning can create unnecessary cloud and infrastructure costs. The objective is to maintain enough capacity and headroom while using efficient scaling and resource allocation.',
      highlights: [
        {
          title: 'Over-provisioning',
          description:
            'Maintaining more resources than required by expected workload.',
        },
        {
          title: 'Under-provisioning',
          description:
            'Maintaining insufficient resources for expected workload.',
        },
        {
          title: 'Cost optimization',
          description:
            'Reducing unnecessary infrastructure spending without violating performance or reliability requirements.',
        },
      ],
    },

    {
      title: 'Capacity and High Availability',
      content:
        'Capacity planning and High Availability are connected. A system may have redundant instances but still fail after one instance goes down if the remaining instances do not have enough capacity to absorb the lost workload.',
      highlights: [
        {
          title: 'Failure headroom',
          description:
            'Extra capacity reserved so the system can continue after a component failure.',
        },
        {
          title: 'N+1 capacity',
          description:
            'Capacity sufficient to tolerate the loss of one required capacity unit.',
        },
        {
          title: 'Resilience capacity',
          description:
            'Capacity maintained specifically to support continued operation during failure.',
        },
      ],
    },

    {
      title: 'Capacity and Fault Tolerance',
      content:
        'Fault-tolerant architectures need sufficient spare capacity to remain functional after component failures. If all resources are running near maximum utilization, losing one instance may overload every remaining instance.',
      highlights: [
        {
          title: 'Fault capacity',
          description:
            'Capacity reserved to maintain service during defined component failures.',
        },
        {
          title: 'Overload after failure',
          description:
            'A condition where remaining resources cannot absorb workload from a failed component.',
        },
        {
          title: 'Failure scenario planning',
          description:
            'Estimating resource needs under realistic component and infrastructure failures.',
        },
      ],
    },

    {
      title: 'Capacity Planning for AI Systems',
      content:
        'AI workloads introduce additional capacity dimensions such as model requests per second, token throughput, context size, embedding generation rate, vector search traffic, GPU capacity, inference latency, speech minutes, and provider rate limits. Capacity planning must account for both technical and commercial limits.',
      highlights: [
        {
          title: 'Token throughput',
          description:
            'The amount of model token processing supported over a period.',
        },
        {
          title: 'Inference capacity',
          description:
            'The amount of model inference workload that can be processed within required latency and cost limits.',
        },
        {
          title: 'Provider rate limit',
          description:
            'A limit imposed by an external AI provider on request or token usage.',
        },
      ],
    },

    {
      title: 'AI Voice Capacity Planning',
      content:
        'For an AI voice platform, capacity planning should consider concurrent calls, calls per minute, average call duration, speech-to-text throughput, model requests, text-to-speech capacity, telephony channels, webhook volume, database writes, and post-call processing. Peak concurrent calls are usually more important for real-time infrastructure than daily call totals alone.',
      highlights: [
        {
          title: 'Concurrent calls',
          description:
            'The number of active voice calls being processed at the same time.',
        },
        {
          title: 'Call duration',
          description:
            'The average or distribution of time that calls remain active.',
        },
        {
          title: 'Telephony capacity',
          description:
            'The number of simultaneous call channels or sessions supported by the telephony infrastructure.',
        },
      ],
    },

    {
      title: 'RAG Capacity Planning',
      content:
        'RAG systems require capacity planning across document ingestion, chunking, embedding generation, vector indexing, retrieval, reranking, model inference, storage, and caching. Growth in the document corpus can increase both storage and retrieval workload.',
      highlights: [
        {
          title: 'Embedding throughput',
          description:
            'The rate at which source content can be converted into embeddings.',
        },
        {
          title: 'Vector search capacity',
          description:
            'The amount of retrieval workload the vector infrastructure can handle.',
        },
        {
          title: 'Corpus growth',
          description:
            'The increase in documents, chunks, and vector records over time.',
        },
      ],
    },

    {
      title: 'Capacity Planning Process',
      content:
        'A practical capacity-planning process is: define business demand, collect current metrics, identify bottlenecks, forecast growth, calculate required resources, add appropriate headroom, validate through load testing, define scaling triggers, monitor trends, and review the forecast regularly.',
      highlights: [
        {
          title: 'Step 1',
          description:
            'Define expected business workload and service requirements.',
        },
        {
          title: 'Step 2',
          description:
            'Measure current traffic and resource utilization.',
        },
        {
          title: 'Step 3',
          description:
            'Identify bottlenecks and forecast future demand.',
        },
        {
          title: 'Step 4',
          description:
            'Calculate capacity, headroom, and scaling requirements.',
        },
        {
          title: 'Step 5',
          description:
            'Validate assumptions through load testing and production monitoring.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is capacity planning? How do you estimate server capacity? What metrics do you monitor? Vertical vs horizontal scaling? How do you plan for traffic spikes? What is headroom? How do you identify a bottleneck? How do you capacity-plan a database? How would you plan capacity for an AI platform? How do RTO, RPO, and HA affect capacity planning?',
      highlights: [
        {
          title: 'Capacity estimation',
          description:
            'Explain workload, resource usage, growth, peak demand, and headroom.',
        },
        {
          title: 'Bottleneck identification',
          description:
            'Explain why scaling the wrong component does not solve capacity problems.',
        },
        {
          title: 'AI capacity',
          description:
            'Explain concurrency, token throughput, provider limits, inference capacity, and cost.',
        },
        {
          title: 'HA capacity',
          description:
            'Explain why redundancy requires enough spare capacity to survive failures.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would start with the business workload rather than infrastructure. I would establish current traffic, peak traffic, growth rate, latency and availability targets, then measure CPU, memory, database, network and queue utilization. I would identify the actual bottleneck, estimate future demand, add a justified safety margin, and validate the model with load testing. I would also account for failure scenarios, scaling delays, cloud quotas, and cost so the system has enough capacity without unnecessary over-provisioning.”',
      highlights: [
        {
          title: 'Business-first',
          description:
            'Start from expected workload and business growth.',
        },
        {
          title: 'Measure before scaling',
          description:
            'Use real telemetry to identify the actual limiting resource.',
        },
        {
          title: 'Validate assumptions',
          description:
            'Use load tests and production data to validate capacity estimates.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include sizing only for average traffic, ignoring peaks, scaling without identifying the bottleneck, running every resource near 100 percent utilization, ignoring scaling delays, forgetting database and network limits, and treating cloud auto scaling as a replacement for capacity planning.',
      highlights: [
        {
          title: 'Average-only planning',
          description:
            'Ignoring peak demand can cause outages during predictable traffic spikes.',
        },
        {
          title: 'Wrong bottleneck',
          description:
            'Adding application servers does not solve a database bottleneck.',
        },
        {
          title: 'No headroom',
          description:
            'Operating at maximum utilization leaves little capacity for spikes or failures.',
        },
        {
          title: 'Auto scaling solves everything',
          description:
            'Auto scaling still depends on quotas, startup time, limits, and correct scaling signals.',
        },
      ],
    },

    {
      title: 'Capacity Planning for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, capacity planning is a cross-functional planning activity. The leader should translate business growth into technical demand, align engineering and product teams on forecasts, identify infrastructure risks early, plan vendor capacity and quotas, manage cost trade-offs, and ensure reliability requirements are included in capacity decisions.',
      highlights: [
        {
          title: 'Business forecast',
          description:
            'Translate expected customers, transactions, calls, documents, or usage into technical workload.',
        },
        {
          title: 'Engineering alignment',
          description:
            'Coordinate infrastructure, application, database, platform, and product teams around capacity requirements.',
        },
        {
          title: 'Vendor planning',
          description:
            'Validate external provider quotas, rate limits, pricing, and regional capacity.',
        },
        {
          title: 'Executive decision',
          description:
            'Present capacity, reliability, risk, and cost trade-offs clearly for leadership decisions.',
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
    'caching',
    'queues',
    'consistency',
    'availability',
    'fault-tolerance',
    'high-availability',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'redis',
    'postgresql',
    'nginx',
  ],
}

export default capacityPlanningKnowledge
