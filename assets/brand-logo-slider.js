
  $(document).ready(function() {
    var $slider = $('.brand-logo-slider-inner');
    var $track = $('.brand-logo-slider-track');
    var totalWidth = 0;

    // Calculate the total width of the track
    $track.children().each(function() {
      totalWidth += $(this).outerWidth(true);
    });

    // Set the width of the track to accommodate duplicate logos
    $track.width(totalWidth);

    // Function to reset animation
    function resetAnimation() {
      $slider.css('animation', 'none');
      $slider[0].offsetHeight; // Trigger reflow
      $slider.css('animation', '');
    }

    // Reset animation on hover to prevent jerky effect
    $slider.hover(resetAnimation, function() {
      $slider.css('animation', 'scroll 20s linear infinite');
    });
  });

