"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File

      Filename: project08-04.js
*/

let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function () {
  // Retrieve information about the selected file
  let JSONfile = this.files[0];

  // Read the contents of the selected file
  let fr = new FileReader();
  fr.readAsText(JSONfile);

  // Once the file has finished loading, parse the JSON file
  fr.onload = function () {
    //s3a Converting JSON data
    let staff = JSON.parse(fr.result);
    //s3b Calling the makeStaffTable
    makeStaffTable(staff);
  };
};

function makeStaffTable(staff) {
  let staffTable = document.createElement("table");
  let headerRow = document.createElement("tr");

  //s5 using a for-in to iterate the object
  for (let prop in staff.directory[0]) {
    //s5a Creating a th element
    let headerCell = document.createElement("th");
    //s5b Storing the prop in headerCell *******Check this one
    headerCell.textContent = prop;
    //s5c appending the headerCell to header row
    headerRow.appendChild(headerCell);
  }

  //s5d Appending header row to staffTable
  staffTable.append(headerRow);

  //s6 Using a for-loop to iterate through the items of staff.directory
  for (let i = 0; i < staff.directory.length; i++) {
    //s6a Creating a tr element
    let tableRow = document.createElement("tr");
    //s6b Using a for-in loop for each property on the staff.directory
    for (let prop in staff.directory[i]) {
      //s6b1 Creating an element td
      let tableCell = document.createElement("td");
      //s6b2  Storing the value of staff.directory
      tableCell.textContent = staff.directory[i][prop];
      //s6b3 Appending tableCell to tableRow
      tableRow.append(tableCell);
    }
    //s6c Appeding tableRow to staffTable
    staffTable.append(tableRow);
  }

  //s7 Appending staffTable to containerBox
  containerBox.appendChild(staffTable);
}
