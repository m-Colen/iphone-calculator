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

// Updates calc display
const updateDisplay = (displayElem, value) => {
  displayElem.innerHTML = value;
};

/*** 
Event listeners
***/

// Reads key action
const keyActions = (key) => {
  if (currentArray.length >= 7) {
    currentArray.shift();
  }
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
      key = parseInt(key);
      currentArray = Display.logInput(key, currentArray);
      currentValue = Display.joinInput(currentArray);
      updateDisplay(display, currentValue);
      break;
    case "/":
    case "*":
    case "-":
    case "+":
      firstNum = Display.joinInput(currentArray);
      currentOperator = key;
      currentArray = Display.clearDisplay(currentArray);
      updateDisplay(display, key);
      break;
    case "clear":
      currentArray = Display.clearDisplay(currentArray);
      currentValue = Display.joinInput(currentArray);
      updateDisplay(display, currentValue);
      break;
    case "negative":
      let toggled = Calculate.toggleNegative(currentValue);
      currentValue = toggled;
      currentArray = [currentValue];
      updateDisplay(display, currentValue);
      break;
    case "percent":
      currentArray = [Calculate.convertPercent(currentValue)];
      currentValue = Display.joinInput(currentArray);
      updateDisplay(display, currentValue);
      break;
    case "=":
      currentValue = Calculate.result(firstNum, currentOperator, currentValue);
      currentArray = [currentValue];
      updateDisplay(display, currentValue);
      break;
    case ".":
      currentArray = Calculate.addDecimal(currentArray);
      currentValue = Display.joinInput(currentArray);
      display.innerHTML = `${currentValue}.`;
  }
};

// Click listener
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let key = e.target.value;
    keyActions(key);
  });
});

// Key listener
window.addEventListener("keyup", (e) => {
  let key = e.key;
  keyActions(key);
});
