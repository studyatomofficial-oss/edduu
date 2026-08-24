import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc01Session06: SessionDefinition = {
  id: 'mc01-session-06',
  number: 6,
  stage: 'discover',
  title: 'What Is the Internet?',
  objective:
    'Build a beginner-friendly mental model of the internet, routers, ISPs, clients and servers.',
  experiences: [
    {
      id: 'mc01-s06-internet-lesson',
      type: 'lesson',
      title: 'From a local network to the internet',
      description:
        'We know that networks connect devices. Now let us see how networks connect into the much larger system we call the internet.',
      lesson: {
        opening:
          'Last session we connected computers with a network. But a home or school network is only a small part of something much larger.',
        sections: [
          {
            heading: 'A network can connect many devices',
            explanation:
              'A network can connect computers and other devices so they can communicate.',
            example:
              'Your home network can connect your laptop, phone, TV and printer.',
          },
          {
            heading: 'A router helps direct traffic',
            explanation:
              'A router helps devices communicate with other networks and determines where network traffic should go.',
            example:
              'Your home router connects devices in your home network to the wider internet connection.',
          },
          {
            heading: 'An ISP connects you to the wider internet',
            explanation:
              'An internet service provider gives your connection access to the wider internet.',
            example:
              'Your home internet connection reaches the wider internet through your ISP.',
          },
          {
            heading: 'The internet connects networks',
            explanation:
              'The internet is a huge interconnected system of networks that allows devices and systems around the world to communicate.',
            example:
              'Your laptop can communicate with a server located far away.',
          },
          {
            heading: 'Client and server',
            explanation:
              'A client requests or uses a service, while a server provides a service or resource.',
            example:
              'A browser on your laptop can act as a client when requesting a website from a server.',
          },
        ],
        realWorldConnection:
          'When you watch a video, open a website or send information to an online service, your device is communicating beyond your local network through the internet.',
        keyIdea:
          'The internet connects networks and allows clients and servers in different places to communicate.',
        recap: [
          'A local network connects nearby devices.',
          'A router helps connect networks and direct traffic.',
          'An ISP provides access to the wider internet.',
          'The internet is a network of interconnected networks.',
          'A client requests or uses a service and a server provides it.',
        ],
      },
    },
    {
      id: 'mc01-s06-internet-animation',
      type: 'animation',
      title: 'Follow the journey from your laptop to a server',
      description:
        'Watch the basic path from your device through the local network and toward a remote server.',
      animation: {
        opening:
          'Let us zoom out from your computer and see how a request can travel beyond your home or school.',
        parts: [
          {
            id: 'device',
            label: 'Your device',
            explanation:
              'Your laptop or phone starts the communication.',
            example:
              'You open a browser and request a website.',
          },
          {
            id: 'router',
            label: 'Router',
            explanation:
              'The router helps direct traffic from your local network.',
            example:
              'Your home router sends traffic toward the wider connection.',
          },
          {
            id: 'isp',
            label: 'ISP',
            explanation:
              'The ISP provides access to the wider internet.',
            example:
              'Your internet connection reaches the ISP network.',
          },
          {
            id: 'internet',
            label: 'Internet',
            explanation:
              'Interconnected networks carry communication across different locations.',
            example:
              'Traffic can travel toward a remote server.',
          },
          {
            id: 'server',
            label: 'Server',
            explanation:
              'A server can provide the requested service or resource.',
            example:
              'A web server can provide the files or data needed for a website.',
          },
        ],
        closing:
          'The internet is not one giant computer. It is an interconnected system that lets networks, clients and servers communicate.',
      },
    },
    {
      id: 'mc01-s06-internet-sequence',
      type: 'sequencing',
      title: 'Follow a request beyond your home',
      description:
        'Arrange the basic journey from your device toward a remote server.',
      sequencing: {
        instruction:
          'Use the arrows to arrange the journey in the order it happens.',
        items: [
          {
            id: 'device',
            label: 'Your device',
            description: 'The request starts here.',
            correctPosition: 0,
          },
          {
            id: 'router',
            label: 'Router',
            description: 'Traffic leaves the local network through the router.',
            correctPosition: 1,
          },
          {
            id: 'isp',
            label: 'ISP',
            description: 'The connection reaches the wider internet through the provider.',
            correctPosition: 2,
          },
          {
            id: 'internet',
            label: 'Internet',
            description: 'Interconnected networks carry the communication.',
            correctPosition: 3,
          },
          {
            id: 'server',
            label: 'Remote server',
            description: 'The remote system provides the requested service.',
            correctPosition: 4,
          },
        ],
        successMessage:
          'Correct. You followed the request from your device toward a remote server.',
        failureMessage:
          'Start with your device, then think about the local router, wider connection and remote server.',
      },
    },
    {
      id: 'mc01-s06-internet-question',
      type: 'question',
      title: 'Internet check',
      description:
        'Let us test the difference between a local network and the internet.',
      question: {
        id: 'mc01-s06-internet',
        type: 'single-choice',
        question:
          'Which statement best describes the internet?',
        options: [
          {
            id: 'one-device',
            text: 'One very large computer',
            correct: false,
          },
          {
            id: 'network-networks',
            text: 'An interconnected system of networks',
            correct: true,
          },
          {
            id: 'browser',
            text: 'A type of web browser',
            correct: false,
          },
          {
            id: 'storage',
            text: 'A computer storage device',
            correct: false,
          },
        ],
        explanation:
          'The internet is an interconnected system of networks that allows devices and systems to communicate.',
        hints: [
          'Think bigger than your home or school network.',
        ],
      },
    },
  ],
}