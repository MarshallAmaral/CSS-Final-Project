let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Reset to first slide
    }
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 2000);  // Change image every 2 seconds
}

// Initial call to start the slideshow
showSlides();
