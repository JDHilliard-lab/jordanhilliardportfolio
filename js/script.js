document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for all elements with class 'reveal'
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: index * 0.05,
            ease: "power3.out"
        });
    });

    // MOBILE DYNAMIC RESPONSE (Lights up cards as they center in view)
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

    // Parallax effect for images with class 'parallax'
    gsap.utils.toArray(".parallax").forEach(img => {
        gsap.to(img, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                scrub: true
            }
        });
    });
});
