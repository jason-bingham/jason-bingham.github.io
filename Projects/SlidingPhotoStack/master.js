$(".card").click(function () {
  elements = document.getElementsByClassName("removed");
  for (element of elements) {
    element.classList.remove("removed");
  }
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).addClass("removed");
  } else {
    elements = document.getElementsByClassName("active");
    for (element of elements) {
      element.classList.remove("active");
      element.classList.add("removed");
    }
    $(this).addClass("active");
  }
});
