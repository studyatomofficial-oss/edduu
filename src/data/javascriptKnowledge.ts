import type { KnowledgeDefinition } from './knowledge'

export const javascriptKnowledge: KnowledgeDefinition = {
  technologyId: 'javascript',
  slug: 'javascript',
  title: 'What is JavaScript?',
  summary:
    'JavaScript is the core programming language of the modern web platform, used for interactive browser applications, server-side services, APIs, automation, and full-stack application development.',
  difficulty: 'beginner',
  sections: [
    {
      title: 'What is JavaScript?',
      content:
        'JavaScript is a high-level programming language originally created for web browsers. It enables interactive behavior in web pages and has evolved into a general-purpose language used across frontend applications, backend services, automation, desktop applications, and increasingly AI-enabled products.',
    },
    {
      title: 'Why do we use JavaScript?',
      content:
        'JavaScript is one of the foundational technologies of the web. It runs directly in modern browsers and has a large ecosystem of frameworks, libraries, tools, and runtimes. The same language can also be used on the server through runtimes such as Node.js.',
      highlights: [
        {
          title: 'Web platform',
          description:
            'JavaScript is a primary programming language used to create behavior and interaction in web applications.',
        },
        {
          title: 'Browser execution',
          description:
            'Modern browsers contain JavaScript engines capable of executing JavaScript code.',
        },
        {
          title: 'Large ecosystem',
          description:
            'JavaScript has a large ecosystem covering frontend, backend, testing, tooling, and application development.',
        },
        {
          title: 'Full-stack capability',
          description:
            'JavaScript can be used across browser and server environments.',
        },
      ],
    },
    {
      title: 'JavaScript Runtime',
      content:
        'A JavaScript runtime provides the environment required to execute JavaScript code. Browsers provide JavaScript engines along with browser APIs such as the DOM, storage, networking, and events. Server-side runtimes such as Node.js provide different APIs for backend development.',
      highlights: [
        {
          title: 'JavaScript engine',
          description:
            'The component responsible for parsing, compiling, and executing JavaScript code.',
        },
        {
          title: 'Browser runtime',
          description:
            'A JavaScript execution environment combined with browser capabilities.',
        },
        {
          title: 'Node.js',
          description:
            'A JavaScript runtime used to execute JavaScript outside the browser, commonly for backend services and tooling.',
        },
      ],
    },
    {
      title: 'Variables',
      content:
        'JavaScript provides let, const, and the older var declarations. Modern JavaScript generally prefers const when a variable binding does not need reassignment and let when reassignment is required.',
      highlights: [
        {
          title: 'const',
          description:
            'Declares a variable binding that cannot be reassigned.',
        },
        {
          title: 'let',
          description:
            'Declares a block-scoped variable that can be reassigned.',
        },
        {
          title: 'var',
          description:
            'An older variable declaration mechanism with function-scoping behavior.',
        },
      ],
    },
    {
      title: 'JavaScript Data Types',
      content:
        'JavaScript has primitive types such as string, number, bigint, boolean, undefined, symbol, and null, along with objects that can represent structured data and behavior.',
      highlights: [
        {
          title: 'String',
          description:
            'Represents text.',
        },
        {
          title: 'Number',
          description:
            'Represents numeric values in JavaScript.',
        },
        {
          title: 'Boolean',
          description:
            'Represents true or false.',
        },
        {
          title: 'Undefined',
          description:
            'Represents an unassigned or missing value in many JavaScript situations.',
        },
        {
          title: 'Null',
          description:
            'Represents an intentional absence of an object value.',
        },
        {
          title: 'Object',
          description:
            'A collection of properties and behavior used to represent structured data and application entities.',
        },
      ],
    },
    {
      title: 'Functions',
      content:
        'Functions are reusable blocks of JavaScript behavior. JavaScript supports function declarations, function expressions, arrow functions, callbacks, and higher-order functions.',
      highlights: [
        {
          title: 'Function declaration',
          description:
            'Defines a named function using the function declaration syntax.',
        },
        {
          title: 'Arrow function',
          description:
            'A concise function syntax commonly used for callbacks and functional programming patterns.',
        },
        {
          title: 'Callback',
          description:
            'A function passed to another function to be invoked later or during an operation.',
        },
        {
          title: 'Higher-order function',
          description:
            'A function that accepts another function as input or returns a function.',
        },
      ],
    },
    {
      title: 'Objects and Arrays',
      content:
        'Objects are fundamental structures for representing related properties and behavior. Arrays represent ordered collections. Both are heavily used in frontend and backend JavaScript applications.',
      highlights: [
        {
          title: 'Object',
          description:
            'A collection of key-value properties.',
        },
        {
          title: 'Array',
          description:
            'An ordered collection of values.',
        },
        {
          title: 'Property',
          description:
            'A named value associated with an object.',
        },
        {
          title: 'Method',
          description:
            'A function associated with an object.',
        },
      ],
    },
    {
      title: 'Destructuring',
      content:
        'Destructuring allows values to be extracted from objects and arrays into variables. It is widely used in modern JavaScript and React applications to make code concise and readable.',
      highlights: [
        {
          title: 'Object destructuring',
          description:
            'Extracts properties from an object into variables.',
        },
        {
          title: 'Array destructuring',
          description:
            'Extracts values from an array into variables according to their positions.',
        },
      ],
    },
    {
      title: 'Spread and Rest Syntax',
      content:
        'The spread syntax expands iterable values or object properties, while rest syntax collects remaining values into a single structure. These features are commonly used for immutable updates and flexible function parameters.',
      highlights: [
        {
          title: 'Spread',
          description:
            'Expands elements or properties from an iterable or object.',
        },
        {
          title: 'Rest',
          description:
            'Collects remaining function arguments or properties into a structure.',
        },
        {
          title: 'Immutable update',
          description:
            'Creates a new data structure rather than directly modifying existing application state.',
        },
      ],
    },
    {
      title: 'Scope',
      content:
        'Scope determines where a variable can be accessed. JavaScript supports global scope, function scope, and block scope. Understanding scope is important for avoiding unintended variable access and side effects.',
      highlights: [
        {
          title: 'Global scope',
          description:
            'A scope accessible from a broad part of an application or runtime.',
        },
        {
          title: 'Function scope',
          description:
            'Variables declared with var are scoped to their containing function.',
        },
        {
          title: 'Block scope',
          description:
            'Variables declared with let and const are scoped to the enclosing block.',
        },
      ],
    },
    {
      title: 'Closures',
      content:
        'A closure occurs when a function retains access to variables from its surrounding lexical scope even after the outer function has finished executing. Closures are fundamental to callbacks, factories, stateful functions, and many JavaScript patterns.',
      highlights: [
        {
          title: 'Lexical scope',
          description:
            'The scope determined by where code is written in the source program.',
        },
        {
          title: 'Closure',
          description:
            'A function together with access to variables from its surrounding lexical environment.',
        },
      ],
    },
    {
      title: 'this in JavaScript',
      content:
        'The value of this depends on how a function is invoked. Arrow functions behave differently because they do not create their own this binding and instead use the surrounding lexical this.',
      highlights: [
        {
          title: 'this',
          description:
            'A JavaScript keyword whose value depends on the invocation context.',
        },
        {
          title: 'Arrow function',
          description:
            'Does not create its own this binding.',
        },
        {
          title: 'Method call',
          description:
            'A function invoked as a property of an object can receive that object as its this context.',
        },
      ],
    },
    {
      title: 'Asynchronous JavaScript',
      content:
        'JavaScript applications frequently perform asynchronous operations such as network requests, timers, file access, and database calls. JavaScript uses mechanisms including callbacks, Promises, and async/await to coordinate asynchronous work.',
      highlights: [
        {
          title: 'Asynchronous operation',
          description:
            'An operation whose completion does not need to block the application from continuing other work.',
        },
        {
          title: 'Promise',
          description:
            'An object representing the eventual completion or failure of an asynchronous operation.',
        },
        {
          title: 'async',
          description:
            'Declares a function that returns a Promise and can use await.',
        },
        {
          title: 'await',
          description:
            'Waits for a Promise result inside an async function without blocking the JavaScript thread in the same way as synchronous waiting.',
        },
      ],
    },
    {
      title: 'Event Loop',
      content:
        'The JavaScript event loop coordinates execution of JavaScript code and asynchronous callbacks. JavaScript typically executes application code on a single main execution thread, while the runtime provides mechanisms for handling timers, network operations, and other asynchronous work.',
      highlights: [
        {
          title: 'Call stack',
          description:
            'The structure tracking currently executing JavaScript function calls.',
        },
        {
          title: 'Event loop',
          description:
            'Coordinates when queued asynchronous callbacks can be processed by the JavaScript execution environment.',
        },
        {
          title: 'Task queue',
          description:
            'A queue containing callbacks waiting for execution.',
        },
        {
          title: 'Microtask queue',
          description:
            'A queue used for jobs such as Promise reactions that are processed with specific event-loop ordering semantics.',
        },
      ],
    },
    {
      title: 'Promises',
      content:
        'Promises provide a structured way to represent asynchronous results. A Promise can be pending, fulfilled, or rejected. Applications can use then, catch, finally, and async/await to handle Promise outcomes.',
      highlights: [
        {
          title: 'Pending',
          description:
            'The asynchronous operation has not completed.',
        },
        {
          title: 'Fulfilled',
          description:
            'The asynchronous operation completed successfully.',
        },
        {
          title: 'Rejected',
          description:
            'The asynchronous operation failed.',
        },
      ],
    },
    {
      title: 'DOM and Browser APIs',
      content:
        'In browser applications, JavaScript can interact with the Document Object Model and browser-provided APIs. This allows applications to respond to user events, modify the interface, access browser storage, communicate with servers, and use browser capabilities.',
      highlights: [
        {
          title: 'DOM',
          description:
            'A programming representation of the structure of a web document.',
        },
        {
          title: 'Event',
          description:
            'A signal representing something that happened, such as a click, keyboard action, or network-related event.',
        },
        {
          title: 'Browser API',
          description:
            'A capability provided by the browser runtime to web applications.',
        },
      ],
    },
    {
      title: 'Fetch API',
      content:
        'The Fetch API provides a modern interface for making HTTP requests from JavaScript. It is commonly used by frontend applications to communicate with backend APIs.',
      highlights: [
        {
          title: 'fetch',
          description:
            'A browser and runtime API used to initiate HTTP requests.',
        },
        {
          title: 'Request',
          description:
            'The information sent by the client to a server.',
        },
        {
          title: 'Response',
          description:
            'The information returned by the server.',
        },
        {
          title: 'JSON',
          description:
            'A common data representation used when exchanging structured information through APIs.',
        },
      ],
    },
    {
      title: 'Modules',
      content:
        'JavaScript modules allow applications to split code into reusable files with explicit imports and exports. Modern JavaScript applications commonly use ECMAScript modules.',
      highlights: [
        {
          title: 'export',
          description:
            'Makes a value, function, or class available to other modules.',
        },
        {
          title: 'import',
          description:
            'Loads exported functionality from another module.',
        },
        {
          title: 'ES module',
          description:
            'The standardized JavaScript module system based on import and export syntax.',
        },
      ],
    },
    {
      title: 'npm and Package Management',
      content:
        'The JavaScript ecosystem commonly uses npm for package management. Projects define dependencies and development dependencies in package.json, while package-lock.json helps lock resolved dependency versions for reproducible installations.',
      highlights: [
        {
          title: 'npm',
          description:
            'A widely used package manager and ecosystem for JavaScript.',
        },
        {
          title: 'package.json',
          description:
            'Project metadata and dependency configuration file.',
        },
        {
          title: 'package-lock.json',
          description:
            'Records resolved dependency information to improve installation reproducibility.',
        },
        {
          title: 'Dependency',
          description:
            'An external package required by an application.',
        },
      ],
    },
    {
      title: 'JavaScript and React',
      content:
        'React uses JavaScript to define components, state, event handling, rendering logic, and application behavior. Understanding JavaScript functions, objects, arrays, closures, asynchronous operations, and modules is important for effective React development.',
      highlights: [
        {
          title: 'Component',
          description:
            'A reusable unit of UI and behavior in a component-based frontend system.',
        },
        {
          title: 'State',
          description:
            'Data representing information that can affect the rendered interface.',
        },
        {
          title: 'Props',
          description:
            'Inputs passed from one React component to another.',
        },
      ],
    },
    {
      title: 'JavaScript and Node.js',
      content:
        'Node.js allows JavaScript to run outside the browser and provides APIs for server-side development. Node.js applications can build HTTP APIs, process files, communicate with databases, run background workers, and integrate with external services.',
      highlights: [
        {
          title: 'Server-side JavaScript',
          description:
            'JavaScript executed in a backend runtime rather than inside a browser.',
        },
        {
          title: 'Node API',
          description:
            'Runtime-provided capabilities such as filesystem, networking, and process management.',
        },
        {
          title: 'Backend service',
          description:
            'A server-side application that provides processing or business capabilities.',
        },
      ],
    },
    {
      title: 'JavaScript and REST APIs',
      content:
        'Frontend JavaScript applications frequently consume REST APIs using fetch or HTTP client libraries. A typical flow is user interaction, JavaScript request creation, HTTP transmission, backend processing, response parsing, and UI state update.',
      highlights: [
        {
          title: 'API client',
          description:
            'Frontend code responsible for communicating with a backend API.',
        },
        {
          title: 'Request lifecycle',
          description:
            'The sequence from initiating an API request through receiving and processing the response.',
        },
        {
          title: 'Error state',
          description:
            'Frontend state representing a failed or unsuccessful operation.',
        },
      ],
    },
    {
      title: 'JavaScript Error Handling',
      content:
        'JavaScript supports synchronous exception handling through try, catch, and finally. Promise-based asynchronous operations can be handled through catch or try/catch around awaited operations.',
      highlights: [
        {
          title: 'try',
          description:
            'Contains code that may throw an exception.',
        },
        {
          title: 'catch',
          description:
            'Handles an exception.',
        },
        {
          title: 'finally',
          description:
            'Runs cleanup or final logic regardless of success or failure.',
        },
      ],
    },
    {
      title: 'JavaScript Security',
      content:
        'JavaScript applications must protect against browser and application security risks. Important practices include safe handling of user input, avoiding unsafe DOM operations, protecting authentication tokens, preventing cross-site scripting, using secure dependencies, and following appropriate browser security policies.',
      highlights: [
        {
          title: 'XSS',
          description:
            'Cross-Site Scripting occurs when attacker-controlled content is executed as script in another user’s browser.',
        },
        {
          title: 'Input sanitization',
          description:
            'Processing untrusted input to reduce the risk of unsafe interpretation.',
        },
        {
          title: 'Content Security Policy',
          description:
            'A browser security mechanism used to restrict which resources and scripts a page can execute.',
        },
        {
          title: 'Secret exposure',
          description:
            'Accidentally exposing credentials or sensitive data through frontend code or browser-accessible configuration.',
        },
      ],
    },
    {
      title: 'JavaScript Performance',
      content:
        'Frontend performance depends on JavaScript execution, rendering, network requests, bundle size, memory usage, and application architecture. Common techniques include code splitting, lazy loading, caching, efficient rendering, reducing unnecessary work, and profiling real user behavior.',
      highlights: [
        {
          title: 'Code splitting',
          description:
            'Splitting application code into smaller chunks that can be loaded when needed.',
        },
        {
          title: 'Lazy loading',
          description:
            'Deferring loading or computation until it becomes necessary.',
        },
        {
          title: 'Bundle',
          description:
            'A generated collection of application code and dependencies prepared for delivery.',
        },
        {
          title: 'Profiling',
          description:
            'Measuring application behavior to identify actual performance bottlenecks.',
        },
      ],
    },
    {
      title: 'JavaScript Testing',
      content:
        'JavaScript applications can be tested at multiple levels, including unit tests, component tests, integration tests, and end-to-end tests. The testing approach depends on the application architecture and risk profile.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small isolated piece of application logic.',
        },
        {
          title: 'Component test',
          description:
            'Tests the behavior of a UI component.',
        },
        {
          title: 'Integration test',
          description:
            'Tests how multiple application components work together.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete user workflow across the application.',
        },
      ],
    },
    {
      title: 'JavaScript Build Tools',
      content:
        'Modern JavaScript applications commonly use build tools to transform, bundle, optimize, and serve application code. Tools such as Vite, webpack, and other modern build systems support development workflows and production builds.',
      highlights: [
        {
          title: 'Bundler',
          description:
            'A tool that combines and transforms application modules into deliverable assets.',
        },
        {
          title: 'Transpilation',
          description:
            'Transforming source code into another compatible form.',
        },
        {
          title: 'Minification',
          description:
            'Reducing code size by removing unnecessary characters while preserving behavior.',
        },
      ],
    },
    {
      title: 'JavaScript in AI Applications',
      content:
        'JavaScript and its ecosystem are widely used for AI product interfaces and increasingly for backend AI services. JavaScript applications can integrate model APIs, streaming responses, agent interfaces, RAG systems, authentication, analytics, and real-time AI experiences.',
      highlights: [
        {
          title: 'AI frontend',
          description:
            'A browser application providing an interface for interacting with AI capabilities.',
        },
        {
          title: 'Streaming',
          description:
            'Delivering incremental output to the client rather than waiting for the entire result.',
        },
        {
          title: 'AI SDK',
          description:
            'A software library that simplifies integration with AI providers or AI application patterns.',
        },
      ],
    },
    {
      title: 'JavaScript Architecture',
      content:
        'Large JavaScript applications benefit from clear separation of UI, application state, API clients, business logic, shared utilities, configuration, and infrastructure concerns. The exact architecture should be selected based on product size, team structure, and operational needs.',
      highlights: [
        {
          title: 'Separation of concerns',
          description:
            'Keeping different responsibilities in appropriate parts of the application.',
        },
        {
          title: 'State management',
          description:
            'The design used to manage application data that changes over time.',
        },
        {
          title: 'API layer',
          description:
            'A dedicated area responsible for communicating with backend services.',
        },
      ],
    },
    {
      title: 'Common JavaScript Mistakes',
      content:
        'Common mistakes include excessive global state, deeply nested callbacks, ignoring Promise rejections, mutating shared state unexpectedly, overusing effects in UI frameworks, exposing secrets in browser code, ignoring accessibility, and optimizing without measuring real bottlenecks.',
      highlights: [
        {
          title: 'Callback hell',
          description:
            'Deeply nested asynchronous callbacks that become difficult to read and maintain.',
        },
        {
          title: 'Unhandled rejection',
          description:
            'A rejected Promise that is not handled appropriately.',
        },
        {
          title: 'Shared mutable state',
          description:
            'State that can be modified from many parts of an application, making behavior difficult to reason about.',
        },
        {
          title: 'Frontend secrets',
          description:
            'Credentials placed in browser-delivered code where users can inspect them.',
        },
      ],
    },
    {
      title: 'JavaScript in Production',
      content:
        'Production JavaScript systems should combine application correctness with security, performance, observability, testing, accessibility, deployment automation, dependency management, and clear ownership. For technical leaders, the key is understanding how JavaScript decisions affect product velocity, reliability, team structure, and user experience.',
    },
    {
      title: 'Explore JavaScript in EDDUU',
      content:
        'EDDUU connects JavaScript with TypeScript, React, Node.js, Express.js, Next.js, Full Stack Engineering, REST APIs, WebSockets, Webhooks, authentication, security, testing, DevOps, and AI applications.',
    },
  ],
  relatedTechnologyIds: [
    'full-stack',
    'typescript',
    'react',
    'nodejs',
    'expressjs',
    'nextjs',
    'rest-apis',
    'websockets',
    'webhooks',
  ],
}

export default javascriptKnowledge
