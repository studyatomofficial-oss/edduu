import type { KnowledgeDefinition } from './knowledge'

export const webhooksKnowledge: KnowledgeDefinition = {
  technologyId: 'webhooks',
  slug: 'webhooks',
  title: 'What are Webhooks?',
  summary:
    'Webhooks are event-driven HTTP callbacks that allow one system to automatically notify another system when a specific event occurs.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What are Webhooks?',
      content:
        'A webhook is a mechanism through which one system sends an HTTP request to another system when a defined event occurs. Instead of the receiving system repeatedly asking whether something changed, the source system sends a notification when the change happens. Webhooks are therefore a simple way to connect applications through event-driven communication.',
    },
    {
      title: 'Why do we need Webhooks?',
      content:
        'Applications frequently need to know when something happens in another system. For example, a payment provider may need to notify an application when a payment succeeds, or a Git provider may notify a deployment system when code is pushed. Without webhooks, the receiving application may need to repeatedly poll the source system, creating unnecessary requests and delays.',
    },
    {
      title: 'How do Webhooks work?',
      content:
        'The receiving application first provides an HTTP endpoint that is designed to accept webhook events. The source system stores that endpoint and sends an HTTP request to it when the configured event occurs. The receiving system validates the request, processes the event, and returns an appropriate HTTP response. The source system may retry delivery when the receiving endpoint fails.',
    },
    {
      title: 'The Webhook lifecycle',
      content:
        'A reliable webhook integration follows a predictable lifecycle from event creation through delivery and processing.',
      highlights: [
        {
          title: 'Event',
          description:
            'A meaningful state change occurs in the source system.',
        },
        {
          title: 'Trigger',
          description:
            'The source system determines that a configured webhook should be sent.',
        },
        {
          title: 'Delivery',
          description:
            'The source system sends an HTTP request containing the event information.',
        },
        {
          title: 'Validation',
          description:
            'The receiving system verifies that the request is authentic and correctly formed.',
        },
        {
          title: 'Processing',
          description:
            'The receiving application performs the appropriate business or technical action.',
        },
        {
          title: 'Acknowledgement',
          description:
            'The receiving endpoint returns an HTTP response indicating whether the request was accepted.',
        },
        {
          title: 'Retry',
          description:
            'The source system may attempt delivery again when the initial delivery fails.',
        },
      ],
    },
    {
      title: 'Important Webhook concepts',
      content:
        'Several concepts are essential when building reliable webhook integrations.',
      highlights: [
        {
          title: 'Webhook endpoint',
          description:
            'An HTTP endpoint that receives event notifications from another system.',
        },
        {
          title: 'Event type',
          description:
            'Identifies what happened, such as payment.succeeded, order.created, or user.updated.',
        },
        {
          title: 'Payload',
          description:
            'Contains the event data sent from the source system to the receiving application.',
        },
        {
          title: 'Signature',
          description:
            'A cryptographic value that helps the receiver verify that the request came from the expected source.',
        },
        {
          title: 'Delivery ID',
          description:
            'A unique identifier for a webhook delivery that can help with tracing and duplicate detection.',
        },
        {
          title: 'Retry',
          description:
            'A subsequent delivery attempt made when the original webhook request was unsuccessful.',
        },
      ],
    },
    {
      title: 'Webhooks vs polling',
      content:
        'Polling requires the receiving application to repeatedly ask a source system whether something has changed. Webhooks reverse this relationship: the source system sends a notification when an event occurs. Webhooks can reduce unnecessary requests and improve notification latency, although they require the receiver to handle delivery failures, retries, duplicates, and security.',
      highlights: [
        {
          title: 'Polling',
          description:
            'The receiving application repeatedly asks the source system for updates.',
        },
        {
          title: 'Webhook',
          description:
            'The source system pushes an event to the receiving application when a change occurs.',
        },
        {
          title: 'Polling interval',
          description:
            'Determines how frequently a polling application checks for new information.',
        },
        {
          title: 'Event-driven',
          description:
            'Communication begins because a meaningful event occurred rather than because a timer triggered a request.',
        },
      ],
    },
    {
      title: 'Webhook payload design',
      content:
        'Webhook payloads should contain enough information for the receiving application to understand and process the event without making unnecessary additional requests. A well-designed payload normally includes an event identifier, event type, timestamp, and relevant data. The schema should be documented and changes should remain backward compatible whenever possible.',
      highlights: [
        {
          title: 'Event ID',
          description:
            'Uniquely identifies the event and can be used for deduplication.',
        },
        {
          title: 'Event type',
          description:
            'Describes the kind of event that occurred.',
        },
        {
          title: 'Timestamp',
          description:
            'Records when the event was created or delivered.',
        },
        {
          title: 'Data',
          description:
            'Contains the business information associated with the event.',
        },
        {
          title: 'Version',
          description:
            'Identifies the payload schema version so consumers can handle changes safely.',
        },
      ],
    },
    {
      title: 'Webhook security',
      content:
        'Webhook endpoints are exposed to requests originating from external systems, so authentication and request validation are critical. A common approach is to calculate or verify a cryptographic signature using a shared secret. The receiver should validate the signature before trusting the payload and should also protect against replay attacks and malformed requests.',
      highlights: [
        {
          title: 'Signature verification',
          description:
            'Confirms that the webhook payload was generated using the expected signing secret.',
        },
        {
          title: 'Shared secret',
          description:
            'A secret value known to the webhook provider and receiver and used to authenticate deliveries.',
        },
        {
          title: 'Replay protection',
          description:
            'Prevents an attacker from successfully resending an old valid webhook request.',
        },
        {
          title: 'Timestamp validation',
          description:
            'Checks whether a webhook was generated recently enough to be accepted.',
        },
        {
          title: 'HTTPS',
          description:
            'Encrypts webhook communication while the request travels across the network.',
        },
      ],
    },
    {
      title: 'Webhook retries',
      content:
        'Network failures, temporary outages, timeouts, and application errors can prevent a webhook from being delivered successfully. Webhook providers commonly retry failed deliveries. The receiving application must therefore assume that the same event may arrive more than once and should process it safely.',
      highlights: [
        {
          title: 'Retry policy',
          description:
            'Defines when and how failed webhook deliveries should be attempted again.',
        },
        {
          title: 'Exponential backoff',
          description:
            'Increasingly spaces retry attempts to reduce pressure on an unhealthy receiver.',
        },
        {
          title: 'Maximum attempts',
          description:
            'Limits how many times a failed delivery will be retried.',
        },
        {
          title: 'Dead-letter handling',
          description:
            'Preserves events that could not be successfully delivered after the retry policy is exhausted.',
        },
      ],
    },
    {
      title: 'Webhook idempotency',
      content:
        'Webhook delivery is generally not guaranteed to happen exactly once. A provider may deliver the same event multiple times when it is uncertain whether a previous attempt succeeded. The receiver should therefore use the event or delivery identifier to detect duplicates and ensure that processing the same event more than once does not create unintended side effects.',
      highlights: [
        {
          title: 'Idempotency',
          description:
            'Allows an operation to be safely repeated without producing unintended additional side effects.',
        },
        {
          title: 'Deduplication',
          description:
            'Detects webhook events that have already been processed.',
        },
        {
          title: 'Event ID',
          description:
            'Provides a stable identifier that can be stored and checked before processing.',
        },
        {
          title: 'Processed event store',
          description:
            'Keeps track of successfully handled event identifiers.',
        },
      ],
    },
    {
      title: 'Webhook processing architecture',
      content:
        'A production receiver should usually acknowledge a webhook quickly and move heavier processing to an asynchronous worker or queue. This prevents long-running business logic from causing provider timeouts and unnecessary retries.',
      highlights: [
        {
          title: 'Receiver',
          description:
            'Accepts and validates the incoming webhook request.',
        },
        {
          title: 'Queue',
          description:
            'Stores accepted events so processing can happen asynchronously.',
        },
        {
          title: 'Worker',
          description:
            'Consumes queued events and performs the required business operation.',
        },
        {
          title: 'Database',
          description:
            'Stores application state, processing status, and event history when required.',
        },
        {
          title: 'Acknowledgement',
          description:
            'Confirms receipt without requiring the entire business workflow to finish first.',
        },
      ],
    },
    {
      title: 'Webhooks and queues',
      content:
        'Queues can make webhook processing more reliable by separating event reception from business processing. The HTTP endpoint can validate and enqueue the event quickly while a worker processes it independently. This protects the receiver from slow downstream systems and provides a place to retry failed processing.',
    },
    {
      title: 'Webhooks vs APIs',
      content:
        'APIs generally allow a client to actively request data or operations, while webhooks allow a system to notify another system when an event occurs. They often work together. For example, a webhook can notify an application that an order changed, and the application can then use an API to retrieve additional information.',
      highlights: [
        {
          title: 'API',
          description:
            'Allows an application to actively request data or invoke an operation.',
        },
        {
          title: 'Webhook',
          description:
            'Allows a system to proactively notify another system about an event.',
        },
        {
          title: 'Pull',
          description:
            'The consumer actively requests information from the provider.',
        },
        {
          title: 'Push',
          description:
            'The provider sends information to the consumer when an event occurs.',
        },
      ],
    },
    {
      title: 'Webhook ordering',
      content:
        'Distributed systems cannot always guarantee that webhook events arrive in the same order in which they were created. A receiver should therefore avoid assuming perfect ordering unless the provider explicitly guarantees it. Event timestamps, sequence numbers, version numbers, or retrieving authoritative state through an API can help handle out-of-order events.',
      highlights: [
        {
          title: 'Event ordering',
          description:
            'The sequence in which events were originally created or processed.',
        },
        {
          title: 'Out-of-order delivery',
          description:
            'Occurs when a later event reaches the receiver before an earlier event.',
        },
        {
          title: 'Sequence number',
          description:
            'A value that can help determine the relative order of related events.',
        },
        {
          title: 'Authoritative state',
          description:
            'The latest trusted state of a resource used to resolve uncertainty about event history.',
        },
      ],
    },
    {
      title: 'Webhooks in real products',
      content:
        'Webhooks are widely useful for payment notifications, Git events, CI/CD automation, CRM integrations, communication platforms, e-commerce workflows, identity systems, subscription management, SaaS integrations, and AI application workflows. They are especially useful when an external system needs to trigger an action in your application.',
    },
    {
      title: 'Webhooks in production',
      content:
        'Production webhook systems require authentication, signature verification, idempotency, retry handling, observability, timeout management, queue-based processing, dead-letter handling, schema evolution, rate limiting, and operational monitoring. Teams should also maintain a way to inspect failed deliveries and replay events safely.',
      highlights: [
        {
          title: 'Delivery monitoring',
          description:
            'Tracks successful, failed, delayed, and retried webhook deliveries.',
        },
        {
          title: 'Replay',
          description:
            'Allows a failed event to be safely delivered again after the underlying problem is fixed.',
        },
        {
          title: 'Dead-letter queue',
          description:
            'Stores events that could not be processed successfully after normal retries.',
        },
        {
          title: 'Rate limiting',
          description:
            'Protects the receiving system from excessive webhook traffic.',
        },
        {
          title: 'Schema evolution',
          description:
            'Allows webhook payloads to change without unexpectedly breaking existing consumers.',
        },
      ],
    },
    {
      title: 'Common Webhook mistakes',
      content:
        'Common mistakes include processing the entire business workflow synchronously inside the webhook request, trusting payloads without signature verification, assuming exactly-once delivery, ignoring duplicate events, failing to handle retries, depending on event ordering, and providing no way to inspect or replay failed deliveries.',
      highlights: [
        {
          title: 'Slow endpoint',
          description:
            'Keeps the webhook request open while performing long-running business work.',
        },
        {
          title: 'No signature verification',
          description:
            'Accepts external requests without proving that they came from the expected provider.',
        },
        {
          title: 'No idempotency',
          description:
            'Allows duplicate deliveries to create duplicate business side effects.',
        },
        {
          title: 'Assumed ordering',
          description:
            'Incorrectly assumes events will always arrive in creation order.',
        },
        {
          title: 'No replay mechanism',
          description:
            'Leaves operators unable to safely recover events that failed processing.',
        },
      ],
    },
    {
      title: 'Explore Webhooks in EDDUU',
      content:
        'EDDUU connects Webhooks with REST APIs, GraphQL, gRPC, Event-Driven Architecture, Kafka, RabbitMQ, NATS, Authentication, Authorization, Security, Queues, Redis, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'graphql',
    'grpc',
    'event-driven-architecture',
    'kafka',
    'rabbitmq',
    'nats',
    'authentication',
    'authorization',
    'security',
    'queues',
    'redis',
    'observability',
  ],
}

export default webhooksKnowledge
