// ==========================================
// MANOS Y ENERGÍA - LANDING PAGE SCRIPT
// ==========================================

// Smooth scroll para todos los enlaces internos
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

// Intersection Observer para animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // Si es una grid, animar cada item con delay
            if (entry.target.classList.contains('benefits-grid') ||
                entry.target.classList.contains('testimonials-grid')) {
                const items = entry.target.children;
                Array.from(items).forEach((item, index) => {
                    setTimeout(() => {
                        item.style.animation = `fadeInUp 0.6s ease forwards`;
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observar secciones para animaciones
const sections = document.querySelectorAll('.benefits, .topics, .about, .how-it-works, .testimonials, .final-cta');
sections.forEach(section => observer.observe(section));

// Observar cards individuales
const cards = document.querySelectorAll('.benefit-card, .topic-card, .step, .testimonial-card');
cards.forEach(card => observer.observe(card));

// Efecto parallax suave en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hand-illustration');

    if (hero && scrolled < hero.offsetHeight) {
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroImage.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    }
});

// Tracking de clics en CTAs (opcional - para analytics)
const ctaButtons = document.querySelectorAll('.cta-button, .cta-link');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        const section = this.closest('section')?.className || 'unknown';

        // Console log para debugging (reemplazar con Google Analytics o similar)
        console.log('CTA Click:', {
            text: buttonText,
            section: section,
            href: this.getAttribute('href')
        });

        // Aquí puedes agregar tu código de tracking
        // Ejemplo con Google Analytics:
        // gtag('event', 'cta_click', {
        //     'button_text': buttonText,
        //     'section': section
        // });
    });
});

// Animación de entrada para elementos cuando se carga la página
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
});

// Prevenir zoom en mobile en inputs (mejora UX)
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Agregar clase al body cuando se hace scroll (útil para sticky headers si se agregan)
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
}, { passive: true });

// Efecto hover mejorado para cards
const allCards = document.querySelectorAll('.benefit-card, .topic-card, .testimonial-card');
allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Lazy loading para imágenes (cuando se agreguen)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Mejorar accesibilidad - focus visible
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Log de carga exitosa
console.log('✨ Manos y Energía - Landing page cargada correctamente');
