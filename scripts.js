// Listen for the custom event we dispatched in the fetch function
document.addEventListener("navbarReady", () => {

    // 1. Get the current page filename
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // 2. Grab all the anchor tags inside the newly injected list
    const navLinks = document.querySelectorAll("#nav-links a");

    // 3. Loop through and apply classes
    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (currentPage === linkPage) {
            // Active Page: Use bg-yellow-700
            link.classList.add("bg-yellow-700");
        } else {
            // Inactive Page: Use bg-yellow-600
            link.classList.add("bg-yellow-600");
        }
    });
});
