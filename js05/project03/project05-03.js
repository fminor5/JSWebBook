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
    // 6.b
    anchor.value = "doclink" + headingCount;
    // 6.c
    n.insertBefore(anchor, n.firstElementChild);
    // 6.d
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    listItem.appendChild(link);
    // 6.e
    link.textContent = n.textContent; // check this
    // 6.f
    listItem.href = "#doclink" + headingCount; // check this
    // 6.g
    toc.appendChild(listItem);
    // 6.h
    headingCount++;
  }
}
