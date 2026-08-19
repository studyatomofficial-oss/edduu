import type { KnowledgeDefinition } from './knowledge'

export const reactKnowledge: KnowledgeDefinition = {
  technologyId: 'react',
  slug: 'react',
  title: 'What is React?',
  summary:
    'React is a component-based JavaScript library for building interactive user interfaces. It helps teams organize frontend applications into reusable components and efficiently update the interface as application state changes.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is React?',
      content:
        'React is a JavaScript library for building user interfaces. It was created at Facebook and is now maintained as an open-source project. React applications are built from reusable components that describe what the interface should look like based on application data and state.',
    },
    {
      title: 'Why do we use React?',
      content:
        'React helps developers build large interactive interfaces by breaking them into smaller reusable components. Instead of manually changing every part of a page when data changes, developers describe the desired UI and React manages updates to the rendered interface.',
      highlights: [
        {
          title: 'Component-based',
          description:
            'Applications are organized as reusable UI components.',
        },
        {
          title: 'Declarative',
          description:
            'Developers describe what the UI should represent rather than manually controlling every DOM update.',
        },
        {
          title: 'Reusable',
          description:
            'Components can be reused across multiple screens and workflows.',
        },
        {
          title: 'Ecosystem',
          description:
            'React has a large ecosystem of libraries, frameworks, testing tools, and development platforms.',
        },
      ],
    },
    {
      title: 'Components',
      content:
        'A React component is a reusable unit of UI and behavior. Components receive inputs called props and can maintain or consume state. Modern React applications commonly use function components.',
      highlights: [
        {
          title: 'Component',
          description:
            'A reusable piece of interface and application behavior.',
        },
        {
          title: 'Function component',
          description:
            'A JavaScript or TypeScript function that returns React UI.',
        },
        {
          title: 'Reusable UI',
          description:
            'A component that can be rendered in multiple places with different inputs.',
        },
      ],
    },
    {
      title: 'JSX',
      content:
        'JSX is a syntax extension commonly used with React that allows developers to write markup-like structures inside JavaScript or TypeScript. JSX is transformed into JavaScript during the build process.',
      highlights: [
        {
          title: 'JSX',
          description:
            'A syntax extension used to describe React UI in a markup-like form.',
        },
        {
          title: 'Expression',
          description:
            'JavaScript logic embedded inside JSX using curly braces.',
        },
        {
          title: 'Transpilation',
          description:
            'The transformation of JSX and other source syntax into JavaScript that the runtime can execute.',
        },
      ],
    },
    {
      title: 'Props',
      content:
        'Props are inputs passed from a parent component to a child component. They allow components to remain reusable while receiving different data or configuration.',
      highlights: [
        {
          title: 'Props',
          description:
            'Read-only inputs supplied to a React component.',
        },
        {
          title: 'Parent component',
          description:
            'A component that renders another component and can pass it props.',
        },
        {
          title: 'Child component',
          description:
            'A component receiving props from another component.',
        },
      ],
    },
    {
      title: 'State',
      content:
        'State represents data that can change over time and affect what a component renders. When state changes, React can re-render the relevant component tree so the interface reflects the new state.',
      highlights: [
        {
          title: 'State',
          description:
            'Data managed by a component or application that can change over time.',
        },
        {
          title: 'State update',
          description:
            'An operation that changes the state and can trigger a new render.',
        },
        {
          title: 'Render',
          description:
            'The process of determining the UI representation for the current application state.',
        },
      ],
    },
    {
      title: 'useState',
      content:
        'useState is a React Hook used by function components to add state. It returns the current state value and a function used to request an update to that state.',
      highlights: [
        {
          title: 'Hook',
          description:
            'A React mechanism that allows function components to use features such as state and effects.',
        },
        {
          title: 'useState',
          description:
            'A Hook for managing local component state.',
        },
        {
          title: 'State setter',
          description:
            'The function returned by useState that requests a state update.',
        },
      ],
    },
    {
      title: 'useEffect',
      content:
        'useEffect is a React Hook used to synchronize a component with external systems or perform side-effect logic. Examples include subscribing to events, interacting with browser APIs, and initiating data synchronization.',
      highlights: [
        {
          title: 'Effect',
          description:
            'Logic that interacts with something outside the pure rendering calculation.',
        },
        {
          title: 'Dependency array',
          description:
            'Values used by React to determine when an effect should be re-synchronized.',
        },
        {
          title: 'Cleanup',
          description:
            'Logic that reverses or releases resources associated with an effect when appropriate.',
        },
      ],
    },
    {
      title: 'Rendering',
      content:
        'React rendering determines the UI representation produced from the current component inputs and state. React compares the new representation with the previous one and applies the necessary changes to the underlying rendering environment.',
      highlights: [
        {
          title: 'Render',
          description:
            'Calculates what the UI should represent for the current inputs and state.',
        },
        {
          title: 'Re-render',
          description:
            'Another rendering pass triggered by relevant changes.',
        },
        {
          title: 'Reconciliation',
          description:
            'The process React uses to determine what changes are needed between UI representations.',
        },
      ],
    },
    {
      title: 'Virtual DOM',
      content:
        'The term Virtual DOM refers to an in-memory representation of UI elements used by React as part of its rendering model. React uses its reconciliation process to determine changes before updating the underlying DOM.',
      highlights: [
        {
          title: 'DOM',
          description:
            'The browser representation of a web document.',
        },
        {
          title: 'Virtual representation',
          description:
            'An in-memory representation used to reason about the desired UI.',
        },
        {
          title: 'Reconciliation',
          description:
            'Determines how the rendered output should change when application state changes.',
        },
      ],
    },
    {
      title: 'Keys in Lists',
      content:
        'When rendering lists, React uses keys to identify items between renders. Stable keys help React correctly understand which items were added, removed, or changed.',
      highlights: [
        {
          title: 'Key',
          description:
            'A stable identifier used by React to distinguish list items.',
        },
        {
          title: 'Stable identity',
          description:
            'An identifier that remains associated with the same logical item across renders.',
        },
        {
          title: 'List reconciliation',
          description:
            'The process of determining changes between list renders.',
        },
      ],
    },
    {
      title: 'Conditional Rendering',
      content:
        'React supports conditional rendering using normal JavaScript expressions and control-flow patterns. Applications commonly render different UI depending on authentication state, loading state, permissions, feature flags, or data availability.',
      highlights: [
        {
          title: 'Conditional UI',
          description:
            'Interface content that changes depending on application state or conditions.',
        },
        {
          title: 'Loading state',
          description:
            'UI state representing an operation that has not completed yet.',
        },
        {
          title: 'Empty state',
          description:
            'UI shown when there is no data to display.',
        },
      ],
    },
    {
      title: 'Forms',
      content:
        'React applications commonly use controlled or uncontrolled form inputs. Controlled inputs derive their value from React state, while uncontrolled inputs can rely more directly on browser-managed state and references.',
      highlights: [
        {
          title: 'Controlled input',
          description:
            'A form input whose value is managed through React state.',
        },
        {
          title: 'Uncontrolled input',
          description:
            'A form input whose current value is primarily managed by the browser.',
        },
        {
          title: 'Form validation',
          description:
            'Checking whether submitted data satisfies application rules.',
        },
      ],
    },
    {
      title: 'Event Handling',
      content:
        'React provides event handlers for browser interactions such as clicks, keyboard input, form submission, pointer events, and focus changes. Event handlers typically update state or invoke application logic.',
      highlights: [
        {
          title: 'Event handler',
          description:
            'A function executed in response to an event.',
        },
        {
          title: 'Click event',
          description:
            'An event generated when a user activates an interactive element.',
        },
        {
          title: 'Submit event',
          description:
            'An event generated when a form is submitted.',
        },
      ],
    },
    {
      title: 'Component Composition',
      content:
        'Composition means building larger components by combining smaller components. It is one of the core design techniques for keeping React applications modular and reusable.',
      highlights: [
        {
          title: 'Composition',
          description:
            'Combining smaller components to construct larger UI structures.',
        },
        {
          title: 'Children',
          description:
            'Content passed between the opening and closing tags of a React component.',
        },
        {
          title: 'Reusable component',
          description:
            'A component designed to work across multiple contexts through defined inputs.',
        },
      ],
    },
    {
      title: 'Context',
      content:
        'React Context allows values to be made available to components deeper in the component tree without passing props through every intermediate component. It can be useful for application-wide concerns such as themes, locale, or authentication context.',
      highlights: [
        {
          title: 'Context',
          description:
            'A React mechanism for making shared values available to descendants.',
        },
        {
          title: 'Provider',
          description:
            'The component that supplies a context value to descendants.',
        },
        {
          title: 'Consumer',
          description:
            'A component or Hook that reads a context value.',
        },
      ],
    },
    {
      title: 'Custom Hooks',
      content:
        'Custom Hooks allow developers to package reusable stateful logic into functions whose names conventionally begin with use. They help separate application behavior from individual UI components.',
      highlights: [
        {
          title: 'Custom Hook',
          description:
            'A reusable function that uses React Hooks to encapsulate application logic.',
        },
        {
          title: 'Logic reuse',
          description:
            'Sharing behavior between components without duplicating implementation.',
        },
      ],
    },
    {
      title: 'State Management',
      content:
        'As applications grow, state may need to be shared across many components. Teams can use local state, Context, reducer patterns, or dedicated state-management libraries depending on the complexity and requirements of the product.',
      highlights: [
        {
          title: 'Local state',
          description:
            'State owned by a specific component or small component area.',
        },
        {
          title: 'Global state',
          description:
            'State shared across multiple unrelated parts of an application.',
        },
        {
          title: 'Reducer',
          description:
            'A function that calculates the next state from the current state and an action.',
        },
      ],
    },
    {
      title: 'Routing',
      content:
        'React itself focuses on UI rendering and does not require a specific routing library. React applications commonly use routing solutions to map URLs to screens, handle navigation, protect routes, and manage route parameters.',
      highlights: [
        {
          title: 'Route',
          description:
            'A mapping between a URL pattern and application UI or behavior.',
        },
        {
          title: 'Navigation',
          description:
            'Moving between application views or URLs.',
        },
        {
          title: 'Protected route',
          description:
            'A route whose access depends on authentication or authorization.',
        },
      ],
    },
    {
      title: 'Data Fetching',
      content:
        'React applications frequently communicate with backend APIs to retrieve or update data. Data fetching architecture should account for loading states, errors, caching, retries, cancellation, synchronization, and stale data.',
      highlights: [
        {
          title: 'Loading',
          description:
            'State indicating that a data operation is still in progress.',
        },
        {
          title: 'Error',
          description:
            'State representing a failed data operation.',
        },
        {
          title: 'Cache',
          description:
            'Stored data that can be reused to reduce repeated network requests.',
        },
        {
          title: 'Stale data',
          description:
            'Previously retrieved data that may no longer reflect the latest server state.',
        },
      ],
    },
    {
      title: 'React and TypeScript',
      content:
        'TypeScript is widely used with React to define component props, state, event types, API contracts, and shared models. This combination is particularly useful for large production frontend applications.',
      highlights: [
        {
          title: 'Props interface',
          description:
            'A TypeScript interface or type describing a component’s expected inputs.',
        },
        {
          title: 'Typed state',
          description:
            'State whose expected structure is explicitly described by TypeScript.',
        },
        {
          title: 'Typed event',
          description:
            'An event represented using an appropriate TypeScript event type.',
        },
      ],
    },
    {
      title: 'React and REST APIs',
      content:
        'A React frontend commonly communicates with backend REST APIs. The frontend sends requests, handles authentication, processes responses, updates state, and displays success or failure states to the user.',
      highlights: [
        {
          title: 'API client',
          description:
            'Frontend code responsible for communication with backend services.',
        },
        {
          title: 'Request state',
          description:
            'Information representing whether an API operation is idle, loading, successful, or failed.',
        },
        {
          title: 'Optimistic update',
          description:
            'Updating the UI before the server confirms the operation, with a strategy for handling failure.',
        },
      ],
    },
    {
      title: 'React and Authentication',
      content:
        'React applications often need to represent authentication state and protect access to application routes or features. Authentication information should be handled carefully, and sensitive credentials should not be exposed unnecessarily in browser-accessible code.',
      highlights: [
        {
          title: 'Authentication state',
          description:
            'Frontend representation of whether a user is authenticated and associated identity information.',
        },
        {
          title: 'Protected UI',
          description:
            'Interface or functionality shown only when the application determines that access is permitted.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether an authenticated user is permitted to perform an action.',
        },
      ],
    },
    {
      title: 'React and Accessibility',
      content:
        'Production React applications should be accessible to users with different abilities. Developers should use semantic HTML, accessible labels, keyboard navigation, appropriate focus management, meaningful error messages, and suitable ARIA attributes when necessary.',
      highlights: [
        {
          title: 'Semantic HTML',
          description:
            'Using HTML elements according to their intended meaning and behavior.',
        },
        {
          title: 'Keyboard accessibility',
          description:
            'Ensuring users can navigate and operate the interface using a keyboard.',
        },
        {
          title: 'Focus management',
          description:
            'Controlling focus appropriately as application state and navigation change.',
        },
        {
          title: 'ARIA',
          description:
            'Accessibility attributes used to communicate additional semantics to assistive technologies when native HTML is insufficient.',
        },
      ],
    },
    {
      title: 'React Performance',
      content:
        'React performance depends on component design, rendering frequency, state placement, data fetching, JavaScript bundle size, and browser workload. Optimization should be driven by measurements rather than adding memoization everywhere.',
      highlights: [
        {
          title: 'Memoization',
          description:
            'Caching a computed result or component behavior to avoid unnecessary work when appropriate.',
        },
        {
          title: 'Re-render',
          description:
            'Another rendering pass caused by relevant changes.',
        },
        {
          title: 'Code splitting',
          description:
            'Loading only the JavaScript required for a particular part of an application when appropriate.',
        },
        {
          title: 'Profiling',
          description:
            'Measuring actual rendering and application behavior to identify bottlenecks.',
        },
      ],
    },
    {
      title: 'React Testing',
      content:
        'React applications should be tested at multiple levels. Component tests verify UI behavior, integration tests verify interactions between components and services, and end-to-end tests validate important user workflows.',
      highlights: [
        {
          title: 'Component test',
          description:
            'Tests the behavior and rendered output of a component.',
        },
        {
          title: 'Integration test',
          description:
            'Tests multiple components or application layers working together.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete user workflow through the running application.',
        },
      ],
    },
    {
      title: 'React Error Handling',
      content:
        'Production React applications need strategies for handling rendering failures, API errors, invalid states, and asynchronous failures. Error boundaries can provide a controlled UI when rendering errors occur in supported component trees.',
      highlights: [
        {
          title: 'Error boundary',
          description:
            'A React mechanism for displaying fallback UI when supported rendering errors occur in descendant components.',
        },
        {
          title: 'Fallback UI',
          description:
            'Alternative interface displayed when the normal interface cannot be rendered or data is unavailable.',
        },
        {
          title: 'Error state',
          description:
            'Application state representing an unsuccessful operation.',
        },
      ],
    },
    {
      title: 'React Security',
      content:
        'React helps reduce some common risks through its rendering model, but frontend applications still need careful security practices. Teams should avoid unsafe HTML injection, protect authentication flows, validate server-side permissions, keep dependencies updated, and never assume frontend checks are sufficient authorization controls.',
      highlights: [
        {
          title: 'XSS',
          description:
            'Cross-Site Scripting occurs when attacker-controlled content is executed as code in a user’s browser.',
        },
        {
          title: 'dangerouslySetInnerHTML',
          description:
            'A React escape hatch for inserting raw HTML that requires careful handling of untrusted content.',
        },
        {
          title: 'Server-side authorization',
          description:
            'Backend enforcement of permissions because browser-side checks can be bypassed.',
        },
      ],
    },
    {
      title: 'React Architecture',
      content:
        'A production React application should establish clear boundaries between presentation, application state, API communication, domain logic, routing, shared components, and infrastructure concerns. The architecture should remain proportional to the product’s complexity.',
      highlights: [
        {
          title: 'Presentation layer',
          description:
            'Components primarily responsible for displaying application state.',
        },
        {
          title: 'Domain logic',
          description:
            'Business rules that describe how the product should behave.',
        },
        {
          title: 'API layer',
          description:
            'A dedicated area for communication with backend services.',
        },
        {
          title: 'Shared component',
          description:
            'A reusable UI component designed for use across multiple product areas.',
        },
      ],
    },
    {
      title: 'React and AI Applications',
      content:
        'React is widely used to build AI product interfaces such as chat applications, AI copilots, document analysis tools, agent dashboards, evaluation consoles, and workflow applications. These interfaces often need streaming responses, conversation state, tool status, citations, file uploads, and real-time feedback.',
      highlights: [
        {
          title: 'AI chat interface',
          description:
            'A frontend experience allowing users to interact with an AI system conversationally.',
        },
        {
          title: 'Streaming response',
          description:
            'Incremental AI output delivered to the UI as it becomes available.',
        },
        {
          title: 'Tool status',
          description:
            'UI feedback showing that an AI agent is executing an external tool or operation.',
        },
        {
          title: 'Citation display',
          description:
            'UI showing supporting sources associated with an AI-generated response.',
        },
      ],
    },
    {
      title: 'React and Real-Time Applications',
      content:
        'React can render real-time data delivered through WebSockets, Server-Sent Events, or other streaming mechanisms. The application should carefully manage subscriptions, cleanup, reconnection, ordering, and connection state.',
      highlights: [
        {
          title: 'WebSocket',
          description:
            'A persistent bidirectional communication channel between client and server.',
        },
        {
          title: 'Server-Sent Events',
          description:
            'A mechanism for servers to stream events to browsers over HTTP.',
        },
        {
          title: 'Subscription cleanup',
          description:
            'Removing event listeners or connections when a component no longer needs them.',
        },
      ],
    },
    {
      title: 'React Deployment',
      content:
        'React applications are commonly built into static assets and deployed through CDNs, static hosting platforms, edge networks, containers, or application platforms. Production deployments should include environment configuration, asset caching, monitoring, error tracking, and rollback strategies.',
      highlights: [
        {
          title: 'Production build',
          description:
            'An optimized build of the frontend intended for deployment.',
        },
        {
          title: 'CDN',
          description:
            'A distributed network used to deliver static or cacheable content closer to users.',
        },
        {
          title: 'Environment configuration',
          description:
            'Runtime or build-time settings that control application behavior across environments.',
        },
      ],
    },
    {
      title: 'Common React Mistakes',
      content:
        'Common mistakes include putting too much state in one component, using effects for ordinary calculations, missing list keys, mutating state directly, creating unnecessary global state, ignoring loading and error states, overusing memoization, placing secrets in frontend code, and relying on frontend authorization alone.',
      highlights: [
        {
          title: 'State explosion',
          description:
            'Allowing too much unrelated state and logic to accumulate inside a single component.',
        },
        {
          title: 'Unnecessary effects',
          description:
            'Using effects for calculations or transformations that can be performed directly during rendering.',
        },
        {
          title: 'Direct mutation',
          description:
            'Changing existing state objects or arrays instead of producing the expected updated state representation.',
        },
        {
          title: 'Frontend-only authorization',
          description:
            'Relying on browser checks without enforcing permissions on the backend.',
        },
      ],
    },
    {
      title: 'React for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the important React concepts are component architecture, state management, frontend-backend contracts, performance, accessibility, testing, security, delivery practices, and team maintainability. The goal is not to memorize every React API but to understand the engineering trade-offs behind a production frontend.',
    },
    {
      title: 'Explore React in EDDUU',
      content:
        'EDDUU connects React with JavaScript, TypeScript, Full Stack Engineering, Node.js, Express.js, Next.js, REST APIs, WebSockets, Webhooks, authentication, security, testing, AI applications, and production frontend engineering.',
    },
  ],
  relatedTechnologyIds: [
    'javascript',
    'typescript',
    'full-stack',
    'nodejs',
    'expressjs',
    'nextjs',
    'rest-apis',
    'websockets',
    'webhooks',
  ],
}

export default reactKnowledge
