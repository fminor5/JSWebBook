"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House

    Filename: js10a.js
*/

window.addEventListener("load", setupRoom);

// perform setup tasks when page first loads
function setupRoom() {
  //Page objects
  let room = document.getElementById("room"); // banquet hall
  let storage = document.getElementsByTagName("storage"); // storage room
  let roomTables = document.querySelectorAll("#room > div.table"); // Tables in the banquet hall
  let storageTables = document.querySelectorAll("#storage > div.table"); // Tables in the storage room
  let zIndexCounter = 0; // Count the highest z-Index value
  let startingX, startingY; // initial pointer coordinates
  let tableX, tableY; // initial table coordinates

  // Function to calculate available seats in the room layout
  function countSeats() {
    let guests = 0;
    let seatCount = document.getElementById("seatCount");
    let tablesToCount = document.querySelectorAll("#room > div.table");
    for (let items of tablesToCount) {
      guests += parseInt(items.textContent);
    }
    seatCount.textContent = guests;
  }

  // Add tables from storage to the banquet hall
  for (let items of storageTables) {
    items.onclick = function () {
      let storageCopy = items.cloneNode(true);
      room.appendChild(storageCopy);

      // Increasing the value of zIndexCounter
      zIndexCounter++;
      storageCopy.style.zIndex = zIndexCounter;

      // Count the number of seats in the room
      countSeats();

      // Grab the table in response to the pointerdown event
      storageCopy.addEventListener("pointerdown", grabTable);

      // Grab a table from the banquet hall
      function grabTable(e) {
        if (e.shiftKey) {
          // Remove the table from the room
          e.target.parentElement.removeChild(e.target);
          countSeats();
        } else {
          // Store the pointer's initial position
          startingX = e.clientX;
          startingY = e.clientY;
          // Disabling touch actions
          e.target.style.touchAction = "none";
          // Display the table on top of other page objects
          zIndexCounter++;
          e.target.style.zIndex = zIndexCounter;
          // Store the table's initial position
          tableX = e.target.offsetLeft;
          tableY = e.target.offsetTop;
          // Adding event listeners to the table
          e.target.addEventListener("pointermove", moveTable);
          e.target.addEventListener("pointerup", dropTable);
        }
      }

      // Move the table along with the pointer
      function moveTable(e) {
        // Determine the pointer's current position
        let currentX = e.clientX;
        let currentY = e.clientY;
        // Calculate the distance the pointer traveled horizontally and vertically
        let deltaX = currentX - startingX;
        let deltaY = currentY - startingY;
        // Move the table the same distance as the pointer
        e.target.style.left = tableX + deltaX + "px";
        e.target.style.top = tableY + deltaY + "px";
      }

      // Drop the table onto the banquet hall
      function dropTable(e) {
        // After the table is dropped we are removing the event listeners so the table no longer moves with the pointer.
        e.target.removeEventListerner("pointermove", moveTable);
        e.target.removeEventListerner("pointerup", dropTable);
      }
    };
  }
}
