// Gallery and Slideshow Script

// Initialize the current slide index
let currentSlideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return; // Exit if no slides are found

    // Normalize the index within bounds
    currentSlideIndex = (index + slides.length) % slides.length;

    // Hide all slides and remove the active class
    slides.forEach(slide => slide.classList.remove('active'));

    // Show the current slide
    slides[currentSlideIndex].classList.add('active');
}

// Initial call to display the first slide
showSlide(currentSlideIndex);

// Change the slide by a given amount
function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

// Attach event listeners to navigation buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton) prevButton.addEventListener('click', () => changeSlide(-1));
if (nextButton) nextButton.addEventListener('click', () => changeSlide(1));

// Function to add a gallery image to the slideshow and display it
function addToSlideshow(imageSrc) {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    // Create a new slide
    const newSlide = document.createElement('div');
    newSlide.classList.add('slide');
    
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    newSlide.appendChild(imgElement);

    // Add the new slide to the slideshow container
    slideshowContainer.appendChild(newSlide);

    // Update the slideshow to show the new image
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = slides.length - 1;
    showSlide(currentSlideIndex);
}

// Initialize the gallery item click functionality
function initGalleryClick() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const imgSrc = event.target.src;
            addToSlideshow(imgSrc);
        });
    });
}

// Call the function to initialize gallery clicks
initGalleryClick();
