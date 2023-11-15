"use strict";
/*    
      Chapter 6
      Chapter case

      Order Form Code

      Filename: js06a.js
 */

window.addEventListener("load", function () {
  let orderForm = document.forms.orderForm;
  let model = orderForm.elements.model;

  // Select Model selection list when form opens
  model.focus();

  // Calculate the cost of the order
  calcOrder();

  function calcOrder() {
    // Determine the elected model
    let mIndex = model.selectedIndex;
    let mValue = model.options[mIndex].value;

    // Determine the selected quantity
    let qIndex = orderForm.elements.qty.selectedIndex;
    let quantity = orderForm.elements.qty[qIndex].value;

    // Model cost = model cost times quantity
    let modelCost = mValue * quantity;
    orderForm.elements.modelCost.value = modelCost;
  }
});
