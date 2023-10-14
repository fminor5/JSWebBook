/*    
      Chapter 3
      Project 03-01

      Application to calculate total order cost

      Filename: project03-01.js
*/
let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal() {
  let orderTotal = 0;
  for (let i = 0; i < menuItems.length; i++) {
    // apply an if statement that tests whether the item has been checked. If true,
    // increase the value of the orderTotal variable
    // for this one you do not need to use === true the conditional does that for you.
    if (menuItems[i].checked) {
      // remember to use the .value so the prices are available
      orderTotal += Number(menuItems[i].value);
    }
  }
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
