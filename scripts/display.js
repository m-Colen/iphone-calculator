/***
Display module
***/

export const Display = {
  // Adds input number(s) to a new array
  logInput(inputNumber, array) {
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
  reduceFontSize(value) {
    let newFontSize;
    if (value <= 100000) {
      newFontSize = 4.1;
    } else if (value > 100000 && value <= 10000000) {
      newFontSize = 3.1;
    } else if ((value > 10000000) & (value <= 100000000000)) {
      newFontSize = 2.3;
    } else {
      newFontSize = 1.2;
    }
    return newFontSize;
  }
};

/* CJS Export for node.js testing */
// module.exports = Display;
