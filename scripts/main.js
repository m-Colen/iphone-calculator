/***** 
Calculator | main JS script 
*****/

/***
Imports 
***/

/* 
CJS imports for testing in Node 
*/

// Import calculate.js
const Calculate = require("./scripts/calculate.js");
// Imports display.js
const Display = require("./scripts/display.js");

/* 
ES imports 
*/

// import { Calculate } from "./calculate.js";
// import { Display } from "./display.js";

// Current value(s) for display
let currentValue = [];

// Numeric buttons
const numericButtons = document.querySelectorAll(".numeric > button");
// Display
const display = document.querySelector(".calc-display");

/*
 * Adds event listener to each numeric button
 * If display length is less than 8:
 * Calls the logInput method to add the value of the button to the currentValue array
 * Calls the joinInput method to return a string of all of the logged array values
 */
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.innerHTML.length < 8) {
      display.innerHTML = Display.joinInput(
        Display.logInput(button.value, currentValue)
      );
    } else {
      currentValue.shift();
      display.innerHTML = Display.joinInput(
        Display.logInput(button.value, currentValue)
      );
    }
  });
});

// Clear button
const clearButton = document.querySelector(".clear");

/*
 * Calls clearDisplay() on clear button click
 * Sets display innerHTML to new array containing [0]
 */

clearButton.addEventListener("click", () => {
  currentValue = Display.clearDisplay(currentValue);
  display.innerHTML = Display.joinInput(currentValue);
});
