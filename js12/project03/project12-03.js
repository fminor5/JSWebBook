"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content

      Filename: project12-03.js
*/

// s3
$(() => {
  // s3
  $("article > h2").click((e) => {
    //s4a
    let heading = $(e.target);
    //s4b
    let list = $(heading).next();
    //s4c
    let headingImage = $(heading).children("img");
    //s5
    $(list).slideToggle(500);
    //s6
    if ($(headingImage).attr("src") === "plus.png") {
      $(headingImage).attr("src", "minus.png");
    } else {
      $(headingImage).attr("src", "plus.png");
    }
  });
});
