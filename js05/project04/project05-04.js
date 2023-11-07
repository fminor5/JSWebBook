"use strict";
/*    
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++) {
  phrases[i].onclick = function () {
    // 4
    let phrase = document.createElement("h1");
    phrase.textContent = this.textContent;

    // 5
    let footnote = document.createElement("p");
    footnote.textContent = footnotes[i];
    footnote.style = "font-style: italic; font-size: 1.2em";

    // 6
    let closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.value = "Close Footnote";
    closeButton.style = "display: block; margin: 10px auto";

    // 7
    let popup = window.open(
      "",
      "footnote",
      "width=300, height=200, top=10px left=10px"
    );

    // 8
    popup.document.body.style =
      "background-color: ivory; font-size: 16px; padding: 10px";

    // 9
    popup.document.body.appendChild(phrase);
    popup.document.body.appendChild(footnote);
    popup.document.body.appendChild(closeButton);

    // 10
    closeButton.onclick = function () {
      popup.close();
    };
  };
}
