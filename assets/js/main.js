(function() {

  var $photo = $("#foto");

  var $browserViewportHeight = $(window).height(),
      $browserViewportWidth = $(window).width(),
      $htmlDocHeight = $(document).height(),
      $htmlDocWidth = $(document).width();

  $(function(){
    photoGrow();
  });

  function photoGrow() {
    console.log($photo.width());
    if ($photo.width() < $htmlDocWidth ) {
      $photo.animate({
        height: "+=80px",
        width: "+=80px"
      }, 1000, "linear", function() {
        photoGrow();
      });
    }
  }

})();
