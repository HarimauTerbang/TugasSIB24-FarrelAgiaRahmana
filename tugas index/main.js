document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelectorAll("img");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;
    
    // Function to show current slide
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
    
    // Initial setup
    showSlide(currentIndex);
    
    // Function to move to the next slide
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
      }
      showSlide(currentIndex);
    }
    
    // Function to move to the previous slide
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Go to the last slide
      }
      showSlide(currentIndex);
    }
    
    // Event listeners for navigation buttons
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
    
    // Automatic sliding
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  