/* -----------------------------
   Dark / Light Mode Toggle
-------------------------------*/

const themeToggleBtn = document.getElementById('darkToggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference in localStorage
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
