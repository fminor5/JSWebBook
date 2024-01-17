"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-02

      Project to create a drag and drop tangram puzzle

      Filename: project10-02.js
*/

// Reference to the tangram puzzle board
let puzzleBoard = document.getElementById("puzzle");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
let eventX, eventY, tanX, tanY;

// Node list representing the tangram pieces
let tans = document.querySelectorAll("div#puzzle > img");

// Function to rotate a tan by a specified number of degrees
function rotateTan(elem, deg) {
  const obj = window.getComputedStyle(elem, null);
  const matrix = obj.getPropertyValue("transform");
  let angle = 0;
  if (matrix !== "none") {
    const values = matrix.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];
    angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }

  if (angle < 0) {
    angle += 360;
  }

  let newAngle = angle + deg;

  elem.style.transform = "rotate(" + newAngle + "deg)";
}

//s3 Using a for-loop to iterate through all the items in the tans list.
for (let i = 0; i < tans.length; i++) {
  tans[i].addEventListener("pointerdown", grabTan);
}

//s4 Creating the grabTan function
function grabTan(e) {
  //s4a If shift key is pressed call the rotateTan fucntion
  if (e.shiftKey) {
    rotateTan(e.target, 15);
  } else {
    //s4b Storing the values of clients X and Y into the events X and Y
    //Storing the pointer's initial position
    eventX = e.clientX;
    eventY = e.clientY;
    //s4b
    e.target.style.touchAction = "none";
    //s4b increasing the value of zCounter by 1
    zCounter++;
    //s4b applying the zIndex to the style e target
    e.target.style.zIndex = zCounter;

    //No in the instructions
    //Storing the piece inital position
    eventX = e.target.offsetLeft;
    eventY = e.target.offsetTop;
    //s4c
    e.target.addEventListener("pointermove", moveTan);
    e.target.addEventListener("pointerup", dropTan);
  }
}

//s5 Creating the moveTan function
function moveTan(e) {
  //Calculate the distance the pointer travelled horizontally and vertically
  let diffX = e.clientX - eventX;
  let diffY = e.clientY - eventY;
  //Move the piece the same distance as the pointer.
  e.target.style.left = eventX + diffX + "px";
  e.target.style.top = eventY + diffY + "px";
}

//s6 Creating the dropTan function
function dropTan(e) {
  e.target.removeEventListener("pointermove", moveTan);
  e.target.removeEventListener("pointerup", dropTan);
}
