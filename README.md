# Airtribe-Project1 Task Manager RESTful API 

This project is a simple Task Manager application implemented as a RESTful API using Node.js and Express.js. It allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks.

## Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 

Make sure you have Node.js and npm installed on your machine.

### Installing 

1. Clone the repository:
git clone https://github.com/HozefaMJ/Airtribe-Project1.git



2. Navigate to the project directory:
cd task-manager


3. Install dependencies:
npm install



### Running the Server 

Start the server:

node app.js



The server will be running on port 3000 by default. You can access the API endpoints via `http://localhost:3000`.

## API Endpoints 

- `GET /tasks`: Retrieve all tasks. 
- `GET /tasks/:id`: Retrieve a single task by its ID. 
- `POST /tasks`: Create a new task. 
- `PUT /tasks/:id`: Update an existing task by its ID. 
- `DELETE /tasks/:id`: Delete a task by its ID. 

## Testing 

You can test the API using tools like Postman or by running automated tests included in the test directory.

To run tests:

npm test



## Built With 

- Node.js 
- Express.js 

## Authors 

Hozefa Jaorawala 

## License 

This project is licensed under the MIT License - see the LICENSE file for details.
