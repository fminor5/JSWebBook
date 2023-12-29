"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/
//s3 Creating a literal object with and empty array
let cart = {
  items: [],
  addItem: function (foodItem) {
    this.items.push(foodItem);
  },
};

//s4 Creating a constructor function Pizza
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

//s5 Creating a constructor function Topping
function Topping(name, side) {
  this.name;
  this.crust;
}

//s6 Adding the addToCart() method to the Pizza prototype.
Pizza.prototype.addToCart = function (cart) {
  cart.items.push(this);
};

//s7 Adding the summarize() method to the Pizza prototype.
Pizza.prototype.summarize = function () {
  //s7a Adding a variable
  let summary = "Pizza";
  //s7b adding the values
  summary = this.size + " " + this.crust;
  //s7c Running a for-loop and for each topping we add the name and sice.
  for (let i = 0; i < this.toppings.length; i++) {
    summary = this.toppings[i].name;
    summary = this.toppings[i].side;
  }
  //s7d Returning the value
  return summary;
};

/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox"); // pizza image
let pizzaSizeBox = document.getElementById("pizzaSize"); // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust"); // pizza crust selection
let toppingOptions = document.querySelectorAll("input.topping"); // pizza topping option buttons
let addToCart = document.getElementById("addToCart"); // Add to Cart button
let cartBox = document.getElementById("cart"); // Shopping cart box

// Add event handlers for the pizza toppings
for (let i = 0; i < toppingOptions.length; i++) {
  toppingOptions[i].onclick = drawPizza;
}

// Event Handler for the addToCart button
addToCart.onclick = updateCart;

// Clear the pizza image
function clearPizzaImage() {
  while (pizzaPreviewBox.firstChild) {
    pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
  }
}

// Unselect all toppings
function clearToppings() {
  let noTopping = document.querySelectorAll("input.topping[value='none']");
  for (let i = 0; i < noTopping.length; i++) {
    noTopping[i].checked = true;
  }
}

/* Function to draw the pizza image  */
function drawPizza() {
  // Erase current pizza image
  clearPizzaImage();
  // Determine which toppings have been checked
  let checkedToppings = document.querySelectorAll("input.topping:checked");

  // Draw the individual toppings
  for (let i = 0; i < checkedToppings.length; i++) {
    if (checkedToppings[i].value !== "none") {
      let toppingImage = document.createElement("img");
      toppingImage.src = checkedToppings[i].name + ".png";
      toppingImage.className = checkedToppings[i].value;
      pizzaPreviewBox.appendChild(toppingImage);
    }
  }
}

// Function to build the pizza
function buildPizza() {
  let checkedToppings = document.querySelectorAll("input.topping:checked");
}

// Function to add the built pizza to the shopping cart
function updateCart() {
  //s9a Runninng the buildPizza function and storing it in a variable
  let myPizza = buildPizza();
  //s9b Applying the addItem to the cart object
  cart.addItem(myPizza);
  //s9c
  console.log(cart);
  //s9d
  let parForSummary = document.createElement("p");
  parForSummary.textContent = myPizza.summarize();
  cartBox.appendChild(parForSummary);
  //s9e Resetting the page
  clearPizzaImage();
  clearToppings();
}
