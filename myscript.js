const contactButt = document.querySelector(".contact-button");
const contactTab = document.querySelector(".contact-tab");
const aboutButt = document.querySelector(".about-button");
const aboutTab = document.querySelector(".about-tab");
const titleButt = document.querySelector(".title-button");
const titleTab = document.querySelector(".title-tab");

contactButt.addEventListener("click", function (e) {
  if (contactTab.classList.contains("closed")) {
    contactTab.classList.remove("closed");
  } else {
    contactTab.classList.add("closed");
    aboutTab.classList.add("closed");
    titleTab.classList.add("closed");
  }
})

aboutButt.addEventListener("click", function (e) {
  if (aboutTab.classList.contains("closed")) {
  contactTab.classList.remove("closed");
  aboutTab.classList.remove("closed");
  } else {
    aboutTab.classList.add("closed");
    titleTab.classList.add("closed");
  }
});

titleButt.addEventListener("click", function (e) {
  if (titleTab.classList.contains("closed")) {
    contactTab.classList.remove("closed");
    aboutTab.classList.remove("closed");
    titleTab.classList.remove("closed");
  } else {
    titleTab.classList.add("closed");
  }
});