/*
      Chapter 2
      Project 02-02

      Application to test for completed form
      
      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  name && email && phone
    ? window.alert("Thank you")
    : window.alert("Please fill in all fields");
}

document.getElementById("btnsubmit").onclick = verifyForm;
