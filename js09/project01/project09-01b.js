"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string

      Filename: project09-01b.js
*/

//s4 Using slice on the location.search and storing it on query
let query = location.search.slice(1);
console.log(query);

//s5 Replacing + with a blanck space and applying the decodeURI
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);
console.log(query);

//s6 Applying the split method to split the text on every & char
let cardFields = query.split(/\&/g);
console.log(cardFields);

//s7 Using a for-of loop to loop through each item on the cardFields array
for (let items of cardFields) {
  //s7a Splitting each items on every =
  let nameValue = items.split(/=/);
  //s7b Storing the first of nameValue item on name
  let name = nameValue[0];
  //s7b Storing the second item of nameValue on value
  let value = nameValue[1];

  //s7c Storing the value in the document element with an id equal to name variable
  document.getElementById(name).textContent = value;
}
