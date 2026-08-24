import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session02: SessionDefinition = {
  id: 'mc04-session-02',
  number: 2,
  stage: 'discover',
  title: 'How Computers Represent Data',
  objective:
    'Understand how computers represent numbers, text and other information using bits and bytes.',
  experiences: [
    {
      id: 'mc04-s02-representation-lesson',
      type: 'lesson',
      title: 'How Information Becomes Bits and Bytes',
      description:
        'Understand how computers convert information into a form that digital hardware can store and process.',
      lesson: {
        opening:
          'Humans work with names, numbers, pictures and sounds. Computers ultimately work with digital states represented using bits. Understanding this conversion is the foundation for understanding how data is stored.',
        sections: [
          {
            heading: 'Computers use digital states',
            explanation:
              'At the lowest practical level, digital systems represent information using states that can be represented as 0 and 1.',
            example:
              'A bit can represent one of two possible states: 0 or 1.',
          },
          {
            heading: 'A bit is a basic unit',
            explanation:
              'A bit is the smallest common unit of digital information and can hold one binary value.',
            example:
              'One bit can be either 0 or 1.',
          },
          {
            heading: 'Bits combine into bytes',
            explanation:
              'Eight bits form one byte. Groups of bits allow computers to represent a much larger number of possible values.',
            example:
              '10101100 is one possible eight-bit pattern, representing one byte.',
          },
          {
            heading: 'Numbers can be represented digitally',
            explanation:
              'Computers encode numeric values into binary patterns so digital hardware can store and process them.',
            example:
              'The decimal number 5 can be represented using the binary pattern 101.',
          },
          {
            heading: 'Text is also represented digitally',
            explanation:
              'Characters are mapped to numeric codes, which can then be represented using bits and bytes.',
            example:
              'A character such as A is stored using a digital character encoding.',
          },
          {
            heading: 'Larger information uses many bits',
            explanation:
              'Images, audio, video and files are represented using large collections of digital values.',
            example:
              'A digital image contains many encoded values representing pixels and their properties.',
          },
        ],
        realWorldConnection:
          'Every digital application ultimately depends on this representation layer. Databases, files, web pages, photographs and application data all have to be represented in a form that computers can store and process.',
        keyIdea:
          'Computers represent information digitally using bits and groups of bits. Bytes and larger collections of digital values allow systems to represent numbers, text, images, audio and other data.',
        recap: [
          'Computers use digital states represented as 0 and 1.',
          'A bit stores one binary value.',
          'Eight bits make one byte.',
          'Numbers can be represented using binary patterns.',
          'Text is represented using character encodings.',
          'Larger digital objects are represented using many bits and bytes.',
        ],
      },
    },

    {
      id: 'mc04-s02-representation-animation',
      type: 'animation',
      title: 'Watch Information Become Digital Data',
      description:
        'Follow a piece of human-readable information as it moves into the digital representation used by computers.',
      animation: {
        opening:
          'The computer does not store the word, number or picture exactly as a human sees it. Information is converted into digital representation that hardware can store and process.',
        parts: [
          {
            id: 'human-information',
            label: 'HUMAN INFORMATION',
            explanation:
              'Start with information in a form people understand naturally.',
            example:
              'The number 5 or the letter A.',
          },
          {
            id: 'binary',
            label: 'BINARY STATES',
            explanation:
              'The information is represented using digital states that can be expressed as 0 and 1.',
            example:
              '5 can be represented as 101 in binary.',
          },
          {
            id: 'bits',
            label: 'BITS',
            explanation:
              'Individual binary values are bits, the basic units used to represent digital information.',
            example:
              '1, 0, 1 are three bits.',
          },
          {
            id: 'byte',
            label: 'BYTE',
            explanation:
              'Eight bits form a byte, allowing larger patterns of digital information to be represented.',
            example:
              '10101100 is an eight-bit pattern.',
          },
          {
            id: 'encoding',
            label: 'ENCODING',
            explanation:
              'Rules map human concepts such as characters and numbers to digital representations.',
            example:
              'Character encodings map text characters to numeric codes.',
          },
          {
            id: 'stored-data',
            label: 'STORED DIGITAL DATA',
            explanation:
              'The resulting digital representation can be stored, copied, processed and transmitted by computer systems.',
            example:
              'Files, database values, images and application data all use digital representations.',
          },
        ],
        closing:
          'The important mental model is not that computers understand human information directly. They store and process digital representations built from bits and larger groups of bits.',
      },
    },

    {
      id: 'mc04-s02-representation-simulation',
      type: 'simulation',
      title: 'Build the Digital Representation',
      description:
        'Arrange the layers that connect human-readable information to digital storage.',
      simulation: {
        instruction:
          'Connect each concept to its correct place in the digital representation chain.',
        items: [
          {
            id: 'information',
            label: 'The number 5',
            description:
              'Human-readable information that needs to be represented digitally.',
            correctTargetId: 'human-target',
          },
          {
            id: 'binary-value',
            label: '101',
            description:
              'A binary representation of the value 5.',
            correctTargetId: 'binary-target',
          },
          {
            id: 'bit',
            label: 'One 0 or 1',
            description:
              'A single binary state.',
            correctTargetId: 'bit-target',
          },
          {
            id: 'byte',
            label: 'Eight bits',
            description:
              'A group of eight binary values.',
            correctTargetId: 'byte-target',
          },
        ],
        targets: [
          {
            id: 'human-target',
            label: 'Human-readable information',
            description:
              'Information expressed in a form people understand.',
          },
          {
            id: 'binary-target',
            label: 'Binary representation',
            description:
              'A representation using 0 and 1.',
          },
          {
            id: 'bit-target',
            label: 'Bit',
            description:
              'One binary value.',
          },
          {
            id: 'byte-target',
            label: 'Byte',
            description:
              'Eight bits grouped together.',
          },
        ],
        successMessage:
          'Excellent. You connected human-readable information to its digital representation using binary, bits and bytes.',
        failureMessage:
          'Think from large concept to smaller representation: information, binary pattern, individual bits and groups of eight bits.',
      },
    },

    {
      id: 'mc04-s02-representation-question',
      type: 'question',
      title: 'Digital representation check',
      description:
        'Check your understanding of bits, bytes and digital representation.',
      question: {
        id: 'mc04-s02-representation',
        type: 'single-choice',
        question:
          'Which statement best describes the relationship between bits and bytes?',
        options: [
          {
            id: 'eight',
            text: 'A byte is a group of eight bits',
            correct: true,
          },
          {
            id: 'one',
            text: 'A bit always contains eight bytes',
            correct: false,
          },
          {
            id: 'network',
            text: 'A byte is a type of internet connection',
            correct: false,
          },
          {
            id: 'database',
            text: 'A byte is the same thing as a database table',
            correct: false,
          },
        ],
        explanation:
          'A byte is defined as a group of eight bits. Groups of bits allow computers to represent larger sets of digital information.',
        hints: [
          'Think about how small binary units are grouped together.',
          'Remember the standard relationship between bits and bytes.',
        ],
      },
    },
  ],
}