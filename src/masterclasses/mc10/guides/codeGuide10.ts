import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide10: GuideDefinition = {
  type: 'code',
  title: 'MC10 Code Guide',
  label: 'MC10 Code Guide',
  objective:
    'Implement the core distributed-system patterns from MC10 as a small EDDUU-style production platform.',
  steps: [
    {
      step: 1,
      id: 'code-project-structure',
      title: 'Create the EDDUU Service Structure',
      action:
        'Create a small Python service that can later become an independently deployable EDDUU microservice.',
      details: [
        'Create a folder named edduu-learning-service.',
        'Create an app folder inside it.',
        'Create main.py inside app.',
        'Create requirements.txt.',
        'Create Dockerfile.',
        'Create .dockerignore.',
      ],
      code: `edduu-learning-service/
  app/
    __init__.py
    main.py
  requirements.txt
  Dockerfile
  .dockerignore`,
      command:
        'mkdir edduu-learning-service',
      explanation:
        'A predictable service structure makes local development, containerization and deployment easier to manage.',
      mapStepId: 'foundations',
    },

    {
      step: 2,
      id: 'code-fastapi',
      title: 'Create the Learning Service API',
      action:
        'Create a minimal FastAPI service representing the EDDUU Learning Service.',
      details: [
        'Install FastAPI and Uvicorn.',
        'Create the FastAPI application.',
        'Add a health endpoint.',
        'Add a student progress endpoint.',
      ],
      code: `from fastapi import FastAPI

app = FastAPI(title="EDDUU Learning Service")


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/students/{student_id}/progress")
def get_progress(student_id: str):
    return {
        "student_id": student_id,
        "completed_courses": 4,
        "progress_percent": 72,
    }`,
      command:
        'python -m pip install fastapi uvicorn',
      explanation:
        'FastAPI gives the service an explicit HTTP interface that other EDDUU services can consume.',
      mapStepId: 'communication',
    },

    {
      step: 3,
      id: 'code-requirements',
      title: 'Define Python Dependencies',
      action:
        'Record the Python dependencies required by the Learning Service.',
      details: [
        'Create requirements.txt.',
        'Add FastAPI.',
        'Add Uvicorn.',
        'Install the requirements.',
      ],
      code: `fastapi
uvicorn[standard]`,
      command:
        'python -m pip install -r requirements.txt',
      explanation:
        'The dependency file makes the runtime reproducible across local and container environments.',
      mapStepId: 'communication',
    },

    {
      step: 4,
      id: 'code-run-api',
      title: 'Run and Verify the API',
      action:
        'Start the Learning Service locally and verify its endpoints.',
      details: [
        'Open PowerShell in the project directory.',
        'Start Uvicorn.',
        'Open the health endpoint.',
        'Open the Swagger UI.',
        'Call the student progress endpoint.',
      ],
      command:
        'uvicorn app.main:app --reload',
      explanation:
        'Local verification proves the API contract works before containers and orchestration are introduced.',
      mapStepId: 'communication',
    },

    {
      step: 5,
      id: 'code-timeout',
      title: 'Add a Downstream HTTP Timeout',
      action:
        'Prevent a remote EDDUU dependency from blocking the caller indefinitely.',
      details: [
        'Use an HTTP client with an explicit timeout.',
        'Treat timeout as a dependency failure.',
        'Return a controlled response instead of waiting forever.',
      ],
      code: `import httpx

async def get_profile(student_id: str):
    async with httpx.AsyncClient(timeout=2.0) as client:
        response = await client.get(
            f"http://profile-service/students/{student_id}"
        )
        response.raise_for_status()
        return response.json()`,
      command:
        'python -m pip install httpx',
      explanation:
        'A timeout establishes an upper bound on how long one dependency can consume resources belonging to the caller.',
      mapStepId: 'reliability',
    },

    {
      step: 6,
      id: 'code-retry',
      title: 'Implement Bounded Retry',
      action:
        'Retry transient failures only when the operation is safe to repeat.',
      details: [
        'Define a small maximum retry count.',
        'Retry only appropriate transient failures.',
        'Use increasing delays between attempts.',
        'Do not retry indefinitely.',
      ],
      code: `import asyncio

async def retry_operation(operation, attempts=3):
    delay = 0.2

    for attempt in range(attempts):
        try:
            return await operation()
        except Exception:
            if attempt == attempts - 1:
                raise
            await asyncio.sleep(delay)
            delay *= 2`,
      explanation:
        'Bounded exponential backoff reduces repeated pressure on an unhealthy dependency while still allowing transient failures to recover.',
      mapStepId: 'reliability',
    },

    {
      step: 7,
      id: 'code-idempotency',
      title: 'Make Event Processing Idempotent',
      action:
        'Prevent duplicate event delivery from creating duplicate business effects.',
      details: [
        'Read a unique event identifier.',
        'Check whether the identifier has already been processed.',
        'Skip the business operation when it has already been handled.',
        'Record successful processing.',
      ],
      code: `processed_events = set()

def handle_course_completed(event):
    event_id = event["event_id"]

    if event_id in processed_events:
        return {"status": "duplicate_ignored"}

    processed_events.add(event_id)

    return {"status": "processed"}`,
      explanation:
        'At-least-once delivery can produce duplicate events. Idempotent consumers make repeated delivery safe.',
      mapStepId: 'messaging',
    },

    {
      step: 8,
      id: 'code-event-schema',
      title: 'Define the CourseCompleted Event',
      action:
        'Create an explicit event contract for asynchronous EDDUU communication.',
      details: [
        'Give every event a unique identifier.',
        'Include the event type.',
        'Include the entity identifiers.',
        'Include an event timestamp.',
        'Keep the payload versionable.',
      ],
      code: `{
  "event_id": "evt-10042",
  "event_type": "CourseCompleted",
  "version": 1,
  "student_id": "student-42",
  "course_id": "course-101",
  "occurred_at": "2026-08-27T05:00:00Z"
}`,
      explanation:
        'An explicit event contract allows independent consumers to understand the message without sharing internal implementation details.',
      mapStepId: 'messaging',
    },

    {
      step: 9,
      id: 'code-kafka-producer',
      title: 'Publish an Event to Kafka',
      action:
        'Create a producer that publishes CourseCompleted events.',
      details: [
        'Install the Kafka Python client.',
        'Create a producer.',
        'Serialize the event as JSON.',
        'Publish to the EDDUU course-events topic.',
        'Wait for broker acknowledgement.',
      ],
      code: `import json
from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers="localhost:9092",
    value_serializer=lambda value: json.dumps(value).encode("utf-8"),
)

event = {
    "event_id": "evt-10042",
    "event_type": "CourseCompleted",
    "version": 1,
    "student_id": "student-42",
    "course_id": "course-101",
}

producer.send("course-events", event)
producer.flush()`,
      command:
        'python -m pip install kafka-python',
      explanation:
        'The producer publishes a business fact without requiring Analytics or Notification services to be called synchronously.',
      mapStepId: 'messaging',
    },

    {
      step: 10,
      id: 'code-kafka-consumer',
      title: 'Consume the Event',
      action:
        'Create an independent consumer for the CourseCompleted event.',
      details: [
        'Connect the consumer to Kafka.',
        'Subscribe to course-events.',
        'Deserialize each message.',
        'Process the event.',
        'Commit progress according to the chosen delivery strategy.',
      ],
      code: `import json
from kafka import KafkaConsumer

consumer = KafkaConsumer(
    "course-events",
    bootstrap_servers="localhost:9092",
    group_id="edduu-analytics",
    value_deserializer=lambda value: json.loads(value.decode("utf-8")),
)

for message in consumer:
    event = message.value
    print("Received:", event)`,
      explanation:
        'Independent consumers allow Analytics and other capabilities to evolve without direct synchronous coupling to the producer.',
      mapStepId: 'messaging',
    },

    {
      step: 11,
      id: 'code-dockerfile',
      title: 'Create the Dockerfile',
      action:
        'Package the Learning Service into a portable container image.',
      details: [
        'Use a small Python base image.',
        'Copy requirements first for better layer reuse.',
        'Install dependencies.',
        'Copy application code.',
        'Expose port 8000.',
        'Start Uvicorn.',
      ],
      code: `FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`,
      explanation:
        'The Dockerfile converts the Learning Service into a reproducible runtime unit that can be deployed consistently across environments.',
      mapStepId: 'deployment',
    },

    {
      step: 12,
      id: 'code-docker-build',
      title: 'Build the Container Image',
      action:
        'Build and tag the EDDUU Learning Service image.',
      details: [
        'Open PowerShell in the project directory.',
        'Run the Docker build command.',
        'Wait for the image layers to complete.',
        'Verify that the tagged image exists.',
      ],
      code:
        'docker build -t edduu-learning-service:1.0 .',
      command:
        'docker build -t edduu-learning-service:1.0 .',
      explanation:
        'The versioned image tag gives the deployment a predictable artifact that can be promoted between environments.',
      mapStepId: 'deployment',
    },

    {
      step: 13,
      id: 'code-docker-run',
      title: 'Run the Container',
      action:
        'Start the container and verify the service from the host machine.',
      details: [
        'Publish port 8000 from the container.',
        'Start the image.',
        'Open the health endpoint.',
        'Open the Swagger UI.',
      ],
      command:
        'docker run --rm -p 8000:8000 edduu-learning-service:1.0',
      explanation:
        'A successful local container run confirms that the application and runtime dependencies were packaged correctly.',
      mapStepId: 'deployment',
    },

    {
      step: 14,
      id: 'code-compose',
      title: 'Connect Local Services with Docker Compose',
      action:
        'Run multiple local EDDUU services on one development network.',
      details: [
        'Create a compose.yaml file.',
        'Add the Learning Service.',
        'Add a Profile Service placeholder.',
        'Give each service a predictable network name.',
        'Start the environment together.',
      ],
      code: `services:
  learning-service:
    build: .
    ports:
      - "8000:8000"

  profile-service:
    image: edduu-profile-service:1.0
    ports:
      - "8001:8000"`,
      command:
        'docker compose up --build',
      explanation:
        'Docker Compose is useful for developing a small multi-service environment before deploying services to Kubernetes.',
      mapStepId: 'deployment',
    },

    {
      step: 15,
      id: 'code-k8s-deployment',
      title: 'Create a Kubernetes Deployment',
      action:
        'Describe how Kubernetes should run multiple Learning Service replicas.',
      details: [
        'Create deployment.yaml.',
        'Set the container image.',
        'Set the container port.',
        'Start with two replicas.',
        'Apply the Deployment.',
      ],
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: edduu-learning
spec:
  replicas: 2
  selector:
    matchLabels:
      app: edduu-learning
  template:
    metadata:
      labels:
        app: edduu-learning
    spec:
      containers:
        - name: learning
          image: edduu-learning-service:1.0
          ports:
            - containerPort: 8000`,
      command:
        'kubectl apply -f deployment.yaml',
      explanation:
        'A Deployment declares the desired number of application replicas and allows Kubernetes to maintain that desired state.',
      mapStepId: 'deployment',
    },

    {
      step: 16,
      id: 'code-k8s-service',
      title: 'Expose the Service Inside Kubernetes',
      action:
        'Create a Kubernetes Service that gives the Learning Service a stable network identity.',
      details: [
        'Create service.yaml.',
        'Select the Learning Service Pods by label.',
        'Expose port 8000.',
        'Apply the Service.',
        'Inspect the Service.',
      ],
      code: `apiVersion: v1
kind: Service
metadata:
  name: edduu-learning
spec:
  selector:
    app: edduu-learning
  ports:
    - port: 8000
      targetPort: 8000`,
      command:
        'kubectl apply -f service.yaml',
      explanation:
        'The Service provides stable discovery while Pods can be created, replaced or scaled independently.',
      mapStepId: 'deployment',
    },

    {
      step: 17,
      id: 'code-k8s-health',
      title: 'Add Readiness and Liveness Probes',
      action:
        'Tell Kubernetes when a Learning Service instance is alive and ready for traffic.',
      details: [
        'Add a liveness probe to /health.',
        'Add a readiness probe to /health.',
        'Deploy the updated manifest.',
        'Inspect Pod status.',
      ],
      code: `livenessProbe:
  httpGet:
    path: /health
    port: 8000
  initialDelaySeconds: 5
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /health
    port: 8000
  initialDelaySeconds: 3
  periodSeconds: 5`,
      explanation:
        'Readiness prevents traffic from reaching an instance that is not prepared to serve requests, while liveness helps detect unhealthy processes.',
      mapStepId: 'operations',
    },

    {
      step: 18,
      id: 'code-k8s-config',
      title: 'Separate Configuration from the Image',
      action:
        'Move environment-specific configuration out of application code.',
      details: [
        'Create a ConfigMap for non-sensitive configuration.',
        'Create a Secret for sensitive values.',
        'Reference the values from the Deployment.',
        'Never commit real production credentials to source control.',
      ],
      code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: edduu-learning-config
data:
  PROFILE_SERVICE_URL: "http://edduu-profile:8000"

---
apiVersion: v1
kind: Secret
metadata:
  name: edduu-learning-secret
type: Opaque
stringData:
  API_KEY: "replace-with-runtime-secret"`,
      explanation:
        'Configuration and secrets change between environments and should not require rebuilding the application image.',
      mapStepId: 'operations',
    },

    {
      step: 19,
      id: 'code-hpa',
      title: 'Configure Horizontal Scaling',
      action:
        'Allow Kubernetes to increase Learning Service replicas when resource utilization requires it.',
      details: [
        'Define an HPA.',
        'Set minimum replicas.',
        'Set maximum replicas.',
        'Choose a resource utilization target.',
        'Verify the HPA after deployment.',
      ],
      code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: edduu-learning
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: edduu-learning
  minReplicas: 2
  maxReplicas: 6
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`,
      command:
        'kubectl get hpa',
      explanation:
        'Horizontal scaling allows service capacity to respond to changing workload while keeping explicit bounds.',
      mapStepId: 'deployment',
    },

    {
      step: 20,
      id: 'code-terraform',
      title: 'Represent Infrastructure with Terraform',
      action:
        'Create a minimal Terraform configuration that demonstrates infrastructure as code.',
      details: [
        'Install Terraform.',
        'Create main.tf.',
        'Initialize Terraform.',
        'Review the execution plan.',
        'Apply only after reviewing the plan.',
      ],
      code: `terraform {
  required_version = ">= 1.6.0"
}

variable "environment" {
  type    = string
  default = "dev"
}

output "environment_name" {
  value = var.environment
}`,
      command:
        'terraform init',
      explanation:
        'Terraform configurations can be versioned, reviewed and reused across environments.',
      mapStepId: 'infrastructure',
    },

    {
      step: 21,
      id: 'code-terraform-plan',
      title: 'Review Terraform Changes',
      action:
        'Use Terraform plan as a mandatory infrastructure review checkpoint.',
      details: [
        'Run terraform plan.',
        'Read every proposed resource change.',
        'Check variables and provider configuration.',
        'Confirm that unexpected destructive changes are absent.',
      ],
      command:
        'terraform plan',
      explanation:
        'Terraform plan provides visibility into infrastructure changes before they are applied.',
      mapStepId: 'infrastructure',
    },

    {
      step: 22,
      id: 'code-observability',
      title: 'Add Structured Request Logging',
      action:
        'Create logs that can be searched using a shared correlation identifier.',
      details: [
        'Generate or receive a correlation ID at the request boundary.',
        'Include the ID in structured logs.',
        'Log service name and operation.',
        'Log outcome and latency.',
      ],
      code: `import logging
import time

logger = logging.getLogger("edduu")

def record_request(
    correlation_id: str,
    operation: str,
    started: float,
    status: int,
):
    logger.info(
        "request_complete",
        extra={
            "correlation_id": correlation_id,
            "operation": operation,
            "duration_ms": round(
                (time.time() - started) * 1000,
                2,
            ),
            "status": status,
        },
    )`,
      explanation:
        'Structured logs make distributed investigations easier because operations can search for one request across multiple services.',
      mapStepId: 'observability',
    },

    {
      step: 23,
      id: 'code-trace-context',
      title: 'Propagate Distributed Trace Context',
      action:
        'Propagate request context when one EDDUU service calls another.',
      details: [
        'Create or receive a correlation or trace identifier.',
        'Include it in outbound requests.',
        'Read it at the receiving service.',
        'Include it in logs and trace attributes.',
      ],
      code: `headers = {
    "X-Correlation-ID": correlation_id
}

response = await client.get(
    "http://profile-service/students/student-42",
    headers=headers,
)`,
      explanation:
        'Context propagation allows one logical operation to remain connected as it crosses service boundaries.',
      mapStepId: 'observability',
    },

    {
      step: 24,
      id: 'code-slo',
      title: 'Define a Service Objective',
      action:
        'Turn an important production expectation into a measurable reliability target.',
      details: [
        'Choose an availability or latency indicator.',
        'Define the measurement window.',
        'Define the target.',
        'Create an alert when sustained behavior threatens the objective.',
      ],
      code: `SLI:
  successful_requests / total_requests

SLO:
  99.9% successful requests over the measurement window`,
      explanation:
        'An SLO provides an explicit reliability target that can guide engineering and operational decisions.',
      mapStepId: 'operations',
    },

    {
      step: 25,
      id: 'code-failure-drill',
      title: 'Run the EDDUU Distributed Failure Drill',
      action:
        'Simulate a downstream outage and investigate the complete request path.',
      details: [
        'Make the Profile Service unavailable.',
        'Send a request to the Learning Service.',
        'Observe the timeout behavior.',
        'Verify that bounded retries do not continue forever.',
        'Verify fallback or controlled failure behavior.',
        'Search logs using the correlation ID.',
        'Inspect the distributed trace if available.',
        'Restore the Profile Service.',
        'Send the request again.',
        'Confirm recovery.',
      ],
      code: `Learning Service
      |
      +----> Profile Service  X unavailable
      |
      +----> timeout
      |
      +----> bounded retry
      |
      +----> fallback / controlled error
      |
      +----> correlated logs + trace`,
      explanation:
        'The failure drill tests the architecture as a system rather than testing individual components in isolation.',
      mapStepId: 'capstone',
    },

    {
      step: 26,
      id: 'code-backup-recovery',
      title: 'Define Backup and Recovery Responsibilities',
      action:
        'Document what must be backed up and how the platform would recover after data or infrastructure loss.',
      details: [
        'Identify authoritative business data.',
        'Define backup frequency according to business requirements.',
        'Define retention.',
        'Define restoration ownership.',
        'Test restoration rather than assuming backups work.',
        'Document recovery time and recovery point expectations.',
      ],
      explanation:
        'Distributed architecture does not automatically provide data recovery. Backup and restoration must be explicit operational responsibilities.',
      mapStepId: 'operations',
    },

    {
      step: 27,
      id: 'code-production-readiness',
      title: 'Run the Production Readiness Checklist',
      action:
        'Review the complete EDDUU distributed platform before calling it production-ready.',
      details: [
        'Service boundaries are documented.',
        'API contracts are explicit.',
        'Data ownership is clear.',
        'Timeouts exist for remote calls.',
        'Retries are bounded.',
        'Duplicate event processing is safe.',
        'Health checks exist.',
        'Observability exists across important request paths.',
        'SLOs and actionable alerts exist.',
        'Configuration and secrets are separated.',
        'Backup and recovery responsibilities are documented.',
        'Failure drills have been performed.',
      ],
      explanation:
        'Production readiness is a system-level property. A service can work correctly in isolation and still be unsafe when deployed as part of a distributed platform.',
      mapStepId: 'capstone',
    },
  ],
}
