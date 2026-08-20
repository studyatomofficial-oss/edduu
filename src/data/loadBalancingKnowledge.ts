import type { KnowledgeDefinition } from './knowledge'

export const loadBalancingKnowledge: KnowledgeDefinition = {
  technologyId: 'load-balancing',
  slug: 'load-balancing',
  title: 'Load Balancing',
  summary:
    'Load balancing distributes incoming workload across multiple application instances or backend resources to improve scalability, availability, performance, and fault isolation.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Load Balancing?',
      content:
        'Load balancing is the process of distributing incoming requests or workload across multiple servers, application instances, containers, or other backend resources. Instead of sending every request to one machine, a load balancer decides which healthy backend should handle each request.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes incoming workload across available backend resources.',
        },
        {
          title: 'Backend',
          description:
            'A server, application instance, container, or service capable of processing a request.',
        },
        {
          title: 'Traffic distribution',
          description:
            'The process of spreading workload across multiple available resources.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a bank with five counters. If every customer is sent to counter number one, that counter becomes overloaded while the other counters remain idle. A person at the entrance can direct each customer to an available counter. That person is like a load balancer.',
      highlights: [
        {
          title: 'Customers',
          description:
            'Comparable to incoming requests.',
        },
        {
          title: 'Bank counters',
          description:
            'Comparable to backend servers or application instances.',
        },
        {
          title: 'Person directing customers',
          description:
            'Comparable to the load balancer.',
        },
      ],
    },

    {
      title: 'Why Use Load Balancing?',
      content:
        'Load balancing allows systems to use multiple instances, distribute traffic, remove unhealthy instances from service, support horizontal scaling, and improve availability. It is one of the fundamental building blocks of scalable web architectures.',
      highlights: [
        {
          title: 'Scalability',
          description:
            'Allows traffic to be distributed across additional instances.',
        },
        {
          title: 'Availability',
          description:
            'Prevents traffic from being sent to unhealthy backend instances.',
        },
        {
          title: 'Fault isolation',
          description:
            'Limits the impact of an individual backend failure.',
        },
      ],
    },

    {
      title: 'Load Balancer Position',
      content:
        'A load balancer is commonly placed between clients and backend instances. A typical request path is client → DNS or edge layer → load balancer → application instances → databases and other dependencies.',
      highlights: [
        {
          title: 'Client',
          description:
            'The user, browser, mobile application, or external system making the request.',
        },
        {
          title: 'Load balancer',
          description:
            'The traffic distribution layer.',
        },
        {
          title: 'Application instances',
          description:
            'The backend resources processing requests.',
        },
      ],
    },

    {
      title: 'Layer 4 Load Balancing',
      content:
        'Layer 4 load balancing operates at the transport layer, commonly using TCP or UDP information. It can distribute connections without needing to understand HTTP application details.',
      highlights: [
        {
          title: 'Layer 4',
          description:
            'Transport-layer load balancing based on information such as IP addresses and ports.',
        },
        {
          title: 'TCP',
          description:
            'A connection-oriented transport protocol commonly used for application traffic.',
        },
        {
          title: 'UDP',
          description:
            'A connectionless transport protocol used by applications that need lightweight datagram communication.',
        },
      ],
    },

    {
      title: 'Layer 7 Load Balancing',
      content:
        'Layer 7 load balancing operates at the application layer and can inspect HTTP or HTTPS information such as paths, headers, cookies, hostnames, and methods. This allows intelligent routing decisions.',
      highlights: [
        {
          title: 'Layer 7',
          description:
            'Application-layer load balancing that understands HTTP or similar application protocols.',
        },
        {
          title: 'Path-based routing',
          description:
            'Routing requests based on URL paths such as /api or /payments.',
        },
        {
          title: 'Host-based routing',
          description:
            'Routing requests based on the requested hostname.',
        },
      ],
    },

    {
      title: 'Layer 4 vs Layer 7',
      content:
        'Layer 4 load balancing is generally simpler and does not need to inspect application content. Layer 7 provides richer routing decisions but requires understanding the application protocol and can introduce additional processing.',
      highlights: [
        {
          title: 'Layer 4 advantage',
          description:
            'Simple, efficient traffic distribution without application-level inspection.',
        },
        {
          title: 'Layer 7 advantage',
          description:
            'Fine-grained routing based on application-level information.',
        },
        {
          title: 'Trade-off',
          description:
            'Layer 7 provides more control at the cost of greater application awareness and processing.',
        },
      ],
    },

    {
      title: 'Load Balancing Algorithms',
      content:
        'A load balancer needs a strategy for selecting a backend. Common algorithms include round robin, weighted round robin, least connections, least response time, random selection, and hash-based routing.',
      highlights: [
        {
          title: 'Algorithm',
          description:
            'The rule used by a load balancer to select a backend.',
        },
        {
          title: 'Backend selection',
          description:
            'The decision about which healthy backend receives a request.',
        },
        {
          title: 'Weighted routing',
          description:
            'Sending different proportions of traffic to different backends.',
        },
      ],
    },

    {
      title: 'Round Robin',
      content:
        'Round robin sends requests sequentially across available backends. For example, with three servers, requests may be distributed Server A, Server B, Server C, then repeated.',
      highlights: [
        {
          title: 'Round robin',
          description:
            'A sequential distribution strategy that rotates requests across backends.',
        },
        {
          title: 'Simple distribution',
          description:
            'Works well when backend capacity and request cost are relatively similar.',
        },
        {
          title: 'Limitation',
          description:
            'Does not automatically account for different backend workloads or processing times.',
        },
      ],
    },

    {
      title: 'Weighted Round Robin',
      content:
        'Weighted round robin assigns different traffic proportions to backends based on capacity or desired distribution. A more powerful server can receive a larger share of requests.',
      highlights: [
        {
          title: 'Weight',
          description:
            'A value representing the relative traffic share assigned to a backend.',
        },
        {
          title: 'Capacity-aware routing',
          description:
            'Distributing more traffic to resources with greater processing capacity.',
        },
        {
          title: 'Traffic proportion',
          description:
            'The percentage or relative amount of workload directed to a backend.',
        },
      ],
    },

    {
      title: 'Least Connections',
      content:
        'Least-connections routing sends new requests to the backend with the fewest active connections. It can be useful when requests have significantly different durations.',
      highlights: [
        {
          title: 'Least connections',
          description:
            'Routing new connections toward the backend with the smallest active connection count.',
        },
        {
          title: 'Active connection',
          description:
            'A currently established connection being handled by a backend.',
        },
        {
          title: 'Variable request duration',
          description:
            'A workload where some requests remain active much longer than others.',
        },
      ],
    },

    {
      title: 'Least Response Time',
      content:
        'Some load balancers consider backend response time and current load when selecting targets. This can help route traffic toward backends that are currently responding more efficiently.',
      highlights: [
        {
          title: 'Response time',
          description:
            'The time taken by a backend to process and respond to a request.',
        },
        {
          title: 'Latency-aware routing',
          description:
            'Selecting backends partly according to observed response latency.',
        },
        {
          title: 'Dynamic routing',
          description:
            'Adjusting backend selection as workload and backend performance change.',
        },
      ],
    },

    {
      title: 'IP Hash',
      content:
        'IP-hash routing uses information such as the client IP to consistently select a backend. This can provide a form of session affinity, although it can become uneven when client IP distribution is skewed.',
      highlights: [
        {
          title: 'Hash',
          description:
            'A deterministic function used to map input information to a routing decision.',
        },
        {
          title: 'IP hash',
          description:
            'Routing based on a hash derived from client IP information.',
        },
        {
          title: 'Distribution skew',
          description:
            'Uneven traffic distribution caused by non-uniform client characteristics.',
        },
      ],
    },

    {
      title: 'Health Checks',
      content:
        'Load balancers use health checks to determine whether backends are capable of receiving traffic. A failed health check can cause an instance to be temporarily removed from the active pool.',
      highlights: [
        {
          title: 'Health check',
          description:
            'A test used to determine whether a backend is healthy.',
        },
        {
          title: 'Healthy backend',
          description:
            'A backend currently considered suitable for receiving traffic.',
        },
        {
          title: 'Unhealthy backend',
          description:
            'A backend that should not receive normal traffic because it failed defined health criteria.',
        },
      ],
    },

    {
      title: 'Liveness vs Readiness',
      content:
        'A liveness check answers whether an application process is alive. A readiness check answers whether the application is ready to receive traffic. These concepts are especially important in containerized and orchestrated environments.',
      highlights: [
        {
          title: 'Liveness',
          description:
            'Indicates whether the application process is functioning sufficiently to remain running.',
        },
        {
          title: 'Readiness',
          description:
            'Indicates whether the application is ready to serve traffic.',
        },
        {
          title: 'Traffic eligibility',
          description:
            'Whether an instance should currently receive requests.',
        },
      ],
    },

    {
      title: 'Health Check Design',
      content:
        'Health checks should be meaningful without becoming so expensive or dependent on every downstream system that temporary dependency issues remove all application instances from service. The check should reflect whether the instance can safely perform its intended role.',
      highlights: [
        {
          title: 'Shallow health check',
          description:
            'A lightweight check focused on the application process itself.',
        },
        {
          title: 'Dependency health',
          description:
            'The status of external systems required by the application.',
        },
        {
          title: 'False unhealthy',
          description:
            'Removing a healthy application from traffic because the health check is overly dependent on a temporary external problem.',
        },
      ],
    },

    {
      title: 'Session Affinity',
      content:
        'Session affinity, also called sticky sessions, attempts to route requests from the same client to the same backend. It can simplify stateful applications but reduces flexibility in traffic distribution and failure recovery.',
      highlights: [
        {
          title: 'Sticky session',
          description:
            'Routing a client repeatedly to the same backend instance.',
        },
        {
          title: 'Session affinity',
          description:
            'A routing behavior that attempts to preserve backend association for a client session.',
        },
        {
          title: 'Stateless alternative',
          description:
            'Storing session state externally so requests can be handled by any healthy instance.',
        },
      ],
    },

    {
      title: 'Why Stateless Services Scale Better',
      content:
        'When application instances are stateless, a load balancer can freely distribute requests among healthy instances. If one instance fails, another can serve subsequent requests without requiring the user to reconnect to the same machine.',
      highlights: [
        {
          title: 'Stateless',
          description:
            'The application does not require persistent session state on a specific instance.',
        },
        {
          title: 'Flexible routing',
          description:
            'Requests can move between healthy instances.',
        },
        {
          title: 'Failure recovery',
          description:
            'Traffic can be redirected away from failed instances.',
        },
      ],
    },

    {
      title: 'Reverse Proxy',
      content:
        'A reverse proxy receives requests on behalf of backend servers. Many reverse proxies can also perform load balancing, TLS termination, routing, caching, compression, and security filtering.',
      highlights: [
        {
          title: 'Reverse proxy',
          description:
            'A server that accepts client requests and forwards them to backend resources.',
        },
        {
          title: 'TLS termination',
          description:
            'Decrypting HTTPS traffic at the proxy before forwarding it internally.',
        },
        {
          title: 'Request routing',
          description:
            'Selecting the backend responsible for a request.',
        },
      ],
    },

    {
      title: 'Nginx Load Balancing',
      content:
        'Nginx can operate as a reverse proxy and load balancer. It can distribute HTTP traffic among upstream servers and provide features such as health-aware routing, TLS termination, caching, and request handling.',
      highlights: [
        {
          title: 'Nginx',
          description:
            'A high-performance web server and reverse proxy that can also perform load balancing.',
        },
        {
          title: 'Upstream',
          description:
            'A configured group of backend servers receiving proxied traffic.',
        },
        {
          title: 'Reverse proxy',
          description:
            'The intermediary layer accepting client requests and forwarding them to backends.',
        },
      ],
    },

    {
      title: 'Cloud Load Balancing',
      content:
        'Cloud providers offer managed load-balancing services that integrate with compute instances, containers, serverless workloads, health checks, autoscaling, certificates, networking, and global routing.',
      highlights: [
        {
          title: 'Managed load balancer',
          description:
            'A load-balancing service operated by a cloud provider.',
        },
        {
          title: 'Autoscaling integration',
          description:
            'Connecting traffic distribution with automatic backend capacity changes.',
        },
        {
          title: 'Global routing',
          description:
            'Directing users toward appropriate geographic or regional infrastructure.',
        },
      ],
    },

    {
      title: 'Load Balancing in AWS',
      content:
        'AWS provides multiple load-balancing options. Application Load Balancer is designed for HTTP and HTTPS application traffic, Network Load Balancer handles high-performance TCP, TLS, and UDP workloads, and Gateway Load Balancer is designed for deploying and scaling network virtual appliances.',
      highlights: [
        {
          title: 'Application Load Balancer',
          description:
            'An AWS load balancer designed for application-layer HTTP and HTTPS routing.',
        },
        {
          title: 'Network Load Balancer',
          description:
            'An AWS load balancer designed for high-performance transport-layer traffic.',
        },
        {
          title: 'Gateway Load Balancer',
          description:
            'An AWS service for deploying and scaling network virtual appliances.',
        },
      ],
    },

    {
      title: 'Load Balancing in Kubernetes',
      content:
        'Kubernetes provides Service abstractions for exposing workloads and distributing traffic across healthy Pods. Ingress and Gateway capabilities can provide HTTP routing, while cloud integrations can connect Kubernetes workloads to external load balancers.',
      highlights: [
        {
          title: 'Kubernetes Service',
          description:
            'A stable networking abstraction used to expose and distribute traffic to Pods.',
        },
        {
          title: 'Pod',
          description:
            'The basic execution unit in Kubernetes containing one or more containers.',
        },
        {
          title: 'Ingress',
          description:
            'A Kubernetes API mechanism for HTTP and HTTPS routing into services.',
        },
      ],
    },

    {
      title: 'DNS Load Balancing',
      content:
        'DNS can distribute users across multiple endpoints by returning different addresses. DNS-based routing is useful for geographic distribution and failover, but DNS caching means traffic changes are not always immediate.',
      highlights: [
        {
          title: 'DNS routing',
          description:
            'Using DNS responses to direct clients toward different endpoints.',
        },
        {
          title: 'TTL',
          description:
            'The period for which DNS information can be cached according to the record’s policy.',
        },
        {
          title: 'DNS failover',
          description:
            'Changing DNS responses to direct users away from an unhealthy endpoint.',
        },
      ],
    },

    {
      title: 'Global Load Balancing',
      content:
        'Global load balancing distributes traffic across geographic regions or data centers. It can reduce latency and improve regional resilience, but introduces challenges around routing, data consistency, failover, and regional capacity.',
      highlights: [
        {
          title: 'Multi-region',
          description:
            'Running application infrastructure in multiple geographic regions.',
        },
        {
          title: 'Latency-based routing',
          description:
            'Directing users toward infrastructure expected to provide lower network latency.',
        },
        {
          title: 'Regional failover',
          description:
            'Redirecting traffic to another region when a primary region becomes unavailable.',
        },
      ],
    },

    {
      title: 'TLS Termination',
      content:
        'A load balancer can terminate TLS connections from clients and forward traffic to backend services over an internal connection. This simplifies certificate management and can reduce application-level TLS handling, although internal encryption requirements must still be considered.',
      highlights: [
        {
          title: 'TLS termination',
          description:
            'Ending the client TLS connection at the load-balancing layer.',
        },
        {
          title: 'Certificate management',
          description:
            'Issuing, storing, rotating, and renewing TLS certificates.',
        },
        {
          title: 'Internal encryption',
          description:
            'Encrypting traffic between infrastructure components when required.',
        },
      ],
    },

    {
      title: 'Connection Draining',
      content:
        'During deployments or backend removal, a load balancer can stop sending new requests to an instance while allowing existing connections to complete. This reduces interrupted requests during graceful shutdown.',
      highlights: [
        {
          title: 'Connection draining',
          description:
            'Allowing existing connections to finish before removing a backend from service.',
        },
        {
          title: 'Graceful shutdown',
          description:
            'Stopping an application without unnecessarily interrupting active work.',
        },
        {
          title: 'Deployment safety',
          description:
            'Reducing failed or interrupted requests during backend replacement.',
        },
      ],
    },

    {
      title: 'Weighted Traffic',
      content:
        'Weighted routing allows a load balancer to send a controlled percentage of traffic to different backend versions. This is useful for canary releases, migrations, experiments, and gradual traffic shifts.',
      highlights: [
        {
          title: 'Traffic weight',
          description:
            'A configured proportion of traffic assigned to a backend.',
        },
        {
          title: 'Canary',
          description:
            'A deployment where a small percentage of traffic is sent to a new version before wider rollout.',
        },
        {
          title: 'Gradual migration',
          description:
            'Moving traffic progressively from one backend or platform to another.',
        },
      ],
    },

    {
      title: 'Blue-Green Deployment',
      content:
        'In blue-green deployment, two environments represent different application versions. The load balancer switches traffic from the current environment to the new environment after validation. Rollback can often be achieved by switching traffic back.',
      highlights: [
        {
          title: 'Blue environment',
          description:
            'The currently active or previously validated application environment.',
        },
        {
          title: 'Green environment',
          description:
            'The newly deployed environment prepared to receive production traffic.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing so users move from one environment to another.',
        },
      ],
    },

    {
      title: 'Canary Deployment',
      content:
        'Canary deployment sends a small portion of traffic to a new application version. Metrics and errors are monitored before increasing the traffic percentage.',
      highlights: [
        {
          title: 'Canary',
          description:
            'A controlled release of a new version to a small traffic segment.',
        },
        {
          title: 'Traffic percentage',
          description:
            'The proportion of traffic directed to the new version.',
        },
        {
          title: 'Progressive rollout',
          description:
            'Increasing exposure to the new version in controlled stages.',
        },
      ],
    },

    {
      title: 'Load Balancing and Auto-Scaling',
      content:
        'Load balancing and autoscaling work together. The load balancer distributes traffic while the autoscaling system adds or removes backend instances based on workload. Health checks ensure unhealthy instances are not used.',
      highlights: [
        {
          title: 'Autoscaling',
          description:
            'Automatically adjusting backend capacity.',
        },
        {
          title: 'Traffic distribution',
          description:
            'Sending requests across available capacity.',
        },
        {
          title: 'Health-aware scaling',
          description:
            'Combining health information with capacity management.',
        },
      ],
    },

    {
      title: 'Load Balancing and Databases',
      content:
        'Application load balancing is different from database load balancing. Database traffic may require specialized routing such as sending reads to replicas while writes go to a primary, with careful handling of replication lag and consistency.',
      highlights: [
        {
          title: 'Read replica',
          description:
            'A database replica used primarily for read workloads.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between a primary database change and its appearance on a replica.',
        },
        {
          title: 'Read/write routing',
          description:
            'Directing reads and writes to appropriate database nodes.',
        },
      ],
    },

    {
      title: 'Failure Scenarios',
      content:
        'Load balancers themselves can encounter failures, unhealthy backends, network partitions, overloaded instances, incorrect health checks, connection exhaustion, and uneven traffic distribution. Production designs should consider redundancy and failure behavior at every layer.',
      highlights: [
        {
          title: 'Load balancer failure',
          description:
            'A failure in the traffic-distribution layer itself.',
        },
        {
          title: 'Backend failure',
          description:
            'An application instance becomes unavailable or unhealthy.',
        },
        {
          title: 'Connection exhaustion',
          description:
            'A resource reaches its maximum supported connection capacity.',
        },
      ],
    },

    {
      title: 'High Availability',
      content:
        'A production load-balancing layer should avoid becoming a single point of failure. Managed or clustered load balancers can provide redundancy so traffic continues flowing when an individual load-balancing component fails.',
      highlights: [
        {
          title: 'High availability',
          description:
            'Designing systems to remain operational despite component failures.',
        },
        {
          title: 'Redundancy',
          description:
            'Providing multiple components capable of performing the same critical function.',
        },
        {
          title: 'Single point of failure',
          description:
            'A component whose failure can cause the system or a critical function to become unavailable.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'Load-balancer observability should include request rate, response latency, error codes, backend health, connection counts, rejected requests, traffic distribution, and saturation indicators.',
      highlights: [
        {
          title: 'Request rate',
          description:
            'The number of requests received over a period.',
        },
        {
          title: 'Backend health',
          description:
            'The health status and availability of backend targets.',
        },
        {
          title: 'Error rate',
          description:
            'The proportion or rate of failed requests.',
        },
        {
          title: 'Saturation',
          description:
            'The degree to which a resource is approaching its capacity limit.',
        },
      ],
    },

    {
      title: 'Security',
      content:
        'Load balancers can enforce TLS, security policies, access controls, rate limits, and request filtering. However, security should remain layered, with backend services also enforcing authentication and authorization.',
      highlights: [
        {
          title: 'TLS',
          description:
            'Encryption protocol used to protect network communication.',
        },
        {
          title: 'Rate limiting',
          description:
            'Restricting traffic volume to protect services from excessive workload.',
        },
        {
          title: 'Defense in depth',
          description:
            'Using multiple security controls rather than relying on one boundary.',
        },
      ],
    },

    {
      title: 'Load Balancing for APIs',
      content:
        'API platforms commonly place a load balancer or API gateway in front of multiple application instances. Routing can be based on host, path, headers, tenant, geography, or application version.',
      highlights: [
        {
          title: 'API gateway',
          description:
            'A gateway that can provide routing and other API management capabilities.',
        },
        {
          title: 'Path routing',
          description:
            'Routing requests according to URL path.',
        },
        {
          title: 'Tenant routing',
          description:
            'Routing traffic according to customer or tenant information.',
        },
      ],
    },

    {
      title: 'Load Balancing for AI Systems',
      content:
        'AI systems can use load balancing across inference servers, model providers, GPU workers, embedding workers, and asynchronous processing nodes. Routing may consider capacity, model availability, latency, cost, and provider limits.',
      highlights: [
        {
          title: 'Inference worker',
          description:
            'A compute resource responsible for executing AI model inference.',
        },
        {
          title: 'Provider routing',
          description:
            'Selecting among multiple AI providers according to defined policies.',
        },
        {
          title: 'Capacity-aware routing',
          description:
            'Directing requests toward resources with available processing capacity.',
        },
        {
          title: 'Latency-aware routing',
          description:
            'Selecting resources based partly on expected response latency.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'An AI voice platform may use load balancing across API instances, call orchestration workers, WebSocket servers, and asynchronous post-call processors. Real-time voice traffic requires careful connection management and low-latency routing, while summaries and analytics can be processed asynchronously.',
      highlights: [
        {
          title: 'Concurrent connections',
          description:
            'The number of active real-time client or call connections.',
        },
        {
          title: 'WebSocket',
          description:
            'A persistent bidirectional communication protocol useful for real-time interactions.',
        },
        {
          title: 'Real-time worker',
          description:
            'A processing instance handling latency-sensitive voice or streaming workloads.',
        },
      ],
    },

    {
      title: 'Designing a Load-Balanced System',
      content:
        'Start by identifying the workload and availability requirements. Decide whether Layer 4 or Layer 7 routing is appropriate. Define backend health checks, routing strategy, capacity limits, scaling behavior, session requirements, TLS handling, observability, failure recovery, and deployment strategy.',
      highlights: [
        {
          title: 'Workload analysis',
          description:
            'Understanding request patterns, connection duration, traffic volume, and backend behavior.',
        },
        {
          title: 'Routing strategy',
          description:
            'Selecting how traffic should be distributed.',
        },
        {
          title: 'Failure strategy',
          description:
            'Defining how traffic behaves when backends or infrastructure fail.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is load balancing? Layer 4 vs Layer 7? Round robin vs least connections? What happens when a server fails? What is session affinity? How do you scale a load balancer? How does load balancing work with Kubernetes? How would you design a highly available load-balanced system?',
      highlights: [
        {
          title: 'Layer 4 vs Layer 7',
          description:
            'Explain the difference between transport-level and application-level routing.',
        },
        {
          title: 'Health checks',
          description:
            'Explain how unhealthy instances are removed from traffic.',
        },
        {
          title: 'High availability',
          description:
            'Explain how the load-balancing layer avoids becoming a single point of failure.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would place redundant load-balancing infrastructure in front of horizontally scalable, preferably stateless application instances. I would define health checks, select a routing algorithm based on workload characteristics, integrate it with autoscaling, and monitor latency, error rate, backend health, and saturation. For releases, I could use weighted routing for canary deployment or traffic switching for blue-green deployment.”',
      highlights: [
        {
          title: 'Redundancy',
          description:
            'Avoid making the load balancer itself a single point of failure.',
        },
        {
          title: 'Health-aware routing',
          description:
            'Do not send normal traffic to unhealthy backends.',
        },
        {
          title: 'Operational integration',
          description:
            'Connect load balancing with scaling, deployment, monitoring, and recovery.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating load balancing as only round robin, ignoring health checks, using sticky sessions unnecessarily, forgetting the load balancer can become a bottleneck, ignoring TLS behavior, and scaling application servers while the database remains the real bottleneck.',
      highlights: [
        {
          title: 'Round robin only',
          description:
            'Assuming one routing algorithm works for every workload.',
        },
        {
          title: 'Sticky sessions everywhere',
          description:
            'Creating unnecessary dependency on a particular application instance.',
        },
        {
          title: 'Database bottleneck',
          description:
            'Ignoring downstream capacity when scaling application instances.',
        },
        {
          title: 'Single point of failure',
          description:
            'Deploying traffic infrastructure without redundancy.',
        },
      ],
    },

    {
      title: 'Load Balancing for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, load balancing is about translating traffic growth and reliability requirements into capacity, routing, and operational decisions. The leader should understand how traffic distribution affects scalability, availability, deployments, cost, and customer experience.',
      highlights: [
        {
          title: 'Capacity planning',
          description:
            'Estimating the traffic and backend resources required for future workload.',
        },
        {
          title: 'Reliability',
          description:
            'Maintaining service availability despite backend failures.',
        },
        {
          title: 'Release safety',
          description:
            'Using traffic control to reduce risk during deployments.',
        },
        {
          title: 'Cost control',
          description:
            'Avoiding unnecessary backend capacity while maintaining required service levels.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'monolith',
    'event-driven-systems',
    'scalability',
    'caching',
    'queues',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'cloudflare',
    'nginx',
    'aws-ec2',
    'github-actions',
    'ci-cd',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'deployment-strategy',
    'feature-flags',
    'rollback-strategy',
  ],
}

export default loadBalancingKnowledge
