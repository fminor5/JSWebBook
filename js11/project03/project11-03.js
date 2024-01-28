"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      Filename: project11-03.js
*/

let orderResult = document.getElementById("orderResult");
let userIDBox = document.getElementById("userID");
let pwdBox = document.getElementById("pwd");

// Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function () {
  //5a
  let user = userIDBox.value;
  let pwd = pwdBox;
  //5b
  fetch(`wworders.pl?id=${user}&pwd=${pwd}`)
    //5c
    .then((response) => response.json())
    //5d
    .then((json) => buildOrderTable(json))
    //5e
    .catch((error) => console.log(error));
};

// Function to display order history within web tables
function buildOrderTable(obj) {
  //6
  if (obj.status === "Orders No Found") {
    orderResult.innerHTML = "No orders found for this user id and password";
  } else {
    //7
    let htmlCode = `<table id="summary"><tr><th>Name</th><td>${obj.username}</td>`;
    htmlCode += `<tr><th>Total Charges</th><td>${obj.totalCharges}</td></tr></table>`;
    //8
    for (const history of obj.orderHistory) {
      //8a
      htmlCode += `<table class="orderList"><tr><th colspan="2">${history.orderDate}</th>`;
      htmlCode += `<th colspan="2">${history.orderCost}</th></tr><tr><th>Description</th>`;
      htmlCode += `<th>Qty</th><th>Price</th><th>Total</th></tr>`;
      //8b
      for (const product of history.products) {
        htmlCode += `<tr><td>${product.description}</td><td>${product.qty}</td><td>${product.price}</td>`;
        htmlCode += `<td>${product.total}</td></tr>`;
      }
      //8c
      htmlCode += "</table>";
    }
    //9
    orderResult.innerHTML(htmlCode);
  }
}
