"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop

    Filename: project10-04.js
*/

// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

//s3 Using a loop to iterate through all the contents of pieces.
for (let piece of pieces) {
  //s3a Setting the value of piece draggable to true.
  piece.draggable = true;
  //s3b
  piece.ondragstart = function (e) {
    e.dataTransfer.setData("text", piece.id);
  };
}

//s4 Using a loop to iterate through all the items of the boardSquares
for (let bsquare of boardSquares) {
  //s5
  bsquare.ondragover = function (e) {
    e.preventDefault();
  };
  //s6
  bsquare.ondrop = function (e) {
    //s7
    e.preventDefault();
    //s8
    let pieceID = e.dataTransfer.getData("text");
    //s9
    let movingPiece = document.getElementById(pieceID);
    //s10
    if (e.target.tagName === "TD") {
      e.target.appendChild(movingPiece);
    } else if (e.target.tagName === "SPAN") {
      //s11a
      let occupyingPiece = e.target;
      //s11b
      let square = occupyingPiece.parentElement;
      //s11c
      square.appendChild(movingPiece);
      //s11d
      if (occupyingPiece.className === "white") {
        whiteBox.appendChild(occupyingPiece);
      } else {
        blackBox.appendChild(occupyingPiece);
      }
    }
  };
}
