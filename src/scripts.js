// JavaScript for carousel functionality

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Auto-play functionality (optional)
setInterval(() => {
    nextSlide();
}, 5000); // Change slide every 5 seconds

// Form submission handling
document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your message has been sent!');
    // Here, add your form submission logic, e.g., sending the data to a server
});

// JavaScript to toggle the display of the modal
document.getElementById('quoteButton').addEventListener('click', function() {
    document.getElementById('quoteModal').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('quoteModal').style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('quoteModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

