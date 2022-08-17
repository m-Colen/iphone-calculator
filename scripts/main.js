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

/***
Global variables 
***/

// Current value(s) for calc display
let currentArray = [];
let currentValue = 0;
// Variable for storing numbers during calculation
let firstNum;
let secondNum;
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
  currentArray = Display.clearDisplay(currentArray);
};

const monitorDisplayLength = () => {
  // Shifts sizing of calc display based on entry length
  if (currentArray.length <= 6) {
    display.style.fontSize = "4.1rem";
  } else if (currentArray.length > 6 && currentArray.length < 10) {
    display.style.fontSize = "3rem";
  } else if (currentArray.length >= 10 && currentArray.length < 15) {
    display.style.fontSize = "2.2rem";
  } else {
    display.style.fontSize = "1.5rem";
  }
  // Resets font size when the length reaches the 1e+ size
  if (display.innerHTML.includes("e")) {
    display.style.fontSize = "4.1rem";
  }
};

/*** 
Event listeners
***/

// Reads key action
const keyActions = (key) => {
  console.log("KEY-PRESSED:", key);
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
      console.log("NEW NUMBER LOGGED");
      key = parseInt(key); // Converts input to number
      let newArray = Display.logInput(key, currentArray);
      currentArray = newArray;
      updateCurrentValue();
      updateDisplay(display, currentValue);
      console.log("NEW NUMBER: currentArray", currentArray);
      console.log("NEW NUMBER: currentValue:", currentValue);
      break;
    case "/":
    case "*":
    case "-":
    case "+":
      firstNum = Display.joinInput(currentArray);
      console.log("OPERATOR: firstNum:", firstNum);
      currentOperator = key;
      clearArray();
      console.log("OPERATOR: currentArray", currentArray);
      updateCurrentValue();
      updateDisplay(display, key);
      console.log("OPERATOR: currentValue", currentValue);
      break;
    case "delete":
      clearArray();
      updateCurrentValue();
      updateDisplay(display, currentValue);
      break;
    case "negative":
      currentArray[0] === "-"
        ? currentArray.shift()
        : currentArray.unshift("-");
      updateCurrentValue();
      updateDisplay(display, currentValue);
      console.log("NEGATIVE: currentArray", currentArray);
      console.log("NEGATIVE: currentValue", currentValue);
      break;
    case "%":
      currentArray = [Calculate.convertPercent(currentValue)];
      updateCurrentValue();
      updateDisplay(display, currentValue);
      break;
    case "enter":
      currentArray = [
        Calculate.result(firstNum, currentOperator, currentValue),
      ];
      console.log("RESULT - CURRENT ARRAY:", currentArray);
      updateCurrentValue();
      console.log("RESULT - CURRENT VALUE:", currentValue);
      updateDisplay(display, currentValue);
    case ".":
      currentArray = Calculate.addDecimal(currentArray);
      updateCurrentValue();
  }
  monitorDisplayLength();
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
window.addEventListener("keydown", (e) => {
  // Prevents Firefox's 'quick find' shortcut
  if (e.key === "/") {
    e.preventDefault();
  }
  let key = e.key;
  key = key.toLowerCase();
  keyActions(key);
});
