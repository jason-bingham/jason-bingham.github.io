// const secondHand = document.querySelector('.second-hand');
// const minuteHand = document.querySelector(".minute-hand");
// const hourHand = document.querySelector(".hour-hand");
// const gradients = document.querySelector('.gradients');

// function setSecs() {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secDegs = seconds * 6;
//   secondHand.style.transform = `rotate(${secDegs}deg)`;
//   if (seconds === 0) {
//     secondHand.classList.add("transition-off");
//     setMins();
//   } else {
//     secondHand.classList.remove("transition-off");
//   }
// };

// function setMins () {
//   const now = new Date();

//   const minutes = now.getMinutes();
//   const minDegs = minutes * 6;
//   minuteHand.style.transform = `rotate(${minDegs}deg)`;
//   if (minutes === 0) {
//     minuteHand.classList.add("transition-off");
//     setHours();
//   } else {
//     minuteHand.classList.remove("transition-off");
//   }
// };

// function setHours () {
//   const now = new Date();
  
//   const hours = now.getHours();
//   const nextHourDegs = ((hours % 12) * 30) + 30;
//   hourHand.style.transition = 'transform 3600 linear 0s';
//   hourHand.style.transform = `rotate(${nextHourDegs}deg)`;
//   if (hours === 0) {
//     hourHand.classList.add("transition-off");
//   } else {
//     hourHand.classList.remove("transition-off");
//   }
//   gradients.classList.remove(`oclock-${hours-1}`);
//   gradients.classList.add(`oclock-${hours}`);
// };

// function initSetSecs () {
//   const now = new Date();

//   const seconds = now.getSeconds();
//   const secDegs = seconds * 6;
//   secondHand.style.transform = `rotate(${secDegs}deg)`;
// };

// function initSetMins () {
//   const now = new Date();

//   const minutes = now.getMinutes();
//   const minDegs = minutes * 6;
//   minuteHand.style.transform = `rotate(${minDegs}deg)`;
// };

// function initSetHours () {
//   const now = new Date();
  
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const hourDegs = ((hours % 12) * 30) + ((minutes * 6) / 12);
//   hourHand.style.transition = "";
//   hourHand.style.transform = `rotate(${hourDegs}deg)`;
//   console.log(hourHand.style.transform);
//   gradients.classList.add(`oclock-${hours}`);
// };

// function initHoursTransition() {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const nextHourDegs = (hours % 12) * 30 + 30;
//   const timeToNextHour = 3600 - minutes * 60;
//   console.log(hourHand.style.transition);
//   hourHand.style.transition = `transform ${timeToNextHour}s linear 0s`;
//   console.log(hourHand.style.transition);
//   hourHand.style.transform = `rotate(${nextHourDegs}deg)`;
//   console.log(hourHand.style.transform);
// };

// window.addEventListener("load", initSetSecs);
// window.addEventListener("load", initSetMins);
// window.addEventListener("load", initSetHours);
// setTimeout(initHoursTransition, 1000)

// setInterval(setSecs, 1000);

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const gradients = document.querySelector(".gradients");
const markers = document.querySelectorAll(".marker");
const hands = document.querySelectorAll(".hand");
const clock = document.querySelector(".clock");
const fireflies = document.querySelector(".ffpaths");

function setPosition() {

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secDegs = seconds * 6;
  const minDegs = minutes * 6;
  const hourDegs = hours * 30 + minDegs / 12;

  secondHand.style.transform = `rotate(${secDegs}deg)`;
  minuteHand.style.transform = `rotate(${minDegs}deg)`;
  hourHand.style.transform = `rotate(${hourDegs}deg)`;

  gradients.classList.add(`oclock-${hours + 1}`); // The "+ 1"ensures that the gradient arrives in position at the named hour (This is due to the delay caused by long transition)

  if (hours > 19 || hours < 6) {
    markers.forEach((marker) => marker.classList.add("night"));
    hands.forEach((hand) => hand.classList.add("night"));
    clock.classList.add("night");
    fireflies.classList.add("night");
  } else {
    markers.forEach((marker) => marker.classList.remove("night"));
    hands.forEach((hand) => hand.classList.remove("night"));
    clock.classList.remove("night");
    fireflies.classList.remove("night");
  }

}


function tick() {

  const now = new Date();
  const seconds = now.getSeconds();
  const secDegs = seconds * 6;

  secondHand.style.transform = `rotate(${secDegs}deg)`;
  if (seconds === 0) {
    secondHand.classList.add("transition-off");
    checkMins();
  } else {
    secondHand.classList.remove("transition-off");
  }

}


function checkMins() {

  const now = new Date();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const minDegs = minutes * 6;
  const hourDegs = hours * 30 + minDegs / 12;

  minuteHand.style.transform = `rotate(${minDegs}deg)`
  hourHand.style.transform = `rotate(${hourDegs}deg)`;

  if (minutes === 0) {
    minuteHand.classList.add("transition-off");
    checkHour();
  } else {
    minuteHand.classList.remove("transition-off");
  }

}


function checkHour() {

  const now = new Date();
  const hours = now.getHours();

  if (hours === 0) {
    hourHand.classList.add("transition-off");
    checkHour();
  } else {
    hourHand.classList.remove("transition-off");
  }

  gradients.classList.remove(`oclock-${hours}`);
  gradients.classList.add(`oclock-${hours + 1}`);

  if (hours > 19 || hours < 6) {
    markers.forEach((marker) => marker.classList.add("night"));
  } else {
    markers.forEach((marker) => marker.classList.remove("night"));
  }

}


function removeTransitionOff() {
    minuteHand.classList.remove("transition-off");
    hourHand.classList.remove("transition-off");
}

window.addEventListener("load", setPosition);
setInterval(tick, 1000);
setTimeout(removeTransitionOff, 5000);