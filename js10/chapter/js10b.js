"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House Directions

    Filename: js10b.js
*/

// Function to set up and display the Oak Top House Map
function initMap() {
  // Page objects
  let displayMap = document.getElementById("displayMap");
  let routeBox = document.getElementById("routeBox");
}
// Set up and display the Oak Top House Map
let map = L.map(displayMap).setView([39.96118, -82.99879], 13);

L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([39.96118, -82.99879])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();
