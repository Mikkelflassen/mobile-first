document.getElementById('menuToggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});


// Function to handle the scroll event
function handleScroll() {
    var scrollText = document.getElementById('scrollText');
    var article = document.getElementById('article');
    // Check if the hero image is no longer visible
    var heroImage = document.querySelector('.hero-image').getBoundingClientRect();

    // Check for the previous element's functionality
    if (window.scrollY > 100) {
        scrollText.classList.add('scroll-text-visible');
    } else {
        scrollText.classList.remove('scroll-text-visible');
    }

    // If the hero image is no longer fully visible, show the article
    if (heroImage.bottom < 0) {
        article.classList.add('article-visible');
    } else {
        article.classList.remove('article-visible');
    }
}

// Listen for the scroll event on the window
window.addEventListener('scroll', handleScroll);
