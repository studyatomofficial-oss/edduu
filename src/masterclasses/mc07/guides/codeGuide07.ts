import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide07: GuideDefinition = {
  type: 'code',
  label: 'Code Guide',
  title: 'Implement a Production-Ready Architecture Step by Step',
  objective:
    'Translate the MC07 architecture decisions into a realistic education-platform implementation using APIs, services, databases, caching, security, resilience, observability and deployment patterns.',

  steps: [
    {
      id: 'project',
      step: 1,
      title: 'Create the application boundary',
      action:
        'Create a small backend application that will become the foundation for the learning platform.',
      command:
        'mkdir architecture-platform; cd architecture-platform; python -m venv .venv',
      details: [
        'Create a dedicated application directory.',
        'Keep application code separate from deployment and infrastructure configuration.',
        'Create an isolated Python environment for backend dependencies.',
      ],
      explanation:
        'The first implementation boundary is the application itself. A clean project boundary makes later responsibilities easier to separate and operate.',
    },

    {
      id: 'api',
      step: 2,
      title: 'Create the API boundary',
      action:
        'Expose a course endpoint through a FastAPI application instead of allowing clients to access internal services directly.',
      command:
        'pip install fastapi uvicorn',
      details: [
        'Create an API layer that receives HTTP requests.',
        'Keep business logic outside the route handler.',
        'Return a stable response contract to the client.',
      ],
      explanation:
        'The API is the front door of the application. It should expose business capabilities without exposing internal implementation details.',
    },

    {
      id: 'api-code',
      step: 3,
      title: 'Implement the first API endpoint',
      action:
        'Create a simple course endpoint and keep the route thin.',
      command:
        'uvicorn app.main:app --reload',
      details: [
        'Create app/main.py.',
        'Define a GET endpoint for courses.',
        'Move course retrieval into a service rather than putting business logic directly into the route.',
      ],
      explanation:
        'A thin API layer makes the architecture easier to test and change because HTTP concerns remain separate from business rules.',
    },

    {
      id: 'service',
      step: 4,
      title: 'Separate application responsibilities',
      action:
        'Introduce a service layer responsible for course-related business operations.',
      details: [
        'Create CourseService for course use cases.',
        'Keep HTTP-specific concerns inside the API layer.',
        'Keep persistence concerns inside a repository or data-access layer.',
        'Do not create a large service containing unrelated business capabilities.',
      ],
      explanation:
        'A useful separation is API â†’ Service â†’ Repository. Each layer has a clear responsibility and can evolve independently.',
    },

    {
      id: 'service-code',
      step: 5,
      title: 'Implement the service boundary',
      action:
        'Move course retrieval behind a service interface.',
      details: [
        'The API asks the service for courses.',
        'The service decides which business operation is required.',
        'The repository handles persistence.',
      ],
      explanation:
        'For example, the request path becomes GET /api/courses â†’ CourseService.list_courses() â†’ CourseRepository.list_courses().',
    },

    {
      id: 'data-model',
      step: 6,
      title: 'Define the data model',
      action:
        'Represent the core learning-platform entities in a relational database.',
      command:
        'CREATE TABLE courses (id BIGSERIAL PRIMARY KEY, title TEXT NOT NULL, description TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW());',
      details: [
        'Give every course a stable identifier.',
        'Require the title because it is essential business data.',
        'Store creation time for operational and reporting needs.',
        'Keep the database schema aligned with the business responsibility of the course component.',
      ],
      explanation:
        'The database should represent important business state explicitly. A relational model is useful when entities have clear relationships and transactional requirements.',
    },

    {
      id: 'repository',
      step: 7,
      title: 'Implement the repository boundary',
      action:
        'Keep database access inside a repository instead of embedding SQL directly in API handlers.',
      details: [
        'CourseRepository owns course persistence operations.',
        'The service should not need to know connection details.',
        'The API should not contain database queries.',
      ],
      explanation:
        'Separating persistence from business logic reduces coupling and makes it easier to replace or optimize the storage implementation later.',
    },

    {
      id: 'transaction',
      step: 8,
      title: 'Protect transactional operations',
      action:
        'Use a transaction when a business operation requires multiple related database changes to succeed together.',
      command:
        "BEGIN; INSERT INTO enrollments(student_id, course_id) VALUES (101, 20); INSERT INTO enrollment_events(enrollment_id, event_type) VALUES (CURRVAL(''enrollments_id_seq''), ''created''); COMMIT;",
      details: [
        'Start the transaction before related writes.',
        'Commit only when all required operations succeed.',
        'Roll back when a critical operation fails.',
        'Do not use distributed transactions unless the business requirement actually requires them.',
      ],
      explanation:
        'A transaction protects business consistency. If enrollment creation and its required event record must remain consistent, they should not be allowed to partially succeed.',
    },

    {
      id: 'cache',
      step: 9,
      title: 'Add caching for read-heavy data',
      action:
        'Cache frequently requested course information when database reads become a measurable bottleneck.',
      command:
        'pip install redis',
      details: [
        'Use Redis for short-lived cached course responses.',
        'Read from cache before querying the database.',
        'Write the database result into cache after a cache miss.',
        'Define a TTL so stale information does not remain indefinitely.',
      ],
      explanation:
        'A common request path is API â†’ Service â†’ Redis. If Redis misses, the service queries PostgreSQL and then populates the cache.',
    },

    {
      id: 'cache-code',
      step: 10,
      title: 'Implement cache-aside behaviour',
      action:
        'Use the cache-aside pattern for course reads.',
      details: [
        'Attempt the Redis lookup first.',
        'On a miss, read from PostgreSQL.',
        'Store the result in Redis with an expiration time.',
        'Return the database result to the caller.',
      ],
      explanation:
        'Cache-aside keeps the database as the source of truth while using Redis to reduce repeated reads.',
    },

    {
      id: 'async',
      step: 11,
      title: 'Move background work out of the request path',
      action:
        'Separate non-critical work such as notification or analytics processing from the user-facing request.',
      details: [
        'The enrollment API should not wait for every downstream notification.',
        'Publish a background job or event after the business operation succeeds.',
        'Give workers responsibility for background processing.',
        'Make retryable jobs idempotent where duplicate delivery is possible.',
      ],
      explanation:
        'The user should receive a response as soon as the critical business operation completes. Secondary work can continue asynchronously.',
    },

    {
      id: 'auth',
      step: 12,
      title: 'Implement authentication',
      action:
        'Verify the identity of the caller before allowing protected learning-platform operations.',
      details: [
        'Accept a signed access token from the client.',
        'Validate the token before executing protected business operations.',
        'Reject expired or invalid credentials.',
        'Do not trust user identity fields supplied directly by the client.',
      ],
      explanation:
        'Authentication answers who the caller is. For example, a protected course endpoint can require a valid bearer token before continuing.',
    },

    {
      id: 'authorization',
      step: 13,
      title: 'Implement authorization',
      action:
        'Check whether an authenticated actor has permission to perform the requested operation.',
      details: [
        'A student may read courses available to students.',
        'An instructor may manage courses they own.',
        'An administrator may have broader management permissions.',
        'Perform authorization checks on the backend.',
      ],
      explanation:
        'Authentication identifies the actor. Authorization decides whether that actor is allowed to perform the specific action.',
    },

    {
      id: 'validation',
      step: 14,
      title: 'Validate API input',
      action:
        'Use explicit request models to reject invalid input before business logic runs.',
      command:
        'pip install pydantic',
      details: [
        'Define required fields.',
        'Validate data types and acceptable values.',
        'Return a clear validation error when the request is invalid.',
        'Do not depend only on browser-side validation.',
      ],
      explanation:
        'For an enrollment request, the API should validate that student_id and course_id are present and have valid types before the service attempts the operation.',
    },

    {
      id: 'timeouts',
      step: 15,
      title: 'Protect downstream calls with timeouts',
      action:
        'Prevent a slow external dependency from holding application resources indefinitely.',
      details: [
        'Configure an explicit timeout for HTTP calls.',
        'Treat timeout as a failure condition.',
        'Return a controlled response rather than waiting forever.',
      ],
      explanation:
        'A timeout creates a boundary around dependency failure. Without it, a slow provider can consume connection pools and application workers.',
    },

    {
      id: 'retry',
      step: 16,
      title: 'Implement controlled retries',
      action:
        'Retry transient dependency failures using bounded attempts and backoff.',
      details: [
        'Retry only failures that are reasonably transient.',
        'Limit the number of attempts.',
        'Use increasing delays between attempts.',
        'Avoid retrying non-idempotent operations unless duplicate effects are safely controlled.',
      ],
      explanation:
        'Retries improve resilience when used carefully. Uncontrolled retries can multiply traffic during an outage and make the incident worse.',
    },

    {
      id: 'health',
      step: 17,
      title: 'Add health and readiness checks',
      action:
        'Expose endpoints that allow the deployment platform to determine application health.',
      command:
        'GET /health',
      details: [
        'Use a lightweight health endpoint for basic process health.',
        'Use readiness checks when the application should only receive traffic after dependencies are initialized.',
        'Do not make health checks more expensive than the requests they are supposed to protect.',
      ],
      explanation:
        'Health and readiness signals allow infrastructure to stop routing traffic to an unhealthy application instance.',
    },

    {
      id: 'metrics',
      step: 18,
      title: 'Measure application behaviour',
      action:
        'Capture metrics that reveal whether the system is healthy from both technical and user perspectives.',
      details: [
        'Track request count.',
        'Track error rate.',
        'Track latency percentiles.',
        'Track dependency failures and resource saturation where relevant.',
      ],
      explanation:
        'A useful production metric is not just average latency. P95 or P99 latency can reveal that a smaller group of users is experiencing severe delays.',
    },

    {
      id: 'logging',
      step: 19,
      title: 'Add structured logging',
      action:
        'Record application events in a consistent machine-readable format.',
      details: [
        'Include request or correlation identifiers.',
        'Record useful event context.',
        'Record errors with enough information to investigate them.',
        'Never log passwords, tokens or unnecessary sensitive information.',
      ],
      explanation:
        'Structured logs allow operations teams to search and correlate production events instead of reading unstructured application output manually.',
    },

    {
      id: 'tracing',
      step: 20,
      title: 'Trace requests across components',
      action:
        'Propagate trace context when a request crosses API, service, database or external-service boundaries.',
      details: [
        'Create or propagate a trace identifier.',
        'Record important service boundaries.',
        'Use traces to identify where latency accumulates.',
        'Correlate traces with logs and metrics.',
      ],
      explanation:
        'Tracing is especially valuable when a single student request crosses multiple services and dependencies.',
    },

    {
      id: 'docker',
      step: 21,
      title: 'Package the application consistently',
      action:
        'Create a container image so the application and its runtime dependencies can be moved consistently between environments.',
      command:
        'docker build -t architecture-platform:1.0 .',
      details: [
        'Define the runtime environment in a Dockerfile.',
        'Install only required dependencies.',
        'Expose the application port.',
        'Keep configuration such as secrets outside the image.',
      ],
      explanation:
        'A container packages the application environment consistently. It reduces the difference between development, testing and deployment environments.',
    },

    {
      id: 'deployment',
      step: 22,
      title: 'Create a repeatable deployment',
      action:
        'Build and deploy a known application version through an automated process.',
      details: [
        'Build from a known source revision.',
        'Run automated tests and type checks before deployment.',
        'Create a versioned artifact.',
        'Deploy the same validated artifact to the target environment.',
      ],
      explanation:
        'Repeatable deployment reduces manual variation and makes it possible to identify exactly which version is running in production.',
    },

    {
      id: 'canary',
      step: 23,
      title: 'Use a controlled rollout',
      action:
        'Release a new version to limited traffic before expanding exposure.',
      details: [
        'Start with a small traffic percentage.',
        'Monitor error rate and latency.',
        'Compare the new version with the existing version.',
        'Increase traffic only when production signals remain healthy.',
      ],
      explanation:
        'A canary deployment reduces blast radius. If the new release is unhealthy, only a controlled portion of users is initially affected.',
    },

    {
      id: 'rollback',
      step: 24,
      title: 'Prepare rollback',
      action:
        'Keep a known-good version available so a problematic release can be reversed quickly.',
      details: [
        'Tag or otherwise identify deployable versions.',
        'Keep the previous artifact available.',
        'Define who can authorize rollback.',
        'Verify rollback during normal operations rather than waiting for an incident.',
      ],
      explanation:
        'Rollback is part of the architecture because production systems must have a controlled recovery path when a release causes unacceptable impact.',
    },

    {
      id: 'architecture-review',
      step: 25,
      title: 'Review the implementation against the architecture',
      action:
        'Trace one important user journey from the client through the API, services, data and operational layers.',
      details: [
        'Start with a student action such as opening a course.',
        'Trace the API request into the service layer.',
        'Trace persistence and caching behaviour.',
        'Verify authentication and authorization.',
        'Verify timeout and failure behaviour.',
        'Verify logs, metrics and traces.',
        'Verify deployment and rollback behaviour.',
      ],
      explanation:
        'The final review checks whether the implementation actually follows the architecture instead of merely documenting an architecture that the software does not implement.',
    },
  ],

  finalResult:
    'You can now translate the MC07 architecture into a realistic implementation path with real API, service, database, cache, security, resilience, observability, containerization and deployment examples.',
}
