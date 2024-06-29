document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.brand-logo-slider-track');
  const items = track.innerHTML;
  
  // Clone the items to create a seamless loop
  track.innerHTML += items;

  // Function to reset animation
  function resetAnimation() {
    track.style.animation = 'none';
    track.offsetHeight; // Trigger reflow
    track.style.animation = 'scroll 20s linear infinite';
  }

  // Reset animation on hover to prevent jerky effect
  track.addEventListener('mouseenter', resetAnimation);
  track.addEventListener('mouseleave', () => {
    track.style.animation = 'scroll 20s linear infinite';
  });
});
