import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide01: GuideDefinition = {
  type: 'map',
  label: 'MAP GUIDE 01',
  title: 'Build Your First Website → Implementation Map',
  objective:
    'Follow this path from an empty folder to a working browser-based website.',
  steps: [
    {
      id: 'mc01-map-01',
      step: 1,
      title: 'Install the tools',
      action: 'Install VS Code and Google Chrome.',
      details: [
        'Download and install VS Code.',
        'Install or open Google Chrome.',
        'No framework is required for this first build.',
      ],
    },
    {
      id: 'mc01-map-02',
      step: 2,
      title: 'Create the project folder',
      action: 'Create a folder named mc01-first-website.',
      details: [
        'Create the folder anywhere convenient.',
        'Open the folder in VS Code.',
      ],
      mapStepId: 'mc01-map-01',
    },
    {
      id: 'mc01-map-03',
      step: 3,
      title: 'Create the three files',
      action: 'Create index.html, style.css and script.js.',
      details: [
        'index.html = page structure.',
        'style.css = presentation.',
        'script.js = browser behaviour.',
      ],
    },
    {
      id: 'mc01-map-04',
      step: 4,
      title: 'Connect the files',
      action: 'Connect CSS and JavaScript from index.html.',
      details: [
        'Use a link element for style.css.',
        'Use a script element for script.js.',
      ],
      mapStepId: 'mc01-map-03',
    },
    {
      id: 'mc01-map-05',
      step: 5,
      title: 'Build the page',
      action: 'Add a heading, paragraph and button to index.html.',
      details: [
        'The browser will interpret HTML as page structure.',
        'Save the file before testing.',
      ],
    },
    {
      id: 'mc01-map-06',
      step: 6,
      title: 'Style the page',
      action: 'Add simple CSS rules in style.css.',
      details: [
        'Change spacing, font size and button appearance.',
        'Save and refresh the browser.',
      ],
      mapStepId: 'mc01-map-05',
    },
    {
      id: 'mc01-map-07',
      step: 7,
      title: 'Add interaction',
      action: 'Use JavaScript to respond to the button click.',
      details: [
        'Select the button.',
        'Attach a click handler.',
        'Change visible page content.',
      ],
      mapStepId: 'mc01-map-06',
    },
    {
      id: 'mc01-map-08',
      step: 8,
      title: 'Run the website',
      action: 'Open index.html in Chrome and test the button.',
      details: [
        'Confirm the page appears.',
        'Confirm CSS is applied.',
        'Click the button and confirm the page changes.',
      ],
      mapStepId: 'mc01-map-07',
    },
    {
      id: 'mc01-map-09',
      step: 9,
      title: 'Trace what happened',
      action: 'Use the finished page to connect the MC01 mental model.',
      details: [
        'Files and folders hold the project.',
        'The browser loads and processes the files.',
        'HTML provides structure.',
        'CSS provides presentation.',
        'JavaScript provides behaviour.',
      ],
      mapStepId: 'mc01-map-08',
    },
  ],
  finalResult:
    'You now have a working website and can explain how its files become an interactive browser screen.',
}
