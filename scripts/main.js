/***
Imports
***/

/* CJS imports for node.js testing */
// const Calculate = require("./scripts/calculate.js");
// const Display = require("./scripts/display.js");

/* ES imports */
import { Calculate } from "./calculate.js";
import { Display } from "./display.js";

/***
Buttons
***/

// Numeric buttons
const numericButtons = document.querySelectorAll(".numeric > button");
// Clear button
const clearButton = document.querySelector(".clear");
// Toggle negative/positive button
const negToggleButton = document.querySelector(".negative");
// Percent button
const percentageButton = document.querySelector(".percent");
// Operator buttons
const operatorButtons = document.querySelectorAll(".operator");
// Equal button
const equalButton = document.querySelector(".equals");
// Calculator display
let display = document.querySelector(".calc-display");

/***
Global variables 
***/

// Current value(s) for calc display
let currentArray = [];
let currentValue = 0;
// Variable for storing first value during calculation
let firstNum;
// Current operator
let currentOperator;

const updateDisplay = () => {
  currentValue = Display.joinInput(currentArray);
  display.innerHTML = currentValue;
};

// Sets 'click' event listener for numeric keys
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentArray.length >= 7) {
      currentArray.shift();
    }
    currentArray = Display.logInput(button.value, currentArray);
    updateDisplay();
  });
});

// Sets 'click' event listener for clear button
clearButton.addEventListener("click", () => {
  currentArray = Display.clearDisplay(currentArray);
  updateDisplay();
});

// Sets 'click' event listener for negative toggle button
negToggleButton.addEventListener("click", () => {
  currentValue = Calculate.toggleNegative(currentValue);
  display.innerHTML = currentValue;
});

// Sets 'click' event listener for percent button
percentageButton.addEventListener("click", () => {
  currentValue = Calculate.convertPercent(currentValue);
  display.innerHTML = currentValue;
});

// Sets 'click' event listener for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    firstNum = currentValue;
    currentOperator = button.value;
    currentArray = Display.clearDisplay(currentArray);
    currentValue = Display.joinInput(currentArray);
    display.innerHTML = currentOperator;
  });
});

// Sets 'click' event listener for equal button
equalButton.addEventListener("click", () => {
  currentValue = Calculate.result(firstNum, currentOperator, currentValue);
  display.innerHTML = currentValue;
});
