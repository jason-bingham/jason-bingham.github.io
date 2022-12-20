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
const displays = document.querySelectorAll(".display");
const fireflies = document.querySelector(".ffpaths");
const timeOfDay = document.querySelectorAll('[name="tod"]');

var days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};
var months = {
  0: "JAN",
  1: "FEB",
  2: "MAR",
  3: "APR",
  4: "MAY",
  5: "JUN",
  6: "JUL",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC",
}
const today = document.querySelector(".day");
const todaysDate = document.querySelector(".date-day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

function setClock() {

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secDegs = seconds * 6;
  const minDegs = (minutes * 6) + 6; // Added one minute's worth of degree to ensure that the minute hand is in the right position when it strikes, rather than starting the move toward hte ight position
  const hourDegs = hours * 30 + minDegs / 12;
  const day = now.getDay();
  const dayOfMonth = now.getDate();
  const mon = now.getMonth();
  const y = now.getFullYear().toString().substr(-2);

  today.innerHTML = `${days[day]},`;
  todaysDate.innerHTML = `${dayOfMonth}`;
  month.innerHTML = `${months[mon]}`;
  year.innerHTML = `'${y}`;

  secondHand.style.transform = `rotate(${secDegs}deg)`;
  minuteHand.style.transform = `rotate(${minDegs}deg)`;
  hourHand.style.transform = `rotate(${hourDegs}deg)`;

  gradients.classList.add(`oclock-${hours + 1}`); // The "+ 1"ensures that the gradient arrives in position at the named hour (This is due to the delay caused by long transition)
  gradients.classList.remove("night");
  gradients.classList.remove("sunset");
  gradients.classList.remove("day");

  if (hours >= 19 || hours <= 5) {
    markers.forEach((marker) => marker.classList.add("night"));
    hands.forEach((hand) => hand.classList.add("night"));
    displays.forEach((display) => display.classList.add("night"));
    fireflies.classList.add("night");
  } else {
    markers.forEach((marker) => marker.classList.remove("night"));
    hands.forEach((hand) => hand.classList.remove("night"));
    displays.forEach((display) => display.classList.remove("night"));
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
  const minDegs = minutes * 6 + 6; // Added one minute's worth of degree to ensure that the minute hand is in the right position when it strikes, rather than starting the move toward hte ight position
  const hourDegs = hours * 30 + minDegs / 12;

  minuteHand.style.transform = `rotate(${minDegs}deg)`;
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

  if (hours >= 19 || hours <= 5) {
    markers.forEach((marker) => marker.classList.add("night"));
    hands.forEach((hand) => hand.classList.add("night"));
    displays.forEach((display) => display.classList.add("night"));
    fireflies.classList.add("night");
  } else {
    markers.forEach((marker) => marker.classList.remove("night"));
    hands.forEach((hand) => hand.classList.remove("night"));
    displays.forEach((display) => display.classList.remove("night"));
    fireflies.classList.remove("night");
  }

}


function removeTransitionOff() {
    minuteHand.classList.remove("transition-off");
    hourHand.classList.remove("transition-off");
}

function adjustToD() {
  const day = document.querySelector("#day");
  const sunset = document.querySelector("#sunset");
  const night = document.querySelector("#night");
  const current = document.querySelector("#current");

  if (day.checked) {
    fireflies.classList.remove("night");
    displays.forEach((display) => display.classList.remove("night"));
    gradients.style.transition = "none";
    gradients.classList.remove("sunset");
    gradients.classList.remove("night");
    gradients.classList.add("day");
  } else if (sunset.checked) {
    fireflies.classList.remove("night");
    displays.forEach((display) => display.classList.add("night"));
    gradients.style.transition = "none";
    gradients.classList.remove("day");
    gradients.classList.remove("night");
    gradients.classList.add("sunset");
  } else if (night.checked) {
    fireflies.classList.add("night");
    displays.forEach((display) => display.classList.add("night"));
    gradients.style.transition = "none";
    gradients.classList.remove("day");
    gradients.classList.remove("sunset");
    gradients.classList.add("night");
  } else {
    setClock();
  }
}

window.addEventListener("load", setClock);
setInterval(tick, 1000);
setTimeout(removeTransitionOff, 5000);

timeOfDay.forEach((tod) => tod.addEventListener("click", adjustToD));