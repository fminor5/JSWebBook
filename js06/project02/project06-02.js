"use strict";
/*    
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links

      Filename: project06-02.js
*/

document.addEventListener("load", function () {
  let allSelect = document.querySelectorAll("form#govLinks select"); // 4 needs to be checked

  for (let i = 0; i < allSelect.length; i++) {
    // 5
    allSelect[i].onchange = function (evt) {
      //5a
      let linkURL = evt.target.value; //5b

      let newWin = window.open(linkURL); // 5c
    };
  }
});
