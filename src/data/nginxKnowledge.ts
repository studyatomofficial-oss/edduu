import type { KnowledgeDefinition } from './knowledge'

export const nginxKnowledge: KnowledgeDefinition = {
  technologyId: 'nginx',
  slug: 'nginx',
  title: 'Nginx',
  summary:
    'Nginx is a high-performance web server and reverse proxy commonly used for HTTP serving, load balancing, TLS termination, caching, API routing, and protecting application backends.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Nginx?',
      content:
        'Nginx is a web server and reverse proxy. It can serve static files directly and can also receive client requests and forward them to application servers such as Node.js, Python, Java, Go, or other backend services.',
      highlights: [
        {
          title: 'Nginx',
          description:
            'A high-performance web server and reverse proxy.',
        },
        {
          title: 'Web server',
          description:
            'Software that receives HTTP requests and serves web content or responses.',
        },
        {
          title: 'Reverse proxy',
          description:
            'An intermediary that receives client requests and forwards them to backend services.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Nginx like the receptionist at a large office. Customers do not need to know which employee handles their request. The receptionist receives the request, decides where it should go, and can also reject suspicious visitors, serve simple information directly, or distribute visitors across multiple employees.',
      highlights: [
        {
          title: 'Receptionist',
          description:
            'Comparable to Nginx.',
        },
        {
          title: 'Customer',
          description:
            'Comparable to the client sending an HTTP request.',
        },
        {
          title: 'Employee',
          description:
            'Comparable to the backend application server.',
        },
      ],
    },

    {
      title: 'Why Nginx Matters',
      content:
        'Nginx is commonly placed at the front of web applications because it can efficiently handle connections, serve static content, terminate TLS, route traffic, load balance backend services, and provide an additional control layer between clients and application servers.',
      highlights: [
        {
          title: 'Traffic management',
          description:
            'Controlling how incoming requests are handled and forwarded.',
        },
        {
          title: 'Performance',
          description:
            'Efficiently handling large numbers of concurrent network connections.',
        },
        {
          title: 'Backend protection',
          description:
            'Keeping application servers behind a controlled entry point.',
        },
      ],
    },

    {
      title: 'Nginx Web Server',
      content:
        'Nginx can serve static assets such as HTML, CSS, JavaScript, images, fonts, and downloadable files directly. This avoids unnecessary application-server processing for content that does not require dynamic generation.',
      highlights: [
        {
          title: 'Static content',
          description:
            'Files that can be served directly without application logic generating them for each request.',
        },
        {
          title: 'Asset',
          description:
            'A web resource such as JavaScript, CSS, an image, or a font.',
        },
        {
          title: 'Direct serving',
          description:
            'Returning content directly from Nginx instead of forwarding the request to an application server.',
        },
      ],
    },

    {
      title: 'Nginx Reverse Proxy',
      content:
        'As a reverse proxy, Nginx receives requests from clients and forwards them to backend applications. The client can communicate with one public endpoint while Nginx controls communication with internal services.',
      highlights: [
        {
          title: 'Client',
          description:
            'The browser, mobile application, or other system making a request.',
        },
        {
          title: 'Upstream',
          description:
            'A backend server or group of backend servers to which Nginx forwards requests.',
        },
        {
          title: 'Proxying',
          description:
            'Forwarding client traffic through an intermediary to another service.',
        },
      ],
    },

    {
      title: 'Nginx Configuration',
      content:
        'Nginx behavior is defined through configuration files containing directives and logical blocks. Configuration commonly specifies listening ports, server names, routes, static files, upstream services, TLS settings, headers, caching, and access controls.',
      highlights: [
        {
          title: 'Directive',
          description:
            'A configuration instruction that controls Nginx behavior.',
        },
        {
          title: 'Server block',
          description:
            'A configuration block describing how Nginx should handle a particular server or hostname.',
        },
        {
          title: 'Location block',
          description:
            'A configuration block defining how requests matching a particular URI path should be handled.',
        },
      ],
    },

    {
      title: 'Nginx Server Block',
      content:
        'A server block defines how Nginx should respond for a particular hostname, port, or set of request conditions. Multiple server blocks can coexist on the same Nginx installation.',
      highlights: [
        {
          title: 'Server block',
          description:
            'A logical Nginx configuration unit for handling a group of requests.',
        },
        {
          title: 'Server name',
          description:
            'The hostname associated with the server configuration.',
        },
        {
          title: 'Listen',
          description:
            'The network address and port on which Nginx accepts connections.',
        },
      ],
    },

    {
      title: 'Nginx Location Block',
      content:
        'Location blocks allow Nginx to apply different behavior to different URL paths. For example, one path can serve static content while another path is forwarded to an API backend.',
      highlights: [
        {
          title: 'URI',
          description:
            'The path portion of a web request.',
        },
        {
          title: 'Routing rule',
          description:
            'A rule determining how a request should be processed.',
        },
        {
          title: 'Path-based routing',
          description:
            'Routing requests according to their URL path.',
        },
      ],
    },

    {
      title: 'Nginx Upstream',
      content:
        'An upstream group represents backend servers that Nginx can communicate with. Upstream configuration is commonly used with load balancing and service availability strategies.',
      highlights: [
        {
          title: 'Upstream',
          description:
            'A defined backend destination or group of backend destinations.',
        },
        {
          title: 'Backend',
          description:
            'The application service responsible for business logic or data processing.',
        },
        {
          title: 'Load balancing',
          description:
            'Distributing requests across multiple backend instances.',
        },
      ],
    },

    {
      title: 'Nginx Load Balancing',
      content:
        'Nginx can distribute requests across multiple backend servers. Load balancing improves scalability and can increase availability when combined with appropriate health and failure-handling mechanisms.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes traffic across multiple service instances.',
        },
        {
          title: 'Backend instance',
          description:
            'One running copy of an application service.',
        },
        {
          title: 'Availability',
          description:
            'The ability of a service to remain accessible when individual components fail.',
        },
      ],
    },

    {
      title: 'Nginx Load Balancing Methods',
      content:
        'Nginx supports different approaches to distributing requests, including round robin, least connections, and IP-hash-based routing. The correct method depends on workload characteristics and whether backend sessions require request affinity.',
      highlights: [
        {
          title: 'Round robin',
          description:
            'Distributing requests sequentially across available backend servers.',
        },
        {
          title: 'Least connections',
          description:
            'Preferentially sending new requests toward servers with fewer active connections.',
        },
        {
          title: 'IP hash',
          description:
            'Using a client IP-based hash to consistently route traffic toward a backend.',
        },
      ],
    },

    {
      title: 'Nginx TLS Termination',
      content:
        'Nginx can terminate TLS connections at the edge or application gateway. The client establishes HTTPS with Nginx, which then forwards the request to an internal backend using the desired security configuration.',
      highlights: [
        {
          title: 'TLS termination',
          description:
            'Ending an encrypted TLS connection at a controlled endpoint.',
        },
        {
          title: 'HTTPS',
          description:
            'HTTP communication protected by TLS.',
        },
        {
          title: 'Certificate',
          description:
            'A digital credential used to establish trust and enable encrypted HTTPS communication.',
        },
      ],
    },

    {
      title: 'Nginx and HTTP',
      content:
        'Nginx supports HTTP request and response handling, headers, methods, status codes, redirects, compression, caching, and proxy behavior. Understanding HTTP is important for designing and troubleshooting Nginx configurations.',
      highlights: [
        {
          title: 'HTTP method',
          description:
            'An operation requested by the client, such as GET, POST, PUT, PATCH, or DELETE.',
        },
        {
          title: 'HTTP status code',
          description:
            'A numeric response indicator describing the result of a request.',
        },
        {
          title: 'HTTP header',
          description:
            'Metadata attached to an HTTP request or response.',
        },
      ],
    },

    {
      title: 'Nginx Headers',
      content:
        'Nginx can add, modify, or forward HTTP headers. Headers can be used for security policies, caching behavior, tracing, client information, and communication between proxies and application servers.',
      highlights: [
        {
          title: 'Request header',
          description:
            'Metadata sent by the client or an upstream proxy.',
        },
        {
          title: 'Response header',
          description:
            'Metadata returned to the client by the server.',
        },
        {
          title: 'Forwarded information',
          description:
            'Metadata describing the original client or request path when traffic passes through proxies.',
        },
      ],
    },

    {
      title: 'Nginx Caching',
      content:
        'Nginx can cache responses from upstream applications. Caching can reduce backend workload and improve response times, but cache policies must be designed carefully for dynamic, personalized, or security-sensitive content.',
      highlights: [
        {
          title: 'Cache',
          description:
            'A temporary stored copy of data used to serve repeated requests faster.',
        },
        {
          title: 'Cache hit',
          description:
            'A request served from cached content without requiring a new backend response.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removing or refreshing cached content when the underlying data changes.',
        },
      ],
    },

    {
      title: 'Nginx Compression',
      content:
        'Nginx can compress suitable HTTP responses before sending them to clients. Compression can reduce bandwidth usage and improve delivery performance, particularly for text-based assets.',
      highlights: [
        {
          title: 'Compression',
          description:
            'Reducing the amount of data transmitted over the network.',
        },
        {
          title: 'Bandwidth',
          description:
            'The amount of data that can be transferred through a network connection over time.',
        },
        {
          title: 'Compressed response',
          description:
            'A response encoded into a smaller representation for network transmission.',
        },
      ],
    },

    {
      title: 'Nginx Redirects',
      content:
        'Nginx can redirect requests from one URL to another. Redirects are commonly used for HTTP-to-HTTPS enforcement, domain changes, canonical URLs, and application routing changes.',
      highlights: [
        {
          title: 'Redirect',
          description:
            'An HTTP response instructing a client to request another URL.',
        },
        {
          title: 'HTTP to HTTPS',
          description:
            'Redirecting insecure HTTP requests to secure HTTPS URLs.',
        },
        {
          title: 'Canonical URL',
          description:
            'The preferred URL representation for a resource.',
        },
      ],
    },

    {
      title: 'Nginx Rate Limiting',
      content:
        'Nginx can limit request rates to protect backend services from excessive traffic. Rate limiting is useful for APIs, login endpoints, expensive operations, and protection against certain forms of abuse.',
      highlights: [
        {
          title: 'Rate limiting',
          description:
            'Restricting how many requests can be processed during a defined period.',
        },
        {
          title: 'Traffic burst',
          description:
            'A sudden increase in incoming request volume.',
        },
        {
          title: 'Backend protection',
          description:
            'Reducing the risk that excessive traffic overwhelms application services.',
        },
      ],
    },

    {
      title: 'Nginx Security',
      content:
        'Nginx can contribute to application security through TLS, request filtering, rate limiting, controlled routing, security headers, access restrictions, and origin protection. It should be treated as one layer in a defense-in-depth architecture.',
      highlights: [
        {
          title: 'Defense in depth',
          description:
            'Using multiple independent security layers rather than depending on one mechanism.',
        },
        {
          title: 'Access restriction',
          description:
            'Controlling which clients or networks can access specific endpoints.',
        },
        {
          title: 'Security header',
          description:
            'An HTTP response header used to communicate security-related browser behavior.',
        },
      ],
    },

    {
      title: 'Nginx and Docker',
      content:
        'Nginx can run inside a Docker container as a web server or reverse proxy. Containerized Nginx is commonly used in modern deployment architectures where configuration and application infrastructure are packaged and deployed consistently.',
      highlights: [
        {
          title: 'Docker container',
          description:
            'An isolated application packaging and execution unit.',
        },
        {
          title: 'Container image',
          description:
            'A packaged filesystem and metadata used to create containers.',
        },
        {
          title: 'Containerized proxy',
          description:
            'A reverse proxy deployed as a containerized workload.',
        },
      ],
    },

    {
      title: 'Nginx and Kubernetes',
      content:
        'In Kubernetes environments, Nginx can operate as an ingress controller or as part of an ingress architecture. It can route external HTTP traffic to Kubernetes services based on hostnames and paths.',
      highlights: [
        {
          title: 'Ingress',
          description:
            'Kubernetes mechanism for exposing and routing external HTTP or HTTPS traffic to services.',
        },
        {
          title: 'Ingress controller',
          description:
            'A component that implements Kubernetes ingress routing behavior.',
        },
        {
          title: 'Kubernetes Service',
          description:
            'A stable networking abstraction used to expose a set of Kubernetes workloads.',
        },
      ],
    },

    {
      title: 'Nginx and Cloudflare',
      content:
        'Cloudflare and Nginx can operate together. Cloudflare can provide the global edge, DNS, CDN, WAF, and DDoS protection while Nginx runs closer to the application origin as a reverse proxy or load balancer.',
      highlights: [
        {
          title: 'Edge layer',
          description:
            'The globally distributed layer handling traffic before it reaches the origin.',
        },
        {
          title: 'Origin proxy',
          description:
            'Nginx operating close to backend application infrastructure.',
        },
        {
          title: 'Layered architecture',
          description:
            'Using multiple infrastructure components for different responsibilities.',
        },
      ],
    },

    {
      title: 'Nginx and AWS',
      content:
        'Nginx can run on AWS EC2, containers, Kubernetes, or other compute environments. A common architecture uses Nginx as the reverse proxy in front of application instances while AWS provides the underlying infrastructure.',
      highlights: [
        {
          title: 'EC2',
          description:
            'AWS virtual-server compute service.',
        },
        {
          title: 'Origin server',
          description:
            'The backend infrastructure where application processing occurs.',
        },
        {
          title: 'Reverse proxy layer',
          description:
            'The controlled gateway between external clients and backend services.',
        },
      ],
    },

    {
      title: 'Nginx and Node.js',
      content:
        'A Node.js application can run behind Nginx. Nginx receives public HTTP or HTTPS traffic and forwards appropriate requests to the Node.js application running on an internal port.',
      highlights: [
        {
          title: 'Node.js',
          description:
            'A JavaScript runtime commonly used for backend applications.',
        },
        {
          title: 'Internal port',
          description:
            'A network port used by a backend service that does not necessarily need direct public exposure.',
        },
        {
          title: 'Proxy pass',
          description:
            'The Nginx configuration mechanism used to forward requests toward an upstream application.',
        },
      ],
    },

    {
      title: 'Nginx and Python',
      content:
        'Python applications such as FastAPI or Django can run behind Nginx. Nginx handles public-facing HTTP traffic while the Python application server handles application logic.',
      highlights: [
        {
          title: 'FastAPI',
          description:
            'A Python framework commonly used for building APIs.',
        },
        {
          title: 'Django',
          description:
            'A Python web framework for building web applications.',
        },
        {
          title: 'Application server',
          description:
            'A server process responsible for executing application code and generating dynamic responses.',
        },
      ],
    },

    {
      title: 'Nginx and FastAPI',
      content:
        'A production FastAPI architecture can use Nginx as a reverse proxy in front of an ASGI server such as Uvicorn or another compatible server. Nginx can handle TLS, client connections, static content, and request routing while the application handles business logic.',
      highlights: [
        {
          title: 'ASGI',
          description:
            'A Python interface specification for asynchronous web applications and servers.',
        },
        {
          title: 'Uvicorn',
          description:
            'A Python ASGI server commonly used to run FastAPI applications.',
        },
        {
          title: 'Business logic',
          description:
            'Application behavior implementing the actual business requirements.',
        },
      ],
    },

    {
      title: 'Nginx and WebSockets',
      content:
        'Nginx can proxy WebSocket connections when configured appropriately. This is useful for real-time applications such as chat, live dashboards, collaboration tools, and streaming interfaces.',
      highlights: [
        {
          title: 'WebSocket',
          description:
            'A protocol that provides persistent two-way communication between a client and server.',
        },
        {
          title: 'Persistent connection',
          description:
            'A connection that remains open for continued communication.',
        },
        {
          title: 'Real-time application',
          description:
            'An application where information needs to be exchanged with low delay.',
        },
      ],
    },

    {
      title: 'Nginx Health Checks',
      content:
        'Nginx-based architectures can use health-check mechanisms to determine whether backend services are available. Health information can support traffic routing and operational decisions, although the exact capabilities depend on the Nginx edition and surrounding architecture.',
      highlights: [
        {
          title: 'Health check',
          description:
            'A test used to determine whether a service is available and functioning.',
        },
        {
          title: 'Healthy instance',
          description:
            'A backend instance considered capable of accepting traffic.',
        },
        {
          title: 'Unhealthy instance',
          description:
            'A backend instance that should not receive normal application traffic.',
        },
      ],
    },

    {
      title: 'Nginx Logging',
      content:
        'Nginx provides access and error logs that help teams understand incoming traffic, response behavior, failures, and operational problems. Logs should be integrated into centralized observability systems in production environments.',
      highlights: [
        {
          title: 'Access log',
          description:
            'A log containing information about requests handled by Nginx.',
        },
        {
          title: 'Error log',
          description:
            'A log containing errors and operational events generated by Nginx.',
        },
        {
          title: 'Centralized logging',
          description:
            'Collecting logs from multiple systems into a shared analysis platform.',
        },
      ],
    },

    {
      title: 'Nginx Observability',
      content:
        'Production Nginx deployments should be monitored using request rate, latency, status codes, connection counts, upstream failures, resource utilization, and logs. Observability should cover both Nginx and the backend services behind it.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The time required to process and return a request.',
        },
        {
          title: '5xx error',
          description:
            'An HTTP server-side error indicating that the request could not be successfully processed.',
        },
        {
          title: 'Upstream failure',
          description:
            'A failure communicating with or receiving a valid response from a backend service.',
        },
      ],
    },

    {
      title: 'Nginx Performance',
      content:
        'Nginx is designed to efficiently handle concurrent connections using an event-driven architecture. Performance still depends on configuration, operating-system resources, network conditions, backend capacity, and workload characteristics.',
      highlights: [
        {
          title: 'Event-driven architecture',
          description:
            'An architecture where work is coordinated around events and I/O readiness rather than requiring a dedicated blocking thread for every connection.',
        },
        {
          title: 'Concurrent connection',
          description:
            'A network connection active at the same time as other connections.',
        },
        {
          title: 'I/O',
          description:
            'Input and output operations such as network and file communication.',
        },
      ],
    },

    {
      title: 'Nginx High Availability',
      content:
        'A single Nginx instance can become a point of failure. Production architectures can use multiple Nginx instances behind a load balancer, cloud-managed entry point, or another redundant traffic layer.',
      highlights: [
        {
          title: 'High availability',
          description:
            'Designing a system so individual component failures do not cause unacceptable service downtime.',
        },
        {
          title: 'Redundancy',
          description:
            'Having multiple instances capable of performing the same critical function.',
        },
        {
          title: 'Single point of failure',
          description:
            'A component whose failure can cause the entire service or critical path to fail.',
        },
      ],
    },

    {
      title: 'Nginx Deployment Strategy',
      content:
        'Nginx configuration changes should be tested before production deployment and rolled out using controlled release processes. Configuration validation, version control, health monitoring, and rollback procedures are important for safe operations.',
      highlights: [
        {
          title: 'Configuration validation',
          description:
            'Checking that Nginx configuration is syntactically and operationally valid before applying it.',
        },
        {
          title: 'Controlled rollout',
          description:
            'Deploying changes gradually or through a defined release process.',
        },
        {
          title: 'Rollback',
          description:
            'Returning to a previously known-good configuration or release.',
        },
      ],
    },

    {
      title: 'Nginx and CI/CD',
      content:
        'Nginx configuration can be stored in Git and deployed through CI/CD pipelines. A mature workflow validates configuration, builds or packages the deployment, deploys it to controlled environments, runs health checks, and provides a rollback path.',
      highlights: [
        {
          title: 'CI/CD',
          description:
            'Automated practices for building, testing, and delivering software changes.',
        },
        {
          title: 'Configuration as Code',
          description:
            'Managing configuration in version-controlled files and automated workflows.',
        },
        {
          title: 'Deployment pipeline',
          description:
            'An automated sequence that validates and delivers changes.',
        },
      ],
    },

    {
      title: 'Nginx for AI Applications',
      content:
        'Nginx can sit in front of AI APIs and services to provide TLS termination, routing, request-size controls, rate limiting, access restrictions, caching where appropriate, and traffic distribution across inference or application backends.',
      highlights: [
        {
          title: 'AI API gateway layer',
          description:
            'An entry layer controlling traffic into AI application services.',
        },
        {
          title: 'Inference backend',
          description:
            'A service responsible for running an AI model and producing an inference response.',
        },
        {
          title: 'Request control',
          description:
            'Managing request size, rate, routing, authentication integration, and other entry-point behavior.',
        },
      ],
    },

    {
      title: 'Nginx AI Architecture Example',
      content:
        'A production AI platform could use Cloudflare as the global edge, Nginx as an origin reverse proxy, a FastAPI application for business logic, and separate AI inference services behind it. Nginx can route API requests, serve frontend assets, enforce request limits, and distribute traffic across backend instances.',
      highlights: [
        {
          title: 'Cloudflare',
          description:
            'Global edge platform providing DNS, CDN, security, and traffic services.',
        },
        {
          title: 'FastAPI',
          description:
            'Python API framework commonly used for AI application backends.',
        },
        {
          title: 'Inference service',
          description:
            'Backend service responsible for executing an AI model.',
        },
      ],
    },

    {
      title: 'Nginx vs Cloudflare',
      content:
        'Nginx and Cloudflare can overlap in some capabilities but operate at different architectural scopes. Cloudflare provides a globally distributed edge platform, while Nginx is typically deployed within infrastructure as a web server, reverse proxy, or load balancer.',
      highlights: [
        {
          title: 'Cloudflare',
          description:
            'Globally distributed edge and connectivity platform.',
        },
        {
          title: 'Nginx',
          description:
            'Software commonly deployed within application infrastructure.',
        },
        {
          title: 'Complementary architecture',
          description:
            'Using both technologies for different layers of traffic handling.',
        },
      ],
    },

    {
      title: 'Nginx vs Load Balancer',
      content:
        'Nginx can perform load-balancing functions, but managed cloud load balancers provide additional infrastructure integration, availability, health management, scaling, and operational capabilities. The right choice depends on the architecture and operational requirements.',
      highlights: [
        {
          title: 'Managed load balancer',
          description:
            'A load-balancing service where the cloud provider manages much of the underlying infrastructure.',
        },
        {
          title: 'Self-managed proxy',
          description:
            'A proxy such as Nginx that the engineering team deploys and operates.',
        },
        {
          title: 'Operational overhead',
          description:
            'The engineering effort required to maintain, monitor, scale, and secure a component.',
        },
      ],
    },

    {
      title: 'Nginx for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Nginx should be understood as an infrastructure building block rather than simply a web server. Leadership decisions should consider traffic architecture, availability, security, latency, scaling, operational ownership, observability, deployment safety, and whether a managed service would reduce operational burden.',
      highlights: [
        {
          title: 'Operational ownership',
          description:
            'Understanding who is responsible for configuration, patching, monitoring, incidents, and scaling.',
        },
        {
          title: 'Architecture trade-off',
          description:
            'Balancing flexibility and control against operational complexity.',
        },
        {
          title: 'Managed versus self-managed',
          description:
            'Choosing between provider-managed infrastructure and infrastructure operated by the engineering team.',
        },
        {
          title: 'Traffic architecture',
          description:
            'The design describing how requests move from users through edge and proxy layers to backend services.',
        },
      ],
    },

    {
      title: 'When Not to Use Nginx',
      content:
        'Nginx may not be necessary when a cloud provider or edge platform already supplies the required reverse proxy, TLS termination, load balancing, routing, and static delivery capabilities. Adding Nginx without a clear responsibility can create unnecessary operational complexity.',
      highlights: [
        {
          title: 'Managed service',
          description:
            'A service where infrastructure operations are handled largely by a provider.',
        },
        {
          title: 'Unnecessary layer',
          description:
            'An architectural component that does not provide enough value to justify its operational cost.',
        },
        {
          title: 'Complexity',
          description:
            'Additional configuration, monitoring, deployment, and maintenance burden.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common Nginx mistakes include incorrect proxy configuration, exposing backend ports unnecessarily, missing TLS configuration, caching dynamic content incorrectly, ignoring upstream failures, creating overly permissive access rules, failing to validate configuration before deployment, and treating Nginx as the only security layer.',
      highlights: [
        {
          title: 'Backend exposure',
          description:
            'Allowing direct public access to backend services that should be reachable only through the proxy.',
        },
        {
          title: 'Incorrect proxy routing',
          description:
            'Forwarding requests to the wrong backend or using incorrect URI behavior.',
        },
        {
          title: 'No configuration validation',
          description:
            'Deploying Nginx configuration without testing it first.',
        },
        {
          title: 'Single security layer',
          description:
            'Depending entirely on Nginx instead of using layered security controls.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'ansible',
    'helm',
    'serverless',
    'aws-ec2',
    'aws-s3',
    'aws-lambda',
    'cloudflare',
    'ci-cd',
    'github-actions',
    'git',
    'github',
    'gitlab',
    'jenkins',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default nginxKnowledge
