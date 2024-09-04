/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Rico Isaac
      Date: September 04, 2024

      Filename: project03-01.js
*/
//  Declaring the variable to store all menu items with the class "menItem"
let menuItems = document.getElementsByClassName("menuItem")

// Loop through the menuItems collection and add an event listener to each item
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
      calcTotal(); // Run the calcTotal function when clicked
    });
  }

  // Function to calculate the total order cost
  function calcTotal() {
    //Declare the orderTotal variable and set its initial value to 0
    let orderTotal = 0;
    //Create a loop to iterate through the menuItems collection
    for (let i = 0; i < menuItems.length; i++) {
      // check if the menu item is checked
      if (menuItems[i].checked) {
        // If checked, add the value of the menu item to the orderTotal
        // Use the Number() function to ensure the value is treated as a number
        orderTotal += Number(menuItems[i].value);
      }
    }

    // Update the innerHTML of the element with id "billTotal"
    // Use the formatCurrency function to display the orderTotal as a currency value
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
  }

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }