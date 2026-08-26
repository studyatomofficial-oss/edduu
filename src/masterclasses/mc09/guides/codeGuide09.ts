import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide09: GuideDefinition = {
  type: 'code',
  label: 'MC09 Code Guide',
  title: 'Build, Deploy and Operate the EDDUU Platform',
  objective:
    'Build the MC09 platform incrementally using real Docker, Kubernetes and Terraform artifacts. Every major step includes code, commands, explanation and verification guidance.',
  steps: [
    {
      id: 'code-project',
      step: 1,
      title: 'Create the Application Workspace',
      action:
        'Create a small service workspace that can later be packaged into a container.',
      details: [
        'Create a new application directory.',
        'Create the application source file.',
        'Create a dependency file.',
        'Keep environment-specific configuration outside the application source.',
      ],
      code: `edduu-api/
  app/
    main.py
  requirements.txt
  Dockerfile
  .dockerignore`,
      explanation:
        'Keep application source, dependencies and container configuration clearly separated so the same application can move from local development to container execution.',
      mapStepId: 'containers',
    },

    {
      id: 'code-fastapi',
      step: 2,
      title: 'Create a Minimal API',
      action:
        'Create a small health endpoint that can later be used by Docker and Kubernetes health checks.',
      code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}`,
      details: [
        'Create app/main.py.',
        'Create the FastAPI application.',
        'Add the /health endpoint.',
        'Keep the endpoint free of external dependencies.',
      ],
      command:
        'uvicorn app.main:app --reload --host 0.0.0.0 --port 8000',
      explanation:
        'The health endpoint gives the platform a simple way to determine whether the application process is responding.',
      mapStepId: 'containers',
    },

    {
      id: 'code-requirements',
      step: 3,
      title: 'Define Python Dependencies',
      action:
        'Create the dependency file that the container image will install.',
      code: `fastapi
uvicorn[standard]`,
      details: [
        'Create requirements.txt.',
        'Add FastAPI.',
        'Add Uvicorn.',
        'Keep dependencies explicit and version-controlled.',
      ],
      mapStepId: 'containers',
    },

    {
      id: 'code-dockerfile',
      step: 4,
      title: 'Write the Dockerfile',
      action:
        'Turn the application into a reproducible container image.',
      code: `FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`,
      details: [
        'Use a small Python base image.',
        'Set /app as the working directory.',
        'Copy dependencies before application source.',
        'Install dependencies.',
        'Copy the application.',
        'Document the application port.',
        'Define the container startup command.',
      ],
      explanation:
        'The Dockerfile describes how the application source and runtime dependencies become an immutable container image.',
      mapStepId: 'docker',
    },

    {
      id: 'code-dockerignore',
      step: 5,
      title: 'Create .dockerignore',
      action:
        'Keep local development files and unnecessary content out of the image build context.',
      code: `.git
.venv
__pycache__
*.pyc
.env
dist
node_modules`,
      details: [
        'Create .dockerignore beside the Dockerfile.',
        'Exclude Git metadata.',
        'Exclude local virtual environments.',
        'Exclude caches.',
        'Exclude local secrets.',
        'Exclude generated build output.',
      ],
      explanation:
        'A smaller build context reduces unnecessary transfer and helps prevent accidental inclusion of local files or secrets.',
      mapStepId: 'docker',
    },

    {
      id: 'code-docker-build',
      step: 6,
      title: 'Build the Container Image',
      action:
        'Build and tag the application image.',
      command:
        'docker build -t edduu-api:1.0 .',
      details: [
        'Open PowerShell in the application directory.',
        'Run the docker build command.',
        'Wait for each build layer to complete.',
        'Confirm that the image is created.',
        'Run docker images edduu-api to verify that the tagged image exists.',
      ],
      explanation:
        'The tag edduu-api:1.0 gives the image a predictable name and version.',
      mapStepId: 'docker',
    },

    {
      id: 'code-docker-run',
      step: 7,
      title: 'Run the Container',
      action:
        'Start the image as a local container and verify the API.',
      command:
        'docker run --name edduu-api -p 8000:8000 edduu-api:1.0',
      details: [
        'Open another PowerShell window.',
        'Open http://localhost:8000/health in a browser.',
        'Confirm that the API returns status ok.',
        'Use docker ps to inspect the running container.',
        'Use docker logs edduu-api to inspect application logs.',
      ],
      explanation:
        'Port mapping connects the host port 8000 to the application port 8000 inside the container.',
      mapStepId: 'docker',
    },

    {
      id: 'code-docker-network',
      step: 8,
      title: 'Create a Docker Network',
      action:
        'Create an isolated network for local multi-container communication.',
      command:
        'docker network create edduu-net',
      details: [
        'Create the network once.',
        'Attach application containers to the network.',
        'Use container or Compose service names for internal communication.',
      ],
      explanation:
        'Containers on the same Docker network can communicate without exposing every internal service port to the host.',
      mapStepId: 'docker',
    },

    {
      id: 'code-compose',
      step: 9,
      title: 'Define Docker Compose',
      action:
        'Represent the local multi-container environment as configuration.',
      code: `services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      APP_ENV: development

  redis:
    image: redis:7-alpine`,
      command:
        'docker compose up -d',
      details: [
        'Create compose.yaml.',
        'Define the API service.',
        'Define the Redis service.',
        'Start both services.',
        'Inspect their status.',
      ],
      explanation:
        'Compose provides a repeatable local environment where multiple services can be started and managed together.',
      mapStepId: 'docker',
    },

    {
      id: 'code-compose-check',
      step: 10,
      title: 'Verify the Compose Environment',
      action:
        'Confirm that the services defined in Compose are running.',
      command:
        'docker compose ps',
      details: [
        'Verify the API container is running.',
        'Verify Redis is running.',
        'Inspect logs if a service is unhealthy.',
        'Stop the environment with docker compose down when finished.',
      ],
      mapStepId: 'docker',
    },

    {
      id: 'code-k8s-deployment',
      step: 11,
      title: 'Create the Kubernetes Deployment',
      action:
        'Move the container image into Kubernetes using a Deployment.',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: edduu-api
spec:
  replicas: 2
  selector:
    matchLabels:
      app: edduu-api
  template:
    metadata:
      labels:
        app: edduu-api
    spec:
      containers:
        - name: edduu-api
          image: edduu-api:1.0
          ports:
            - containerPort: 8000`,
      command:
        'kubectl apply -f deployment.yaml',
      details: [
        'Create deployment.yaml.',
        'Set the application image.',
        'Start with two replicas.',
        'Apply the manifest.',
        'Inspect the Deployment and Pods.',
      ],
      explanation:
        'The Deployment expresses the desired number and configuration of application replicas. Kubernetes works continuously to maintain that desired state.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'code-k8s-pods',
      step: 12,
      title: 'Inspect Kubernetes Pods',
      action:
        'Verify that Kubernetes created the requested application replicas.',
      command:
        'kubectl get pods -o wide',
      details: [
        'Confirm that two Pods exist.',
        'Wait until their status becomes Running.',
        'Use kubectl describe pod when a Pod does not start.',
        'Use kubectl logs to inspect application output.',
      ],
      explanation:
        'Pods are the execution units Kubernetes schedules onto worker nodes.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'code-k8s-service',
      step: 13,
      title: 'Create a Kubernetes Service',
      action:
        'Provide a stable network endpoint for the changing set of API Pods.',
      code: `apiVersion: v1
kind: Service
metadata:
  name: edduu-api
spec:
  selector:
    app: edduu-api
  ports:
    - port: 80
      targetPort: 8000
  type: ClusterIP`,
      command:
        'kubectl apply -f service.yaml && kubectl get service',
      details: [
        'Create service.yaml.',
        'Match the selector to the Deployment Pod labels.',
        'Expose port 80 internally.',
        'Forward traffic to container port 8000.',
      ],
      explanation:
        'The Service provides a stable internal address even when individual Pods are replaced.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'code-k8s-configmap',
      step: 14,
      title: 'Create a ConfigMap',
      action:
        'Move non-sensitive runtime configuration outside the container image.',
      code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: edduu-api-config
data:
  APP_ENV: production
  LOG_LEVEL: info`,
      command:
        'kubectl apply -f configmap.yaml',
      details: [
        'Create configmap.yaml.',
        'Store non-sensitive configuration.',
        'Reference the ConfigMap from the Deployment.',
        'Keep environment-specific values outside the image.',
      ],
      explanation:
        'The same container image can then be promoted between environments while runtime configuration changes independently.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'code-k8s-secret',
      step: 15,
      title: 'Create a Secret',
      action:
        'Separate sensitive configuration from ordinary application configuration.',
      code: `apiVersion: v1
kind: Secret
metadata:
  name: edduu-api-secret
type: Opaque
stringData:
  DATABASE_URL: "replace-with-secret-value"`,
      command:
        'kubectl apply -f secret.yaml',
      details: [
        'Never commit real production credentials into Git.',
        'Use a proper secret-management system for production.',
        'Inject the required secret into the application.',
        'Restrict access to the Secret.',
      ],
      explanation:
        'Kubernetes Secrets provide a mechanism for supplying sensitive configuration, but production environments should also apply strong access control and secret-management practices.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'code-k8s-probes',
      step: 16,
      title: 'Add Readiness and Liveness Probes',
      action:
        'Give Kubernetes explicit signals for traffic readiness and process health.',
      code: `readinessProbe:
  httpGet:
    path: /health
    port: 8000
  initialDelaySeconds: 5
  periodSeconds: 10

livenessProbe:
  httpGet:
    path: /health
    port: 8000
  initialDelaySeconds: 10
  periodSeconds: 20`,
      details: [
        'Add the probes to the container specification.',
        'Apply the Deployment.',
        'Inspect Pod conditions.',
        'Confirm that unready Pods do not receive Service traffic.',
      ],
      explanation:
        'Readiness answers whether the application should receive traffic. Liveness helps Kubernetes determine whether the container needs to be restarted.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'code-k8s-ingress',
      step: 17,
      title: 'Configure Ingress',
      action:
        'Define the external HTTP routing path toward the Kubernetes Service.',
      code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: edduu-api
spec:
  rules:
    - host: api.edduu.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: edduu-api
                port:
                  number: 80`,
      command:
        'kubectl apply -f ingress.yaml && kubectl get ingress',
      details: [
        'Use an Ingress controller supported by the cluster.',
        'Choose the hostname.',
        'Route traffic to the Service.',
        'Configure TLS for a real deployment.',
      ],
      explanation:
        'Ingress defines external HTTP routing rules. The exact behavior depends on the Ingress controller installed in the cluster.',
      mapStepId: 'networking',
    },

    {
      id: 'code-k8s-resources',
      step: 18,
      title: 'Define Resource Requests and Limits',
      action:
        'Give Kubernetes explicit CPU and memory expectations for the workload.',
      code: `resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"`,
      details: [
        'Start with measured or reasoned values.',
        'Use requests for scheduling expectations.',
        'Use limits carefully.',
        'Observe actual utilization before tuning.',
      ],
      explanation:
        'Resource requests influence scheduling and capacity planning. Limits define boundaries for container resource usage.',
      mapStepId: 'scaling',
    },

    {
      id: 'code-k8s-hpa',
      step: 19,
      title: 'Create the Horizontal Pod Autoscaler',
      action:
        'Configure automatic replica scaling based on a supported metric.',
      code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: edduu-api
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: edduu-api
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
        'kubectl apply -f hpa.yaml && kubectl get hpa',
      details: [
        'Ensure the cluster has the metrics required by the HPA.',
        'Set minimum replicas.',
        'Set maximum replicas.',
        'Choose a target utilization.',
        'Generate controlled load and observe replica changes.',
      ],
      explanation:
        'The HPA adjusts the number of Deployment replicas according to the configured scaling signal.',
      mapStepId: 'scaling',
    },

    {
      id: 'code-rolling-update',
      step: 20,
      title: 'Perform a Rolling Update',
      action:
        'Release a new image version without intentionally taking the entire workload offline.',
      command:
        'kubectl set image deployment/edduu-api edduu-api=edduu-api:1.1 && kubectl rollout status deployment/edduu-api',
      details: [
        'Build version 1.1 of the image.',
        'Update the Deployment image.',
        'Watch rollout status.',
        'Verify the new Pods become Ready.',
        'Check application behavior after the rollout.',
      ],
      explanation:
        'Kubernetes can progressively replace old Pods with new Pods according to Deployment rollout strategy.',
      mapStepId: 'scaling',
    },

    {
      id: 'code-rollback',
      step: 21,
      title: 'Rollback a Failed Release',
      action:
        'Recover from a problematic Deployment revision.',
      command:
        'kubectl rollout undo deployment/edduu-api && kubectl rollout status deployment/edduu-api',
      details: [
        'Identify the problematic revision.',
        'Trigger the rollback.',
        'Wait for rollout completion.',
        'Verify healthy Pods.',
        'Verify the application endpoint.',
      ],
      explanation:
        'A controlled rollback restores a previous Deployment revision when a new release is not healthy.',
      mapStepId: 'scaling',
    },

    {
      id: 'code-terraform-provider',
      step: 22,
      title: 'Create the Terraform Project',
      action:
        'Begin representing infrastructure as version-controlled Terraform configuration.',
      code: `terraform {
  required_version = ">= 1.6.0"

  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }
}

provider "random" {}`,
      command:
        'terraform init',
      details: [
        'Create main.tf.',
        'Declare Terraform and provider requirements.',
        'Initialize the working directory.',
        'Inspect the generated provider lock file.',
      ],
      explanation:
        'Terraform configuration declares infrastructure intent while providers implement resource operations.',
      mapStepId: 'terraform',
    },

    {
      id: 'code-terraform-resource',
      step: 23,
      title: 'Create a Terraform Resource',
      action:
        'Define a small resource to practice the Terraform workflow before managing larger infrastructure.',
      code: `resource "random_pet" "environment" {
  length = 2
}

output "environment_name" {
  value = random_pet.environment.id
}`,
      command:
        'terraform fmt && terraform validate && terraform plan',
      details: [
        'Format the Terraform configuration.',
        'Validate the configuration.',
        'Review the proposed change.',
        'Do not apply infrastructure changes blindly.',
      ],
      explanation:
        'The plan stage lets engineers review intended infrastructure changes before applying them.',
      mapStepId: 'terraform',
    },

    {
      id: 'code-terraform-apply',
      step: 24,
      title: 'Apply Terraform Changes',
      action:
        'Apply an already reviewed Terraform plan.',
      command:
        'terraform apply',
      details: [
        'Review the proposed changes.',
        'Confirm the operation only when the change is understood.',
        'Inspect the resulting state.',
        'Use terraform show to inspect managed resources.',
      ],
      explanation:
        'Terraform apply changes the infrastructure according to the configuration and records the resulting state.',
      mapStepId: 'terraform',
    },

    {
      id: 'code-terraform-state',
      step: 25,
      title: 'Understand State and Drift',
      action:
        'Learn how Terraform determines what infrastructure exists and what has changed.',
      command:
        'terraform show',
      details: [
        'Inspect the current Terraform state.',
        'Understand why state must be protected.',
        'Understand remote state for team environments.',
        'Recognize configuration drift.',
        'Avoid unmanaged manual changes to Terraform-owned infrastructure.',
      ],
      explanation:
        'Terraform state connects configuration to real infrastructure. Safe state handling is essential for collaborative infrastructure management.',
      mapStepId: 'terraform',
    },

    {
      id: 'code-terraform-module',
      step: 26,
      title: 'Introduce Reusable Terraform Modules',
      action:
        'Extract repeated infrastructure patterns into reusable modules.',
      code: `module "application" {
  source = "./modules/application"

  environment = var.environment
  service_name = "edduu-api"
}`,
      details: [
        'Create a modules directory.',
        'Move reusable infrastructure into the module.',
        'Expose only the inputs required by callers.',
        'Return important outputs.',
        'Keep modules small enough to understand and test.',
      ],
      explanation:
        'Modules allow infrastructure patterns to be reused without copying large configuration blocks between environments.',
      mapStepId: 'terraform',
    },

    {
      id: 'code-observability',
      step: 27,
      title: 'Add Application Observability',
      action:
        'Expose enough telemetry to understand whether the production service is healthy.',
      code: `from prometheus_client import Counter

requests_total = Counter(
    "edduu_requests_total",
    "Total HTTP requests",
)

@app.get("/health")
def health():
    requests_total.inc()
    return {"status": "ok"}`,
      details: [
        'Choose important application signals.',
        'Track request volume.',
        'Track errors and latency.',
        'Export telemetry using an appropriate observability stack.',
        'Create dashboards around user-impacting signals.',
      ],
      explanation:
        'Operational telemetry should help the team answer what happened, how severe it is and where to investigate.',
      mapStepId: 'production',
    },

    {
      id: 'code-security',
      step: 28,
      title: 'Apply Production Security Controls',
      action:
        'Reduce unnecessary privileges and exposure before production deployment.',
      details: [
        'Use least-privilege identities.',
        'Protect cloud credentials.',
        'Restrict Kubernetes permissions.',
        'Protect application Secrets.',
        'Restrict network access.',
        'Review externally exposed endpoints.',
      ],
      url: 'https://kubernetes.io/docs/concepts/security/',
      explanation:
        'Security should be enforced through identity, permissions, secret handling and network boundaries rather than relying on one control.',
      mapStepId: 'production',
    },

    {
      id: 'code-backup',
      step: 29,
      title: 'Design Backup and Recovery',
      action:
        'Create a repeatable recovery procedure for critical application data.',
      details: [
        'Identify critical persistent data.',
        'Choose backup frequency.',
        'Define retention.',
        'Protect backups from accidental deletion.',
        'Document restoration steps.',
        'Test restoration.',
        'Define RPO and RTO.',
      ],
      explanation:
        'A backup that has never been restored is not enough evidence of recoverability. Recovery procedures must be tested.',
      mapStepId: 'production',
    },

    {
      id: 'code-failure-drill',
      step: 30,
      title: 'Run the EDDUU Production Failure Drill',
      action:
        'Exercise the complete platform against realistic failure scenarios.',
      details: [
        'Delete one application Pod and observe self-healing.',
        'Introduce a bad Deployment revision and perform rollback.',
        'Generate controlled traffic and observe HPA behavior.',
        'Inspect logs and metrics during the incident.',
        'Consider a worker-node failure.',
        'Consider database unavailability.',
        'Verify the recovery path.',
        'Document the lessons and required improvements.',
      ],
      command:
        'kubectl delete pod <pod-name> && kubectl get pods -w',
      explanation:
        'The failure drill connects containerization, Kubernetes reconciliation, scaling, observability, recovery and operational decision-making into one production exercise.',
      mapStepId: 'capstone',
    },
  ],
}