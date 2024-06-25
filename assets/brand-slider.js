document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.brand-slider-container');
  const sliderWrapper = document.querySelector('.brand-slide-wrapper');
  const slides = document.querySelectorAll('.brand-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth; // Assumes all slides have same width
  const containerWidth = slider.clientWidth;

  // Set width of slider wrapper dynamically
  sliderWrapper.style.width = `${slideWidth * totalSlides}px`;

  const updateButtonVisibility = () => {
    if (totalSlides * slideWidth > containerWidth) {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  };

  const showSlide = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  const showNextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      showSlide();
    }
  };

  const showPrevSlide = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide();
    }
  };

  // Event listeners for navigation buttons
  nextBtn.addEventListener('click', showNextSlide);
  prevBtn.addEventListener('click', showPrevSlide);

  // Initial check and update button visibility
  updateButtonVisibility();

  // Event listener for window resize to update button visibility
  window.addEventListener('resize', updateButtonVisibility);
});
