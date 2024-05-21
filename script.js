// script.js
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    const rateForm = document.getElementById('rate-form');
    rateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const rating = document.getElementById('rating').value;
        if (rating >= 4) {
            window.location.href = 'https://www.google.com/search?q=Sr+Agency+Reviews'; // Replace with your Google review URL
        } else {
            alert('Thank you for your feedback!');
        }
    });
});
