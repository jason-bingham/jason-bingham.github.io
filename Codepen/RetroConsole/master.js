$("#power").click(function () {
  $(this).toggleClass("clicked");
  $("#screen").toggleClass("on");
  $("#play").removeClass("clicked");
  $("#pause").removeClass("clicked");
  $("#stop").removeClass("clicked");
  $("#vid").removeClass("playing");
});

$("#stop").click(function () {
  if ($("#power").hasClass("clicked")) {
    $(this).toggleClass("clicked");
    $("#play").removeClass("clicked");
    $("#pause").removeClass("clicked");
    if ($("#vid").hasClass("playing")) {
      $("#vid").removeClass("playing");
    }
  }
});

$("#play").click(function () {
  if ($("#power").hasClass("clicked")) {
    $("#play").toggleClass("clicked");
    $("#pause").removeClass("clicked");
    $("#stop").removeClass("clicked");
    $("#vid").removeClass("paused");
    if ($(this).hasClass("clicked")) {
      $("#vid").addClass("playing");
    } else if ($(this).not("clicked")) {
      $("#vid").removeClass("playing");
    }
  }
});

$("#pause").click(function () {
  if ($("#power").hasClass("clicked")) {
    $("#pause").toggleClass("clicked");
    $("#stop").removeClass("clicked");
    $("#play").removeClass("clicked");
    if ($(this).hasClass("clicked")) {
      $("#vid").addClass("paused");
    } else if ($(this).not("clicked")) {
      $("#vid").removeClass("paused");
    }
  }
});
