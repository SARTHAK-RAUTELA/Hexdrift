
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle navbar scroll effect
const nav = document.querySelector('.hero__nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.hero__toggle');
const menu = document.querySelector('.hero__menu');

// ... rest of existing code ...


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Portfolio Slider Dots
const dots = document.querySelectorAll('.dot');
const portfolioGrid = document.querySelector('.portfolio__grid');
const itemsPerPage = window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2;
const totalSlides = Math.ceil(document.querySelectorAll('.portfolio__grid img').length / itemsPerPage);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Update active dot
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        // Slide the portfolio grid
        const translateX = -(index * 100);
        portfolioGrid.style.transform = `translateX(${translateX}%)`;
        portfolioGrid.style.transition = 'transform 0.3s ease';
    });
});


