"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-04

      Project to retrieve UV index and other solar information for user's current position
      Filename: project11-04.js
*/

// Table Objects
let latCell = document.getElementById("lat");
let lngCell = document.getElementById("lng");
let uvIndexCell = document.getElementById("uvIndex");
let uvMaxCell = document.getElementById("uvMax");
let ozoneCell = document.getElementById("ozone");
let st1Cell = document.getElementById("st1");
let st2Cell = document.getElementById("st2");
let st3Cell = document.getElementById("st3");
let st4Cell = document.getElementById("st4");
let st5Cell = document.getElementById("st5");
let st6Cell = document.getElementById("st6");

// Get the device's current position
navigator.geolocation.getCurrentPosition(getLocation, handleError);

function getLocation(pos) {
  let myPosition = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  };
  console.log(myPosition.lat);
  console.log(myPosition.lng);
  //s5
  let url = "https://api.openuv.io/api/v1/uv";
  let key = "yourKey";
  //s6
  fetch(`${url}?lat=${myPosition.lat}&lng=${myPosition.lng}`, {
    //s7a
    method: "GET",
    //s7b
    headers: { "x-access-token": key },
  })
    //s8
    .then((response) => response.json())
    //s9
    .then((json) => showSunSafety(json, myPosition))
    //s10
    .catch((error) => console.log(error));
}

function showSunSafety(json, myPosition) {
  console.log(myPosition);
  //s11a
  latCell.textContent = myPosition.lat;
  lngCell.textContent = myPosition.lng;
  //s11b
  uvIndexCell.textContent = json.result.uv;
  uvMaxCell.textContent = json.result.uv_max;
  ozoneCell.textContent = json.result.ozone;
  //s11c
  st1Cell.textContent = json.result.safe_exposure_time.st1;
  st2Cell.textContent = json.result.safe_exposure_time.st2;
  st3Cell.textContent = json.result.safe_exposure_time.st3;
  st4Cell.textContent = json.result.safe_exposure_time.st4;
  st5Cell.textContent = json.result.safe_exposure_time.st5;
  st6Cell.textContent = json.result.safe_exposure_time.st6;
}

function handleError() {
  alert("Unable to get your location");
}
