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
};

/* CJS Export for Node.js testing */
module.exports = Calculate;
