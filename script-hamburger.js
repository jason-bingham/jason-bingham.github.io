// HAMBURGER

const ham = document.getElementById("ham-main");

ham.addEventListener("click", () => {
  console.log("called")
  const isOpen = ham.getAttribute("aria-expanded");
  if (isOpen === "false") {
    ham.setAttribute("aria-expanded", "true");
  } else {
    ham.setAttribute("aria-expanded", "false");
  }
  ham.classList.remove("preload");
});