document.addEventListener('DOMContentLoaded', () => {

    // --- Intersection Observer for Scroll Animations ---
    // This modern API efficiently detects when an element enters the viewport.

    // 1. Select all elements we want to animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // 2. Create an observer
    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries (elements being observed)
        entries.forEach(entry => {
            // If the element is intersecting the viewport (i.e., is on screen)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS animation
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element after it has animated once to save resources
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger the animation when 10% of the element is visible
    });

    // 3. Tell the observer to watch each of our animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
