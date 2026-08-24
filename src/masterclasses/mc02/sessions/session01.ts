import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session01: SessionDefinition = {
  id: 'mc02-session-01',
  number: 1,
  stage: 'discover',
  title: 'How Does a Web Page Exist?',
  objective:
    'Understand how HTML gives a web page its structure, how the browser interprets that structure, and how a simple document becomes a visible page.',
  experiences: [
    {
      id: 'mc02-s01-html-lesson',
      type: 'lesson',
      title: 'What is a web page made of?',
      description:
        'Start with a blank page and discover how HTML provides the structure that the browser can interpret and display.',
      lesson: {
        opening:
          'Imagine opening a browser and seeing an empty page. The first question is simple: how do we tell the browser what should exist on that page?',
        sections: [
          {
            heading: 'A web page is information the browser can interpret',
            explanation:
              'A web page is information delivered to a browser so the browser can process it and present it to the user.',
            example:
              'A browser can receive a document containing headings, paragraphs, links and other page elements.',
          },
          {
            heading: 'HTML provides structure',
            explanation:
              'HTML is a markup language used to describe the structure and content of a web page.',
            example:
              'An HTML heading can represent the main title of a page, while a paragraph can represent supporting text.',
          },
          {
            heading: 'Elements describe pieces of a page',
            explanation:
              'HTML documents are built from elements that describe different pieces of content and structure.',
            example:
              'A page can contain heading, paragraph, link and button elements.',
          },
          {
            heading: 'The browser interprets the document',
            explanation:
              'The browser reads the HTML and builds an internal representation of the page that it can process and display.',
            example:
              'When the browser receives HTML containing a heading, it can create the corresponding page structure.',
          },
          {
            heading: 'Structure comes before presentation',
            explanation:
              'Before we decide how a page should look, we need to describe what exists on the page.',
            example:
              'A heading can exist as part of the document structure before CSS changes its appearance.',
          },
        ],
        realWorldConnection:
          'Every website you open begins with information that the browser must interpret. HTML provides one of the fundamental layers used to describe web page structure.',
        keyIdea:
          'HTML describes the structure and content of a web page, and the browser interprets that structure to create the page.',
        recap: [
          'A web page is information processed by a browser.',
          'HTML describes page structure and content.',
          'HTML uses elements to represent pieces of a page.',
          'The browser interprets HTML.',
          'Structure is the foundation before presentation and behaviour.',
        ],
      },
    },
    {
      id: 'mc02-s01-html-animation',
      type: 'animation',
      title: 'Build a page from nothing',
      description:
        'Follow how a blank browser page becomes a structured web page.',
      animation: {
        opening:
          'Start with nothing. Then add structure one step at a time and watch the browser turn the document into a page.',
        parts: [
          {
            id: 'browser',
            label: 'Browser',
            explanation:
              'The browser provides the environment in which the web page is interpreted and displayed.',
            example:
              'Chrome can receive and display a web document.',
          },
          {
            id: 'html',
            label: 'HTML',
            explanation:
              'HTML describes the structure and content of the page.',
            example:
              'A heading and paragraph can be represented as HTML elements.',
          },
          {
            id: 'document',
            label: 'Document structure',
            explanation:
              'The browser interprets the HTML as a structured document.',
            example:
              'The document can contain headings, paragraphs, links and buttons.',
          },
          {
            id: 'page',
            label: 'Web page',
            explanation:
              'The browser presents the interpreted document to the user.',
            example:
              'The user can now see the structured page in the browser.',
          },
        ],
        closing:
          'A blank page becomes meaningful when we provide structure. HTML gives the browser information it can interpret and present.',
      },
    },
    {
      id: 'mc02-s01-html-simulation',
      type: 'simulation',
      title: 'Build the page structure',
      description:
        'Connect common page content with the HTML elements that can represent it.',
      simulation: {
        instruction:
          'Select an item, then select the HTML element that best represents its role.',
        items: [
          {
            id: 'heading',
            label: 'Main page title',
            description: 'The primary heading of the page.',
            correctTargetId: 'heading-element',
          },
          {
            id: 'paragraph',
            label: 'Supporting explanation',
            description: 'A block of explanatory text.',
            correctTargetId: 'paragraph-element',
          },
          {
            id: 'link',
            label: 'Navigation to another page',
            description: 'A piece of content that takes the user somewhere else.',
            correctTargetId: 'link-element',
          },
          {
            id: 'button',
            label: 'Action control',
            description: 'A control the user can interact with.',
            correctTargetId: 'button-element',
          },
        ],
        targets: [
          {
            id: 'heading-element',
            label: 'Heading',
            description: 'Represents a heading in the document structure.',
          },
          {
            id: 'paragraph-element',
            label: 'Paragraph',
            description: 'Represents a paragraph of text.',
          },
          {
            id: 'link-element',
            label: 'Link',
            description: 'Represents navigation to another resource.',
          },
          {
            id: 'button-element',
            label: 'Button',
            description: 'Represents an interactive control.',
          },
        ],
        successMessage:
          'Excellent. You connected page content with structural HTML concepts.',
        failureMessage:
          'Think about what the content represents before thinking about how it should look.',
      },
    },
    {
      id: 'mc02-s01-html-question',
      type: 'question',
      title: 'Your first web challenge',
      description:
        'Check your understanding of the foundation of a web page.',
      question: {
        id: 'mc02-s01-html',
        type: 'single-choice',
        question:
          'Which technology primarily describes the structure and content of a web page?',
        options: [
          {
            id: 'html',
            text: 'HTML',
            correct: true,
          },
          {
            id: 'css',
            text: 'CSS',
            correct: false,
          },
          {
            id: 'javascript',
            text: 'JavaScript',
            correct: false,
          },
          {
            id: 'database',
            text: 'Database',
            correct: false,
          },
        ],
        explanation:
          'HTML provides the structure and content of a web page. CSS controls presentation, while JavaScript can provide behaviour.',
        hints: [
          'Think about structure rather than appearance or behaviour.',
          'The answer is the markup language used to describe the document.',
        ],
      },
    },
  ],
}