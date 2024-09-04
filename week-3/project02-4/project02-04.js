/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Rico Isaac
      Date: August 28, 2024

      Filename: project02-04.js
 */


//  Declare constants for menu item prices and sales tax

const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

//  Add an event listener to the window object that calls the calcTotal function when the page is loaded
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

function calcTotal() {
  let cost = 0;

  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  if (buyChicken) {
    cost += CHICKEN_PRICE;
  }
  if (buyHalibut) {
    cost += HALIBUT_PRICE;
  }
  if (buyBurger) {
    cost += BURGER_PRICE;
  }
  if (buySalmon) {
    cost += SALMON_PRICE;
  }
  if (buySalad) {
    cost += SALAD_PRICE;
  }

  // Set the innerHTML of foodTotal to the formatted cost
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculate the sales tax and declare tax variable
  let tax = cost * SALES_TAX;

  // Set the innerHTML of with the id "foodTax" to the value returned by the formatCurrency function using tax as the parameter value
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Declare the totalCost variable and set it to the sum of cost and tax
  let totalCost = cost + tax;

  //  Set the innerHTML property for the element with the id "totalBill" to the value returned by the formatCurrency function using totalCost as the parameter value
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
