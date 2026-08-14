// This file contains the main JavaScript code for the student result management system.
// It initializes the application, handles user interactions, and manages navigation between pages.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initApp();
});

function initApp() {
    // Set up event listeners and initial state
    setupNavigation();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('href');
            loadPage(page);
        });
    });
}

function loadPage(page) {
    const content = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}