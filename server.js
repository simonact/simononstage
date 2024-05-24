document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    const enquiryForm = document.getElementById('enquiry-form');
    enquiryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });

    const rateForm = document.getElementById('rate-form');
    rateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const rating = document.querySelector('input[name="rating"]:checked');
        if (rating) {
            alert(`Thank you for rating us ${rating.value} stars!`);
            rateForm.reset();
        } else {
            alert('Please select a rating before submitting.');
        }
    });

    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', async () => {
            const id = button.getAttribute('data-id');
            const response = await fetch('/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });
            const result = await response.json();
            const likeCountSpan = button.querySelector('.like-count');
            likeCountSpan.textContent = result.likes;
            alert(`Liked picture with ID: ${id}. Total likes: ${result.likes}`);
        });
    });

    document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', async () => {
            const id = button.getAttribute('data-id');
            const comment = prompt('Enter your comment:');
            if (comment) {
                const response = await fetch('/comment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id, comment })
                });
                const result = await response.json();
                alert(`Commented on picture with ID: ${id}. Comments: ${result.comments.join(', ')}`);
            }
        });
    });
});


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let likes = {};
let comments = {};

app.post('/like', (req, res) => {
    const { id } = req.body;
    if (!likes[id]) {
        likes[id] = 0;
    }
    likes[id]++;
    res.send({ likes: likes[id] });
});

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
