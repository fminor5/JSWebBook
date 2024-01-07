"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

//s3 Running the showData function once the submitButton is clicked.
document.getElementById("submitButton").onclick = showData;

//s4 Creating the showData function
function showData() {
  //s4a Storing the riderName
  sessionStorage.setItem("riderName", riderName.value);
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value);
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);
  //s4c changing the value of location.href
  location.href = "project09-02b.html";
}
