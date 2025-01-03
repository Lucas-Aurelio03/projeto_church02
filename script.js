gsap.registerPlugin(ScrollTrigger);

// Animação inicial do hero com efeito de fade e scale
gsap.from(".hero-content", {
    opacity: 0,
    scale: 0.9,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".hero h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: "back.out"
});

gsap.from(".hero p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
    ease: "back.out"
});

gsap.from(".hero .cta-button", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.1,
    ease: "back.out"
});

// Animações no scroll com efeitos mais elaborados
gsap.from(".schedule-content", {
    scrollTrigger: {
        trigger: ".schedule-section",
        start: "top center",
        toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

gsap.from(".pastor-image", {
    scrollTrigger: {
        trigger: ".pastor-section",
        start: "top center",
        toggleActions: "play none none reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
});

gsap.from(".pastor-content", {
    scrollTrigger: {
        trigger: ".pastor-section",
        start: "top center",
        toggleActions: "play none none reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
});

// Parallax suave no hero com efeito de rotação suave
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const rotation = scrolled * 0.02;
    hero.style.transform = `translateY(${scrolled * 0.5}px) rotate(${rotation}deg)`;
});

// Efeito de hover nos botões
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', (e) => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    // Add/remove glow effect
    if (currentScroll > 100) {
        navbar.classList.add('glow');
    } else {
        navbar.classList.remove('glow');
    }
    
    // Hide/show navbar
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = currentScroll;
});

// Add tilt effect to hero content
VanillaTilt.init(document.querySelector(".hero-content"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// Add tilt effect to schedule content
VanillaTilt.init(document.querySelector(".schedule-content"), {
    max: 10,
    speed: 400
});

// Floating animation for pastor section
gsap.to(".pastor-image", {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Add smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add particle effect to hero section
const particlesNumber = 50;
const hero = document.querySelector('.hero');

for(let i = 0; i < particlesNumber; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(241, 196, 15, ${Math.random() * 0.5 + 0.2});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
    `;
    hero.appendChild(particle);
    
    gsap.to(particle, {
        y: Math.random() * 200 - 100,
        x: Math.random() * 200 - 100,
        opacity: 0,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        ease: "none"
    });
}