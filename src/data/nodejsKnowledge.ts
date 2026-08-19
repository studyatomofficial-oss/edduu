import type { KnowledgeDefinition } from './knowledge'

export const nodejsKnowledge: KnowledgeDefinition = {
  technologyId: 'nodejs',
  slug: 'nodejs',
  title: 'What is Node.js?',
  summary:
    'Node.js is a JavaScript runtime built on the V8 JavaScript engine that allows JavaScript to run outside the browser. It is widely used for APIs, backend services, real-time applications, automation, integrations, and AI application backends.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Node.js?',
      content:
        'Node.js is a runtime environment that executes JavaScript outside a web browser. It uses Google Chrome’s V8 JavaScript engine and provides APIs for working with networking, files, processes, streams, and other server-side capabilities.',
    },
    {
      title: 'Why do we use Node.js?',
      content:
        'Node.js allows teams to use JavaScript across frontend and backend systems. Its event-driven architecture and non-blocking I/O model make it particularly useful for APIs, network-heavy services, real-time applications, and applications that handle many concurrent connections.',
      highlights: [
        {
          title: 'JavaScript on the server',
          description:
            'Allows JavaScript to execute outside the browser.',
        },
        {
          title: 'Event-driven',
          description:
            'Applications can respond to events and asynchronous operations efficiently.',
        },
        {
          title: 'Non-blocking I/O',
          description:
            'Many input/output operations can proceed asynchronously without blocking the main JavaScript execution path.',
        },
        {
          title: 'Large ecosystem',
          description:
            'Node.js has a large package ecosystem through npm and related tooling.',
        },
      ],
    },
    {
      title: 'Node.js Runtime',
      content:
        'A runtime provides the environment required to execute a programming language. In Node.js, JavaScript code executes using the V8 engine together with Node-provided APIs for server-side operations.',
      highlights: [
        {
          title: 'Runtime',
          description:
            'An environment that executes application code.',
        },
        {
          title: 'V8',
          description:
            'Google’s JavaScript engine used by Node.js to execute JavaScript.',
        },
        {
          title: 'Node APIs',
          description:
            'APIs provided by Node.js for capabilities such as networking, files, processes, and streams.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture',
      content:
        'Node.js applications commonly use an event-driven programming model. Instead of waiting synchronously for every operation to finish, code can register callbacks or other handlers that execute when an operation completes or an event occurs.',
      highlights: [
        {
          title: 'Event',
          description:
            'A signal that something has happened or completed.',
        },
        {
          title: 'Event handler',
          description:
            'Logic executed in response to an event.',
        },
        {
          title: 'Asynchronous operation',
          description:
            'An operation whose completion does not require the current execution flow to wait synchronously.',
        },
      ],
    },
    {
      title: 'Non-Blocking I/O',
      content:
        'Input/output operations such as network calls and file access can take significant time. Node.js commonly handles these operations asynchronously so the JavaScript execution thread can continue working on other tasks while the operation is in progress.',
      highlights: [
        {
          title: 'I/O',
          description:
            'Input/output operations such as reading files or communicating over a network.',
        },
        {
          title: 'Blocking',
          description:
            'An operation that prevents the current execution path from continuing until it completes.',
        },
        {
          title: 'Non-blocking',
          description:
            'An operation that allows other work to proceed while the operation is being completed asynchronously.',
        },
      ],
    },
    {
      title: 'Event Loop',
      content:
        'The event loop is a core part of Node.js asynchronous execution. It coordinates callbacks and other scheduled work after asynchronous operations become ready to be processed.',
      highlights: [
        {
          title: 'Event loop',
          description:
            'A mechanism that coordinates asynchronous callbacks and scheduled JavaScript work.',
        },
        {
          title: 'Callback queue',
          description:
            'A conceptual queue containing work that is ready to be processed by the JavaScript execution flow.',
        },
        {
          title: 'Concurrency',
          description:
            'The ability to make progress on multiple operations over overlapping periods of time.',
        },
      ],
    },
    {
      title: 'Single JavaScript Thread',
      content:
        'Node.js JavaScript execution is primarily organized around a single main JavaScript thread. This does not mean Node.js can perform only one operation in the entire system. The runtime and operating system can handle asynchronous I/O and other work while JavaScript continues processing available events.',
      highlights: [
        {
          title: 'Main thread',
          description:
            'The primary thread responsible for executing JavaScript application code.',
        },
        {
          title: 'Concurrency',
          description:
            'Multiple operations can be in progress even though JavaScript execution is primarily handled by one main thread.',
        },
        {
          title: 'Parallelism',
          description:
            'Different computations can execute simultaneously on multiple processing resources.',
        },
      ],
    },
    {
      title: 'Promises and async/await',
      content:
        'Modern Node.js applications commonly use Promises and async/await for asynchronous programming. These constructs make asynchronous workflows easier to read and compose than deeply nested callbacks.',
      highlights: [
        {
          title: 'Promise',
          description:
            'An object representing the eventual completion or failure of an asynchronous operation.',
        },
        {
          title: 'async',
          description:
            'Marks a function as asynchronous and allows it to return a Promise.',
        },
        {
          title: 'await',
          description:
            'Waits for a Promise result within an async function without requiring traditional callback nesting.',
        },
      ],
    },
    {
      title: 'npm',
      content:
        'npm is a package manager and ecosystem commonly used with Node.js. It allows teams to install, update, manage, and publish reusable JavaScript and TypeScript packages.',
      highlights: [
        {
          title: 'Package',
          description:
            'A reusable unit of software distributed through a package ecosystem.',
        },
        {
          title: 'package.json',
          description:
            'A project manifest containing metadata, scripts, dependencies, and other configuration.',
        },
        {
          title: 'Dependency',
          description:
            'An external package required by an application.',
        },
      ],
    },
    {
      title: 'package.json',
      content:
        'The package.json file is central to many Node.js projects. It can define the project name, version, scripts, dependencies, development dependencies, module configuration, and other project metadata.',
      highlights: [
        {
          title: 'scripts',
          description:
            'Named commands that can be executed through the package manager.',
        },
        {
          title: 'dependencies',
          description:
            'Packages required by the application at runtime.',
        },
        {
          title: 'devDependencies',
          description:
            'Packages primarily required during development, testing, or build processes.',
        },
      ],
    },
    {
      title: 'Node.js Modules',
      content:
        'Node.js supports modular application design. Modern applications commonly use ECMAScript modules with import and export syntax, while CommonJS using require and module.exports remains important in the Node.js ecosystem.',
      highlights: [
        {
          title: 'ES Modules',
          description:
            'The JavaScript standard module system using import and export.',
        },
        {
          title: 'CommonJS',
          description:
            'A traditional Node.js module system using require and module.exports.',
        },
        {
          title: 'Module boundary',
          description:
            'A boundary that defines what functionality a module exposes to other modules.',
        },
      ],
    },
    {
      title: 'Node.js File System',
      content:
        'Node.js provides file-system APIs for reading, writing, modifying, and managing files and directories. Applications should consider asynchronous APIs when file operations could affect request throughput.',
      highlights: [
        {
          title: 'File system API',
          description:
            'Node.js APIs for interacting with files and directories.',
        },
        {
          title: 'Read operation',
          description:
            'Retrieving data from a file.',
        },
        {
          title: 'Write operation',
          description:
            'Creating or updating file contents.',
        },
      ],
    },
    {
      title: 'Node.js HTTP Server',
      content:
        'Node.js includes HTTP functionality that can be used to create web servers and APIs directly. Production applications often use frameworks such as Express.js or Fastify to provide higher-level routing, middleware, validation, and application structure.',
      highlights: [
        {
          title: 'HTTP server',
          description:
            'A server that receives and responds to HTTP requests.',
        },
        {
          title: 'Request',
          description:
            'A message sent by a client asking a server to perform an operation or return data.',
        },
        {
          title: 'Response',
          description:
            'The server’s message returned to the client.',
        },
      ],
    },
    {
      title: 'Node.js and Express.js',
      content:
        'Express.js is a lightweight Node.js web framework commonly used to build APIs and web servers. It adds routing and middleware patterns that make application development more structured.',
      highlights: [
        {
          title: 'Express',
          description:
            'A Node.js framework for building web servers and APIs.',
        },
        {
          title: 'Middleware',
          description:
            'Functions that participate in processing an HTTP request and response.',
        },
        {
          title: 'Route',
          description:
            'A mapping between an HTTP method and URL pattern and the application logic handling that request.',
        },
      ],
    },
    {
      title: 'Node.js and REST APIs',
      content:
        'Node.js is widely used to build REST APIs. A typical service receives an HTTP request, validates inputs, authenticates the caller, executes business logic, interacts with databases or external services, and returns an HTTP response.',
      highlights: [
        {
          title: 'Controller',
          description:
            'Application logic responsible for handling an incoming API request and producing a response.',
        },
        {
          title: 'Service layer',
          description:
            'A layer containing reusable business operations and application logic.',
        },
        {
          title: 'API contract',
          description:
            'The agreed structure and behavior of requests and responses between systems.',
        },
      ],
    },
    {
      title: 'Node.js and Databases',
      content:
        'Node.js applications commonly interact with relational and NoSQL databases through drivers, query builders, or object-relational/object-document mapping libraries. Database operations should be treated as I/O and designed with connection management, error handling, and transaction requirements in mind.',
      highlights: [
        {
          title: 'Database driver',
          description:
            'A library that allows application code to communicate with a database.',
        },
        {
          title: 'Connection pool',
          description:
            'A managed collection of reusable database connections.',
        },
        {
          title: 'Transaction',
          description:
            'A group of database operations that should satisfy defined consistency guarantees.',
        },
      ],
    },
    {
      title: 'Node.js and WebSockets',
      content:
        'Node.js is well suited to applications that maintain many network connections, making it a common choice for WebSocket-based systems such as chat applications, live dashboards, collaboration tools, and real-time notifications.',
      highlights: [
        {
          title: 'WebSocket',
          description:
            'A persistent bidirectional communication channel between client and server.',
        },
        {
          title: 'Connection',
          description:
            'An active communication relationship between a client and server.',
        },
        {
          title: 'Real-time update',
          description:
            'Data delivered to clients as changes occur rather than only after a new request.',
        },
      ],
    },
    {
      title: 'Streams',
      content:
        'Streams allow Node.js applications to process data incrementally rather than loading an entire dataset into memory at once. They are useful for files, network traffic, uploads, downloads, and large data processing workflows.',
      highlights: [
        {
          title: 'Readable stream',
          description:
            'A stream from which an application can consume data incrementally.',
        },
        {
          title: 'Writable stream',
          description:
            'A stream to which an application can write data incrementally.',
        },
        {
          title: 'Backpressure',
          description:
            'A mechanism for preventing a fast producer from overwhelming a slower consumer.',
        },
      ],
    },
    {
      title: 'Buffers',
      content:
        'Buffers represent binary data in Node.js. They are important when working with files, network protocols, images, audio, video, cryptography, and other non-text data.',
      highlights: [
        {
          title: 'Buffer',
          description:
            'A representation of raw binary data in Node.js.',
        },
        {
          title: 'Binary data',
          description:
            'Data represented as bytes rather than primarily as human-readable text.',
        },
      ],
    },
    {
      title: 'Environment Variables',
      content:
        'Node.js applications frequently use environment variables for configuration such as database URLs, service endpoints, feature flags, and environment-specific settings. Sensitive secrets should be stored through secure secret-management systems rather than committed to source control.',
      highlights: [
        {
          title: 'Environment variable',
          description:
            'A configuration value supplied to a running process through its environment.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information such as an API key, password, or credential.',
        },
        {
          title: 'Secret management',
          description:
            'A secure mechanism for storing, accessing, rotating, and controlling sensitive credentials.',
        },
      ],
    },
    {
      title: 'Node.js Error Handling',
      content:
        'Production Node.js services need explicit strategies for synchronous errors, rejected Promises, network failures, invalid input, dependency failures, and unexpected process-level errors. APIs should return appropriate responses while internal systems should capture enough context for diagnosis.',
      highlights: [
        {
          title: 'Error propagation',
          description:
            'The movement of an error from the operation where it occurs to code responsible for handling it.',
        },
        {
          title: 'Promise rejection',
          description:
            'A Promise state indicating that an asynchronous operation failed.',
        },
        {
          title: 'Graceful failure',
          description:
            'Handling failures in a controlled way rather than allowing a system to fail unpredictably.',
        },
      ],
    },
    {
      title: 'Node.js Security',
      content:
        'Node.js applications require the same security discipline as other backend systems. Important areas include input validation, authentication, authorization, dependency security, rate limiting, secure headers, secret management, safe logging, and protection against injection attacks.',
      highlights: [
        {
          title: 'Input validation',
          description:
            'Checking incoming data against expected structure and business rules.',
        },
        {
          title: 'Rate limiting',
          description:
            'Restricting the frequency of requests to reduce abuse and protect service capacity.',
        },
        {
          title: 'Dependency security',
          description:
            'Identifying and managing vulnerabilities in third-party packages.',
        },
        {
          title: 'Secure logging',
          description:
            'Logging useful diagnostic information without exposing passwords, tokens, or other sensitive data.',
        },
      ],
    },
    {
      title: 'Node.js Scalability',
      content:
        'Node.js services can scale horizontally by running multiple application instances behind a load balancer. Because JavaScript execution is primarily single-threaded per process, CPU-intensive workloads may require worker threads, separate services, or other architectural approaches.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Adding more service instances to handle increased workload.',
        },
        {
          title: 'Load balancer',
          description:
            'A component that distributes incoming requests across available service instances.',
        },
        {
          title: 'Worker thread',
          description:
            'A Node.js mechanism for executing JavaScript work on another thread when appropriate.',
        },
      ],
    },
    {
      title: 'CPU-Bound vs I/O-Bound Work',
      content:
        'Node.js is particularly effective for I/O-bound workloads because asynchronous I/O allows the process to continue handling other work while waiting for external operations. CPU-heavy work can block the main JavaScript execution path if not designed carefully.',
      highlights: [
        {
          title: 'I/O-bound',
          description:
            'A workload where waiting for external operations such as networks or databases dominates execution time.',
        },
        {
          title: 'CPU-bound',
          description:
            'A workload where computation consumes most of the processing time.',
        },
        {
          title: 'Event-loop blocking',
          description:
            'Long-running synchronous work that prevents the event loop from processing other JavaScript tasks efficiently.',
        },
      ],
    },
    {
      title: 'Node.js and AI Applications',
      content:
        'Node.js is widely used as a backend layer for AI products. It can orchestrate LLM APIs, AI agent tools, vector databases, authentication, streaming responses, file uploads, queues, and frontend communication.',
      highlights: [
        {
          title: 'AI orchestration',
          description:
            'Coordinating calls between an application and multiple AI or external services.',
        },
        {
          title: 'Streaming AI',
          description:
            'Delivering generated AI output incrementally to the client.',
        },
        {
          title: 'Tool execution',
          description:
            'Allowing an AI workflow to invoke controlled backend operations.',
        },
        {
          title: 'AI gateway',
          description:
            'A backend layer that manages communication between product clients and AI providers.',
        },
      ],
    },
    {
      title: 'Node.js for AI Voice Systems',
      content:
        'Node.js can act as an orchestration layer in AI voice applications by handling telephony webhooks, session state, streaming events, provider integrations, call metadata, authentication, and communication with AI services.',
      highlights: [
        {
          title: 'Webhook handler',
          description:
            'A backend endpoint that receives an event from a telephony or external provider.',
        },
        {
          title: 'Session state',
          description:
            'Information required to understand the current state of an active interaction.',
        },
        {
          title: 'Provider integration',
          description:
            'Application code that communicates with external AI, telephony, speech, or business systems.',
        },
      ],
    },
    {
      title: 'Node.js and Queues',
      content:
        'Node.js services can publish and consume messages through systems such as Kafka, RabbitMQ, or other messaging platforms. Queues help separate workloads, absorb traffic spikes, and support asynchronous processing.',
      highlights: [
        {
          title: 'Producer',
          description:
            'A component that publishes messages to a messaging system.',
        },
        {
          title: 'Consumer',
          description:
            'A component that receives and processes messages.',
        },
        {
          title: 'Asynchronous processing',
          description:
            'Performing work separately from the original request so the requester does not need to wait for completion.',
        },
      ],
    },
    {
      title: 'Node.js Observability',
      content:
        'Production Node.js systems should provide logs, metrics, traces, health checks, and error monitoring. Observability helps engineering teams understand system behavior and diagnose incidents.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Structured records describing application events.',
        },
        {
          title: 'Metrics',
          description:
            'Numerical measurements such as request rate, latency, CPU usage, and error rate.',
        },
        {
          title: 'Tracing',
          description:
            'Tracking a request across multiple services and operations.',
        },
        {
          title: 'Health check',
          description:
            'An endpoint or mechanism used to determine whether a service is functioning sufficiently for traffic.',
        },
      ],
    },
    {
      title: 'Node.js Testing',
      content:
        'Node.js applications should use multiple testing levels including unit tests, integration tests, API tests, and end-to-end tests. Tests should cover business logic as well as important failure and integration scenarios.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small piece of application logic in isolation.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interaction between application components or external dependencies.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete user or system workflow.',
        },
      ],
    },
    {
      title: 'Node.js Deployment',
      content:
        'Node.js services can be deployed using virtual machines, containers, managed application platforms, serverless environments, or Kubernetes. Production deployment should include configuration management, health checks, monitoring, scaling, and rollback capabilities.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged application environment containing the software and dependencies required to run it.',
        },
        {
          title: 'Process manager',
          description:
            'A mechanism used to manage long-running application processes.',
        },
        {
          title: 'Rolling deployment',
          description:
            'Replacing service instances gradually so the application can continue serving traffic during deployment.',
        },
      ],
    },
    {
      title: 'Node.js Architecture',
      content:
        'A production Node.js backend commonly separates HTTP routing, validation, authentication, business logic, data access, external integrations, background jobs, and observability. The exact structure should reflect product complexity rather than follow a rigid folder pattern.',
      highlights: [
        {
          title: 'API layer',
          description:
            'Handles communication between external clients and the application.',
        },
        {
          title: 'Business layer',
          description:
            'Contains product and domain rules.',
        },
        {
          title: 'Data layer',
          description:
            'Handles persistence and data access.',
        },
        {
          title: 'Integration layer',
          description:
            'Encapsulates communication with external providers and services.',
        },
      ],
    },
    {
      title: 'Common Node.js Mistakes',
      content:
        'Common mistakes include blocking the event loop with CPU-heavy synchronous work, ignoring Promise rejections, creating uncontrolled database connections, storing secrets in source code, using unvalidated input, relying on frontend authorization, logging sensitive credentials, and adding excessive dependencies without security review.',
      highlights: [
        {
          title: 'Event-loop blocking',
          description:
            'Long synchronous operations that prevent the process from efficiently handling other work.',
        },
        {
          title: 'Connection leaks',
          description:
            'Failure to properly manage reusable connections to databases or external services.',
        },
        {
          title: 'Secret exposure',
          description:
            'Accidentally exposing credentials through source code, logs, or client-side bundles.',
        },
      ],
    },
    {
      title: 'Node.js for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the most important Node.js concepts are runtime behavior, asynchronous architecture, API design, scalability, service boundaries, observability, security, dependency management, deployment, and integration patterns. You do not need to become a Node.js language specialist to make strong technical delivery decisions.',
    },
    {
      title: 'Explore Node.js in EDDUU',
      content:
        'EDDUU connects Node.js with JavaScript, TypeScript, Express.js, React, Next.js, REST APIs, GraphQL, WebSockets, Webhooks, Kafka, RabbitMQ, authentication, security, observability, cloud deployment, and AI applications.',
    },
  ],
  relatedTechnologyIds: [
    'javascript',
    'typescript',
    'expressjs',
    'react',
    'nextjs',
    'full-stack',
    'rest-apis',
    'graphql',
    'websockets',
    'webhooks',
    'kafka',
    'rabbitmq',
  ],
}

export default nodejsKnowledge
