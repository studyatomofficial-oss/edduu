import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc01Session08: SessionDefinition = {
  id: 'mc01-session-08',
  number: 8,
  stage: 'challenge',
  title: 'What Happens When You Open a Website?',
  objective:
    'Understand what happens after a web server responds: how the browser receives resources, processes them and turns them into the website you see on screen.',
  experiences: [
    {
      id: 'mc01-s08-render-lesson',
      type: 'lesson',
      title: 'From server response to the website on your screen',
      description:
        'Session 7 showed us how a browser reaches a server. Now we follow what happens after the server responds.',
      lesson: {
        opening:
          'We already know how the request reaches the server. But there is still an important question: when the response comes back, how does that response become the website you actually see?',
        sections: [
          {
            heading: 'The server sends resources back',
            explanation:
              'The server can return resources that the browser needs to build the website.',
            example:
              'A response can contain HTML and can lead the browser to request other resources such as CSS, JavaScript and images.',
          },
          {
            heading: 'HTML provides the page structure',
            explanation:
              'HTML describes the structure and content of a web page.',
            example:
              'Headings, paragraphs, buttons and other page elements can be represented through HTML.',
          },
          {
            heading: 'CSS controls presentation',
            explanation:
              'CSS provides presentation information that helps the browser determine how elements should look.',
            example:
              'CSS can control things such as spacing, sizing, fonts and layout.',
          },
          {
            heading: 'JavaScript can add behaviour',
            explanation:
              'JavaScript can allow a web page to respond to actions and perform interactive work in the browser.',
            example:
              'Clicking a button can trigger behaviour handled by JavaScript.',
          },
          {
            heading: 'The browser combines the information',
            explanation:
              'The browser processes the returned resources and uses them to construct the page that the user sees.',
            example:
              'The browser combines structure, presentation and behaviour into the interactive page displayed on screen.',
          },
          {
            heading: 'The screen is the final result',
            explanation:
              'After processing the required information, the browser presents the resulting page to the user.',
            example:
              'You finally see the website in the browser window.',
          },
        ],
        realWorldConnection:
          'A modern website is usually more than one piece of information. The browser may need to retrieve and process several resources before the complete experience appears.',
        keyIdea:
          'The server response is not the end of the journey. The browser processes resources such as HTML, CSS and JavaScript and turns them into the website the user sees.',
        recap: [
          'The server returns resources.',
          'HTML provides page structure.',
          'CSS provides presentation information.',
          'JavaScript can provide interactive behaviour.',
          'The browser processes these resources.',
          'The browser presents the resulting page on screen.',
        ],
      },
    },

    {
      id: 'mc01-s08-render-animation',
      type: 'animation',
      title: 'Watch the browser build the page',
      description:
        'Follow what happens after the server response reaches the browser.',
      animation: {
        opening:
          'The network journey is complete. Now watch the browser turn the returned resources into something you can actually see and use.',
        parts: [
          {
            id: 'response',
            label: '1. Server response',
            explanation:
              'The browser receives information returned by the web server.',
            example:
              'The response can provide the starting HTML for the requested page.',
          },
          {
            id: 'html',
            label: '2. HTML',
            explanation:
              'HTML provides the structure and content of the page.',
            example:
              'Headings, text, links and buttons can be represented in the page structure.',
          },
          {
            id: 'css',
            label: '3. CSS',
            explanation:
              'CSS provides presentation information for the page.',
            example:
              'The browser can use CSS to determine layout, spacing and appearance.',
          },
          {
            id: 'javascript',
            label: '4. JavaScript',
            explanation:
              'JavaScript can add behaviour and interaction to the page.',
            example:
              'A button can respond to a user action through browser-side code.',
          },
          {
            id: 'browser',
            label: '5. Browser processing',
            explanation:
              'The browser processes the resources and combines the information needed for the page.',
            example:
              'The browser prepares the page for presentation.',
          },
          {
            id: 'screen',
            label: '6. Screen',
            explanation:
              'The processed result is presented to the user.',
            example:
              'You see and interact with the website in the browser window.',
          },
        ],
        closing:
          'The important new idea is that receiving the server response is not the final step. The browser still has work to do before the website appears on your screen.',
      },
    },

    {
      id: 'mc01-s08-render-simulation',
      type: 'simulation',
      title: 'Build the page from its resources',
      description:
        'Connect each browser task to the part of the website experience it helps create.',
      simulation: {
        instruction:
          'Select an activity, then select the part of the browser experience that handles it.',
        items: [
          {
            id: 'structure',
            label: 'Define the structure of the page',
            description:
              'The browser needs information describing the page structure.',
            correctTargetId: 'html',
          },
          {
            id: 'appearance',
            label: 'Define how the page should look',
            description:
              'The browser needs presentation information.',
            correctTargetId: 'css',
          },
          {
            id: 'interaction',
            label: 'Add interactive behaviour',
            description:
              'The page needs behaviour that can respond to actions.',
            correctTargetId: 'javascript',
          },
          {
            id: 'process',
            label: 'Combine the returned information',
            description:
              'The browser processes the resources needed for the page.',
            correctTargetId: 'browser',
          },
          {
            id: 'display',
            label: 'Present the finished result',
            description:
              'The user sees the resulting website.',
            correctTargetId: 'screen',
          },
        ],
        targets: [
          {
            id: 'html',
            label: 'HTML',
            description:
              'Provides page structure and content.',
          },
          {
            id: 'css',
            label: 'CSS',
            description:
              'Provides presentation information.',
          },
          {
            id: 'javascript',
            label: 'JavaScript',
            description:
              'Can provide interactive behaviour.',
          },
          {
            id: 'browser',
            label: 'Browser processing',
            description:
              'Processes and combines the information needed by the page.',
          },
          {
            id: 'screen',
            label: 'Browser display',
            description:
              'Presents the resulting page to the user.',
          },
        ],
        successMessage:
          'Excellent. You connected page structure, presentation, behaviour, browser processing and the final display.',
        failureMessage:
          'Think about three layers first: structure, presentation and behaviour. Then think about what the browser does with them and where the final result appears.',
      },
    },

    {
      id: 'mc01-s08-render-sequence',
      type: 'sequencing',
      title: 'Reconstruct what happens after the response',
      description:
        'Put the browser-side journey in the order that best explains how the website appears.',
      sequencing: {
        instruction:
          'Arrange the steps from receiving the server response to seeing the website.',
        items: [
          {
            id: 'response',
            label: 'Browser receives the server response',
            description:
              'Information for the requested web experience arrives.',
            correctPosition: 0,
          },
          {
            id: 'html',
            label: 'Browser processes HTML',
            description:
              'The page structure and content are identified.',
            correctPosition: 1,
          },
          {
            id: 'css',
            label: 'Browser processes CSS',
            description:
              'Presentation information is applied.',
            correctPosition: 2,
          },
          {
            id: 'javascript',
            label: 'Browser processes JavaScript',
            description:
              'Interactive behaviour can be handled.',
            correctPosition: 3,
          },
          {
            id: 'render',
            label: 'Browser prepares the page',
            description:
              'The browser combines the information needed for presentation.',
            correctPosition: 4,
          },
          {
            id: 'screen',
            label: 'User sees the website',
            description:
              'The resulting page is presented on screen.',
            correctPosition: 5,
          },
        ],
        successMessage:
          'Excellent. You followed the browser-side part of the website journey.',
        failureMessage:
          'Start with the server response, then think about structure, presentation, behaviour, browser processing and finally the screen.',
      },
    },

    {
      id: 'mc01-s08-render-question',
      type: 'question',
      title: 'Final challenge',
      description:
        'Test whether you understand the part of the website journey that happens after the server responds.',
      question: {
        id: 'mc01-s08-render',
        type: 'single-choice',
        question:
          'A server has returned the starting information for a website. What does the browser do next?',
        options: [
          {
            id: 'correct',
            text: 'It processes the returned resources and uses them to build the page shown to the user.',
            correct: true,
          },
          {
            id: 'wrong-1',
            text: 'It permanently stores the entire internet inside RAM.',
            correct: false,
          },
          {
            id: 'wrong-2',
            text: 'It sends every response directly to the monitor without processing it.',
            correct: false,
          },
          {
            id: 'wrong-3',
            text: 'It converts the website directly into a CPU instruction without any browser processing.',
            correct: false,
          },
        ],
        explanation:
          'The browser processes the resources involved in the web experience and uses that information to construct and display the page.',
        hints: [
          'Receiving the server response is not the end. Think about what the browser must do before you can see the page.',
        ],
      },
    },
  ],
}
