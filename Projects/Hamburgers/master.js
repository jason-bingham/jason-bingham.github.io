const hamOne = document.getElementById("ham1");

hamOne.addEventListener("click", () => {
  const isOpen = hamOne.getAttribute("aria-expanded");
  if (isOpen === "false") {
    hamOne.setAttribute("aria-expanded", "true");
  } else {
    hamOne.setAttribute("aria-expanded", "false");
  }
})

const hamTwo = document.getElementById("ham2");

hamTwo.addEventListener("click", () => {
  const isOpen = hamTwo.getAttribute("aria-expanded");
  if (isOpen === "false") {
    hamTwo.setAttribute("aria-expanded", "true");
  } else {
    hamTwo.setAttribute("aria-expanded", "false");
  }
  hamTwo.classList.remove("preload")
});

const hamThree = document.getElementById("ham3");

hamThree.addEventListener("click", () => {
  const isOpen = hamThree.getAttribute("aria-expanded");
  if (isOpen === "false") {
    hamThree.setAttribute("aria-expanded", "true");
  } else {
    hamThree.setAttribute("aria-expanded", "false");
  }
  hamThree.classList.remove("preload");
});