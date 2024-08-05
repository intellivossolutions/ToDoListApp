const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
