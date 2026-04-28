$(".drop-down").click(function() {
  $(this).toggleClass("on");
});

if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].boundingClientRect.y < 0) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });
  observer.observe(document.querySelector("#pixel-anchor"));
}