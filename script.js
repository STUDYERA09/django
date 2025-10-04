document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById('typing-text');
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const textToType = 'Welcome to STUDYVERSE NETWORK👀';
    let charIndex = 0;
    const typingSpeed = 70; // milliseconds per character
    const delayBeforeTransition = 1000; // 1 second delay after typing finishes

    /**
     * Implements the character-by-character typing effect.
     */
    function typeText() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Typing complete, now transition to the main page
            setTimeout(hidePreloader, delayBeforeTransition);
        }
    }

    /**
     * Hides the preloader and shows the main content with a smooth transition.
     */
    function hidePreloader() {
        // 1. Fade out the preloader
        preloader.style.opacity = '0';

        // 2. After the fade out (1 second transition in CSS), hide it completely
        setTimeout(() => {
            preloader.style.display = 'none';

            // 3. Show the main content
            mainContent.classList.remove('hidden');

            // 4. Optional: Add a smooth entrance animation to main content here 
            //    (e.g., setting an initial opacity/transform and then resetting it 
            //     after a brief delay for a CSS transition to fire)
            mainContent.style.opacity = '0';
            setTimeout(() => {
                mainContent.style.transition = 'opacity 1s ease-in';
                mainContent.style.opacity = '1';
            }, 50); // Small delay to ensure the style is applied before transition
            
        }, 1000); // Must match the CSS transition duration for a smooth effect
    }

    // Start the typing sequence when the page is fully loaded
    typeText();
});
                       
