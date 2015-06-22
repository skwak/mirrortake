(function() {

  var $photo = $("#foto");

  var $browserViewportHeight = $(window).height();
  var $browserViewportWidth = $(window).width();
  console.log("browser viewport width x height: " + $browserViewportWidth + " x " + $browserViewportHeight);
  var $htmlDocHeight = $(document).height();
  var $htmlDocWidth = $(document).width();
  console.log("HTML doc width x height: " + $htmlDocWidth + " x " + $browserViewportWidth);

  $photo.load(function() {
    while ($(this).width() < $browserViewportWidth) {
      
    }

      //  alert($(this).height());
      //  alert($(this).width());
   });

})();
