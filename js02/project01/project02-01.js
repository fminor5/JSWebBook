/*    
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter   

      Filename: project02-01.js
 */

function fahrenheitToCelsius(degree) {
  // by using the parameter for the calculation we didn't need a variable
  return (degree - 32) / 1.8;
}

function celsiusToFahrenheit(degree) {
  return degree * 1.8 + 32;
}

document.getElementById("cValue").onchange = function () {
  let cDegree = document.getElementById("cValue").value;
  //   we pass the returned value from the function directly to the value for the fValue id.
  //   Set the value of the element with the id “fValue” to the value returned by the CelsiusToFarenheit()
  // function using cDegree as the parameter value.
  document.getElementById("fValue").value = celsiusToFahrenheit(cDegree);
  //   let fValue = celsiusToFahrenheit(cDegree);
  //   return fValue;
};

document.getElementById("fValue").onchange = function () {
  let fDegree = document.getElementById("fValue").value;
  document.getElementById("cValue").value = fahrenheitToCelsius(fDegree);
  //   let cValue = fahrenheitToCelsius(fDegree);
  //   return cValue;
};
