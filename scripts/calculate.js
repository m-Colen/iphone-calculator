/*****
Functions to perform basic calculations
*****/

const Calculate = {
  // Add method
  add(num1, num2) {
    return num1 + num2;
  },
  // Subtract method
  subtract(num1, num2) {
    return num1 - num2;
  },
  // Multiply method
  multiply(num1, num2) {
    return num1 * num2;
  },
  // Divide method
  divide(num1, num2) {
    return num1 / num2;
  },
  // Toggle negative
  toggleNegative(value) {
    value *= -1;
    return value;
  },
  // Convert to percent
  convertPercent(value) {
    let newValue = value / 100;
    return newValue;
  },
};

/* CJS Export for Node.js testing */
module.exports = Calculate;
