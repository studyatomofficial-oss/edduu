import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide05: GuideDefinition = {
  type: 'code',
  label: 'Code Guide',
  title: 'Build and Test a Course REST API',
  objective:
    'Implement a practical backend API that demonstrates HTTP methods, validation, database operations, errors, pagination, filtering, idempotency, authentication, versioning, documentation and testing.',

  steps: [
    {
      id: 'install',
      step: 1,
      title: 'Create the backend environment',
      action:
        'Create a Python backend project and install the required API dependencies.',
      command:
        'python -m venv .venv',
      details: [
        'Activate the virtual environment.',
        'Install FastAPI and Uvicorn.',
        'Keep dependencies isolated from the rest of the system.',
      ],
      explanation:
        'The virtual environment keeps the backend project dependencies isolated and reproducible.',
    },

    {
      id: 'app',
      step: 2,
      title: 'Create the API application',
      action:
        'Create the application entry point and start the development server.',
      code:
        `from fastapi import FastAPI

app = FastAPI(title="Course API")

@app.get("/health")
def health():
    return {"status": "ok"}`,
      command:
        'uvicorn main:app --reload',
      explanation:
        'The application server receives HTTP requests and routes them to endpoint functions.',
    },

    {
      id: 'get',
      step: 3,
      title: 'Implement GET',
      action:
        'Create an endpoint that retrieves courses.',
      code:
        `@app.get("/api/v1/courses")
def list_courses():
    return {
        "items": [
            {"id": 1, "title": "Python"},
            {"id": 2, "title": "APIs"}
        ]
    }`,
      explanation:
        'GET is used to retrieve resources without changing the resource state.',
    },

    {
      id: 'post',
      step: 4,
      title: 'Implement POST',
      action:
        'Create an endpoint that creates a new course.',
      code:
        `from pydantic import BaseModel

class CourseCreate(BaseModel):
    title: str

@app.post("/api/v1/courses")
def create_course(course: CourseCreate):
    return {
        "id": 101,
        "title": course.title
    }`,
      explanation:
        'POST commonly creates a new resource. The request model also provides structured input validation.',
    },

    {
      id: 'put',
      step: 5,
      title: 'Implement PUT',
      action:
        'Replace the complete representation of a course.',
      code:
        `@app.put("/api/v1/courses/{course_id}")
def replace_course(course_id: int, course: CourseCreate):
    return {
        "id": course_id,
        "title": course.title
    }`,
      explanation:
        'PUT represents replacement of the resource representation at the specified identifier.',
    },

    {
      id: 'patch',
      step: 6,
      title: 'Implement PATCH',
      action:
        'Change only selected fields of an existing course.',
      code:
        `class CoursePatch(BaseModel):
    title: str | None = None

@app.patch("/api/v1/courses/{course_id}")
def update_course(course_id: int, course: CoursePatch):
    return {
        "id": course_id,
        "title": course.title
    }`,
      explanation:
        'PATCH is useful when only part of a resource needs to change.',
    },

    {
      id: 'delete',
      step: 7,
      title: 'Implement DELETE',
      action:
        'Delete or deactivate a course.',
      code:
        `@app.delete("/api/v1/courses/{course_id}")
def delete_course(course_id: int):
    return {
        "deleted": True,
        "id": course_id
    }`,
      explanation:
        'DELETE communicates that the identified resource should be removed or otherwise deactivated.',
    },

    {
      id: 'validation',
      step: 8,
      title: 'Validate incoming requests',
      action:
        'Reject invalid client input before business logic executes.',
      code:
        `from pydantic import BaseModel, Field

class CourseCreate(BaseModel):
    title: str = Field(min_length=2, max_length=200)`,
      explanation:
        'Request validation creates a controlled boundary between untrusted client input and application logic.',
    },

    {
      id: 'errors',
      step: 9,
      title: 'Handle API errors',
      action:
        'Return controlled HTTP errors for invalid or missing resources.',
      code:
        `from fastapi import HTTPException

@app.get("/api/v1/courses/{course_id}")
def get_course(course_id: int):
    course = find_course(course_id)

    if course is None:
        raise HTTPException(
            status_code=404,
            detail="Course not found",
        )

    return course`,
      explanation:
        'Controlled errors give clients predictable behavior without exposing internal implementation details.',
    },

    {
      id: 'database-create',
      step: 10,
      title: 'Create the database table',
      action:
        'Create a relational table for courses.',
      code:
        `CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  title VARCHAR(200) NOT NULL
);`,
      explanation:
        'The database provides persistent storage for course records.',
    },

    {
      id: 'database-insert',
      step: 11,
      title: 'Insert records',
      action:
        'Store a new course in the database.',
      code:
        `INSERT INTO courses (id, title)
VALUES (101, 'Python');`,
      explanation:
        'INSERT adds a new record to the persistent data store.',
    },

    {
      id: 'database-select',
      step: 12,
      title: 'Retrieve records',
      action:
        'Read courses from the database.',
      code:
        `SELECT id, title
FROM courses
ORDER BY id
LIMIT 20;`,
      explanation:
        'SELECT retrieves data. ORDER BY provides deterministic ordering and LIMIT controls the returned collection size.',
    },

    {
      id: 'pagination',
      step: 13,
      title: 'Add pagination',
      action:
        'Expose controlled pagination parameters.',
      code:
        `@app.get("/api/v1/courses")
def list_courses(
    limit: int = 20,
    offset: int = 0,
):
    return query_courses(
        limit=limit,
        offset=offset,
    )`,
      explanation:
        'Pagination prevents large collections from being returned in a single response.',
    },

    {
      id: 'filtering',
      step: 14,
      title: 'Add filtering',
      action:
        'Allow clients to request only matching resources.',
      code:
        `@app.get("/api/v1/courses")
def list_courses(active: bool | None = None):
    return query_courses(active=active)`,
      explanation:
        'Filtering lets clients narrow a collection using controlled query parameters.',
    },

    {
      id: 'idempotency',
      step: 15,
      title: 'Handle retries safely',
      action:
        'Use an idempotency key when an operation must not create duplicate effects.',
      code:
        `POST /api/v1/courses
Idempotency-Key: 7d7b-course-create-001`,
      explanation:
        'Idempotency allows a client to safely retry certain operations without accidentally creating repeated effects.',
    },

    {
      id: 'authentication',
      step: 16,
      title: 'Authenticate requests',
      action:
        'Require a valid access token for protected resources.',
      code:
        `Authorization: Bearer <access-token>`,
      explanation:
        'Authentication establishes who is making the request.',
    },

    {
      id: 'authorization',
      step: 17,
      title: 'Authorize the operation',
      action:
        'Check whether the authenticated identity is allowed to perform the requested operation.',
      code:
        `if not user.can_manage_courses:
    raise HTTPException(
        status_code=403,
        detail="Forbidden",
    )`,
      explanation:
        'Authorization answers whether an authenticated identity has permission to perform an operation.',
    },

    {
      id: 'versioning',
      step: 18,
      title: 'Version the API',
      action:
        'Expose a predictable versioned API path.',
      code:
        `GET /api/v1/courses`,
      explanation:
        'Versioning provides a controlled way to evolve API contracts without unexpectedly breaking existing consumers.',
    },

    {
      id: 'documentation',
      step: 19,
      title: 'Document the API',
      action:
        'Describe endpoints, request models, responses and errors.',
      code:
        `GET    /api/v1/courses
POST   /api/v1/courses
PUT    /api/v1/courses/{course_id}
PATCH  /api/v1/courses/{course_id}
DELETE /api/v1/courses/{course_id}`,
      explanation:
        'Good API documentation makes the contract understandable to frontend developers, integrators and other consumers.',
    },

    {
      id: 'testing',
      step: 20,
      title: 'Test the API',
      action:
        'Test both successful and failing API behavior.',
      code:
        `def test_get_courses(client):
    response = client.get(
        "/api/v1/courses"
    )

    assert response.status_code == 200
    assert "items" in response.json()`,
      explanation:
        'API tests verify that endpoints, validation, errors and business behavior continue to work as the system changes.',
    },
  ],

  finalResult:
    'A practical versioned Course REST API with CRUD operations, validation, controlled errors, database persistence, pagination, filtering, idempotency, authentication, authorization, documentation and automated testing.',
}