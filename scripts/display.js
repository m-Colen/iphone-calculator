/***
Display module
***/

export const Display = {
  logKey(event) {
    const key = event.key;
    return key;
  },
  // Adds input number(s) to a new array
  logInput(inputNumber, array) {
    // Removes zero when entering new num
    if (array[0] === 0) {
      array.shift();
    }
    array.push(parseFloat(inputNumber));
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

/* CJS Export for node.js testing */
// module.exports = Display;
