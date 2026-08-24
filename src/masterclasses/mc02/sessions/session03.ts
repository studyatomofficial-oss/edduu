import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session03: SessionDefinition = {
  id: 'mc02-session-03',
  number: 3,
  stage: 'discover',
  title: 'How Does a Website Respond?',
  objective:
    'Understand how JavaScript runs in the browser, responds to events and can change the page through the DOM.',
  experiences: [
    {
      id: 'mc02-s03-javascript-lesson',
      type: 'lesson',
      title: 'How does a web page become interactive?',
      description:
        'The page now has structure and presentation. Next we need behaviour so the page can respond to the user.',
      lesson: {
        opening:
          'A page can look beautiful and still do nothing when the user clicks a button. JavaScript introduces behaviour.',
        sections: [
          {
            heading: 'JavaScript can run in the browser',
            explanation:
              'JavaScript can execute in the browser and perform operations in response to the application state and user actions.',
            example:
              'A browser can execute JavaScript when a user interacts with a page.',
          },
          {
            heading: 'Events represent things that happen',
            explanation:
              'Browsers expose events for actions such as clicks, typing, submitting forms and loading resources.',
            example:
              'Clicking a button can generate a click event.',
          },
          {
            heading: 'JavaScript can respond to events',
            explanation:
              'JavaScript code can listen for events and perform logic when those events occur.',
            example:
              'A click handler can run when the user presses a button.',
          },
          {
            heading: 'The DOM represents the document',
            explanation:
              'The browser maintains a document model that JavaScript can inspect and modify.',
            example:
              'JavaScript can change text or attributes represented in the page document.',
          },
          {
            heading: 'Behaviour changes the user experience',
            explanation:
              'By combining events, logic and document changes, a web page can respond dynamically to users.',
            example:
              'Clicking a button can reveal additional information without navigating to another page.',
          },
        ],
        realWorldConnection:
          'Menus, form validation, interactive dashboards, search boxes and many other web experiences depend on browser-side JavaScript behaviour.',
        keyIdea:
          'JavaScript can run in the browser, respond to events and change the document to create interactive behaviour.',
        recap: [
          'JavaScript can run in the browser.',
          'User actions can generate events.',
          'JavaScript can respond to events.',
          'The DOM represents the document.',
          'JavaScript can modify the page and its behaviour.',
        ],
      },
    },
    {
      id: 'mc02-s03-javascript-animation',
      type: 'animation',
      title: 'Watch a click travel through the browser',
      description:
        'Follow what happens when a user interacts with a button.',
      animation: {
        opening:
          'The page already exists. Now follow one click from the user into browser-side JavaScript and back to the visible page.',
        parts: [
          {
            id: 'browser',
            label: 'BROWSER',
            explanation:
              'The browser detects the user interaction and provides the runtime for the page.',
            example:
              'A button click can generate a browser event.',
          },
          {
            id: 'event',
            label: 'EVENT',
            explanation:
              'The browser represents the user action as an event.',
            example:
              'A click event identifies that the button was activated.',
          },
          {
            id: 'javascript',
            label: 'JAVASCRIPT',
            explanation:
              'JavaScript runs logic in response to the event.',
            example:
              'A click handler can decide what should happen next.',
          },
          {
            id: 'dom',
            label: 'DOM',
            explanation:
              'JavaScript can inspect or change the document representation.',
            example:
              'The script can update text or change an element.',
          },
          {
            id: 'screen',
            label: 'UPDATED PAGE',
            explanation:
              'The browser presents the changed result to the user.',
            example:
              'New information can appear after the click.',
          },
        ],
        closing:
          'The important connection is: user action creates an event, JavaScript performs logic, the document can change, and the browser presents the updated result.',
      },
    },
    {
      id: 'mc02-s03-javascript-simulation',
      type: 'simulation',
      title: 'Build the interaction flow',
      description:
        'Arrange the pieces of a browser interaction.',
      simulation: {
        instruction:
          'Connect each part with the role it plays when a user clicks a button.',
        items: [
          {
            id: 'click',
            label: 'User clicks',
            description: 'The user performs an action.',
            correctTargetId: 'event',
          },
          {
            id: 'logic',
            label: 'JavaScript logic',
            description: 'Code decides what to do.',
            correctTargetId: 'javascript',
          },
          {
            id: 'document',
            label: 'Page representation',
            description: 'The document can be changed.',
            correctTargetId: 'dom',
          },
          {
            id: 'result',
            label: 'Updated interface',
            description: 'The user sees the result.',
            correctTargetId: 'browser',
          },
        ],
        targets: [
          {
            id: 'event',
            label: 'Event',
            description: 'Represents the user action.',
          },
          {
            id: 'javascript',
            label: 'JavaScript',
            description: 'Runs the interaction logic.',
          },
          {
            id: 'dom',
            label: 'DOM',
            description: 'Represents the document that can be changed.',
          },
          {
            id: 'browser',
            label: 'Browser',
            description: 'Presents the resulting interface.',
          },
        ],
        successMessage:
          'Excellent. You followed the complete browser interaction loop.',
        failureMessage:
          'Start with the user action, then follow the event into JavaScript and finally back to the visible page.',
      },
    },
    {
      id: 'mc02-s03-javascript-question',
      type: 'question',
      title: 'Behaviour check',
      description:
        'Check your understanding of JavaScript in the browser.',
      question: {
        id: 'mc02-s03-javascript',
        type: 'single-choice',
        question:
          'A user clicks a button and the text on the page changes without loading a completely new page. Which technology can perform that browser-side behaviour?',
        options: [
          {
            id: 'javascript',
            text: 'JavaScript',
            correct: true,
          },
          {
            id: 'css',
            text: 'CSS',
            correct: false,
          },
          {
            id: 'html-only',
            text: 'HTML alone',
            correct: false,
          },
          {
            id: 'database',
            text: 'Database',
            correct: false,
          },
        ],
        explanation:
          'JavaScript can respond to browser events and modify the DOM, allowing the visible page to change interactively.',
        hints: [
          'Think about behaviour rather than structure or styling.',
          'The browser executes this technology.',
        ],
      },
    },
  ],
}