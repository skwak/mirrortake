(function() {

  var $photo = $("#foto");
  $photo.click(function() {
    $photo.addClass("zoom");
  });

  var $browserViewportHeight = $(window).height();
  var $browserViewportWidth = $(window).width();
  console.log("browser viewport width x height: " + $browserViewportWidth + " x " + $browserViewportHeight);
  var $htmlDocHeight = $(document).height();
  var $htmlDocWidth = $(document).width();
  console.log("HTML doc width x height: " + $htmlDocWidth + " x " + $browserViewportWidth);

})();
