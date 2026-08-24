import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session04: SessionDefinition = {
  id: 'mc02-session-04',
  number: 4,
  stage: 'guided',
  title: 'How Do We Build Real Frontends?',
  objective:
    'Understand how modern frontend applications organize browser-side code using components, React, TypeScript, Vite and application state.',
  experiences: [
    {
      id: 'mc02-s04-frontend-lesson',
      type: 'lesson',
      title: 'How does a simple page become a frontend application?',
      description:
        'We have learned HTML, CSS and JavaScript. Now we connect those ideas to the structure of a modern frontend application.',
      lesson: {
        opening:
          'A small page can be built directly with HTML, CSS and JavaScript. Real applications become much easier to manage when their interface is organized into reusable pieces.',
        sections: [
          {
            heading: 'A frontend is the user-facing part of an application',
            explanation:
              'The frontend is the part of an application that runs on the client side and provides the interface users interact with.',
            example:
              'A dashboard shown in the browser is part of the frontend application.',
          },
          {
            heading: 'Components divide the interface',
            explanation:
              'Components allow a large interface to be organized into smaller reusable pieces with clear responsibilities.',
            example:
              'A dashboard can contain Header, Navigation, Card and Button components.',
          },
          {
            heading: 'React helps build component-based interfaces',
            explanation:
              'React is a library used to build user interfaces from components and describe how the interface should respond to data and state.',
            example:
              'A React application can render a reusable StudentCard component for many students.',
          },
          {
            heading: 'TypeScript adds a stronger type system',
            explanation:
              'TypeScript extends JavaScript with static typing that can help developers reason about data and catch certain mistakes earlier.',
            example:
              'A component can define that a student identifier must be a string.',
          },
          {
            heading: 'Vite supports the development workflow',
            explanation:
              'Vite provides tooling for developing and building modern frontend applications.',
            example:
              'A Vite development server can quickly serve a frontend while it is being developed.',
          },
          {
            heading: 'State represents changing application information',
            explanation:
              'State represents information that can change while the application is running and can influence what the interface displays.',
            example:
              'A selected tab, search term or logged-in user can be represented as application state.',
          },
        ],
        realWorldConnection:
          'Modern dashboards, SaaS products, education platforms and AI applications commonly use component-based frontend architectures.',
        keyIdea:
          'Modern frontend applications organize browser-side behaviour into components, use state for changing information, and use tools such as React, TypeScript and Vite to manage development.',
        recap: [
          'The frontend is the user-facing application layer.',
          'Components divide interfaces into manageable pieces.',
          'React supports component-based UI development.',
          'TypeScript adds a stronger type system to JavaScript.',
          'Vite supports modern frontend development and builds.',
          'State represents information that can change while the application runs.',
        ],
      },
    },
    {
      id: 'mc02-s04-frontend-animation',
      type: 'animation',
      title: 'Watch a page become an application',
      description:
        'Follow the transition from individual web elements to a component-based frontend.',
      animation: {
        opening:
          'A production interface is rarely one giant block of code. Watch the page become an application by separating responsibilities into components and state.',
        parts: [
          {
            id: 'browser',
            label: 'BROWSER',
            explanation:
              'The frontend application runs in the browser.',
            example:
              'The user interacts with the application through the browser.',
          },
          {
            id: 'components',
            label: 'COMPONENTS',
            explanation:
              'The interface is divided into reusable pieces.',
            example:
              'Header, Navigation, Card and Button can each be separate components.',
          },
          {
            id: 'react',
            label: 'REACT',
            explanation:
              'React helps compose the interface from components.',
            example:
              'A React tree can contain many reusable UI components.',
          },
          {
            id: 'state',
            label: 'STATE',
            explanation:
              'Changing application information can influence what the interface displays.',
            example:
              'A selected tab can change which content is visible.',
          },
          {
            id: 'frontend',
            label: 'FRONTEND APPLICATION',
            explanation:
              'The pieces work together as the user-facing application.',
            example:
              'The user can navigate and interact with the finished interface.',
          },
        ],
        closing:
          'The key transition is from a simple page to a structured application made of reusable components and changing state.',
      },
    },
    {
      id: 'mc02-s04-frontend-simulation',
      type: 'simulation',
      title: 'Assemble the frontend',
      description:
        'Connect common application responsibilities to the correct frontend concept.',
      simulation: {
        instruction:
          'Match each responsibility with the concept that best represents it.',
        items: [
          {
            id: 'header',
            label: 'Reusable navigation area',
            description: 'A reusable part of the interface.',
            correctTargetId: 'component',
          },
          {
            id: 'selected-tab',
            label: 'Currently selected tab',
            description: 'Information that can change while the application runs.',
            correctTargetId: 'state',
          },
          {
            id: 'react',
            label: 'Component-based UI library',
            description: 'Used to compose user interfaces.',
            correctTargetId: 'react',
          },
          {
            id: 'types',
            label: 'Define expected data types',
            description: 'Add stronger typing to JavaScript.',
            correctTargetId: 'typescript',
          },
        ],
        targets: [
          {
            id: 'component',
            label: 'Component',
            description: 'Reusable interface unit.',
          },
          {
            id: 'state',
            label: 'State',
            description: 'Changing application information.',
          },
          {
            id: 'react',
            label: 'React',
            description: 'Component-based UI library.',
          },
          {
            id: 'typescript',
            label: 'TypeScript',
            description: 'Typed layer on top of JavaScript.',
          },
        ],
        successMessage:
          'Excellent. You connected frontend architecture concepts with their responsibilities.',
        failureMessage:
          'Think about whether the item is a reusable UI piece, changing data, UI technology, or type information.',
      },
    },
    {
      id: 'mc02-s04-frontend-question',
      type: 'question',
      title: 'Frontend architecture check',
      description:
        'Check your understanding of modern frontend structure.',
      question: {
        id: 'mc02-s04-frontend',
        type: 'single-choice',
        question:
          'What is the main reason for dividing a large frontend interface into components?',
        options: [
          {
            id: 'reuse',
            text: 'To organize the interface into reusable pieces with clearer responsibilities',
            correct: true,
          },
          {
            id: 'database',
            text: 'To replace the database',
            correct: false,
          },
          {
            id: 'network',
            text: 'To remove the need for a network',
            correct: false,
          },
          {
            id: 'cpu',
            text: 'To make the CPU unnecessary',
            correct: false,
          },
        ],
        explanation:
          'Components help organize a frontend into smaller reusable units with clearer responsibilities.',
        hints: [
          'Think about software organization.',
          'Components are about breaking a UI into manageable pieces.',
        ],
      },
    },
  ],
}