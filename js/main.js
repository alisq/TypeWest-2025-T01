function fitter() {
    $(".container").each(function () {
      const $container = $(this);
      const $text = $container.find(".text");
  
      // Temporarily reset font size to base
      $text.css("font-size", "14px");
  
      const tW = $text.width();
      const cW = $container.width()-100;
      const ratio = cW / tW;
  
      let newSize = 14 * ratio;
  
      if (newSize > 300) {
        newSize = 300;
      }
  
      $text.css("font-size", newSize + "px");
    });
  }
  
  $(document).ready(function () {
    fitter();
    $(window).resize(fitter);
    $(document).keypress(fitter);
  });
  