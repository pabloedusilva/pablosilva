const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');
        navToggle.classList.toggle('is-active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('is-open');
            navToggle.classList.remove('is-active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const animatedElements = document.querySelectorAll('[data-animate]');

if (animatedElements.length) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(element => observer.observe(element));
}
