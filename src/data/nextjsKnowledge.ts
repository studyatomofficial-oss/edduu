import type { KnowledgeDefinition } from './knowledge'

export const nextjsKnowledge: KnowledgeDefinition = {
  technologyId: 'nextjs',
  slug: 'nextjs',
  title: 'What is Next.js?',
  summary:
    'Next.js is a React framework for building production web applications with capabilities such as routing, server-side rendering, static generation, server components, API endpoints, caching, and full-stack application patterns.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Next.js?',
      content:
        'Next.js is a React framework designed for production web applications. React primarily provides the user-interface layer, while Next.js adds application-level capabilities such as routing, rendering strategies, server-side functionality, optimization, and deployment patterns.',
    },
    {
      title: 'Why do we use Next.js?',
      content:
        'Next.js helps teams build complete web applications rather than only individual UI components. It provides conventions and infrastructure for frontend rendering, backend integration, routing, performance, and production deployment.',
      highlights: [
        {
          title: 'React-based',
          description:
            'Uses React as the foundation for building user interfaces.',
        },
        {
          title: 'File-based routing',
          description:
            'Routes can be defined through the application file structure.',
        },
        {
          title: 'Multiple rendering strategies',
          description:
            'Supports approaches such as server rendering, static generation, and client-side rendering.',
        },
        {
          title: 'Full-stack capability',
          description:
            'Can combine frontend experiences with server-side application logic.',
        },
      ],
    },
    {
      title: 'Next.js and React',
      content:
        'React is the UI library. Next.js is a framework built around React that provides additional application architecture and production capabilities. A useful analogy is that React provides the building blocks for rooms, while Next.js provides more of the structure needed to operate the entire building.',
      highlights: [
        {
          title: 'React',
          description:
            'A library for building component-based user interfaces.',
        },
        {
          title: 'Next.js',
          description:
            'A framework that provides application-level capabilities around React.',
        },
        {
          title: 'Framework',
          description:
            'A broader application structure that provides conventions and reusable infrastructure.',
        },
      ],
    },
    {
      title: 'App Router',
      content:
        'The modern Next.js App Router uses the app directory to organize routes, layouts, loading states, errors, and server/client component boundaries. It is designed around modern React capabilities.',
      highlights: [
        {
          title: 'app directory',
          description:
            'The directory used by the App Router to define application routes and related files.',
        },
        {
          title: 'Layout',
          description:
            'A reusable UI structure shared by a route segment and its descendants.',
        },
        {
          title: 'Route segment',
          description:
            'A portion of the URL structure represented by the application directory tree.',
        },
      ],
    },
    {
      title: 'File-Based Routing',
      content:
        'Next.js uses the filesystem to define routes. Folders and special files inside the application structure determine URL paths and behavior.',
      highlights: [
        {
          title: 'page.tsx',
          description:
            'Defines the UI for a route.',
        },
        {
          title: 'layout.tsx',
          description:
            'Defines shared UI around route segments.',
        },
        {
          title: 'loading.tsx',
          description:
            'Defines loading UI for a route segment.',
        },
        {
          title: 'error.tsx',
          description:
            'Defines error UI for a route segment.',
        },
      ],
    },
    {
      title: 'Server Components',
      content:
        'Next.js App Router applications can use React Server Components. Server Components execute on the server and can access server-side resources without sending their implementation to the browser.',
      highlights: [
        {
          title: 'Server Component',
          description:
            'A component rendered on the server rather than primarily executing in the browser.',
        },
        {
          title: 'Server-side resource',
          description:
            'A resource such as a database or private API that should remain behind the server boundary.',
        },
        {
          title: 'Client bundle',
          description:
            'JavaScript that is sent to and executed in the browser.',
        },
      ],
    },
    {
      title: 'Client Components',
      content:
        'Client Components are used when a component needs browser-side interactivity or client-only capabilities such as state, event handlers, or browser APIs. They are explicitly marked using the appropriate client directive.',
      highlights: [
        {
          title: 'Client Component',
          description:
            'A component intended to execute with browser-side capabilities.',
        },
        {
          title: 'Interactivity',
          description:
            'Behavior such as clicks, local state changes, and browser events.',
        },
        {
          title: 'Browser API',
          description:
            'A capability exposed by the browser environment, such as local storage or location.',
        },
      ],
    },
    {
      title: 'Server-Side Rendering',
      content:
        'Server-Side Rendering, or SSR, means generating HTML on the server for a request so the client can receive rendered content before browser-side JavaScript takes over interactive behavior.',
      highlights: [
        {
          title: 'SSR',
          description:
            'Rendering application output on the server for a request.',
        },
        {
          title: 'Initial HTML',
          description:
            'The HTML returned to the browser as part of the initial response.',
        },
        {
          title: 'Hydration',
          description:
            'The process through which client-side React attaches behavior to server-rendered output where applicable.',
        },
      ],
    },
    {
      title: 'Static Generation',
      content:
        'Static generation produces pages ahead of the request when the page content and application requirements allow it. Static output can often be served efficiently through caching infrastructure or a CDN.',
      highlights: [
        {
          title: 'Static page',
          description:
            'A page generated independently of each individual user request.',
        },
        {
          title: 'Build time',
          description:
            'The stage when application assets and eligible content can be prepared before deployment.',
        },
        {
          title: 'CDN',
          description:
            'A distributed network that serves content closer to users.',
        },
      ],
    },
    {
      title: 'Client-Side Rendering',
      content:
        'Client-Side Rendering, or CSR, means the browser executes JavaScript to obtain or construct application UI after the initial page is loaded. Next.js can combine client-rendered behavior with server-rendered application structures.',
      highlights: [
        {
          title: 'CSR',
          description:
            'Rendering application UI primarily in the browser.',
        },
        {
          title: 'Browser execution',
          description:
            'JavaScript executing on the user’s device.',
        },
      ],
    },
    {
      title: 'Rendering Strategy',
      content:
        'One of Next.js’s important architectural strengths is choosing rendering behavior based on product requirements. Different routes or pieces of an application may have different rendering and caching characteristics.',
      highlights: [
        {
          title: 'Dynamic rendering',
          description:
            'Generating content based on request-time information or dynamic data.',
        },
        {
          title: 'Static rendering',
          description:
            'Generating content that can be reused across requests.',
        },
        {
          title: 'Hybrid application',
          description:
            'An application that combines multiple rendering strategies.',
        },
      ],
    },
    {
      title: 'Data Fetching',
      content:
        'Next.js applications can fetch data from databases, internal services, external APIs, or other sources. Where the data is fetched affects security, latency, caching, and the amount of code sent to the browser.',
      highlights: [
        {
          title: 'Server-side data access',
          description:
            'Retrieving data from the server environment without exposing private credentials to the browser.',
        },
        {
          title: 'External API',
          description:
            'A service accessed over a network boundary.',
        },
        {
          title: 'Data dependency',
          description:
            'Information required to produce a page or application result.',
        },
      ],
    },
    {
      title: 'Caching',
      content:
        'Caching stores reusable results so applications do not have to perform the same expensive work repeatedly. In Next.js, caching behavior is an important architectural consideration for data fetching and rendering.',
      highlights: [
        {
          title: 'Cache',
          description:
            'Stored data that can be reused instead of recomputed or refetched.',
        },
        {
          title: 'Cache invalidation',
          description:
            'The process of determining when cached information must be refreshed or removed.',
        },
        {
          title: 'Freshness',
          description:
            'How current the cached information is relative to the source of truth.',
        },
      ],
    },
    {
      title: 'Route Handlers',
      content:
        'Next.js can expose server-side HTTP endpoints through route handlers. They are useful for application-specific APIs, webhooks, integrations, and backend operations that belong within the web application.',
      highlights: [
        {
          title: 'Route Handler',
          description:
            'Server-side code that handles an HTTP request within a Next.js application.',
        },
        {
          title: 'Webhook endpoint',
          description:
            'An endpoint that receives event notifications from another system.',
        },
        {
          title: 'API endpoint',
          description:
            'A network-accessible operation through which another client or service interacts with the application.',
        },
      ],
    },
    {
      title: 'Middleware',
      content:
        'Next.js middleware can intercept requests and apply logic before the request reaches the final route. It can be useful for selected routing, redirects, request-based behavior, and edge-oriented use cases.',
      highlights: [
        {
          title: 'Request interception',
          description:
            'Processing or modifying a request before its final route handling.',
        },
        {
          title: 'Redirect',
          description:
            'Sending a client toward another URL.',
        },
        {
          title: 'Rewrite',
          description:
            'Routing a request internally to another destination without necessarily changing the visible URL.',
        },
      ],
    },
    {
      title: 'Authentication',
      content:
        'Next.js applications commonly integrate with identity providers and authentication libraries. Authentication logic must respect the boundary between browser code and trusted server-side code.',
      highlights: [
        {
          title: 'Identity provider',
          description:
            'A system responsible for authenticating users and providing identity information.',
        },
        {
          title: 'Session',
          description:
            'Information representing an authenticated interaction.',
        },
        {
          title: 'Protected route',
          description:
            'A route that requires an authenticated or authorized caller.',
        },
      ],
    },
    {
      title: 'Authorization',
      content:
        'Authentication answers “Who are you?” while authorization answers “What are you allowed to do?”. Next.js applications should enforce sensitive permissions on trusted server-side boundaries rather than relying solely on browser UI controls.',
      highlights: [
        {
          title: 'Authorization',
          description:
            'The process of determining whether a caller can perform an action.',
        },
        {
          title: 'RBAC',
          description:
            'Role-Based Access Control maps users to roles and roles to permissions.',
        },
        {
          title: 'Server-side enforcement',
          description:
            'Applying security decisions in a trusted backend environment.',
        },
      ],
    },
    {
      title: 'API Integration',
      content:
        'Next.js applications often communicate with REST APIs, GraphQL services, AI providers, payment systems, CRMs, databases, and internal microservices. The architecture should determine whether communication happens from the browser or server.',
      highlights: [
        {
          title: 'Backend-for-Frontend',
          description:
            'A backend layer tailored to the needs of a particular frontend application.',
        },
        {
          title: 'Service integration',
          description:
            'Communication between the Next.js application and another service.',
        },
        {
          title: 'Credential boundary',
          description:
            'The point where private credentials must remain on the server rather than being exposed to clients.',
        },
      ],
    },
    {
      title: 'Next.js and AI Applications',
      content:
        'Next.js is a strong fit for AI products because it can combine interactive React interfaces with server-side orchestration. An AI application can use Next.js for chat interfaces, streaming responses, authentication, file uploads, API routes, dashboards, and integration with model providers.',
      highlights: [
        {
          title: 'AI chat UI',
          description:
            'A frontend experience for interacting with an AI model.',
        },
        {
          title: 'AI orchestration',
          description:
            'Backend logic coordinating model calls, tools, retrieval, and application services.',
        },
        {
          title: 'Streaming',
          description:
            'Sending generated output incrementally instead of waiting for the complete response.',
        },
        {
          title: 'AI dashboard',
          description:
            'An application interface for monitoring AI workflows, usage, results, or operations.',
        },
      ],
    },
    {
      title: 'Next.js and RAG',
      content:
        'A Next.js frontend can provide the user experience for a RAG system while server-side code coordinates retrieval and generation. Sensitive retrieval infrastructure and provider credentials should remain behind trusted server boundaries.',
      highlights: [
        {
          title: 'RAG',
          description:
            'Retrieval-Augmented Generation combines information retrieval with language-model generation.',
        },
        {
          title: 'Retrieval service',
          description:
            'A service responsible for finding relevant information for an AI request.',
        },
        {
          title: 'Vector database',
          description:
            'A database optimized for storing and searching vector representations.',
        },
      ],
    },
    {
      title: 'Next.js and AI Agents',
      content:
        'Next.js can provide the user interface and backend gateway for AI agent systems. The application can manage authentication, conversations, tool requests, approval flows, agent status, and execution history while specialized services perform agent orchestration.',
      highlights: [
        {
          title: 'Agent',
          description:
            'An AI-driven system that can reason over tasks and use controlled tools.',
        },
        {
          title: 'Tool',
          description:
            'A controlled capability that an agent can invoke.',
        },
        {
          title: 'Human approval',
          description:
            'A checkpoint where a person reviews or authorizes a potentially important agent action.',
        },
      ],
    },
    {
      title: 'Next.js Performance',
      content:
        'Production performance depends on rendering strategy, server response time, JavaScript bundle size, images, fonts, caching, database latency, external API latency, and client-side behavior. Framework features should be used based on measured needs rather than assumptions.',
      highlights: [
        {
          title: 'Bundle size',
          description:
            'The amount of JavaScript and related code delivered to the browser.',
        },
        {
          title: 'Latency',
          description:
            'The time required for a request or operation to complete.',
        },
        {
          title: 'Code splitting',
          description:
            'Delivering only the code required for a particular part of an application rather than sending everything at once.',
        },
      ],
    },
    {
      title: 'Images and Assets',
      content:
        'Next.js provides image and asset optimization capabilities that can improve delivery performance. Images should still be selected and sized appropriately because framework optimization does not eliminate the need for good asset practices.',
      highlights: [
        {
          title: 'Image optimization',
          description:
            'Preparing image delivery to reduce unnecessary transfer and rendering cost.',
        },
        {
          title: 'Responsive image',
          description:
            'An image delivered at an appropriate size for the user’s device and layout.',
        },
      ],
    },
    {
      title: 'Environment Variables and Secrets',
      content:
        'Next.js applications commonly use environment variables for configuration. A critical architectural rule is distinguishing values that may safely be exposed to browser code from secrets that must remain server-side.',
      highlights: [
        {
          title: 'Environment variable',
          description:
            'Configuration supplied to the application through its environment.',
        },
        {
          title: 'Public configuration',
          description:
            'A value that is intentionally safe to expose to browser-side code.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information such as an API key or credential that must not be exposed to users.',
        },
      ],
    },
    {
      title: 'Error Handling',
      content:
        'Next.js provides mechanisms for handling route-level errors and loading states. Production applications should also have centralized logging and monitoring so failures can be diagnosed beyond the user-facing error page.',
      highlights: [
        {
          title: 'Error boundary',
          description:
            'A mechanism for displaying controlled UI when rendering or application errors occur.',
        },
        {
          title: 'Fallback UI',
          description:
            'User-facing content displayed while data is loading or when a route encounters a recoverable error.',
        },
        {
          title: 'Error monitoring',
          description:
            'Collecting and analyzing application failures in production.',
        },
      ],
    },
    {
      title: 'Testing Next.js Applications',
      content:
        'Next.js applications benefit from component tests, unit tests, API tests, integration tests, and end-to-end tests. Critical authentication, authorization, payment, AI, and data workflows deserve strong integration and end-to-end coverage.',
      highlights: [
        {
          title: 'Component test',
          description:
            'Tests the behavior of a UI component.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interaction between application components or services.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete user journey through the application.',
        },
      ],
    },
    {
      title: 'Deployment',
      content:
        'Next.js applications can be deployed through managed platforms, containers, virtual machines, or other infrastructure capable of running the required application components. Deployment architecture should reflect rendering, data, security, scaling, and observability requirements.',
      highlights: [
        {
          title: 'Build',
          description:
            'The process of compiling and preparing the application for deployment.',
        },
        {
          title: 'Runtime',
          description:
            'The environment in which the deployed application executes.',
        },
        {
          title: 'CDN',
          description:
            'A distributed network used to deliver content efficiently to users.',
        },
      ],
    },
    {
      title: 'Next.js Architecture for Production',
      content:
        'A production Next.js system may contain the browser UI, server-rendered routes, route handlers, authentication, business services, databases, external integrations, background jobs, caching, and observability. The right architecture depends on scale and business requirements.',
      highlights: [
        {
          title: 'Frontend',
          description:
            'The user-facing interface and interaction layer.',
        },
        {
          title: 'Server layer',
          description:
            'Trusted application logic that can access protected resources.',
        },
        {
          title: 'Data layer',
          description:
            'Persistence and data-access capabilities.',
        },
        {
          title: 'Integration layer',
          description:
            'Communication with external providers and services.',
        },
      ],
    },
    {
      title: 'Common Next.js Mistakes',
      content:
        'Common mistakes include exposing secrets to client code, using client components unnecessarily, fetching sensitive data directly from the browser, misunderstanding caching behavior, putting too much business logic into UI components, ignoring authorization on the server, and optimizing without measuring actual bottlenecks.',
      highlights: [
        {
          title: 'Secret exposure',
          description:
            'Accidentally sending credentials or private configuration to browser code.',
        },
        {
          title: 'Client overuse',
          description:
            'Making components client-side when server-side execution would be simpler or more secure.',
        },
        {
          title: 'Frontend-only security',
          description:
            'Using UI restrictions without enforcing permissions on trusted server boundaries.',
        },
        {
          title: 'Unmeasured optimization',
          description:
            'Changing architecture or code based on assumptions rather than actual performance evidence.',
        },
      ],
    },
    {
      title: 'Next.js for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the most important Next.js concepts are rendering strategy, server/client boundaries, API architecture, authentication, authorization, caching, performance, deployment, observability, and AI integration. The goal is to make strong architectural and delivery decisions rather than memorize framework syntax.',
    },
    {
      title: 'Explore Next.js in EDDUU',
      content:
        'EDDUU connects Next.js with React, JavaScript, TypeScript, Node.js, Express.js, REST APIs, GraphQL, WebSockets, Webhooks, authentication, authorization, RAG, AI agents, databases, cloud infrastructure, and observability.',
    },
  ],
  relatedTechnologyIds: [
    'react',
    'javascript',
    'typescript',
    'nodejs',
    'expressjs',
    'full-stack',
    'rest-apis',
    'graphql',
    'websockets',
    'webhooks',
    'authentication',
    'authorization',
    'rbac',
    'rag',
    'agents',
  ],
}

export default nextjsKnowledge
