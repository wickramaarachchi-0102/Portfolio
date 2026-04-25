document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.classList.add('hidden');
            msg.classList.remove('hidden');
            console.log("Form submitted successfully!");
        });
    }
});