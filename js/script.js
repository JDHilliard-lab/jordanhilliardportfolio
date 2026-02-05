document.addEventListener("DOMContentLoaded", () => {
    // 1. Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // 2. Global Scroll Reveal
        // This ensures that even if ScrollTrigger fails, the content is visible
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out"
            });
        });

        // 3. Parallax
        gsap.utils.toArray(".parallax").forEach(img => {
            gsap.to(img, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: { trigger: img, scrub: true }
            });
        });
    } else {
        // Fallback: If GSAP fails, just show everything
        document.querySelectorAll('.reveal').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "none";
        });
    }
});
