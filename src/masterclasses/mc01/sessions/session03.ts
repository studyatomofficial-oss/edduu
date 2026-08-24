import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc01Session03: SessionDefinition = {
  id: 'mc01-session-03',
  number: 3,
  stage: 'discover',
  title: 'Files, Folders & Storage',
  objective:
    'Understand how computers organize information using files, folders, names, extensions and paths.',
  experiences: [
    {
      id: 'mc01-s03-files-lesson',
      type: 'lesson',
      title: 'How does a computer organize information?',
      description:
        'In the previous session, we saw that a program can move from storage into RAM when we open it. Now let us look more closely at how information is organized while it lives in storage.',
      lesson: {
        opening:
          'Last time we followed a program from storage into RAM and then to the CPU. But before a computer can load a program or open a photo, it needs to know where that information is stored.',
        sections: [
          {
            heading: 'A file is a piece of stored information',
            explanation:
              'A file is a named piece of information kept in storage. Documents, photos, videos, programs and many other kinds of information can be stored as files.',
            example:
              'A photo such as family.jpg is a file stored so the computer can find and open it later.',
          },
          {
            heading: 'Folders organize files',
            explanation:
              'A folder gives us a way to organize related files together. Folders can also contain other folders.',
            example:
              'You might have a Photos folder containing holiday photos and a Projects folder containing project files.',
          },
          {
            heading: 'A filename helps identify the file',
            explanation:
              'The filename gives the file a recognizable name. Many files also have an extension that indicates the type of file.',
            example:
              'resume.pdf tells us the file is named resume and has a PDF extension.',
          },
          {
            heading: 'A path tells the computer where the file is',
            explanation:
              'A path describes where a file is located inside the folder structure.',
            example:
              'Documents/Projects/EDDUU/plan.txt describes a route through folders to reach plan.txt.',
          },
          {
            heading: 'Storage keeps information for later',
            explanation:
              'Storage is persistent. Unlike RAM, information in storage is intended to remain available after the computer is turned off.',
            example:
              'When you save a photo and shut down the computer, the photo remains in storage and can be opened later.',
          },
        ],
        realWorldConnection:
          'Your phone gallery, Downloads folder, Documents folder and cloud-synced folders all depend on the same basic idea: information is stored and organized so it can be found again.',
        keyIdea:
          'Files hold information, folders organize files, and paths help the computer locate them in storage.',
        recap: [
          'A file is a named piece of stored information.',
          'Folders organize files and other folders.',
          'File extensions help identify file types.',
          'A path describes where a file is located.',
          'Storage keeps information for later use.',
        ],
      },
    },
    {
      id: 'mc01-s03-files-animation',
      type: 'animation',
      title: 'Follow a file through storage',
      description:
        'See how a file sits inside a folder structure and how its path identifies its location.',
      animation: {
        opening:
          'Imagine opening your computer and looking inside its storage. You do not see one giant pile of information. You see an organized structure.',
        parts: [
          {
            id: 'folder',
            label: 'Folder',
            explanation:
              'A folder groups related information together.',
            example:
              'Photos can contain many image files.',
          },
          {
            id: 'file',
            label: 'File',
            explanation:
              'A file contains stored information that can be opened or used later.',
            example:
              'holiday.jpg is an image file.',
          },
          {
            id: 'extension',
            label: 'Extension',
            explanation:
              'The extension commonly indicates the type of information stored in the file.',
            example:
              'pdf, jpg and txt are examples of file extensions.',
          },
          {
            id: 'path',
            label: 'Path',
            explanation:
              'A path describes where the file can be found in the folder structure.',
            example:
              'Documents/Projects/plan.txt identifies the route to the file.',
          },
        ],
        closing:
          'Now the connection is clear: storage keeps the information, folders organize it, filenames identify it, and paths help us locate it.',
      },
    },
    {
      id: 'mc01-s03-files-simulation',
      type: 'simulation',
      title: 'Where does each file belong?',
      description:
        'Use the folder structure to connect each piece of information with the place where it belongs.',
      simulation: {
        instruction:
          'Select an item, then select the folder or storage concept that best matches it.',
        items: [
          {
            id: 'photo',
            label: 'holiday.jpg',
            description: 'A saved photograph.',
            correctTargetId: 'photos',
          },
          {
            id: 'resume',
            label: 'resume.pdf',
            description: 'A document containing a resume.',
            correctTargetId: 'documents',
          },
          {
            id: 'path',
            label: 'Documents/Projects/plan.txt',
            description: 'A route showing where a file is located.',
            correctTargetId: 'path',
          },
          {
            id: 'saved',
            label: 'Information available after shutdown',
            description: 'Information that needs to remain available later.',
            correctTargetId: 'storage',
          },
        ],
        targets: [
          {
            id: 'photos',
            label: 'Photos folder',
            description: 'A place for image files.',
          },
          {
            id: 'documents',
            label: 'Documents folder',
            description: 'A place for document files.',
          },
          {
            id: 'path',
            label: 'File path',
            description: 'Describes where a file is located.',
          },
          {
            id: 'storage',
            label: 'Storage',
            description: 'Keeps information for long-term use.',
          },
        ],
        successMessage:
          'Excellent. You connected files, folders, paths and storage with their roles.',
        failureMessage:
          'Not quite. Think about whether the item is a file, a location, a path, or persistent storage.',
      },
    },
    {
      id: 'mc01-s03-files-question',
      type: 'question',
      title: 'Your next challenge',
      description:
        'Use your understanding of files and storage.',
      question: {
        id: 'mc01-s03-files',
        type: 'single-choice',
        question:
          'You save a photo and turn the computer off. Where should the photo remain so you can open it later?',
        options: [
          {
            id: 'ram',
            text: 'RAM',
            correct: false,
          },
          {
            id: 'storage',
            text: 'Storage',
            correct: true,
          },
          {
            id: 'cpu',
            text: 'CPU',
            correct: false,
          },
          {
            id: 'keyboard',
            text: 'Keyboard',
            correct: false,
          },
        ],
        explanation:
          'Storage is designed to keep information for the long term. RAM is the computer\'s active short-term workspace.',
        hints: [
          'Think about what should survive when the computer is turned off.',
          'The answer is not the CPU or an input device.',
        ],
      },
    },
  ],
}