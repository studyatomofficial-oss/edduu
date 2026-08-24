import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session07: SessionDefinition = {
  id: 'mc02-session-07',
  number: 7,
  stage: 'guided',
  title: 'How Does a Modern Website Reach Users?',
  objective:
    'Understand static and dynamic delivery, browser-side and server-side rendering, CDNs, reverse proxies and how responsibility can be distributed across a production web architecture.',
  experiences: [
    {
      id: 'mc02-s07-delivery-lesson',
      type: 'lesson',
      title: 'What happens between the application and the user?',
      description:
        'A modern application needs more than frontend and backend code. It also needs an efficient way to deliver content and route traffic.',
      lesson: {
        opening:
          'A website may serve users from many locations at once. The architecture around the application determines how requests reach the right system and how content reaches users efficiently.',
        sections: [
          {
            heading: 'Static and dynamic content are different',
            explanation:
              'Static content can often be served without generating a new result for every request, while dynamic content depends on data, state or server-side processing.',
            example:
              'A logo image is usually static, while a personalized dashboard is dynamic.',
          },
          {
            heading: 'A CDN distributes content closer to users',
            explanation:
              'A content delivery network can cache and serve suitable content from locations distributed around the world.',
            example:
              'A static JavaScript bundle can be served from a nearby edge location.',
          },
          {
            heading: 'A reverse proxy sits in front of application services',
            explanation:
              'A reverse proxy can receive incoming requests and route them toward appropriate backend or application services.',
            example:
              'A reverse proxy can route requests for different paths to different application services.',
          },
          {
            heading: 'Client-side rendering uses the browser',
            explanation:
              'With client-side rendering, the browser receives resources and performs substantial work to construct the visible interface.',
            example:
              'A single-page application can download JavaScript and build interface views in the browser.',
          },
          {
            heading: 'Server-side rendering uses server processing',
            explanation:
              'With server-side rendering, the server prepares more of the initial page output before sending it to the browser.',
            example:
              'A server can generate initial HTML based on the requested route and data.',
          },
          {
            heading: 'Architecture distributes responsibility',
            explanation:
              'A production web architecture decides which layer should handle delivery, routing, rendering, business logic and data access.',
            example:
              'A CDN can serve static assets while a backend handles dynamic API requests.',
          },
        ],
        realWorldConnection:
          'Large web applications commonly combine browser rendering, CDNs, reverse proxies, application servers and databases to serve users reliably at scale.',
        keyIdea:
          'Modern web architecture distributes responsibility across browser rendering, edge delivery, routing, application services and data systems.',
        recap: [
          'Static and dynamic content have different delivery characteristics.',
          'CDNs can serve cached content closer to users.',
          'Reverse proxies can route incoming traffic.',
          'Client-side rendering performs substantial rendering work in the browser.',
          'Server-side rendering prepares more of the page on the server.',
          'Production architectures distribute responsibility across layers.',
        ],
      },
    },
    {
      id: 'mc02-s07-delivery-animation',
      type: 'animation',
      title: 'Follow a modern web request',
      description:
        'Watch a user request move through delivery and application layers.',
      animation: {
        opening:
          'A production website has more layers than just a browser and one server. Follow the request through a simplified delivery architecture.',
        parts: [
          {
            id: 'browser',
            label: 'BROWSER',
            explanation:
              'The browser starts the interaction and eventually displays the result.',
            example:
              'The user opens a website from a laptop.',
          },
          {
            id: 'network',
            label: 'EDGE / CDN',
            explanation:
              'The delivery layer can serve cached static resources closer to the user.',
            example:
              'A JavaScript bundle may come from a nearby edge location.',
          },
          {
            id: 'proxy',
            label: 'REVERSE PROXY',
            explanation:
              'The reverse proxy receives traffic and routes requests toward the appropriate service.',
            example:
              'API requests can be routed toward the application backend.',
          },
          {
            id: 'server',
            label: 'APPLICATION SERVER',
            explanation:
              'The application server handles dynamic application logic.',
            example:
              'The backend can process an API request.',
          },
          {
            id: 'response',
            label: 'RESPONSE',
            explanation:
              'The resulting content or data travels back toward the user.',
            example:
              'The browser receives HTML, JSON or other resources.',
          },
        ],
        closing:
          'The important architectural idea is that a production website is a collection of cooperating layers, each with a specific responsibility.',
      },
    },
    {
      id: 'mc02-s07-delivery-simulation',
      type: 'simulation',
      title: 'Choose the architecture layer',
      description:
        'Match each responsibility with the layer that normally handles it.',
      simulation: {
        instruction:
          'Select the responsibility and connect it with the most appropriate architecture layer.',
        items: [
          {
            id: 'cached-assets',
            label: 'Serve cached static assets',
            description: 'Deliver content efficiently from distributed locations.',
            correctTargetId: 'cdn',
          },
          {
            id: 'routing',
            label: 'Route incoming requests',
            description: 'Send traffic toward the appropriate service.',
            correctTargetId: 'proxy',
          },
          {
            id: 'business',
            label: 'Apply application business logic',
            description: 'Process dynamic application operations.',
            correctTargetId: 'backend',
          },
          {
            id: 'render',
            label: 'Construct the interface in the browser',
            description: 'Perform client-side rendering work.',
            correctTargetId: 'browser',
          },
        ],
        targets: [
          {
            id: 'cdn',
            label: 'CDN / Edge',
            description: 'Distributed content delivery.',
          },
          {
            id: 'proxy',
            label: 'Reverse Proxy',
            description: 'Traffic routing layer.',
          },
          {
            id: 'backend',
            label: 'Backend',
            description: 'Server-side application logic.',
          },
          {
            id: 'browser',
            label: 'Browser',
            description: 'Client-side rendering environment.',
          },
        ],
        successMessage:
          'Excellent. You separated delivery, routing, server logic and browser responsibilities.',
        failureMessage:
          'Think about which layer is responsible for delivery, routing, business logic or browser-side rendering.',
      },
    },
    {
      id: 'mc02-s07-delivery-question',
      type: 'question',
      title: 'Architecture check',
      description:
        'Check your understanding of modern web delivery.',
      question: {
        id: 'mc02-s07-delivery',
        type: 'single-choice',
        question:
          'Which component is commonly used to cache and deliver suitable static content from locations closer to users?',
        options: [
          {
            id: 'cdn',
            text: 'CDN',
            correct: true,
          },
          {
            id: 'database',
            text: 'Database',
            correct: false,
          },
          {
            id: 'dom',
            text: 'DOM',
            correct: false,
          },
          {
            id: 'html',
            text: 'HTML',
            correct: false,
          },
        ],
        explanation:
          'A CDN can cache and deliver suitable content from distributed edge locations closer to users.',
        hints: [
          'Think about global content delivery.',
          'The answer is an infrastructure delivery layer.',
        ],
      },
    },
  ],
}