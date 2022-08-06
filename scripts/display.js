/*****
Functions to make display work
*****/

export const Display = {
  logInput(inputNumber, array) {
    array.push(inputNumber);
    return array;
  },
  joinInput(array) {
    const joined = array.join("");
    return joined;
  },
};

/* CJS Export for Node testing */
// module.exports = Display;
