document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Global Scroll Reveal
    gsap.utils.toArray('.reveal').forEach((el, index) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: index * 0.05,
            ease: "power4.out"
        });
    });

    // Mobile Center-Activation
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

    // Parallax
    gsap.utils.toArray(".parallax").forEach(img => {
        gsap.to(img, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: { trigger: img, scrub: true }
        });
    });
});
