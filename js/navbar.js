document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
    <nav class="nav-container">
        <a href="index.html" class="nav-logo">JH.</a>
        
        <div class="nav-links">
            <a href="index.html#work">Work</a>
            <a href="mailto:jordan@jordanhilliard.com">Contact</a>
        </div>
    </nav>
    `;

    // This looks for a <div> with id="navbar-placeholder" and fills it
    const placeholder = document.getElementById("navbar-placeholder");
    if (placeholder) {
        placeholder.innerHTML = navHTML;
    }
});
