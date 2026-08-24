import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc01Session05: SessionDefinition = {
  id: 'mc01-session-05',
  number: 5,
  stage: 'discover',
  title: 'How Computers Communicate',
  objective:
    'Understand how computers exchange information and build the basic mental model of a network.',
  experiences: [
    {
      id: 'mc01-s05-network-lesson',
      type: 'lesson',
      title: 'How does one computer talk to another?',
      description:
        'We have seen what happens inside one computer. Now we move outward and look at how computers exchange information.',
      lesson: {
        opening:
          'A computer is useful by itself, but many of the things we do require communication with another device. This is where networks begin.',
        sections: [
          {
            heading: 'Computers exchange information',
            explanation:
              'Two devices can communicate by sending information from one device to another.',
            example:
              'A laptop can send a file to another computer on the same network.',
          },
          {
            heading: 'Data is information being communicated',
            explanation:
              'The information moving between devices can be thought of as data.',
            example:
              'A photo sent from one computer to another is data being transferred.',
          },
          {
            heading: 'A network connects devices',
            explanation:
              'A network is a system that allows connected devices to communicate and exchange information.',
            example:
              'Computers, phones and printers can communicate across a local network.',
          },
          {
            heading: 'Local communication',
            explanation:
              'Devices close to one another can communicate through a local network.',
            example:
              'A laptop and printer connected to the same home network can communicate.',
          },
          {
            heading: 'Communication needs a destination',
            explanation:
              'When information is sent, the system needs to know which device should receive it.',
            example:
              'Sending a file requires the sender and receiver to be distinguishable.',
          },
        ],
        realWorldConnection:
          'Home Wi-Fi, office networks, school networks and data centers all depend on computers and other devices communicating with one another.',
        keyIdea:
          'A network allows devices to communicate and exchange data.',
        recap: [
          'Computers can exchange information.',
          'The information being communicated is data.',
          'A network connects devices for communication.',
          'Local networks connect nearby devices.',
          'Communication requires a destination.',
        ],
      },
    },
    {
      id: 'mc01-s05-network-animation',
      type: 'animation',
      title: 'Watch data travel between computers',
      description:
        'See the basic idea of one device sending information to another.',
      animation: {
        opening:
          'Imagine two computers that need to exchange a photo. The important idea is not the photo itself, but the journey of information between devices.',
        parts: [
          {
            id: 'sender',
            label: 'Sender',
            explanation:
              'One device begins the communication by sending information.',
            example:
              'Your laptop sends a photo.',
          },
          {
            id: 'data',
            label: 'Data',
            explanation:
              'The information being communicated travels from one device toward another.',
            example:
              'The photo is the information being transferred.',
          },
          {
            id: 'network',
            label: 'Network',
            explanation:
              'The network provides the communication path between devices.',
            example:
              'A local network can connect devices in a home or office.',
          },
          {
            id: 'receiver',
            label: 'Receiver',
            explanation:
              'Another device receives the information.',
            example:
              'A second computer receives the photo.',
          },
        ],
        closing:
          'The basic pattern is simple: one device sends data, the network carries the communication, and another device receives it.',
      },
    },
    {
      id: 'mc01-s05-network-simulation',
      type: 'simulation',
      title: 'Build a simple network',
      description:
        'Connect each communication activity with the part of the network idea it represents.',
      simulation: {
        instruction:
          'Select an activity, then select the concept that best matches it.',
        items: [
          {
            id: 'send',
            label: 'Laptop sends a photo',
            description: 'One device starts sending information.',
            correctTargetId: 'sender',
          },
          {
            id: 'information',
            label: 'The photo being transferred',
            description: 'This is the information moving between devices.',
            correctTargetId: 'data',
          },
          {
            id: 'connection',
            label: 'Communication path',
            description: 'The connected system carries the communication.',
            correctTargetId: 'network',
          },
          {
            id: 'receive',
            label: 'Second laptop receives the photo',
            description: 'Another device receives the information.',
            correctTargetId: 'receiver',
          },
        ],
        targets: [
          {
            id: 'sender',
            label: 'Sender',
            description: 'The device that starts sending.',
          },
          {
            id: 'data',
            label: 'Data',
            description: 'The information being transferred.',
          },
          {
            id: 'network',
            label: 'Network',
            description: 'The connected communication system.',
          },
          {
            id: 'receiver',
            label: 'Receiver',
            description: 'The device that receives.',
          },
        ],
        successMessage:
          'Excellent. You connected the sender, data, network and receiver.',
        failureMessage:
          'Think about who sends, what is sent, how it travels, and who receives it.',
      },
    },
    {
      id: 'mc01-s05-network-question',
      type: 'question',
      title: 'Network check',
      description:
        'Use the basic model of communication between devices.',
      question: {
        id: 'mc01-s05-network',
        type: 'single-choice',
        question:
          'What is the main purpose of a network?',
        options: [
          {
            id: 'store',
            text: 'To connect devices so they can communicate',
            correct: true,
          },
          {
            id: 'calculate',
            text: 'To replace the CPU',
            correct: false,
          },
          {
            id: 'memory',
            text: 'To replace RAM',
            correct: false,
          },
          {
            id: 'display',
            text: 'To replace the monitor',
            correct: false,
          },
        ],
        explanation:
          'A network provides a way for connected devices to communicate and exchange information.',
        hints: [
          'Think about what happens when two computers need to exchange information.',
        ],
      },
    },
  ],
}