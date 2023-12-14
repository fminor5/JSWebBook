"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue

      Filename: project07-04.js
*/

let customers = [
  "Alisha Jordan",
  "Kurt Cunningham",
  "Ricardo Lopez",
  "Chanda Rao",
  "Kevin Grant",
  "Thomas Bey",
  "Elizabeth Anderson",
  "Shirley Falk",
  "David Babin",
  "Arthur Blanding",
  "Brian Vick",
  "Jaime Aguilar",
  "Eileen Rios",
  "Gail Watts",
  "Margaret Wolfe",
  "Kathleen Newman",
  "Jason Searl",
  "Stephen Gross",
  "Robin Steinfeldt",
  "Jacob Bricker",
  "Gene Bearden",
  "Charles Sorensen",
  "John Hilton",
  "David Johnson",
  "Wesley Cho",
];
console.log(customers);

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let statusM = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
  customerList.innerHTML = "";
  for (let i = 0; i < customers.length; i++) {
    let customerItem = document.createElement("li");
    customerItem.textContent = customers[i];
    customerList.appendChild(customerItem);
  }
}

// Adding a customer to the end of the array.
addButton.onclick = function () {
  customers.push(customerName.value); //3a
  generateCustomerList(); //3b
  statusM.textContent = `${customerName.value} added to the end of the queue`; //3c
};

// Adding the functionality to the search button.
searchButton.onclick = function () {
  let place = customers.indexOf(customerName.value) + 1; //4a

  if (place === 0) {
    //4b
    statusM.textContent = `${customerName.value} is not found in the queue`;
  } else {
    statusM.textContent = `${customerName.value} found in position ${place} of the queue.`;
  }
};

// Adding the functionality for the remove button.
removeButton.onclick = function () {
  let index = customers.indexOf(customerName.value); //5a

  if (index != -1) {
    customers.splice(index, 1); //5bi
    statusM.textContent = `${customerName.value} removed from the queue.`; //5bii
    generateCustomerList();
  } else {
    statusM.textContent = `${customerName.value} is not found in the queue.`; //5biii
  }
};

// Adding functionality for the topButton
topButton.onclick = function () {
  let topCustomer = customers.shift(); //6a
  statusM.textContent = `${topCustomer} from the queue.`;
  generateCustomerList();
};
