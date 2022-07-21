$(document).on("ready", () => {
  // detail
  $(".more-detail").hide();
  $("#less").hide();

  $("#more").on("click", () => {
    $(".more-detail").fadeIn(500);
    $("#less").show();
    $(".less-detail").hide();
    $("#more").hide();
  });

  $("#less").on("click", () => {
    $(".more-detail").fadeOut(500);
    $("#less").hide();
    $(".less-detail").fadeIn(500);
    $("#more").show();
  });

  // scroll
  $(window).on("scroll", () => {
    let scrollH = $(this).scrollTop();
    console.log(scrollH);
  });
});
