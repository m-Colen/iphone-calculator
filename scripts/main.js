/***** 
Calculator | main JS script 
*****/

/*****
Imports
*****/

/* CJS imports for testing in Node */

// // Import calculate.js
// const Calculate = require("./scripts/calculate.js");
// // Imports display.js
// const Display = require("./scripts/display.js");

/* ES imports */
import { Calculate } from "./calculate.js";
import { Display } from "./display.js";

// Current value
let currentValue = [];

// Numeric buttons

const numericButtons = document.querySelectorAll(".numeric > button");

numericButtons.forEach((button) => {
  addEventListener("click", () => {
    const display = document.querySelector(".calc-display");
    display.innerHTML = Display.joinInput(
      Display.logInput(button.value, currentValue)
    );
  });
});
