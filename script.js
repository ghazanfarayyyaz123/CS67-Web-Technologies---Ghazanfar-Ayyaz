// ================================
// CS67 Portfolio Website Scripts
// Student: Ghazanfar Ayyaz
// ================================

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* ================================
       MOBILE NAVIGATION TOGGLE
       ================================ */

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            // Toggle menu visibility
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    /* ================================
       ACCORDION FUNCTIONALITY
       ================================ */

    const accordionButtons = document.querySelectorAll('.accordion-toggle');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const expanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', !expanded);

            if (content) {
                content.style.display = expanded ? 'none' : 'block';
            }
        });
    });

    /* ================================
       EVIDENCE SEARCH FILTER
       ================================ */

    const searchInput = document.getElementById('searchInput');
    const evidenceItems = document.querySelectorAll('.evidence-item');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();

            evidenceItems.forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }

    /* ================================
       CONTACT FORM VALIDATION
       ================================ */

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            let valid = true;

            // Clear previous messages
            document.querySelectorAll('.error-message').forEach(el => el.remove());

            // Name validation
            if (!name.value.trim()) {
                showError(name, 'Name is required');
                valid = false;
            }

            // Email validation (basic regex)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                showError(email, 'Please enter a valid email address');
                valid = false;
            }

            // Message validation
            if (message.value.trim().length < 10) {
                showError(message, 'Message must be at least 10 characters long');
                valid = false;
            }

            if (valid) {
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }

    // Helper function to show error messages
    function showError(input, message) {
        const error = document.createElement('small');
        error.className = 'error-message';
        error.style.color = 'red';
        error.innerText = message;
        input.parentElement.appendChild(error);
    }

});
