"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

//s3 Creating an if statement
if (localStorage.sbloggerVisit) {
  //s4 Storing sbloggerVisit value on storedLastDate
  let storedLastDate = localStorage.getItem("sbloggerVisit");
  //s5 Displaying the storedLastDate content on lastVisitDate
  lastVisitDate.textContent = storedLastDate;
  //s6 Declaring lastDate and using the Date object and the value of storedLastDate
  let lastDate = new Date(storedLastDate);
  //s7 Using a for-loop to iterate through the articleDates
  for (let item of articleDates) {
    //s7a Declaring the articleDate variable and storing within it
    // the text of the current item in the loop.
    let articleDate = new Date(item.textContent);
    //s7b Using a if statement to check is articleDate is greater then lastDate
    // if so we are creating a strong element on the HTML page.
    if (articleDate > lastDate) {
      item.innerHTML += "<strong>new</strong>";
    }
  }
}
//s8 if sbloggerVisit doesn't exist
else {
  //s8a Changing the text on lastVisitDate
  lastVisitDate.textContent = "Welcome to SBlogger!";
  //s8b Using a for-of loop to add strong element to current date item.
  for (let item of articleDates) {
    item.innerHTML += "<strong>new</strong>";
  }
}

//s9 This code updates the stored value in the sbloggerVisit key
//s9a Creating the currentDate variable and within it we are storing
// the date object that contains the following date.
let currentDate = new Date("9/12/2024");
//s9b Applying the toLocateDateSring method to currentDate and we
// are storing the date string in sbloggerVisit.
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
