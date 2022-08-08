/*****
Functions to make display work
*****/

const Display = {
  logInput(inputNumber, array) {
    if (array[0] === 0) {
      array.shift();
    }
    array.push(inputNumber);
    return array;
  },
  joinInput(array) {
    const joined = array.join("");
    return joined;
  },
  clearDisplay(array) {
    array = [0];
    return array;
  },
};

/* CJS Export for Node.js testing */
module.exports = Display;