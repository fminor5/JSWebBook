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
Timer.prototype.runPause = function (Timer, minBox, secBox) {
  //S5
  if (Timer.timeID) {
    window.clearInterval(Timer.timeID);
    Timer.timeID = null;
  } else {
    Timer.timeID = window.setInterval(countdown, 1000);
    //     Timer.timeID = setInterval(); // check Timer one
  }

  //S6
  function countdown() {
    //s6a
    if (Timer.seconds > 0) {
      Timer.seconds--;
    } else if (Timer.minutes > 0) {
      //s6b
      Timer.minutes--;
      Timer.seconds = 59;
    } else {
      //s6c
      window.clearInterval(Timer.timeID);
      Timer.timeID = null;
    }
    //s6d
    minBox.value = Timer.minutes;
    secBox.value = Timer.seconds;
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
