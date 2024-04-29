const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let taskSchema = [
    {
        id: 1,
        title: "Set up environment",
        description: "Install Node.js, npm, and git",
        completed: true
    }
];


// GET /tasks: Retrieve all tasks.
app.get('/tasks', (req, res) => {
    res.json(taskSchema);
});

// GET /tasks/:id: Retrieve a single task by its ID.
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = taskSchema.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
});

// POST /tasks: Create a new task.
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    if (!newTask.title || !newTask.description || typeof newTask.completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid request. Title, description, and completed fields are required.' });
    }
    newTask.id = taskSchema.length + 1;
    taskSchema.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id: Update an existing task by its ID.
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    const index = taskSchema.findIndex(task => task.id === taskId);
    if (index === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    if (!updatedTask.title || !updatedTask.description || typeof updatedTask.completed !== 'boolean') {
        return res.status(400).json({ message: 'Invalid request. Title, description, and completed fields are required.' });
    }
    taskSchema[index] = { ...taskSchema[index], ...updatedTask };
    res.json(taskSchema[index]);
});

// DELETE /tasks/:id: Delete a task by its ID.
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = taskSchema.findIndex(task => task.id === taskId);
    if (index === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    taskSchema.splice(index, 1);
    res.sendStatus(200); // Change to sendStatus(204)
});


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

module.exports = app;
