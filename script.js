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
                const commentsSection = document.getElementById(`comments-${id}`);
                commentsSection.innerHTML = result.comments.map(c => `<p>${c}</p>`).join('');
                alert(`Commented on picture with ID: ${id}.`);
            }
        });
    });
});
