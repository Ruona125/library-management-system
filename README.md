# Library Management System

This project is a basic Library Management System built using Node.js, Express, MongoDB, and Mongoose. The system includes API endpoints for managing authors and books, as well as an admin portal for managing the library system.

## Features

- Manage Authors: Add, retrieve all, and retrieve by ID
- Manage Books: Add, retrieve all, retrieve by ID, update by ID, and delete by ID
- Admin Portal: Secure login for admin to manage authors and books

## API Endpoints

### Authors

- **Add Author**: `POST /authors`
- **Retrieve All Authors**: `GET /authors`
- **Retrieve Author by ID**: `GET /authors/:id`

### Books

- **Add Book**: `POST /books`
- **Retrieve All Books**: `GET /books`
- **Retrieve Book by ID**: `GET /books/:id`
- **Update Book by ID**: `PUT /books/:id`
- **Delete Book by ID**: `DELETE /books/:id`

## Database Schema

### Author

- **ID**: Unique identifier for the author
- **Name**: Name of the author (required)
- **Bio**: Short biography of the author (required)

### Book

- **ID**: Unique identifier for the book
- **Title**: Title of the book (required)
- **AuthorID**: ID of the author (required)
- **Summary**: Short summary of the book (required)
- **ISBN**: Unique ISBN number for the book (required, unique)

## Setup and Run Instructions

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Navigate to the project directory:
   ```bash
   cd library-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=<your-preferred-port>
JWT_SECRET=<your-jwt-secret>
```

### Running the Application

1. Start the MongoDB server (if not already running).
2. Start the application:
   ```bash
   npm start
   ```
3. The application should now be running on the port specified in the `.env` file.

### Testing the API

You can use tools like Postman or cURL to test the API endpoints.


## Error Handling

- All required fields must be provided; otherwise, the API will return a `400 Bad Request` status code.
- If a book with the same ISBN already exists, the API will return a `409 Conflict` status code.
- Other errors will return appropriate HTTP status codes with error messages.
