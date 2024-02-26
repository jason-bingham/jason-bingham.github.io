// CAROUSEL

window.onload = function () {
  var slides = document.getElementsByClassName("slide"),
    addActive = function (slide) {
      slide.classList.add("active");
    },
    removeActive = function (slide) {
      slide.classList.remove("active");
    };
  addActive(slides[0]);

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        slides[0].style.zIndex = 100;
        setTimeout(removeActive, 350, slides[i]);
        break;
      }
      if (slides[i].classList.contains("active")) {
        slides[i].removeAttribute("style");
        setTimeout(removeActive, 350, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 4000);
};

// NAV
{
  const nav = document.querySelector(".primary-nav");

  const options = {
    rootMargin: "-50px 0px 0px 0px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      entry.target.classList.toggle("unstuck", entry.isIntersecting);
      // console.log(entry);
    });
  }, options);

  observer.observe(nav);
}

// CARDS SLIDE-IN
// {
//   const cards = document.querySelectorAll(".card");

//   const options = {
//     rootMargin: "50% 0% 0% 0%",
//     // threshold: 0,
//   };

//   const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("onscreen", entry.isIntersecting);
//       console.log(entry);
//     });
//   }, options);

//   cards.forEach((card) => observer.observe(card));
// }
