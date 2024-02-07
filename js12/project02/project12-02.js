"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit

      Filename: project12-02.js
*/

$(() => {
  // s3
  $("input#cValue").change((e) => {
    // s3a
    let celsius = $(e.target).val();
    // s3b
    let fahrenheit = 1.8 * celsius + 32;
    // s3c
    $("input#fValue").val(fahrenheit.toFixed(0));
  });

  // s4
  $("input#fValue").change((e) => {
    // s4a
    let fahrenheit = $(e.target).val();
    // s4b
    let celsius = (fahrenheit - 32) / 1.8;
    // s4c
    $("input#cValue").val(celsius.toFixed(0));
  });
});
