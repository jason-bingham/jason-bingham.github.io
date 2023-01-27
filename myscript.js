// HEADER

const contactButt = document.querySelector(".btn--contact");
const contactTab = document.querySelector(".tab--contact");
const aboutButt = document.querySelector(".btn--about");
const aboutTab = document.querySelector(".tab--about");
const titleButt = document.querySelector(".btn--title");
const titleTab = document.querySelector(".tab--title");
const aboutWrap = document.querySelector(".tab__content--about");
const contactWrap = document.querySelector(".tab__content--contact");
const headWrap = document.querySelector(".tab--back");
const titleWrap = document.querySelector(".tab__content--title");

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

// BOOKSHELF

const books = document.querySelectorAll(".book");
const backs = document.querySelectorAll(".btn--back");
const titles = document.querySelectorAll(".book__title");

function openBook(book) {
  book.addEventListener("click", function () {
    this.classList.add("active");
    titles.forEach(addHidden);
  });
};

function closeBook(book) {
  book.classList.remove("active");
};

function addClickEvent(back) {
  back.addEventListener("click", function () {
    books.forEach(closeBook);
    titles.forEach(toggleHidden);
  });
};

function addHidden(item) {
  if (item.classList.contains("hidden")) {
    pass;
  } else {
    item.classList.add("hidden");
  }
}

function toggleHidden(item) {
  item.classList.toggle("hidden");
}

books.forEach(openBook);
backs.forEach(addClickEvent);
