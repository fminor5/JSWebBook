"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(min, sec) {
  //S3
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

//S4
Timer.prototype.runPause = function (minBox, secBox) {
  //S5
  if (this.timeID) {
    window.clearInterval(this.timeID);
    this.timeID = null;
  } else {
    this.timeID = window.setInterval(countdown(), 1000);
    //     Timer.timeID = setInterval(); // check this one
  }

  //S6
  function countdown() {
    //s6a
    if (this.seconds > 0) {
      this.seconds--;
    } else if (this.minutes > 0) {
      //s6b
      this.minutes--;
      this.seconds = 59;
    } else {
      //s6c
      window.clearInterval(this.timeID);
      this.timeID = null;
    }
    //s6d
    minBox.value = this.minutes;
    secBox.value = this.seconds;
  }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
//S7
let myTimer = new Timer(minBox.value, secBox.value);

//S8
minBox.onchange = function () {
  myTimer.minutes = minBox.value;
};
secBox.onchange = function () {
  myTimer.seconds = secBox.value;
};

//S9
runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
