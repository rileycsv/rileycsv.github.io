document.addEventListener('DOMContentLoaded', function() {
    const introText = document.querySelector('.special');
    
    // Delay the animation start
    setTimeout(function() {
        introText.style.opacity = '1'; // Fade in by setting opacity to 1
    }, 500); // Adjust the delay as needed
});