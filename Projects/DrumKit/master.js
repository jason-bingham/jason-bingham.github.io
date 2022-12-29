function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
  const fx = document.querySelector(`.drum[data-key="${e.keyCode}"] .fx`);
  if (!audio) return; // stop
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  fx.classList.add("play");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return; // stop
  this.classList.remove("playing");
  this.classList.remove("play");
}

function removeFX(e) {
  if (e.propertyName != "transform") return; // stop
  this.classList.remove("play");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".drum");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

const fxs = document.querySelectorAll(".fx");
fxs.forEach((fx) => fx.addEventListener("transitionend", removeFX));
