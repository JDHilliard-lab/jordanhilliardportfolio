document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Force video play
    const video = document.getElementById('heroVideo');
    if (video) { video.play().catch(() => { console.log("Autoplay prevented by browser."); }); }

    // Reveal animations
    gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out"
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
