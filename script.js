document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. RESPONSIVE NAVIGATION DROPDOWN LOGIC ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // This turns the .open class in your CSS on and off
            navLinks.classList.toggle('open');
            
            // Subtle UI touch: Swaps the icon look between ☰ and ✕
            if (navLinks.classList.contains('open')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }

    // --- 2. CONTACT FORM SUBMISSION LOGIC ---
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('successMessage');

    if (form && msg) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.classList.add('hidden');
            msg.classList.remove('hidden');
            console.log("Form submitted successfully!");
        });
    }
});
