// script.js

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year for footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Umang Aggarwal. All rights reserved.`;
