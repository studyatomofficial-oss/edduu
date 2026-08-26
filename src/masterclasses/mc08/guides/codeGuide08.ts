import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide08: GuideDefinition = {
  type: 'code',
  label: 'Code Guide',
  title: 'Implement a Production-Ready Cloud Architecture Step by Step',
  objective:
    'Translate MC08 cloud architecture decisions into a realistic EDDUUU implementation using APIs, PostgreSQL, Redis, Docker, cloud networking, identity, observability, deployment, scaling, backup and disaster recovery patterns.',

  steps: [
    {
      id: 'project',
      step: 1,
      title: 'Create the cloud application boundary',
      action:
        'Create the backend project that will become the application deployed to the cloud.',
      command:
        'mkdir edduu-cloud-platform; cd edduu-cloud-platform; python -m venv .venv',
      details: [
        'Create a dedicated application directory.',
        'Keep application code separate from infrastructure configuration.',
        'Use an isolated Python environment for backend dependencies.',
      ],
      explanation:
        'The application boundary is the foundation for later containerization and cloud deployment.',
    },

    {
      id: 'api',
      step: 2,
      title: 'Create the FastAPI application',
      action:
        'Create a small HTTP API that represents the EDDUUU backend.',
      command:
        'pip install fastapi uvicorn',
      details: [
        'Create app/main.py.',
        'Expose a health endpoint.',
        'Expose a course endpoint.',
        'Keep route handlers focused on HTTP concerns.',
      ],
      explanation:
        'FastAPI provides the application entry boundary. The cloud platform can later place multiple instances of this application behind a load balancer.',
    },

    {
      id: 'api-endpoint',
      step: 3,
      title: 'Implement the course API',
      action:
        'Expose a stable course endpoint for the student application.',
      command:
        'GET /api/courses',
      details: [
        'Return a stable response structure.',
        'Move business logic into a service layer.',
        'Do not allow the frontend to access PostgreSQL directly.',
      ],
      explanation:
        'The API becomes the controlled entry point between users and internal cloud resources.',
    },

    {
      id: 'service',
      step: 4,
      title: 'Create the service layer',
      action:
        'Keep course business operations separate from HTTP and database implementation.',
      details: [
        'Create CourseService.',
        'Keep API routes thin.',
        'Let the service coordinate business operations.',
        'Keep persistence details inside the repository layer.',
      ],
      explanation:
        'The flow becomes API to CourseService to repository. This separation makes the application easier to scale and test.',
    },

    {
      id: 'database',
      step: 5,
      title: 'Create the PostgreSQL data model',
      action:
        'Create the transactional course table in PostgreSQL.',
      command:
        'CREATE TABLE courses (id BIGSERIAL PRIMARY KEY, title TEXT NOT NULL, description TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW());',
      details: [
        'Use a stable primary key.',
        'Require essential course information.',
        'Store creation time.',
        'Keep PostgreSQL private from direct internet access.',
      ],
      explanation:
        'PostgreSQL becomes the authoritative transactional store for structured learning-platform data.',
    },

    {
      id: 'repository',
      step: 6,
      title: 'Connect the repository to PostgreSQL',
      action:
        'Keep database access inside the repository layer.',
      details: [
        'Create CourseRepository.',
        'Create the database connection through configuration.',
        'Do not hard-code database credentials.',
        'Return application-level data to the service layer.',
      ],
      explanation:
        'The repository isolates PostgreSQL implementation details from the API and business layers.',
    },

    {
      id: 'environment',
      step: 7,
      title: 'Move configuration into environment variables',
      action:
        'Keep environment-specific configuration outside the source code.',
      command:
        'DATABASE_URL=postgresql://user:password@private-db:5432/edduu',
      details: [
        'Use environment variables for database endpoints.',
        'Use separate configuration for development, staging and production.',
        'Never commit production passwords or API keys.',
      ],
      explanation:
        'Cloud applications normally run the same artifact in different environments while configuration changes around it.',
    },

    {
      id: 'redis',
      step: 8,
      title: 'Add Redis for cacheable reads',
      action:
        'Introduce Redis for frequently requested course information.',
      command:
        'pip install redis',
      details: [
        'Check Redis before querying PostgreSQL.',
        'Populate Redis after a cache miss.',
        'Use a TTL for cached data.',
        'Keep PostgreSQL as the source of truth.',
      ],
      explanation:
        'Redis can reduce repeated database reads when the workload is read-heavy and the data can tolerate the selected freshness model.',
    },

    {
      id: 'cache-code',
      step: 9,
      title: 'Implement cache-aside',
      action:
        'Use cache-aside behaviour for course retrieval.',
      details: [
        'Read the course data from Redis first.',
        'Query PostgreSQL when Redis misses.',
        'Store the database result in Redis.',
        'Expire the cache after an appropriate TTL.',
      ],
      explanation:
        'Cache-aside keeps the database authoritative while using Redis as a performance layer.',
    },

    {
      id: 'network',
      step: 10,
      title: 'Separate public and private network layers',
      action:
        'Design the cloud network so only the required resources are publicly reachable.',
      details: [
        'Expose the application entry point publicly.',
        'Keep PostgreSQL inside a private network.',
        'Keep Redis private when it does not require public access.',
        'Allow only required traffic between application and data layers.',
      ],
      explanation:
        'A public application does not require a public database. Network boundaries reduce unnecessary attack paths.',
    },

    {
      id: 'iam',
      step: 11,
      title: 'Create a service identity',
      action:
        'Give the application a dedicated cloud identity instead of using personal administrator credentials.',
      details: [
        'Create a service identity for the application workload.',
        'Grant only required permissions.',
        'Separate deployment identity from runtime identity.',
        'Review permissions periodically.',
      ],
      explanation:
        'A compromised application should not automatically receive unrestricted cloud access. Least privilege limits the blast radius.',
    },

    {
      id: 'secrets',
      step: 12,
      title: 'Protect application secrets',
      action:
        'Store database credentials and external API keys in an approved secret-management mechanism.',
      details: [
        'Do not put secrets inside source code.',
        'Do not commit production secrets to Git.',
        'Allow the runtime identity to retrieve only required secrets.',
        'Rotate sensitive credentials when appropriate.',
      ],
      explanation:
        'Secrets belong in controlled secret storage rather than application source code or container images.',
    },

    {
      id: 'health',
      step: 13,
      title: 'Add health and readiness endpoints',
      action:
        'Provide endpoints that the load balancer or orchestration platform can use to determine application health.',
      command:
        'GET /health',
      details: [
        'Use a lightweight health endpoint.',
        'Add readiness behaviour when dependencies must be available before traffic is accepted.',
        'Return a failure signal when the instance should not receive new traffic.',
      ],
      explanation:
        'Health and readiness checks allow the cloud traffic layer to avoid unhealthy application instances.',
    },

    {
      id: 'metrics',
      step: 14,
      title: 'Measure latency and errors',
      action:
        'Capture production metrics that reveal application health.',
      details: [
        'Measure request count.',
        'Measure error rate.',
        'Measure P95 latency.',
        'Measure database and cache failures.',
        'Measure resource saturation where relevant.',
      ],
      explanation:
        'P95 latency is useful because average latency can hide slow experiences affecting a meaningful subset of users.',
    },

    {
      id: 'logging',
      step: 15,
      title: 'Implement structured logs',
      action:
        'Produce machine-readable operational logs that can be searched and correlated.',
      details: [
        'Include request identifiers.',
        'Include operation names and failure categories.',
        'Avoid logging passwords, tokens and unnecessary sensitive information.',
        'Send logs to the cloud logging platform.',
      ],
      explanation:
        'Structured logging allows the operations team to investigate production behaviour without manually inspecting every server.',
    },

    {
      id: 'tracing',
      step: 16,
      title: 'Trace distributed requests',
      action:
        'Propagate request and trace context across the application and its dependencies.',
      details: [
        'Create a trace for an incoming request.',
        'Record important service boundaries.',
        'Record database and external dependency timing.',
        'Correlate traces with logs and metrics.',
      ],
      explanation:
        'Tracing becomes important when one student request crosses multiple cloud components and the team needs to identify where latency was introduced.',
    },

    {
      id: 'dockerfile',
      step: 17,
      title: 'Create the production Dockerfile',
      action:
        'Package the FastAPI application and its runtime dependencies into a reproducible container.',
      command:
        'docker build -t edduu-cloud-api:1.0 .',
      details: [
        'Start from an appropriate Python runtime image.',
        'Install dependencies from the requirements file.',
        'Copy application source.',
        'Expose the API port.',
        'Keep secrets outside the image.',
      ],
      explanation:
        'The container becomes a repeatable deployment artifact that can run consistently across environments.',
    },

    {
      id: 'image',
      step: 18,
      title: 'Push a versioned container image',
      action:
        'Store the validated application image in a container registry.',
      command:
        'docker tag edduu-cloud-api:1.0 registry.example.com/edduu/cloud-api:1.0',
      details: [
        'Use immutable or clearly versioned image tags.',
        'Push only images that passed validation.',
        'Record the source revision associated with the image.',
      ],
      explanation:
        'A registry allows cloud compute infrastructure to pull a known application artifact during deployment.',
    },

    {
      id: 'load-balancer',
      step: 19,
      title: 'Place application instances behind a load balancer',
      action:
        'Distribute requests across healthy application instances.',
      details: [
        'Create multiple application instances.',
        'Register them with the load balancer.',
        'Configure the health endpoint.',
        'Stop routing traffic to unhealthy instances.',
      ],
      explanation:
        'The load balancer provides a stable entry point while application capacity can increase or decrease behind it.',
    },

    {
      id: 'autoscaling',
      step: 20,
      title: 'Configure horizontal autoscaling',
      action:
        'Scale application capacity according to workload signals.',
      details: [
        'Define minimum capacity.',
        'Define maximum capacity.',
        'Choose meaningful signals such as CPU, request rate or concurrency.',
        'Validate that downstream dependencies can handle increased traffic.',
      ],
      explanation:
        'Autoscaling is useful only when the entire dependency chain can support the additional capacity.',
    },

    {
      id: 'backup',
      step: 21,
      title: 'Configure database backup and recovery',
      action:
        'Create protected recovery points for PostgreSQL.',
      details: [
        'Define backup frequency.',
        'Define retention period.',
        'Protect backups from accidental deletion where possible.',
        'Test restoration instead of assuming backups work.',
      ],
      explanation:
        'A backup strategy is incomplete until the team can demonstrate that a usable database can actually be restored.',
    },

    {
      id: 'rpo-rto',
      step: 22,
      title: 'Define RPO and RTO',
      action:
        'Translate business recovery expectations into measurable technical targets.',
      details: [
        'Define how much recent data the business can tolerate losing.',
        'Define how quickly the platform must recover.',
        'Select backup and recovery mechanisms based on these targets.',
        'Document assumptions and recovery dependencies.',
      ],
      explanation:
        'RPO and RTO prevent disaster recovery architecture from becoming an arbitrary collection of backup services.',
    },

    {
      id: 'deployment',
      step: 23,
      title: 'Create a controlled deployment',
      action:
        'Release a new container version to limited traffic before full production exposure.',
      details: [
        'Deploy the new image alongside the current version.',
        'Send a small percentage of traffic to the new version.',
        'Monitor P95 latency and error rate.',
        'Expand traffic only when signals remain healthy.',
      ],
      explanation:
        'Canary deployment reduces the blast radius of a bad release.',
    },

    {
      id: 'rollback',
      step: 24,
      title: 'Implement rollback',
      action:
        'Keep the previous known-good application version available for rapid recovery.',
      details: [
        'Record deployed image versions.',
        'Define rollback thresholds.',
        'Restore the previous application version when required.',
        'Consider database compatibility before rollback.',
      ],
      explanation:
        'Rollback is a production capability, not merely a deployment command. Application and database changes must remain compatible with the recovery strategy.',
    },

    {
      id: 'cost',
      step: 25,
      title: 'Review cloud cost and architecture efficiency',
      action:
        'Measure the major cloud cost drivers and compare them with workload and business value.',
      details: [
        'Review compute usage.',
        'Review database capacity.',
        'Review storage growth.',
        'Review network and data-transfer costs.',
        'Review observability costs.',
        'Rightsize resources using production evidence.',
      ],
      explanation:
        'Cloud cost is an architecture concern. The goal is not simply to minimize the bill but to avoid paying for capacity and services that do not provide proportional business value.',
    },

    {
      id: 'architecture-review',
      step: 26,
      title: 'Perform the end-to-end cloud architecture review',
      action:
        'Trace one important EDDUUU user journey through the complete production architecture.',
      details: [
        'Start with DNS and the public entry point.',
        'Trace traffic through the load balancer.',
        'Trace the request into the application service.',
        'Trace cache and PostgreSQL access.',
        'Verify identity and network boundaries.',
        'Verify health checks, metrics, logs and traces.',
        'Verify scaling and failure behaviour.',
        'Verify deployment, rollback and recovery.',
        'Verify cost assumptions.',
      ],
      explanation:
        'The final implementation review confirms that the running system actually implements the architecture decisions taught throughout MC08.',
    },
  ],

  finalResult:
    'You can now translate MC08 cloud architecture decisions into a realistic implementation path covering API, PostgreSQL, Redis, networking, IAM, secrets, Docker, load balancing, autoscaling, observability, deployment, rollback, backup, disaster recovery and cloud cost management.',
}