/***
Imports
***/

/* CJS imports for node.js testing */
// const Calculate = require("./scripts/calculate.js");
// const Display = require("./scripts/display.js");

/* ES imports */
import { Calculate } from "./calculate.js";
import { Display } from "./display.js";

// Calculator display
let display = document.querySelector(".calc-display");
// All buttons
const allButtons = document.querySelectorAll("button");
// All icons
const allIcons = document.querySelectorAll("i");
// Clear button
const clearButton = document.querySelector(".clear");

/***
Global variables 
***/

// Current value(s) for calc display
let currentArray = [];
let currentValue = 0;
// Variable for storing numbers during calculation
let firstNum;
// Current operator
let currentOperator;

// Updates calc display
const updateDisplay = (elem, value) => {
  elem.innerHTML = value;
};

// Updates current value
const updateCurrentValue = () => {
  currentValue = Display.joinInput(currentArray);
};

// Clears display
const clearArray = () => {
  currentArray = Display.clearDisplay(currentArray, clearButton);
};

/*** 
Event listeners
***/

// Reads key action
const keyActions = (key) => {
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      // Converts input to number
      key = parseInt(key);
      // Adds input numbers to an array
      currentArray = Display.logInput(key, currentArray);
      // Pulls a single number from all of the array elements
      updateCurrentValue();
      // Sets calc display to current value
      updateDisplay(display, currentValue);
      clearButton.innerHTML = "C";
      break;

    case "/":
    case "*":
    case "-":
    case "+":
      firstNum = currentValue;
      currentOperator = key;
      clearArray();
      updateCurrentValue();
      updateDisplay(display, key);
      break;

    case "delete":
      clearArray();
      updateCurrentValue();
      clearButton.innerHTML = "AC";
      updateDisplay(display, currentValue);
      break;

    case "negative":
      currentArray[0] === "-"
        ? currentArray.shift()
        : currentArray.unshift("-");
      updateCurrentValue();
      updateDisplay(display, currentValue);
      break;

    case "%":
      currentArray = [Calculate.convertPercent(currentValue)];
      updateCurrentValue();
      updateDisplay(display, currentValue);
      display.innerHTML = currentValue.toFixed(2);
      break;

    case "enter":
      currentArray = [
        Calculate.result(firstNum, currentOperator, currentValue),
      ];
      updateCurrentValue();
      updateDisplay(display, currentValue);
      display.innerHTML = currentValue.toFixed(2);
      break;

    case ".":
      currentArray = Calculate.addDecimal(currentArray);
      updateCurrentValue();
      updateDisplay(display, currentValue);
  }
  display.style.fontSize = `${Display.reduceFontSize(currentValue)}rem`;
};

// Click listener for buttons
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let key = e.target.value;
    keyActions(key);
  });
});

// Click listener for icons
allIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    // Allows icons to be clicked and assigns the value of the parent (button)
    let key = e.target.parentNode.value;
    keyActions(key);
  });
});

// Key listener
window.addEventListener("keyup", (e) => {
  let key = e.key;
  key = key.toLowerCase();
  keyActions(key);
});

// Key listener
window.addEventListener("keydown", (e) => {
  // Prevents Firefox's 'quick find' shortcut
  if (e.key === "/") {
    e.preventDefault();
  }
});
