const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Simulated database
let likes = {};
let comments = {};

// Like endpoint
app.post('/like', (req, res) => {
    const { id } = req.body;
    if (!likes[id]) {
        likes[id] = 0;
    }
    likes[id]++;
    res.send({ likes: likes[id] });
});

// Comment endpoint
app.post('/comment', (req, res) => {
    const { id, comment } = req.body;
    if (!comments[id]) {
        comments[id] = [];
    }
    comments[id].push(comment);
    res.send({ comments: comments[id] });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
