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

// Numeric buttons
const numericButtons = document.querySelectorAll(".numeric > button");
// Calculator display
let display = document.querySelector(".calc-display");

// Current value(s) for display
let currentArray = [];
let currentValue = 0;

numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentArray.length >= 7) {
      currentArray.shift();
    }
    currentArray = Display.logInput(button.value, currentArray);
    currentValue = Display.joinInput(currentArray);
    display.innerHTML = currentValue;
  });
});

// Clear button
const clearButton = document.querySelector(".clear");

/*
 * Calls clearDisplay() on clear button click
 * Sets display innerHTML to new array containing [0]
 */

clearButton.addEventListener("click", () => {
  currentArray = Display.clearDisplay(currentArray);
  currentValue = Display.joinInput(currentArray);
  display.innerHTML = currentValue;
});

// Toggle negative/positive button
const negToggleButton = document.querySelector(".negative");

/*
 * Toggles the display value from neg/pos || pos/neg
 */

negToggleButton.addEventListener("click", () => {
  currentValue = Calculate.toggleNegative(currentValue);
  display.innerHTML = currentValue;
});

// Convert to percent button
const percentageButton = document.querySelector(".percent");

/*
 * Converts the display value to a percentage
 */

percentageButton.addEventListener("click", () => {
  currentValue = Calculate.convertPercent(currentValue);
  display.innerHTML = currentValue;
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
    firstNum = currentValue;
    currentOperator = button.value;
    currentArray = Display.clearDisplay(currentArray);
    currentValue = Display.joinInput(currentArray);
    display.innerHTML = currentOperator;
  });
});

// Equal button
const equalButton = document.querySelector(".equals");

equalButton.addEventListener("click", () => {
  currentValue = Calculate.result(firstNum, currentOperator, currentValue);
  display.innerHTML = currentValue;
});
