// Create the 'Back to Top' button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Top';
backToTopButton.id = 'backToTop';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#2575fc';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.fontSize = '16px';
backToTopButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

// Show or hide the button when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show button after 200px of scroll
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});
