"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000); //3 check this one

// Creating a countdown function (step 4) which will have
// steps 5-11
function countdown() {
  let nowVar = new Date(); //5
  currentTime.textContent = nowVar.toLocaleString(); //6

  let newYear = new Date(2024, 0, 1); //7

  let nextYear = nowVar.getFullYear() + 1; //8

  newYear.setFullYear(nextYear); //9

  // Doing the calculations for days, hours, minutes, and seconds, step 10.

  let daysLeft = (newYear - nowVar) / (1000 * 60 * 60 * 24);
  let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
  let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

  daysLeftBox.textContent = Math.floor(daysLeft);
  hrsLeftBox.textContent = Math.floor(hrsLeft);
  minsLeftBox.textContent = Math.floor(minsLeft);
  secsLeftBox.textContent = Math.floor(secsLeft);
}
