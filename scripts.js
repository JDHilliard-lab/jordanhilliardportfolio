// script.js
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate every element with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((el, index) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%", // Starts when 90% of the viewport is reached
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: index * 0.1, // Stagger effect
            ease: "power4.out"
        });
    });

    // Parallax effect for project images
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
