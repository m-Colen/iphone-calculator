/***
Display module
***/

export const Display = {
  // Adds input number(s) to a new array
  logInput(inputNumber, array, elem) {
    array.push(inputNumber);
    elem.innerHTML = "C";
    return array;
  },
  joinInput(array) {
    let joined = array.join("");
    joined = parseFloat(joined);
    return joined;
  },
  clearDisplay(array, elem) {
    array = [0];
    elem.innerHTML = "AC";
    return array;
  },
  fontSizeMonitor(displayElem, value) {
    // New font size
    let newFontSize;
    // Size reduction factor
    let sizeReduction = 0;
    if (value <= 100000) {
      newFontSize = 4.1;
    } else if (value > 100000 && value <= 10000000) {
      newFontSize = 3.1;
    } else if ((value > 10000000) & (value <= 100000000000)) {
      newFontSize = 2.5;
    } else {
      newFontSize = 1.45;
    }

    displayElem.style.fontSize = `${newFontSize}rem`;
  },
};

/* CJS Export for node.js testing */
// module.exports = Display;
