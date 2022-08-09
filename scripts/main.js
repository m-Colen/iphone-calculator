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
// const Calculate = require("./scripts/calculate.js");
// Imports display.js
// const Display = require("./scripts/display.js");

/* 
ES imports 
*/

import { Calculate } from "./calculate.js";
import { Display } from "./display.js";

// Current value(s) for display
let currentValue = [];

// Numeric buttons
const numericButtons = document.querySelectorAll(".numeric > button");
// Display
const display = document.querySelector(".calc-display");

/*
 * Adds event listener to each numeric button
 * If display length is less than 7:
 * Calls the logInput method to add the value of the button to the currentValue array
 * Calls the joinInput method to return a string of all of the logged array values
 */
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ensures that the display length doesn't impact calculator styling
    if (display.innerHTML.length < 7) {
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

// Toggle negative/positive button
const negToggleButton = document.querySelector(".negative");

/*
 * Toggles the display value from neg/pos || pos/neg
 */

negToggleButton.addEventListener("click", () => {
  let toggledValue = Calculate.toggleNegative(display.innerHTML);
  display.innerHTML = toggledValue;
});

// Convert to percent button
const percentageButton = document.querySelector(".percent");

/*
 * Converts the display value to a percentage
 */

percentageButton.addEventListener("click", () => {
  let percentageValue = Calculate.convertPercent(display.innerHTML);
  display.innerHTML = percentageValue;
});

// Operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// First number
let firstNum;
// Current operator
let currentOperator;

//
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    firstNum = parseFloat(Display.joinInput(currentValue));
    currentOperator = button.value;
    currentValue = Display.clearDisplay(currentValue);
    display.innerHTML = currentOperator;
  });
});

// Equal button
const equalButton = document.querySelector(".equals");

equalButton.addEventListener("click", () => {
  let result = Calculate.result(
    firstNum,
    currentOperator,
    parseFloat(Display.joinInput(currentValue))
  );
  display.innerHTML = result;
});
