import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session08: SessionDefinition = {
  id: 'mc02-session-08',
  number: 8,
  stage: 'challenge',
  title: 'How Does a Complete Web Application Work?',
  objective:
    'Connect the complete web application journey from browser to frontend, API, backend and database, while understanding how the browser turns returned resources into the final user experience.',
  experiences: [
    {
      id: 'mc02-s08-capstone-lesson',
      type: 'lesson',
      title: 'The complete application journey',
      description:
        'We have built the pieces separately. Now connect them into one complete mental model for a modern web application.',
      lesson: {
        opening:
          'A real application is not one technology. It is a system of cooperating layers. The goal now is to connect everything we have learned into one complete journey.',
        sections: [
          {
            heading: 'The browser is the user-facing runtime',
            explanation:
              'The browser provides the environment where the frontend runs and where the user interacts with the application.',
            example:
              'A user opens an education dashboard in a browser.',
          },
          {
            heading: 'The frontend provides the interface',
            explanation:
              'The frontend organizes the user experience using technologies such as HTML, CSS, JavaScript and component-based frameworks.',
            example:
              'A dashboard can contain reusable components for courses, students and reports.',
          },
          {
            heading: 'The API connects the frontend and backend',
            explanation:
              'The frontend can send requests to an API when it needs server-side data or operations.',
            example:
              'The dashboard requests the latest student performance information.',
          },
          {
            heading: 'The backend applies business logic',
            explanation:
              'The backend validates requests, applies business rules and coordinates access to other systems.',
            example:
              'The backend can calculate a performance summary before returning it to the frontend.',
          },
          {
            heading: 'The database stores persistent application data',
            explanation:
              'A database provides structured persistent storage for application information.',
            example:
              'Student records, course information and performance data can be stored in a database.',
          },
          {
            heading: 'The browser still has work after receiving a response',
            explanation:
              'After receiving HTML, CSS, JavaScript or application data, the browser processes the resources and constructs the interface the user sees.',
            example:
              'The browser combines structure, presentation and behaviour into the interactive dashboard.',
          },
          {
            heading: 'The architecture can grow beyond one application server',
            explanation:
              'Production systems can introduce CDNs, reverse proxies, caches, queues, multiple services and other infrastructure as scale and reliability requirements increase.',
            example:
              'A large AI application can use a CDN for static assets and separate backend services for APIs and AI workloads.',
          },
        ],
        realWorldConnection:
          'This layered model is the foundation for understanding SaaS platforms, mobile backends, cloud systems, AI applications and eventually distributed AI engineering systems.',
        keyIdea:
          'A modern web application connects browser, frontend, API, backend and database layers, with infrastructure and rendering responsibilities distributed across the system.',
        recap: [
          'The browser is the user-facing runtime.',
          'The frontend provides the interface.',
          'APIs connect frontend requests to backend capabilities.',
          'The backend applies business logic.',
          'Databases provide persistent application storage.',
          'The browser processes returned resources into the visible experience.',
          'Production systems add infrastructure layers as scale and reliability requirements grow.',
        ],
      },
    },
    {
      id: 'mc02-s08-capstone-animation',
      type: 'animation',
      title: 'Build the complete application',
      description:
        'Watch the complete application emerge layer by layer.',
      animation: {
        visual: 'capstone',
        opening:
          'Start with a user and a browser. Follow the complete journey through frontend, API, backend and persistent data, then return to the interface the user sees.',
        parts: [
          {
            id: 'browser',
            label: '1. BROWSER',
            explanation:
              'The browser provides the runtime where the user interacts with the frontend.',
            example:
              'The user opens the application from a laptop.',
          },
          {
            id: 'frontend',
            label: '2. FRONTEND',
            explanation:
              'The frontend provides the user-facing interface and browser-side application logic.',
            example:
              'React components can render the dashboard interface.',
          },
          {
            id: 'api',
            label: '3. API',
            explanation:
              'The API provides a controlled communication boundary between frontend and backend.',
            example:
              'The frontend requests student performance data.',
          },
          {
            id: 'server',
            label: '4. BACKEND',
            explanation:
              'The backend processes the request and applies application logic.',
            example:
              'The backend validates the request and prepares the required result.',
          },
          {
            id: 'database',
            label: '5. DATABASE',
            explanation:
              'The database stores persistent application data.',
            example:
              'Student and course records can be retrieved from persistent storage.',
          },
          {
            id: 'response',
            label: '6. RESPONSE',
            explanation:
              'The backend sends the result back through the application boundary.',
            example:
              'The API returns structured data to the frontend.',
          },
          {
            id: 'display',
            label: '7. BROWSER DISPLAY',
            explanation:
              'The frontend processes the result and the browser presents the updated experience.',
            example:
              'The user sees the updated dashboard.',
          },
        ],
        closing:
          'This is the complete mental model: the browser hosts the frontend, the frontend communicates through APIs, the backend applies logic, the database persists information, and the result returns to the user interface.',
      },
    },
    {
      id: 'mc02-s08-capstone-simulation',
      type: 'simulation',
      title: 'Assemble the web application',
      description:
        'Build the complete application by assigning each responsibility to the correct layer.',
      simulation: {
        instruction:
          'Connect each responsibility to the layer that owns it in the application architecture.',
        items: [
          {
            id: 'interface',
            label: 'Display the user interface',
            description: 'Provide the browser-facing application experience.',
            correctTargetId: 'frontend',
          },
          {
            id: 'communication',
            label: 'Expose application operations',
            description: 'Provide a controlled interface for client requests.',
            correctTargetId: 'api',
          },
          {
            id: 'logic',
            label: 'Apply business rules',
            description: 'Process application operations on the server.',
            correctTargetId: 'backend',
          },
          {
            id: 'persistent',
            label: 'Keep application records',
            description: 'Store information persistently.',
            correctTargetId: 'database',
          },
          {
            id: 'presentation',
            label: 'Present the resulting experience',
            description: 'Render the final interface for the user.',
            correctTargetId: 'browser',
          },
        ],
        targets: [
          {
            id: 'frontend',
            label: 'Frontend',
            description: 'User-facing application interface.',
          },
          {
            id: 'api',
            label: 'API',
            description: 'Communication boundary.',
          },
          {
            id: 'backend',
            label: 'Backend',
            description: 'Server-side application logic.',
          },
          {
            id: 'database',
            label: 'Database',
            description: 'Persistent application data.',
          },
          {
            id: 'browser',
            label: 'Browser',
            description: 'Client runtime and presentation environment.',
          },
        ],
        successMessage:
          'Excellent. You assembled the complete web application architecture.',
        failureMessage:
          'Think about the responsibility of each layer: interface, communication, business logic, persistent data and browser presentation.',
      },
    },
    {
      id: 'mc02-s08-capstone-sequencing',
      type: 'sequencing',
      title: 'Reconstruct the complete journey',
      description:
        'Arrange the complete application flow from the user to persistent data and back.',
      sequencing: {
        instruction:
          'Use the arrows to arrange the complete web application journey.',
        items: [
          {
            id: 'browser',
            label: 'User interacts with the browser',
            description: 'The interaction starts at the client.',
            correctPosition: 0,
          },
          {
            id: 'frontend',
            label: 'Frontend prepares the interaction',
            description: 'The browser-side application determines what is needed.',
            correctPosition: 1,
          },
          {
            id: 'api',
            label: 'Frontend sends an API request',
            description: 'The request crosses the application boundary.',
            correctPosition: 2,
          },
          {
            id: 'backend',
            label: 'Backend processes the request',
            description: 'Server-side business logic runs.',
            correctPosition: 3,
          },
          {
            id: 'database',
            label: 'Backend reads or writes persistent data',
            description: 'The application accesses stored information.',
            correctPosition: 4,
          },
          {
            id: 'response',
            label: 'Backend returns the result',
            description: 'The result travels back toward the frontend.',
            correctPosition: 5,
          },
          {
            id: 'display',
            label: 'Browser presents the result',
            description: 'The user sees the updated application.',
            correctPosition: 6,
          },
        ],
      },
    },
    {
      id: 'mc02-s08-capstone-question',
      type: 'question',
      title: 'Final challenge',
      description:
        'Use the complete mental model to reason about a web application.',
      question: {
        id: 'mc02-s08-capstone',
        type: 'single-choice',
        question:
          'A user clicks a button in a browser. The application needs data from a database and then must show the result on screen. Which sequence best represents the main application path?',
        options: [
          {
            id: 'correct',
            text: 'Frontend → API → Backend → Database → Response → Frontend → Browser',
            correct: true,
          },
          {
            id: 'wrong1',
            text: 'Database → CSS → HTML → CPU → Browser',
            correct: false,
          },
          {
            id: 'wrong2',
            text: 'Browser → Database directly → CSS → Backend',
            correct: false,
          },
          {
            id: 'wrong3',
            text: 'Frontend → CSS → Database → Keyboard → Browser',
            correct: false,
          },
        ],
        explanation:
          'The frontend normally communicates through an API boundary. The backend applies server-side logic and accesses persistent data, then the result returns to the frontend and browser.',
        hints: [
          'The browser should not normally connect directly to the production database.',
          'Think about the application boundary between frontend and backend.',
        ],
      },
    },
  ],
}
