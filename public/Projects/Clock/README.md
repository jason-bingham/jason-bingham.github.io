# Dynamic Clock Project

This project was inpired by [WesBos' Javascript 30](https://courses.wesbos.com/account/access/63985b7440307fbbde58a022/view/194130581). 
I also applied a lot of what I learned from [Kevin Powell's theme switcher video](https://www.youtube.com/watch?v=fyuao3G-2qg).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The project

A clock with a background that slowly changes throughout the day and night, as well as toggles for users to quickly see what it looks like at different times of day. 

Sunset and sunrise are currently tuned to Minas Gerais, Brazil, in December.

### Screenshot

- [Current Time](./screenshots/currentTime.png)
- [Midday](./screenshots/midday.png)
- [Sunset/Sunrise](./screenshots/sunsetSunrise.png)
- [Night](./screenshots/night.png)
- [Mobile Current Time](./screenshots/mobileCurrentTime.png)
- [Mobile Midday](./screenshots/mobileMidday.png)
- [Mobile Sunset/Sunrise](./screenshots/mobileSunsetSunrise.png)
- [Mobile Night](./screenshots/mobileNight.png)

### Links

- [Live Site](https://jason-bingham.github.io/WesBos/Clock/index.html)

## My process

### Built with

- Vanilla HTML
  - Tried to write semantically, but need to add more accessibility.
- Vanilla CSS
- Vanilla Javascript

### What I learned

I ran into a number of challenges while building this, but probably the most challenging was getting all the transitions in sync and dynamically changing their durations depending on user actions. Asynchronicity violated some of my assumptions about how the code should work, so I had to adapt a bit, and I'm still not sure I understand the best way to deal with it ("transitionend" has worked pretty well so far).

### Continued development

1. Adjust sunset and sunrise to reflect local conditions.

2. Add timer/alarm function.

3. Add stars at night.

## Author

- Website - [Jason Bingham](https://jason-bingham.github.io)
- Frontend Mentor - [@jbingham223](https://www.frontendmentor.io/profile/jbingham223)
- Codepen - [@Jason-Bingham](https://codepen.io/Jason-Bingham)
