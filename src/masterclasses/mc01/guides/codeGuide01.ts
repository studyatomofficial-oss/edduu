import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide01: GuideDefinition = {
  type: 'code',
  label: 'CODE GUIDE 01',
  title: 'First Website → Code Reference',
  objective:
    'Use these real code snippets while following MAP GUIDE 01.',
  steps: [
    {
      id: 'mc01-code-01',
      step: 1,
      title: 'HTML document structure',
      action: 'Put this in index.html.',
      mapStepId: 'mc01-map-05',
      code: `<!doctype html>
<html>
<head>
  <title>My First Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello from MC01</h1>
  <p id="message">My first working web page.</p>
  <button id="changeButton">Click me</button>

  <script src="script.js"></script>
</body>
</html>`,
      explanation:
        'doctype tells the browser to use modern HTML rules. The head contains page metadata and the CSS connection. The body contains visible content. The script element connects JavaScript.',
    },
    {
      id: 'mc01-code-02',
      step: 2,
      title: 'CSS presentation',
      action: 'Put this in style.css.',
      mapStepId: 'mc01-map-06',
      code: `body {
  font-family: Arial, sans-serif;
  max-width: 700px;
  margin: 60px auto;
  padding: 20px;
}

button {
  padding: 10px 16px;
  cursor: pointer;
}`,
      explanation:
        'The body rule changes the page presentation. max-width limits the content width. margin centers the page area. padding adds internal space. The button rule changes its presentation and interaction hint.',
    },
    {
      id: 'mc01-code-03',
      step: 3,
      title: 'JavaScript interaction',
      action: 'Put this in script.js.',
      mapStepId: 'mc01-map-07',
      code: `const button =
  document.getElementById('changeButton')

const message =
  document.getElementById('message')

button.addEventListener('click', () => {
  message.textContent =
    'JavaScript changed the page.'
})`,
      explanation:
        'document represents the page available to JavaScript. getElementById finds existing HTML elements. addEventListener waits for a click. textContent changes the paragraph displayed in the browser.',
    },
    {
      id: 'mc01-code-04',
      step: 4,
      title: 'Run and verify',
      action: 'Open index.html in Chrome.',
      mapStepId: 'mc01-map-08',
      details: [
        'The HTML file is loaded by the browser.',
        'The browser loads style.css.',
        'The browser loads script.js.',
        'Click the button.',
        'The paragraph should change to: JavaScript changed the page.',
      ],
      explanation:
        'This is the practical connection between the files you created and the final interactive screen.',
    },
  ],
  finalResult:
    'The three files now form one working browser application: HTML for structure, CSS for presentation and JavaScript for behaviour.',
}
