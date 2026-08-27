import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide10: GuideDefinition = {
  type: 'map',
  title: 'MC10 Implementation Map',
  label: 'MC10 Implementation Map',
  objective:
    'Build practical distributed-system and microservices skills through the EDDUU architecture used throughout MC10.',
  steps: [
    {
      step: 1,
      id: 'distributed-foundations',
      title: 'Understand Distributed System Foundations',
      action:
        'Map the EDDUU platform as multiple networked components before introducing microservices.',
      details: [
        'Identify clients, services and network boundaries.',
        'Map latency, partial failures, replication and scaling.',
        'Draw the EDDUU request path before selecting implementation technologies.',
      ],
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
      explanation:
        'HTTP provides the foundation for understanding how independent networked components communicate.',
      mapStepId: 'foundations',
    },

    {
      step: 2,
      id: 'service-boundaries',
      title: 'Design Service Boundaries',
      action:
        'Identify business capabilities and decide which responsibilities should remain together or become independently deployable services.',
      details: [
        'Start with a modular architecture.',
        'Define Learning, Profile, Analytics and Notification responsibilities.',
        'Document service ownership before creating separate deployments.',
      ],
      url: 'https://microservices.io/',
      explanation:
        'Service boundaries should follow meaningful business capabilities rather than arbitrary technical layers.',
      mapStepId: 'services',
    },

    {
      step: 3,
      id: 'api-contracts',
      title: 'Build Service APIs',
      action:
        'Create explicit HTTP API contracts between EDDUU services.',
      details: [
        'Define request and response schemas.',
        'Use appropriate HTTP status codes.',
        'Define timeout and versioning expectations.',
        'Start with one service and verify it locally.',
      ],
      url: 'https://fastapi.tiangolo.com/',
      command:
        'python -m pip install fastapi uvicorn',
      explanation:
        'FastAPI provides a practical way to create typed HTTP services while keeping the API contract visible and testable.',
      mapStepId: 'communication',
    },

    {
      step: 4,
      id: 'api-verification',
      title: 'Verify APIs Interactively',
      action:
        'Run the FastAPI service and inspect its generated API documentation.',
      details: [
        'Create a small FastAPI application.',
        'Start it with Uvicorn.',
        'Open the local Swagger UI.',
        'Execute a request from the interactive documentation.',
        'Confirm the expected response and status code.',
      ],
      url: 'http://127.0.0.1:8000/docs',
      command:
        'uvicorn app.main:app --reload',
      explanation:
        'Interactive API documentation makes service contracts easy to inspect while learning and debugging.',
      mapStepId: 'communication',
    },

    {
      step: 5,
      id: 'data-ownership',
      title: 'Establish Data Ownership',
      action:
        'Assign an authoritative owner to each important business data set.',
      details: [
        'Document which service owns learning progress.',
        'Document which service owns profile information.',
        'Define Analytics as the owner of derived reporting data where appropriate.',
        'Avoid uncontrolled direct database access across service boundaries.',
      ],
      url: 'https://martinfowler.com/articles/microservices.html',
      explanation:
        'Clear ownership reduces hidden coupling and makes service responsibilities easier to reason about.',
      mapStepId: 'data',
    },

    {
      step: 6,
      id: 'consistency',
      title: 'Choose Consistency Deliberately',
      action:
        'Classify each EDDUU workflow according to correctness and freshness requirements.',
      details: [
        'Identify workflows that require stronger consistency.',
        'Identify workflows that can tolerate eventual consistency.',
        'Document the business reason for each decision.',
      ],
      url: 'https://martinfowler.com/articles/microservices.html',
      explanation:
        'Distributed data requires explicit trade-offs between correctness, freshness, availability and operational complexity.',
      mapStepId: 'data',
    },

    {
      step: 7,
      id: 'messaging',
      title: 'Introduce Messaging',
      action:
        'Move suitable asynchronous work from direct service calls to queues or events.',
      details: [
        'Identify background jobs and business events.',
        'Define producers and consumers.',
        'Define message contracts.',
        'Define acknowledgement and retry behavior.',
        'Define duplicate-handling behavior.',
      ],
      url: 'https://kafka.apache.org/documentation/',
      explanation:
        'Apache Kafka provides a practical environment for learning event streams, producers, consumers, partitions and consumer groups.',
      mapStepId: 'messaging',
    },

    {
      step: 8,
      id: 'kafka-local',
      title: 'Run Kafka Locally',
      action:
        'Use the official Kafka documentation to run a local broker and create a producer-consumer flow.',
      details: [
        'Open the official Kafka quickstart.',
        'Follow the current local setup for your Kafka version.',
        'Create a topic for an EDDUU learning event.',
        'Publish a CourseCompleted event.',
        'Consume the event from a consumer process.',
        'Verify that the consumer receives the event.',
      ],
      url: 'https://kafka.apache.org/quickstart',
      explanation:
        'A local broker makes producer, consumer, topic and delivery concepts observable before moving to production infrastructure.',
      mapStepId: 'messaging',
    },

    {
      step: 9,
      id: 'reliability',
      title: 'Add Reliability Controls',
      action:
        'Protect service calls with timeouts, bounded retries, exponential backoff, jitter and circuit-breaker behavior.',
      details: [
        'Define a timeout for each remote dependency.',
        'Define a bounded retry policy.',
        'Use backoff and jitter where retries are appropriate.',
        'Identify operations that must be idempotent.',
        'Define fallback behavior for non-critical capabilities.',
      ],
      url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker',
      explanation:
        'Reliability patterns prevent temporary or repeated dependency failures from becoming platform-wide failures.',
      mapStepId: 'reliability',
    },

    {
      step: 10,
      id: 'observability',
      title: 'Instrument the Distributed System',
      action:
        'Add metrics, structured logs and distributed tracing to the EDDUU request path.',
      details: [
        'Create a correlation identifier.',
        'Include the identifier in service logs.',
        'Capture request latency and errors.',
        'Trace downstream calls.',
        'Verify that one request can be followed across service boundaries.',
      ],
      url: 'https://opentelemetry.io/docs/',
      explanation:
        'OpenTelemetry provides a vendor-neutral approach to collecting traces, metrics and logs from distributed applications.',
      mapStepId: 'observability',
    },

    {
      step: 11,
      id: 'tracing',
      title: 'Explore Distributed Traces',
      action:
        'Run an OpenTelemetry example and inspect how one request becomes a trace containing multiple spans.',
      details: [
        'Open the official OpenTelemetry documentation.',
        'Choose the language used by your service.',
        'Follow the getting-started instrumentation guide.',
        'Generate a request that crosses service boundaries.',
        'Inspect the resulting trace.',
        'Identify the slowest span.',
      ],
      url: 'https://opentelemetry.io/docs/languages/',
      explanation:
        'Distributed tracing connects individual service operations into one request-level view.',
      mapStepId: 'observability',
    },

    {
      step: 12,
      id: 'health-checks',
      title: 'Implement Service Health Checks',
      action:
        'Add liveness and readiness endpoints to each deployable EDDUU service.',
      details: [
        'Implement a liveness endpoint.',
        'Implement a readiness endpoint.',
        'Verify both endpoints locally.',
        'Use readiness to control whether traffic should reach the service.',
      ],
      url: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/',
      explanation:
        'Health checks allow orchestration systems to make safer traffic and recovery decisions.',
      mapStepId: 'operations',
    },

    {
      step: 13,
      id: 'slo',
      title: 'Define SLIs and SLOs',
      action:
        'Turn EDDUU reliability expectations into measurable production targets.',
      details: [
        'Choose indicators such as successful request percentage and latency.',
        'Define target values.',
        'Define measurement windows.',
        'Connect important alerts to these objectives.',
      ],
      url: 'https://sre.google/sre-book/service-level-objectives/',
      explanation:
        'SLIs measure service behavior while SLOs define the reliability target that the team manages.',
      mapStepId: 'operations',
    },

    {
      step: 14,
      id: 'containerize',
      title: 'Containerize the Services',
      action:
        'Package an EDDUU service into a reproducible Docker image.',
      details: [
        'Install Docker Desktop if Docker is not already available.',
        'Create a Dockerfile.',
        'Build the image.',
        'Run the container locally.',
        'Open the health endpoint.',
        'Confirm the application works inside the container.',
      ],
      url: 'https://docs.docker.com/get-started/',
      command:
        'docker build -t edduu-api:1.0 .',
      explanation:
        'Containers package application code and runtime dependencies into a repeatable unit.',
      mapStepId: 'deployment',
    },

    {
      step: 15,
      id: 'docker-verify',
      title: 'Verify the Container',
      action:
        'Run the EDDUU image and verify the application from the host machine.',
      details: [
        'Start the container with a published port.',
        'Check the running container.',
        'Open the local API documentation or health endpoint.',
        'Stop the container after verification.',
      ],
      command:
        'docker run --rm -p 8000:8000 edduu-api:1.0',
      explanation:
        'A successful local container run proves that the image contains the application and required runtime dependencies.',
      mapStepId: 'deployment',
    },

    {
      step: 16,
      id: 'kubernetes',
      title: 'Deploy to Kubernetes',
      action:
        'Convert the container into a Kubernetes Deployment and Service.',
      details: [
        'Install Docker Desktop with Kubernetes enabled, or use another Kubernetes environment.',
        'Create a Deployment manifest.',
        'Create a Service manifest.',
        'Apply both manifests.',
        'Inspect Pods.',
        'Inspect the Service.',
      ],
      url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
      command:
        'kubectl get pods',
      explanation:
        'Kubernetes manages containerized workloads and provides service discovery, scheduling, health management and scaling primitives.',
      mapStepId: 'deployment',
    },

    {
      step: 17,
      id: 'kubernetes-scaling',
      title: 'Practice Kubernetes Scaling',
      action:
        'Scale the EDDUU service and observe how Kubernetes manages multiple replicas.',
      details: [
        'Deploy the service.',
        'Increase the replica count.',
        'Run kubectl get pods.',
        'Confirm multiple Pods are running.',
        'Inspect the Deployment status.',
      ],
      url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      command:
        'kubectl scale deployment edduu-api --replicas=3',
      explanation:
        'Multiple replicas improve capacity and availability when the application is designed to operate safely across instances.',
      mapStepId: 'deployment',
    },

    {
      step: 18,
      id: 'terraform',
      title: 'Introduce Infrastructure as Code',
      action:
        'Represent infrastructure configuration as version-controlled Terraform code.',
      details: [
        'Install Terraform.',
        'Create a Terraform configuration.',
        'Initialize the working directory.',
        'Review the proposed infrastructure changes.',
        'Apply only after reviewing the plan.',
      ],
      url: 'https://developer.hashicorp.com/terraform/tutorials',
      command:
        'terraform init',
      explanation:
        'Terraform turns infrastructure configuration into reviewable and repeatable code.',
      mapStepId: 'infrastructure',
    },

    {
      step: 19,
      id: 'terraform-plan',
      title: 'Review Infrastructure Changes',
      action:
        'Use Terraform plan before making infrastructure changes.',
      details: [
        'Run terraform plan.',
        'Read the resources Terraform intends to create, modify or destroy.',
        'Check variables and environment assumptions.',
        'Review the plan before applying it.',
      ],
      url: 'https://developer.hashicorp.com/terraform/cli/commands/plan',
      command:
        'terraform plan',
      explanation:
        'The plan step provides a review checkpoint before infrastructure changes are applied.',
      mapStepId: 'infrastructure',
    },

    {
      step: 20,
      id: 'production-drill',
      title: 'Run the EDDUU Production Failure Drill',
      action:
        'Simulate a dependency outage and investigate it using reliability controls and observability.',
      details: [
        'Make the Recommendation Service intentionally unavailable in the local environment.',
        'Send a dashboard request.',
        'Observe timeout or circuit-breaker behavior.',
        'Confirm the fallback response.',
        'Inspect logs using the correlation identifier.',
        'Inspect the distributed trace.',
        'Restore the dependency.',
        'Verify recovery behavior.',
      ],
      explanation:
        'A failure drill converts distributed-system theory into an operational skill by forcing the learner to observe failure, contain it and verify recovery.',
      mapStepId: 'capstone',
    },

    {
      step: 21,
      id: 'capstone-review',
      title: 'Review the Complete EDDUU Architecture',
      action:
        'Walk from the user request through services, data, messaging, reliability and observability.',
      details: [
        'Draw the complete request path.',
        'Mark synchronous calls.',
        'Mark asynchronous events.',
        'Mark data ownership.',
        'Mark failure boundaries and reliability controls.',
        'Mark observability signals.',
        'Explain why each architectural decision exists.',
      ],
      explanation:
        'The final goal is not to memorize technologies. The goal is to explain why the distributed architecture is designed the way it is.',
      mapStepId: 'capstone',
    },
  ],
}