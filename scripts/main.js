document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
    // --- 1. Custom Cursor 'Target' Logic ---
    const cursor = document.querySelector('.cursor-target');
    const hoverLinks = document.querySelectorAll('a, button, .project-item, .service-row');

    window.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    hoverLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.classList.add('hovered');
            // Slight visual cue for the cursor
            cursor.style.transform = `translate(-50%, -50%) scale(1.5)`;
        });
        link.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovered');
            cursor.style.transform = `translate(-50%, -50%) scale(1)`;
        });
    });

    // --- 2. Scroll Animation Observer (The "Wipe" Effect) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-img, .reveal-text, .reveal-border');
    revealElements.forEach(el => observer.observe(el));

    // --- 3. Hero Parallax & Glitch Hint ---
    const heroSection = document.querySelector('#hero');
    const heroImg = document.querySelector('.hero-img');
    const heroTitle = document.querySelector('.glitch-text');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY < window.innerHeight) {
            // Imagen se mueve más lento que el scroll
            heroImg.style.transform = `scale(1.1) translateY(${scrollY * 0.2}px)`;
            
            // Texto se mueve ligeramente opuesto
            heroTitle.style.transform = `translateY(${scrollY * -0.1}px)`;
        }
    });

    // --- 4. Smooth Anchor Scrolling (Manual) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    }
});