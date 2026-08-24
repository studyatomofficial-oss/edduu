import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide02: GuideDefinition = {
  type: 'code',
  label: 'CODE GUIDE 02',
  title: 'Modern Web Application - Code Reference',
  objective:
    'Use these reference snippets to connect the MC02 concepts from HTML and CSS through JavaScript, React, APIs and application flow.',
  steps: [
    {
      id: 'mc02-code-01',
      step: 1,
      title: 'HTML page structure',
      action: 'Use this structure as the starting point for a browser page.',
      mapStepId: 'mc02-map-01',
      code: `<!doctype html>
<html>
<head>
  <title>MC02 Application</title>
</head>
<body>
  <h1>Student Dashboard</h1>
  <p id="status">Loading...</p>
  <button id="loadButton">Load Data</button>

  <script src="script.js"></script>
</body>
</html>`,
      explanation:
        'HTML describes the structure and content of the page. The browser interprets the document and creates the page structure that can be displayed to the user.',
    },
    {
      id: 'mc02-code-02',
      step: 2,
      title: 'CSS presentation',
      action: 'Use CSS to separate visual presentation from HTML structure.',
      mapStepId: 'mc02-map-02',
      code: `body {
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
}

button {
  padding: 10px 16px;
  cursor: pointer;
}`,
      explanation:
        'CSS controls presentation and layout while HTML continues to describe structure and content.',
    },
    {
      id: 'mc02-code-03',
      step: 3,
      title: 'JavaScript and the DOM',
      action: 'Use JavaScript to respond to a browser event and update the document.',
      mapStepId: 'mc02-map-03',
      code: `const button =
  document.getElementById('loadButton')

const status =
  document.getElementById('status')

button.addEventListener('click', () => {
  status.textContent = 'Loading application data...'
})`,
      explanation:
        'JavaScript can listen for browser events and modify the DOM. This creates behaviour on top of the HTML structure and CSS presentation.',
    },
    {
      id: 'mc02-code-04',
      step: 4,
      title: 'React component',
      action: 'Represent a reusable part of the frontend as a React component.',
      mapStepId: 'mc02-map-04',
      code: `type StudentCardProps = {
  name: string
  score: number
}

function StudentCard({
  name,
  score,
}: StudentCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Score: {score}</p>
    </article>
  )
}

export default StudentCard`,
      explanation:
        'Components divide a large interface into reusable pieces. TypeScript defines the expected shape of the component data.',
    },
    {
      id: 'mc02-code-05',
      step: 5,
      title: 'Frontend state',
      action: 'Represent changing information inside a React application.',
      mapStepId: 'mc02-map-04',
      code: `import { useState } from 'react'

function Dashboard() {
  const [status, setStatus] =
    useState('idle')

  return (
    <button
      onClick={() => setStatus('loading')}
    >
      {status}
    </button>
  )
}

export default Dashboard`,
      explanation:
        'State represents information that can change while the application is running and can influence what the interface displays.',
    },
    {
      id: 'mc02-code-06',
      step: 6,
      title: 'API request',
      action: 'Request application data from a backend API.',
      mapStepId: 'mc02-map-05',
      code: `const response = await fetch(
  '/api/students/123'
)

const student = await response.json()

console.log(student)`,
      explanation:
        'The frontend can act as a client and communicate with a backend through an API. HTTP carries the request and response, while JSON is a common data exchange format.',
    },
    {
      id: 'mc02-code-07',
      step: 7,
      title: 'Backend responsibility',
      action: 'Understand the conceptual responsibility of a backend endpoint.',
      mapStepId: 'mc02-map-05',
      code: `GET /api/students/123

Request
    |
    v
Backend
    |
    +-- validate request
    |
    +-- apply business logic
    |
    +-- access database
    |
    v
JSON response`,
      explanation:
        'The backend normally provides the controlled path between the browser and persistent application data. It can validate requests, apply business logic and coordinate database access.',
    },
    {
      id: 'mc02-code-08',
      step: 8,
      title: 'Request-response flow',
      action: 'Trace the main application journey from browser interaction to returned data.',
      mapStepId: 'mc02-map-08',
      code: `Browser
  |
  v
Frontend
  |
  v
API
  |
  v
Backend
  |
  v
Database
  |
  v
Response
  |
  v
Frontend
  |
  v
Browser`,
      explanation:
        'This is the core MC02 mental model. The browser hosts the frontend, the frontend communicates through an API, the backend applies logic and accesses persistent data, and the result returns to the browser.',
    },
    {
      id: 'mc02-code-09',
      step: 9,
      title: 'WebSocket concept',
      action: 'Use a persistent connection when an application needs ongoing two-way communication.',
      mapStepId: 'mc02-map-06',
      code: `const socket =
  new WebSocket('wss://example.com/live')

socket.onmessage = (event) => {
  console.log(event.data)
}`,
      explanation:
        'WebSockets can provide a persistent communication channel where the client and server exchange messages after the connection is established.',
    },
    {
      id: 'mc02-code-10',
      step: 10,
      title: 'Webhook concept',
      action: 'Represent the idea of one system notifying another system when an event occurs.',
      mapStepId: 'mc02-map-06',
      code: `POST /webhooks/payment

{
  "event": "payment.completed",
  "paymentId": "123"
}`,
      explanation:
        'A webhook is an event-driven notification where one system sends an HTTP request to another system when a particular event occurs.',
    },
    {
      id: 'mc02-code-11',
      step: 11,
      title: 'Production delivery model',
      action: 'Understand how delivery and routing layers can sit around application services.',
      mapStepId: 'mc02-map-07',
      code: `User
  |
  v
CDN / Edge
  |
  v
Reverse Proxy
  |
  +------> Frontend assets
  |
  +------> Backend API
              |
              v
          Application
              |
              v
           Database`,
      explanation:
        'Production web architecture distributes responsibility. A CDN can deliver suitable static assets, a reverse proxy can route traffic, and application services can handle dynamic operations.',
    },
  ],
  finalResult:
    'You now have a practical reference connecting HTML, CSS, JavaScript, React, TypeScript, state, APIs, backend services, databases and production web architecture.',
}