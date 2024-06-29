document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.brand-logo-slider-track');
  const items = track.innerHTML;
  
  // Clone the items to create a seamless loop
  track.innerHTML += items;
});
