import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session08: SessionDefinition = {
  id: 'mc09-session-08',
  number: 8,
  stage: 'discover',
  title: 'EDDUU Infrastructure Capstone - Design the Complete Production Platform',
  objective:
    'Design an end-to-end production infrastructure for EDDUU by combining containers, Docker, Kubernetes, networking, scaling, Infrastructure as Code, security, observability, recovery and cost management.',
  experiences: [
    {
      id: 'mc09-s08-capstone-lesson',
      type: 'lesson',
      title: 'Design the Complete EDDUU Production Platform',
      description:
        'Bring every concept from MC09 together into one production architecture and reason about the trade-offs required to operate it safely.',
      lesson: {
        opening:
          'EDDUU is now moving from a collection of infrastructure concepts to one production platform. The goal is not to choose the most complicated architecture. The goal is to create a platform that can serve users reliably, scale when demand changes, recover from failure, remain secure and stay understandable for the engineering team.',
        sections: [
          {
            heading: '1. Start with the application boundary',
            explanation:
              'The architecture should begin by identifying what the application actually needs to run. EDDUU has user-facing applications, APIs, background workloads and persistent data requirements.',
            example:
              'The EDDUU platform can separate its web frontend, API services, background processing and persistent data rather than treating the entire system as one undifferentiated workload.',
          },
          {
            heading: '2. Package application components consistently',
            explanation:
              'Container images provide a consistent application package containing the runtime and application dependencies required to execute the workload.',
            example:
              'The EDDUU API can be packaged as a Docker image so the same artifact can move through development, staging and production.',
          },
          {
            heading: '3. Keep images immutable and environment-neutral',
            explanation:
              'The application image should not contain environment-specific credentials or configuration that changes between deployments. Runtime configuration should be supplied separately.',
            example:
              'The same EDDUU API image can be deployed to staging and production while receiving different runtime configuration values.',
          },
          {
            heading: '4. Use Kubernetes for workload orchestration',
            explanation:
              'Kubernetes provides the control plane for scheduling, maintaining and exposing containerized workloads across a cluster.',
            example:
              'EDDUU can run multiple API replicas as Kubernetes-managed workloads so failed Pods can be replaced and traffic can be distributed across available instances.',
          },
          {
            heading: '5. Separate workload responsibilities',
            explanation:
              'Different application behaviors should use appropriate workload models. Long-running APIs, finite jobs and recurring jobs have different operational requirements.',
            example:
              'EDDUU can use Deployments for APIs, Jobs for finite migrations and CronJobs for scheduled reporting or maintenance work.',
          },
          {
            heading: '6. Create stable service boundaries',
            explanation:
              'Kubernetes Services provide stable network identities for groups of changing Pods. Internal components should communicate through stable service boundaries rather than hard-coded Pod addresses.',
            example:
              'The EDDUU API can reach an internal service through its Kubernetes Service identity even when individual Pods are replaced.',
          },
          {
            heading: '7. Control external traffic',
            explanation:
              'External users should enter through a controlled network edge rather than directly reaching arbitrary application Pods.',
            example:
              'EDDUU can use DNS, TLS and an HTTP routing layer to direct public requests toward the intended Kubernetes Service.',
          },
          {
            heading: '8. Protect application readiness',
            explanation:
              'A workload should receive production traffic only after it is ready to serve requests. Health checks become part of the deployment and traffic-management design.',
            example:
              'A newly deployed EDDUU API Pod can remain outside normal Service traffic until its readiness condition succeeds.',
          },
          {
            heading: '9. Design for horizontal scaling',
            explanation:
              'Stateless API workloads should generally be designed so additional replicas can serve requests without requiring Pod-local application state.',
            example:
              'EDDUU can scale its API from three replicas to more replicas during high demand while persistent data remains in external managed services.',
          },
          {
            heading: '10. Connect autoscaling to meaningful signals',
            explanation:
              'Autoscaling should respond to signals that represent actual workload pressure. CPU may be useful, but application-level metrics can sometimes provide stronger evidence of demand.',
            example:
              'EDDUU can evaluate request rate, latency, queue depth or resource utilization when deciding how its workloads should scale.',
          },
          {
            heading: '11. Plan infrastructure capacity',
            explanation:
              'More Pods require more infrastructure capacity. A production architecture therefore needs sufficient worker-node capacity and a strategy for adding capacity when demand grows.',
            example:
              'If EDDUU needs more API replicas but worker nodes are full, the infrastructure layer must provide additional schedulable capacity.',
          },
          {
            heading: '12. Use Infrastructure as Code for the platform',
            explanation:
              'The infrastructure required by the platform should be reproducible through version-controlled Infrastructure as Code rather than depending on undocumented manual configuration.',
            example:
              'Terraform can define EDDUU network resources, compute infrastructure, database resources and supporting cloud components.',
          },
          {
            heading: '13. Keep infrastructure and workload orchestration conceptually separate',
            explanation:
              'Infrastructure as Code and Kubernetes operate at different layers. Terraform can create and manage infrastructure while Kubernetes manages application workloads on that infrastructure.',
            example:
              'Terraform can provision the infrastructure required for the EDDUU cluster while Kubernetes manages API Pods running inside the cluster.',
          },
          {
            heading: '14. Protect Terraform state',
            explanation:
              'Production infrastructure state is operationally important and should be stored using a controlled collaboration strategy with appropriate access protection.',
            example:
              'EDDUU can use protected remote Terraform state so infrastructure automation and engineers operate against a consistent state source.',
          },
          {
            heading: '15. Make infrastructure changes reviewable',
            explanation:
              'Infrastructure changes can affect availability, security, data and cost. Plans should therefore be reviewed before high-impact production changes are applied.',
            example:
              'A change to the EDDUU production database or network can be reviewed through a Terraform plan before execution.',
          },
          {
            heading: '16. Build security boundaries into the architecture',
            explanation:
              'Security should be part of the infrastructure design rather than added after deployment. Identity, permissions, network boundaries and secrets all need explicit ownership.',
            example:
              'EDDUU can expose only intended public endpoints while keeping databases and sensitive internal services on restricted network paths.',
          },
          {
            heading: '17. Apply least privilege',
            explanation:
              'Services and people should receive only the permissions required for their responsibilities. This reduces the potential blast radius of compromised credentials or applications.',
            example:
              'The EDDUU reporting workload should not receive cluster-admin permissions merely because it needs access to reporting data.',
          },
          {
            heading: '18. Separate secrets from normal configuration',
            explanation:
              'Sensitive values should be supplied through appropriate secret-management mechanisms rather than embedded in application images or committed as plain text.',
            example:
              'EDDUU database credentials can be injected into the workload through an appropriate secret workflow while ordinary feature configuration remains separate.',
          },
          {
            heading: '19. Design observability from the start',
            explanation:
              'Production systems need enough telemetry to detect and investigate problems. Metrics, logs and traces should be connected to the services and user journeys they represent.',
            example:
              'EDDUU can monitor API latency and error rate, inspect structured logs and trace requests through downstream dependencies.',
          },
          {
            heading: '20. Define actionable alerts',
            explanation:
              'Alerts should identify meaningful conditions that require action and should be connected to service ownership.',
            example:
              'EDDUU can alert the API owner when sustained error rate or latency exceeds an operational target.',
          },
          {
            heading: '21. Build recovery into the architecture',
            explanation:
              'Production data and services need recovery mechanisms for accidental deletion, corruption, infrastructure failure and other disruptions.',
            example:
              'EDDUU can maintain protected database backups and periodically test restoration so the recovery process is known to work.',
          },
          {
            heading: '22. Define RPO and RTO by business importance',
            explanation:
              'Different systems may have different recovery requirements. Critical student-facing services may require stronger recovery objectives than secondary analytics systems.',
            example:
              'EDDUU leadership can define stricter RPO and RTO targets for critical learning data than for non-critical reporting artifacts.',
          },
          {
            heading: '23. Design for failure rather than assuming perfect infrastructure',
            explanation:
              'Nodes, Pods, services and deployments can fail. A production platform should continue operating when individual components fail wherever the business requirements justify that resilience.',
            example:
              'EDDUU can distribute API replicas across appropriate failure boundaries so a single worker-node failure does not remove every API instance.',
          },
          {
            heading: '24. Treat cost as an architecture constraint',
            explanation:
              'Reliability and performance have infrastructure costs. The architecture should make those trade-offs visible rather than assuming unlimited resources.',
            example:
              'EDDUU can evaluate whether additional replicas, larger nodes, higher database capacity or more observability retention actually improve the required user outcomes.',
          },
          {
            heading: '25. Make operational ownership explicit',
            explanation:
              'Every production service needs clear ownership for deployments, alerts, infrastructure, security and incident response.',
            example:
              'The EDDUU API should have a defined owner responsible for responding to production alerts and coordinating recovery when necessary.',
          },
          {
            heading: '26. Validate the architecture through failure scenarios',
            explanation:
              'A design should be tested mentally and operationally against realistic failures rather than judged only by how clean the architecture diagram looks.',
            example:
              'EDDUU should ask what happens if an API Pod crashes, a node fails, a deployment introduces errors, the database becomes unavailable or traffic suddenly increases tenfold.',
          },
          {
            heading: '27. The final architecture is a set of trade-offs',
            explanation:
              'There is no universal architecture that is optimal for every workload. Production design balances reliability, performance, security, complexity, operational effort and cost.',
            example:
              'EDDUU may choose a simpler managed service rather than operating a complex self-managed component when the additional operational control does not justify its cost.',
          },
          {
            heading: '28. Executive-level infrastructure decisions connect technology to outcomes',
            explanation:
              'Technical infrastructure decisions should ultimately be explainable through business outcomes such as user experience, reliability, delivery speed, security and cost.',
            example:
              'An EDDUU infrastructure investment should be justified by the reliability, scale or delivery capability it provides rather than by technology popularity alone.',
          },
        ],
        realWorldConnection:
          'The EDDUU capstone represents the full platform lifecycle: package the application, orchestrate workloads, expose traffic safely, scale capacity, provision infrastructure as code, secure access, observe behavior, recover from failure and operate within business constraints.',
        keyIdea:
          'A production platform is a connected system of responsibilities. Containers package workloads, Kubernetes orchestrates them, Terraform provisions infrastructure, and production operations make the platform secure, observable, recoverable and economically sustainable.',
        recap: [
          'Container images provide consistent application artifacts.',
          'Kubernetes orchestrates and maintains containerized workloads.',
          'Services provide stable internal network boundaries.',
          'Ingress or equivalent edge routing controls external traffic.',
          'Readiness protects traffic from unready workloads.',
          'Horizontal scaling provides additional application capacity.',
          'Infrastructure capacity must support workload scaling.',
          'Terraform makes infrastructure reproducible and reviewable.',
          'Security requires least privilege, network boundaries and controlled secrets.',
          'Observability requires meaningful metrics, logs, traces and alerts.',
          'Backups and tested restoration support recovery.',
          'RPO and RTO translate recovery needs into measurable requirements.',
          'Failure scenarios should be part of architecture validation.',
          'Cost, complexity and operational ownership are part of production architecture.',
        ],
      },
    },
    {
      id: 'mc09-s08-capstone-animation',
      type: 'animation',
      title: 'EDDUU End-to-End Infrastructure Flow',
      description:
        'Visualize the complete path from a student request through production infrastructure, Kubernetes workloads and persistent services.',
      animation: {
        visual: 'architecture',
        opening:
          'This is the complete EDDUU production platform. Every major infrastructure concept from MC09 now has a place and a responsibility.',
        parts: [
          {
            id: 'student',
            label: 'STUDENT',
            explanation:
              'A student starts the interaction through the public EDDUU application.',
            example:
              'The student opens the EDDUU web application and requests learning content.',
          },
          {
            id: 'dns',
            label: 'DNS',
            explanation:
              'The public domain resolves toward the configured production entry point.',
            example:
              'The EDDUU domain directs the browser toward the production traffic edge.',
          },
          {
            id: 'tls',
            label: 'TLS / EDGE',
            explanation:
              'Secure transport protects the external connection and the edge controls incoming traffic.',
            example:
              'The browser establishes an HTTPS connection before sending application requests.',
          },
          {
            id: 'ingress',
            label: 'INGRESS / ROUTING',
            explanation:
              'The external request is routed toward the intended Kubernetes Service.',
            example:
              'API traffic is directed toward the EDDUU API Service.',
          },
          {
            id: 'service',
            label: 'KUBERNETES SERVICE',
            explanation:
              'The Service provides stable access to the changing set of API Pods.',
            example:
              'The Service selects available EDDUU API endpoints instead of relying on fixed Pod IP addresses.',
          },
          {
            id: 'pods',
            label: 'API REPLICAS',
            explanation:
              'Multiple healthy API Pods process requests and provide capacity and availability.',
            example:
              'Several EDDUU API replicas share the production request load.',
          },
          {
            id: 'autoscaling',
            label: 'AUTOSCALING',
            explanation:
              'Workload metrics can trigger changes in desired replica count.',
            example:
              'A sustained increase in demand causes the EDDUU API workload to request additional replicas.',
          },
          {
            id: 'data',
            label: 'POSTGRES / REDIS / STORAGE',
            explanation:
              'Persistent and shared application state lives in appropriate data services rather than disposable API Pods.',
            example:
              'The EDDUU API retrieves persistent records from PostgreSQL and uses Redis for appropriate cached or transient workloads.',
          },
          {
            id: 'terraform',
            label: 'TERRAFORM INFRASTRUCTURE',
            explanation:
              'The underlying infrastructure is defined and managed through Infrastructure as Code.',
            example:
              'Terraform manages the network, compute and supporting infrastructure required by the production platform.',
          },
          {
            id: 'observability',
            label: 'OBSERVABILITY',
            explanation:
              'Metrics, logs and traces provide visibility into platform behavior.',
            example:
              'EDDUU operations can detect API errors and investigate request latency using telemetry.',
          },
          {
            id: 'security',
            label: 'SECURITY CONTROLS',
            explanation:
              'Identity, permissions, network boundaries and secrets protect the platform.',
            example:
              'Only authorized workloads and operators receive the permissions required for their responsibilities.',
          },
          {
            id: 'recovery',
            label: 'BACKUP + RECOVERY',
            explanation:
              'Protected backups and tested recovery procedures support resilience when serious failures occur.',
            example:
              'EDDUU can restore critical data after a destructive infrastructure or application event.',
          },
          {
            id: 'operations',
            label: 'PRODUCTION OPERATIONS',
            explanation:
              'People and processes continuously operate, improve and respond to the platform.',
            example:
              'The responsible EDDUU team reviews alerts, manages deployments and responds to incidents.',
          },
        ],
        closing:
          'The architecture is successful when all layers work together to provide a reliable user experience while keeping security, recovery, operations and cost under control.',
      },
    },
    {
      id: 'mc09-s08-capstone-simulation',
      type: 'simulation',
      title: 'Architect the EDDUU Production Platform',
      description:
        'Make architecture decisions across the full MC09 stack and connect each requirement to the appropriate technology responsibility.',
      simulation: {
        instruction:
          'Match each EDDUU requirement with the infrastructure capability that should own it.',
        items: [
          {
            id: 'package-item',
            label:
              'The engineering team needs one consistent artifact containing the API application and its runtime dependencies.',
            description:
              'The application should be packaged consistently before deployment.',
            correctTargetId: 'container-target',
          },
          {
            id: 'orchestrate-item',
            label:
              'The platform must maintain multiple API instances, replace failed Pods and manage desired workload state.',
            description:
              'The application needs workload orchestration.',
            correctTargetId: 'kubernetes-target',
          },
          {
            id: 'stable-item',
            label:
              'API clients need a stable destination even when individual Pods are replaced.',
            description:
              'The endpoint should not depend on Pod identity.',
            correctTargetId: 'service-target',
          },
          {
            id: 'scale-item',
            label:
              'The API needs more replicas automatically when workload demand increases.',
            description:
              'Replica count should respond to selected scaling signals.',
            correctTargetId: 'hpa-target',
          },
          {
            id: 'infra-item',
            label:
              'The team needs reproducible cloud networks, compute and supporting resources stored in version control.',
            description:
              'Infrastructure should be defined as code.',
            correctTargetId: 'terraform-target',
          },
          {
            id: 'security-item',
            label:
              'A service should receive only the permissions required for its function.',
            description:
              'Access should be minimized.',
            correctTargetId: 'security-target',
          },
          {
            id: 'observe-item',
            label:
              'The team needs to detect latency and error-rate changes and investigate failed requests.',
            description:
              'The platform needs operational visibility.',
            correctTargetId: 'observability-target',
          },
          {
            id: 'recover-item',
            label:
              'Critical data must be recoverable after destructive failure.',
            description:
              'Recovery capability must be designed and tested.',
            correctTargetId: 'recovery-target',
          },
          {
            id: 'incident-item',
            label:
              'A production outage requires an identified owner, mitigation process and communication path.',
            description:
              'The platform needs operational incident management.',
            correctTargetId: 'incident-target',
          },
          {
            id: 'cost-item',
            label:
              'The team needs to ensure additional replicas and infrastructure capacity remain economically justified.',
            description:
              'Architecture must balance performance and spending.',
            correctTargetId: 'cost-target',
          },
        ],
        targets: [
          {
            id: 'container-target',
            label: 'CONTAINER IMAGE',
            description:
              'Packages an application and its runtime dependencies.',
          },
          {
            id: 'kubernetes-target',
            label: 'KUBERNETES',
            description:
              'Orchestrates containerized workloads.',
          },
          {
            id: 'service-target',
            label: 'KUBERNETES SERVICE',
            description:
              'Provides stable network access to changing Pods.',
          },
          {
            id: 'hpa-target',
            label: 'HORIZONTAL POD AUTOSCALER',
            description:
              'Adjusts workload replica count using configured scaling signals.',
          },
          {
            id: 'terraform-target',
            label: 'TERRAFORM',
            description:
              'Defines and manages infrastructure as code.',
          },
          {
            id: 'security-target',
            label: 'SECURITY / IAM',
            description:
              'Controls identity, permissions and protected access.',
          },
          {
            id: 'observability-target',
            label: 'OBSERVABILITY',
            description:
              'Provides metrics, logs, traces and actionable visibility.',
          },
          {
            id: 'recovery-target',
            label: 'BACKUP + DISASTER RECOVERY',
            description:
              'Provides recovery capability after serious failures.',
          },
          {
            id: 'incident-target',
            label: 'INCIDENT RESPONSE',
            description:
              'Coordinates production response, mitigation and recovery.',
          },
          {
            id: 'cost-target',
            label: 'COST MANAGEMENT',
            description:
              'Balances infrastructure spending with required outcomes.',
          },
        ],
        successMessage:
          'Correct. You have connected the application packaging, workload orchestration, networking, scaling, infrastructure, security, observability, recovery and operational layers into one production architecture.',
        failureMessage:
          'Think in layers: package the application, orchestrate workloads, provide stable networking, scale capacity, provision infrastructure, secure access, observe behavior, recover from failure and manage operational cost.',
      },
    },
    {
      id: 'mc09-s08-capstone-question',
      type: 'question',
      title: 'EDDUU Infrastructure Capstone Check',
      description:
        'Test whether you can distinguish the responsibilities of Docker, Kubernetes and Terraform in a production architecture.',
      question: {
        id: 'mc09-s08-capstone',
        type: 'single-choice',
        question:
          'EDDUU needs to build an API image, run multiple replicas with self-healing and then provision the underlying production cloud infrastructure. Which responsibility mapping is correct?',
        options: [
          {
            id: 'correct',
            text:
              'Docker packages the API, Kubernetes orchestrates the API workloads and Terraform provisions and manages the underlying infrastructure.',
            correct: true,
          },
          {
            id: 'wrong-k8s',
            text:
              'Docker provisions cloud infrastructure, Kubernetes builds application images and Terraform handles API request routing.',
            correct: false,
          },
          {
            id: 'wrong-terraform',
            text:
              'Terraform packages application containers, Docker manages Kubernetes replicas and Kubernetes creates all cloud infrastructure resources.',
            correct: false,
          },
          {
            id: 'wrong-service',
            text:
              'Kubernetes Services replace Docker and Terraform because one networking resource can perform all three responsibilities.',
            correct: false,
          },
        ],
        explanation:
          'Docker, Kubernetes and Terraform operate at different layers. Docker packages the application, Kubernetes orchestrates workloads and Terraform manages infrastructure as code.',
      },
    },
  ],
}