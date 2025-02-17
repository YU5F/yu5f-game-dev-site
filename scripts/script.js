document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const section = dot.dataset.section;
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    });
});

// Update active navigation dot
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentDot = document.querySelector(`.nav-dot[data-section="${entry.target.id}"]`);
            navDots.forEach(dot => dot.classList.remove('active'));
            currentDot.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));