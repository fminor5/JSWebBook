"use strict";
/*    
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information

      Filename: project06-03.js
*/

// Declaring variable
let useShip = document.getElementById("useShip");

// Event listener
useShip.addEventListener("click", copyShippingToBilling);

// Function
function copyShippingToBilling() {
  if (useShip.checked) {
    firstnameBill.value = firstnameShip.value;
    lastnameBill.value = lastnameShip.value;
    address1Bill.value = address1Ship.value;
    address2Bill.value = address2Ship.value;
    cityBill.value = cityShip.value;
    countryBill.value = countryShip.value;
    codeBill.value = codeShip.value;

    stateBill.selectedIndex = stateShip.selectedIndex;
  }
}

// Declaring variables
let formElements = document.querySelectorAll('input[type="text"]');
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for (let i = 0; i < formElements.length; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
