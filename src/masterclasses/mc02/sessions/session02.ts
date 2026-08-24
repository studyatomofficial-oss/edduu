import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session02: SessionDefinition = {
  id: 'mc02-session-02',
  number: 2,
  stage: 'discover',
  title: 'How Does a Website Look?',
  objective:
    'Understand how CSS controls presentation, layout and visual appearance while HTML continues to provide structure.',
  experiences: [
    {
      id: 'mc02-s02-css-lesson',
      type: 'lesson',
      title: 'How does structure become presentation?',
      description:
        'We have a structured HTML page. Now discover how CSS changes the way that structure is presented to the user.',
      lesson: {
        opening:
          'HTML tells the browser what exists. But a real website also needs to control how those elements are presented.',
        sections: [
          {
            heading: 'CSS controls presentation',
            explanation:
              'CSS provides presentation rules that tell the browser how elements should appear.',
            example:
              'CSS can change fonts, spacing, sizing and layout.',
          },
          {
            heading: 'HTML and CSS have different responsibilities',
            explanation:
              'HTML describes structure and content, while CSS describes presentation.',
            example:
              'HTML can define a button while CSS can control its size, spacing and appearance.',
          },
          {
            heading: 'Layout organizes elements',
            explanation:
              'CSS can control how elements are positioned and arranged on a page.',
            example:
              'A navigation bar can be arranged horizontally using CSS layout rules.',
          },
          {
            heading: 'Presentation can change without changing the structure',
            explanation:
              'The same underlying HTML structure can be presented in different ways using different CSS rules.',
            example:
              'A card can become wider, smaller, or differently spaced without changing the content it represents.',
          },
          {
            heading: 'The browser combines structure and presentation',
            explanation:
              'The browser uses HTML and CSS together to produce the visual page the user sees.',
            example:
              'The browser reads the document structure and applies matching CSS presentation rules.',
          },
        ],
        realWorldConnection:
          'Modern websites use CSS extensively to create readable layouts, responsive interfaces, consistent typography and visual hierarchy.',
        keyIdea:
          'HTML describes what the page contains, while CSS describes how that content should be presented.',
        recap: [
          'CSS controls presentation.',
          'HTML and CSS have different responsibilities.',
          'CSS can control layout and spacing.',
          'Presentation can change without replacing the underlying content.',
          'The browser combines structure and presentation.',
        ],
      },
    },
    {
      id: 'mc02-s02-css-animation',
      type: 'animation',
      title: 'Transform a plain page',
      description:
        'Watch a plain HTML page become a styled interface.',
      animation: {
        opening:
          'The structure already exists. Now add presentation rules and watch the same page change without replacing its underlying content.',
        parts: [
          {
            id: 'browser',
            label: 'Browser',
            explanation:
              'The browser interprets the page and applies the available presentation information.',
            example:
              'The browser can apply CSS rules to HTML elements.',
          },
          {
            id: 'html',
            label: 'HTML structure',
            explanation:
              'HTML provides the content and structural elements.',
            example:
              'The page contains a heading, paragraph and button.',
          },
          {
            id: 'css',
            label: 'CSS',
            explanation:
              'CSS adds presentation rules for the existing structure.',
            example:
              'CSS can change spacing, fonts, sizing and layout.',
          },
          {
            id: 'styled-page',
            label: 'Styled page',
            explanation:
              'The browser presents the structured content using the CSS rules.',
            example:
              'The same HTML now appears as a designed interface.',
          },
        ],
        closing:
          'CSS does not replace the content. It changes how the existing structure is presented.',
      },
    },
    {
      id: 'mc02-s02-css-simulation',
      type: 'simulation',
      title: 'Structure or presentation?',
      description:
        'Decide whether each responsibility belongs primarily to HTML or CSS.',
      simulation: {
        instruction:
          'Connect each responsibility with the technology that primarily owns it.',
        items: [
          {
            id: 'structure',
            label: 'Define a page heading',
            description: 'Describe the structure of the document.',
            correctTargetId: 'html',
          },
          {
            id: 'spacing',
            label: 'Add space around a card',
            description: 'Control presentation and layout.',
            correctTargetId: 'css',
          },
          {
            id: 'font',
            label: 'Change the font size',
            description: 'Control visual presentation.',
            correctTargetId: 'css',
          },
          {
            id: 'content',
            label: 'Represent a paragraph',
            description: 'Describe document content.',
            correctTargetId: 'html',
          },
        ],
        targets: [
          {
            id: 'html',
            label: 'HTML',
            description: 'Structure and content.',
          },
          {
            id: 'css',
            label: 'CSS',
            description: 'Presentation and layout.',
          },
        ],
        successMessage:
          'Excellent. You separated structure from presentation.',
        failureMessage:
          'Ask whether the task describes what exists or how it should look.',
      },
    },
    {
      id: 'mc02-s02-css-question',
      type: 'question',
      title: 'Presentation check',
      description:
        'Check your understanding of HTML and CSS responsibilities.',
      question: {
        id: 'mc02-s02-css',
        type: 'single-choice',
        question:
          'Which technology primarily controls spacing, fonts and visual layout on a web page?',
        options: [
          {
            id: 'html',
            text: 'HTML',
            correct: false,
          },
          {
            id: 'css',
            text: 'CSS',
            correct: true,
          },
          {
            id: 'javascript',
            text: 'JavaScript',
            correct: false,
          },
          {
            id: 'sql',
            text: 'SQL',
            correct: false,
          },
        ],
        explanation:
          'CSS provides presentation and layout rules. HTML remains responsible for the document structure and content.',
        hints: [
          'Think about appearance and layout.',
          'The answer is the stylesheet technology.',
        ],
      },
    },
  ],
}