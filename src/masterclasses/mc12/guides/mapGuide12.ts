import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide12: GuideDefinition = {
  type: 'map',
  title: 'MC12 Scalability, Performance & Data at Scale Map',
  label: 'MC12 Map Guide',
  objective:
    'Provide a practical implementation path for designing, measuring, scaling and operating a production-oriented system at increasing workload and data volume.',
  steps: [
    {
      id: 'mc12-map-1',
      action: 'Review and apply this scalability concept.',
      step: 1,
      title: 'Define the workload',
      explanation:
        'Identify users, requests, data volume, concurrency and workload patterns before choosing a scaling strategy.',
      mapStepId: 'mc12-map-01',
    },
    {
      id: 'mc12-map-2',
      action: 'Review and apply this scalability concept.',
      step: 2,
      title: 'Define performance targets',
      explanation:
        'Establish measurable latency, throughput, availability and error-rate expectations.',
      mapStepId: 'mc12-map-02',
    },
    {
      id: 'mc12-map-3',
      action: 'Review and apply this scalability concept.',
      step: 3,
      title: 'Measure the baseline',
      explanation:
        'Record current system performance and resource usage before making optimization changes.',
      mapStepId: 'mc12-map-03',
    },
    {
      id: 'mc12-map-4',
      action: 'Review and apply this scalability concept.',
      step: 4,
      title: 'Identify bottlenecks',
      explanation:
        'Find the component that currently limits throughput or causes unacceptable latency.',
      mapStepId: 'mc12-map-04',
    },
    {
      id: 'mc12-map-5',
      action: 'Review and apply this scalability concept.',
      step: 5,
      title: 'Make application services stateless',
      explanation:
        'Separate durable or shared state from application instances so services can scale horizontally.',
      mapStepId: 'mc12-map-05',
    },
    {
      id: 'mc12-map-6',
      action: 'Review and apply this scalability concept.',
      step: 6,
      title: 'Add horizontal application scaling',
      explanation:
        'Run multiple application replicas behind controlled traffic distribution.',
      mapStepId: 'mc12-map-06',
    },
    {
      id: 'mc12-map-7',
      action: 'Review and apply this scalability concept.',
      step: 7,
      title: 'Introduce Redis caching',
      explanation:
        'Cache suitable high-frequency reads to reduce repeated backing-store work.',
      mapStepId: 'mc12-map-07',
    },
    {
      id: 'mc12-map-8',
      action: 'Review and apply this scalability concept.',
      step: 8,
      title: 'Design cache keys and TTL',
      explanation:
        'Define deterministic cache keys and explicit freshness periods for cached data.',
      mapStepId: 'mc12-map-08',
    },
    {
      id: 'mc12-map-9',
      action: 'Review and apply this scalability concept.',
      step: 9,
      title: 'Design cache invalidation',
      explanation:
        'Define how source updates invalidate or refresh cached values.',
      mapStepId: 'mc12-map-09',
    },
    {
      id: 'mc12-map-10',
      action: 'Review and apply this scalability concept.',
      step: 10,
      title: 'Profile database queries',
      explanation:
        'Use database query plans and measurements to identify inefficient database access.',
      mapStepId: 'mc12-map-10',
    },
    {
      id: 'mc12-map-11',
      action: 'Review and apply this scalability concept.',
      step: 11,
      title: 'Create appropriate indexes',
      explanation:
        'Add indexes that match actual query patterns and verify their effectiveness.',
      mapStepId: 'mc12-map-11',
    },
    {
      id: 'mc12-map-12',
      action: 'Review and apply this scalability concept.',
      step: 12,
      title: 'Control database connections',
      explanation:
        'Use connection pooling and bounded concurrency to prevent application replicas from overwhelming the database.',
      mapStepId: 'mc12-map-12',
    },
    {
      id: 'mc12-map-13',
      action: 'Review and apply this scalability concept.',
      step: 13,
      title: 'Partition large datasets',
      explanation:
        'Partition high-volume tables when data size and access patterns justify the additional complexity.',
      mapStepId: 'mc12-map-13',
    },
    {
      id: 'mc12-map-14',
      action: 'Review and apply this scalability concept.',
      step: 14,
      title: 'Add read replicas where appropriate',
      explanation:
        'Separate suitable read workloads from primary writes while accounting for replication lag.',
      mapStepId: 'mc12-map-14',
    },
    {
      id: 'mc12-map-15',
      action: 'Review and apply this scalability concept.',
      step: 15,
      title: 'Move long-running work to queues',
      explanation:
        'Separate suitable background workloads from synchronous request processing.',
      mapStepId: 'mc12-map-15',
    },
    {
      id: 'mc12-map-16',
      action: 'Review and apply this scalability concept.',
      step: 16,
      title: 'Implement workers and backpressure',
      explanation:
        'Process queued work with controlled worker concurrency and protect downstream dependencies.',
      mapStepId: 'mc12-map-16',
    },
    {
      id: 'mc12-map-17',
      action: 'Review and apply this scalability concept.',
      step: 17,
      title: 'Implement retries and idempotency',
      explanation:
        'Handle transient failures safely and ensure duplicate delivery does not create duplicate side effects.',
      mapStepId: 'mc12-map-17',
    },
    {
      id: 'mc12-map-18',
      action: 'Review and apply this scalability concept.',
      step: 18,
      title: 'Run load and stress tests',
      explanation:
        'Use realistic workloads to discover performance limits, saturation points and regressions.',
      mapStepId: 'mc12-map-18',
    },
    {
      id: 'mc12-map-19',
      action: 'Review and apply this scalability concept.',
      step: 19,
      title: 'Define capacity and headroom',
      explanation:
        'Translate measured capacity into resource requirements while maintaining room for bursts and failures.',
      mapStepId: 'mc12-map-19',
    },
    {
      id: 'mc12-map-20',
      action: 'Review and apply this scalability concept.',
      step: 20,
      title: 'Establish production observability',
      explanation:
        'Use metrics, logs and traces to understand latency, saturation, failures and downstream dependencies.',
      mapStepId: 'mc12-map-20',
    },
    {
      id: 'mc12-map-21',
      action: 'Review and apply this scalability concept.',
      step: 21,
      title: 'Complete production readiness review',
      explanation:
        'Validate scalability, performance, data behavior, failure handling, recovery, cost and operational ownership.',
      mapStepId: 'mc12-map-21',
    },
  ],
}