import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session06: SessionDefinition = {
  id: 'mc02-session-06',
  number: 6,
  stage: 'guided',
  title: 'How Does Application State and Communication Work?',
  objective:
    'Understand application state, cookies, sessions, authentication boundaries, WebSockets and webhooks as different mechanisms used by modern applications.',
  experiences: [
    {
      id: 'mc02-s06-state-lesson',
      type: 'lesson',
      title: 'How does an application remember and communicate?',
      description:
        'A real application needs to remember useful information and sometimes communicate continuously rather than using only one request and one response.',
      lesson: {
        opening:
          'So far we have seen individual requests. Real applications also need to remember context and sometimes deliver information while the user is already connected.',
        sections: [
          {
            heading: 'State is changing application information',
            explanation:
              'State represents information that can change while an application is running and influence what the application does or displays.',
            example:
              'A shopping cart, selected tab or current conversation can be represented as state.',
          },
          {
            heading: 'Cookies can carry small pieces of client-associated information',
            explanation:
              'Cookies are pieces of information that a browser can store and send with matching web requests according to browser rules.',
            example:
              'A browser may store a session-related cookie for a website.',
          },
          {
            heading: 'Sessions represent an ongoing user context',
            explanation:
              'A session is a server-side or application-level concept used to associate multiple interactions with a continuing context.',
            example:
              'A web application can associate multiple requests with a logged-in user session.',
          },
          {
            heading: 'Authentication identifies the user',
            explanation:
              'Authentication is the process of establishing who a user or system is. Detailed security architecture belongs to later security-focused learning.',
            example:
              'A login process can establish which account is making an application request.',
          },
          {
            heading: 'WebSockets support ongoing two-way communication',
            explanation:
              'WebSockets can provide a persistent communication channel where client and server can exchange messages after the connection is established.',
            example:
              'A live collaboration interface can receive updates without repeatedly creating independent requests for every update.',
          },
          {
            heading: 'Webhooks communicate events between systems',
            explanation:
              'A webhook is a mechanism where one system sends an HTTP request to another system when a particular event occurs.',
            example:
              'A payment provider can notify an application when a payment event occurs.',
          },
        ],
        realWorldConnection:
          'Modern SaaS products, chat systems, payment platforms, AI applications and collaboration tools use different combinations of state, sessions, APIs, WebSockets and webhooks.',
        keyIdea:
          'State and sessions help applications maintain context, while WebSockets and webhooks support communication patterns beyond a simple browser request followed by a response.',
        recap: [
          'State represents changing application information.',
          'Cookies can store client-associated information.',
          'Sessions connect multiple interactions to an ongoing context.',
          'Authentication establishes identity.',
          'WebSockets support ongoing two-way communication.',
          'Webhooks allow systems to notify other systems about events.',
        ],
      },
    },
    {
      id: 'mc02-s06-state-animation',
      type: 'animation',
      title: 'Compare modern communication patterns',
      description:
        'See how request-response, WebSocket and webhook communication differ.',
      animation: {
        opening:
          'Not every application interaction looks the same. Compare three common communication patterns.',
        parts: [
          {
            id: 'request',
            label: 'REQUEST / RESPONSE',
            explanation:
              'The client sends a request and receives a response.',
            example:
              'A frontend requests a user profile from an API.',
          },
          {
            id: 'websocket',
            label: 'WEBSOCKET',
            explanation:
              'A persistent connection allows client and server to exchange messages over time.',
            example:
              'A live application can receive updates through an open connection.',
          },
          {
            id: 'webhook',
            label: 'WEBHOOK',
            explanation:
              'One system sends an HTTP notification to another system when an event occurs.',
            example:
              'A payment service can notify an application about a completed payment.',
          },
          {
            id: 'state',
            label: 'APPLICATION STATE',
            explanation:
              'The application maintains information that influences its current behaviour.',
            example:
              'A chat application can maintain the current conversation and selected user.',
          },
        ],
        closing:
          'The important skill is not memorizing names. It is recognizing which communication or state model fits the problem.',
      },
    },
    {
      id: 'mc02-s06-state-simulation',
      type: 'simulation',
      title: 'Choose the communication model',
      description:
        'Choose the mechanism that best fits each application situation.',
      simulation: {
        instruction:
          'Match each situation with the communication or state concept that best fits it.',
        items: [
          {
            id: 'profile',
            label: 'Request a profile once',
            description: 'The client needs a response to a request.',
            correctTargetId: 'request-response',
          },
          {
            id: 'live',
            label: 'Receive live updates',
            description: 'The connection should support ongoing communication.',
            correctTargetId: 'websocket',
          },
          {
            id: 'payment',
            label: 'Notify another system after a payment event',
            description: 'One system needs to notify another system about an event.',
            correctTargetId: 'webhook',
          },
          {
            id: 'cart',
            label: 'Remember current cart contents',
            description: 'The application needs changing information during use.',
            correctTargetId: 'state',
          },
        ],
        targets: [
          {
            id: 'request-response',
            label: 'Request / Response',
            description: 'Client requests and server responds.',
          },
          {
            id: 'websocket',
            label: 'WebSocket',
            description: 'Ongoing two-way communication.',
          },
          {
            id: 'webhook',
            label: 'Webhook',
            description: 'Event-driven notification between systems.',
          },
          {
            id: 'state',
            label: 'Application State',
            description: 'Changing information maintained by the application.',
          },
        ],
        successMessage:
          'Excellent. You selected communication models based on the problem rather than memorizing terminology.',
        failureMessage:
          'Think about whether the situation needs a response, an ongoing connection, an event notification, or changing application information.',
      },
    },
    {
      id: 'mc02-s06-state-question',
      type: 'question',
      title: 'Communication check',
      description:
        'Check your understanding of modern application communication.',
      question: {
        id: 'mc02-s06-state',
        type: 'single-choice',
        question:
          'Which mechanism is designed for an ongoing two-way communication channel between a client and server?',
        options: [
          {
            id: 'websocket',
            text: 'WebSocket',
            correct: true,
          },
          {
            id: 'html',
            text: 'HTML',
            correct: false,
          },
          {
            id: 'css',
            text: 'CSS',
            correct: false,
          },
          {
            id: 'path',
            text: 'File path',
            correct: false,
          },
        ],
        explanation:
          'WebSockets provide a persistent connection that can support two-way communication between the client and server.',
        hints: [
          'Think about a connection that remains open.',
          'The answer is commonly used for live communication.',
        ],
      },
    },
  ],
}