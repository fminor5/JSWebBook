"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function () {
  //s3a Checking if document.cookie exist.
  if (document.cookie) {
    //s3b Updating the bestText object
    bestText.textContent = getBestTime() + " seconds";
  }
});

//s4 Creating the getBestTime function
function getBestTime() {
  //s4a
  if (document.cookie) {
    //s4ai split the document.cookie string
    let cookieArray = document.cookie.split("=");
    //s4aii converting the value to an integer
    return parseInt(cookieArray[1]);
  } else {
    //s4b return value 9999
    return 9999;
  }
}

//s5 Ceating the updateRecord function
function updateRecord() {
  //s5a Storing the timer id on solutionTime
  let solutionTime = parseInt(document.getElementById("timer").value);
  //s5b storing the value returned from getBestTime under bestTime.
  let bestTime = getBestTime();
  //s5c
  if (solutionTime < bestTime) {
    bestTime = solutionTime;
  }
  //s5d
  bestText.textContent = bestTime + " seconds";
  //s5e
  document.cookie = "puzzle8Best" + bestTime + "maxage =" + 60 * 60 * 24 * 90;
}
