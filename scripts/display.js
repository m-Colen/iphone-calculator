/*****
Module for calculator display functions
*****/

export const Display = {
  // Adds input number(s) to a new array
  logInput(inputNumber, array) {
    // Removes zero when entering new num
    if (array[0] === 0) {
      array.shift();
    }
    array.push(inputNumber);
    return array;
  },
  joinInput(array) {
    let joined = array.join("");
    joined = parseFloat(joined);
    return joined;
  },
  clearDisplay(array) {
    array = [0];
    return array;
  },
};

/* CJS Export for Node.js testing */
// module.exports = Display;
