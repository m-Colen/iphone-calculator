/***
Calculate module
***/

export const Calculate = {
  // Converts a value to percent and returns new value
  convertPercent(value) {
    let newValue = value / 100;
    return newValue;
  },
  // Adds decimal point
  addDecimal(array) {
    if (!array.includes(".")) {
      array.push(".");
      return array;
    } else {
      return array;
    }
  },
  // Result
  result(num1, operator, num2) {
    switch (operator) {
      case "/":
        return num1 / num2;
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
    }
  },
};

/* CJS Export for node.js testing */
// module.exports = Calculate;
