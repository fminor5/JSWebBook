"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu

      Filename: project12-01.js
*/

// s3
$(() => {
  // s4
  $("li.submenu")
    .mouseover((e) => {
      $(e.currentTarget).children("ul").show();
    })
    .mouseout((e) => {
      $(e.currentTarget).children("ul").hide();
    });
});
