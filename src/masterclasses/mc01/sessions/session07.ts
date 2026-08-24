import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc01Session07: SessionDefinition = {
  id: 'mc01-session-07',
  number: 7,
  stage: 'guided',
  title: 'How Websites Work',
  objective:
    'Understand the basic roles of a browser, DNS, IP address, server and HTTP request/response.',
  experiences: [
    {
      id: 'mc01-s07-web-lesson',
      type: 'lesson',
      title: 'What happens when a browser asks for a website?',
      description:
        'We now know how computers communicate across the internet. The next step is understanding how a browser finds and requests a website.',
      lesson: {
        opening:
          'We have moved from one computer to networks and then to the internet. Now we can finally follow what happens when you type a website address into a browser.',
        sections: [
          {
            heading: 'The browser is the client',
            explanation:
              'A browser lets you request and display web resources. When you ask for a website, the browser acts as a client.',
            example:
              'Chrome or another browser can request a web page from a remote server.',
          },
          {
            heading: 'A website name is human-friendly',
            explanation:
              'People prefer names such as example.com. Computers need network addressing information to reach the destination.',
            example:
              'You can type a website name instead of remembering a numerical network address.',
          },
          {
            heading: 'DNS helps find the IP address',
            explanation:
              'DNS translates a domain name into an IP address that can be used to locate the destination on the network.',
            example:
              'A browser can use DNS to find the IP address associated with a domain name.',
          },
          {
            heading: 'The server provides the resource',
            explanation:
              'A web server receives requests and can return the files or data needed for a website.',
            example:
              'The server can return HTML and other resources required to display a page.',
          },
          {
            heading: 'HTTP uses requests and responses',
            explanation:
              'The browser sends an HTTP request and the server sends an HTTP response.',
            example:
              'The browser asks for a web resource and the server responds with the requested result.',
          },
        ],
        realWorldConnection:
          'Every time you open a website, this basic client-to-server pattern happens behind the scenes, even though the browser hides most of the networking details.',
        keyIdea:
          'A browser uses DNS and network communication to reach a server, then exchanges HTTP requests and responses with it.',
        recap: [
          'The browser can act as a web client.',
          'A domain name is easier for people to use than a numerical address.',
          'DNS helps map a domain name to an IP address.',
          'A web server provides resources.',
          'HTTP uses requests and responses between client and server.',
        ],
      },
    },
    {
      id: 'mc01-s07-web-animation',
      type: 'animation',
      title: 'Watch a website request unfold',
      description:
        'Follow the major steps from a browser to a web server.',
      animation: {
        opening:
          'This is the journey we have been building toward. Start with the browser and follow the request one step at a time.',
        parts: [
          {
            id: 'browser',
            label: 'Browser',
            explanation:
              'The browser starts the web interaction and acts as the client.',
            example:
              'You type a website address into the browser.',
          },
          {
            id: 'dns',
            label: 'DNS',
            explanation:
              'DNS helps find the IP address associated with the domain name.',
            example:
              'The browser needs network addressing information for the destination.',
          },
          {
            id: 'ip',
            label: 'IP address',
            explanation:
              'The IP address identifies the network destination.',
            example:
              'The browser can use the discovered address to communicate toward the server.',
          },
          {
            id: 'server',
            label: 'Web server',
            explanation:
              'The server receives the request and prepares a response.',
            example:
              'The server provides the requested web resource.',
          },
          {
            id: 'http',
            label: 'HTTP response',
            explanation:
              'The server returns an HTTP response to the browser.',
            example:
              'The browser receives the response and can continue rendering the page.',
          },
        ],
        closing:
          'The pieces now connect: browser, DNS, IP address, server, HTTP request and HTTP response form the basic website-request story.',
      },
    },
    {
      id: 'mc01-s07-web-sequence',
      type: 'sequencing',
      title: 'Arrange a website request',
      description:
        'Put the major parts of a website request into the correct order.',
      sequencing: {
        instruction:
          'Use the arrows to arrange the website request from beginning to response.',
        items: [
          {
            id: 'browser',
            label: 'Browser starts the request',
            description: 'The client begins the web interaction.',
            correctPosition: 0,
          },
          {
            id: 'dns',
            label: 'DNS helps find the IP address',
            description: 'The domain name is resolved toward an address.',
            correctPosition: 1,
          },
          {
            id: 'ip',
            label: 'Communication reaches the destination',
            description: 'The network uses the destination addressing information.',
            correctPosition: 2,
          },
          {
            id: 'server',
            label: 'Server receives the request',
            description: 'The web server handles the request.',
            correctPosition: 3,
          },
          {
            id: 'response',
            label: 'Server sends a response',
            description: 'The result travels back toward the browser.',
            correctPosition: 4,
          },
        ],
        successMessage:
          'Correct. You followed the basic website request from browser to server and back.',
        failureMessage:
          'Start with the browser, then DNS and addressing, then the server, and finally the response.',
      },
    },
    {
      id: 'mc01-s07-web-question',
      type: 'question',
      title: 'Website check',
      description:
        'Use the complete model you have just learned.',
      question: {
        id: 'mc01-s07-web',
        type: 'single-choice',
        question:
          'What is the main role of DNS in a basic website request?',
        options: [
          {
            id: 'cpu',
            text: 'Perform the web page calculation',
            correct: false,
          },
          {
            id: 'storage',
            text: 'Store the user’s browser permanently',
            correct: false,
          },
          {
            id: 'dns',
            text: 'Help map a domain name to an IP address',
            correct: true,
          },
          {
            id: 'display',
            text: 'Display the page on the monitor',
            correct: false,
          },
        ],
        explanation:
          'DNS helps translate a human-friendly domain name into an IP address used for network communication.',
        hints: [
          'Think about how a browser turns a website name into network addressing information.',
        ],
      },
    },
  ],
}