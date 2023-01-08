const contactButt = document.querySelector(".contact-button");
const contactTab = document.querySelector(".contact-tab");
const aboutButt = document.querySelector(".about-button");
const aboutTab = document.querySelector(".about-tab");
const titleButt = document.querySelector(".title-button");
const titleTab = document.querySelector(".title-tab");
const aboutWrap = document.querySelector(".about-wrapper");
const contactWrap = document.querySelector(".contact-wrapper");
const headWrap = document.querySelector(".header-content-wrapper");
const titleWrap = document.querySelector(".title-wrapper");


contactButt.addEventListener("click", function (e) {
  if (contactTab.classList.contains("closed")) {
    contactTab.classList.remove("closed");
    contactWrap.classList.remove("hidden");
    headWrap.classList.add("hidden");
  } else {
    contactTab.classList.add("closed");
    contactWrap.classList.add("hidden");
    aboutTab.classList.add("closed");
    aboutWrap.classList.add("hidden");
    titleTab.classList.add("closed");
    titleWrap.classList.add("hidden");
    headWrap.classList.remove("hidden");
  }
})

aboutButt.addEventListener("click", function (e) {
  if (aboutTab.classList.contains("closed")) {
    aboutTab.classList.remove("closed");
    aboutWrap.classList.remove("hidden");
    contactTab.classList.remove("closed");
    contactWrap.classList.add("hidden");
    headWrap.classList.add("hidden");
  } else {
    aboutTab.classList.add("closed");
    aboutWrap.classList.add("hidden");
    titleTab.classList.add("closed");
    titleWrap.classList.add("hidden");
    contactWrap.classList.remove("hidden");
  }
});

titleButt.addEventListener("click", function (e) {
  if (titleTab.classList.contains("closed")) {
    contactTab.classList.remove("closed");
    aboutTab.classList.remove("closed");
    titleTab.classList.remove("closed");
    titleWrap.classList.remove("hidden");
    headWrap.classList.add("hidden");
    contactWrap.classList.add("hidden");
    aboutWrap.classList.add("hidden");
  } else {
    titleTab.classList.add("closed");
    titleWrap.classList.add("hidden");
    aboutWrap.classList.remove("hidden");
  }
});


const topline = document.querySelector(".topline");
const bottomline = document.querySelector(".bottomline");

aboutButt.addEventListener("click", function (e) {
  aboutButtsvg.style.transform = "rotate(180deg)";
});



// BOOKSHELF

const books = document.querySelectorAll(".book-bg");
const backs = document.querySelectorAll(".back");

function openBook(book) {
  book.addEventListener("click", function () {
    this.classList.add("active");
  });
};

function closeBook(book) {
  console.log("innerfunction")
  book.classList.remove("active");
};

function addClickEvent(back) {
  back.addEventListener("click", function () {
    books.forEach(closeBook);
  });
};

books.forEach(openBook);
backs.forEach(addClickEvent);