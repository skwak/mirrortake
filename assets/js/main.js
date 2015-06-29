(function() {

  var $photo = $("#foto");

  var $browserViewportHeight = $(window).height(),
      $browserViewportWidth = $(window).width(),
      $htmlDocHeight = $(document).height(),
      $htmlDocWidth = $(document).width();


  // set the smaller photo's dimensions
  var originalHeight = $photo.height();
  $photo.css("margin-top", originalHeight/6)
        .css("margin-left", $browserViewportWidth/8)
        .attr("height", $browserViewportHeight/2);


  $(function(){
    photoGrow();
  });

  function photoGrow() {
      $photo.animate({
        height: "+=80px",
        width: "+=80px"
      }, 1000, "linear", function() {
        // note for later self:
        // adjust the browser height to reflect the added header, etc to be more precise
        if ($photo.height() < $browserViewportHeight) {
          photoGrow();
        }
      });
  }

})();
