// script.js
document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Auto-Reveal Elements
    // Any element with the class 'reveal' will animate in automatically
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out"
        });
    });

    // 2. Global Hover Sound or Haptic (Optional/Future-proof)
    console.log("Jordan Hilliard Portfolio Engine Active");

    // 3. Image Parallax (Universal)
    // Any image with class 'parallax' will move slightly on scroll
    gsap.utils.toArray(".parallax").forEach(img => {
        gsap.to(img, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                scrub: true
            }
        });
    });
});
