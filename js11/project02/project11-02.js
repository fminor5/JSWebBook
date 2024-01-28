"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  //3a
  let codeValue = postalCode.value;
  let countryValue = country.value;
  //3b
  place.value = "";
  region.value = "";
  //4c
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    //4d
    .then((response) => response.json())
    //4e
    .then((json) => {
      place.value = json.places[0]["place name"];
      region.value = json.places[0]["state abbreviation"];
      console.log(json);
    })
    //4f
    .catch((error) => console.log(error));
};
