import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide08: GuideDefinition = {
  type: 'map',
  label: 'Implementation Map',
  title: 'Design and Operate a Production-Ready Cloud Architecture',
  objective:
    'Follow a practical cloud architecture path from business requirements and workload assumptions through compute, storage, networking, security, scalability, reliability, observability, deployment, disaster recovery and cost.',

  steps: [
    {
      id: 'requirements',
      step: 1,
      title: 'Define the cloud business requirements',
      action:
        'Start with the business outcome and determine what the cloud platform must enable.',
      details: [
        'Identify the primary product capabilities.',
        'Identify users and important business workflows.',
        'Separate functional requirements from reliability, security and operational requirements.',
        'Record business constraints such as budget, geography and regulatory requirements.',
      ],
    },

    {
      id: 'workload',
      step: 2,
      title: 'Estimate workload and traffic',
      action:
        'Estimate normal and peak workload before selecting cloud capacity.',
      details: [
        'Estimate active users and request volume.',
        'Identify predictable traffic spikes.',
        'Estimate storage growth.',
        'Identify workloads that are latency-sensitive or compute-intensive.',
      ],
    },

    {
      id: 'compute',
      step: 3,
      title: 'Choose the compute model',
      action:
        'Select virtual machines, containers or serverless execution based on workload characteristics.',
      details: [
        'Use VMs when operating-system control is important.',
        'Use containers when portable application packaging and controlled runtime environments are valuable.',
        'Use serverless for suitable event-driven or short-lived workloads.',
        'Consider operational responsibility, scaling behaviour and cost.',
      ],
    },

    {
      id: 'storage',
      step: 4,
      title: 'Design the storage layer',
      action:
        'Match each data type to a storage mechanism based on access pattern and durability requirements.',
      details: [
        'Use transactional databases for structured business records.',
        'Use object storage for large files and media.',
        'Use cache storage for suitable frequently accessed temporary data.',
        'Define retention, durability and recovery requirements.',
      ],
    },

    {
      id: 'database',
      step: 5,
      title: 'Design database ownership and access',
      action:
        'Define which services own important data and how they access the database.',
      details: [
        'Identify authoritative data stores.',
        'Define transaction requirements.',
        'Keep sensitive databases behind appropriate network boundaries.',
        'Consider connection limits, read patterns and expected growth.',
      ],
    },

    {
      id: 'network',
      step: 6,
      title: 'Design the cloud network',
      action:
        'Create explicit public and private network boundaries for the platform.',
      details: [
        'Identify public entry points.',
        'Separate application and data layers where appropriate.',
        'Define subnets and routing responsibilities.',
        'Restrict unnecessary inbound and outbound traffic.',
      ],
    },

    {
      id: 'traffic',
      step: 7,
      title: 'Design traffic distribution',
      action:
        'Determine how requests reach healthy application capacity.',
      details: [
        'Use DNS for application entry and routing requirements.',
        'Use load balancing when multiple application instances serve traffic.',
        'Define health and readiness checks.',
        'Consider CDN usage for suitable static or cacheable content.',
      ],
    },

    {
      id: 'identity',
      step: 8,
      title: 'Define identity and access',
      action:
        'Control access using authentication, authorization and least privilege.',
      details: [
        'Separate human identities from service identities.',
        'Define roles around responsibilities.',
        'Grant only required permissions.',
        'Protect credentials and service secrets.',
      ],
    },

    {
      id: 'security',
      step: 9,
      title: 'Protect data and trust boundaries',
      action:
        'Apply encryption, private access and audit controls around sensitive resources.',
      details: [
        'Encrypt data in transit.',
        'Protect stored sensitive data.',
        'Keep databases private where possible.',
        'Enable auditability for important administrative and data operations.',
      ],
    },

    {
      id: 'scaling',
      step: 10,
      title: 'Design elasticity and scaling',
      action:
        'Make capacity respond to real workload instead of running peak capacity continuously.',
      details: [
        'Identify the actual scaling bottleneck.',
        'Prefer horizontal scaling for suitable stateless workloads.',
        'Define minimum and maximum capacity.',
        'Choose workload signals that trigger scaling.',
      ],
    },

    {
      id: 'availability',
      step: 11,
      title: 'Design high availability',
      action:
        'Remove important single points of failure and distribute critical capacity across failure domains.',
      details: [
        'Identify components whose failure would stop the service.',
        'Use multiple application instances where justified.',
        'Consider multi-zone deployment for critical workloads.',
        'Ensure important dependencies are also considered in the availability design.',
      ],
    },

    {
      id: 'recovery',
      step: 12,
      title: 'Define backup and disaster recovery',
      action:
        'Translate business recovery expectations into technical recovery mechanisms.',
      details: [
        'Define Recovery Point Objective.',
        'Define Recovery Time Objective.',
        'Distinguish replication from historical backup.',
        'Document restoration procedures and recovery dependencies.',
      ],
    },

    {
      id: 'observability',
      step: 13,
      title: 'Make the cloud system observable',
      action:
        'Define the signals required to understand production behaviour.',
      details: [
        'Collect metrics for traffic, latency, errors and resource saturation.',
        'Use structured logs for operational investigation.',
        'Use traces for distributed request flows.',
        'Create alerts that correspond to actionable conditions.',
      ],
    },

    {
      id: 'deployment',
      step: 14,
      title: 'Design safe deployment',
      action:
        'Choose a deployment strategy that controls release risk and provides a recovery path.',
      details: [
        'Separate development, staging and production environments.',
        'Build repeatable deployment artifacts.',
        'Use canary or blue-green deployment when appropriate.',
        'Define rollback conditions before releasing.',
      ],
    },

    {
      id: 'cost',
      step: 15,
      title: 'Evaluate cloud cost',
      action:
        'Treat cloud cost as an architecture constraint rather than a billing problem discovered later.',
      details: [
        'Identify major cost drivers.',
        'Estimate normal and peak resource usage.',
        'Use autoscaling and rightsizing where appropriate.',
        'Compare additional resilience cost against business impact.',
      ],
    },

    {
      id: 'architecture-review',
      step: 16,
      title: 'Review the complete cloud architecture',
      action:
        'Walk through the system from user request to production operation and verify that every major requirement has an explicit architecture response.',
      details: [
        'Trace an important user journey end to end.',
        'Review compute, storage and network boundaries.',
        'Review identity and data protection.',
        'Review scaling, availability and recovery.',
        'Review observability and deployment.',
        'Review cost and operational ownership.',
      ],
    },
  ],

  finalResult:
    'You can now move from cloud business requirements and workload assumptions to a coherent production architecture with explicit compute, storage, networking, security, scaling, availability, recovery, observability, deployment and cost decisions.',
}