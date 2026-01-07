const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

let slideIndex = 1;

function openGallery() {
    document.getElementById("galleryModal").style.display = "block";
    showSlides(slideIndex);
}

function closeGallery() {
    const modal = document.getElementById("galleryModal");
    modal.style.display = "none";
    
    // Pause video when closing
    const video = document.getElementById("ledVideo");
    if (video) {
        video.pause();
        video.currentTime = 0; // Reset video
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    
    // Pause video if moving to the photo slide
    const video = document.getElementById("ledVideo");
    if (video) video.pause();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("galleryModal");
    if (event.target == modal) {
        closeGallery();
    }
}