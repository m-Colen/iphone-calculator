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
  displayLengthMonitor(array, displayElem) {
    let sizeReduction;
    if (array.length < 9) {
      sizeReduction = array.length * 0.1;
    } else {
      sizeReduction = array.length * 0.1355;
    }
    let newFontSize = 4.1 - sizeReduction;
    if (newFontSize < 1.45) {
      newFontSize = 1.45;
    }
    displayElem.style.fontSize = `${newFontSize}rem`;
  },
};

/* CJS Export for node.js testing */
// module.exports = Display;
