// Smooth scroll navigation
document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const section = dot.dataset.section;
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active navigation elements
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            
            // Update nav dots
            const currentDot = document.querySelector(`.nav-dot[data-section="${sectionId}"]`);
            navDots.forEach(dot => dot.classList.remove('active'));
            currentDot.classList.add('active');
            
            // Update nav links
            const currentLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            currentLink.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Add smooth scroll to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
});