/***** 
Calculator 
*****/

/* 
Updating display value 
*/

// Calculator display element
const display = document.querySelector(".calc-display");

// Func to update the display value on key entry
const updateValue = (button) => {
  /* 
  Sets limit on size of calculation so
  display doesn't get messed up 
  */
  if (display.innerHTML.length < 7) {
    if (typeof display.value === "undefined" || display.value === 0) {
      display.value = button.value;
    } else {
      display.value += button.value;
      currentValue = display.value;
    }
  }
  displayValue();
};

// Func to display the value in the DOM
const displayValue = () => (display.innerHTML = display.value);

// Adds event listener for each numeric button to call updateValue()
const numericButtons = document.querySelectorAll(".numeric > button");
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateValue(button);
  });
});

/* 
Operations 
*/

// Set up
let currentOperator;
let currentValue;
let newValue;

// Sets operator based on selected button value
const setOperator = (button) => {
  currentOperator = button.value;
};

// Sets current value
const setCurrentVal = () => {
  currentValue = display.value;
  display.value = 0;
  display.innerHTML = currentValue;
};

// Selects all operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// Highlights the selected operator button when clicked & removes highlight from other operators
const highlightButton = (button) => {
  operatorButtons.forEach((button) => button.classList.remove("highlight"));
  button.classList.toggle("highlight");
};

// Adds event listener for each operator button to call highlightButton() & setOperator()
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => highlightButton(button));
  button.addEventListener("click", () => setOperator(button));
  button.addEventListener("click", () => setCurrentVal());
});

const equalButton = document.querySelector(".equals");

equalButton.addEventListener("click", () => {
  calculate(currentOperator);
  displayValue();
});

// Selects all non-operator buttons
const nonOperatorButtons = document.querySelectorAll(
  ".topbar > button, .numeric > button"
);

// Removes operator button highlight when non-operator button is selected
const removeButtonHighlight = () => {
  operatorButtons.forEach((button) => {
    button.classList.remove("highlight");
  });
};

// Adds event listener for each non-operator button to call removeButtonHighlight()
nonOperatorButtons.forEach((button) => {
  button.addEventListener("click", removeButtonHighlight);
});

/* 
Toggling negative/positive value 
*/

// Toggles negative/positive on display value
const negativeToggle = () => {
  display.value *= -1;
  displayValue();
};

// Adds event listener for negative button to call negativeToggle()
const negativeButton = document.querySelector(".negative");
negativeButton.addEventListener("click", negativeToggle);

/* 
Getting percentage of current value 
*/

// Converts the diplay number to %
const getPercent = () => {
  display.value /= 100;
  displayValue();
};

// Adds event listener to percentage button to call getPercent()
const percentageButton = document.querySelector(".percent");
percentageButton.addEventListener("click", getPercent);

/* 
Converting to decimal
*/

const decimalButton = document.querySelector(".decimal");

const convertToDecimal = () => {
  if (!display.value.includes(".")) {
    currentValue = parseFloat(`${display.value}.`);
    display.value = `${display.value}.`;
  }
  displayValue();
};

decimalButton.addEventListener("click", convertToDecimal);

/* 
Clearing display 
*/

const clearButton = document.querySelector(".clear");

// Clears diplay
const clearDisplay = () => {
  display.value = 0;
  displayValue();
};

// Adds event listener to clear button to call clearDisplay()
clearButton.addEventListener("click", clearDisplay);

const calculate = (operator) => {
  currentValue = parseFloat(currentValue);
  console.log(currentValue);
  newValue = parseFloat(display.value);
  console.log(newValue);
  switch (operator) {
    case "/":
      display.value = currentValue / newValue;
      break;
    case "*":
      display.value = currentValue * newValue;
      break;
    case "-":
      display.value = currentValue - newValue;
      break;
    default:
      display.value = currentValue + newValue;
  }
};

const updateWithKeys = (key) => {
  /* 
  Sets limit on size of calculation so
  display doesn't get messed up 
  */
  if (display.innerHTML.length < 7) {
    if (typeof display.value === "undefined" || display.value === 0) {
      display.value = parseFloat(key);
    } else {
      display.value += parseFloat(key);
      currentValue = display.value;
    }
  }
  displayValue();
};

document.addEventListener("keyup", (event) => {
  let key = event.key;
  updateWithKeys(key);
  displayValue();
});
