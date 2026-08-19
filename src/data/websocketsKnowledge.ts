import type { KnowledgeDefinition } from './knowledge'

export const websocketsKnowledge: KnowledgeDefinition = {
  technologyId: 'websockets',
  slug: 'websockets',
  title: 'What are WebSockets?',
  summary:
    'WebSockets provide a persistent, two-way communication channel between a client and server, allowing both sides to send messages in real time over a single connection.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What are WebSockets?',
      content:
        'WebSockets are a communication technology that allows a client and server to maintain an open connection and exchange messages in both directions. Unlike a traditional request-response interaction where the client usually starts each request, a WebSocket connection allows the server to send information to the client whenever new information becomes available.',
    },
    {
      title: 'Why do we need WebSockets?',
      content:
        'Some applications need information to appear immediately when something changes. Examples include chat applications, live notifications, collaborative editing, multiplayer games, trading dashboards, monitoring systems, and real-time operational interfaces. Repeatedly polling an HTTP API can create unnecessary requests and introduce delays. WebSockets provide a persistent channel for continuous communication.',
    },
    {
      title: 'How do WebSockets work?',
      content:
        'A WebSocket connection normally begins with an HTTP request that asks to upgrade the connection to the WebSocket protocol. If the server accepts the upgrade, the connection remains open. After that, the client and server can exchange messages independently over the same connection until one side closes it.',
    },
    {
      title: 'The WebSocket lifecycle',
      content:
        'A WebSocket connection moves through several important stages from the initial connection to eventual closure.',
      highlights: [
        {
          title: 'Connection request',
          description:
            'The client starts communication by requesting a WebSocket upgrade from an HTTP connection.',
        },
        {
          title: 'Handshake',
          description:
            'The client and server negotiate the protocol upgrade before establishing the persistent connection.',
        },
        {
          title: 'Open connection',
          description:
            'The WebSocket remains active so both sides can exchange messages.',
        },
        {
          title: 'Message exchange',
          description:
            'Client and server can independently send messages over the established connection.',
        },
        {
          title: 'Close',
          description:
            'Either side can intentionally close the connection or the connection can terminate because of a failure.',
        },
      ],
    },
    {
      title: 'Important WebSocket concepts',
      content:
        'Understanding the basic WebSocket concepts helps explain how real-time applications manage long-lived connections.',
      highlights: [
        {
          title: 'Persistent connection',
          description:
            'Keeps a communication channel open instead of creating a new request for every message.',
        },
        {
          title: 'Full-duplex communication',
          description:
            'Allows the client and server to send messages independently in both directions.',
        },
        {
          title: 'Message',
          description:
            'A unit of information exchanged between the connected client and server.',
        },
        {
          title: 'Connection state',
          description:
            'Represents whether a WebSocket is connecting, open, closing, or closed.',
        },
        {
          title: 'Close code',
          description:
            'Communicates why a WebSocket connection was closed.',
        },
        {
          title: 'Heartbeat',
          description:
            'A periodic mechanism used to detect stale or broken connections.',
        },
      ],
    },
    {
      title: 'WebSockets vs REST APIs',
      content:
        'REST APIs are generally designed around independent HTTP requests and responses, while WebSockets maintain a persistent connection for continuous two-way communication. REST is often simpler for standard CRUD operations, while WebSockets are useful when the server needs to push updates to connected clients without waiting for a new request.',
      highlights: [
        {
          title: 'REST',
          description:
            'Uses independent HTTP requests and responses for resource-oriented communication.',
        },
        {
          title: 'WebSocket',
          description:
            'Maintains a persistent connection for bidirectional communication.',
        },
        {
          title: 'Polling',
          description:
            'The client repeatedly asks the server whether new information is available.',
        },
        {
          title: 'Server push',
          description:
            'The server sends an update to a connected client when new information becomes available.',
        },
      ],
    },
    {
      title: 'WebSockets vs Server-Sent Events',
      content:
        'WebSockets and Server-Sent Events can both support real-time updates, but they provide different communication models. WebSockets support two-way communication, while Server-Sent Events are primarily designed for server-to-client event streams over HTTP. The appropriate choice depends on whether the client also needs to send continuous messages over the same real-time channel.',
      highlights: [
        {
          title: 'WebSockets',
          description:
            'Supports bidirectional communication between client and server.',
        },
        {
          title: 'Server-Sent Events',
          description:
            'Provides a primarily server-to-client streaming model over HTTP.',
        },
        {
          title: 'Bidirectional',
          description:
            'Both sides can independently send messages during the same connection.',
        },
        {
          title: 'Event stream',
          description:
            'A sequence of server-generated events delivered to a connected client.',
        },
      ],
    },
    {
      title: 'WebSockets and real-time applications',
      content:
        'WebSockets are useful when application state changes frequently and clients need updates with low delay. A chat system can deliver new messages immediately, a monitoring dashboard can display changing metrics, and a collaborative application can distribute edits as users make them.',
      highlights: [
        {
          title: 'Chat',
          description:
            'Delivers messages between participants without requiring repeated page refreshes or polling.',
        },
        {
          title: 'Live notifications',
          description:
            'Pushes events such as alerts, status changes, or new activity to connected users.',
        },
        {
          title: 'Collaboration',
          description:
            'Distributes user actions and state changes between multiple participants.',
        },
        {
          title: 'Live dashboard',
          description:
            'Streams changing operational, financial, or business information to connected clients.',
        },
        {
          title: 'Multiplayer',
          description:
            'Allows connected players to exchange state changes with low communication delay.',
        },
      ],
    },
    {
      title: 'WebSocket message design',
      content:
        'Real-time systems should define a predictable message contract. Messages commonly contain an event type and a payload so that clients know what happened and how to process it. A consistent message format becomes increasingly important as the number of events and clients grows.',
      highlights: [
        {
          title: 'Event type',
          description:
            'Identifies what happened, such as message.created, order.updated, or user.connected.',
        },
        {
          title: 'Payload',
          description:
            'Contains the data associated with the event.',
        },
        {
          title: 'Message ID',
          description:
            'Uniquely identifies a message and can help with deduplication or troubleshooting.',
        },
        {
          title: 'Timestamp',
          description:
            'Records when an event was produced or processed.',
        },
        {
          title: 'Schema',
          description:
            'Defines the expected structure and meaning of messages exchanged by the system.',
        },
      ],
    },
    {
      title: 'WebSockets and authentication',
      content:
        'Real-time connections still need authentication and authorization. A server should establish who the client represents and determine which events or actions the client is allowed to access. Authentication may involve cookies, tokens, or another application-specific mechanism depending on the architecture.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity associated with the WebSocket connection.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which channels, events, rooms, or actions the connected client may access.',
        },
        {
          title: 'Session',
          description:
            'Represents the authenticated context associated with an active connection.',
        },
        {
          title: 'Least privilege',
          description:
            'Limits each connection to only the real-time capabilities it requires.',
        },
      ],
    },
    {
      title: 'WebSocket rooms and channels',
      content:
        'Applications often need to send an event only to a subset of connected clients. Rooms, channels, topics, or subscriptions can logically group connections. For example, users viewing the same project might subscribe to a project-specific channel rather than receiving events for every project in the system.',
      highlights: [
        {
          title: 'Room',
          description:
            'A logical group of connections that should receive related events.',
        },
        {
          title: 'Channel',
          description:
            'A named communication stream used to organize subscriptions or messages.',
        },
        {
          title: 'Subscription',
          description:
            'Represents a client request to receive a particular category of real-time events.',
        },
        {
          title: 'Broadcast',
          description:
            'Sends an event to multiple connected clients that match a defined audience.',
        },
      ],
    },
    {
      title: 'WebSockets at scale',
      content:
        'Scaling WebSockets is different from scaling ordinary stateless HTTP requests because each connected client consumes a long-lived connection and associated server resources. When multiple application instances are used, a connection may exist on one instance while an event is generated by another. Shared messaging infrastructure or connection-aware routing can therefore become necessary.',
      highlights: [
        {
          title: 'Connection count',
          description:
            'Measures how many persistent client connections the system is maintaining.',
        },
        {
          title: 'Connection affinity',
          description:
            'Routes a client consistently to an appropriate server instance when required by the architecture.',
        },
        {
          title: 'Pub/Sub',
          description:
            'Allows application instances to distribute events between servers that maintain different client connections.',
        },
        {
          title: 'Backpressure',
          description:
            'Controls what happens when messages are produced faster than a client or server can process them.',
        },
        {
          title: 'Connection limits',
          description:
            'Protects infrastructure by limiting how many connections or resources a client or server can consume.',
        },
      ],
    },
    {
      title: 'WebSockets and Redis',
      content:
        'Redis can be used as shared infrastructure in distributed WebSocket systems. For example, multiple WebSocket servers can publish events through a shared Redis-based messaging mechanism so that an event generated on one server can reach clients connected to another server. Redis does not replace the WebSocket connection; it helps coordinate events between application instances.',
    },
    {
      title: 'WebSocket reliability',
      content:
        'Network connections can fail because of mobile networks, proxies, server restarts, load balancers, or temporary connectivity problems. Real-time applications therefore need reconnect behavior, heartbeat mechanisms, message handling, and sometimes event replay or synchronization so a client can recover after losing a connection.',
      highlights: [
        {
          title: 'Reconnect',
          description:
            'Attempts to establish a new connection after the existing connection is lost.',
        },
        {
          title: 'Exponential backoff',
          description:
            'Gradually increases the delay between reconnect attempts to avoid overwhelming the server.',
        },
        {
          title: 'Heartbeat',
          description:
            'Helps detect connections that appear open but are no longer functioning correctly.',
        },
        {
          title: 'Event replay',
          description:
            'Allows a client to receive missed events after reconnecting when the system supports durable event history.',
        },
        {
          title: 'State synchronization',
          description:
            'Reconciles the client with the authoritative server state after a connection interruption.',
        },
      ],
    },
    {
      title: 'WebSockets in real products',
      content:
        'WebSockets can support messaging platforms, collaboration tools, trading interfaces, operational dashboards, online games, customer support systems, live tracking, notification systems, and AI applications that stream responses or events to users.',
    },
    {
      title: 'WebSockets in production',
      content:
        'Production WebSocket systems require careful attention to connection limits, authentication, authorization, load balancing, reconnect behavior, heartbeat handling, message ordering, backpressure, observability, graceful shutdown, and horizontal scaling. Teams should monitor both connection health and application-level event delivery.',
      highlights: [
        {
          title: 'Graceful shutdown',
          description:
            'Closes or migrates active connections safely when a server instance is being stopped.',
        },
        {
          title: 'Connection monitoring',
          description:
            'Tracks active connections, disconnects, failures, and connection duration.',
        },
        {
          title: 'Message latency',
          description:
            'Measures the time between an event being produced and reaching the intended client.',
        },
        {
          title: 'Backpressure control',
          description:
            'Prevents slow consumers from exhausting server resources.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adds additional server instances while maintaining correct event delivery across connections.',
        },
      ],
    },
    {
      title: 'Common WebSocket mistakes',
      content:
        'Common mistakes include treating WebSockets as a replacement for every HTTP API, failing to authenticate connections, allowing unlimited connections, ignoring reconnect behavior, sending unbounded message streams, assuming messages are always delivered exactly once, and scaling servers without considering how events reach clients connected to different instances.',
      highlights: [
        {
          title: 'WebSocket everywhere',
          description:
            'Uses persistent connections for operations that would be simpler and more appropriate with normal HTTP requests.',
        },
        {
          title: 'No reconnect strategy',
          description:
            'Leaves clients disconnected after temporary network or server failures.',
        },
        {
          title: 'Unlimited connections',
          description:
            'Allows connection growth to consume server memory, file descriptors, CPU, or network resources.',
        },
        {
          title: 'Unbounded queues',
          description:
            'Allows slow consumers to accumulate messages until system resources are exhausted.',
        },
        {
          title: 'No cross-instance strategy',
          description:
            'Fails to deliver events correctly when clients are connected to different application servers.',
        },
      ],
    },
    {
      title: 'Explore WebSockets in EDDUU',
      content:
        'EDDUU connects WebSockets with REST APIs, GraphQL, Webhooks, Redis, Kafka, RabbitMQ, Microservices, Load Balancing, Authentication, Authorization, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'graphql',
    'webhooks',
    'redis',
    'kafka',
    'rabbitmq',
    'microservices',
    'load-balancing',
    'authentication',
    'authorization',
    'observability',
  ],
}

export default websocketsKnowledge
