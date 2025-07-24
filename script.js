document.addEventListener('DOMContentLoaded', () => {

    // --- 1. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS (Existing Code) ---
    // This code makes the cards animate into view as you scroll.

    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }


    // --- 2. LIVE SEARCH FILTER FUNCTIONALITY (New Code) ---
    // This code handles the filtering on the browse.html page.

    // First, find the search bar and all the mod cards on the page.
    const searchBar = document.querySelector('.search-bar');
    const modCards = document.querySelectorAll('.mod-card');

    // We only want this search code to run if we're on a page that HAS a search bar.
    // This prevents errors on index.html.
    if (searchBar) {
        
        // Listen for any input in the search bar (typing, pasting, etc.)
        searchBar.addEventListener('input', (event) => {

            // Get the user's search query, and convert it to lower case for case-insensitive matching.
            const searchTerm = event.target.value.toLowerCase();

            // Loop through every single mod card.
            modCards.forEach(card => {
                
                // Get the text from the mod's title (h3) and description (p).
                // Also convert these to lower case.
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();

                // Check if either the title OR the description includes the search term.
                const isMatch = title.includes(searchTerm) || description.includes(searchTerm);
                
                // If it's a match, make sure the card is visible.
                // If it's NOT a match, hide the card.
                // We use 'flex' because that's the original display style for .mod-card.
                card.style.display = isMatch ? 'flex' : 'none';
            });
        });
    }
});
