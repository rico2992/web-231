"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Rico Isaac
      Date: October 2, 2024

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

// Function to copy the shipping address to the billing address
function copyShippingToBilling() {
  //Check if the useShip checkbox is checked
  if (useShip.checked) {
    // Copy values from the shipping address fields to the billing address fields
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

    // Copy the state selection from shipping to billing
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

// Declare formElements variable to store input fields of type 'text'
let formElements = document.querySelectorAll("input[type='text']");

// Declare fieldCount variable equal to the number of text fields
let fieldCount = formElements.length;

// Declare errorBox variable to reference the element with the id 'errorBox'
let errorBox = document.getElementById("errorBox");

// For loop to iterate through each form element and apply an event listener
for (let i = 0; i < fieldCount; i++) {
  // Add an event listener  to call showValidationError when an invalid event is triggered
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function show validation errors
function showValidationError(evt) {
  // Prevent the default browser behavior for invalid input
  evt.preventDefault();

  // Display the error message in the errorBox
  errorBox.textContent = "Complete all highlighted fields";
}