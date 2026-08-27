import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide11: GuideDefinition = {
  type: 'code',
  title: 'MC11 Code Guide',
  label: 'MC11 Code Guide',
  objective:
    'Implement a production-oriented scalability and performance architecture for EDDUU using measurable capacity, caching, database optimization, partitioning, replication, autoscaling, observability and failure-recovery practices.',
  steps: [
    {
      step: 1,
      id: 'fastapi-scalable-service',
      title: 'Create a Stateless FastAPI Service',
      action:
        'Create a small stateless FastAPI service that can run safely as multiple replicas.',
      code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/api/v1/courses/{course_id}")
def get_course(course_id: int):
    return {
        "course_id": course_id,
        "service": "learning-service",
    }`,
      command: 'uvicorn app:app --host 0.0.0.0 --port 8000',
      explanation:
        'A stateless service does not depend on local process memory for shared application state, making horizontal scaling easier.',
      details: [
        'Keep shared state outside the process when required.',
        'Expose a health endpoint.',
        'Bind the service to 0.0.0.0 inside a container.',
        'Make the service safe to run as multiple replicas.',
      ],
      mapStepId: 'application-scaling',
    },

    {
      step: 2,
      id: 'health-endpoints',
      title: 'Add Health Endpoints',
      action:
        'Separate basic liveness and readiness concepts for production orchestration.',
      code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/health/live")
def liveness():
    return {"status": "alive"}

@app.get("/health/ready")
def readiness():
    # In production, check required dependencies here.
    return {"status": "ready"}`,
      explanation:
        'Liveness answers whether the process is alive. Readiness answers whether the instance is prepared to receive traffic.',
      details: [
        'Do not treat liveness and readiness as identical concepts.',
        'Readiness can include dependency checks where appropriate.',
        'Use readiness to prevent traffic reaching an unhealthy instance.',
      ],
      mapStepId: 'application-scaling',
    },

    {
      step: 3,
      id: 'load-balancer-service',
      title: 'Expose Multiple Replicas Through a Service',
      action:
        'Create a Kubernetes Service that provides one stable endpoint for multiple application pods.',
      code: `apiVersion: v1
kind: Service
metadata:
  name: learning-service
spec:
  selector:
    app: learning-service
  ports:
    - port: 80
      targetPort: 8000
  type: ClusterIP`,
      command: 'kubectl apply -f service.yaml',
      explanation:
        'The Kubernetes Service provides stable service discovery while distributing traffic to matching healthy pods according to the cluster networking implementation.',
      details: [
        'The selector identifies application pods.',
        'port exposes the service port.',
        'targetPort points to the container application port.',
        'Keep the service definition independent of a specific pod IP.',
      ],
      mapStepId: 'application-scaling',
    },

    {
      step: 4,
      id: 'redis-cache',
      title: 'Add Redis Caching',
      action:
        'Cache frequently requested course information to reduce repeated database reads.',
      code: `import json
import redis

cache = redis.Redis(
    host="redis",
    port=6379,
    decode_responses=True,
)

def get_course_from_cache(course_id: int):
    value = cache.get(f"course:{course_id}")

    if value is None:
        return None

    return json.loads(value)

def cache_course(course: dict):
    cache.setex(
        f"course:{course["id"]}",
        300,
        json.dumps(course),
    )`,
      command: 'pip install redis',
      explanation:
        'Redis can serve frequently requested data faster than repeatedly executing the same database query.',
      details: [
        'Use predictable cache keys.',
        'Set a TTL for data that can become stale.',
        'Define invalidation behavior for important writes.',
        'Monitor cache hit rate.',
      ],
      url: 'https://redis.io/docs/latest/develop/',
      mapStepId: 'caching',
    },

    {
      step: 5,
      id: 'cache-aside',
      title: 'Implement the Cache-Aside Pattern',
      action:
        'Read from cache first and fall back to PostgreSQL when the cached value is absent.',
      code: `def get_course(course_id: int):
    cached = get_course_from_cache(course_id)

    if cached is not None:
        return cached

    course = load_course_from_postgres(course_id)

    if course is not None:
        cache_course(course)

    return course`,
      explanation:
        'Cache-aside keeps the database authoritative while allowing repeated reads to use a faster cache path.',
      details: [
        'Check cache first.',
        'Load from the database on a cache miss.',
        'Populate the cache after a successful database read.',
        'Choose TTL and invalidation based on business freshness requirements.',
      ],
      mapStepId: 'caching',
    },

    {
      step: 6,
      id: 'postgres-connection-pool',
      title: 'Control PostgreSQL Connections',
      action:
        'Use a bounded connection pool so horizontal application scaling does not overwhelm PostgreSQL.',
      code: `from sqlalchemy import create_engine

engine = create_engine(
    "postgresql+psycopg://user:password@postgres/edduu",
    pool_size=10,
    max_overflow=5,
    pool_pre_ping=True,
)`,
      command: 'pip install sqlalchemy psycopg[binary]',
      explanation:
        'Every application replica can create database connections. A bounded pool keeps the total connection count under control.',
      details: [
        'Calculate connection demand across all replicas.',
        'Avoid unbounded connection creation.',
        'Monitor active and idle connections.',
        'Consider an external connection pooler for larger deployments.',
      ],
      mapStepId: 'database',
    },

    {
      step: 7,
      id: 'query-plan',
      title: 'Inspect Slow Queries with EXPLAIN',
      action:
        'Use PostgreSQL query plans to understand how an expensive query is executed.',
      code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT id, course_id, student_id, completed_at
FROM learning_activity
WHERE student_id = 1001
ORDER BY completed_at DESC
LIMIT 50;`,
      command: 'psql -d edduu',
      explanation:
        'EXPLAIN ANALYZE provides evidence about actual query execution instead of relying on assumptions.',
      details: [
        'Inspect sequential scans.',
        'Inspect index usage.',
        'Inspect actual row counts.',
        'Inspect execution time.',
        'Inspect buffer activity.',
      ],
      url: 'https://www.postgresql.org/docs/current/using-explain.html',
      mapStepId: 'database',
    },

    {
      step: 8,
      id: 'database-index',
      title: 'Create a Workload-Driven Index',
      action:
        'Add an index that supports a frequently executed EDDUU query.',
      code: `CREATE INDEX CONCURRENTLY idx_learning_activity_student_completed
ON learning_activity (student_id, completed_at DESC);`,
      command: 'psql -d edduu -f indexes.sql',
      explanation:
        'A composite index can support filtering by student_id and ordering by completed_at for the demonstrated query pattern.',
      details: [
        'Create indexes from observed workload.',
        'Validate the query plan after creation.',
        'Consider index storage cost.',
        'Remember that indexes can add write overhead.',
      ],
      url: 'https://www.postgresql.org/docs/current/indexes.html',
      mapStepId: 'database',
    },

    {
      step: 9,
      id: 'time-partitioning',
      title: 'Partition Learning Activity by Month',
      action:
        'Create a partitioned PostgreSQL table for timestamped learning activity.',
      code: `CREATE TABLE learning_activity (
    id BIGINT NOT NULL,
    student_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    activity_type TEXT NOT NULL,
    occurred_at TIMESTAMPTZ NOT NULL,
    payload JSONB
) PARTITION BY RANGE (occurred_at);

CREATE TABLE learning_activity_2026_08
PARTITION OF learning_activity
FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');

CREATE TABLE learning_activity_2026_09
PARTITION OF learning_activity
FOR VALUES FROM ('2026-09-01') TO ('2026-10-01');`,
      command: 'psql -d edduu -f partitioning.sql',
      explanation:
        'Range partitioning organizes time-based activity into manageable partitions and can support partition pruning for time-bounded queries.',
      details: [
        'Choose a partition key that matches workload patterns.',
        'Create partitions before expected data arrives.',
        'Automate partition creation for future periods.',
        'Monitor partition sizes.',
      ],
      url: 'https://www.postgresql.org/docs/current/ddl-partitioning.html',
      mapStepId: 'data-at-scale',
    },

    {
      step: 10,
      id: 'partition-query',
      title: 'Verify Partition Pruning',
      action:
        'Verify that a time-bounded query can avoid unrelated partitions.',
      code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT COUNT(*)
FROM learning_activity
WHERE occurred_at >= '2026-08-01'
  AND occurred_at < '2026-09-01';`,
      explanation:
        'The execution plan can show whether PostgreSQL is able to eliminate partitions that cannot contain matching records.',
      details: [
        'Use EXPLAIN to validate the behavior.',
        'Check which partitions are scanned.',
        'Keep predicates aligned with the partition key.',
        'Do not assume partitioning automatically makes every query faster.',
      ],
      mapStepId: 'data-at-scale',
    },

    {
      step: 11,
      id: 'read-replica',
      title: 'Configure a Read Replica Architecture',
      action:
        'Define a primary database and replica topology for suitable read workloads.',
      code: `primary
  |
  +---- WAL / replication ----> replica-1
  |
  +---- WAL / replication ----> replica-2`,
      command: 'Document primary, replica and failover responsibilities before implementation.',
      explanation:
        'Replication creates additional database copies that can serve suitable reads and provide recovery options.',
      details: [
        'Primary handles authoritative writes.',
        'Replicas receive replicated changes.',
        'Route only appropriate reads to replicas.',
        'Monitor replication lag.',
        'Keep independent backups.',
      ],
      url: 'https://www.postgresql.org/docs/current/warm-standby.html',
      mapStepId: 'data-at-scale',
    },

    {
      step: 12,
      id: 'replica-routing',
      title: 'Route Read-Heavy Workloads',
      action:
        'Introduce explicit read/write routing in the application data-access layer.',
      code: `PRIMARY_DATABASE_URL = "postgresql://primary/edduu"
READ_DATABASE_URL = "postgresql://replica/edduu"

def write_operation():
    return connect(PRIMARY_DATABASE_URL)

def reporting_read():
    return connect(READ_DATABASE_URL)`,
      explanation:
        'Application routing makes the consistency decision explicit instead of sending every operation to the same database endpoint.',
      details: [
        'Use the primary for authoritative writes.',
        'Use replicas for reads that tolerate replication lag.',
        'Keep read-after-write workflows on an appropriate consistency path.',
        'Define behavior if a replica becomes unavailable.',
      ],
      mapStepId: 'data-at-scale',
    },

    {
      step: 13,
      id: 'replication-lag-monitor',
      title: 'Monitor Replication Lag',
      action:
        'Measure whether replicas are keeping up with the primary.',
      code: `SELECT
    application_name,
    client_addr,
    state,
    sync_state,
    write_lag,
    flush_lag,
    replay_lag
FROM pg_stat_replication;`,
      command: 'psql -d edduu',
      explanation:
        'Replication lag is an operational signal that can affect read freshness and failover decisions.',
      details: [
        'Track replay lag.',
        'Alert when lag exceeds an acceptable threshold.',
        'Understand which workloads can tolerate stale reads.',
        'Investigate persistent lag before it becomes an incident.',
      ],
      mapStepId: 'observability',
    },

    {
      step: 14,
      id: 'aggregation',
      title: 'Create Daily Activity Aggregates',
      action:
        'Precompute common dashboard summaries instead of repeatedly scanning raw historical activity.',
      code: `CREATE TABLE daily_course_activity (
    activity_date DATE NOT NULL,
    course_id BIGINT NOT NULL,
    completion_count BIGINT NOT NULL,
    PRIMARY KEY (activity_date, course_id)
);

INSERT INTO daily_course_activity (
    activity_date,
    course_id,
    completion_count
)
SELECT
    occurred_at::date,
    course_id,
    COUNT(*)
FROM learning_activity
WHERE activity_type = 'course_completed'
GROUP BY occurred_at::date, course_id;`,
      explanation:
        'Precomputed aggregates reduce repeated large scans for common reporting queries.',
      details: [
        'Choose summaries that are queried frequently.',
        'Define acceptable freshness.',
        'Refresh incrementally where practical.',
        'Validate aggregate correctness.',
      ],
      mapStepId: 'data-lifecycle',
    },

    {
      step: 15,
      id: 'analytics-separation',
      title: 'Separate Analytical Processing',
      action:
        'Move heavy historical reporting away from the primary transactional workload.',
      code: `Operational PostgreSQL
        |
        | scheduled / streaming export
        v
Analytical Store
        |
        +--> historical reports
        +--> trend analysis
        +--> administration dashboards`,
      command: 'Document the export frequency and analytical data freshness requirement.',
      explanation:
        'Analytical workloads can scan substantially more data than transactional requests and should not automatically compete with live application traffic.',
      details: [
        'Define source data.',
        'Define export or ingestion frequency.',
        'Define acceptable analytical freshness.',
        'Monitor analytical workload separately.',
      ],
      mapStepId: 'analytics',
    },

    {
      step: 16,
      id: 'data-retention',
      title: 'Implement Data Retention Logic',
      action:
        'Move expired or historical records through controlled lifecycle operations rather than uncontrolled large deletes.',
      code: `DELETE FROM learning_activity
WHERE occurred_at < NOW() - INTERVAL '24 months'
  AND activity_type = 'temporary_event';`,
      command: 'Run lifecycle operations in controlled batches during appropriate maintenance windows.',
      explanation:
        'Retention should follow explicit business and operational requirements. Large uncontrolled deletes can create unnecessary database pressure.',
      details: [
        'Define retention requirements first.',
        'Prefer archival when historical data must be retained.',
        'Delete in controlled batches when deletion is permitted.',
        'Monitor database impact during lifecycle operations.',
      ],
      mapStepId: 'data-lifecycle',
    },

    {
      step: 17,
      id: 'capacity-calculation',
      title: 'Calculate Initial Application Capacity',
      action:
        'Turn measured per-instance throughput into an initial replica estimate.',
      code: `expected_peak_rps = 2000
safe_rps_per_instance = 250
headroom_factor = 1.25

required_capacity = expected_peak_rps * headroom_factor
required_instances = ceil(
    required_capacity / safe_rps_per_instance
)

# 2500 / 250 = 10 instances`,
      explanation:
        'A capacity model should use measured safe throughput rather than the theoretical maximum throughput of a service.',
      details: [
        'Measure safe throughput under the required latency SLO.',
        'Estimate expected peak traffic.',
        'Add an explicit headroom factor.',
        'Recalculate after major architecture changes.',
      ],
      mapStepId: 'capacity',
    },

    {
      step: 18,
      id: 'k6-load-test',
      title: 'Run a Load Test',
      action:
        'Generate controlled traffic against the EDDUU API and measure performance.',
      code: `import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 100,
  duration: '2m',
}

export default function () {
  const response = http.get(
    'http://localhost:8000/api/v1/courses/101'
  )

  check(response, {
    'status is 200': (r) => r.status === 200,
    'latency under 500ms': (r) => r.timings.duration < 500,
  })

  sleep(1)
}`,
      command: 'k6 run load-test.js',
      explanation:
        'A realistic load test provides measurable evidence about throughput, latency and errors under controlled demand.',
      details: [
        'Test realistic request patterns.',
        'Measure p95 and p99 latency.',
        'Record error rate.',
        'Observe database and cache behavior.',
        'Compare results against SLOs.',
      ],
      url: 'https://grafana.com/docs/k6/latest/',
      mapStepId: 'capacity',
    },

    {
      step: 19,
      id: 'kubernetes-hpa',
      title: 'Configure Horizontal Pod Autoscaling',
      action:
        'Allow Kubernetes to adjust application replicas as resource pressure changes.',
      code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: learning-service
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: learning-service
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 65`,
      command: 'kubectl apply -f hpa.yaml',
      explanation:
        'An HPA allows Kubernetes to increase or decrease pod count within defined limits according to configured metrics.',
      details: [
        'Set minimum replicas for baseline capacity.',
        'Set a maximum to prevent uncontrolled growth.',
        'Choose scaling signals carefully.',
        'Test scale-up and scale-down behavior.',
        'Remember that CPU may not always represent the true bottleneck.',
      ],
      url: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/',
      mapStepId: 'autoscaling',
    },

    {
      step: 20,
      id: 'observability-slo',
      title: 'Measure Latency and SLO Signals',
      action:
        'Expose application metrics that can be used to observe latency and reliability.',
      code: `from prometheus_client import Counter, Histogram

REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total HTTP requests",
)

REQUEST_LATENCY = Histogram(
    "http_request_duration_seconds",
    "HTTP request latency",
)

def record_request(duration: float):
    REQUEST_COUNT.inc()
    REQUEST_LATENCY.observe(duration)`,
      command: 'pip install prometheus-client',
      explanation:
        'Application-level metrics provide signals for dashboards, alerting, capacity analysis and SLO evaluation.',
      details: [
        'Track request volume.',
        'Track latency distributions.',
        'Track errors.',
        'Connect measurements to defined SLOs.',
        'Correlate application metrics with database and infrastructure metrics.',
      ],
      mapStepId: 'observability',
    },

    {
      step: 21,
      id: 'docker-image',
      title: 'Package the Service with Docker',
      action:
        'Create a reproducible container image for the scalable EDDUU service.',
      code: `FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]`,
      command: 'docker build -t edduu-learning-service:1.0 .',
      explanation:
        'A container packages the application and its runtime dependencies into a reproducible deployment unit.',
      details: [
        'Keep the image focused on the application runtime.',
        'Avoid unnecessary packages.',
        'Expose the application port.',
        'Use a versioned image tag.',
      ],
      mapStepId: 'application-scaling',
    },

    {
      step: 22,
      id: 'docker-run',
      title: 'Run Multiple Local Replicas',
      action:
        'Run multiple container instances locally to demonstrate horizontal application scaling.',
      code: `docker network create edduu-net

docker run -d \
  --name learning-1 \
  --network edduu-net \
  -p 8001:8000 \
  edduu-learning-service:1.0

docker run -d \
  --name learning-2 \
  --network edduu-net \
  -p 8002:8000 \
  edduu-learning-service:1.0`,
      command: 'docker ps',
      explanation:
        'Running multiple instances demonstrates that the same application image can provide multiple independent service instances.',
      details: [
        'Use separate host ports for local testing.',
        'Verify both instances respond.',
        'Production traffic distribution should be handled by the orchestration or load-balancing layer.',
      ],
      mapStepId: 'application-scaling',
    },

    {
      step: 23,
      id: 'kubernetes-deployment',
      title: 'Deploy Multiple Application Replicas',
      action:
        'Create a Kubernetes Deployment that maintains multiple EDDUU service replicas.',
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: learning-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: learning-service
  template:
    metadata:
      labels:
        app: learning-service
    spec:
      containers:
        - name: learning-service
          image: edduu-learning-service:1.0
          ports:
            - containerPort: 8000
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8000
          livenessProbe:
            httpGet:
              path: /health/live
              port: 8000`,
      command: 'kubectl apply -f deployment.yaml',
      explanation:
        'A Deployment maintains the desired number of application replicas and recreates failed pods.',
      details: [
        'Set an initial replica count.',
        'Use readiness probes for traffic eligibility.',
        'Use liveness probes for process health.',
        'Verify pod distribution and restart behavior.',
      ],
      url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      mapStepId: 'application-scaling',
    },

    {
      step: 24,
      id: 'configmap-secret',
      title: 'Separate Configuration from Code',
      action:
        'Use Kubernetes ConfigMap and Secret objects for runtime configuration.',
      code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: learning-config
data:
  LOG_LEVEL: "INFO"
  CACHE_TTL_SECONDS: "300"

---
apiVersion: v1
kind: Secret
metadata:
  name: learning-secret
type: Opaque
stringData:
  DATABASE_URL: "postgresql://user:password@postgres/edduu"`,
      command: 'kubectl apply -f config.yaml',
      explanation:
        'Runtime configuration should not require rebuilding the application image for every environment.',
      details: [
        'Keep non-sensitive configuration in ConfigMap.',
        'Keep credentials in Secret.',
        'Do not commit real production credentials into source control.',
        'Use a proper external secret-management solution for mature production environments.',
      ],
      mapStepId: 'application-scaling',
    },

    {
      step: 25,
      id: 'failure-drill',
      title: 'Run a Production Failure Drill',
      action:
        'Deliberately remove an application replica and verify that the service remains available.',
      code: `kubectl get pods

kubectl delete pod \
  -l app=learning-service \
  --field-selector=status.phase=Running

kubectl get pods -w`,
      command: 'kubectl get deployment learning-service',
      explanation:
        'Failure drills verify that redundancy actually works instead of assuming that replicas automatically guarantee resilience.',
      details: [
        'Record the expected behavior before the test.',
        'Delete or terminate one replica.',
        'Verify the Deployment recreates it.',
        'Verify the Service continues routing to healthy replicas.',
        'Measure user-visible impact.',
        'Document any unexpected behavior.',
      ],
      mapStepId: 'capstone',
    },

    {
      step: 26,
      id: 'backup-recovery',
      title: 'Validate Backup and Recovery',
      action:
        'Create a recovery procedure for PostgreSQL and verify that the backup can actually restore required data.',
      code: `pg_dump \
  --format=custom \
  --file=edduu_backup.dump \
  edduu

createdb edduu_restore

pg_restore \
  --dbname=edduu_restore \
  edduu_backup.dump`,
      command: 'pg_restore --list edduu_backup.dump',
      explanation:
        'A backup is useful only if the team can restore it successfully within the required recovery objectives.',
      details: [
        'Define backup frequency.',
        'Store backups separately from the primary database.',
        'Test restoration regularly.',
        'Measure recovery time.',
        'Validate restored data.',
        'Document RPO and RTO expectations.',
      ],
      mapStepId: 'capstone',
    },

    {
      step: 27,
      id: 'production-readiness',
      title: 'Run the Complete Scalability Readiness Check',
      action:
        'Validate the complete EDDUU scaling architecture against workload, performance, reliability and operational requirements.',
      code: `# Application
kubectl get deployment learning-service
kubectl get pods

# Service
kubectl get service learning-service

# Autoscaling
kubectl get hpa learning-service

# Database
psql -d edduu -c "SELECT count(*) FROM learning_activity;"

# Performance
k6 run load-test.js

# Observability
curl http://localhost:8000/metrics`,
      command: 'kubectl get deployment,service,hpa,pods',
      explanation:
        'Production readiness is the final integration step. The architecture must demonstrate scalable compute, protected database access, measurable performance, controlled data growth, observability and tested recovery.',
      details: [
        'Verify application replicas.',
        'Verify service routing.',
        'Verify autoscaling configuration.',
        'Verify database performance.',
        'Verify cache behavior.',
        'Verify partitioning where applicable.',
        'Verify replication health.',
        'Run performance tests.',
        'Review SLO measurements.',
        'Run failure drills.',
        'Verify backup recovery.',
        'Document remaining capacity and reliability risks.',
      ],
      mapStepId: 'capstone',
    },
  ],
}
