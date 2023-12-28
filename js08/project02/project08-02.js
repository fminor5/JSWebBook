"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800; // width of the container in pixels

/*--------------- Object Code --------------------*/
//S3 Creating an object named box.
let box = {
  width: BOX_WIDTH,
  height: BOX_HEIGHT,
  xPos: 0,
  yPos: 0,
};

//S4 Creating a constructor function class named Ball
function Ball(size) {
  this.radius = size;
  this.xPos = null;
  this.yPos = null;
  this.xVelocity = null;
  this.yVelocity = null;
}

//S5 Method moveWithin
Ball.prototype.moveWithin = function (container) {
  //s5a
  let ballTop = this.yPos;
  let ballLeft = this.xPos;
  //s5b
  let ballBottom = this.yPos + this.radius;
  let ballRight = this.xPos + this.radius;
  //s5c
  if (ballTop < 0 || ballBottom > container.height) {
    container.yPos += this.yVelocity;
    this.yVelocity = -this.yVelocity;
  }
  //s5d
  if (ballLeft < 0 || ballRight > container.width) {
    container.xPos += this.xVelocity;
    this.xVelocity = -this.xVelocity;
  }

  //s5e
  this.yPos += this.yVelocity;
  this.xPos += this.xVelocity;
};

/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
console.log(boxImage);
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px";

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function () {
  let ballImage = document.createElement("div");
  ballImage.className = "ball";
  ballImage.style.width = BALL_RADIUS + "px";
  ballImage.style.left = (BOX_WIDTH - BALL_RADIUS) / 2 + "px";
  ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS) / 2 + "px";

  // Append the ball image to the box
  boxImage.appendChild(ballImage);

  //S7 Creating an instance of the ball object
  //s7a
  let newBall = new Ball(BALL_RADIUS);
  //s7b
  newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
  newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
  //s7c
  newBall = rand(-10, 10);

  //S8 Animating the motion of newBall
  window.setInterval(function () {
    //s8a Appliying the moveWithin method to newBall
    newBall.moveWithin(box);
    //s8b Moving the image of the ball
    ballImage.style.top = newBall.yPos + "px";
    ballImage.style.left = newBall.xPos + "px";
    //s8c Shaking the image of the ball
    boxImage.style.top = box.yPos + "px";
    boxImage.style.left = box.xPos + "px";
  }, 250);
};

/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
  let size = maxVal - minVal + 1;
  return minVal + size * Math.random();
}
