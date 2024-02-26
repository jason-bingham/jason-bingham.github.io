const nextImagesButtons = document.querySelectorAll(".next-image");
const previousImagesButtons = document.querySelectorAll(".previous-image");

function nextImage(nextImageButton) {
  nextImageButton.addEventListener("click", function () {
    const parent = this.closest(".current-img-container");
    const images = parent.querySelectorAll(".projeto-img");
    for (let i = 0; i < images.length; i++) {
      if (images[i].classList.contains("current-img")) {
        images[i].classList.remove("current-img");
        images[(i + 1) % images.length].classList.add("current-img");
        break;
      }
    }
  });
}

function previousImage(previousImageButton) {
  previousImageButton.addEventListener("click", function () {
    const parent = this.closest(".current-img-container");
    const images = parent.querySelectorAll(".projeto-img");
    for (let i = 0; i < images.length; i++) {
      if (images[i].classList.contains("current-img")) {
        images[i].classList.remove("current-img");
        if (i == 0) {
          i = images.length - 1;
          images[i].classList.add("current-img");
        } else {
          images[(i - 1) % images.length].classList.add("current-img");
        }
        break;
      }
    }
  });
}

nextImagesButtons.forEach(nextImage);
previousImagesButtons.forEach(previousImage);

//

const infoButtons = document.querySelectorAll(".info-toggle");

function toggleInfo(infoButton) {
  infoButton.addEventListener("click", function () {
    infoButton.classList.toggle("open");
  });
}

infoButtons.forEach(toggleInfo);
