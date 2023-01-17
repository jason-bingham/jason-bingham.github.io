// HAMBURGER

const ham = document.querySelector(".ham-main");
const menu = document.querySelector(".ham-menu");

ham.addEventListener("click", () => {
  const isOpen = ham.getAttribute("aria-expanded");
  if (isOpen === "false") {
    ham.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-expanded", "true");
  } else {
    ham.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-expanded", "false");
  }
  ham.classList.remove("preload");
});