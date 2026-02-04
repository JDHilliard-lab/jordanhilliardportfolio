document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // ALT-Style staggered entrance
    gsap.from('.reveal', {
        opacity: 0,
        y: 60,
        duration: 1.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".reveal",
            start: "top 85%",
        }
    });

    // Mobile activation (grayscale to color)
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onEnter: () => card.classList.add('mobile-active'),
            onLeave: () => card.classList.remove('mobile-active'),
            onEnterBack: () => card.classList.add('mobile-active'),
            onLeaveBack: () => card.classList.remove('mobile-active'),
        });
    });
});
