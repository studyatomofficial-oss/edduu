import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session04: SessionDefinition = {
  id: 'mc09-session-04',
  number: 4,
  stage: 'discover',
  title: 'Kubernetes Workloads & Networking - Configuration, Services and Traffic',
  objective:
    'Understand how Kubernetes supplies configuration and secrets, exposes workloads through Services and Ingress, verifies application health with probes, and handles long-running workloads and scheduled jobs.',
  experiences: [
    {
      id: 'mc09-s04-kubernetes-workloads-lesson',
      type: 'lesson',
      title: 'From External Request to a Healthy Kubernetes Workload',
      description:
        'Follow an EDDUU request through Kubernetes networking while learning how configuration, secrets, health checks and workload types fit together.',
      lesson: {
        opening:
          'A Kubernetes Pod can be running and still be unusable. The application may have incorrect configuration, may not be ready to receive traffic, or may need a stable network identity because Pods can disappear and be replaced. Production Kubernetes architecture therefore needs more than Pods and Deployments.',
        sections: [
          {
            heading: '1. Configuration should be separate from the application image',
            explanation:
              'A container image should remain reusable across environments. Kubernetes provides mechanisms for supplying environment-specific configuration without rebuilding the application image.',
            example:
              'The EDDUU API can use different feature flags, service endpoints and environment settings in development, staging and production while keeping the same container image.',
          },
          {
            heading: '2. ConfigMaps hold non-sensitive configuration',
            explanation:
              'A ConfigMap can provide non-sensitive configuration values to workloads. It separates configuration data from the application artifact.',
            example:
              'EDDUU can provide an application mode, logging level or internal service endpoint through a ConfigMap rather than hard-coding the value into the image.',
          },
          {
            heading: '3. Secrets are for sensitive configuration',
            explanation:
              'Credentials, tokens and other sensitive values require stronger handling than ordinary configuration. Kubernetes Secrets provide a mechanism for supplying such values separately from normal configuration.',
            example:
              'The EDDUU API can receive database credentials through a Secret rather than storing the password inside the Docker image or source repository.',
          },
          {
            heading: '4. Configuration injection happens at runtime',
            explanation:
              'Configuration can be exposed to a container through environment variables or mounted files depending on application and security requirements. The important architectural idea is that runtime configuration is separated from the immutable application image.',
            example:
              'The same EDDUU API image can read its production database endpoint and credentials from Kubernetes-managed configuration when the Pod starts.',
          },
          {
            heading: '5. Pods are replaceable, so their IP addresses should not be application contracts',
            explanation:
              'Pod identities and IP addresses can change when workloads are rescheduled or replaced. Applications therefore need a stable mechanism for reaching a group of matching Pods.',
            example:
              'An EDDUU frontend should not store the IP address of one API Pod because that Pod can be replaced at any time.',
          },
          {
            heading: '6. A Service provides stable access to Pods',
            explanation:
              'A Kubernetes Service provides a stable network abstraction in front of a set of Pods selected by labels. Traffic can then be routed to available matching workload instances.',
            example:
              'The EDDUU API Service can select healthy API Pods even when individual Pod IP addresses change.',
          },
          {
            heading: '7. Service discovery avoids hard-coded Pod addresses',
            explanation:
              'Applications can use a Service name as a stable destination instead of discovering and storing individual Pod IP addresses. Kubernetes networking can resolve the Service to the appropriate workload endpoints.',
            example:
              'An EDDUU internal worker can connect to the API Service using its Kubernetes service identity instead of targeting a particular Pod.',
          },
          {
            heading: '8. Cluster-internal traffic and external traffic are different',
            explanation:
              'Not every Service should be directly exposed to the internet. Internal services can remain accessible only inside the cluster while external traffic can enter through a controlled edge mechanism.',
            example:
              'EDDUU PostgreSQL should normally remain internal while the public web application reaches the intended API entry point.',
          },
          {
            heading: '9. Ingress provides an HTTP entry point',
            explanation:
              'An Ingress can define HTTP or HTTPS routing rules that direct external requests toward appropriate Kubernetes Services. In modern deployments it works with an Ingress controller or equivalent gateway implementation.',
            example:
              'A request for api.edduu.com can be routed through the cluster edge to the EDDUU API Service.',
          },
          {
            heading: '10. Ingress is not the application itself',
            explanation:
              'Ingress defines routing intent, while an implementation such as an Ingress controller or gateway performs the actual traffic handling. Separating routing policy from application Pods keeps responsibilities clear.',
            example:
              'EDDUU can define that /api requests should reach the API Service while the routing component handles incoming HTTP traffic.',
          },
          {
            heading: '11. Running does not mean ready',
            explanation:
              'A container process can be running while the application is still starting or unable to serve requests correctly. Readiness checks allow Kubernetes to determine whether a workload should receive traffic.',
            example:
              'An EDDUU API Pod may be running while it is still establishing required connections. The Pod should not receive user traffic until its readiness condition is satisfied.',
          },
          {
            heading: '12. Readiness probes protect traffic routing',
            explanation:
              'A readiness probe tests whether the application is ready to serve requests. When a Pod is not ready, Kubernetes can remove it from the Service endpoints used for normal traffic.',
            example:
              'During an EDDUU API startup sequence, a failed readiness check can keep the Pod out of the active request path until the API is actually ready.',
          },
          {
            heading: '13. Liveness and readiness solve different problems',
            explanation:
              'A readiness failure means the workload should temporarily stop receiving traffic. A liveness failure can indicate that the application is unhealthy enough that restarting the container may be appropriate.',
            example:
              'If an EDDUU API is temporarily overloaded during startup, readiness may prevent traffic. If the process becomes permanently stuck and fails its liveness condition, Kubernetes can restart the container.',
          },
          {
            heading: '14. Health checks must represent real application health',
            explanation:
              'A probe should test a meaningful condition without creating unnecessary load or reporting false health. A successful TCP connection alone may not prove that an application can actually serve requests.',
            example:
              'EDDUU can expose a lightweight health endpoint that verifies the API process is responsive and ready for traffic without performing an expensive database operation on every probe.',
          },
          {
            heading: '15. Startup behavior can require special consideration',
            explanation:
              'Applications that need significant startup time should not be treated as permanently unhealthy simply because they are not immediately ready. Kubernetes supports startup-oriented health-check behavior for applications with longer initialization phases.',
            example:
              'If an EDDUU service performs required initialization before serving traffic, its startup behavior should be represented so health checks do not trigger unnecessary restarts during legitimate startup.',
          },
          {
            heading: '16. Jobs are for finite workloads',
            explanation:
              'A Kubernetes Job represents work that should run to completion rather than a continuously available service.',
            example:
              'EDDUU can use a Job for a one-time database migration or controlled data-processing task that should finish and report completion.',
          },
          {
            heading: '17. CronJobs schedule recurring work',
            explanation:
              'A CronJob creates Jobs according to a schedule. It is useful for recurring batch operations rather than continuously serving HTTP traffic.',
            example:
              'EDDUU could schedule a nightly cleanup or reporting task using a CronJob rather than keeping a dedicated API container running for that purpose.',
          },
          {
            heading: '18. Long-running services and batch jobs need different workload models',
            explanation:
              'A web API normally needs a continuously available replicated workload, while a scheduled report may need to start, complete and stop. Choosing the correct Kubernetes workload type avoids unnecessary infrastructure and operational complexity.',
            example:
              'The EDDUU API should normally use a Deployment, while a nightly analytics export can be modeled as a CronJob.',
          },
          {
            heading: '19. Follow one EDDUU request through the cluster',
            explanation:
              'A production request can travel through an external routing layer, a Kubernetes Service and then to a healthy Pod. Each layer has a separate responsibility.',
            example:
              'A student opens EDDUU, the request reaches the external routing layer, the API Service selects a healthy API Pod and the application processes the request using its internal dependencies.',
          },
          {
            heading: '20. Debug traffic from the outside inward',
            explanation:
              'When a request fails, investigate the path systematically: external routing, Service existence, Service selectors, healthy endpoints, Pod readiness, application listening state and downstream dependencies.',
            example:
              'If EDDUU returns a gateway error, the engineer should determine whether the request reached the cluster, whether the Service has endpoints and whether the selected API Pods are actually ready.',
          },
        ],
        realWorldConnection:
          'Production Kubernetes systems require more than workload scheduling. Configuration, secrets, stable networking, health checks and workload-specific controllers determine whether an application can reliably receive traffic and execute background work.',
        keyIdea:
          'Pods are replaceable workloads. ConfigMaps and Secrets supply runtime configuration, Services provide stable access to Pods, Ingress provides controlled HTTP entry, and health probes determine whether workloads should receive traffic or be restarted.',
        recap: [
          'ConfigMaps separate non-sensitive configuration from application images.',
          'Secrets provide a mechanism for supplying sensitive configuration separately from normal configuration.',
          'Pod IP addresses are replaceable and should not become application contracts.',
          'Services provide stable access to groups of matching Pods.',
          'Service discovery allows workloads to communicate without hard-coded Pod addresses.',
          'Ingress can provide HTTP or HTTPS routing into the cluster through an appropriate controller or gateway.',
          'Readiness determines whether a workload should receive traffic.',
          'Liveness can identify workloads that should be restarted.',
          'Jobs represent finite work and CronJobs schedule recurring finite work.',
          'Production debugging should follow the request path from the external edge toward the application and its dependencies.',
        ],
      },
    },
    {
      id: 'mc09-s04-kubernetes-workloads-animation',
      type: 'animation',
      title: 'Follow One EDDUU Request Through Kubernetes',
      description:
        'Visualize how external traffic reaches a healthy API Pod and how readiness controls whether that Pod receives requests.',
      animation: {
        visual: 'architecture',
        opening:
          'A reliable Kubernetes request path has several distinct responsibilities. The external entry point routes traffic, the Service selects matching workloads and readiness determines which Pods are allowed to receive normal traffic.',
        parts: [
          {
            id: 'browser',
            label: 'STUDENT BROWSER',
            explanation:
              'The request starts outside the Kubernetes cluster.',
            example:
              'A student opens the EDDUU application and requests API data.',
          },
          {
            id: 'ingress',
            label: 'INGRESS / EDGE ROUTING',
            explanation:
              'The external HTTP request enters through the configured routing layer.',
            example:
              'api.edduu.com routes the request toward the EDDUU API Service.',
          },
          {
            id: 'service',
            label: 'EDDUU API SERVICE',
            explanation:
              'The Service provides a stable endpoint and selects matching API Pods.',
            example:
              'The Service does not depend on a permanent identity for any individual API Pod.',
          },
          {
            id: 'readiness',
            label: 'READINESS CHECK',
            explanation:
              'Only Pods considered ready should normally receive Service traffic.',
            example:
              'An API Pod still starting remains outside the active traffic path until its readiness condition succeeds.',
          },
          {
            id: 'pod',
            label: 'HEALTHY API POD',
            explanation:
              'The Service routes the request to an available matching Pod.',
            example:
              'The selected EDDUU API Pod handles the student request.',
          },
          {
            id: 'container',
            label: 'API CONTAINER',
            explanation:
              'The application process executes inside the Pod container.',
            example:
              'The FastAPI process performs authentication and request processing.',
          },
          {
            id: 'dependencies',
            label: 'POSTGRES + REDIS',
            explanation:
              'The API can communicate with internal dependencies using stable service identities.',
            example:
              'The EDDUU API retrieves persistent data from PostgreSQL and cached data from Redis.',
          },
          {
            id: 'failure',
            label: 'POD BECOMES UNREADY',
            explanation:
              'A failing readiness condition causes the Pod to stop receiving normal Service traffic.',
            example:
              'A problematic EDDUU API instance is removed from the active endpoint set while healthy replicas continue serving requests.',
          },
        ],
        closing:
          'The request path is a chain of responsibilities: edge routing, stable Service identity, readiness, workload execution and downstream dependencies.',
      },
    },
    {
      id: 'mc09-s04-kubernetes-workloads-simulation',
      type: 'simulation',
      title: 'Diagnose the EDDUU Kubernetes Traffic Path',
      description:
        'Identify which Kubernetes mechanism should be investigated for each configuration, traffic and workload problem.',
      simulation: {
        instruction:
          'Match each EDDUU situation with the Kubernetes concept that owns the responsibility.',
        items: [
          {
            id: 'config-item',
            label:
              'The same API image needs different non-sensitive application settings in staging and production.',
            description:
              'The application artifact should remain reusable.',
            correctTargetId: 'config-target',
          },
          {
            id: 'secret-item',
            label:
              'The API needs a database password without placing it inside the Docker image.',
            description:
              'The value is sensitive.',
            correctTargetId: 'secret-target',
          },
          {
            id: 'service-item',
            label:
              'The API Pods are replaced frequently but clients need one stable internal destination.',
            description:
              'Individual Pod IP addresses cannot be trusted as permanent endpoints.',
            correctTargetId: 'service-target',
          },
          {
            id: 'readiness-item',
            label:
              'An API process is running but must not receive traffic until initialization is complete.',
            description:
              'The application is alive but not yet ready.',
            correctTargetId: 'readiness-target',
          },
          {
            id: 'liveness-item',
            label:
              'An API process is stuck and should be restarted when the health condition remains failed.',
            description:
              'The workload is running but unhealthy enough to require restart behavior.',
            correctTargetId: 'liveness-target',
          },
          {
            id: 'job-item',
            label:
              'EDDUU needs to run one database migration to completion.',
            description:
              'The workload is finite rather than continuously serving requests.',
            correctTargetId: 'job-target',
          },
          {
            id: 'cron-item',
            label:
              'EDDUU needs to generate a report automatically every night.',
            description:
              'The finite workload should run repeatedly on a schedule.',
            correctTargetId: 'cron-target',
          },
          {
            id: 'ingress-item',
            label:
              'External HTTPS requests need controlled routing toward the API Service.',
            description:
              'The request originates outside the cluster.',
            correctTargetId: 'ingress-target',
          },
        ],
        targets: [
          {
            id: 'config-target',
            label: 'CONFIGMAP',
            description:
              'Provides non-sensitive runtime configuration.',
          },
          {
            id: 'secret-target',
            label: 'SECRET',
            description:
              'Provides sensitive configuration separately from normal application settings.',
          },
          {
            id: 'service-target',
            label: 'SERVICE',
            description:
              'Provides stable access to changing Pods.',
          },
          {
            id: 'readiness-target',
            label: 'READINESS PROBE',
            description:
              'Controls whether the workload should receive normal traffic.',
          },
          {
            id: 'liveness-target',
            label: 'LIVENESS PROBE',
            description:
              'Helps identify workloads that should be restarted.',
          },
          {
            id: 'job-target',
            label: 'JOB',
            description:
              'Runs finite work toward completion.',
          },
          {
            id: 'cron-target',
            label: 'CRONJOB',
            description:
              'Creates recurring Jobs according to a schedule.',
          },
          {
            id: 'ingress-target',
            label: 'INGRESS',
            description:
              'Defines external HTTP or HTTPS routing toward Services.',
          },
        ],
        successMessage:
          'Correct. Kubernetes separates configuration, secrets, stable networking, health management, external routing and batch execution into different responsibilities.',
        failureMessage:
          'First classify the problem: configuration, secret, stable endpoint, readiness, restart health, finite work, scheduled work or external HTTP routing.',
      },
    },
    {
      id: 'mc09-s04-kubernetes-workloads-question',
      type: 'question',
      title: 'Kubernetes Workloads Check',
      description:
        'Check whether you can distinguish a running Pod from a Pod that should actually receive production traffic.',
      question: {
        id: 'mc09-s04-kubernetes-workloads',
        type: 'single-choice',
        question:
          'An EDDUU API Pod process is running, but the application is still loading required dependencies and cannot safely serve requests. What should prevent the Service from sending normal traffic to it?',
        options: [
          {
            id: 'readiness',
            text:
              'A readiness probe should report that the Pod is not yet ready, keeping it out of the active Service endpoint set until it can serve traffic.',
            correct: true,
          },
          {
            id: 'image',
            text:
              'The Docker image should be rebuilt every time the application takes a few seconds to start.',
            correct: false,
          },
          {
            id: 'pod-ip',
            text:
              'The client should connect directly to the Pod IP and retry until the application becomes ready.',
            correct: false,
          },
          {
            id: 'cronjob',
            text:
              'The API should be converted into a CronJob so Kubernetes waits for startup completion.',
            correct: false,
          },
        ],
        explanation:
          'A running process is not necessarily ready to serve traffic. Readiness is specifically used to control whether a workload should participate in normal Service traffic.',
      },
    },
  ],
}