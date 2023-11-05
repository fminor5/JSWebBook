"use strict";
/*    
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article

      Filename: project05-03.js
*/

// Declaring variables.
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
  if (n.nodeName === heading) {
    let anchor = document.createElement("a");
    //     working on 6.b
  } else {
  }
}
